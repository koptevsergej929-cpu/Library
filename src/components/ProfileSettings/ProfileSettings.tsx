import { useState } from "react";
import type { ChangeEvent } from "react";

type Theme = "light" | "dark";

export function ProfileSettings() {
  //Состояния с первоначальным состоянием
  const [displayName, setDisplayName] = useState<string | undefined>(undefined);
  const [theme, setTheme] = useState<Theme>("light");
  const [fontSize, setFontSize] = useState<number>(16);
  const [bio, setBio] = useState<string>("");
  const [isPreviewVisible, setIsPreviewVisible] = useState<boolean>(true);

  //Обработчик textarea в отдельной функции с типизацией
  const handleBioChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setBio(event.target.value);
  };

  //Функция сброса
  const resetSettings = () => {
    setDisplayName(undefined);
    setTheme("light");
    setFontSize(16);
    setBio("");
    setIsPreviewVisible(true);
  };

  return (
    <div style={{ padding: "20px", border: "1px solid #ccc", margin: "20px 0" }}>
      <h2>Настройки профиля</h2>

      {/*Имя пользователя*/}
      <div>
        <label>Имя: </label>
        <input
          type="text"
          value={displayName ?? ""}
          onChange={(e) => setDisplayName(e.target.value)}
          style={{ backgroundColor: "#810dab"}}
        />
      </div>

      {/*Тема оформления*/}
      <div>
        <label>Тема: </label>
        <select
          value={theme}
          onChange={(e) => setTheme(e.target.value as Theme)}
          style={{ backgroundColor: "#810dab"}}
        >
          <option value="light">Светлая</option>
          <option value="dark">Тёмная</option>
        </select>
      </div>

      {/*Размер текста*/}
      <div>
        <label>Размер текста (12-30): </label>
        <input
          type="number"
          min="12"
          max="30"
          value={fontSize}
          onChange={(e) => setFontSize(Number(e.target.value))}
          style={{ backgroundColor: "#810dab"}}
        />
      </div>

      {/*Описание профиля*/}
      <div>
        <label>Описание: </label>
        <textarea
          value={bio}
          onChange={handleBioChange}
           style={{ backgroundColor: "#810dab"}}
        />
      </div>

      {/*Кнопки управления*/}
      <div style={{ marginTop: "10px", display: "flex", gap: "10px",}}>
        {/*обновление состояния*/}
        <button onClick={() => setIsPreviewVisible((prev) => !prev)}>
          {isPreviewVisible ? "Скрыть просмотр" : "Показать просмотр"}
        </button>
        <button onClick={resetSettings}>Сбросить настройки</button>
        
      </div>

      {/*Блок предпросмотра*/}
      {isPreviewVisible && (
        <div style={{ marginTop: "20px", padding: "10px", background: "#f0f0f0" }}>
          <h3>Предпросмотр</h3>
          <p>
            <strong>Имя:</strong> {displayName || "Имя не указано"}
          </p>
          <p>
            <strong>Тема:</strong> {theme === "light" ? "Светлая" : "Тёмная"}
          </p>
          <p>
            <strong>Описание:</strong> {bio || "Описание не добавлено"}
          </p>
          <p style={{ fontSize: `${fontSize}px` }}>
            Описание с выбранным пользователем размером текста.
          </p>
        </div>
      )}
    </div>
  );
}