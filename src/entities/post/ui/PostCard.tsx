import type {Post} from '../types';
import styles from './PostCard.module.css'

interface Props{
    post: Post;
}

export const PostCard = ({post}: Props) => {
    return(
        <div className={styles.card}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <small> Автор: {post.author}</small>
            </div>
    );
};
