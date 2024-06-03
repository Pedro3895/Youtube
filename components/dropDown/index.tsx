import { UserContext } from '../../context/userContext';
import { useContext, useState } from 'react';
import {DropMenu, DropButton, Container1, DropBody, DropHeader, DropItem, IdButton, Logo, Line, ButtonContainer, DropCont, DropText } from './styles';
import { CSSTransition } from 'react-transition-group';
import lua from '../../assets/icones/lua.png';
import sair from '../../assets/icones/sair.png';
import globo from '../../assets/icones/globo.png';
import mudar from '../../assets/icones/mudar.png';
import teclado from '../../assets/icones/teclado.png';
import proteção from '../../assets/icones/proteção.png';
import conta from '../../assets/icones/conta.png';
import dados from '../../assets/icones/dados.png';
import google from '../../assets/icones/google.png';
import studio from '../../assets/icones/studio.png';
import cifrao from '../../assets/icones/cifrao.png';
import { useNavigate, Link } from "react-router-dom";



function Drop(){
    
    const {openDrop, setDrop} = useContext(UserContext);
    const [activeMenu, setActiveMenu] = useState('main');
    const { login, logOut, user } = useContext(UserContext);
    //const [user,setUser] = useState({})
    const navigate = useNavigate();

    

    return(
        <>
            <CSSTransition in ={activeMenu === 'main'} unmountOnExit timeout={500}>
                <Container1>
                    <ButtonContainer>
                        <IdButton onClick={()=> setDrop(!openDrop)}>
                        {user && user.name ? user.name.charAt(0).toUpperCase() : ''}
                        </IdButton>
                    </ButtonContainer>
                    {openDrop?
                        <>
                        <DropCont>
                            <DropHeader>
                                <Logo>{user && user.name ? user.name.charAt(0).toUpperCase() : ''}</Logo>
                                <DropText>PPPPPPPPPPP</DropText>
                                <DropText>GGGGGGGGGGGG</DropText>
                            </DropHeader>
                            <Line/>
                            
                            <DropMenu>
                            <DropBody>
                            <DropButton alt='' src={google}/>
                                <span className='text'>Conta Google</span>
                                <DropButton alt='' src={conta}/>
                                <span className='text'>Mudar de Conta</span>
                                <DropButton alt='' src={sair}/>
                                <span onClick={()=>logOut()}>Sair</span>
                            </DropBody>
                            <Line/>

                            
                            <DropBody >
                           
                                <DropButton  alt='' src={studio} onClick={()=>navigate('/upVideo')}/>
                                <span className='text' onClick={()=>navigate('/upVideo')}>
                                    Studio
                                </span>
                                
                                <DropButton  alt='' src={cifrao}/>
                                <span className='text'>
                                    Comprar Assinaturas
                                </span>
                                
                            </DropBody>
                            
                            <Line/>

                            <DropBody>
                                <DropButton alt='' src={dados}/>
                                <span className='text'>Seus Dados no Youtube
                                </span>
                                <DropButton alt='' src={lua}/>
                                <span className='text'>Aparência: 
                                </span>
                                <DropButton alt='' src={mudar}/>
                                <span className='text'>Idioma
                                </span>
                                <DropButton alt='' src={proteção}/>
                                <span className='text'>Modo Restritivo:
                                </span>
                                <DropButton alt='' src={globo}/>
                                <span className='text'>Local:
                                </span>
                                <DropButton alt='' src={teclado}/>
                                <span className='text'>Atalhos do Teclado
                                </span>
                            </DropBody>
                            <Line/>
                            </DropMenu>

                        </DropCont>
                        </>
                    :
                        <>
                        </>
                    }

                </Container1>
            </CSSTransition>
        </>
    );

}

export default Drop;
