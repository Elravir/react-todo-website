import type {Post} from '../../entities/post/types'
import {PostCard} from '../../entities/post/ui/PostCard'
import {useMemo, useCallback} from 'react';
import { withLoading } from '../../shared/lib/hoc';


interface Props{
    posts: Post[];
    isLoading: boolean;
    onPostClick: (post: Post) => void;
}

export const PostList = ({posts, onPostClick}: Props) =>{
    const handlePostClick = useCallback(
        (post: Post) => {
            if (onPostClick){
                onPostClick(post);
            }
        },[onPostClick]
    );

    const sortedPosts = useMemo(
        () => [...posts].sort((a,b) => a.id - b.id),
        [posts]
    );

    return (
        <div>
            {sortedPosts.map((post) => (
                <PostCard key = {post.id} post={post} onClick={() => handlePostClick(post)}/>
            ))}
        </div>
    );
};

export default withLoading(PostList);