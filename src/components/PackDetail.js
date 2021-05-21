import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

function PackDetail ({}){

    const [packs, setPacks] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const params = useParams()

    console.log(params)

    useEffect(() => {
        fetch(`http://127.0.0.1:3000/packs/${params.id}`)
        .then(res => res.json())
        .then(pack => {
            setPacks(pack);
            setIsLoaded(true)
        });
    }, [params.id]);

    if (!isLoaded) return <h2> Loading... </h2>

    // const { name } = packs


    return (
        <h1> detils </h1>
    )
}

export default PackDetail;
