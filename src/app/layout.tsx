import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import './globals.css'
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        </body>
    </html>
  )
}