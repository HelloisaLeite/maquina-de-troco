import { useState } from 'react'
import './App.css'

import BotaoCalcular from './components/BotaoCalcular'
import EntradaValores from './components/EntradaValores'
import ResultadoTroco from './components/ResultadoTroco'
import Mensagem from './components/Mensagem'

function App() {

  // Estados dos valores digitados
  const [valorCompra, setValorCompra] = useState('')
  const [valorPago, setValorPago] = useState('')

  // Estados do resultado
  const [troco, setTroco] = useState(null)
  const [cedulasEMoedas, setCedulasEMoedas] = useState(null)

  // Estado das mensagens
  const [mensagem, setMensagem] = useState('')


  // Função responsável pelo cálculo
  function calcularTroco() {

    // Limpa mensagens anteriores
    setMensagem('')

    // Verifica se os campos foram preenchidos
    if (valorCompra === '' || valorPago === '') {
      setMensagem('Preencha todos os campos.')
      setTroco(null)
      setCedulasEMoedas(null)
      return
    }

    const compra = Number(valorCompra)
    const pago = Number(valorPago)

    // Verifica se os valores são válidos
    if (isNaN(compra) || isNaN(pago) || compra < 0 || pago < 0) {
      setMensagem('Digite valores válidos.')
      setTroco(null)
      setCedulasEMoedas(null)
      return
    }

    // Verifica se o pagamento é suficiente
    if (pago < compra) {
      setMensagem('O valor pago é insuficiente.')
      setTroco(null)
      setCedulasEMoedas(null)
      return
    }

    // Calcula o troco
    const resultadoTroco = pago - compra

    setTroco(resultadoTroco)

    // Verifica se não existe troco
    if (resultadoTroco === 0) {
      setMensagem('Pagamento realizado. Não há troco.')
      setCedulasEMoedas(null)
      return
    }

    // Calcula as cédulas e moedas
    const resultadoCedulasEMoedas =
      calcularCedulasEMoedas(resultadoTroco)

    setCedulasEMoedas(resultadoCedulasEMoedas)
  }


  // Função que calcula a quantidade de cédulas e moedas
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

        <EntradaValores
          valorCompra={valorCompra}
          valorPago={valorPago}
          setValorCompra={setValorCompra}
          setValorPago={setValorPago}
        />

        <Mensagem mensagem={mensagem} />

        <div className="botao">
          <BotaoCalcular
            texto="Calcular Troco"
            onClick={calcularTroco}
          />
        </div>

        <ResultadoTroco
          troco={troco}
          cedulasEMoedas={cedulasEMoedas}
        />

      </div>

    </main>
  )
}

export default App