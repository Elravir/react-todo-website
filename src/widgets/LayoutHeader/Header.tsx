import { useState } from 'react';
import { ThemeSwitcher } from '../../features/ThemeSwitcher/ui';
import { Modal } from '../../shared/ui/Modal';
import { Button } from '../../shared/ui/Button';
import styles from './Header.module.css'


export const Header = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
        <header className={styles.header}>
            <h1>Блог</h1>
            <div className={styles.controls}>
                <Button onClick={() => setIsModalOpen(true)} variant="secondary">
                    About project
                </Button>
                <ThemeSwitcher/>
            </div>
        </header>

        <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title="About project">
            <div>
                <p>This is an application for further list of posts.</p>
                <p><strong>Stack:</strong></p>
                <ul>
                    <li>React + TypeScript</li>
                    <li>Vite</li>
                    <li>React Context API</li>
                    <li>React Portal</li>
                </ul>
                <p>Implemented theme switching and modal windows.</p>
            </div>
        </Modal>
        </>
    );
};