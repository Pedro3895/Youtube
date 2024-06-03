import styled from "styled-components";

export const ButtonContainer = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;//para ser redondo
margin: 10px 50px 10px 30px;
display: flex;
justify-content: center;
align-items: center;
cursor: pointer;

`;

export const IdButton = styled.a<{}>`
width: 100%;
height: 100%;
border-radius:50%;
background-color:beige;
text-align: center;
margin: 5px 5px 5px 0px;

`;

export const Container1 =styled.div`
position: sticky;



`;

export const DropHeader =styled.div`

`;

export const DropItem =styled.div`
height:50px;
display:flex;
align-items:center;
border-radius:var(--border-redius);
transition: background var(--speed);
padding: 0.5rem;


:hover{
    background-color: #525357;

}
`;

export const DropText = styled.div`

`;

export const DropBody =styled.div`
width: 98%;//98=>90%
min-height:'45px';// '70px'};//45=>40px
border-radius:10px;
cursor:pointer;
padding: 2px 15px;//15=>5px
box-sizing: border-box;

flex-direction:row;
display: grid;
grid-template-columns: repeat(2, 1fr);
align-items: left;
justify-content: center;
margin-left: -20px;

span{
    font-weight: 400;// : '400'};
    margin-left: -70px;// : '-3px'};
    margin-top:20px;
    font-size: 15px;// : '12px'};
    display:flex;
    
}

:hover{
    background-color: #f2f2f2;
}

`;

export const Logo = styled.span`
`;

export const Bar = styled.span`
`;

export const DropCont=styled.div`
position:absolute;
top:60px;
width: 300px;
transform: translateX(-75%);
border: var(--border);
border-radius:5%;//var(--border-radius);
padding: 1rem;
overflow:hidden;
background-color:gainsboro;
overflow-y: auto;


`;
    

export const Line = styled.hr`
background-color: gray;
height:2px;

`;

export const DropButton = styled.img`
width: 20px;
margin: 20px;


`;

export const DropMenu = styled.div`
width: '100px';
height: calc(100vh - 60px);//100vh posi fixed position
box-sizing: border-box;
padding: 10px 5px 10px 10px;//65px=>10 

align-items: center;
flex-direction: column;
overflow-y: auto;//caso os elementos ultrapassem o tamanho do elemento um scroll é criado
position: sticky;
top:55px;
`;


