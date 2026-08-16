import { useState } from 'react'
import './App.css'
import BotaoCalcular from './components/BotaoCalcular'

function App() {
  // Bloco 3: adiciona os estados do valor da compra e do valor pago
  const [valorCompra, setValorCompra] = useState('');
  const [valorPago, setValorPago] = useState('');
  const [troco, setTroco] = useState(null);

// Bloco 4: função que calcula o troco 
function calcularTroco() {
  const compra = Number(valorCompra);
  const pago = Number(valorPago);

  if (pago < compra) {
    setTroco(null);
    return;
  }

  const resultado = pago - compra;
  setTroco(resultado);
}


  return (
    <main className="app">
      <div className="container">
       <h1>Máquina de Troco</h1> 

       <div className="botao">
        <BotaoCalcular texto="Calcular Troco" onClick={calcularTroco} />
       </div>

      </div>
    </main>
  )
}

export default App
