# Проект DivanRuContest

## Описание
Этот проект создан для участия в конкурсе DivanRu. Он содержит компонент `PriceInput`, который позволяет вводить сумму в заданном диапазоне.

## Установка
1. Клонируйте репозиторий:
   ```sh
   git clone https://github.com/MorgV/DivanRuContest.git
   ```
2. Установите зависимости:
   ```sh
   npm install
   ```
3. Запустите проект:
   ```sh
   npm start
   ```

## Использование
Компонент `PriceInput` импортируется в `App.tsx` и принимает следующие параметры:
- `min` – минимальное значение (например, -101)
- `max` – максимальное значение (например, 101)
- `placeholder` – текст-подсказка

Пример кода:
```tsx
import PriceInput from './component/PriceInput/PriceInput.tsx';

function App() {
  return (
    <div className='appContainer'>
      <PriceInput min={-101} max={101} placeholder="Введите сумму" />
    </div>
  );
}
export default App;
```

## Скриншоты
### Интерфейс приложения:
![Интерфейс](https://via.placeholder.com/600x300.png?text=UI+Screenshot)

### Пример компонента `PriceInput`:
![PriceInput](https://via.placeholder.com/600x300.png?text=PriceInput+Component)


