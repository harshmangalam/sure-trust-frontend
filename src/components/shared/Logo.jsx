import { Link } from "react-router-dom";
import { HStack, Image, Heading, Text, VStack } from "@chakra-ui/react";

function Logo() {
  return (
    <Link to="/">
      <HStack spacing={2}>
        <Image
          src="https://img1.wsimg.com/isteam/ip/6f038646-2052-4598-8c4e-ed7fea8124d5/SURE%20INITIATIVE%20LOGO.png/:/rs=h:200,cg:true,m/qt=q:95"
          alt="Sure Trust"
          w={16}
        />
        <VStack
          spacing={0}
          align="start"
          display={{ base: "none", md: "block" }}
        >
          <Heading size="md">SURE Trust</Heading>
          <Text fontSize={"sm"}>Social Service Inititative</Text>
        </VStack>
      </HStack>
    </Link>
  );
}

export default Logo;
