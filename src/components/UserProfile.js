import { Card, Img, Title, Text, Body, Link, ListGroup, ListGroupItem, Button} from "react-bootstrap"
import { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

function UserProfile ({ currentUser, onUpdateUser}){

    
    
    
    const [editForm, setEditForm] = useState(false)
    const [name, setName] = useState(currentUser.name)
    const [email, setEmail] = useState(currentUser.email)
    const [password, setPassword] = useState(currentUser.password)
    const [bio, setBio] = useState(currentUser.bio)
    const [image, setImage] = useState(currentUser.image)
    const [userCreatedPacks, setUserCreatedPacks] = useState([])
    
    // const [editUser, setEditUser] = useState(currentUser)
    const history = useHistory()

    useEffect(() => {
        fetch(`http://127.0.0.1:3000/users/${currentUser.id}`)
        .then(res => res.json())
        .then(currentUserObj => {
            console.log(currentUserObj.packs)
        })
    },[])

    
    
    
    
    
    
    const userPacks = currentUser.packs.map(pack => {
        return (
            <ListGroupItem>Name: {pack.name}| Price: ${pack.price} |ID: {pack.id} <Button> Delete Pack </Button> 
            <br></br>
            </ListGroupItem>
        )
    })
    
    // const handleDeletePack = () => {
    //     console.log('clicked', pack.id)
    // }

    const userDownloads = currentUser.purchases.map(purchase => {
        return (<ListGroupItem>{purchase.download}</ListGroupItem>)
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
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={currentUser.image} />
                <Card.Body >
                    <Card.Title>{currentUser.name}</Card.Title>
                    <Card.Text>
                        <h6>Bio:</h6>
                        {currentUser.bio}
                    </Card.Text>
                </Card.Body>
                    <h6>Packs:</h6>
                <ListGroup className="list-group-flush">
                    
                    {userPacks}
                </ListGroup>
                     <h6> Downloads: </h6>
                 <ListGroup className="list-group-flush">
                    {userDownloads}
                    {/* {purchases.downloads} */}
                    
                </ListGroup> 
                <Card.Body>
                    <Button onClick={toggleEditForm}>Edit Profile</Button>
                    
                    {/* <Card.Link href="#">Another Link</Card.Link> */}
                    <Button onClick={deleteUser}>Delete Profile</Button>
                </Card.Body>
            </Card>
            {editForm ? 
            <form onSubmit={handleSubmit}>
                <h3>Edit Profile</h3>
                <label htmlFor="name">Name</label>
            <input
                type="text"
                id="name"
                name="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
            >
            </input>
            <br></br>
            <label htmlFor="email">email</label>
            <input
                type="text"
                id="email"
                name="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
            >
            </input>
            <br></br>
            <label htmlFor="password">password</label>
            <input
                type="text"
                id="password"
                name="password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
            >
            </input>
            <br></br>
            <label htmlFor="bio">bio</label>
            <input
                type="text"
                id="bio"
                name="bio"
                value={bio}
                onChange={(event) => setBio(event.target.value)}
            >
            </input>
            <br></br>
            <label htmlFor="image">imageURL</label>
            <input
                type="text"
                id="image"
                name="image"
                value={image}
                onChange={(event) => setImage(event.target.value)}
            >
            </input>
            <br></br>
            
            <button type="submit">Update</button>

            </form>: null}
        </>
    )
}

export default UserProfile;