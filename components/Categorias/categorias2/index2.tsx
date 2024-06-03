import { CatItem, Container  } from '../styles';
import { UserContext } from "../../../context/userContext";
import React, { useState, useContext } from "react";
import {useCategoryContext} from "../../../context/catContext";

const item = [{name:'Tudo'}, {name:'Noticias'}, {name:'PodCast'}, {name:'Manga'}, {name:'Música'}, {name:'Ciências'}, {name:'Animação'}, {name:'Física'} , {name:'Curiosidades'}, {name:'História'}, {name:'Programação'}, {name:'Comédia'}, {name:'Natureza'}]

function Categorias2(){

    const [sliderPosition, setSliderPosition] = useState(0);

    const sliderWidth = 200; // largura do slider
    const containerWidth = 400; // largura do contêiner
  
    const handleNextClick = () => {
      // verifica se a nova posição do slider é menor que a largura total do slider menos a largura do contêiner
      if (sliderPosition > -(sliderWidth * 12) + containerWidth) {
        setSliderPosition((prevPosition) => prevPosition - sliderWidth);
      }
    };
  
    const handleBackClick = () => {
      // verifica se a nova posição do slider é maior que zero
      if (sliderPosition < 0) {
        setSliderPosition((prevPosition) => prevPosition + sliderWidth);
      }
    };

    const {setCategoryId} = useCategoryContext()

  function searchCategory(id: string) {
    setCategoryId(id)
  }

    const {openMenu, setOpenMenu} = useContext(UserContext);

    return (
        <Container  openMenu = {openMenu}>
            {item.map((item)=>(  
                    <CatItem openMenu={openMenu}>   
                        <span>{item.name}</span>    
                    </CatItem>
            ))}
            
        </Container>
        
    )
}

export default Categorias2;