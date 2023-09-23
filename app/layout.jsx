
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
            <main>
              <Nav/>
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout