import Link from 'next/link'
import ChevronDoubleRightIcon from './icons/chevron-double-right'

interface ItemLinkProps {
  href: string
  children: React.ReactNode
}

const ItemLink = ({ href, children }: ItemLinkProps) => {
  return (
    <div className="group ml-8 inline-flex items-center">
      <ChevronDoubleRightIcon className="mr-2 stroke-violet-500 transition-transform duration-700 group-hover:rotate-45 dark:stroke-orange-300" />

      <Link
        href={href}
        target="_blank"
        className="group-hover:underline group-hover:decoration-violet-500 group-hover:decoration-double group-hover:decoration-2 dark:group-hover:decoration-orange-300"
      >
        {children}
      </Link>
    </div>
  )
}

export default ItemLink
