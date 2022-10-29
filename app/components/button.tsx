const Button = ({
  children,
  ...props
}: React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>) => {
  return (
    <button
      className="rounded-full bg-violet-500 p-2 text-white hover:bg-violet-600 dark:bg-orange-300 dark:hover:bg-orange-400"
      {...props}
    >
      {children}
    </button>
  )
}

export default Button
