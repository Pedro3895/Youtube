import { AddVideoButton, ClearButton, CloseButton, Container, Modal, InputEmpty, MessageContainer, ModalContent, ModalTitle, ThumbnailURL, UserContainer, UserName, VideoDescription, VideoTitle, YourVideosContainer } from "./style"
import YourVideosCards from "../../components/cardSeus";
import { useContext, useState, useRef } from "react";
import { UserContext } from "../../context/userContext";


function Svideos(){

    const {openMenu, SetopenMenu} = useContext(UserContext);
    const {user, userVideos, createVideos, token, upVideos, getVideos, serUserVideos} = useContext(UserContext);
    const users_id = user.id;

    interface Videos{
        id: string;
        title:string;
        thumbnail:string;
        description: string;
        date: string
    }

    const [thumbnail, setThumbnail] = useState('');
    const [title, setTitle] = useState('');
    const[description, setDescription] = useState('');
    const [data, setDate] = useState('');

    const thumbnailRef = useRef<HTMLInputElement>(null);
    const titleRef = useRef<HTMLInputElement>(null);
    const descriptionRef = useRef<HTMLInputElement>(null);

    const[thumbnailValid, setThumbnailValid] = useState(true);
    const[titleValid, settitleValid] = useState(true);
    const[descriptionValid, setDescriptionValid] = useState(true);

    const sendVideo = () => {
        const date: Date = new Date();

        if (thumbnail.trim() !==''){
            setThumbnailValid(true)
        }
        if (title.trim() !==''){
            settitleValid(true)
        }
        if (description.trim() !==''){
            setDescriptionValid(true)
        }
        if (thumbnail.trim() ==='' && title.trim()==='' && description.trim()===''){
            setThumbnailValid(false)
            settitleValid(false)
            setDescriptionValid(false)
            if (thumbnailRef.current) {
                thumbnailRef.current.focus()
            }            
        } else if (title.trim()===''){
            settitleValid(false)
            if(titleRef.current) {
                titleRef.current.focus()
            }
        }else if(description.trim()===''){
            setDescriptionValid(false)
            if(descriptionRef.current) {
                descriptionRef.current.focus()
            }
        }
        else {
            upVideos(token, users_id, title, description, thumbnail);
            //createVideos(token, users_id, title, description, thumbnail)
            setHideModal(true)
            clearInputs()   
        }
    }

    const clearInputs = () =>{
        if(thumbnailRef.current){
            thumbnailRef.current.value = ''
            thumbnailRef.current.focus()
            setThumbnail('')
        }
        if (titleRef.current){
            titleRef.current.value = ''
            setTitle('')
        }
        if (descriptionRef.current){
            descriptionRef.current.value = ''
            setDescription('')
        }
    }

    const closeModal = () => {
        clearInputs()
        setThumbnailValid(true)
        settitleValid(true)
        setDescriptionValid(true)
        setHideModal(true)
    }

    function getTimedifference(date: string): string {
        const diff = Date.now() - Date.parse(date);
        const minute = 60 * 1000;
        const hour =60 * minute;
        const day = 24 * hour;
        const week = 7 * day;
        const month = 30 * day;
        const year = 12* month;

        if ( diff < minute * 5) {
            return "Agora";
        } else if ( diff < hour ){
            const minutes = Math.floor(diff/ minute);
            return `Há ${minutes} ${minutes< 2? "minuto": "minutos"}`;
        } else if ( diff < day ) {
            const hours = Math.floor(diff/ hour);
            return `Há ${hours} ${hours < 2? "hora" : "horas"}`;            
        } else if ( diff< week ){
            const days = Math.floor(diff / day);
            return `Há ${days} ${days < 2? "dia" : "dias"}`;
        }else if (diff < month) {
            const weeks = Math.floor(diff/week);
            return `Há ${week} ${weeks < 2? "semana": "semanas"}`;
        }else if (diff < year){
            const months = Math.floor(diff/month);
            return `Há ${months} ${month < 2? "mês": "meses"}`;
        }else {
            const years = Math.floor(diff/year);
            return `Há ${years} ${years<2? "ano": "anos"}`;
        }
    }

    const [hideModal, setHideModal] = useState(true)
    


    return (
        <>
            <YourVideosContainer>
                <Container openMenu={openMenu}>
                    <UserContainer>
                        <UserName>{user && user.nome? user.nome:''}</UserName>
                        <AddVideoButton onClick={()=> setHideModal(false)}>Cadastrar Vídeo</AddVideoButton>
                        <Modal hideModal = {hideModal}>
                            <ModalContent>
                                <CloseButton onClick={closeModal}>X</CloseButton>
                                <ModalTitle>Enviar novo Vídeo</ModalTitle>
                                <ThumbnailURL type='text' placeholder='URL da thumbnail ex:https://images.server.com/120/1209131.jpg' 
                                onChange={(e:any) => setThumbnail(e.target.value)}
                                maxLength={200}
                                ref={thumbnailRef}
                                valid={thumbnailValid}
                                />
                                <MessageContainer>
                                    <InputEmpty valid={thumbnailValid}>Digite a URL da thumbnail</InputEmpty>
                                </MessageContainer>
                                <VideoTitle type='text' onChange = {(e:any)=>setTitle(e.target.value)}
                                placeholder='Título do Vídeo'
                                maxLength={100}
                                ref={titleRef}
                                valid={titleValid}
                                />
                                <MessageContainer>
                                    <InputEmpty valid={titleValid}>Digite o Título do Vídeo</InputEmpty>
                                </MessageContainer>
                                <VideoDescription type='text' onChange={(e:any)=>setDescription(e.target.value)}
                                placeholder='Descrição do Vídeo'
                                maxLength={200}
                                ref={descriptionRef}
                                valid={descriptionValid}
                                />
                                <MessageContainer>
                                <InputEmpty valid={descriptionValid}>Digite a descrição do vídeo</InputEmpty>
                                </MessageContainer>
                                <AddVideoButton onClick={sendVideo}>Adicionar Vídeo</AddVideoButton>
                                <ClearButton onClick={clearInputs}>Limpar</ClearButton>
                            </ModalContent>
                        </Modal>
                    </UserContainer>
                    {Array.isArray(userVideos) ? (
                        
                        userVideos.map((videos: Videos) =>
                            <YourVideosCards
                                title={videos.title}
                                thumbnail={videos.thumbnail}
                                channelImage={user && user.name ? user.name.charAt(0).toUpperCase() : ''}
                                details={videos.description}
                                date={getTimedifference(videos.date)}
                                key={videos.id}                    
                            />)
                        )
                        :
                        (
                        <h1>Esse canal não possui vídeos</h1>
                        )
                    }
                </Container>
                
            </YourVideosContainer>
        </>
    )
}

export default Svideos;