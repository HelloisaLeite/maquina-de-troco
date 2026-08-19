import './EntradaValores.css'

function EntradaValores({
  valorCompra,
  valorPago,
  setValorCompra,
  setValorPago
}) {
  return (
    <div className="entrada-valores">

      <div className="campo">
        <label htmlFor="valorCompra">
          Valor
        </label>

        <input
          id="valorCompra"
          type="number"
          step="0.01"
          min="0"
          value={valorCompra}
          onChange={(e) => setValorCompra(e.target.value)}
          placeholder=""
        />
      </div>

      <div className="campo">
        <label htmlFor="valorPago">
          Valor recebido
        </label>

        <input
          id="valorPago"
          type="number"
          step="0.01"
          min="0"
          value={valorPago}
          onChange={(e) => setValorPago(e.target.value)}
          placeholder=""
        />
      </div>

    </div>
  )
}

export default EntradaValores