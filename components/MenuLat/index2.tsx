import { Container, MenuItem, ButtonIcon, MenuItem1, ButtonIcon1, Break, VcConteiner, Titulo,MenuItem2, ButtonIcon2} from "./styles";
import { UserContext } from "../../context/userContext";
import React, { useState, useContext } from "react";
import Inicio from '../../assets/icones/botaodeinicio.png';
import Inscrição from '../../assets/icones/se-inscrever.png';
import Short from '../../assets/icones/Short.png';
import Você from '../../assets/icones/Vc.png';
import  canal from '../../assets/icones/canal.png';
import historico from '../../assets/icones/historia.png';
import relogio from '../../assets/icones/relogio.png';
import joinha from '../../assets/icones/gostar.png';
import seu from '../../assets/icones/seu.png';
import compras from '../../assets/icones/sacola-de-compras.png';
import podcast from '../../assets/icones/podcast.png';
import aovivo from '../../assets/icones/transmissao-ao-vivo (1).png';
import esportes from '../../assets/icones/trofeu.png';
import aprender from '../../assets/icones/aprendendo.png';
import game from '../../assets/icones/controle-de-jogo.png';
import emAlta from '../../assets/icones/fogo.png';
import musica from '../../assets/icones/nota-musical.png';
import news from '../../assets/icones/noticias-ao-vivo.png';
import filme from '../../assets/icones/filme.png';
import play from '../../assets/icones/jogar.png';
import premium from '../../assets/icones/youtubePre.png';
import studio from '../../assets/icones/youtuneStud.png';
import music from '../../assets/icones/youtubeMusic.png';
import kids from '../../assets/icones/youtubekids.png';
import config from '../../assets/icones/config.png';
import feedBack from '../../assets/icones/opiniao.png';
import bandeira from '../../assets/icones/bandeiras.png';
import ajuda from '../../assets/icones/ajuda.png';

const itens = [0,0,0]//criamos um array simulando como se tivessemos vários itens ex:[{name:'inicio', link='/videos'}]

//const items = [{name:'Início', link:'/'}, {name:'Short', link:'/'}, {name:'Inscrições', link:'/'}, {name:'Você', link:'/'}]

//interface IProps {
//    openMenu:boolean;
//}

function Menu(){//openMenu}: IProps 

    const {openMenu, setOpenMenu} = useContext(UserContext);//contexto global

    return (
        <>
            <Container openMenu = {openMenu}>
                
                    <MenuItem openMenu = {openMenu}>
                        <ButtonIcon alt='' src={Inicio}/>
                        <span>
                        Início
                        </span>
                    </MenuItem>

                    <MenuItem openMenu = {openMenu}>
                        <ButtonIcon alt='' src={Short}/>
                        <span>
                        Shorts
                        </span>                        
                    </MenuItem>

                    <MenuItem openMenu = {openMenu}>
                        <ButtonIcon alt='' src={Inscrição}/>
                        <span>
                        Inscrições
                        </span>                      
                    </MenuItem>

                    <MenuItem1 openMenu={openMenu}>
                        <ButtonIcon1 alt='' src={Você}/>
                        <span>
                        Você
                        </span>             
                    </MenuItem1>

                    <Break openMenu={openMenu}/>

                    <VcConteiner openMenu={openMenu}>
                        <Titulo openMenu={openMenu}>Você</Titulo>
                    </VcConteiner>    

                        

                    <MenuItem2 openMenu = {openMenu}>
                        <ButtonIcon2 alt='' src={canal}/>
                        <span className="text">
                            Seu canal
                        </span>
                    </MenuItem2>

                    <MenuItem2 openMenu = {openMenu}>
                        <ButtonIcon2 alt='' src={historico}/>
                        <span className="text">
                            Histórico
                        </span>
                    </MenuItem2>

                    <MenuItem2 openMenu = {openMenu}>
                        <ButtonIcon2 alt='' src={seu}/>
                        <span className="text">
                            Seus vídeos
                        </span>
                    </MenuItem2>

                    <MenuItem2 openMenu = {openMenu}>
                        <ButtonIcon2 alt='' src={relogio}/>
                        <span className="text">
                            Assistir mais tarde
                        </span>
                    </MenuItem2>

                    <MenuItem2 openMenu = {openMenu}>
                        <ButtonIcon2 alt='' src={joinha}/>
                        <span className="text">
                            Vídeos  com "Gostei" 
                        </span>
                    </MenuItem2>

                    <Break openMenu={openMenu}/>

                    <VcConteiner openMenu={openMenu}>
                        <Titulo openMenu={openMenu}>Inscrições</Titulo>
                    </VcConteiner>    

                        

                    
                    {itens.map(()=>(
                        <MenuItem2 openMenu={openMenu}>
                            <ButtonIcon1 alt='' src={play}/>
                            Vídeo
                        </MenuItem2>
                    ))} 
                        

                    <Break openMenu={openMenu}/>

                    <VcConteiner openMenu={openMenu}>
                        <Titulo openMenu={openMenu}>Explorar</Titulo>
                    </VcConteiner>       


                    <MenuItem2 openMenu = {openMenu}>
                        <ButtonIcon2 alt='' src={emAlta}/>
                        <span className="text">
                            Em alta
                        </span>
                    </MenuItem2>

                    <MenuItem2 openMenu = {openMenu}>
                        <ButtonIcon2 alt='' src={compras}/>
                        <span className="text">
                            Shopping
                        </span>
                    </MenuItem2>

                    <MenuItem2 openMenu = {openMenu}>
                        <ButtonIcon2 alt='' src={musica}/>
                        <span className="text">
                            Núsica
                        </span>
                    </MenuItem2>

                    <MenuItem2 openMenu = {openMenu}>
                        <ButtonIcon2 alt='' src={filme}/>
                        <span className="text">
                            Filmes
                        </span>
                    </MenuItem2>

                    <MenuItem2 openMenu = {openMenu}>
                        <ButtonIcon2 alt='' src={aovivo}/>
                        <span className="text">
                            Ao vivo 
                        </span>
                    </MenuItem2>

                    <MenuItem2 openMenu = {openMenu}>
                        <ButtonIcon2 alt='' src={game}/>
                        <span className="text">
                            Jogos
                        </span>
                    </MenuItem2>

                    <MenuItem2 openMenu = {openMenu}>
                        <ButtonIcon2 alt='' src={news}/>
                        <span className="text">
                            Notícias
                        </span>
                    </MenuItem2>

                    <MenuItem2 openMenu = {openMenu}>
                        <ButtonIcon2 alt='' src={esportes}/>
                        <span className="text">
                            Esportes
                        </span>
                    </MenuItem2>

                    <MenuItem2 openMenu = {openMenu}>
                        <ButtonIcon2 alt='' src={aprender}/>
                        <span className="text">
                            Aprender
                        </span>
                    </MenuItem2>

                    <MenuItem2 openMenu = {openMenu}>
                        <ButtonIcon2 alt='' src={podcast}/>
                        <span className="text">
                            Podcast 
                        </span>
                    </MenuItem2>

                    <Break openMenu={openMenu}/>

                    <VcConteiner openMenu={openMenu}>
                        <Titulo openMenu={openMenu}>Youtube Premium</Titulo>
                    </VcConteiner>     

                     <MenuItem2 openMenu = {openMenu}>
                        <ButtonIcon2 alt='' src={premium}/>
                        <span className="text">
                            Youtube Premium
                        </span>
                    </MenuItem2>

                    <MenuItem2 openMenu = {openMenu}>
                        <ButtonIcon2 alt='' src={studio}/>
                        <span className="text">
                            Youtube Studio
                        </span>
                    </MenuItem2>

                    <MenuItem2 openMenu = {openMenu}>
                        <ButtonIcon2 alt='' src={music}/>
                        <span className="text">
                            Youtube Music
                        </span>
                    </MenuItem2>

                    <MenuItem2 openMenu = {openMenu}>
                        <ButtonIcon2 alt='' src={kids}/>
                        <span className="text">
                            Youtube Kids
                        </span>
                    </MenuItem2>

                    <Break openMenu={openMenu}/>

                    <MenuItem2 openMenu = {openMenu}>
                        <ButtonIcon2 alt='' src={config}/>
                        <span className="text">
                            Configuração
                        </span>
                    </MenuItem2>

                    <MenuItem2 openMenu = {openMenu}>
                        <ButtonIcon2 alt='' src={bandeira}/>
                        <span className="text">
                            Histórico de denúncia
                        </span>
                    </MenuItem2>

                    <MenuItem2 openMenu = {openMenu}>
                        <ButtonIcon2 alt='' src={ajuda}/>
                        <span className="text">
                            Ajuda
                        </span>
                    </MenuItem2>


                    <MenuItem2 openMenu = {openMenu}>
                        <ButtonIcon2 alt='' src={feedBack}/>
                        <span className="text">
                            Enviar Feedback
                        </span>
                    </MenuItem2>
                    
    
       

            </Container>          
        </>    
    )
}

export default Menu;

//ter vários <MenuItem> ficaria desorganizado e espaçoso, normalmente receberiamos os itens apartir de uma requisição do backend 
//{itens.map(()=>())} 