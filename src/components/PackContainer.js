import { Container, Row, Col } from "react-bootstrap";
import  PackCard  from './PackCard';
// import PackDetail from './PackDetail';
import Search from './Search'
import {useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


function PackContainer ({ currentUser, packInfo }) {

    const [ searchTerm, setSearchTerm ] = useState('')

//     console.log(searchTerm)

//     const filterBySearchTerm = () => {
//         if (packInfo.filter(pack => pack.name.toLowerCase().includes(searchTerm.toLowerCase())))
//             console.log(packInfo)
//   }



    return(
        <>
        <h2>Sounds</h2>
        <h3> Welcome {currentUser.name}</h3>
       <Search searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
        <Container>
            <Row md={4}>
            
            {packInfo}
            
            
            </Row>
        </Container>
        </>
    )
}

export default PackContainer;