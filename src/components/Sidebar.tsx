import { Box, Stack, Text, Link, Icon } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";


export function Sidebar() {
  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <Box>
          <Text fontWeight="bold" color="green.400" fontSize="small">Geral</Text>
          <Stack spacing="4" mt="8" align="stretch"></Stack>
          <Link display="flex" align="center" >
            <Icon as={RiDashboardLine} fontSize="20" />
            <Text ml="4" fontWeight="medium">Dashboard</Text>
          </Link>
          <Link display="flex" align="center" >
            <Icon as={RiContactsLine} fontSize="20" />
            <Text ml="4" fontWeight="medium">Usuarios</Text>
          </Link>
        </Box>
        {/* Automação */}
        <Box>
          <Text fontWeight="bold" color="green.400" fontSize="small">Automação</Text>
          <Stack spacing="4" mt="8" align="stretch"></Stack>
          <Link display="flex" align="center" >
            <Icon as={RiInputMethodLine} fontSize="20" />
            <Text ml="4" fontWeight="medium">Formularios</Text>
          </Link>
          <Link display="flex" align="center" >
            <Icon as={RiGitMergeLine} fontSize="20" />
            <Text ml="4" fontWeight="medium">Automação</Text>
          </Link>
        </Box>
      </Stack>

    </Box>
  )
}