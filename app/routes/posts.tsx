import type { MetaFunction } from '@remix-run/node'
import { Link } from '@remix-run/react'
import { ItemCard } from '~/components/item-card'

export const meta: MetaFunction = () => {
  return [
    { title: 'Marcelo Pecin | Posts' },
    { name: 'description', content: 'Marcelo Pecin 👨🏻‍💻 - Posts' },
  ]
}

const posts = [
  {
    to: 'https://marcelopecin.medium.com/flutter-como-usar-o-haptic-feedback-6ac013544719',
    img: '/posts/flutter-como-usar-o-haptic-feedback.jpeg',
    title: 'Como usar o Haptic Feedback',
    tag: 'Flutter',
  },
]

const Posts = () => {
  return (
    <div className="my-6 grid grid-cols-1 gap-4 md:my-16 md:grid-cols-2">
      {posts.map((post) => (
        <Link
          key={post.to}
          to={post.to}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ItemCard image={post.img} title={post.title} tag={post.tag} />
        </Link>
      ))}
    </div>
  )
}

export default Posts
