import {PropsWithChildren} from "react";
import {Button, Code, Text} from "@chakra-ui/react";
import {FiClipboard} from "react-icons/fi";
import {toast} from "../../Utils/toast";

interface CodeOneLineProps {
    text: string;
}

export default function CodeOneLine({text}: CodeOneLineProps) {
    const onCopy = () => {
        toast({
            title: "Copied to clipboard!",
            duration: 5000,
            isClosable: true,
            status: "success",
            position: "top-right"
        })
        window.navigator.clipboard.writeText(text)
    }

    return <Code my={5} px={5} py={5} rounded="lg" display="flex" justifyContent="space-between"
                 alignItems="center"><Text>{text}</Text> <Button onClick={onCopy} variant="unstyled"><FiClipboard
        fontSize={20}/></Button></Code>
}