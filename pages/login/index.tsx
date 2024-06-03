import { useState, useContext, useRef, useEffect } from "react";
import { ButtonsContainer, CheckBoxContainer, EmailInput, GoogleLogo, InvalidEmailMessage, InvalidPasswordMessage, LoginButton, Container, MainContainer, MessageContainer, PasswordInput, SignUp, SubTitle, Title } from "./style";
import { UserContext } from "../../context/userContext";
import {useNavigate} from 'react-router-dom';

function Login(){

    const navigate = useNavigate();
    
    const { handleLogin } = useContext(UserContext);
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); 

    const [validEmail, setValidEmail] = useState(true)

    const [formatEmailValid, setFormatEmailValid] = useState(true)
  
    const [validPassword, setValidPassword] = useState(true)
  
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);

    useEffect(()=>{
        if (emailRef.current !== null) {
            emailRef.current.focus()
        }
    }, [])

    const userLogin =()=>{
        if (email.trim() !=='') {
            setValidEmail(true)
        }
        if (email.trim()==='' && password.trim()==='') {
            setValidEmail(false)
            if (emailRef.current){
                emailRef.current.focus()
            }
        }
        else if(email.trim()==='') {
            setValidEmail(false)
            if (emailRef.current) {
                emailRef.current.focus()
            }
        }
        else if (!/\S+@\S+\.\S+/.test(email)) {
            setFormatEmailValid(false)
            setValidEmail(false)
            if (emailRef.current) {
                emailRef.current.focus()
            }
        }
        else if(password.trim()===''|| password.length<8) {
            setValidPassword(false)
            if (passwordRef.current) {
              passwordRef.current.focus()
            }
        }
        else {
            handleLogin(email, password)
        }
    }

    const [showPassword, setShowPassword] = useState(false);

    const handleShowPassword = ()=>{
        setShowPassword(!showPassword);
    }
    
    return(

        <>
            <MainContainer>
                <Container>
                    <Title>Fazer login</Title>
                    <EmailInput type = "email" value= {email} onChange = {(e:any) => setEmail(e.target.value)} 
                    placeholder='E-mail' validEmail={validEmail} ref={emailRef}  
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            userLogin()
                        }
                    }}/>
                    <MessageContainer>
                        <InvalidEmailMessage invalid={validEmail}>
                            {
                            formatEmailValid?
                            'Digite o seu e-mail'
                            :
                            'O formato desse e-mail é inválido. Digite um e-mail válido.'
                            }
                        </InvalidEmailMessage>
                    </MessageContainer>
                    <PasswordInput type = "password" value= {password} onChange = {(e:any) => setPassword(e.target.value)} 
                        placeholder='Password' ref={passwordRef} validPassword={validPassword} 
                        onKeyDown={(e) => {
                            if(e.key === 'Enter') {
                                userLogin()
                            }
                            if (e.key === " ") {
                                e.preventDefault();
                            }
                        }}
                    />
                    <MessageContainer>
                        <InvalidPasswordMessage invalid={validPassword}>
                            Digite uma senha válida  
                        </InvalidPasswordMessage>
                    </MessageContainer>
                    <CheckBoxContainer>
                        <input type="checkbox" id="show-password" checked={showPassword} onChange={handleShowPassword} />
                        <label htmlFor="show-password">Mostrar senha</label>
                    </CheckBoxContainer>
                    <ButtonsContainer>
                        <SignUp onClick= {() => navigate('/cadastrar')}>Cadastrar</SignUp>
                        <LoginButton onClick= {() => {userLogin(); navigate('/inicio')}}>LOGIN</LoginButton>
                    </ButtonsContainer> 
                </Container>
            </MainContainer>
        </>
    )
}

export default Login;