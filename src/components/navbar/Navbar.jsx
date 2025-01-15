import './Navbar.css';
import Button from '../button/Button'
import logo from '../../assets/brown-logo.png'
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

const Navbar = ()=>{

  // function showOrder(){
  //   alert("Order Placed Successfully");
  //   const abt = document.getElementById('abt').style.display='none';
  //   const mn = document.getElementById('menu').style.display='block';
  //   const ct = document.getElementById('contact').style.display='block';
  // }
  

  return (
    <>
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <ul>
      
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#menu">Menu</a></li>
        <li><a href="#contact">Contact</a></li>
        <Popup trigger={ <Button><a href="#order">Order now</a></Button>} modal nested>
          {(close) => (
            <div className="modal">
              <div className="content">Welcome to GFG!!!</div>
              <div>
                <button onClick={() => close()}>Close modal</button>
              </div>
            </div>
          )}
        </Popup>

      </ul>

    </nav>
    </>
  )
}

export default Navbar;