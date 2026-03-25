import { useState } from "react";
import type { FilterType } from "../lib/filterByLength";
import styles from './PostLengthFilter.module.css';
import { useTheme } from '../../../shared/lib/theme';

interface PostLengthFilterProps{
    onFilterChange: (filter: FilterType) => void;

}

export const PostLengthFilter = ({onFilterChange}: PostLengthFilterProps) =>{
    const[filter, setFilter] = useState<FilterType>('all');

    const {theme} = useTheme();

    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newFilter = e.target.value as FilterType;
        setFilter(newFilter);
        onFilterChange(newFilter);
    }

    return(
        <div className={`${styles.filter} ${styles[theme]}`}>
            <label htmlFor='lengthFilter' className={styles.label}>
                Фильтр по длине заголовка
            </label>
            <select
            id="lengthFilter"
            value={filter}
            onChange={handleChange}
            className={styles.select}>
                <option value='all'>Все</option>
                <option value='short'>Короткие</option>
                <option value='medium'>Средние</option>
                <option value='long'>Длинные</option>
            </select>
        </div>
    )
}