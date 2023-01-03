import {PropsWithChildren} from "react";
import {ListIcon, ListItem} from "@chakra-ui/react";
import {AiFillFile} from "react-icons/ai";

export default function File({children}: PropsWithChildren) {
    return (
        <ListItem>
            <ListIcon as={AiFillFile}/>
            {children}
        </ListItem>
    )
}