import Link from 'next/link'
import CodeBracketIcon from './icons/code-bracket'

import NavLink from './nav-link'

const Header = () => {
  const links = [
    { href: '/posts', children: 'Posts' },
    { href: '/works', children: 'Works' },
  ]

  return (
    <header className="flex items-center px-8 py-6">
      <Link href="/" className="group flex items-center text-lg font-medium">
        <CodeBracketIcon className="mr-2 -rotate-180 stroke-violet-500 duration-1000 group-hover:rotate-180 dark:stroke-orange-300" />
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
