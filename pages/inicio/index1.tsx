import VideoComp from '../../components/VideoComp';
import { Break, Container, Container1 } from './styles';
import React, { useState, useContext } from "react";
import { UserContext } from "../../context/userContext";
import ShortSec from '../../components/ShortsSec';

const videos = [
    {
        image:'https://i.ytimg.com/an_webp/Iz_FrUROP_U/mqdefault_6s.webp?du=3000&sqp=CNTs_K4G&rs=AOn4CLCAkFghTsZisj88D6NFRHvyYki5jQ', 
        title:"Casually Explained: The World's Strongest Man",
        channelName:'Casually Explained',
        views:'1,8 Mi',
        time:'4 meses'  
    },
    
    {
        image:'https://i.ytimg.com/an_webp/Iz_FrUROP_U/mqdefault_6s.webp?du=3000&sqp=CNTs_K4G&rs=AOn4CLCAkFghTsZisj88D6NFRHvyYki5jQ', 
        title:"Casually Explained: The World's Strongest Man",
        channelName:'Casually Explained',
        views:'1,8 Mi',
        time:'4 meses'  
    },

    {
        image:'https://i.ytimg.com/an_webp/Iz_FrUROP_U/mqdefault_6s.webp?du=3000&sqp=CNTs_K4G&rs=AOn4CLCAkFghTsZisj88D6NFRHvyYki5jQ', 
        title:"Casually Explained: The World's Strongest Man",
        channelName:'Casually Explained',
        views:'1,8 Mi',
        time:'4 meses'  
    },

    {
        image:'https://i.ytimg.com/an_webp/Iz_FrUROP_U/mqdefault_6s.webp?du=3000&sqp=CNTs_K4G&rs=AOn4CLCAkFghTsZisj88D6NFRHvyYki5jQ', 
        title:"Casually Explained: The World's Strongest Man",
        channelName:'Casually Explained',
        views:'1,8 Mi',
        time:'4 meses'  
    },

    {
        image:'https://i.ytimg.com/an_webp/Iz_FrUROP_U/mqdefault_6s.webp?du=3000&sqp=CNTs_K4G&rs=AOn4CLCAkFghTsZisj88D6NFRHvyYki5jQ', 
        title:"Casually Explained: The World's Strongest Man",
        channelName:'Casually Explained',
        views:'1,8 Mi',
        time:'4 meses'  
    },

    {
        image:'https://i.ytimg.com/an_webp/Iz_FrUROP_U/mqdefault_6s.webp?du=3000&sqp=CNTs_K4G&rs=AOn4CLCAkFghTsZisj88D6NFRHvyYki5jQ', 
        title:"Casually Explained: The World's Strongest Man",
        channelName:'Casually Explained',
        views:'1,8 Mi',
        time:'4 meses'  
    },

    {
        image:'https://i.ytimg.com/an_webp/Iz_FrUROP_U/mqdefault_6s.webp?du=3000&sqp=CNTs_K4G&rs=AOn4CLCAkFghTsZisj88D6NFRHvyYki5jQ', 
        title:"Casually Explained: The World's Strongest Man",
        channelName:'Casually Explained',
        views:'1,8 Mi',
        time:'4 meses'  
    },

    {
        image:'https://i.ytimg.com/an_webp/Iz_FrUROP_U/mqdefault_6s.webp?du=3000&sqp=CNTs_K4G&rs=AOn4CLCAkFghTsZisj88D6NFRHvyYki5jQ', 
        title:"Casually Explained: The World's Strongest Man",
        channelName:'Casually Explained',
        views:'1,8 Mi',
        time:'4 meses'  
    },

]

function Inicio1(){
    
//    const {openMenu, setOpenMenu} = useContext(UserContext);

    
//    return (
//        <>
//            <Container openMenu = {openMenu}>
//                {videos.map((video)=>(
//                    <VideoComp video={video}/>
//                ))}
//               
//            </Container>
//
//            <Break openMenu = {openMenu}/>
//            <ShortSec/>
//
//        </>
//                
//    )
}

export default Inicio1;