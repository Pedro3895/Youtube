import styled from "styled-components";
import { Theme } from "../../theme";

export const Container =styled.div<{openMenu: boolean}>`
width: ${({openMenu}) => openMenu? '80%' : '97%'};
margin-left:${({openMenu})=> openMenu? '200px' : '50px'};
height: 56px;
position: sticky;
top: 55px;
right: 0;
display: flex;
align-items: center;
background-color: ${({theme}) => Theme.colors.secondary};
z-index: 1;

@media(max-width: 1024px) {
    width: ${({openMenu}) => openMenu? '80%' : '90%'};
  }

@media(max-width: 834px) {
    width: 88%;
  }

@media(max-width: 688px) {
    width: 80%;
  }

@media(max-width: 414px) {
    width: 100%;
  }

//width:90%;
//height: 35px;
//position:absolute;
//background-color:transparent;
//display:block;
`;

export const Button = styled.button`
  min-height: 90%;
  max-height: 90%;
  display: inline-block;
  white-space: nowrap;
  align-items: center;
  padding: 5px;
  box-sizing: border-box;
  border-radius: 8px;
  border: none;
  outline: none;
  font-size: 14px;
  font-weight: 400;
  color: ${({theme}) => Theme.colors.primary};
  background-color: ${({theme}) => Theme.colors.bgColor};

  &:hover{
    background-color: ${({theme}) => Theme.colors.borderColor};
  }

  &:focus {
    outline: none;
    background-color: black;
    color: white;
  }
`;

export const SliderButtons = styled.div`
  min-width: 40px;
  max-width: 40px;
  min-height: 40px;
  max-height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover{
    background-color: ${({theme}) => Theme.colors.bgColor};
  }
`;

export const ButtonIcon = styled.img`
  width: 25px;
  height: 25px;
  border-radius: 50%;
`;

export const Slider = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  column-gap: 20px;
  height: 70%;
  overflow-x: hidden;
`;

export const SliderContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  column-gap: 20px;
  height: 100%;
`;

export const CatItem =styled.div<{openMenu: boolean}>`
font-size: 12px;
width: 70px;
height: 40px;
border-radius: 50%;//para ser redondo
display: inline;
background-color: gray;
justify-content: space-between;
padding: 5px 5px;
border-radius: border-box;
align-items: center;
margin: 5px;


cursor: pointer;

:hover{ 
    background-color: #f2f2f2;
}

`;

export const CatIcon =styled.div<{openMenu: boolean}>`

`;


//primary: '#000',
//secondary: '#fff',
//bgColor: '#f2f2f2',
//borderColor: '#d3d3d3'

//senha Pedro :123456789