import { Container, Break, TextContainer,TitleContainer, TextCard, Title, ImageBanner, ChannelImage} from './styles';
import { UserContext } from "../../context/userContext";
import React, { useState, useContext } from "react";
import Short from '../../assets/icones/Short.png';
import CardShort from '../../components/cardsShorts';


function ShortSec(){

    const {openMenu, setOpenMenu} = useContext(UserContext);

    const videos = [
        {
            image:'https://i.ytimg.com/an_webp/Iz_FrUROP_U/mqdefault_6s.webp?du=3000&sqp=CNTs_K4G&rs=AOn4CLCAkFghTsZisj88D6NFRHvyYki5jQ', 
            title:"Casually Explained: The World's Strongest Man",
            views:'1,8 Mi'
        },

        { 
            image:"https://i.ytimg.com/vi/kzA7r0OJAcM/hq720_2.jpg?sqp=-oaymwEdCI4CEOADSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLBColzTHXKzJ58T_CnnBEuCaN24-A",
            title:"GUDAN ESCAVANDO...", 
            views:"4,1 mi de visualizações"
        },

        {
            image:"https://i.ytimg.com/vi/lg5tzc3mZAM/hq720_2.jpg?sqp=-oaymwEdCJUDENAFSFXyq4qpAw8IARUAAIhCcAHAAQbQAQE=&rs=AOn4CLBSeb1XMtPECT7nHNjYboAgVFQiQg",
            title:"VIDA DE FORMIGA", 
            views:"13 mi de visualizações"
        },

        {
            image:"https://www.youtube.com/shorts/1zzZ8DU1HrA?t=12&feature=share",
            title:"Como imãs funcionam",
            views:"583 mil de visualizações"
        },

        {
            image:"https://www.youtube.com/shorts/N9snKBmrKlI?t=3&feature=share",
            title:"Até parece que é leitor",
            views:"418 mil de visualizações ",
        }

    ];

    return (
        <>
            <Container openMenu={openMenu}>
            {videos.map((video)=>(
                <CardShort
                title={video.title}
                image={video.image}
                views={video.views}
                />
            ))}
            </Container>
        </>
    )
}

export default ShortSec;



//import { Container, Break, TextContainer,TitleContainer, TextCard, Title, ImageBanner, ChannelImage} from './styles';
//import { UserContext } from "../../context/userContext";
//import React, { useState, useContext } from "react";
//import Short from '../../assets/icones/Short.png';

//function ShortSec(){

//    const {openMenu, setOpenMenu} = useContext(UserContext);

//    const video = [
//        {
//        image:'https://i.ytimg.com/an_webp/Iz_FrUROP_U/mqdefault_6s.webp?du=3000&sqp=CNTs_K4G&rs=AOn4CLCAkFghTsZisj88D6NFRHvyYki5jQ', 
//        title:"Casually Explained: The World's Strongest Man",
//        channelName:'Casually Explained',
//        views:'1,8 Mi',
//        time:' ● 4 meses'  
//    }
//];    
//    return (
//        <>
//            <Container openMenu={openMenu}>
//            <ImageBanner src='https://i.ytimg.com/an_webp/Iz_FrUROP_U/mqdefault_6s.webp?du=3000&sqp=CNTs_K4G&rs=AOn4CLCAkFghTsZisj88D6NFRHvyYki5jQ' openMenu = {openMenu}/>
//                <TitleContainer>
//                    <ChannelImage>
//                        C
//                    </ChannelImage>
//                    <TextContainer>
//                        <Title>Casually Explained: The World's Strongest Man</Title>
//                        <TextCard>Casually Explained</TextCard>
//                        <TextCard>1,8 mi de visualizações há ● 4 meses</TextCard>
//                    </TextContainer>
//                </TitleContainer>
//            </Container>
//        </>
//    )
//}