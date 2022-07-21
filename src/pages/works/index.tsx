import Head from 'next/head'
import { SimpleGrid } from '@chakra-ui/react'

import type { NextPageWithLayout } from '@/types'
import MainLayout from '@/components/layouts/main'
import Section from '@/components/section'
import GridItem from '@/components/grid-item'

const Works: NextPageWithLayout = () => {
  return (
    <>
      <Head>
        <title>Marcelo Pecin - Works</title>
      </Head>

      <Section>
        <SimpleGrid columns={{ base: 1, sm: 2 }} spacing="10">
          <GridItem
            title="Gerador de CPF, CNPJ e RG válidos"
            thumbnail="/works/gerador-cpf-cnpj.jpeg"
            href="https://gerador.progmar.dev"
          />
        </SimpleGrid>
      </Section>
    </>
  )
}

Works.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>

export default Works
