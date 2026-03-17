import {MainLayout} from '../shared/layouts/MainLayout'
import { PostList } from '../widgets/PostList/PostList'
import type { Post } from '../entities/post/types';

const mockPosts: Post[] = [
  {
    id: 1,
    title: 'First post',
    body: 'It`s first post description.',
    author: 'Ivan Ivanov',
  },
   {
    id: 2,
    title: 'Second post',
    body: 'It`s Second post description.',
    author: 'Petr Petrov',
  },
     {
    id: 3,
    title: 'Third post',
    body: 'It`s Third post description.',
    author: 'Alla Petrova',
  },
];


function App() {
  
  return (
    <MainLayout>
      <h2>Список постов</h2>
      <PostList posts={mockPosts}></PostList>
    </MainLayout>
  )
}

export default App
