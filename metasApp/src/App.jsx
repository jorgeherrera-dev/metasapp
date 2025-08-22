import Encabezamiento from './componentes/compartidos/Encabezamiento'
import Principal from './componentes/compartidos/Principal'
import Pie from './componentes/compartidos/Pie'
import './index.css'

function App() {
  return (
    <div className="App">
      <Encabezamiento />
      <Principal />
      <Pie />
    </div>
  )
}

export default App
