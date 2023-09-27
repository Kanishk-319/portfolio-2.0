
import Footer from '@components/Footer'
import Nav from '@components/Nav'
import '@styles/globals.css'

export const metadata = {
    title: 'Kanishk Singh Malik | Full-Stack Web Developer',
    description : 'Designing With Purpose, Embracing Simplicity'
}
const RootLayout = ({children}) => {

  return (
    <html>
        <body>
        <Nav/>
            <main>
                {children}
            </main>
            <Footer/>
        </body>
    </html>
  )
}

export default RootLayout