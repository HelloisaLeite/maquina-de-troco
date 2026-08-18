import { useState } from 'react'
import './App.css'
import BotaoCalcular from './components/BotaoCalcular'

function App() {
  // Bloco 3: adiciona os estados do valor da compra e do valor pago
  const [valorCompra, setValorCompra] = useState('');
  const [valorPago, setValorPago] = useState('');
  const [troco, setTroco] = useState(null);
  const [cedulasEMoedas, setCedulasEMoedas] = useState(null)

  // Bloco 4: função que calcula o troco 
  function calcularTroco() {
    const compra = Number(valorCompra);
    const pago = Number(valorPago);

    if (pago < compra) {
      setTroco(null);
      return;
    }

    const resultadoTroco = pago - compra;
    setTroco(resultadoTroco);


    const resultadoCedulasEMoedas = calcularCedulasEMoedas(resultadoTroco);

    setCedulasEMoedas(resultadoCedulasEMoedas);
  };

  // Bloco 5: função que calcula a quantidade de cédulas e moedas necessárias para o troco
  function calcularCedulasEMoedas(troco) {

    let valor = Math.round(troco * 100)

    const valores = [
      { nome: 'nota100', valor: 10000 },
      { nome: 'nota50', valor: 5000 },
      { nome: 'nota20', valor: 2000 },
      { nome: 'nota10', valor: 1000 },
      { nome: 'nota5', valor: 500 },
      { nome: 'nota2', valor: 200 },
      { nome: 'moeda1', valor: 100 },
      { nome: 'moeda50', valor: 50 },
      { nome: 'moeda25', valor: 25 },
      { nome: 'moeda10', valor: 10 },
      { nome: 'moeda05', valor: 5 }
    ]

    const resultado = {}

    for (const item of valores) {
      const quantidade = Math.floor(valor / item.valor)
      resultado[item.nome] = quantidade

      valor -= quantidade * item.valor
    }

    return resultado
  }

  return (
    <main className="app">
      <div className="container">
        <h1>Máquina de Troco</h1>
        
        <div className="botao">
          <BotaoCalcular texto="Calcular Troco" onClick={calcularTroco} />
        </div>

        <div className="resultado-calculo">

          {troco !== null && (
            <p>Troco: R$ {troco.toFixed(2)}</p>
          )}

          {cedulasEMoedas && (
        <div className="cedulas-moedas">
          <h2>Cédulas e Moedas:</h2>

          <div className="colunas">

            <div className="coluna">
              <h3>Cédulas</h3>

              <p>R$ 100: {cedulasEMoedas.nota100}</p>
              <p>R$ 50: {cedulasEMoedas.nota50}</p>
              <p>R$ 20: {cedulasEMoedas.nota20}</p>
              <p>R$ 10: {cedulasEMoedas.nota10}</p>
              <p>R$ 5: {cedulasEMoedas.nota5}</p>
              <p>R$ 2: {cedulasEMoedas.nota2}</p>
            </div>

            <div className="coluna">
              <h3>Moedas</h3>

              <p>R$ 1,00: {cedulasEMoedas.moeda1}</p>
              <p>R$ 0,50: {cedulasEMoedas.moeda50}</p>
              <p>R$ 0,25: {cedulasEMoedas.moeda25}</p>
              <p>R$ 0,10: {cedulasEMoedas.moeda10}</p>
              <p>R$ 0,05: {cedulasEMoedas.moeda05}</p>
            </div>
          </div>
        </div>
      )};
        </div>
      </div>
    </main>
  )
}

export default App
