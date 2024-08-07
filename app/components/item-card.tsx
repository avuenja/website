type ItemCardProps = {
  image: string
  title: string
  tag: string
}

export const ItemCard = ({ image, title, tag }: ItemCardProps) => {
  return (
    <div className="group flex flex-col items-start rounded-md bg-violet-100 p-2 hover:bg-violet-200 hover:shadow-lg dark:bg-slate-500 dark:bg-opacity-50 hover:dark:bg-opacity-40">
      <img
        className="mb-2 aspect-video rounded-sm object-cover group-hover:ring-2 group-hover:ring-violet-500 group-hover:dark:ring-orange-300"
        width={500}
        height={150}
        src={image}
        alt={title}
      />
      <h2 className="mb-4 text-lg font-medium underline decoration-violet-500 decoration-wavy decoration-2 underline-offset-4 dark:decoration-orange-300">
        {title}
      </h2>
      <p className="rounded-sm bg-violet-500 px-3 py-1 text-xs uppercase text-white dark:bg-slate-500 dark:bg-opacity-50 dark:text-slate-400 group-hover:dark:text-slate-300">
        {tag}
      </p>
    </div>
  )
}
