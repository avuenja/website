import { Avatar, Box, useColorModeValue } from '@chakra-ui/react'

const ProfileImage = () => {
  return (
    <Box
      borderColor={useColorModeValue('blackAlpha.300', 'whiteAlpha.500')}
      borderWidth="medium"
      borderRadius="full"
    >
      <Avatar
        name="Marcelo Pecin"
        src="https://github.com/avuenja.png"
        size="2xl"
      />
    </Box>
  )
}

export default ProfileImage
