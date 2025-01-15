import React from 'react'
import './Testimonial.css'
import client1 from '../../assets/client_1.jpg'
import client2 from '../../assets/client_2.jpg'

function Testimonial() {
  return (
    <>
    <div className="testimonial">
      <h1>Testimonials</h1>
      <div className="review">
        <div className="review-card">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            corrupti impedit adipisci natus fugiat? Sit sapiente doloremque
            porro sint qui!
          </p>
          <div className="client-img">
            <img src={client1} alt="" />
            <h4>
              Roger Scott
              <p>Marketing Manager</p>
            </h4>
          </div>
        </div>

        <div className="review-card">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            corrupti impedit adipisci natus fugiat? Sit sapiente doloremque
            porro sint qui!
          </p>
          <div className="client-img">
            <img src={client2} alt="" />
            <h4>
              Roger Scott
              <p>Marketing Manager</p>
            </h4>
          </div>
        </div>

        <div className="review-card">
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore
            corrupti impedit adipisci natus fugiat? Sit sapiente doloremque
            porro sint qui!
          </p>

          <div className="client-img">
            <img src={client1} alt="" />
            <h4>
              Roger Scott
              <p>Marketing Manager</p>
            </h4>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Testimonial