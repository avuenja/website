import type { ReactElement } from 'react'
import { Box, List, Text, useColorModeValue } from '@chakra-ui/react'

import type { NextPageWithLayout } from '@/types'
import MainLayout from '@/components/layouts/main'
import Section from '@/components/section'
import SectionTitle from '@/components/section/section-title'
import AppListItem from '@/components/app-list-item'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Box
        padding="5"
        marginBottom="20"
        borderRadius="md"
        textAlign="center"
        bg={useColorModeValue('blackAlpha.50', 'whiteAlpha.200')}
        style={{
          backdropFilter: 'blur(0.625rem)',
          WebkitBackdropFilter: 'blur(0.625rem)',
        }}
      >
        Hello, I&apos;m a Brazilian software developer based in Italy!
      </Box>

      <Section>
        <SectionTitle>Work</SectionTitle>
        <Text textAlign="justify" style={{ textIndent: '1em' }}>
          Working with development of softwares, websites and mobile apps. I
          work PHP developer since 2013, and now also ReactJs and React Native,
          DevOps, NodeJs and Flutter developer. Ever looking for to learn about
          my area, and developing new skills and improving already known.
        </Text>
      </Section>

      <Section delay={0.1}>
        <SectionTitle>Bio</SectionTitle>
      </Section>

      <Section delay={0.2}>
        <SectionTitle>On the web</SectionTitle>
        <List spacing="2.5" style={{ textIndent: '1em' }}>
          <AppListItem href="https://github.com/avuenja">GitHub</AppListItem>
          <AppListItem href="https://www.linkedin.com/in/celopeccin">
            LinkedIn
          </AppListItem>
          <AppListItem href="https://www.instagram.com/celopeccin">
            Instagram
          </AppListItem>
        </List>
      </Section>
    </>
  )
}

Home.getLayout = (page: ReactElement) => <MainLayout>{page}</MainLayout>

export default Home
