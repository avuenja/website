import '@fontsource/m-plus-rounded-1c'

import Script from 'next/script'
import { ChakraProvider } from '@chakra-ui/react'

import type { AppPropsWithLayout } from '@/types'
import theme from '@/theme'

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page)

  return (
    <>
      <Script
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />
      <Script id="g-tag" strategy="lazyOnload">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
            page_path: window.location.pathname,
            });
        `}
      </Script>

      <ChakraProvider theme={theme}>
        {getLayout(<Component {...pageProps} />)}
      </ChakraProvider>
    </>
  )
}

export default App
