import type { ReactNode } from "react";
import { useTheme } from "../lib/theme";
import styles from './MainLayout.module.css'

interface Props{
    children: ReactNode;
    header?: ReactNode;
    footer?: ReactNode;
}
export const MainLayout = ({children, header, footer}: Props) => {
    const {theme} = useTheme();
    
    return(
        <div className={`${styles.layout} ${styles[theme]}`}>
            {header}
            <main className={`${styles.main} ${styles[theme]}`}>{children}</main>
            {footer}
        </div>
    )
}
