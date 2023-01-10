import {
  Button,
  Container,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import { FormEvent, useEffect, useRef } from "react";
import { FiSearch } from "react-icons/fi";
import Layout from "../../../Components/Layout";
import { SearchResult, getServerSideProps } from "../../../Models/Search/SearchModel";

export default function Search({ items }: SearchResult) {
  const searchRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (searchRef.current) {
      if (router.query.query) {
        searchRef.current.value = router.query.query as string;
      }
    }
  }, [router.query]);

  const searchItem = (e: FormEvent) => {
    e.preventDefault();

    if (searchRef.current?.value === "") {
      return;
    }

    router.push(`/docs/search?query=${searchRef.current?.value}`);
  };

  return (
    <Layout title="Search Documentation" desc="Search ASMVC Documentation">
      <Container maxW="4xl" my={10} p={10}>
        <Heading textAlign="center" mb={10}>
          What do you want to search?
        </Heading>
        <form onSubmit={searchItem}>
          <InputGroup>
            <InputLeftElement>
              <FiSearch />
            </InputLeftElement>
            <Input ref={searchRef} type="text" />
            <InputRightElement w="4.75rem">
              <Button size="sm" type="submit">
                Search
              </Button>
            </InputRightElement>
          </InputGroup>
        </form>
      </Container>
    </Layout>
  );
}

export { getServerSideProps };
