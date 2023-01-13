import {Alert as ChakraAlert, AlertIcon, AlertProps, AlertTitle} from "@chakra-ui/react";

export default function Alert({status, children}: Pick<AlertProps, "status" | "children">) {
    return (
        <ChakraAlert status={status} rounded="lg" my={3}>
            <AlertIcon/>
            <AlertTitle>
                {children}
            </AlertTitle>
        </ChakraAlert>
    )
}