import { Icon, Link, Text, LinkProps as ChakraProps } from "@chakra-ui/react";
import { ElementType } from "react";
import { RiDashboardLine } from "react-icons/ri";

interface NavLinkProps extends ChakraProps {
  icon: ElementType; //Quando passa o nome {RiDashboardLine} e não a declaração <RiDashboardLine/>
  children: string;
}

export function NavLink({ icon, children, ...rest }: NavLinkProps) {
  return (
    <Link display="flex" align="center" {...rest}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">{children}</Text>
    </Link>
  )
}