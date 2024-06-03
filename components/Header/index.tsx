import { ButtonContainer, ButtonContainer1, ButtonIcon, Container, HeaderButton, LogoContainer, SearchButton, SearchContainer, SearchInput, SearchIputContainer } from "./style";
import HanburgerIcon from '../../assets/icones/hamburger.png';
import Logo from '../../assets/icones/YouTube-Logo_2.png';
import Lupa from '../../assets/icones/lupa.png';
import Mic from '../../assets/icones/microfone-gravador.png';
import Cam from '../../assets/icones/video.png';
import Sino from '../../assets/icones/sino.png';
//import { UserContext1 } from "../../contexts/context1";
import React, { useState, useContext } from "react";
import Categorias from "../Categorias";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/userContext";
import  Drop from "../../components/dropDown";
import { useSearchContext } from "../../context/searchContext";
import useLocation from "react-router-dom";
import ShowCategorias from "../ShowCategorias";


//interface TProps{
//    openMenu: boolean,
//    setOpenMenu: (openMenu: boolean) =>void//será uma função que altera o valor do estado, recebe o openMenu e terá como retorno vazio
//}

function Header(){

    
    const { setSearch } = useSearchContext();
    const SearchContext = useSearchContext();
    //const [search, setSearch] = useState('');
    const [text, setText] = useState('');
    const {openMenu, setOpenMenu} = useContext(UserContext);
    const navigate = useNavigate();
    const { login, logOut } = useContext(UserContext);
    //const {openDrop, setdrop} = useContext(UserContext);

    function handleInput(text: string) {
        setText(text)}
    
    
    return (
        <>

            <Container>
                <LogoContainer>
                    <ButtonContainer onClick={() => setOpenMenu(!openMenu)} margin = '0 10px 0 0' >
                
                        <ButtonIcon alt='' src={HanburgerIcon}>

                        </ButtonIcon>
                        <img 
                            style={{cursor:'pointer', width:'100px'}}
                            alt=''
                            src={Logo}
                        />
                    </ButtonContainer>
                </LogoContainer>

                <SearchContainer>
                    <SearchIputContainer>
                        <SearchInput placeholder="pesquisar" value={text} onChange = {(e) => handleInput(e.target.value)}/>
                    </SearchIputContainer>
                    <SearchButton>
                        <ButtonIcon alt='' src={Lupa} onClick={() =>{setSearch(text); navigate('/procurar')}}/>
                    </SearchButton>
                    <ButtonContainer margin = '0 0 0 10px'>
                        <ButtonIcon alt='' src={Mic}/>
                    </ButtonContainer>
                </SearchContainer>

                <HeaderButton>
                    <ButtonContainer margin = '0 0 0 10px'>
                        <ButtonIcon alt='' src={Cam}/>
                    </ButtonContainer>
                    <ButtonContainer margin = '0 0 0 10px'>
                        <ButtonIcon alt='' src={Sino}/>
                    </ButtonContainer>

                    {login?
                        <>  
                         <ButtonContainer1 margin = '0 0 0 10px' >
                            <Drop/>
                        </ButtonContainer1>
                        
                        </>  
                    :
                    <button onClick={() => navigate('/login')}>Fazer Login</button>
                    }
                </HeaderButton>
            </Container>
            <ShowCategorias>
                <Categorias />
            </ShowCategorias>    
        </>

    )
}

export default Header;

//</ButtonContainer>
//
//{login?
//    <>  
//     <ButtonContainer1 margin = '0 0 0 10px' >
//        <Drop/>
//    </ButtonContainer1>
//    <span onClick={()=>logOut()}>Sair</span>
//    </>  
//:
//<button onClick={() => navigate('/login')}>Fazer Login</button>
//}
//</HeaderButton>
//</Container>
//<Categorias />
//</>
//)
//}
