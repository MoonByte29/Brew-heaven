// import menubg from "../../assets/backpic.jpg";
import coffee from "../../assets/flat-white.png";
import tea from "../../assets/tea.jpg";
import snacks from '../../assets/snacks.jpg'
import "./Menu.css";
import Button2 from "../button/Button2";

const Menu = () => {
  return (
    <>
      <div className="menu" id="menu">
        <h1>Menu</h1>
        <div className="menu-container">
          <div className="content">
            <h2>COFFEE</h2>
            <div className="menu-pic">
              <img src={coffee} alt="" />
            </div>

            <div className="list">
              <ul>
                <li>Espresso</li>
                <li>Americano</li>
                <li>Cappucino</li>
                <li>Cafe Latte</li>
                <li>Mocca</li>
              </ul>

              <ul>
                <li>$5</li>
                <li>$3</li>
                <li>$4</li>
                <li>$3</li>
                <li>$3</li>
              </ul>
            </div>

            <Button2
          
            >
              Buy Now..
            </Button2>
          </div>

          <div className="content">
            <h2>NON COFFEE</h2>
            <div className="menu-pic">
              <img src={tea} alt="" />
            </div>
            <div className="list">
              <ul>
                <li>Tea</li>
                <li>Green Tea</li>
                <li>Lemonade</li>
                <li>Hot Chocolate</li>
                <li>Fruit Smoothie</li>
              </ul>

              <ul>
                <li>$5</li>
                <li>$6</li>
                <li>$6</li>
                <li>$3</li>
                <li>$5</li>
              </ul>
            </div>
            <Button2>Buy Now..</Button2>
          </div>

          <div className="content">
            <h2>SNACK</h2>
            <div className="menu-pic">
              <img src={snacks} alt="" />
            </div>

            <div className="list">
              <ul>
                <li>Muffin</li>
                <li>Fried Fries</li>
                <li>Mix Plate</li>
                <li>Sandwitch</li>
                <li>Chinna Roll</li>
              </ul>

              <ul>
                <li>$5</li>
                <li>$3</li>
                <li>$4</li>
                <li>$6</li>
                <li>$3</li>
              </ul>
            </div>

            <Button2>Buy Now..</Button2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
