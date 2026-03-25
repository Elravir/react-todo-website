export interface Comment {
    id: number;
    author: string;
    text: string;
    postId: number;
}

export const commentsMocks: Comment[] = [
    { id: 1, author: 'Анна', text: 'Плохая статья', postId: 1 },
    { id: 2, author: 'Петр', text: 'Очень полезно, спасибо!', postId: 1 },
    { id: 3, author: 'Ольга', text: 'Хорошо объяснено', postId: 2 },
    { id: 4, author: 'Иван', text: 'Добавлю в закладки', postId: 2 },
    { id: 5, author: 'Мария', text: 'Не понравилось', postId: 3 },
];