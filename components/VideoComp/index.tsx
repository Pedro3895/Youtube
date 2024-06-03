import Categorias from '../Categorias';
import { UserContext } from "../../context/userContext";
import React, { useState, useContext } from "react";
import { ChannelImage, Container, ImageBanner, TextCard, TextContainer, Title, TitleContainer } from './styles';
import ShortSec from '../ShortsSec';

interface Video{
    title: string
    thumbnail: string
    channelImage: string
    channelName: string
    details: string
  }

function VideoComp(props :Video){

    const {openMenu, setOpenMenu} = useContext(UserContext);

    return (
        <>  
            <Container>
                <ImageBanner alt="thumbnail" src={props.thumbnail} openMenu = {openMenu}/>
                <TitleContainer>
                    <ChannelImage>
                        {props.channelImage}
                    </ChannelImage>
                    <TextContainer>
                        <Title>{props.title}</Title>
                        <TextCard>{props.channelName}</TextCard>
                        <TextCard>{props.details}</TextCard>
                    </TextContainer>
                </TitleContainer>
            </Container>

        </>
    )
}

export default VideoComp;



