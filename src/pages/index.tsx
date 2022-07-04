import type { NextPage } from 'next'
import NextLink from 'next/link'
import {
  Box,
  Link,
  List,
  ListIcon,
  ListItem,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react'

import Section from '@/components/section'
import SectionTitle from '@/components/section/section-title'
import { ArrowRight } from 'phosphor-react'
import AppListItem from '@/components/app-list-item'

const Home: NextPage = () => {
  return (
    <>
      <Box
        padding="5"
        marginBottom="20"
        borderRadius="md"
        textAlign="center"
        bg={useColorModeValue('blackAlpha.50', 'whiteAlpha.200')}
        style={{ backdropFilter: 'blur(0.625rem)' }}
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

export default Home
