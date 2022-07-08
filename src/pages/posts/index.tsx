import type { NextPageWithLayout } from '@/types'
import MainLayout from '@/components/layouts/main'

const Posts: NextPageWithLayout = () => {
  return <></>
}

Posts.getLayout = (page: React.ReactElement) => <MainLayout>{page}</MainLayout>

export default Posts
