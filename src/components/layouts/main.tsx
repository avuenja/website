import Head from 'next/head'
import { Container } from '@chakra-ui/react'

import Navbar from '../navbar'
import Footer from '../footer'
import CookiesAlert from '../cookies-alert'

interface MainLayoutProps {
  children: React.ReactNode
}

const MainLayout = (props: MainLayoutProps) => {
  const onAcceptCookies = () => {
    console.log('accepted cookies')
  }

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Marcelo Pecin's homepage" />
        <meta name="author" content="Marcelo Pecin" />
        <meta name="author" content="avuenja" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <title>Marcelo Pecin - Homepage</title>
      </Head>

      <Navbar />

      <Container
        maxWidth="container.md"
        paddingTop="40"
        minHeight="calc(100vh - 2.5rem)"
      >
        {props.children}
      </Container>

      <Footer />

      <CookiesAlert onAccept={onAcceptCookies} />
    </>
  )
}

export default MainLayout
