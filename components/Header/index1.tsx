import { ButtonContainer, ButtonContainer1, ButtonIcon, Container, HeaderButton, LogoContainer, SearchButton, SearchContainer, SearchInput, SearchIputContainer } from "./style";
import { UserContext } from "../../contexts/myContext";
import React, { useState, useContext } from "react";
import HanburgerIcon from '../../assets/hamburger.png';
import Logo from '../../assets/YouTube-Logo_2.png';
import Lupa from '../../assets/lupa.png';
import Mic from '../../assets/microfone-gravador.png';
import Cam from '../../assets/video.png';
import Sino from '../../assets/sino.png';

//interface TProps{
//    openMenu: boolean,
//    setOpenMenu: (openMenu: boolean) =>void//será uma função que altera o valor do estado, recebe o openMenu e terá como retorno vazio
//}

function Header1(){

    const {openMenu, setOpenMenu} = useContext(UserContext);

    return (
        <Container>
            <LogoContainer>
                <ButtonContainer onClick={()=>setOpenMenu(!openMenu)} margin = '0 10px 0 0'>
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
                    <SearchInput placeholder="pesquisar"/>
                </SearchIputContainer>
                <SearchButton>
                    <ButtonIcon alt='' src={Lupa}/>
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
                <ButtonContainer1 margin = '0 0 0 10px'>
                    P
                </ButtonContainer1>
            </HeaderButton>

        </Container>
    )
}

export default Header1;

