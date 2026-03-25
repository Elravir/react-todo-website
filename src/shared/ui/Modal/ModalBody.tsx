import type { ReactNode } from "react";
import styles from './Modal.module.css';

interface ModalBodyProps{
    children: ReactNode;
}

export const ModalBody = ({children}: ModalBodyProps) => {
    return <div className={styles.body}>{children}</div>
}