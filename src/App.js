import React from 'react'
//import Helloworld from "./components/01_HelloWorld/helloworld";
//import FuncoesInternas from './components/02_funcoesinternas/funcoesinternas';
// import SistemaSolar from './components/04Children/SistemaSolar';
// import Planeta from './components/04Children/Planeta';
import MeusDados from './components/atividade00/01MeusDados';
import MeusDados2 from './components/atividade00/02MeusDados';
import Temperatura from './components/atividade00/03Temperatura';

function App() {
  return (
    <div>
      <MeusDados/>
      <MeusDados2 nome="Josias" curso="Engenharia de Software" universidade="UFC Quixadá"/>
      <Temperatura/>
    </div>
  );
}

export default App;
