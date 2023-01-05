import {PropsWithChildren} from "react";
import {Box, Button, Code, Text} from "@chakra-ui/react";
import {FiClipboard} from "react-icons/fi";
import {toast} from "../../Utils/toast";

interface CodeOneLineProps {
    text: string;
}

export default function CodeOneLine({text}: CodeOneLineProps) {
    const onCopy = async () => {
        await window.navigator.clipboard.writeText(text);

        toast({
            title: "Copied to clipboard!",
            duration: 5000,
            isClosable: true,
            status: "success",
            position: "top-right"
        });
    }

    return (
        <Code my={5} p={{base: 1, md: 5}} rounded="lg" display="flex" justifyContent="space-between"
              alignItems="center" w="full">
            <Text overflowWrap="break-word">{text}</Text>
            <Button
                onClick={onCopy}
                variant="unstyled">
                <FiClipboard
                    fontSize={20}/>
            </Button>
        </Code>
    )
}