import { Flex, Text, Input, Icon, HStack, Box, Avatar } from '@chakra-ui/react'
import { RiNotificationLine, RiUserAddLine } from 'react-icons/ri'

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Text
        fontSize="3xl"
        fontWeight="bold"
        lettterspacing="tight"
        w="64">
        DashGo
        <Text
          as="span"
          ml="1"
          color="pink.500">
          .
        </Text>
      </Text>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxW={400}
        alignSelf="center"
        color="gray.200"
        position="relative"
        bg="gray.800"
        borderRadius="full">
        <Input
          color="gray.50"
          variant="unstyled"
          px="4"
          mr="4"
          placeholder="Pesquisa"
          _placeholder={{ color: "gray.400" }} />
      </Flex>

      <Flex
        align="center"
        ml="auto">
        <HStack
          spacing="8"
          mx="8"
          pr="8"
          py="1"
          color="green.300"
          borderRightRadius={1}
          borderColor='gray.700'>
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserAddLine} fontSize="20" />
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text>Leandro Lemos</Text>
            <Text color="gray.300" fontSize="small">
              lemos.leandro@outlook.com
            </Text>
          </Box>

          <Avatar size="md" name='Leandro Lemos' src='https://github.com/lemossleandro.png' />


        </Flex>
      </Flex>

    </Flex>
  )
}