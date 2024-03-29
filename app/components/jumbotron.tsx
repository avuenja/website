interface JumbotronProps {
  children: React.ReactNode
}

const Jumbotron = ({ children }: JumbotronProps) => {
  return (
    <div className="my-8 rounded-md bg-violet-100 p-4 text-center selection:bg-violet-500 selection:text-white dark:bg-slate-500 dark:bg-opacity-50 md:my-16">
      {children}
    </div>
  )
}

export default Jumbotron
