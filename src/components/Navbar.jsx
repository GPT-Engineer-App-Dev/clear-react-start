import { Box, Flex, Link, Spacer, Text } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Box bg="teal.500" px={4} py={2} color="white">
      <Flex align="center">
        <Text fontSize="xl" fontWeight="bold">
          MyApp
        </Text>
        <Spacer />
        <Link as={RouterLink} to="/" px={2}>
          Home
        </Link>
        <Link as={RouterLink} to="/about" px={2}>
          About
        </Link>
      </Flex>
    </Box>
  );
};

export default Navbar;