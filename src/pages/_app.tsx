import '@fontsource/m-plus-rounded-1c'

import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'

import theme from '@/theme'
import Layout from '@/components/layouts/main'

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <ChakraProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ChakraProvider>
  )
}

export default App
