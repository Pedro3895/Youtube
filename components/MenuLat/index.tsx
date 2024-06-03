import { Container, MenuItem, ButtonIcon, MenuItem1, ButtonIcon1, Break, VcConteiner, Titulo,MenuItem2, ButtonIcon2} from "./styles";
import { UserContext } from "../../context/userContext";
import React, { useState, useContext } from "react";
import Inicio from '../../assets/icones/botaodeinicio.png';
import Inscrição from '../../assets/icones/se-inscrever.png';
import Short from '../../assets/icones/Short.png';
import Você from '../../assets/icones/Vc.png';
import canal from '../../assets/icones/canal.png';
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
import { useNavigate, Link } from "react-router-dom";
import Shorts from "../../pages/short";

const itens = [0,0,0]//criamos um array simulando como se tivessemos vários itens ex:[{name:'inicio', link='/videos'}]

const items2 = [{Text:'Seu canal', link:'/canal', Image:canal}, {Text:'Histórico', link:'/historico', Image:historico}, {Text:'Seus vídeos', link:'/s.videos', Image:seu}, {Text:'Assistir mais tarde', link:'/ass.mais', Image:relogio}, {Text:'Vídeos com Gostei', link:'/gostei', Image:joinha} ]

const items = [{name:'Início', link:'/inicio', Image: Inicio}, {name:'Short', link:'/short', Image: Short}, {name:'Inscrições', link:'/inscricoes', Image: Inscrição}]

//const itemP = [{Text: 'Youtube Premium', link: '/premium', Image:premium}, {Text: 'Youtube Studio', link: '/studio', Image:studio}, {Text: 'Youtube Music', link: '/music', Image:music}, {Text: 'Youtube kids', link: '/kids', Image:kids}]

//const itemV = [{Text:'', link:}]

//interface IProps {
//    openMenu:boolean;
//}

function Menu(){//openMenu}: IProps 

    const {openMenu, setOpenMenu} = useContext(UserContext);//contexto global
    const navigate = useNavigate();

    return (
        <>
            <Container openMenu = {openMenu}>
                {items.map((item)=>(  
                    <MenuItem openMenu={openMenu} onClick={()=>navigate(item.link)}>
                      
                        <ButtonIcon alt="" src={item.Image} />
                        <span>{item.name}</span>
                    </MenuItem>
                ))}

                    <MenuItem1 openMenu={openMenu}>
                        <ButtonIcon1 alt='' src={Você}/>
                        <span onClick={()=>navigate('./voce')}>Você</span>             
                    </MenuItem1>
                                    

                    <Break openMenu={openMenu}/>

                    <VcConteiner openMenu={openMenu}>
                        <Titulo openMenu={openMenu}>Você</Titulo>
                    </VcConteiner>    

                    {items2.map((item)=>(  
                    <MenuItem2 openMenu={openMenu} onClick={()=>navigate(item.link)}>
                      
                        <ButtonIcon2 alt="" src={item.Image} />
                        <span className="text">{item.Text}</span>
                    </MenuItem2>
                ))}
                  

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