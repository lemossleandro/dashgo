import { Stack, Text } from "@chakra-ui/react";
import { RiContactsLine, RiDashboardLine, RiGitMergeLine, RiInputMethodLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SidebarNav() {
  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title="Geral">
        <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
        <NavLink icon={RiContactsLine}>Usuarios</NavLink>
      </NavSection>
      <NavSection title="Automação">
        <Text fontWeight="bold" color="green.400" fontSize="small">Automação</Text>
        <Stack spacing="4" mt="8" align="stretch"></Stack>
        <NavLink icon={RiInputMethodLine}>Formularios</NavLink>
        <NavLink icon={RiGitMergeLine}>Automação</NavLink>
      </NavSection>
    </Stack>
  );
}