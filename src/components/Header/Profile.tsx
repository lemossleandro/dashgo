import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Leandro Lemos</Text>
        <Text color="gray.300" fontSize="small">
          lemos.leandro@outlook.com
        </Text>
      </Box>

      <Avatar size="md" name='Leandro Lemos' src='https://github.com/lemossleandro.png' />

    </Flex>
  )
}