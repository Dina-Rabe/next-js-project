import Link from "next/link"
import Header from "./_components/header"
import Footer from "./_components/footer"

export const metadata = {
  title: 'Anime Project',
  description: 'Written by Dina Rabenarimanitra',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-Black">
        
        <Header />
        
        {children}
        
        <Footer />

      </body>
    </html>
  )
}
