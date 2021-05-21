import { Card, Img, Title, Text, Body, Link, ListGroup, ListGroupItem} from "react-bootstrap"

function UserProfile ({ currentUser }){

    // console.log(currentUser.packs)

    const userPacks = currentUser.packs.map(pack => {
        return (
            <ListGroupItem>{pack.name}</ListGroupItem>
        )
    })
    // console.log(userPacks)
    return(
        <>
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
                <Card.Body>
                    <Card.Link href="#">Edit Profile</Card.Link>
                    {/* <Card.Link href="#">Another Link</Card.Link> */}
                </Card.Body>
            </Card>
        </>
    )
}

export default UserProfile;