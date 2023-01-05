import {Button, useColorMode} from "@chakra-ui/react";
import {FiMoon, FiSun} from "react-icons/fi";

export default function SwitchMode() {
    const {colorMode, toggleColorMode} = useColorMode();

    return <Button p={3} bg="transparent" rounded="full" onClick={toggleColorMode}>
        {colorMode === "light" ? <FiMoon fontSize={20}/> : <FiSun fontSize={20}/>}
    </Button>;
};