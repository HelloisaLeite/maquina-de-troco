function BotaoCalcular({ texto, onClick }) {
  return (
    <button className="botao-calcular" onClick={onClick}>
        {texto}
    </button>
  )
};

export default BotaoCalcular