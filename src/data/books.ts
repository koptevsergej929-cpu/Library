import type { Book } from '../types';

export const books: Book[] = [
  {
    id: 1,
    title: 'Мастер и Маргарита',
    author: 'М. Булгаков',
    status: 'done',
    rating: 4,
    note: 'Перечитать летом.',
  },
  {
    id: 2,
    title: '1984',
    author: 'Дж. Оруэлл',
    status: 'reading',
  },
  {
    id: 3,
    title: 'Дюна',
    author: 'Ф. Герберт',
    status: 'want',
  },
];