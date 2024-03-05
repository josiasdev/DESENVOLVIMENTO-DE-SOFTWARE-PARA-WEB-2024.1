import React from 'react'
//import Helloworld from "./components/01_HelloWorld/helloworld";
//import FuncoesInternas from './components/02_funcoesinternas/funcoesinternas';
import SistemaSolar from './components/04Children/SistemaSolar';
import Planeta from './components/04Children/Planeta';

function App() {
  return (
    <div>
      <h1>Desenvolvimento de Software para WEB!</h1>
      <h3>Prof. Jefferson de Carvalho</h3>

      <SistemaSolar >
        <Planeta nome="Mércurio" tipo="rochoso" pos="1" imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg" />
        <Planeta nome="Vênus" tipo="rochoso" pos="2" imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg/220px-PIA23791-Venus-RealAndEnhancedContrastViews-20200608_%28cropped2%29.jpg" />
        <Planeta nome="Terra" tipo="rochoso" pos="3" imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/220px-The_Blue_Marble_%28remastered%29.jpg" />
        <Planeta nome="Marte" tipo="rochoso" pos="4" imagem="https://mars.nasa.gov/system/site_config_values/meta_share_images/1_mars-nasa-gov.jpg" />
        <Planeta nome="Júpiter" tipo="gasoso" pos="5" imagem="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/300px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg" />
      </SistemaSolar>
    </div>
  );
}

export default App;
