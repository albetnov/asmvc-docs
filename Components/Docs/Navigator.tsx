import {Card, CardBody, Link, List, ListIcon, ListItem, Text} from "@chakra-ui/react";
import {BsListNested} from "react-icons/bs";

interface NavigatorList {
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
                    <ListItem>
                        <ListIcon as={BsListNested}/>
                        {lists.map((item) => (
                            <Link href={item.link} key={item.link}>{item.title}</Link>
                        ))}
                    </ListItem>
                </List>
            </CardBody>
        </Card>
    )
}