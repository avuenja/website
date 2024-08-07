import type { MetaFunction } from '@remix-run/node'

import { Section } from '~/components/section'
import { ItemLink } from '~/components/item-link'
import { Jumbotron } from '~/components/jumbotron'

import profilePic from '~/assets/images/me.jpeg'

export const meta: MetaFunction = () => {
  return [
    { title: 'Marcelo Pecin | Homepage' },
    { name: 'description', content: 'Marcelo Pecin 👨🏻‍💻' },
  ]
}

export default function Index() {
  return (
    <>
      <div className="flex flex-col-reverse items-center justify-between gap-4 py-4 text-center md:flex-row md:py-8 md:text-left">
        <div>
          <h1 className="text-3xl font-semibold">Marcelo Pecin</h1>
          <p className="text-slate-500 dark:text-slate-400">
            Software developer (PHP/React/NodeJs/Flutter)
          </p>
        </div>

        <img
          className="w-32 rounded-full ring ring-violet-500 ring-offset-2 dark:ring-orange-300 dark:ring-offset-slate-800"
          src={profilePic}
          alt="It's me and a big toy bear!"
        />
      </div>

      <Jumbotron>
        <h2>{`Hello, I'm a Brazilian software developer based in Italy!`}</h2>
      </Jumbotron>

      <Section title="About">
        <p className="text-justify indent-4 leading-relaxed md:indent-4">
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
          <ItemLink to="https://github.com/avuenja">GitHub</ItemLink>
          <ItemLink to="https://www.linkedin.com/in/celopeccin">
            LinkedIn
          </ItemLink>
          <ItemLink to="https://www.instagram.com/celopeccin">
            Instagram
          </ItemLink>
        </div>
      </Section>
    </>
  )
}
