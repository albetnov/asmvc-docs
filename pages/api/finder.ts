import {NextApiRequest, NextApiResponse} from "next";
import * as fs from "fs";

interface FinderResponse {
    data: string[];
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<FinderResponse>
) {
    const result = fs.readdirSync("./pages/docs").filter(item => !item.endsWith('.tsx'));
    res.status(200).json({data: result});
}
