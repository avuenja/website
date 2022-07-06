import { Box, useColorModeValue } from '@chakra-ui/react'

interface FeaturedMessageProps {
  children: React.ReactNode
}

const FeaturedMessage = ({ children }: FeaturedMessageProps) => {
  return (
    <Box
      padding="5"
      marginBottom="20"
      borderRadius="md"
      textAlign="center"
      bg={useColorModeValue('blackAlpha.50', 'whiteAlpha.200')}
      style={{
        backdropFilter: 'blur(0.625rem)',
        WebkitBackdropFilter: 'blur(0.625rem)',
      }}
    >
      {children}
    </Box>
  )
}

export default FeaturedMessage
