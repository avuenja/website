'use client'

import Link from 'next/link'
import { useSelectedLayoutSegments } from 'next/navigation'

interface NavLinkProps {
  href: string
  children: React.ReactNode
}

const NavLink = ({ href, children }: NavLinkProps) => {
  const segment = useSelectedLayoutSegments()
  const active = href === `/${segment}`

  return (
    <Link
      href={href}
      className={`${
        active
          ? `underline decoration-violet-500 decoration-double decoration-2 underline-offset-2 dark:decoration-orange-300`
          : ``
      } underline-offset-2 hover:underline hover:decoration-violet-500 hover:decoration-double hover:decoration-2 dark:hover:decoration-orange-300`}
    >
      {children}
    </Link>
  )
}

export default NavLink
