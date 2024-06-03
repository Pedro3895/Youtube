import { useState,useEffect } from "react";
import Header from "./components/Header";
import Menu from "./components/MenuLat";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Rota from "./Routes";
import { UserStorage } from "./context/userContext";
import BasicExample from "./components/DropDwon"
import MyDropDown from "../src/components/DROP";
import Inicio from "../src/pages/inicio";


function App() {

  //const [openMenu, setOpenMenu] = useState(true)//estado inicial do menu aberto ou fechado, dentro do menu indicamos as mudanças de estado
 
  

  return (

    <UserStorage>
      <BrowserRouter>
        <div className="App">
            <Header useEffect/>
            <div style={{width: '100%', display: 'flex'}}>
              <Menu />
              <div style={{ width:'100%', padding:'50px 70px', boxSizing:'border-box'}}>
                <Rota/>
                
              </div>
            </div>
        </div>
      </BrowserRouter>
    </UserStorage>
  );
}

export default App;
