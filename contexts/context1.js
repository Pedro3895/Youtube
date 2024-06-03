import { createContext, useEffect, useState } from "react";


export const UserContext1 = createContext();

export const UserStore = ({ children }) => {
    const [openMenu, setOpenMenu] = useState(false)
    const [logIn, logOut] = useState(false);
    const [data, setData] = useState({})//inicialmente sera um elemento vazil ({}), 
    //data:função para guardar dados, setDada:função para utilizar os dados


    return(
        <UserContext1.Provider value={{openMenu, setOpenMenu}}>
            {children}
        </UserContext1.Provider>
    )
}


//{openMenu} setOpenMenu={setOpenMenu}>