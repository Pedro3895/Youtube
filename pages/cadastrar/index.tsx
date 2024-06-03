import { ButtonsContainer, CheckBoxContainer, ComparePassword, GoogleLogo, MainContainer, MessageContainer, PasswordContainer, PasswordSpan, SignIn, SignUpButton, SignUpContainer, SubTitle, Title, UserEmailInput, InputEmpty, UserNameInput, UserPasswordInput } from "./style";
import { useState, useContext, useRef, useEffect } from 'react';
import { UserContext } from '../../context/userContext';


function Cadastro(){

    const  { cadastro }  = useContext(UserContext);//criamos uma deseestruturação da função handleLogin, que chama-rá o useContext

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [showPassword, setShowPassword] = useState(false);
 
    const handleShowPassword = () => {
        setShowPassword(!showPassword);
      }

    const [comparePassword, setComparePassword] = useState('')
    const [UserNameValid, setUserNameValid] = useState(true)
    const [UserEmailValid, setUserEmailValid] = useState(true)
    const [UserPasswordValid, setUserPasswordValid] = useState(true)
    const [formatEmailValid, setFormatEmailValid] = useState(true)
    const [samePassword, setSamePassword] = useState(true)  

    const nameRef = useRef<HTMLInputElement>(null);
    const emailRef = useRef<HTMLInputElement>(null);
    const passwordRef = useRef<HTMLInputElement>(null);
    const comparePasswordRef = useRef<HTMLInputElement>(null);
    
    useEffect(() => {
        if (nameRef.current !== null) {
          nameRef.current.focus();
        }
      },[])
    
    
    const createUser = ()=>{
        if (name.trim() !==''){
            setUserNameValid(true)
        }
        if (email.trim() !=='') {
            setUserEmailValid(true)
        }
        if (password.trim() !==''&& comparePassword.trim() !==''){
            setUserPasswordValid(true)
        }
        if (name.trim()===''&&email.trim()===''&& password.trim()===''){
            setUserNameValid(false)
            setUserEmailValid(false)
            setUserPasswordValid(false)
            if (nameRef.current) {
                nameRef.current.focus();
            }
        }
        else if (name.trim()===''){
            setUserNameValid(false)
            if (nameRef.current) {
                nameRef.current.focus();
            }
        }
        else if(email.trim()===''){
            setUserEmailValid(false)
            setFormatEmailValid(true)
            if(emailRef.current){
                emailRef.current.focus()
            }
        }
        else if (!/\S+@\S+\.\S+/.test(email)) {
            setFormatEmailValid(false)
            setUserEmailValid(false)
            if (emailRef.current) {
              emailRef.current.focus()
            } 
          }
        else if (password.trim()==='') {
            setUserPasswordValid(false)
            if (passwordRef.current){
                passwordRef.current.focus()
            }  
        }
        else if(comparePassword.trim()===''){
            setUserPasswordValid(false)
            if(comparePasswordRef.current){
                comparePasswordRef.current.focus()
            }
        }
        else if(password !==comparePassword){
            setUserPasswordValid(false)
            setSamePassword(false)
            if(comparePasswordRef.current){
                   comparePasswordRef.current.focus()
            }
        }
        else{
            cadastro(name, email, password)
        }
    }  

    return (
        <>
            <MainContainer>
                <SignUpContainer>
                    <Title>Cadastro</Title>
                        <input  className='name' type = "name" value = {name} onChange = {(e) => setName(e.target.value)} placeholder='Name'/>
                        <input className='email' type = "email" value = {email} onChange = {(e) => setEmail(e.target.value)} placeholder='E-mail'/>
                        <input className='password' type = "password" value = {password} onChange = {(e) => setPassword(e.target.value)} placeholder='Password'/>
                        <button className='button1' onClick = {() => cadastro(name, email, password)}>Cadastrar</button>
                </SignUpContainer>
            </MainContainer>             
        </>
    )
}

export default Cadastro;