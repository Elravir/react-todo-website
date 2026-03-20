import { MainLayout } from '../shared/layouts/MainLayout'
import { PostList } from '../widgets/PostList/PostList'
import { postsMocks } from '../entities/post/api/mock/posts.mock';
import { Header } from '../widgets/LayoutHeader/Header';
import { Footer } from '../widgets/LayoutFooter/Footer';
import { ThemeProvider } from '../shared/lib/theme';



function App() {
  
  return (
    <ThemeProvider>
    <MainLayout
    header = {<Header/>}
    footer = {<Footer/>}
    >
      <h2>Список постов</h2>
      <PostList posts={postsMocks}></PostList>
    </MainLayout>
    </ThemeProvider>
  )
}

export default App
