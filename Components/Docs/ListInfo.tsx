import {Badge, Code, Flex, ListItem, Text} from "@chakra-ui/react";

interface ListInfoProps {
    name: string;
    description: string;
    values?: string[];
}

export default function ListInfo({name, description, values}: ListInfoProps) {
    return (
        <ListItem>
            <Code>{name}</Code>
            <Text>{description}</Text>
            {values && (
                <>
                    <Text>Possible Values:</Text>
                    <Flex gap={3}>
                        {values.map(item => <Badge key={item}>{item}</Badge>)}
                    </Flex>
                </>
            )}
        </ListItem>
    )
}