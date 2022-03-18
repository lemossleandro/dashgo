import { Box, Button, Checkbox, Flex, Heading, Icon, Table, Tbody, Td, Th, Thead, Tr, useBreakpoint, useBreakpointValue } from "@chakra-ui/react";
import Link from "next/link";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import { Header } from "../../components/Header/Index";
//import { Header } from "../../components/Header";
import { Pagination } from "../../components/Pagination";
import { Sidebar } from "../../components/Sidebar";

export default function UserList() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  })

  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius="8" bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">Usuarios</Heading>
            <Link href="/users/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="pink"
                leftIcon={<Icon as={RiAddLine} fontSize="20" />}
              >
                Criar novo
              </Button>
            </Link>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px={["4", "4", "6"]} color="gray.300" width="8">
                  <Checkbox colorScheme="pink" />
                </Th>
                <Th>Usuario</Th>
                {isWideVersion && <Th>Data Cadastro</Th>}
                <Th></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>
                  <Checkbox px={["4", "4", "6"]} colorScheme="pink" />
                </Td>
                <Td>
                  <Box fontWeight="bold">Leandro Lemos</Box>
                  <Box fontSize="sm" color="gray.300">lemos.leandro@outlook.com</Box>
                </Td>
                {isWideVersion && <Td>08 de Janeiro,2022</Td>}
                {/*  <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    {isWideVersion ? 'Editar' : ''}
                  </Button>
                </Td> 
                */}

              </Tr>
              <Tr>
                <Td>
                  <Checkbox px={["4", "4", "6"]} colorScheme="pink" />
                </Td>
                <Td>
                  <Box fontWeight="bold">Leandro Lemos</Box>
                  <Box fontSize="sm" color="gray.300">lemos.leandro@outlook.com</Box>
                </Td>
                {isWideVersion && <Td>08 de Janeiro,2022</Td>}

                {/* 
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    {isWideVersion ? 'Editar' : ''}
                  </Button>
                </Td>
                */}
              </Tr>
              <Tr>
                <Td>
                  <Checkbox px={["4", "4", "6"]} colorScheme="pink" />
                </Td>
                <Td>
                  <Box fontWeight="bold">Leandro Lemos</Box>
                  <Box fontSize="sm" color="gray.300">lemos.leandro@outlook.com</Box>
                </Td>
                {isWideVersion && <Td>08 de Janeiro,2022</Td>}
                {/*  
               <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} fontSize="16" />}
                  >
                    {isWideVersion ? 'Editar' : ''}
                  </Button>
                </Td>
                */}
              </Tr>
            </Tbody>
          </Table>

          <Pagination />
        </Box>
      </Flex >
    </Box >
  );
}