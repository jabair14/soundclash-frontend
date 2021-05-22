import { Container, Row, Col } from "react-bootstrap";
import  PackCard  from './PackCard';
import PackDetail from './PackDetail';
import {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function PackContainer ({ currentUser, packInfo }) {


    return(
        <>
        <h2>Sounds</h2>
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