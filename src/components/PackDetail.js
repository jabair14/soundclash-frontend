import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function PackDetail (){

    // console.log(packInfo)

    const [pack, setPack] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const params = useParams()

    console.log(params)

    useEffect(() => {
        fetch(`http://127.0.0.1:3000/packs/${params.id}`)
        .then(res => res.json())
        .then(pack => {
            setPack(pack);
            setIsLoaded(true)
        });
    }, [params.id]);

    if (!isLoaded) return <h2> Loading... </h2>

    // const { name } = pack


    return (
        <h1> Details </h1>
    )
}

export default PackDetail;
