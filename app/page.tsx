import Image from 'next/image'

import profilePic from '../public/me.jpeg'
import ItemLink from './components/item-link'
import Section from './components/section'

const Home = () => {
  return (
    <>
      <div className="flex items-center justify-between py-8">
        <div>
          <h1 className="text-3xl font-semibold">Marcelo Pecin</h1>
          <p className="text-slate-500 dark:text-slate-400">
            Software developer (PHP/React/Flutter)
          </p>
        </div>

        <Image
          className="w-32 rounded-full ring ring-violet-500 ring-offset-2 dark:ring-orange-300 dark:ring-offset-slate-800"
          src={profilePic}
          alt="It's me!"
          priority={true}
        />
      </div>

      <div className="my-16 rounded-md bg-violet-50 p-4 text-center dark:bg-slate-500 dark:bg-opacity-50">
        <h2>Hello, I'm a Brazilian software developer based in Italy!</h2>
      </div>

      <Section title="About">
        <p className="text-justify indent-8 leading-relaxed">
          I have been a PHP developer since 2013 and over time, I learned
          countless technics, languages, and patterns that helped me to create
          what I am now. Now I also work effectively with the ReactJs and React
          Native, DevOps, and NodeJs technologies. I am always looking to learn
          more about my area, develop new skills, improve the already learning,
          and exchange knowledge, and culture with people.
        </p>
      </Section>

      <Section title="On the web">
        <div className="inline-flex flex-col space-y-2">
          <ItemLink href="https://github.com/avuenja">GitHub</ItemLink>
          <ItemLink href="https://www.linkedin.com/in/celopeccin">
            LinkedIn
          </ItemLink>
          <ItemLink href="https://www.instagram.com/celopeccin">
            Instagram
          </ItemLink>
          <ItemLink href="https://www.twitter.com/avuenja">Twitter</ItemLink>
        </div>
      </Section>
    </>
  )
}

export default Home
