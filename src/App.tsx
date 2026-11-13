//import './App.css'
import { useState } from 'react';
import { BookList } from './components/BookList';
import { initialBooks } from './data/books';
import { Stats } from './Stats/Stats';
import type { Book } from './types';
import { TaskStateDemo } from './demos/TaskStateDemo';
import { BookForm } from './components/BookForm/BookForm';
import bookLogo from "./assets/img/book-logo.png";
import styled from 'styled-components';
import { ProfileSettings } from './components/ProfileSettings/ProfileSettings';

const Page = styled.div`
  min-height: 100vh;
  padding: 20px 48px;
  background:
    radial-gradient(
      circle at top right,
      rgba(221, 214, 197, 0.35),
      transparent 32%
    ),
    linear-gradient(180deg, #592a85 50%, #583863 100%);
  color: #24211d;
`;

const Header = styled.header`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 32px;
`;

const HeaderLeft = styled.div``;

const HeaderIcon = styled.img`
  width: 64px;
  height: 64px;
  object-fit: contain;
`;

const HeaderTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 56px;
  font-weight: 600;
  letter-spacing: -1px;
  color: #040404;
`;

const Subtitle = styled.p`
  margin: 10px 0 0 90px;
  font-size: 24px;
  color: #756f68;
`;

const Content = styled.main`
  display: flex;
  gap: 24px;
  align-items: flex-start;
`;

const BookListColumn = styled.div`
  flex: 1.45 1 0;
  min-width: 0;
`;

const BookFormColumn = styled.div`
  flex: 1 1 0;
  min-width: 0;
`;

function App() {
  const userData = [
    {
      id: 1,
      username: 'Pasha',
      isAdmin: false,
    },
    {
      id: 2,
      username: 'Ivan',
      isAdmin: false,
    },
    {
      id: 3,
      username: 'Legion',
      isAdmin: false,
    },
  ];

  const [books, setBooks] = useState<Book[]>(initialBooks);

  const deleteBook = (id: number) => {
  setBooks((currentBooks) =>
    currentBooks.filter((book) => book.id !== id),
  );
};

const addBook = (book: Omit<Book, "id">) => {
  const newBook: Book = {
    id: Date.now(),
    ...book,
  };
  setBooks((currentBooks) => [
    ...currentBooks,
    newBook,
  ]);
};


  return (
    <>
    <Page>
      <Header>
        <HeaderLeft>
          <HeaderTitle>
            <HeaderIcon src={bookLogo} alt="" />
            <Title>Читательский дневник</Title>
          </HeaderTitle>
          <Subtitle>Мои книги, мысли и впечатления</Subtitle>
        </HeaderLeft>
      </Header>

      <ProfileSettings />

      <Stats books={books} />

      <Content>
        <BookListColumn>
          <BookList books={books} deleteBook={deleteBook} />
        </BookListColumn>

        <BookFormColumn>
          <BookForm addBook={addBook} />
        </BookFormColumn>
      </Content>
      
      {/* Демо-задачу оставим внизу, если она тебе еще нужна */}
      <TaskStateDemo /> 
    </Page>
    </>
  );
}

export default App
