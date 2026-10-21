import { useState } from "react";
import styled from "@emotion/styled";
import type { BookStatus, Book } from "../../types";

interface BookFormProps {
  addBook: (book: Omit<Book, "id">) => void;
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 480px;
  margin: 24px auto;
  padding: 24px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background: #ce8dff;
`;

const FormTitle = styled.h2`
  margin: 0;
  font-size: 20px;
  color: #222;
`;

const Field = styled.label`
  display: flex;
  flex-direction: column;
  gap: 6px;
  font-size: 14px;
  color: #444;
`;

const Input = styled.input`
  padding: 8px 12px;
  border: 1px solid #ded6cc;
  border-radius: 8px;
  font-size: 14px;
  background: #fffaf4;
  color: #000;

  &:focus-visible {
    outline: 2px solid #8b735f;
    outline-offset: 2px;
  }
`;

const Select = styled.select`
  padding: 8px 12px;
  border: 1px solid #ded6cc;
  border-radius: 8px;
  font-size: 14px;
  background: #fffaf4;
  color: #000;  

  &:focus-visible {
    outline: 2px solid #8b735f;
    outline-offset: 2px;
  }
`;

const Textarea = styled.textarea`
  padding: 8px 12px;
  border: 1px solid #ded6cc;
  border-radius: 8px;
  font-size: 14px;
  background: #fffaf4;
  resize: vertical;
  min-height: 72px;
  color: #000;  

  &:focus-visible {
    outline: 2px solid #8b735f;
    outline-offset: 2px;
  }
`;

const Error = styled.p`
  margin: 0 0 18px;
  padding: 12px 14px;
  border-radius: 10px;
  background: #ea9999;
  color: #551d1d;
`;

const Button = styled.button`
  width: 100%;
  height: 56px;
  border: none;
  border-radius: 12px;
  background: #242424;
  color: white;
  font-size: 18px;
  cursor: pointer;
  box-shadow: 0 10px 20px rgba(36, 36, 36, 0.18);

  &:hover {
    background: #471f6d;
  }
`;

const Hint = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 8px;
  margin: 4px 0 30px;
  padding: 18px;
  border-radius: 12px;
  background: #f3eee8;
  color: #4f4943;
  font-size: 16px;
  line-height: 1.55;
`;

export function BookForm({ addBook }: BookFormProps) {
  const [status, setStatus] = useState<BookStatus>("want");
  const [rating, setRating] = useState<number>(0);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [note, setNote] = useState("");
  const [error, setError] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!title.trim() || !author.trim()) {
      setError('Заполните название книги и автора.');
      return;
    }
    addBook({
      title,
      author,
      status,
      rating: status === 'done' ? rating : undefined,
      note: status === 'done' ? note : undefined,
    });

    setTitle('');
    setAuthor('');
    setStatus('want');
    setRating(5);
    setNote('');
    setError('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <FormTitle>Добавить книгу</FormTitle>
      {error && <Error>{error}</Error>}
      <Field>
        Название
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Введите название книги"
        />
      </Field>
      <Field>
        Автор
        <Input
          type="text"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          placeholder="Введите автора"
        />
      </Field>
      <Field>
        Статус
        <Select
          value={status}
          onChange={(e) => setStatus(e.target.value as BookStatus)}
        >
          <option value="want">Хочу прочитать</option>
          <option value="reading">Читаю</option>
          <option value="done">Прочитано</option>
        </Select>
      </Field>
      {status === 'done' ? (
        <>
          <Field>
            Оценка
            <Select
              value={rating}
              onChange={(event) => {
                setRating(Number(event.target.value));
              }}
            >
              <option value={1}>1</option>
              <option value={2}>2</option>
              <option value={3}>3</option>
              <option value={4}>4</option>
              <option value={5}>5</option>
            </Select>
          </Field>

          <Field>
            Заметка
            <Textarea
              value={note}
              placeholder="Добавьте короткую заметку"
              onChange={(event) => {
                setNote(event.target.value);
              }}
            />
          </Field>
        </>
      ) : (
        <Hint>
          <span>
            Поля оценки и заметки появятся, если вы выберете
            статус «Прочитано».
          </span>
        </Hint>
      )}
       <Button type="submit">Добавить книгу</Button>
    </Form>
  );
}
