import type { Book } from "../types";
import styled from 'styled-components';


interface StatsProps {
  books: Book[];
}

const StatsSection = styled.section`
  margin: 24px 0;
`;

const StatsWrapper = styled.div`
  display: flex;
  gap: 16px;
  justify-content: space-between;
`;

const StatCard = styled.div`
  flex: 1;
  padding: 16px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  text-align: center;
  background: #fff;
`;

const Label = styled.div`
  font-size: 13px;
  color: #666;
  margin-top: 4px;
`;

const Value = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #222;
`;

export function Stats({ books }: StatsProps) {
  const total = books.length;
  const reading = books.filter((b) => b.status === 'reading').length;
  const done = books.filter((b) => b.status === 'done').length;
   const want = books.filter((b) => b.status === 'want').length;

  return (
    <StatsSection>
      <StatsWrapper>
        <StatCard>
          <Value>{total}</Value>
          <Label>Всего книг</Label>
       </StatCard>

        <StatCard>
          <Value>{done}</Value>
          <Label>Прочитано</Label>
        </StatCard>

        <StatCard>
           <Value>{reading}</Value>
           <Label>Читаю</Label>
        </StatCard>

        <StatCard>
           <Value>{want}</Value>
           <Label>Хочу прочитать</Label>
        </StatCard>
     </StatsWrapper>
    </StatsSection>
  );
}