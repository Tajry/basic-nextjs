import './globals.css'
import Nav from '@/component/Nav'
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body >
        <Nav />
        {children}
      </body>
    </html>
  )
}
