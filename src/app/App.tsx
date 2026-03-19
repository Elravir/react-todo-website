import {MainLayout} from '../shared/layouts/MainLayout'
import { PostList } from '../widgets/PostList/PostList'
import { postsMocks } from '../entities/post/api/mock/posts.mock';
import { Header } from '../widgets/LayoutHeader/Header';
import { Footer } from '../widgets/LayoutFooter/Footer';



function App() {
  
  return (
    <MainLayout
    header = {<Header/>}
    footer = {<Footer/>}
    >
      <h2>Список постов</h2>
      <PostList posts={postsMocks}></PostList>
    </MainLayout>
  )
}

export default App
