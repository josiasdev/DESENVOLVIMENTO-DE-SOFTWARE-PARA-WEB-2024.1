//import HelloWorld from "./components/01_HelloWorld/helloworld";
//import FuncoesInternas from "./components/02FuncoesInternas/FuncoesInternas";
//import Galaxia from "./components/04Children/Galaxia";
//import ComPai from "./components/05ComPaiFilho/ComPai";
//import Contador from "./components/06Estados/Contador";
//import Pokemon from "./components/06Estados/Pokemon";
//import { CompA } from  "./components/07PropDrilling/PropDrillingV2"
//import { CompA } from "./components/08Context/CompContexto";
//import PokemonPrincipal from "./components/09PokemonContexto/PokemonPrincipal";
import Pai from "./components/atividade01/questao01/01Pai";
import * as PC from './components/atividade01/02MeuPC';
import World from './components/atividade01/World';
import Arena from './components/atividade01/Arena';
import { Hero, Enemy } from './components/atividade01/03Batalha';
import goku from './components/atividade01/goku.png';
import gohan from './components/atividade01/gohan.png';


function App() {
  return (
    <div>
      <h2>Atividade do Pai: </h2>
      <Pai />
      <hr />
      <h2>Atividade do Meu PC: </h2>
      <PC.PlacaMae nome="MSI Placa mãe Pro A620M-E ProSeries (AMD AM5, DDR5, PCIe 4.0, SATA 6Gb/s, M.2, USB 3.2 Gen 1, Gbps LAN, DVI/HDMI, mATX)" preco={799} />
      <PC.Memoria nome="CORSAIR VENGEANCE Memória de computador compatível com Intel XMP iCUE RGB DDR5 RAM 64GB (2x32GB) 6400MHz CL32 Intel XMP iCUE - Preto (CMH64GX5M2B6400C32)" preco={2.149} />
      <PC.PlacaDeVideo nome="Geforce RTX 4060TI" preco={2.686} />
      <hr />
      <h2>Atividade da Batalha</h2>
      <World>
        <Arena arena="Planeta do Bills deus da destruição Dragon Ball Super">
          <Hero name="Goku Instinto Superior completo" img={goku}/>
          <h3>VS</h3>
          <Enemy name="Gohan Bestial" img={gohan} />
        </Arena>
      </World>
    </div>
  );
}

export default App;