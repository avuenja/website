import NextLink from 'next/link'
import { useRouter } from 'next/router'
import {
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  useColorModeValue,
} from '@chakra-ui/react'
import { List } from 'phosphor-react'

import AppIcon from './app-icon'

interface MobileMenuProps {
  links: { href: string; label: string }[]
}

const MobileMenu = ({ links }: MobileMenuProps) => {
  const router = useRouter()

  const bgList = useColorModeValue('white', 'gray.900')
  const bg = useColorModeValue('purple.500', 'orange.200')
  const color = useColorModeValue('brand.light', 'gray.900')

  const isActive = (href: string) => {
    return router.pathname === href
  }

  return (
    <Menu isLazy id="mobile-menu">
      <MenuButton
        as={IconButton}
        aria-label="Toggle Menu"
        icon={<AppIcon icon={List} />}
        variant="outline"
      />
      <MenuList bg={bgList}>
        {links.map(({ href, label }) => (
          <NextLink key={href} href={href} passHref>
            <MenuItem
              as={Link}
              bg={isActive(href) ? bg : undefined}
              color={isActive(href) ? color : undefined}
              _active={{}}
              _focus={{}}
            >
              {label}
            </MenuItem>
          </NextLink>
        ))}
      </MenuList>
    </Menu>
  )
}

export default MobileMenu
