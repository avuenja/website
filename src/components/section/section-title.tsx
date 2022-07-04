import { Heading, useColorModeValue } from '@chakra-ui/react'

interface SectionTitleProps {
  children: React.ReactNode
}

const SectionTitle = (props: SectionTitleProps) => {
  return (
    <Heading
      size="md"
      textDecorationStyle="wavy"
      textDecorationColor={useColorModeValue('purple.500', 'orange.200')}
      textDecorationLine="underline"
      textUnderlineOffset="0.2rem"
      marginBottom="5"
    >
      {props.children}
    </Heading>
  )
}

export default SectionTitle
