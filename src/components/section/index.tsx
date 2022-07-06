import { motion } from 'framer-motion'
import { Box } from '@chakra-ui/react'

interface SectionProps {
  children: React.ReactNode
  delay?: number
}

const Section = ({ children, delay = 0 }: SectionProps) => {
  return (
    <motion.div
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay }}
    >
      <Box marginBottom="10">{children}</Box>
    </motion.div>
  )
}

export default Section
