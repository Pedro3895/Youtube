import react, {useEffect, useState} from 'react';
import { useLocation } from 'react-router-dom';

const ShowCategorias =({ children }: any)=>{

    const location = useLocation();

    const [showCate, setShowCate] = useState(true)

    useEffect(()=>{
        console.log('this location:', location)
        if(location.pathname==='/procurar'){
            setShowCate(false)
        }
        else{
            setShowCate(true)
        }
    }, [location]);

    return(
        <div>{showCate&&children}</div>


    )
}

export default ShowCategorias