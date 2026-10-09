import styled from '@emotion/styled';
import type { Book, BookStatus } from '../../types';

const Card = styled.div`
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 12px;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.06);
  display: flex;
  gap: 12px;
`;

const Cover = styled.div<{ status: BookStatus }>`
  width: 80px;
  height: 120px;
  background: #3b4cca;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: 6px;

    background: ${({ status }) => {
    if (status === 'done') {
      return 'linear-gradient(135deg, #8b0000 0%, #1a1a1a 100%)';
    }
    if (status === 'reading') {
      return 'linear-gradient(135deg, #f5deb3 0%, #8b5a2b 100%)';
    }
    return 'linear-gradient(135deg, #a78bfa 0%, #4c1d95 100%)';
  }};
`;

const CoverTitle = styled.span<{ length: number }>`
  color: #fff;
  font-size: 12px;
  text-align: center;
  line-height: 1.2;
  font-weight: 600;

  font-size: ${({ length}) => {
    if (length > 40) return '8px';
    if (length > 28) return '10px';
    if (length > 16) return '12px';
  }};
`;

const Title = styled.h3`
  margin: 0 0 4px;
  font-size: 18px;
`;

const Author = styled.p`
  margin: 0 0 8px;
  color: #666;
  font-style: italic;
`;

const Badge = styled.span<{ status: BookStatus }>`
  display: inline-block;
  padding: 2px 8px;
  border-radius: 12px;
  background: #eef2ff;
  color: #3b4cca;
  font-size: 12px;
  font-weight: 600;

  color: ${({ status }) => {
    if (status === 'done') return '#8b0000';
    if (status === 'reading') return '#8b5a2b';
    return '#3b4cca';
  }}

  background-color: ${({ status }) => {
    if (status === 'done') return '#fde2e2';
    if (status === 'reading') return '#f5e6cf';
    return '#eef2ff';
  }};

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: ${({ status }) => {
      if (status === 'done') return '#8b0000';
      if (status === 'reading') return '#8b5a2b';
      return '#3b4cca';
    }};
  }
`;

const Info = styled.p`
  margin: 8px 0 0;
  padding: 8px;
  border-left: 3px solid #3b4cca;
  background: #f8f9ff;
  color: #333;
  font-size: 14px;
`;

const Stars = styled.span`
  color: #f5a623;
  font-size: 18px;
  letter-spacing: 2px;
`;

interface BookCardProps {
  book: Book;
}

const statusText: Record<Book['status'], string> = {
  want: 'Хочу прочитать',
  reading: 'Читаю сейчас',
  done: 'Прочитано',
};

export function BookCard({ book }: BookCardProps) {
  const rating = book.rating ?? 0;
  const stars = '★'.repeat(rating) + '☆'.repeat(5 - rating);

  return (
    <Card>
      <Cover status={book.status}>
        <CoverTitle length={book.title.length}>{book.title}</CoverTitle>
      </Cover>

      <div>
        <Title>{book.title}</Title>
        <Author>{book.author}</Author>
        <Badge status={book.status}>{statusText[book.status]}</Badge>

        {book.status === 'done' ? (
          <div>
            <Stars>{stars}</Stars>
            <span> {rating}/5</span>
            {book.note && <Info>{book.note}</Info>}
          </div>
        ) : (
          <Info>Оценка появится после прочтения</Info>
        )}
      </div>
    </Card>
  );
}