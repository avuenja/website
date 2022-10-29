import Link from 'next/link'

import NavLink from './nav-link'

const Header = () => {
  const links = [
    { href: '/posts', children: 'Posts' },
    { href: '/works', children: 'Works' },
  ]

  return (
    <header className="flex items-center px-8 py-6">
      <Link href="/" className="text-lg font-medium">
        Marcelo Pecin
      </Link>

      <nav className="mr-auto ml-8 space-x-4">
        {links.map(({ href, children }) => (
          <NavLink key={href} href={href}>
            {children}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}

export default Header
