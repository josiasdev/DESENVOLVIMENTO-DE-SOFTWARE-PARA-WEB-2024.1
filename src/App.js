//import HelloWorld from "./components/01_HelloWorld/helloworld";
//import FuncoesInternas from "./components/02FuncoesInternas/FuncoesInternas";
//import Galaxia from "./components/04Children/Galaxia";
//import ComPai from "./components/05ComPaiFilho/ComPai";
//import Contador from "./components/06Estados/Contador";
//import Pokemon from "./components/06Estados/Pokemon";
//import { CompA } from  "./components/07PropDrilling/PropDrillingV2"
//import { CompA } from "./components/08Context/CompContexto";
//import PokemonPrincipal from "./components/09PokemonContexto/PokemonPrincipal";
// import Pai from "./components/atividade01/questao01/01Pai";
// import * as PC from './components/atividade01/02MeuPC';
// import World from './components/atividade01/World';
// import Arena from './components/atividade01/Arena';
// import { Hero, Enemy } from './components/atividade01/03Batalha';
// import goku from './components/atividade01/goku.png';
// import gohan from './components/atividade01/gohan.png';
import FunctionContextA from './components/atividade02/01Color/FunctionContextA'
import ComponenteAvo from './components/atividade02/02Pokemon/ComponenteAvo'
import ComponenteAvoContador from './components/atividade02/03Contador/ComponenteAvo'
function App() {
  return (
    <div>
      <FunctionContextA/>
      <hr/>
      <ComponenteAvo/>
      <hr/>

      <ComponenteAvoContador/>
    </div>
  );
}

export default App;