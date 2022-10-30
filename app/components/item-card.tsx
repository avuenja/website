import Image from 'next/image'

interface ItemCardProps {
  image: string
  title: string
  tag: string
}

const ItemCard = ({ image, title, tag }: ItemCardProps) => {
  return (
    <div className="group flex flex-col items-start rounded-md bg-violet-100 p-2 hover:bg-opacity-40 hover:shadow-lg dark:bg-slate-500 dark:bg-opacity-50">
      <Image
        width={500}
        height={150}
        className="mb-2 aspect-video rounded-sm object-cover group-hover:ring-2 group-hover:ring-violet-500 group-hover:dark:ring-orange-300"
        src={image}
        alt={title}
      />
      <h2 className="mb-4 text-lg font-medium underline decoration-violet-500 decoration-wavy decoration-2 underline-offset-4 dark:decoration-orange-300">
        {title}
      </h2>
      <p className="rounded-sm bg-violet-500 py-1 px-3 text-xs uppercase text-slate-500 dark:bg-slate-500 dark:bg-opacity-50 dark:text-slate-400 group-hover:dark:text-slate-300">
        {tag}
      </p>
    </div>
  )
}

export default ItemCard
