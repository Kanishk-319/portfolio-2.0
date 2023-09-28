
import Footer from '@components/Footer'
import Nav from '@components/Nav'
import '@styles/globals.css'
import ThemeState from '@Helpers/ThemeState'

 export const metadata = {
    title: 'Kanishk Singh Malik | Full-Stack Web Developer',
    description : 'Designing With Purpose, Embracing Simplicity'
}
const RootLayout = ({children}) => {
  return (  
    <html>
        <body>
        <ThemeState>
        <Nav />
            <main>
              
                {children}
              
            </main>
            <Footer/>
            </ThemeState>
        </body>
    </html>
  )
}

export default RootLayout