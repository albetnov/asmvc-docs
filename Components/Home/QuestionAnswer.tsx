import {AccordionButton, AccordionIcon, AccordionItem, AccordionPanel, Box} from "@chakra-ui/react";
import {PropsWithChildren} from "react";

interface QuestionAnswerProps extends PropsWithChildren {
    question: string;
}

export default function QuestionAnswer({question, children}: QuestionAnswerProps) {
    return (
        <AccordionItem>
            <h2>
                <AccordionButton>
                    <Box as="span" flex='1' textAlign='left'>
                        {question}
                    </Box>
                    <AccordionIcon/>
                </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                {children}
            </AccordionPanel>
        </AccordionItem>
    )
}