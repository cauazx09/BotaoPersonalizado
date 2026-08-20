// O componente recebe 'props' (um objeto contendo todas as propriedades passadas a ele)
function BotaoPersonalizado(props) {
  return (
    <button style={{ margin: '5px', padding: '10px 20px', cursor: 'pointer' }}>
      {/* Usamos as chaves {} para injetar o valor do JavaScript no meio do HTML */}
      {props.texto}
    </button>
  );
}

export default BotaoPersonalizado;
