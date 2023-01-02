import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
} from "@chakra-ui/react";
import { IconType } from "react-icons";

interface FeatureCardProps {
  IconElement: IconType;
  title: string;
  badgeColor: string;
  body: React.ReactNode;
  color: string;
}

export default function FeatureCard({
  IconElement,
  title,
  badgeColor,
  body,
  color,
}: FeatureCardProps) {
  return (
    <Card>
      <CardHeader>
        <Flex alignItems="center" justifyContent="space-between">
          <Heading size="md">{title}</Heading>
          <Box p={3} rounded="lg" bg={badgeColor}>
            <IconElement fontSize={20} color="white" />
          </Box>
        </Flex>
      </CardHeader>
      <CardBody>{body}</CardBody>
      <CardFooter>
        <Button variant="ghost" colorScheme={color}>
          Take a glance
        </Button>
      </CardFooter>
    </Card>
  );
}
