import { Flex, Input, Button } from '@chakra-ui/react'

export default function Home() {
  return (
    <Flex
      w="100vw"
      h="100vh"
      alignItems="center"
      justifyContent="center">


      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Input name="email" placeholder="Email" />
        <Input name="password" placeholder="Password" />
        <Button type='submit' mt="6">Entrar</Button>
      </Flex>
    </Flex >

  )
}
