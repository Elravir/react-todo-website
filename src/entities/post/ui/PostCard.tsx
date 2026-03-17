import type {Post} from '../types';

interface Props{
    post: Post;
}

export const PostCard = ({post}: Props) => {
    return(
        <div className="card">
            <h3>{post.title}</h3>
            <p>{post.body}</p>
            <small> Автор: {post.author}</small>
            </div>
    );
};

// const styles = {
//   card: {
//     border: '1px solid #ddd',
//     borderRadius: '8px',
//     padding: '16px',
//     marginBottom: '16px',
//     backgroundColor: '#fff'
//   }
// };