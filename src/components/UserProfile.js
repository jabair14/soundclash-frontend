import { Card, Img, Title, Text, Body, Link, ListGroup, ListGroupItem} from "react-bootstrap"
import { useState, useEffect } from "react";

function UserProfile ({ currentUser, handleAddDownload }){

    const [purchases, setPurchases] = useState([])

    // console.log(purchases)

    useEffect(() => {
        fetch(`http://127.0.0.1:3000/purchases`)
        .then(res => res.json())
        .then(allPurchasesArr => console.log(allPurchasesArr))
    }, [])


  

    const userPacks = currentUser.packs.map(pack => {
        return (
            <ListGroupItem>{pack.name}</ListGroupItem>
        )
    })


    const userDownloads = currentUser.purchases.map(purchase => {
        return (<ListGroupItem>{purchase.download}</ListGroupItem>)
    })

    // console.log(userDownloads)

    


 
    // const userPurchases = currentUser.purchases.map(purchase => {
    //     return (purchase)
    // })
    

    return(
        <>
        {/* <div>

            {userPurchases}
        </div> */}
        {/* <h1>{ currentUser.name }</h1> */}
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
                    
                </ListGroup> 
                <Card.Body>
                    <Card.Link href="#">Edit Profile</Card.Link>
                    {/* <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
            </Card>
        </>
    )
}

export default UserProfile;