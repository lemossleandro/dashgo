import { Icon, Link, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import { RiDashboardLine } from "react-icons/ri";

interface NavLinkProps {
  icon: ElementType; //Quando passa o nome {RiDashboardLine} e não a declaração <RiDashboardLine/>
  children: string;
}

export function NavLink() {
  return (
    <Link display="flex" align="center" >
      <Icon as={RiDashboardLine} fontSize="20" />
      <Text ml="4" fontWeight="medium">Dashboard</Text>
    </Link>
  )
}