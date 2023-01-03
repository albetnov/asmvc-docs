import {Card, CardBody, Link, List, ListIcon, ListItem, Text} from "@chakra-ui/react";
import {BsListNested} from "react-icons/bs";

export interface NavigatorList {
    link: string;
    title: string;
}

interface NavigatorProps {
    title: string;
    lists: NavigatorList[];
}

export default function Navigator({title, lists}: NavigatorProps) {
    return (
        <Card mt={5}>
            <CardBody>
                <Text>{title}</Text>
                <List mt={3}>
                    {lists.map((item) => (
                        <ListItem key={item.link} my={1}>
                            <ListIcon as={BsListNested}/>
                            <Link href={"#" + item.link}>{item.title}</Link>
                        </ListItem>
                    ))}
                </List>
            </CardBody>
        </Card>
    )
}