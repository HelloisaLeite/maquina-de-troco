function Mensagem({ mensagem }) {

  if (!mensagem) {
    return null
  }

  return (
    <div className="mensagem">
      {mensagem}
    </div>
  )
}

export default Mensagem