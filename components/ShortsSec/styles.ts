import styled from "styled-components";
import { NavLink } from "react-router-dom";


export const Container =styled.div<{openMenu: boolean}>`
width:100%;
width:90%;
height: 35px;
position:absolute;
background-color:transparent;
margin-left:${({openMenu})=> openMenu? '10px' : '10px'};
display:grid;
grid-template-columns:${({openMenu})=> openMenu? 'repeat(8, 1fr)' : 'repeat(5, 1fr)'};
column-gap: 20px;
row-gap: 50px;
`;

export const ImageBanner =styled.img<{openMenu: boolean}>`
  width: 100%;
  min-height: 350px;
  border-radius: 10px;

`;

export const VideoComp=styled.div`

`;

export const  TitleContainer= styled.div `

`;  

export const  ChannelImage = styled.div `

`;

export const  TextContainer= styled.div `

`;

export const  Title= styled.span `

`;

export const TextCard = styled.span`

`;  

export const Break = styled.div<{openMenu:boolean}>`
display: ${({openMenu})=> openMenu? 'flex' : 'none'};
width: ${({openMenu})=> openMenu? '100%' : 'none'};
border-top: 1px solid #000;
`;




export const CardVideo = styled(NavLink)`
  min-width: 160px;
  min-height: 380px;
  max-width: 160px;
  max-height: 380px;
  display: flex;
  flex-direction: column;
  row-gap: 10px;
  justify-content: flex-start;
`;

export const ThumbnailShortVideo = styled.img`
  width: 100%;
  min-height: 350px;
  border-radius: 10px;
`;

export const TitleShortVideo = styled.span`
  color: ${({theme}) => theme.colors.primary};
  font-weight: 600;
`;

export const DetailsShortVideo = styled.span`
  color: #8c8c8c;
  font-size: 14px;
`;