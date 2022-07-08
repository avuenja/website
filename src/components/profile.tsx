import { Heading, Stack, Text, VStack } from '@chakra-ui/react'

import ProfileImage from './profile-image'

const Profile = () => {
  return (
    <Stack
      direction={{ base: 'column-reverse', sm: 'row' }}
      alignItems={{ base: 'center' }}
      justifyContent="space-between"
      paddingY="5"
      marginBottom="20"
      spacing="5"
    >
      <VStack alignItems={{ base: 'center', sm: 'start' }}>
        <Heading>Marcelo Pecin</Heading>
        <Text>Software developer (PHP/React/React Native)</Text>
      </VStack>

      <ProfileImage />
    </Stack>
  )
}

export default Profile
