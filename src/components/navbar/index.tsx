import { Box, Container, HStack, useColorModeValue } from '@chakra-ui/react'

import Brand from './brand'
import NavLinks from './nav-links'
import ToggleTheme from '../toggle-theme'
import MobileMenu from '../mobile-menu'

const Navbar = () => {
  const links = [
    {
      href: '/posts',
      label: 'Posts',
    },
    {
      href: '/works',
      label: 'Works',
    },
  ]

  return (
    <Box
      as="nav"
      position="fixed"
      width="full"
      bg={useColorModeValue('whiteAlpha.0', 'blackAlpha.0')}
      style={{
        backdropFilter: 'blur(0.625rem)',
        WebkitBackdropFilter: 'blur(0.625rem)',
      }}
      zIndex="sticky"
    >
      <Container
        maxWidth="container.lg"
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        paddingY="5"
      >
        <HStack spacing="20">
          <Brand />

          <NavLinks links={links} />
        </HStack>

        <HStack spacing="2.5">
          <ToggleTheme />

          <Box display={{ base: 'inline-flex', sm: 'none' }}>
            <MobileMenu links={links} />
          </Box>
        </HStack>
      </Container>
    </Box>
  )
}

export default Navbar
