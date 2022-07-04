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
      direction="row-reverse"
      position="fixed"
      width="full"
      bottom="0"
      padding="5"
    >
      <Box
        bg={useColorModeValue('blackAlpha.50', 'whiteAlpha.50')}
        style={{ backdropFilter: 'blur(0.625rem)' }}
        padding="5"
        borderRadius="md"
        maxWidth="xl"
      >
        <HStack spacing="2">
          <AppIcon
            icon={Cookie}
            color={useColorModeValue('purple.500', 'orange.200')}
            width="8"
            height="8"
          />

          <VStack spacing="2" alignItems="start">
            <Heading size="sm">This website uses cookies</Heading>
            <Text color="gray.500">
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
