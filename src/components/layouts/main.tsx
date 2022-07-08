import React from 'react'
import Head from 'next/head'
import { AnimatePresence } from 'framer-motion'
import { Container } from '@chakra-ui/react'

import Navbar from '../navbar'
import Footer from '../footer'
import CookiesAlert from '../cookies-alert'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = (props: MainLayoutProps) => {
  const [isShowCookieAlert, setIsShowCookieAlert] = React.useState(false)

  React.useEffect(() => {
    const cookiesAccepted = localStorage.getItem('mp-cookies-accepted')

    if (cookiesAccepted === null) {
      setIsShowCookieAlert(true)
    } else {
      setIsShowCookieAlert(false)
    }
  }, [])

  const onAcceptCookies = () => {
    localStorage.setItem('mp-cookies-accepted', 'true')
    setIsShowCookieAlert(false)
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Marcelo Pecin - Software developer (PHP/React/React Native)"
        />
        <meta name="author" content="Marcelo Pecin" />
        <meta name="author" content="avuenja" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Marcelo Pecin - Homepage</title>
      </Head>

      <Navbar />

      <Container
        maxWidth="container.md"
        paddingTop="40"
        minHeight="calc(100vh - 4rem)"
        display="flex"
        flexDirection="column"
      >
        {props.children}
      </Container>

      <Footer />

      <AnimatePresence>
        {isShowCookieAlert && <CookiesAlert onAccept={onAcceptCookies} />}
      </AnimatePresence>
    </>
  )
}

export default MainLayout
