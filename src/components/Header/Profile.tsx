import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr={4} textAlign="right">
        <Text>Rafael Aquino</Text>
        <Text
          color="gray.300"
          fontSize="small"
        >
          contato@rafaelaquino.net
        </Text>
      </Box>

      <Avatar size="md" name="Rafael Aquino" src="https://github.com/rafael-acerqueira.png"/>
    </Flex>
  )
}