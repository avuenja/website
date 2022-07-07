import { Heading, HStack, Text, VStack } from '@chakra-ui/react'

import ProfileImage from './profile-image'

const Profile = () => {
  return (
    <HStack justifyContent="space-between" paddingY="5" marginBottom="20">
      <VStack alignItems="start">
        <Heading>Marcelo Pecin</Heading>
        <Text>Software developer (PHP / React / React Native)</Text>
      </VStack>

      <ProfileImage />
    </HStack>
  )
}

export default Profile
