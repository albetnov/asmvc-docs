import {
    Box,
    Button, Card, CardBody, CardHeader,
    Container, Flex,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    InputRightElement, Text,
} from "@chakra-ui/react";
import {FiSearch} from "react-icons/fi";
import Layout from "../../../Components/Layout";
import SearchModel, {SearchResult, getServerSideProps, parseTitle} from "../../../Models/Search/SearchModel";

export default function Search({items}: SearchResult) {
    const {searchItem, searchRef, navigateToFile} = SearchModel();

    return (
        <Layout title="Search Documentation" desc="Search ASMVC Documentation">
            <Container maxW="4xl" my={10} p={10}>
                <Heading textAlign="center" mb={10}>
                    What do you want to search?
                </Heading>
                <form onSubmit={searchItem}>
                    <InputGroup>
                        <InputLeftElement>
                            <FiSearch/>
                        </InputLeftElement>
                        <Input ref={searchRef} type="text"/>
                        <InputRightElement w="4.75rem">
                            <Button size="sm" type="submit">
                                Search
                            </Button>
                        </InputRightElement>
                    </InputGroup>
                </form>
                <Flex flexDir="column" gap={5} mt={10} p={5}>
                    {items ? items.map(item => (
                        <Card
                            key={item.file}
                            w="full"
                            onClick={() => navigateToFile(item.file)}
                            _hover={{
                                cursor: "pointer",
                                shadow: "lg",
                                bg: "gray.600"
                            }}
                            _active={{
                                opacity: 0.8
                            }}
                        >
                            <CardHeader>
                                <Heading
                                    size="lg">{parseTitle(item.file)}</Heading>
                            </CardHeader>
                            <CardBody>
                                <Text>{item.text.length > 500 ? item.text.substring(0, 500) + "..." : item.text}</Text>
                            </CardBody>
                        </Card>
                    )) : <Text>No Items Found.</Text>}
                </Flex>
            </Container>
        </Layout>
    );
}

export {getServerSideProps};
