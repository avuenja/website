import type { NextPage } from 'next'
import { Box, useColorModeValue } from '@chakra-ui/react'
import { Section, SectionTitle } from '@/components/section'

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
      </Section>

      <Section delay={0.2}>
        <SectionTitle>Bio</SectionTitle>
      </Section>

      <Section delay={0.4}>
        <SectionTitle>On the web</SectionTitle>
      </Section>
    </>
  )
}

export default Home
