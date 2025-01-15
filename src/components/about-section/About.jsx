import "./About.css";
import pic from "../../assets/about-pic.jpg";
import Button2 from "../button/Button2";
// import Heading from "../heading/Heading";

const About = () => {
  return (
    <>
      <div className="about" id="about">
        <h1>About Us</h1>
        <div className="content">
          <div className="pic">
            <img src={pic} alt="" />
          </div>
          <div className="text">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. At est
              ga recusandae corporis facilis neque numquam, aperiam impedit
              explicabo eius distinctio perferendis hic earum. Culpa labore est
              error laboriosam provident, optio, expedita obcaecati velit
              officiis neque natus, dicta similique nulla veritatis quas nam
              quod accusamus. Necessitatibus eligendi eum eius doloribus!
            </p>
            <p>

              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Laudantium dolore, nostrum iure saepe accusantium fuga animi. Eos,
              quasi cumque. Quidem explicabo assumenda reprehenderit laboriosam
              nihil, sapiente velit optio eveniet obcaecati. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Consequatur debitis maiores
              cum laudantium harum, sit atque est non voluptate magnam incidunt
              mollitia molestias vel sapiente laboriosam ut iure autem et?
            </p>

            <div
              style={{
                margin: "20px 0",
              }}
            >
              <Button2>Know More..</Button2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
