import type { ReactElement } from 'react'
import { List, Text } from '@chakra-ui/react'

import type { NextPageWithLayout } from '@/types'
import MainLayout from '@/components/layouts/main'
import Profile from '@/components/profile'
import FeaturedMessage from '@/components/featured-message'
import Section from '@/components/section'
import SectionTitle from '@/components/section/section-title'
import AppListItem from '@/components/app-list-item'

const Home: NextPageWithLayout = () => {
  return (
    <>
      <Profile />

      <FeaturedMessage>
        Hello, I&apos;m a Brazilian software developer based in Italy!
      </FeaturedMessage>

      <Section>
        <SectionTitle>About</SectionTitle>
        <Text textAlign="justify" style={{ textIndent: '1em' }}>
          I have been a PHP developer since 2013 and over time, I learned
          countless technics, languages, and patterns that helped me to create
          what I am now. Now I also work effectively with the ReactJs and React
          Native, DevOps (Kubernetes with CI/CD), and NodeJs technologies. I am
          always looking to learn more about my area, develop new skills,
          improve the already learning, and exchange knowledge, and culture with
          people.
        </Text>
      </Section>

      <Section delay={0.1}>
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
