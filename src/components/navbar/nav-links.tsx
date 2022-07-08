import NextLink from 'next/link'
import { useRouter } from 'next/router'
import { HStack, Link, useColorModeValue } from '@chakra-ui/react'

interface NavLinksProps {
  links: { href: string; label: string }[]
}

const NavLinks = ({ links }: NavLinksProps) => {
  const router = useRouter()
  const bg = useColorModeValue('purple.500', 'orange.200')
  const color = useColorModeValue('brand.light', 'gray.900')

  const isActive = (href: string) => {
    return router.pathname === href
  }

  return (
    <HStack spacing="5" display={{ base: 'none', sm: 'flex' }}>
      {links.map(({ href, label }) => (
        <NextLink key={href} href={href} passHref>
          <Link
            bg={isActive(href) ? bg : undefined}
            color={isActive(href) ? color : undefined}
            borderRadius="sm"
            paddingX="5"
            paddingY="1"
          >
            {label}
          </Link>
        </NextLink>
      ))}
    </HStack>
  )
}

export default NavLinks
