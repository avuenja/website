import Image from 'next/image'
import Link from 'next/link'
const Works = () => {
  const works = [
    {
      href: 'https://gerador.progmar.dev',
      img: '/works/gerador.png',
      title: 'Gerador de documentos e cartão de crédito válidos',
    },
  ]
  return (
    <div className="my-16 grid grid-cols-2 gap-4">
      {works.map((work) => (
        <Link key={work.href} href={work.href} target="_blank">
          <div className="group flex flex-col rounded-md bg-violet-100 p-2 hover:bg-opacity-40 hover:shadow-lg dark:bg-slate-500 dark:bg-opacity-50">
            <Image
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

export default Works
