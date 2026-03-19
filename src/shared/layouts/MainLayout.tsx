import type { ReactNode } from "react";
import styles from './MainLayout.module.css'

interface Props{
    children: ReactNode;
    header?: ReactNode;
    footer?: ReactNode;
}
export const MainLayout = ({children, header, footer}: Props) => {
    return(
        <div className={styles.layout}>
            {header}
            <main className={styles.main}>{children}</main>
            {footer}
        </div>
    )
}
