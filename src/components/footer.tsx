import { Flex, Text } from '@chakra-ui/react'

const Footer = () => {
  return (
    <Flex as="footer" justifyContent="center" paddingY="5">
      <Text color="gray.500" fontSize="sm">
        &copy; {new Date().getFullYear()} Marcelo Pecin. All Rights Reserved.
      </Text>
    </Flex>
  )
}

export default Footer
