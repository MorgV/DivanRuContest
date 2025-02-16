# Проект DivanRuContest

## Описание
Этот проект создан для участия в конкурсе DivanRu. Он содержит компонент `PriceInput`, который позволяет вводить сумму в заданном диапазоне - task2. И резиновую верстку - task1

## task1
1. Клонируйте репозиторий:
   ```sh
   git clone https://github.com/MorgV/DivanRuContest.git
   ```
2. Перейдите в папку с проектом:
   ```sh
   cd task1
   ```
3. Запустите с помощью Live Server:
   ```sh
   https://www.npmjs.com/package/live-server
   ```
## task2
1. Клонируйте репозиторий:
   ```sh
   git clone https://github.com/MorgV/DivanRuContest.git
   ```
2. Перейдите в папку с проектом:
   ```sh
   cd task2
   ```   
3. Установите зависимости:
   ```sh
   npm install
   ```
4. Запустите проект:
   ```sh
   npm run dev
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
### Задание номер 1: Верстка 
![Интерфейс](./screen/task1)

### Задание номер 2 `PriceInput`:
![PriceInput](https://via.placeholder.com/600x300.png?text=PriceInput+Component)


