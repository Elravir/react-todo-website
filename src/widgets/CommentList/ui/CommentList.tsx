import { useState, useCallback, useMemo } from 'react';
import { CommentItem } from './CommentItem';
import styles from './CommentList.module.css';

interface Comment {
  id: number;
  author: string;
  text: string;
  postId: number;
}

interface CommentListProps {
  comments: Comment[];
  postId: number;
}

export const CommentList = ({ comments, postId }: CommentListProps) => {
  const [expandedComments, setExpandedComments] = useState<Set<number>>(new Set());

  const toggleComment = useCallback((commentId: number) => {
    setExpandedComments(prev => {
      const newSet = new Set(prev);
      if (newSet.has(commentId)) {
        newSet.delete(commentId);
      } else {
        newSet.add(commentId);
      }
      return newSet;
    });
  }, []);

  const postComments = useMemo(
    () => comments.filter(comment => comment.postId === postId),
    [comments, postId]
  );

  if (postComments.length === 0) {
    return <div className={styles.noComments}>Нет комментариев</div>;
  }

  return (
    <div className={styles.commentList}>
      <h3 className={styles.title}>
        Комментарии ({postComments.length})
      </h3>
      {postComments.map(comment => (
        <CommentItem
          key={comment.id}
          comment={comment}
          isExpanded={expandedComments.has(comment.id)}
          onToggle={() => toggleComment(comment.id)}
        />
      ))}
    </div>
  );
};