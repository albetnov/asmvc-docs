import {PropsWithChildren} from "react";
import {ListIcon, ListItem} from "@chakra-ui/react";
import {AiFillFolderOpen} from "react-icons/ai";

export default function OpenFolder({children}: PropsWithChildren) {
    return (
        <ListItem>
            <ListIcon as={AiFillFolderOpen}/>
            {children}
        </ListItem>
    )
}