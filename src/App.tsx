//import './App.css'
import { BookList } from './components/BookList';
import { Footer } from './components/Footer';
import { Header } from './components/Header'
import { books } from './data/books';

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

  return (
    <>
    <Header userData={userData} />
    <main>
      <h1>Welcome to the Bookstore</h1>
      <BookList books={books} />
    </main>
    <Footer />
    </>
  );
}

export default App
