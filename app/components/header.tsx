import { Link, NavLink } from '@remix-run/react'
import { CodeBracketIcon } from '~/components/icons/code-bracket'

const links = [
  { to: '/posts', children: 'Posts' },
  { to: '/works', children: 'Works' },
]

const styles = {
  active:
    'underline decoration-violet-500 decoration-double decoration-2 underline-offset-2 dark:decoration-orange-300',
  hover:
    'underline-offset-2 hover:underline hover:decoration-violet-500 hover:decoration-double hover:decoration-2 dark:hover:decoration-orange-300',
}

export const Header = () => {
  return (
    <header className="container mx-auto flex items-center px-4 py-6 lg:px-48 2xl:px-96">
      <Link to="/" className="group flex items-center text-lg font-medium">
        <CodeBracketIcon className="mr-2 -rotate-180 stroke-violet-500 duration-1000 group-hover:rotate-180 dark:stroke-orange-300" />
        Marcelo Pecin
      </Link>

      <nav className="ml-8 mr-auto space-x-4">
        {links.map(({ to, children }) => (
          <NavLink
            key={to}
            to={to}
            className={({ isActive }) =>
              `${isActive ? styles.active : ''} ${styles.hover}`
            }
          >
            {children}
          </NavLink>
        ))}
      </nav>
    </header>
  )
}
