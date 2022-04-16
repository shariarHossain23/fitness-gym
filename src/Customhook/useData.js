import { useEffect, useState } from 'react';

const useData = () => {
    const [services,setServices] = useState([])
    useEffect(()=>{
        fetch("service.json")
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return [services,setServices]
};

export default useData;