import NextLink from 'next/link'
import { HStack, Link } from '@chakra-ui/react'

const NavLinks = () => {
  return (
    <HStack spacing="5">
      <NextLink href="/posts" passHref>
        <Link>Posts</Link>
      </NextLink>

      <NextLink href="/works" passHref>
        <Link>Works</Link>
      </NextLink>
    </HStack>
  )
}

export default NavLinks
