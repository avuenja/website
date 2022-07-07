import { Box, Container, HStack, useColorModeValue } from '@chakra-ui/react'

import Brand from './brand'
import NavLinks from './nav-links'
import ToggleTheme from '../toggle-theme'

const Navbar = () => {
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

          <NavLinks />
        </HStack>

        <ToggleTheme />
      </Container>
    </Box>
  )
}

export default Navbar
