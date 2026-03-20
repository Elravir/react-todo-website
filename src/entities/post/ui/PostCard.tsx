import type {Post} from '../types';
import { useTheme } from '../../../shared/lib/theme';
import styles from './PostCard.module.css'

interface Props{
    post: Post;
}

export const PostCard = ({post}: Props) => {
    const {theme} = useTheme();
    return(
        <div className={`${styles.card} ${styles[theme]}`}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <small> Автор: {post.author}</small>
            </div>
    );
};
