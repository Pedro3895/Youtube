import { CardVideo, DetailsShortVideo, ThumbnailShortVideo, TitleShortVideo } from "./styles"

interface Props {
  title: string
  image: string
  views: string
}

function CardShort(props: Props) {

  
  return (
    <CardVideo to={'/shorts'}>
      <ThumbnailShortVideo alt='Thumbnail' src={props.image}/>
      <TitleShortVideo>{props.title}</TitleShortVideo>
      <DetailsShortVideo>{props.views}</DetailsShortVideo>
    </CardVideo>
  )
}

export default CardShort;