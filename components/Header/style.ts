import styled from "styled-components";


export const Container = styled.header`
width: 100%;
height: 55px;
background-color: #fff;
padding: 10px 16px;
box-sizing: border-box;//adiciona o paddig sem alterar o tamnaho inicial do elemento
display: flex;
align-items: center;
justify-content: space-between;
margin-left:40px;
position: sticky;//position:fixed;
top: 0;
`;

export const LogoContainer = styled.div`
display:flex;
align-items: center;
`;

export const ButtonContainer = styled.div<{margin?: string}>`
width: 40px;
height: 40px;
border-radius: 50%;//para ser redondo
margin: ${({margin}) => margin? margin : 0};//margin: 0 10px 0 30px;//mudaremos para relâtivo depois
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;

:hover{ 
    //background-color: #f2f2f2;
}
`;

export const ButtonContainer1 = styled.div<{margin?: string}>`
width: 40px;
height: 40px;
border-radius: 50%;//para ser redondo
margin: ${({margin}) => margin? margin : 0};//margin: 0 10px 0 30px;//mudaremos para relâtivo depois
display: flex;
//background-color: beige;
justify-content: center;
align-items: center;
cursor: pointer;

:hover{ 
    //background-color: #f2f2f2;
}
`;

export const ButtonIcon = styled.img`
width: 20px;
margin: 10px;
`;

export const SearchContainer = styled.div`
display: flex;
`;

export const SearchIputContainer = styled.div`
width: 450px;
height: 35px;
border: 1px solid #d3d3d3;
border-radius: 40px 0 0 40px;
display: flex;
align-items: center;
padding: 0 16px;
`;

export const SearchInput = styled.input`
width: 100%;
height: 25px;
outline: none;
border: none;
`;

export const SearchButton = styled.div`
border-radius: 0 40px 40px 0;
height: 35px;
width: 70px;
background-color: #f0f0f0;
border: 1px solid #d3d3d3;
display: flex;
justify-content: center;
align-items: center;
cursor:pointer;
`;

export const HeaderButton = styled.div`
width: 200px;
display: flex;

`;

