import { Banner, ChannelImage, Container, TextCard, TextContainer, Title, TitleContainer } from "./style";

interface Props {
  title: string
  thumbnail: string
  channelImage: string
  details: string
  date: string
}

function YourVideosCards(props: Props) {

  return (
    <Container>
      <Banner alt="thumbnail" src={props.thumbnail}/>
      <TitleContainer>
        <ChannelImage>
          {props.channelImage}
        </ChannelImage>
        <TextContainer>
          <Title>{props.title}</Title>
          <TextCard>{props.details}</TextCard>
          <TextCard>{props.date}</TextCard>
        </TextContainer>
      </TitleContainer>
    </Container>
  )
}

export default YourVideosCards;