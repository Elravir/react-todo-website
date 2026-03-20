import { useTheme } from "../../../shared/lib/theme";
import { Button } from "../../../shared/ui/Button";
import styles from './ThemeSwitcher.module.css'

export const ThemeSwitcher = () => {
    const {theme, toggleTheme} = useTheme();

    return (
        <div className={styles.themeSwitcher}>
            <Button onClick={toggleTheme} variant="secondary">
                {theme === 'light' ? 'Dark': 'Light'}
            </Button>
        </div>
    )
}