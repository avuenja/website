import Link from 'next/link'

import ItemCard from '@/components/item-card'

const Posts = () => {
  const posts = [
    {
      href: 'https://marcelopecin.medium.com/flutter-como-usar-o-haptic-feedback-6ac013544719',
      img: '/posts/flutter-como-usar-o-haptic-feedback.jpeg',
      title: 'Como usar o Haptic Feedback',
      tag: 'Flutter',
    },
  ]

  return (
    <div className="my-6 grid grid-cols-1 gap-4 md:my-16 md:grid-cols-2">
      {posts.map((post) => (
        <Link key={post.href} href={post.href} target="_blank">
          <ItemCard image={post.img} title={post.title} tag={post.tag} />
        </Link>
      ))}
    </div>
  )
}

export default Posts
