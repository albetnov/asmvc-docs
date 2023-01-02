import {Grid, GridItem} from "@chakra-ui/react";
import {Parallax} from "react-scroll-parallax";
import featuresList from "./featuresList";

const features = featuresList();

export default function DesktopFeature() {

    return <Grid display={{base: "none", xl: "grid"}} templateColumns="1fr 1fr" mt={20} gap={10}>
        <GridItem>
            <Parallax speed={5} translateY={[100, 0]}>
                {features[0]}
            </Parallax>
        </GridItem>
        <GridItem gridColumn={{base: 1, xl: 2}} gridRow={2}>
            <Parallax speed={-10} translateX={[50, 0]}>
                {features[1]}

            </Parallax>
        </GridItem>
        <GridItem gridRow={3}>
            <Parallax speed={-10} translateX={[-50, 0]}
                      rootMargin={{bottom: 100, top: 0, left: 0, right: 0}}>
                {features[2]}
            </Parallax>
        </GridItem>
    </Grid>;
}
