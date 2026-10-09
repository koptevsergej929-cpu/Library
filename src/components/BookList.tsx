import styled from '@emotion/styled';
import type { Book } from '../types';
import { BookCard } from './BookCard/BookCard';

const Section = styled.section`
  max-width: 720px;
  margin: 0 auto;
  padding: 24px;
`;

const SectionTitle = styled.h2`
  margin: 0 0 16px;
  font-size: 24px;
  color: #222;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

interface BookListProps {
  books: Book[];
}

export function BookList({ books }: BookListProps) {
  return (
    <Section>
      <SectionTitle>Моя библиотека</SectionTitle>
      <List>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </List>
    </Section>
  );
}