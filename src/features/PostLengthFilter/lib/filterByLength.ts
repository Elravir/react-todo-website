export interface Post {
  id: number;
  title: string;
  body: string;
  author: string;
}

export type FilterType = 'all' | 'short' | 'medium' | 'long';

export const filterByLength = (posts: Post[], filter: FilterType): Post[] => {
    switch (filter){
        case 'short':
            return posts.filter(post=>post.title.length < 10);
        case 'medium':
            return posts.filter(post=>post.title.length >= 10 && post.title.length <= 20);
        case 'long':
            return posts.filter(post=>post.title.length > 20);
        case 'all':
            default:
                return posts;
    }
}