import { createContext, useEffect, useState } from "react";//createContext:para criar contextos

export const UserContext = createContext();//método, onde a constante UserContext é igual a execução do creatContext

//store responsavel por armazenar nosso contexto
export const UserStore = ({ children }) => {
    const [login, setLogin] = useState(false) 
    const [data, setData] = useState({})//inicialmente sera um elemento vazil ({}), 
    //data:função para guardar dados, setDada:função para utilizar os dados

    useEffect(()=>{//tambem pode ser utilizado para executar o callback quando o componente é renderizado
       setData({name: "Paulo", age:22})//o set data é acionado e começa a guardar informação
    },[])
//apó executar a função podemos utilizar os dados provenientes se os colocarmos dentro de um estado

    return(
        <UserContext.Provider value={{login, setLogin}}>
            {children}
        </UserContext.Provider>
    )
}


