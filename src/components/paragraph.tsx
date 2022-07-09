import { Text, type TextProps } from '@chakra-ui/react'

interface ParagraphProps extends TextProps {
  children: React.ReactNode
}

const Paragraph = ({ children, ...props }: ParagraphProps) => {
  return (
    <Text textAlign="justify" style={{ textIndent: '1em' }} {...props}>
      {children}
    </Text>
  )
}

export default Paragraph
