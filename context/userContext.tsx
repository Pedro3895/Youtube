import { createContext, useEffect, useState } from "react";
import api from "../api";

export const UserContext = createContext({} as any);

export const UserStorage = ({ children }: any) => {
    const [login, setLogin] = useState(false);
    const [user, setUser] = useState({});
    const [token, setToken] = useState(localStorage.getItem('token') as string);//resolver o problema do set-login
    const [openMenu, setOpenMenu] = useState((false))
    const [openDrop, setDrop] = useState(false);
    const [userVideos, setUserVideos] = useState([]);

    

    const getVideos =  (token:any, users_id:any) => {
        api.get(`/videos/get-video/${users_id}`,{ headers: { authorization: token } }).then(({ data }) => {
            setUserVideos(data.videos);
            //console.log(data.videos)
            console.log(data.videos)
          }
        ).catch((error)=> {
          console.log('erro ao buscar vídeos', error);
        })
    }

    const getUser = (token: string) =>{
        api.get('/user/get-user', {headers:{Authorization: token}}).then(({ data }) => {
            setUser(data.user);
            setLogin(true);
            getVideos(token, data.user.id);
            console.log(data.user.id);
            
        }).catch((error) => {
            console.log('Usuário não autenticado', error)
        })
    }
    
   
     

    useEffect(() => {
        getUser(token);
    }, []);

    const logOut = () => {
        localStorage.removeItem('token');
        setLogin(false);
        setUser({});
    }

    const handleLogin = (email: string, password: string ) =>{
        api.post('/user/sign-in', {email, password} ).then(({ data }) => {
            setLogin(true);
            localStorage.setItem('token', data.token);//
            setToken(data.token);
            getUser(data.token);

        }).catch ((error) => {
            console.log('não foi possivel fazer o login', error);
        })

        
    }

    const cadastro = (name:string, email: string, password: string) =>{
        api.post("/user/sign-up", {name, email, password} ).then(() =>{
            
            console.log('usuario cadastrado')
            handleLogin(email,password);
    
        }).catch ((error)=>{
            console.log('não foi possível cadastrar usuário', error);
        })

    }

    const upVideos = (users_id:any, title:string, descripition:string, thumbnail:any)  =>{
        api.get("/user/get-user", {headers:{Authorization: token}}).then(({data})=>{    
        setLogin(true);        
        setUser(data.user); 
        users_id = data.user.id;
        api.post("/videos/creat-video",  {users_id, title, descripition, thumbnail}, {headers:{Authorization: token}})
        alert('Video enviado com sucesso')
        getUser(token);
    
        }).catch((error)=>{
                console.log('não foi possível fazer o upload do video ', error);
            })       
        }


    const createVideos = async (token: string, users_id: string, title: string, description:string, thumbnail:string) => {
        try{
            const response = await api.post('/videos/creat-video/', {users_id, title, description, thumbnail},
            { headers: {Authorization: token }, 
            
             });
            if(response.status===200){
                alert('Video enviado com sucesso');
                getUser(token);
            }
        } catch(error){
            alert('Não foi possível enviar o vídeo. Tente novamente.');
        }
    }

    return(
        <UserContext.Provider value={{
            login, 
            user,
            openMenu,
            openDrop,
            userVideos, 
            setUserVideos,
            cadastro,
            handleLogin,
            logOut,
            setOpenMenu,
            setDrop,
            createVideos,
            upVideos,
            getVideos
            
        }}> 
            {children}
        
        </UserContext.Provider>
    )

}
