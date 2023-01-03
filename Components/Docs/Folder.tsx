import {ListIcon, ListItem} from "@chakra-ui/react";
import {AiFillFolder} from "react-icons/ai";
import {PropsWithChildren} from "react";

export default function Folder({children}: PropsWithChildren) {
    return (
        <ListItem>
            <ListIcon as={AiFillFolder}/>
            {children}
        </ListItem>
    )
}