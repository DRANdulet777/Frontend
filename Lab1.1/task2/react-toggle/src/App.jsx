import { useState } from "react";
import "./App.css";
function App() {
  // Проверка состояния подсвечен ли параграф
  const [isHighlighted, setisHighlighted] = useState(false);

  // Функция для обработки клика по кнопке
  function handlebuttonclick() {
    setisHighlighted(!isHighlighted);

  }

  return (
    <div>
    <h2>Declarative Implementation (React)</h2>
    // Кнопка для пеереключения подсветки
    <button onClick={handlebuttonclick}>
    Toggle Highlight
    </button>

    <p className={isHighlighted ? "highlight" : " "}>
      Этот параграф будет подсвечен когда кнопка нажмется
    </p>
    </div>
  );
}

export default App;