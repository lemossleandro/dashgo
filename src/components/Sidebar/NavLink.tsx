import { Icon, Link as ChakraLink, Text, LinkProps as ChakraProps } from "@chakra-ui/react";
import { ElementType } from "react";
import Link from 'next/link'
import { ActiveLink } from "../ActiveLink";

interface NavLinkProps extends ChakraProps {
  icon: ElementType; //Quando passa o nome {RiDashboardLine} e não a declaração <RiDashboardLine/>
  children: string;
  href: string;
}

export function NavLink({ icon, children, href, ...rest }: NavLinkProps) {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" align="center" {...rest}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">{children}</Text>
      </ChakraLink>
    </ActiveLink>
  )
}