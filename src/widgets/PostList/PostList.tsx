import type {Post} from '../../entities/post/types'
import {PostCard} from '../../entities/post/ui/PostCard'

interface Props{
    posts: Post[];
}

export const PostList = ({posts}: Props) => {
    return (
        <div>
            {posts.map((post) => (
                <PostCard key = {post.id} post={post}/>
            ))}
        </div>
    );
};