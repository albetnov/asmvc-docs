import fs from "fs";
import {JSDOM} from "jsdom";
import {GetServerSideProps} from "next";
import {SearchResult} from "./SearchModel";

function getAllFile(folderPath: string, filePaths: string[] = []) {
    try {
        // Read the contents of the folder
        const files = fs.readdirSync(folderPath);

        // Iterate over the files in the folder
        for (let file of files) {
            const filePath = `${folderPath}/${file}`;
            // Check if the file is a directory
            const stats = fs.statSync(filePath);
            if (stats.isDirectory()) {
                // If it is a directory, recursively scan it
                getAllFile(filePath, filePaths);
            } else {
                // If it's a file, add the file path to the filePaths array
                // While ensuring that search won't be added.
                if (!filePath.includes("search")) {
                    filePaths.push(filePath);
                }
            }
        }
    } catch (err) {
        console.error(`Error scanning folder ${folderPath}: ${err}`);
    }
    return filePaths;
}

interface FileInterface {
    file: string;
    text: string;
}

export function readAllFile(search?: string) {
    const readedFile: FileInterface[] = [];


    for (const file of getAllFile("./pages/docs")) {
        const jsx = fs.readFileSync(file, "utf-8");
        const vdom = new JSDOM(jsx);
        const text = vdom.window.document.querySelector("Layout")?.textContent;
        readedFile.push({
            file: "/" + file
                .split("./pages/")[1]
                .split("/")
                .filter((item) => !item.endsWith(".tsx"))
                .join("/"),
            text: text?.replace(/\s+/g, " ").replace(/{\" \"}/g, "") ?? "Ups, Failed to crawl.",
        });
    }

    if (search) {
        return readedFile.filter((item) => item.text.toLowerCase().includes(search.toLowerCase()));
    }

    return readedFile;
}

export const getServerSideProps: GetServerSideProps<SearchResult> = async ({query}) => {
    const host = process.env.host || "http://localhost:3000";

    const items = readAllFile(Array.isArray(query?.query) ? query.query.join() : query.query);

    return {
        props: {items},
    };
};
