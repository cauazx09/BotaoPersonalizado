
import BotaoPersonalizado from './components/BotaoPersonalizado';

function App() {
  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Meus Botões Reutilizáveis</h2>

      {/* Reutilizando o MESMO componente, mas com resultados visuais diferentes graças às Props */}
      <BotaoPersonalizado texto="Salvar" />
      <BotaoPersonalizado texto="Cancelar" />
      <BotaoPersonalizado texto="Excluir" />
    </div>
  );
}

export default App;
