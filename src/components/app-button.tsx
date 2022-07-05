import { Button, type ButtonProps, useColorModeValue } from '@chakra-ui/react'

const AppButton = ({ children, ...props }: ButtonProps) => {
  return (
    <Button
      colorScheme={useColorModeValue('purple', 'orange')}
      padding="5"
      minWidth="auto"
      {...props}
    >
      {children}
    </Button>
  )
}

export default AppButton
