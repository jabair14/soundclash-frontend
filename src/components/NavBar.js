import { Nav } from 'react-bootstrap'

function NavBar() {
    return (
        <>
  <Nav className="justify-content-center" >
    <Nav.Item>
      <Nav.Link >User Profile</Nav.Link>
    </Nav.Item>
    {/* <Nav.Item>
      <Nav.Link >Logout</Nav.Link>
    </Nav.Item> */}
    <Nav.Item>
      <Nav.Link >Create Pack</Nav.Link>
    </Nav.Item>
    {/* <Nav.Item>
      <Nav.Link  >
        Disabled
      </Nav.Link>
    </Nav.Item> */}
  </Nav>

</>
      

    )
}

export default NavBar;