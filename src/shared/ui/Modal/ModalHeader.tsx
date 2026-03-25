import type {ReactNode} from 'react';
import styles from './Modal.module.css';

interface ModalHeaderProps {
    children: ReactNode;
    onClose?: () => void;
}

export const ModalHeader = ({children, onClose}: ModalHeaderProps) =>{
    return(
        <div className={styles.header}>
            <h2 className={styles.title}>{children}</h2>
            {onClose && (
                <button className={styles.closeButton} onClick={onClose}>
                    x
                </button>
            )}
        </div>
    )
}