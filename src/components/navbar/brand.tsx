import NextLink from 'next/link'
import { Heading, HStack, Link } from '@chakra-ui/react'

const Brand = () => {
  return (
    <HStack spacing="2" role="group">
      <Heading
        size="md"
        _groupHover={{ transition: '200ms ease', transform: 'rotate(-20deg)' }}
      >
        🦁
      </Heading>

      <NextLink href="/" passHref>
        <Link style={{ textDecoration: 'none' }}>
          <Heading size="md" letterSpacing="tighter">
            Marcelo Pecin
          </Heading>
        </Link>
      </NextLink>
    </HStack>
  )
}

export default Brand
