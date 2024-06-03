import { CatItem, Container, SliderButtons, ButtonIcon, Slider, SliderContent, Button} from './styles';
import { UserContext } from "../../context/userContext";
import React, { useState, useContext } from "react";
import {useCategoryContext} from "../../context/catContext";
import BackIcon from "../../assets/icones/anterior.png";
import  NextIcon from "../../assets/icones/proximo.png";

const items = [{name:'Tudo', id: '0'}, {name:'Noticias', id:'25'}, {name:'PodCast', id:'22'}, 
{name:'Manga', id:'24'}, {name:'Música', id:'10'}, {name:'Ciências', id:'15'}, {name:'Animação', id:'1'}, 
{name:'Física', id:'15'} , {name:'Curiosidades', id:'1'}, {name:'História', id:'22'}, 
{name:'Programação', id:'2'}, {name:'Natureza'}, {name: 'Música', id: '10'}, 
{name: 'Pessoas e blogs', id: '22'}, {name: 'Automóveis', id: '2'}, {name: 'Animais', id: '15'}, 
{name: 'Política', id: '25'}, {name: 'Comédia', id: '23'}, {name: 'Shorts', id: '26'}, 
{name: 'Kids', id: '1'}, {name: 'Esportes', id: '17'}, {name: 'Economia', id: '25'}, 
];

function Categorias(){

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

  function searchCategory(id: any) {
    setCategoryId(id)
  }

  const {openMenu, setOpenMenu} = useContext(UserContext);

    return (
        <Container  openMenu = {openMenu}>
            <SliderButtons onClick={handleBackClick}>
                <ButtonIcon alt="ícone voltar" src={BackIcon} />
            </SliderButtons>
            <Slider>
                <SliderContent
                style={
                    { 
                      transform: `translateX(${sliderPosition}px)`, 
                      transition: '0.5s ease-in-out',
          
                  }}>     
            {items.map((item, index)=>(  
                <Button onClick={() => searchCategory(item.id)} key={index}>{item.name}</Button>
            ))}
            </SliderContent>
        </Slider>
        <SliderButtons onClick={handleNextClick}>
        <ButtonIcon alt="ícone próximo" src={NextIcon} />
      </SliderButtons>
    </Container>
        
    )
}

export default Categorias;

//return (
//    <Container  openMenu = {openMenu}>
//        {item.map((item)=>(  
//                <CatItem openMenu={openMenu}>   
//                    <span>{item.name}</span>    
//                </CatItem>
//        ))}
//        
//    </Container>
//    
//)
//}