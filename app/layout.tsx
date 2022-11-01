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
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Marcelo Pecin - Homepage</title>
        <link rel="icon" href="/favicon.ico" />
      </head>

      <body className="flex h-screen flex-col bg-slate-50 text-slate-900 antialiased selection:bg-violet-100 dark:bg-slate-800 dark:text-slate-50 dark:selection:bg-slate-500">
        <Header />

        <main className="container mx-auto flex-grow px-4 lg:px-48 2xl:px-96">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
