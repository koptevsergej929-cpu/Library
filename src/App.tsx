//import './App.css'
import { useState } from 'react';
import { BookList } from './components/BookList';
import { Footer } from './components/Footer';
import { Header } from './components/Header'
import { initialBooks } from './data/books';
import { Stats } from './Stats/Stats';
import type { Book } from './types';
import { TaskStateDemo } from './demos/TaskStateDemo';
import { BookForm } from './components/book-form/BookForm';

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
    <Header userData={userData} />
    <main>
      <h1>Welcome to the Bookstore</h1>
      <Stats books={books} />
      <BookForm addBook={addBook} />
      <BookList books={books} deleteBook={deleteBook} />
      <TaskStateDemo />
    </main>
    <Footer />
    </>
  );
}

export default App
