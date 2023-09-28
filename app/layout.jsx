
import Footer from '@components/Footer'
import Nav from '@components/Nav'
import '@styles/globals.css'
import { createContext} from 'react';
import { useRef } from 'react';

export const ThemeContext = createContext();
export const metadata = {
    title: 'Kanishk Singh Malik | Full-Stack Web Developer',
    description : 'Designing With Purpose, Embracing Simplicity'
}
const RootLayout = ({children}) => {
    const ref = useRef(null)
  return (  
    <html>
        <body>
        <ThemeContext.Provider value={{ref}}>
        <Nav />
            <main>
              
                {children}
              
            </main>
            <Footer/>
          </ThemeContext.Provider>
        </body>
    </html>
  )
}

export default RootLayout