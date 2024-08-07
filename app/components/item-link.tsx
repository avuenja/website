import { Link } from '@remix-run/react'
import { ChevronDoubleRightIcon } from '~/components/icons/chevron-double-right'

type ItemLinkProps = {
  to: string
  children: React.ReactNode
}

export const ItemLink = ({ to, children }: ItemLinkProps) => {
  return (
    <div className="group ml-2 inline-flex items-center md:ml-4">
      <ChevronDoubleRightIcon className="mr-2 stroke-violet-500 transition-transform duration-700 group-hover:rotate-45 dark:stroke-orange-300" />

      <Link
        to={to}
        target="_blank"
        rel="noopener noreferrer"
        className="group-hover:underline group-hover:decoration-violet-500 group-hover:decoration-double group-hover:decoration-2 dark:group-hover:decoration-orange-300"
      >
        {children}
      </Link>
    </div>
  )
}
