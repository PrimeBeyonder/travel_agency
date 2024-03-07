import React from 'react'
import styled from 'styled-components'
import Avator from "../img/avator.jpg"
import Avator2 from "../img/avator2.jpg"
import Avator3 from "../img/avator3.jpg"
function Testimonials() {
  return (
    <Section id='testimonials'>
      <div className="title">
        <h1>Happy Customers</h1>
      </div>
      <div className="testimonials">
        <div className="testimonial">
          <h2 className='review'>Reviews</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui praesentium vero natus excepturi error quibusdam eos quae, neque ex ratione voluptatem, minus, suscipit voluptatibus exercitationem itaque nam possimus eius atque!</p>
          <div className="info">
            <img src={Avator} alt="" />
            <div className="details">
              <h4>Toji Fushiguro</h4>
              <span>Jujutsu Sorcers Slayer</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <h2 className='review'>Reviews</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui praesentium vero natus excepturi error quibusdam eos quae, neque ex ratione voluptatem, minus, suscipit voluptatibus exercitationem itaque nam possimus eius atque!</p>
          <div className="info">
            <img src={Avator2} alt="" />
            <div className="details">
              <h4>Gojo Satoru</h4>
              <span>Jujutsu S Rank Sorcer</span>
            </div>
          </div>
        </div>
        <div className="testimonial">
          <h2 className='review'>Reviews</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui praesentium vero natus excepturi error quibusdam eos quae, neque ex ratione voluptatem, minus, suscipit voluptatibus exercitationem itaque nam possimus eius atque!</p>
          <div className="info">
            <img src={Avator3} alt="" />
            <div className="details">
              <h4>Geto Suguru</h4>
              <span>Gojo's BestFriend</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Testimonials
const Section = styled.section`
margin: 5rem 0;
.title {
  text-align: center;
  margin-bottom: 4rem;
  margin-top: 2rem;
  word-spacing: 1.2rem;
  font-size: 20px;
  letter-spacing: 0.12rem;
}
h2{
  margin-bottom: 20px;

}
.testimonials {
    cursor: pointer;
  display: flex;
  justify-content: center;
  margin: 0 2rem;
  gap: 2rem;
  .testimonial {
    background-color: #3c4a7429;
    padding: 2rem;
    border-radius: 0.5rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    transition: 0.3s ease-in-out;
    &:hover {
      transform: translateX(0.4rem) translateY(-1rem);
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
    .info {
      display: flex;
      justify-content: center;
      gap: 1rem;
      align-items: center;
      margin-top: 1rem;
      img {
        border-radius: 3rem;
        height: 3rem;
      }
      .details {
        span {
          font-size: 0.9rem;
        }
      }
    }
  }
}
@media screen and (min-width: 280px) and (max-width: 800px) {

  .testimonials {
 
    flex-direction: column;
    margin: 0;
    .testimonial {
      justify-content: center;
      .info {
        flex-direction: column;
        justify-content: center;
      }
    }
  }
  
}
`