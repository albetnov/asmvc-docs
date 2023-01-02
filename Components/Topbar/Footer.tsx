import {Box, Link, Text, useColorMode} from "@chakra-ui/react";

export default function Footer() {
    const {colorMode} = useColorMode();

    return (
        <footer>
            <Box p={10} borderTop="1px solid" borderTopColor={colorMode === 'light' ? "gray.300" : "gray.600"} mt={10}>
                <Text textAlign="center">ASMVC - Framework for Joyers -
                    Copyright &copy; {new Date().getFullYear()}</Text>
                <Text textAlign="center">
                    <Link href="https://github.com/albetnov" color="blue.600">
                        Albet Novendo
                    </Link>
                </Text>
            </Box>
        </footer>
    );
}
