import Calculadora from './components/calculadora'
import './App.css'
import Readallviajes from './components/readData'
import AddTripForm from './components/saveData'

function App() {
  return (
    <>
    <div className='titles'>
    <h3>Calculadora Viajes</h3>
    <h3>Historial de Viajes</h3>
    </div>
    <Calculadora />
    <Readallviajes />
    <AddTripForm />
    </>
  )
}

export default App
