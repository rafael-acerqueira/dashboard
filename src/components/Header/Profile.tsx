import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface ProfileProps {
  showProfileData: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr={4} textAlign="right">
          <Text>Rafael Aquino</Text>
          <Text
            color="gray.300"
            fontSize="small"
          >
            contato@rafaelaquino.net
          </Text>
        </Box>
      )}

      <Avatar size="md" name="Rafael Aquino" src="https://github.com/rafael-acerqueira.png"/>
    </Flex>
  )
}