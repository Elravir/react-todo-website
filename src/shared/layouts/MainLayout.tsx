import type { ReactNode } from "react";
import {Header} from '../../widgets/LayoutHeader/Header'
import {Footer} from '../../widgets/LayoutFooter/Footer'

interface Props{
    children: ReactNode;
}
export const MainLayout = ({children}: Props) => {
    return(
        <div className="layout">
            <Header/>
            <main className='main'>{children}</main>
            <Footer/>
        </div>
    )
}

// const styles = {
//   layout: {
//     minHeight: '100vh',
//     display: 'flex',
//     flexDirection: 'column' as const
//   },
//   main: {
//     flex: 1,
//     padding: '20px',
//     maxWidth: '800px',
//     margin: '0 auto',
//     backgroundColor: '#f5f5f5'
//   }
// };