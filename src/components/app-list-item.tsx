import NextLink from 'next/link'
import { Link, ListIcon, ListItem, useColorModeValue } from '@chakra-ui/react'
import { ArrowRight } from 'phosphor-react'

interface AppListItemProps {
  href: string
  children: React.ReactNode
}

const AppListItem = ({ href, children }: AppListItemProps) => {
  return (
    <ListItem role="group" maxWidth="max-content">
      <ListIcon
        as={ArrowRight}
        color={useColorModeValue('purple.500', 'orange.200')}
        _groupHover={{
          transition: '200ms ease',
          transform: 'rotate(20deg)',
        }}
      />
      <NextLink href={href} passHref>
        <Link isExternal>{children}</Link>
      </NextLink>
    </ListItem>
  )
}

export default AppListItem
