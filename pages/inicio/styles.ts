import styled from "styled-components";


export const Container1 = styled.div<{openMenu: boolean}>`
width:100%;
margin-top:10px;
background-color:black;
height: 1000px;
max-width: 1600px;
display: grid;
grid-template-columns:${({openMenu})=> openMenu? 'repeat(8, 1fr)' : 'repeat(5, 1fr)'};
column-gap: 20px;
row-gap: 50px;
`;

export const Break = styled.div<{openMenu:boolean}>`
height:10px;
bottom:200px;
display: flex;
width: ${({openMenu})=> openMenu? '100%' : 'none'};
border-top: 5px solid #000;
`;

export const Container = styled.div<{openMenu: boolean}>`
  width: 100%;
  max-width: 1600px;
  display: grid;
  grid-template-columns: ${({openMenu}) => openMenu? 'repeat(3, 1fr)' : 'repeat(4, 1fr)'};
  column-gap: 20px;
  row-gap: 50px;
  flex-wrap: wrap;

  @media(max-width: 1024px) {
    grid-template-columns: ${({openMenu}) => openMenu? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'};
  }

  @media(max-width: 834px) {
    grid-template-columns: repeat(2, 1fr)
  }

  @media(max-width: 688px) {
    grid-template-columns: repeat(1, 1fr)
  }

`;

export const MainContainer = styled.div<{openMenu: boolean}>`
  width: 100%;
  max-width: 1600px;
  display: flex;
  flex-direction: column;
  padding: ${({openMenu}) => openMenu? '15px 50px 0 5px' : '15px 10px 0 5px'};
  box-sizing: border-box;

  @media(max-width: 834px) {
    padding: 140px 10px 0 100px;
  }

  @media(max-width: 688px) {
    padding: 140px 60px 0 150px;
  }

  @media(max-width: 414px) {
    padding: 140px 20px 0 20px;
  }
`;
