import '@fontsource/m-plus-rounded-1c'

import { ChakraProvider } from '@chakra-ui/react'

import type { AppPropsWithLayout } from '@/types'
import theme from '@/theme'

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <ChakraProvider theme={theme}>
      {getLayout(<Component {...pageProps} />)}
    </ChakraProvider>
  )
}

export default App
