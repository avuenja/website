import 'tailwindcss/tailwind.css'
import Footer from './components/footer'
import Header from './components/header'

interface RootLayoutProps {
  children: React.ReactNode
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html>
      <head>
        <title>Marcelo Pecin - Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className="flex h-screen flex-col bg-slate-50 text-slate-900 antialiased selection:bg-violet-100 dark:bg-slate-800 dark:text-slate-50 dark:selection:bg-slate-500">
        <Header />

        <main className="mx-48 flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
