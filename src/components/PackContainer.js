import { Container, Row, Col } from "react-bootstrap";
import  PackCard  from './PackCard';
import {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function PackContainer ({ currentUser }) {

    const [ packs, setPacks ] = useState ([])

    useEffect(() => {
        fetch('http://127.0.0.1:3000/packs')
        .then(res => res.json())
        .then(packArr => setPacks(packArr))
    }, [])
    // console.log(packs)

    const packInfo = packs.map(pack => <PackCard key={pack.id} {...pack} />)

    return(
        <>
        <h2>Packs Container</h2>
        <h3> Welcome {currentUser.name}</h3>
       
        <Container>
            <Row md={4}>
            
            {packInfo}
            
            </Row>
        </Container>
        </>
    )
}

export default PackContainer;