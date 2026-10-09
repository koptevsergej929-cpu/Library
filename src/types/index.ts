export type { BookStatus } from './BookStatus';
import type { BookStatus } from './BookStatus';


export interface Book {
  id: number;
  title: string;
  author: string;
  status: BookStatus;
  rating?: number;
  note?: string;
}