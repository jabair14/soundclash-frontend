import { Col } from "react-bootstrap"

import { Link, useHistory, Switch, Route } from 'react-router-dom'
import { useState } from 'react';
import { Button, Header, Image, Modal, Checkbox, Form } from 'semantic-ui-react';
// import PackDetail from './PackDetail';

function PackCard({ id, name, price, image, preview, link, description, genre_name, author_name, currentUser }) {

    const [purchaseForm, setPurchaseForm] = useState(false)
    // const [currentPurchases, setCurrentPurchases] = useState(currentUser.purchases)
    
    const [user_id, setuser_id] = useState('')
    const [pack_id, setpack_id] = useState('')
    const history = useHistory()


    const handlepurchaseform = () => {
        setPurchaseForm(purchaseForm => !purchaseForm)
        // console.log('clicked')
    }

    const handleSubmitPurchase = (e) => {
        e.preventDefault()
       
        const formData = {
            user_id: currentUser.id,
            pack_id: id,
        }

       
        fetch('http://127.0.0.1:3000/purchases', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
        .then(res => res.json())
        .then(purchase => {
            console.log(purchase)
            // onAddPurchase(purchase)
            currentUser.purchases.push(purchase)
            // setCurrentPurchases(purchase)
            history.push(`/users/${currentUser.id}`)
        })
    }
    // console.log(purchase)
    
    return (
        <>
       
    <Col >
        <div class="ui cards" margin={10}>
            <div class="image">
                <img src={image} alt={name} style={{ width: "250px", height: "250px"}}></img>
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
                {/* <div class="author">
                    Producer | {author_name}
                </div> */}
                <br></br>
                <div>
                    {/* <button onClick={handlePurchase}>purchase</button> */}
                {/* <Link to={`/packs/${id}`}> */}
                {/* <Link> */}
                <Button onClick={handlepurchaseform}>Purchase</Button>    
                {/* </Link> */}

                </div>
            </div>
        </div>
            {purchaseForm ? 
            <Form onSubmit={handleSubmitPurchase}> 
                <div class="ui input">
                    <label> Card Number </label>
                    <br></br>
                    <input type="text" 
                    placeholder="16 digit number..."/>
                    <br></br>
                    <label> CVV </label>
                    <br></br>
                    <input type="text" 
                    placeholder="123"/>
                    <br></br>
                    <label> EXP </label>
                    <br></br>
                    <input type="text" 
                    placeholder="00/00"/>
                    <br></br>
                    <label> ZIP </label>
                    <br></br>
                    <input type="text" 
                    placeholder="12345"/>
                    <input 
                    type="hidden"
                    id="user_id"
                    name="user_id"
                    value={user_id}
                    onChange={(event) => setuser_id(event.target.value)}
                    />
                    <input 
                    type="hidden"
                    id="pack_id"
                    name="pack_id"
                    value={pack_id}
                    onChange={(event) => setpack_id(event.target.value)}
                    />
                    </div>
                    <input type="submit" />
            </Form> : null }
            
    </Col>
        </>
    
    )
}

export default PackCard;