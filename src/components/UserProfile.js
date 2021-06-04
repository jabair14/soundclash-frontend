import { Card, Img, Title, Text, Body, Link, ListGroup, ListGroupItem, Button, Form, Label} from "react-bootstrap"
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

function UserProfile ({ currentUser, onUpdateUser}){

    
    
    
    const [editForm, setEditForm] = useState(false)
    // const [editPrice, setEditPrice] = useState(false)
    // const [packPrice, setPackPrice] = useState('')
    const [name, setName] = useState(currentUser.name)
    const [email, setEmail] = useState(currentUser.email)
    const [password, setPassword] = useState(currentUser.password)
    const [bio, setBio] = useState(currentUser.bio)
    const [image, setImage] = useState(currentUser.image)
    // const [userCreatedPacks, setUserCreatedPacks] = useState([])
    // const [updatedPrice, setUpdatedPrice] = useState(pack.price)
    
    // const [editUser, setEditUser] = useState(currentUser)
    const history = useHistory()

 
    
    const userPacks = currentUser.packs.map(pack => {
        

        return (
            <ListGroupItem>Name: {pack.name}| Price: ${pack.price} 
             
            <Button style={{float: "right", margin: '5px'}} size="sm" variant="danger"> Delete Pack </Button> 
            
            <Button style={{float: "right", margin: '5px'}} size="sm"> Edit Pack </Button> 
            <br></br>
            {/* <Button onClick={toggleUpdatePriceForm}>Update Price</Button>
            {editPrice ? 
            
                <form onSubmit={handlePriceSubmit}>
                    <h4>Edit Price</h4>
                    <input
                    type="number"
                    id="price"
                    name="price"
                    value={packPrice}
                    onChange={(event) => setPackPrice(event.target.value)}
                    >
                    </input>
                    <button type="Submit"> Update </button>
                </form> : null }
                 */}
            </ListGroupItem>
        )
    })
    
    // const handleDeletePack = () => {
    //     console.log('clicked', pack.id)
    // }

    const userDownloads = currentUser.purchases.map(purchase => {
        return (<ListGroupItem><a href={purchase.download} target="_blank">{purchase.download} | {purchase.title}</a></ListGroupItem>)
    })

    // console.log(currentPurchases)

    function toggleEditForm(){
        setEditForm(!editForm)

    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const formData = {
            name,
            email,
            bio,
            password,
            image
        };

        fetch(`http://127.0.0.1:3000/users/${currentUser.id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
                
            },
            body: JSON.stringify(formData)

        })
        .then(res => res.json())
        // console.log(formData)
        .then(updatedUser => {
            onUpdateUser(updatedUser)
        })
        history.push(`/packs`)


    }
    // console.log(currentUser)
    
    const deleteUser = () => {
        fetch(`http://localhost:3000/users/${currentUser.id}`, {
          method: 'DELETE'
        })
        history.push('/')
      }
    

    return(
        <>
        {/* <div>

            {userPurchases}
        </div> */}
        {/* <h1>{ currentUser.name }</h1> */}
        {/* {currentUser.packs} */}
        <div className="profile-div">
            <Card style={{ width: '50rem' }}>
                <Card.Img variant="top" src={currentUser.image} />
                <Card.Body >
                    <Card.Title>{currentUser.name}</Card.Title>
                    <Card.Text>
                        <h6>Bio:</h6>
                        {currentUser.bio}
                    </Card.Text>
                </Card.Body>
                    <h6>My Created Packs:</h6>
                <ListGroup className="list-group-flush">
                    
                    {userPacks}
                </ListGroup>
                     <h6> My Downloads: </h6>
                 <ListGroup className="list-group-flush">
                    
                    {userDownloads}
                     
                    {/* {purchases.downloads} */}
                    
                </ListGroup> 
                <Card.Body>
                    <Button onClick={toggleEditForm}>Edit Profile</Button>
                    
                    {/* <Card.Link href="#">Another Link</Card.Link> */}
                    <Button onClick={deleteUser} style={{float: "right"}}>Delete Profile</Button>
                </Card.Body>
            {editForm ? 
            <form onSubmit={handleSubmit}>
                <h3>Edit Profile</h3>
                <label htmlFor="name">name</label>
            <div class="ui fluid icon input">
            <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            >
            </input>
            </div>
            
            <label htmlFor="email">email</label>
            <div class="ui fluid icon input">
            <input
                
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            >
            </input>
            </div>
            
            <label htmlFor="password">password</label>
            <div class="ui fluid icon input">
            <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            >
            </input>
            </div>
            <label htmlFor="bio">bio</label>
            <div class="ui fluid icon input">
            <input
                type="text"
                id="bio"
                name="bio"
                value={bio}
                onChange={(event) => setBio(event.target.value)}
            >
            </input>
            </div>
            
            <label htmlFor="image">imageURL</label>
            <div class="ui fluid icon input">
            <input
                type="text"
                id="image"
                name="image"
                value={image}
                onChange={(event) => setImage(event.target.value)}
            >
            </input>
            </div>
            <br></br>
            
            <Button variant="outline-primary" type="submit" block>Update</Button>

            </form>: null}
            </Card>
            </div>
        </>
    )
}

export default UserProfile;