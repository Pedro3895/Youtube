import styled from "styled-components";



export const Container = styled.div<{openMenu: boolean}>`
  width: 100%;
  max-width: 1600px;
  display: grid;
  grid-template-columns: ${({openMenu}) => openMenu? 'repeat(3, 1fr)' : 'repeat(4, 1fr)'};
  column-gap: 20px;
  row-gap: 50px;
  flex-wrap: wrap;
  padding: ${({openMenu}) => openMenu? '140px 50px 0 330px' : '140px 10px 0 100px'};
  box-sizing: border-box;

  @media(max-width: 834px) {
    padding: 70px 10px 0 100px;
  }
`;
export const ShortsContainer = styled.div`
  width: 100%;
`;