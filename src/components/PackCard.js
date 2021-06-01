import { Col, Button } from "react-bootstrap"

import { Link, useHistory, Switch, Route } from 'react-router-dom'
import { useState } from 'react';
import { Header, Image, Modal, Checkbox, Form, Input} from 'semantic-ui-react';
// import PackDetail from './PackDetail';

function PackCard({ id, name, price, image, preview = "https://bandcamp.com/EmbeddedPlayer/track=2449232180/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/", link, description, genre_name, author_name, currentUser, user, updatePacks }) {

    // console.log(id)

    const [purchaseForm, setPurchaseForm] = useState(false)
    // const [currentPurchases, setCurrentPurchases] = useState(currentUser.purchases)
    
    const [user_id, setuser_id] = useState('')
    const [pack_id, setpack_id] = useState('')
    const [showUpdateForm, setShowUpdateForm] = useState(false)
    const [updatedPrice, setUpdatedPrice] = useState(price)
    const [showMoreInfo, setShowMoreInfo] = useState(false)
    const history = useHistory()


    const togglePriceUpdateForm = () => {
        setShowUpdateForm(!showUpdateForm)
       
    }

    const handlePriceUpdateSubmit = (e) => {
        e.preventDefault()
        
        if (user.id === currentUser.id) {
            fetch(`http://127.0.0.1:3000/packs/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-Type' : 'application/json',
                }, 
                body: JSON.stringify({ price: updatedPrice })
            })
            .then(res => res.json())
            .then(data => console.log(data))
            // .then(updatedPack => {
            //     updatePacks(updatedPack)
            // })
        } 
    }

    const handleMoreInfo = () => {
        setShowMoreInfo(showMoreInfo => !showMoreInfo)
        // return(
            
        //         <div class="description">
        //             {description}
        //         </div> 
        // )
    }


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
        <div class="ui card" margin={8} >
            <div class="image" >
                <img src={image} alt={name} style={{ width: "200px", height: "250px"}} ></img>
            </div>
            <div class="content" >
                {name}
                {/* <Link to={`/packs/${id}`} class="header">{name}</Link> */}
                {/* chang a tags to link and direct to path */}
                {/* <Link to={`/packs/${id}`} class="header"> */}
                {/* </Link> */}
                <div class="meta">
                    <span class="price">${price}</span>
                </div>
                {/* change src to each packs individula links */}
                <iframe style={{border: "0", width: "100%", height: "42px"}} src="https://bandcamp.com/EmbeddedPlayer/track=2449232180/size=small/bgcol=ffffff/linkcol=0687f5/transparent=true/" seamless></iframe>
               
                
                {/* <div class="description">
                    {description}
                </div> */}
                <div class="genre">
                    Genre | {genre_name}
                </div>
                {showMoreInfo ? <div class="description">
                    {description}
                </div> : null}
                {/* <div class="author">
                    Producer | {author_name}
                </div> */}
                <br></br>
                <div>
                    {/* <button onClick={handlePurchase}>purchase</button> */}
                {/* <Link to={`/packs/${id}`}> */}
                {/* <Link> */}
                <div >

                <Button size="sm" variant="outline-primary" block onClick={handlepurchaseform}>Purchase</Button>  
                {/* <br></br> */}
                <Button size="sm" block onClick={handleMoreInfo}>More Info</Button>  
                {/* <Button onClick={togglePriceUpdateForm}>Update Price</Button>   */}
                {/* </Link> */}
                </div>

                </div>
            </div>
        </div>
            {purchaseForm ? 
            <Form onSubmit={handleSubmitPurchase}> 
                <div class="ui fluid icon input" >
                    <label> Re-enter password </label>
                    <br></br>
                    <input type="password" 
                    placeholder="password" />
                    {/* <br></br>
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
                    placeholder="12345"/> */}
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
                    <Button size="sm" block type="submit"> Submit </Button>
            </Form> : null }
            {showUpdateForm ? 
            <Form onSubmit={handlePriceUpdateSubmit}>
                <div class="ui input">
                    <label> NewPrice </label>
                    <br></br>
                    <input type="number" 
                    id="price"
                    name="price"
                    value={updatedPrice}
                    onChange={(e) => setUpdatedPrice(e.target.value)}></input>
                    <input type="submit"/>
                    </div> 
            </Form> : null
            }
            
    </Col>
        </>
    
    )
}

export default PackCard;