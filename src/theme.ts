import { extendTheme, type ThemeConfig } from '@chakra-ui/react'

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}

const colors = {}

const fonts = {
  heading: `'M PLUS Rounded 1c', sans-serif`,
}

const theme = extendTheme({ config, colors, fonts })

export default theme
