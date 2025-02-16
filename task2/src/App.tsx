import PriceInput from './component/PriceInput/PriceInput.tsx'
import './App.css'
function App() {

  return (
    <div className='appContainer'>
      <PriceInput min={-101} max={101} placeholder="Введите сумму" />
    </div>
  )
}

export default App
