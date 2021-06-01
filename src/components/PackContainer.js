import { Container, Row, Col } from "react-bootstrap";
import  PackCard  from './PackCard';
// import PackDetail from './PackDetail';
import Search from './Search'
import {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function PackContainer ({ currentUser, packs, updatePacks }) {

    

  

const packInfo = packs.map(
    pack => <PackCard 
    key={pack.id} 
    {...pack} 
    currentUser={currentUser} 
    updatePacks={updatePacks}
   
    />)
        



    return(
        <>
        {/* <h2>Sounds</h2> */}
        <h3> Welcome {currentUser.name}</h3>
       {/* <Search /> */}
        <Container>
            <Row md={4}>
                
            
            {packInfo}
            
            
            </Row>
        </Container>
        </>
    )
}

export default PackContainer;