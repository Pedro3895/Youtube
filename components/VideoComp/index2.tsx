import Categorias from '../Categorias';
import { UserContext } from "../../context/userContext";
import React, { useState, useContext } from "react";
import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from './styles';
import ShortSec from '../ShortsSec';

function VideoComp1({ video }:any){

    const {openMenu, setOpenMenu} = useContext(UserContext);

    return (
        <>  
            <Container>
                <ImageBanner src='https://i.ytimg.com/an_webp/Iz_FrUROP_U/mqdefault_6s.webp?du=3000&sqp=CNTs_K4G&rs=AOn4CLCAkFghTsZisj88D6NFRHvyYki5jQ' openMenu = {openMenu}/>
                <TitleContainer>
                    <ChannelImage>
                        C
                    </ChannelImage>
                    <TextContainer>
                        <Title>{video.tilte}</Title>
                        <TextCard>{video.channel}</TextCard>
                        <TextCard>{video.views} de visualizações há ● {video.time}</TextCard>
                    </TextContainer>
                </TitleContainer>
            </Container>




        </>
    )
}

export default VideoComp1;


