import { Col } from "react-bootstrap"
import { Link, useHistory, Switch, Route } from 'react-router-dom'
import { useState } from 'react';
import { Button, Header, Image, Modal, Checkbox, Form } from 'semantic-ui-react';
// import PackDetail from './PackDetail';

function PackCard({ id, name, price, image, preview, link, description, genre_name, author_name }) {
    
    return (
    <Col >
        <div class="ui cards" margin={10}>
            <div class="image">
                <img src={image}></img>
            </div>
            <div class="content">
                {name}
                {/* <Link to={`/packs/${id}`} class="header">{name}</Link> */}
                {/* chang a tags to link and direct to path */}
                {/* <Link to={`/packs/${id}`} class="header"> */}
                {/* </Link> */}
                <div class="meta">
                    <span class="price">${price}</span>
                </div>
                <div class="description">
                    {description}
                </div>
                <div class="genre">
                    Genre | {genre_name}
                </div>
                <div class="author">
                    Producer | {author_name}
                </div>
                <br></br>
                <div>
                    {/* <button onClick={handlePurchase}>purchase</button> */}
                <Link to={`/packs/${id}`}>

                <Button>Purchase</Button>    
                </Link>

                </div>
            </div>
        </div>
            
    </Col>
        
    
    )
}

export default PackCard;