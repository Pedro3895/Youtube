import styled from "styled-components";

export const Container = styled.div<{openMenu: boolean}>`
display: block;


`;

export const NavIten = styled.li`
width: calc(var(--nav-size)*0,8);
display: flex;
align-items: center;
justify-content: center;

`; 

export const IconButton = styled.a`
--button-size:calc(var(--nav-size)*0.5);
width:var(--button-size);
height:var(--button-size);
border-radius: 50%;
padding: 5px;
margin: 2px;
display: flex;
align-items: center;
justify-content: center;

`; 