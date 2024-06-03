import { Container, SearchContainer } from "./style";
import { useSearchContext } from "../../context/searchContext";
import axios from 'axios';
import moment from "moment";
import VideoSearchCard from "../../components/cardsProc/index";
import React, { useState, useContext, useEffect } from "react";
import { UserContext } from "../../context/userContext";

function Procurar() {

  
  interface Videos {
    id: {
      videoId: string;
    } 
    snippet: {
      title: string;
      thumbnails: {
        high: {
          url: string
        }
      }
      channelTitle: string;
      publishedAt: string;
      description: string;
    }
  }

  const {openMenu, setOpenMenu} = useContext(UserContext);

  const {search} = useSearchContext()
  
  useEffect(() => {
    if (search !== '') {
      load()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search])

  const [videos, setVideosapi] = useState<Videos[]>([]);
  const API_KEY =  'AIzaSyDR6VTNPiNVqtuSj1V4yXzRK89MYBx2gdc';
  const URL = `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${search}&maxResults=48&&key=${API_KEY}`
  async function load() {
    if (search !== '') {
      try {
        const resposta = await axios.get(URL)
        setVideosapi(resposta.data.items)
      } 
      catch(erro){
        console.log(erro)
      }
    }
  }

  function getPublishedTime(publishedAt: string) {
    const now = moment();
    const publishedTime = moment(publishedAt);
    const diffDays = now.diff(publishedTime, 'days');

    if (diffDays <= 0) {
      return 'hoje';
    } else if (diffDays === 1) {
      return 'há 1 dia';
    } else if (diffDays <= 7) {
      return `há ${diffDays} dias`;
    } else if (diffDays <= 30) {
      const diffWeeks = Math.floor(diffDays / 7);
      if (diffWeeks === 1) {
        return 'há 1 semana';
      } else {
        return `há ${diffWeeks} semanas`;
      }
    } else if (diffDays <= 365) {
      const diffMonths = Math.floor(diffDays / 30);
      if (diffMonths === 1) {
        return 'há 1 mês';
      } else {
        return `há ${diffMonths} meses`;
      }
    } else {
      const diffYears = Math.floor(diffDays / 365);
      if (diffYears === 1) {
        return 'há 1 ano';
      } else {
        return `há ${diffYears} anos`;
      }
    }
  }


  return (
    <SearchContainer>
      <Container openMenu={openMenu}>
        {videos.map((video, index) => (
            <VideoSearchCard
            title={video.snippet.title} 
            thumbnail={video.snippet.thumbnails.high?.url} 
            channelImage={video.snippet.channelTitle.charAt(0).toUpperCase()} 
            channelName={video.snippet.channelTitle}
            details={`10 mi visualizações - ${getPublishedTime(video.snippet.publishedAt)}`}
            description={video.snippet.description} 
            key={index}
            />
          ))}
      </Container>
    </SearchContainer>
  )
}

export default Procurar;