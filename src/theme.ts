import { extendTheme, type ThemeConfig } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const config: ThemeConfig = {
  initialColorMode: 'system',
  useSystemColorMode: true,
}

const colors = {
  brand: {
    light: '#fbf0df',
  },
}

const fonts = {
  heading: `'M PLUS Rounded 1c', sans-serif`,
}

const styles = {
  global: (props: any) => ({
    body: {
      bg: mode('#fbf0df', 'gray.900')(props),
    },
  }),
}

const theme = extendTheme({ config, colors, fonts, styles })

export default theme
