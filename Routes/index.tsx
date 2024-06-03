import { BrowserRouter, Route, Routes } from "react-router-dom";
import Inicio from "../pages/inicio";
import Shorts from "../pages/short";
import Incricoes from "../pages/inscricoes";
import Voce from "../pages/voce";
import Canal from "../pages/canal";
import Gostei from "../pages/gostei";
import Historico from "../pages/historico";
import Svideos from "../pages/s.videos";
import AssMais from "../pages/ass.mais";
import Login from "../pages/login";
import Procurar from "../pages/procurar"
import Cadastrar from "../pages/cadastrar";



function Rota(){

    return (
        <Routes>
            <Route path="/inicio" element={<Inicio />}/>
            <Route path="/short" element={<Shorts />}/>
            <Route path="/inscricoes" element={<Incricoes />}/>
            <Route path="/ass.mais" element={<AssMais />}/>
            <Route path="/canal" element={<Canal />}/>
            <Route path="/gostei" element={<Gostei />}/>
            <Route path="/historico" element={<Historico />}/>
            <Route path="/s.videos" element={<Svideos />}/>
            <Route path="/seusVideos" element={<Svideos />}/>
            <Route path="/login" element={<Login />}/>
            <Route path="/voce" element={<Voce/>}/>
            <Route path="/procurar" element={<Procurar/>}/>
            <Route path="/cadastrar" element={<Cadastrar/>}/>
            

        </Routes>
    )
}

export default Rota;