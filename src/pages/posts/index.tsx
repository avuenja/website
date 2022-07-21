import Head from 'next/head'
import { SimpleGrid } from '@chakra-ui/react'

import type { NextPageWithLayout } from '@/types'
import MainLayout from '@/components/layouts/main'
import Section from '@/components/section'
import GridItem from '@/components/grid-item'

const Posts: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Marcelo Pecin - Posts</title>
      </Head>

      <Section>
        <SimpleGrid columns={{ base: 1, sm: 2 }} spacing="10">
          <GridItem
            title="Flutter: Como usar o Haptic Feedback"
            thumbnail="/posts/flutter-como-usar-o-haptic-feedback.jpeg"
            href="https://marcelopecin.medium.com/flutter-como-usar-o-haptic-feedback-6ac013544719"
          />
        </SimpleGrid>
      </Section>
    </>
  )
}

Posts.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>

export default Posts
