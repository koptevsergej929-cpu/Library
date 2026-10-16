import { useState } from "react";
import styled from "@emotion/styled";
import type { BookStatus } from "../../types";

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 480px;
  margin: 24px auto;
  padding: 24px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background: #e09e2b;
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

export function BookForm() {
  const [status, setStatus] = useState<BookStatus>("want");
  const [rating, setRating] = useState<number>(0);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [note, setNote] = useState("");
  return (
    <Form>
      <FormTitle>Добавить книгу</FormTitle>
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
      <Field>
        Оценка
        <Select
          value={rating}
          onChange={(e) => setRating(Number(e.target.value))}
        >
          <option value={0}>Без оценки</option>
          <option value={1}>1 ★</option>
          <option value={2}>2 ★</option>
          <option value={3}>3 ★</option>
          <option value={4}>4 ★</option>
          <option value={5}>5 ★</option>
        </Select>
      </Field>
      <Field>
        Заметка
        <Textarea
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Что запомнилось?"
        />
      </Field>
    </Form>
  );
}
