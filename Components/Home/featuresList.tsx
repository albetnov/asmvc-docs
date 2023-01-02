import {FiGlobe} from "react-icons/fi";
import {Code, Link, Text} from "@chakra-ui/react";
import FeatureCard from "./FeatureCard";
import {TbApi} from "react-icons/tb";
import {BsSafe} from "react-icons/bs"

export default function featuresList() {
    return [
        <FeatureCard
            title="A Brand New Rewritten Routing Engine"
            IconElement={FiGlobe}
            badgeColor="pink.200"
            color="pink"
            body={
                <Text>
                    ASMVC uses{" "}
                    <Link href="https://packagist.org/packages/nikic/fast-route">
                        Nikic/FastRoute
                    </Link>{" "}
                    under the hood, with full rewrite to fully compatible with Nikic/FastRoute.
                    ASMVC also provide a fluent way to create routes.
                </Text>
            }
            key={1}
        />,
        <FeatureCard
            title="Typesafety First!"
            IconElement={BsSafe}
            badgeColor="yellow.200"
            color="yellow"
            body={
                <Text>
                    ASMVC ensure that everything is typed correctly. So you can have fewer bugs or
                    errors when writing using this framework. Possibly, the one that error are the
                    framework xD.
                </Text>
            }
            key={2}
        />,
        <FeatureCard
            IconElement={TbApi}
            title="Restful API Support"
            badgeColor="blue.200"
            color="blue"
            body={
                <Text>
                    ASMVC provides REST interface to easily creates or even consume an Restful API.
                    ASMVC also provides you
                    a <Code>api.php</Code> routes which simply going to take care all of your api
                    routing needs.
                </Text>
            }
            key={3}
        />
    ]
}