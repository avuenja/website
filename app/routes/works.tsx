import type { MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'

export const meta: MetaFunction = () => {
  return [
    { title: 'Marcelo Pecin | Works' },
    { name: 'description', content: 'Marcelo Pecin 👨🏻‍💻 - Works' },
  ]
}

const works = [
  {
    to: 'https://gerador.progmar.dev',
    img: '/works/gerador.png',
    title: 'Gerador de documentos e cartão de crédito válidos',
  },
]

const Posts = () => {
  return (
    <div className="my-6 grid grid-cols-1 gap-4 md:my-16 md:grid-cols-2">
      {works.map((work) => (
        <Link
          key={work.to}
          to={work.to}
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="group flex flex-col rounded-md bg-violet-100 p-2 hover:bg-violet-200 hover:shadow-lg dark:bg-slate-500 dark:bg-opacity-50 hover:dark:bg-opacity-40">
            <img
              className="mb-2 aspect-auto rounded-sm group-hover:ring-2 group-hover:ring-violet-500 group-hover:dark:ring-orange-300"
              src={work.img}
              alt={work.title}
              width={500}
              height={150}
            />
            <h2 className="text-lg font-medium">{work.title}</h2>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Posts
