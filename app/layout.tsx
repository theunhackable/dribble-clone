
import Footer from '@/app/components/Footer'
import Navbar from '@/app/components/Navbar'
import './globals.css'

export const metadata = {
  title: 'Flexible',
  description: 'Showcase and discover remarkable developer projects',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />

        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
