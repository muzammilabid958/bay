import React from "react";

// Chakra imports
import { Flex, useColorMode, useColorModeValue } from "@chakra-ui/react";

// Custom components
import { HorizonLogo, HorizonLogoDark } from "components/icons/Icons";
import { HSeparator } from "components/separator/Separator";

export function SidebarBrand() {
  //   Chakra color mode
  const { colorMode } = useColorMode();
  let logoColor = useColorModeValue("navy.700", "white");

  return (
    <Flex align='center' direction='column'>
      {colorMode === "light" ? (
        <HorizonLogo h='26px' w='175px' my='32px' color={logoColor} />
      ) : (
        <HorizonLogoDark h='26px' w='175px' my='32px'  color={logoColor} />
      )}
      <HSeparator mb='20px' />
    </Flex>
  );
}

export default SidebarBrand;
