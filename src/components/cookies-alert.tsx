import {
  Box,
  Flex,
  Heading,
  HStack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'
import { Cookie } from 'phosphor-react'

import AppButton from './app-button'
import AppIcon from './app-icon'

interface CookiesAlertProps {
  onAccept: () => void
}

const CookiesAlert = (props: CookiesAlertProps) => {
  return (
    <Flex
      position="fixed"
      width="full"
      bottom="0"
      justifyContent="center"
      paddingY={{ base: 0, sm: 4 }}
      zIndex="toast"
    >
      <Box
        bg={useColorModeValue('blackAlpha.50', 'whiteAlpha.50')}
        style={{
          backdropFilter: 'blur(0.625rem)',
          WebkitBackdropFilter: 'blur(0.625rem)',
        }}
        padding={{ base: 2, sm: 5 }}
        borderRadius={{ base: 'none', sm: 'md' }}
        width="container.sm"
      >
        <HStack spacing={{ base: 2, sm: 5 }}>
          <AppIcon
            icon={Cookie}
            color={useColorModeValue('purple.500', 'orange.200')}
            width="8"
            height="8"
          />

          <VStack spacing="2" alignItems="start" width="full">
            <Heading size="sm">This website uses cookies</Heading>
            <Text color={useColorModeValue('gray.600', 'gray.400')}>
              We only use strictly necessary cookies. Only cookies necessary for
              the website to function.
            </Text>
          </VStack>

          <AppButton onClick={props.onAccept}>Accept</AppButton>
        </HStack>
      </Box>
    </Flex>
  )
}

export default CookiesAlert
