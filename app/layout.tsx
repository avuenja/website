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

      <body className="flex h-screen flex-col bg-slate-50 text-slate-900 antialiased dark:bg-slate-800 dark:text-slate-50">
        <Header />

        <main className="mx-48 flex-grow">{children}</main>

        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
