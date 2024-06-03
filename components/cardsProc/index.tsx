import { Banner, ChannelContainer, ChannelImage, Container, DescriptionContainer, TextCard, TextContainer, Title, TitleContainer } from "./styles"
import { UserContext } from "../../context/userContext";
import React, { useState, useContext } from "react";


interface Props {
  title: string
  thumbnail: string
  channelImage: string
  channelName: string
  details: string
  description: string
}

function VideoCard(props : Props) {
    const {openMenu, setOpenMenu} = useContext(UserContext);

  return (

   
    <Container>
      <Banner style={{backgroundImage: `url(${props.thumbnail})`}}></Banner>
      <TitleContainer>
        <TextContainer>
          <Title>{props.title}</Title>
          <TextCard>{props.details}</TextCard>
        </TextContainer>
        <ChannelContainer>
          <ChannelImage>
            {props.channelImage}
          </ChannelImage>
          <TextCard>{props.channelName}</TextCard>
        </ChannelContainer>
        <DescriptionContainer>
          <TextCard>
            {props.description}
          </TextCard>
        </DescriptionContainer>
      </TitleContainer>
    </Container>
  )
}

export default VideoCard;