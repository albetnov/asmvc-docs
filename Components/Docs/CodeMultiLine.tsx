import {Button, Code, useColorMode} from "@chakra-ui/react";
import {toast} from "../../Utils/toast";
import {FiClipboard} from "react-icons/fi";
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {dracula} from 'react-syntax-highlighter/dist/cjs/styles/prism';
import {duotoneLight} from "react-syntax-highlighter/dist/cjs/styles/prism";

interface CodeMultiLineProps {
    code: string;
    lang?: string;
}

export default function CodeMultiLine({code, lang = "php"}: CodeMultiLineProps) {
    const {colorMode} = useColorMode();

    const onCopy = () => {
        toast({
            title: "Copied to clipboard!",
            duration: 5000,
            isClosable: true,
            status: "success",
            position: "top-right"
        });
        window.navigator.clipboard.writeText(code)
    }

    return (
        <Code p={3} my={5} rounded="lg" position="relative">
            <SyntaxHighlighter language={lang}
                               style={colorMode === 'light' ? duotoneLight : dracula}>{code}</SyntaxHighlighter>
            <Button onClick={onCopy} position="absolute" right={-3} top={1} variant="unstyled"><FiClipboard
                fontSize={20}/></Button>
        </Code>
    )
}