import { useState, useCallback, useMemo } from 'react';
import { MainLayout } from '../shared/layouts/MainLayout'
import { PostList } from '../widgets/PostList/PostList'
import { postsMocks } from '../entities/post/api/mock/posts.mock';
import { Header } from '../widgets/LayoutHeader/Header';
import { Footer } from '../widgets/LayoutFooter/Footer';
import { ThemeProvider } from '../shared/lib/theme';
import {filterByLength } from '../features/PostLengthFilter/lib';
import { PostLengthFilter } from '../features/PostLengthFilter/ui';
import { Modal, ModalBody, ModalFooter } from '../shared/ui/Modal';
import { Button } from '../shared/ui/Button';
import { CommentList } from '../widgets/CommentList/ui';
import { commentsMocks } from '../entities/post/api/mock/comments.mock';


function App() {
  
  const [selectedPost, setSelectedPost] = useState<typeof postsMocks[0] | null>(null);
    const [filter, setFilter] = useState<'all' | 'short' | 'medium' | 'long'>('all');
    const [isLoading] = useState(false);

    const filteredPosts = useMemo(
        () => filterByLength(postsMocks, filter),
        [filter]
    );

    const handleFilterChange = useCallback((newFilter: typeof filter) => {
        setFilter(newFilter);
    }, []);

    const handlePostClick = useCallback((post: typeof postsMocks[0]) => {
        setSelectedPost(post);
    }, []);

    const handleCloseModal = useCallback(() => {
        setSelectedPost(null);
    }, []);

    const isModalOpen = selectedPost !== null;

  return (
    <ThemeProvider>
    <MainLayout
    header = {<Header/>}
    footer = {<Footer/>}
    >
      <h2>Список постов</h2>
      <PostLengthFilter onFilterChange={handleFilterChange}/>
      <PostList posts={filteredPosts} isLoading={isLoading} onPostClick={handlePostClick}></PostList>
      {selectedPost && (
                    <Modal 
                        isOpen={isModalOpen} 
                        onClose={handleCloseModal}
                        title={selectedPost.title}
                    >
                        <ModalBody>
                            <p><strong>Автор:</strong> {selectedPost.author}</p>
                            <p>{selectedPost.body}</p>
                            <CommentList 
                                comments={commentsMocks} 
                                postId={selectedPost.id} 
                            />
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={handleCloseModal} variant="secondary">
                                Закрыть
                            </Button>
                        </ModalFooter>
                    </Modal>
                )}
    </MainLayout>
    </ThemeProvider>
  )
}

export default App
