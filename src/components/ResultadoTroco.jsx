import './ResultadoTroco.css'

function ResultadoTroco({ troco, cedulasEMoedas }) {

  if (troco === null || cedulasEMoedas === null) {
    return null
  }

  return (
    <div className="resultado">

      <p className="valor-resultado">
        Resultado: R$ {troco.toFixed(2).replace('.', ',')}
      </p>

      <div className="devolver">
        <p>Devolver:</p>

        {cedulasEMoedas.nota100 > 0 && (
          <p> {cedulasEMoedas.nota100} - Nota R$ 100,00</p>
        )}

        {cedulasEMoedas.nota50 > 0 && (
          <p>{cedulasEMoedas.nota50} - Nota R$ 50,00</p>
        )}

        {cedulasEMoedas.nota20 > 0 && (
          <p>{cedulasEMoedas.nota20} - Nota R$ 20,00</p>
        )}

        {cedulasEMoedas.nota10 > 0 && (
          <p>{cedulasEMoedas.nota10} - Nota R$ 10,00</p>
        )}

        {cedulasEMoedas.nota5 > 0 && (
          <p>{cedulasEMoedas.nota5} - Nota R$ 5,00</p>
        )}

        {cedulasEMoedas.nota2 > 0 && (
          <p>{cedulasEMoedas.nota2} - Nota R$ 2,00</p>
        )}

        {cedulasEMoedas.moeda1 > 0 && (
          <p>{cedulasEMoedas.moeda1} - Moeda R$ 1,00</p>
        )}

        {cedulasEMoedas.moeda50 > 0 && (
          <p>{cedulasEMoedas.moeda50} - Moeda R$ 0,50</p>
        )}

        {cedulasEMoedas.moeda25 > 0 && (
          <p>{cedulasEMoedas.moeda25} - Moeda R$ 0,25</p>
        )}

        {cedulasEMoedas.moeda10 > 0 && (
          <p>{cedulasEMoedas.moeda10} - Moeda R$ 0,10</p>
        )}

        {cedulasEMoedas.moeda05 > 0 && (
          <p>{cedulasEMoedas.moeda05} - Moeda R$ 0,05</p>
        )}

      </div>

    </div>
  )
}

export default ResultadoTroco