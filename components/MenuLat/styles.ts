import styled from "styled-components";


export const Container =styled.div<{openMenu: boolean}>`//tipagem de openMenu, para a criação da verificação de estado
width: ${({openMenu})=> openMenu? '250px' : '100px'};//diferenciação será feita aqui
height: calc(100vh - 60px);//100vh posi fixed position
box-sizing: border-box;
padding: 10px 5px 10px 10px;//65px=>10 
display: flex;
align-items: center;
flex-direction: column;
overflow-y: auto;//caso os elementos ultrapassem o tamanho do elemento um scroll é criado
position: sticky;
top:55px;
`;

export const MenuItem = styled.div<{openMenu:boolean}>`
width: 98%;//98=>90%
min-height:${({openMenu})=> openMenu? '45px' : '70px'};//45=>40px
border-radius:10px;
cursor:pointer;
padding: 2px 15px;//15=>5px
box-sizing: border-box;
display: flex;
flex-direction: ${({openMenu})=> openMenu? 'row' : 'collun'};
align-items: center;
justify-content: ${({openMenu})=> openMenu? 'none' : 'center'};
margin-left: ${({openMenu})=> openMenu? '-6px' : '-3px'};

span{
    font-weight:  ${({openMenu})=> openMenu? '600' : '400'};
    margin-left:  ${({openMenu})=> openMenu? '-5px' : '-3px'};
    font-size:  ${({openMenu})=> openMenu? '16px' : '12px'};
}

:hover{
    background-color: #f2f2f2;
}
`;


export const ButtonIcon = styled.img`
width: 20px;
margin: 10px;
`;

export const MenuItem1 = styled.div<{openMenu:boolean}>`
width: 90%;
min-height:${({openMenu})=> openMenu? '40px' : '70px'};
border-radius:10px;
cursor:pointer;
padding: 2px 17px;
box-sizing: border-box;
display: ${({openMenu})=> openMenu? 'none' : 'flex'};
flex-direction: ${({openMenu})=> openMenu? 'row' : 'collun'};
align-items: center;
justify-content: ${({openMenu})=> openMenu? 'none' : 'center'};


:hover{
    background-color: #f2f2f2;
}
`;

export const ButtonIcon1 = styled.img`
width: 20px;
margin: 10px;
`;


export const Break = styled.div<{openMenu:boolean}>`
display: ${({openMenu})=> openMenu? 'flex' : 'none'};
width: ${({openMenu})=> openMenu? '100%' : 'none'};

border-top: 1px solid #000;
`;


export const Titulo = styled.span<{openMenu:boolean}>`
margin-top:5px;

`;


export const VcConteiner = styled.div<{openMenu:boolean}>`
display: ${({openMenu})=> openMenu? 'flex' : 'none'};

`;


export const MenuItem2 = styled.div<{openMenu:boolean}>`
width: 90%;
min-height:${({openMenu})=> openMenu? '40px' : '70px'};
border-radius:10px;
cursor:pointer;
padding: 2px 5px;
box-sizing: border-box;
display: ${({openMenu})=> openMenu? 'flex' : 'none'};
flex-direction: ${({openMenu})=> openMenu? 'row' : 'collun'};
align-items: center;
justify-content: ${({openMenu})=> openMenu? 'none' : 'center'};
margin-left: ${({openMenu})=> openMenu? '-6px' : '-3px'};

.text{
    font-weight:  ${({openMenu})=> openMenu? '600' : '400'};
    margin-left:  ${({openMenu})=> openMenu? '-5px' : '-3px'};
    font-size:  ${({openMenu})=> openMenu? '10px' : 'none'};
}

:hover{
    background-color: #f2f2f2;
}
`;

export const ButtonIcon2 = styled.img`
width: 20px;
margin: 10px;
`;

export const text = styled.span`
width: 20px;
margin: 10px;
`;
