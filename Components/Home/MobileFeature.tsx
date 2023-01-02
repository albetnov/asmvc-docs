import {Flex} from "@chakra-ui/react";
import featuresList from "./featuresList";

const features = featuresList();

export default function MobileFeature() {
    return <Flex mt={10} display={{base: "flex", xl: "none"}} flexDir="column" gap={10}>
        {features}
    </Flex>
}