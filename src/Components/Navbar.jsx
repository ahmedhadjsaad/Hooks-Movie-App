import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from 'react-bootstrap/Navbar'
const Nav = () => {
    return ( <div>
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="#home">
      <img
        alt=""
        src="https://cdn4.vectorstock.com/i/1000x1000/88/28/cinema-popcorn-box-concept-background-realistic-vector-21398828.jpg"
        width="30"
        height="30"
        className="d-inline-block align-top"
      />{' '}
      Movie App
    </Navbar.Brand>
  </Navbar>
    </div> );
}
 
export default Nav;