type JumbotronProps = {
  children: React.ReactNode
}

export const Jumbotron = ({ children }: JumbotronProps) => {
  return (
    <div className="my-8 rounded-md bg-violet-100 p-4 text-center selection:bg-violet-500 selection:text-white md:my-16 dark:bg-slate-500 dark:bg-opacity-50">
      {children}
    </div>
  )
}
