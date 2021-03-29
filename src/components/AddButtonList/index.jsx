import React from "react";

import { List, Badge } from "../index";
import "./AddButtonList.scss";

export default function AddButtonList({ colors, onAdd }) {
  const [visiblePopup, setVisiblePopup] = React.useState(false);
  const [selectedColor, setSelectedColor] = React.useState(colors[0].id);
  const [inputValue, setInputValue] = React.useState("");

  const addList = () => {
    if (!inputValue) {
      alert("Введите название списка! Оно не может быть пустым!");
      return;
    }
    let color = colors.filter((c) => c.id === selectedColor)[0].name;
    onAdd({
      id: Math.random(),
      name: inputValue,
      color: color
    });
    setVisiblePopup(false);
    setSelectedColor(colors[0].id);
    setInputValue("");
  };

  const addListRef = React.useRef();

  const addOnClick = () => setVisiblePopup(!visiblePopup);

  const handleOutsideClick = (event) => {
    const path =
      event.path ||
      (event.composedPath && event.composedPath()) ||
      event.composedPath(event.target);
    if (!path.includes(addListRef.current)) {
      setVisiblePopup(false);
    }
  };

  React.useEffect(() => {
    document.body.addEventListener("click", handleOutsideClick);
  }, []);

  return (
    <div ref={addListRef} className="add-list">
      <List
        items={[
          {
            className: "list__add-button",
            icon: (
              <svg
                width="12"
                height="12"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="list__add-button"
              >
                <path
                  d="M8 1V15"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M1 8H15"
                  stroke="black"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ),
            name: "Добавить список"
          }
        ]}
        onClick={addOnClick}
      />
      {visiblePopup && (
        <div className="add-list__popup">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            className="field"
            type="text"
            placeholder="Название списка"
          />
          <div className="add-list__popup-colors">
            {colors.map((color) => (
              <Badge
                key={color.id}
                color={color.name}
                onClick={() => setSelectedColor(color.id)}
                className={selectedColor === color.id && "active"}
              />
            ))}
          </div>
          <button onClick={addList} className="button">
            Добавить
          </button>
        </div>
      )}
    </div>
  );
}
