import type { NextPageWithLayout } from '@/types'
import MainLayout from '@/components/layouts/main'

const Works: NextPageWithLayout = () => {
  return <></>
}

Works.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>

export default Works
