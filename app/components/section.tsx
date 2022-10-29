interface SectionProps {
  title: React.ReactNode
  children: React.ReactNode
}

const Section = ({ title, children }: SectionProps) => {
  return (
    <div className="mb-16">
      <h3 className="mb-4 text-xl font-semibold underline decoration-violet-500 decoration-wavy decoration-2 underline-offset-4 dark:decoration-orange-300">
        {title}
      </h3>

      {children}
    </div>
  )
}

export default Section
