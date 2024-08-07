import './tailwind.css'

import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from '@remix-run/react'
import type { LinksFunction } from '@remix-run/node'

import { Header } from '~/components/header'
import { Footer } from '~/components/footer'

export const links: LinksFunction = () => {
  return [
    {
      rel: 'icon',
      href: '/favicon.ico',
      type: 'image/x-icon',
    },
  ]
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>

      <body className="flex h-screen flex-col bg-slate-50 text-slate-900 antialiased selection:bg-violet-100 dark:bg-slate-800 dark:text-slate-50 dark:selection:bg-slate-500">
        <Header />

        <main className="container mx-auto flex-grow px-4 lg:px-48 2xl:px-96">
          {children}
        </main>

        <Footer />

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  )
}

export default function App() {
  return <Outlet />
}
