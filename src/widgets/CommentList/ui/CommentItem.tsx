import { useCallback } from 'react';
import styles from './CommentList.module.css';

interface Comment {
  id: number;
  author: string;
  text: string;
}

interface CommentItemProps {
  comment: Comment;
  isExpanded: boolean;
  onToggle: () => void;
}

export const CommentItem = ({ comment, isExpanded, onToggle }: CommentItemProps) => {
  const handleClick = useCallback(() => {
    onToggle();
  }, [onToggle]);

  return (
    <div className={styles.comment}>
      <div className={styles.commentHeader} onClick={handleClick}>
        <span className={styles.author}>{comment.author}</span>
        <span className={styles.toggle}>
          {isExpanded ? 'Свернуть' : 'Развернуть'}
        </span>
      </div>
      {isExpanded && (
        <div className={styles.commentText}>
          {comment.text}
        </div>
      )}
    </div>
  );
};