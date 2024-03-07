import React from 'react';
import styled from 'styled-components';
import Destination1 from "../img/Destination1.png";
import Destination2 from "../img/Destination2.png";
import Destination3 from "../img/Destination3.png";
import Destination4 from "../img/Destination4.png";
import Destination5 from "../img/Destination5.png";
import Destination6 from "../img/Destination6.png";
import Destination7 from "../img/download.jpg";
import Destination8 from "../img/download2.jpg";
import Destination9 from "../img/Download3.jpg";
import Destination10 from "../img/download4.jpg";
import Destination11 from "../img/download5.jpg";
import Destination12 from "../img/download6.jpg";
import { useState } from 'react';
import info1 from "../img/info1.png";
import info2 from "../img/info2.png";
import info3 from "../img/info3.png";
import { act } from 'react-dom/test-utils';
function Recommend() {

  const data = [
    {
      id: 1,
      image: Destination1,
      title: "Singapore",
      subTitle: "Singapore, officialy thr Republic of Singapore, is a",
      cost: "38,800",
      duration: "Approx 2 night trip",
    },
    {
      id: 2,
      image: Destination2,
      title: "Thailand",
      subTitle: "Thailand is a Southeast Asia country. It's known for",
      cost: "54,200",
      duration: "Approx 2 night trip",
    },
    {
      id: 3,
      image: Destination3,
      title: "Paris",
      subTitle: "Paris, France's capital, is a major European city and a",
      cost: "45,500",
      duration: "Approx 2 night trip",
    },
    {
      id: 4,
      image: Destination4,
      title: "New Zealand",
      subTitle: "New Zealand is an island country in the",
      cost: "24,100",
      duration: "Approx 1 night trip",
    },
    {
      id: 5,
      image: Destination5,
      title: "Bora Bora",
      subTitle: "Bora Bora is a small South Pacific island northwest of",
      cost: "95,400",
      duration: "Approx 2 night 2 day trip",
    },
    {
      id: 7,
      image: Destination6,
      title: "London",
      subTitle: "London, the capital of England and the United",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
    },
    {
      id: 8,
      image: Destination7,
      title: "Japanon",
      subTitle: "Japan, One Of The Famous Asia Countries",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
    },
    {
      id: 9,
      image: Destination8,
      title: "Bagan",
      subTitle: "Bagan, the capital of England and the United",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
    },
    {
      id: 10,
      image: Destination9,
      title: "Rome",
      subTitle: "Rome, the capital of England and the United",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
    },
    {
      id: 11,
      image: Destination10,
      title: "Egypt",
      subTitle: "Egpyt, the capital of England and the United",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
    },
    {
      id: 12,
      image: Destination11,
      title: "London",
      subTitle: "London, the capital of England and the United",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
    },
    {
      id: 13,
      image: Destination12,
      title: "London",
      subTitle: "London, the capital of England and the United",
      cost: "38,800",
      duration: "Approx 3 night 2 day trip",
    },
  ];

  const packages = [
    "The Weekend Break",
    "The Package Holiday",
    "The Group Tour",
    "Long Term Slow Travel",
  ];

  const [active, setActive] = useState(1);
  return (
    <Section id="recommend">
      <div className="title">
        <h2>Recommended Destinations</h2>
      </div>
      <div className="packages">
        <ul>
          {packages.map((plan, index) => {
            return (
              <li className={active === index + 1 ? "active" : ""} onClick={() => setActive(index + 1)}>
                {plan}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="destinations">
        {data.map((destination) => {
          return (
            <div className="destination" key={destination.id}>
              <img src={destination.image} alt="" />
              <h3>{destination.title}</h3>
              <p>{destination.subTitle}</p>
              <div className="info">
                <div className="services">
                  <img src={info1} alt="" />
                  <img src={info2} alt="" />
                  <img src={info3} alt="" />
                </div>
                <h4>{destination.cost}</h4>
              </div>
              <div className="distance">
                <span>1020 Kms</span>
                <span>{destination.duration}</span>
              </div>
            </div>
          )
        })}
      </div>
    </Section>

  )
}

export default Recommend;

const Section = styled.section`
.title {
    text-align: center;
    word-spacing: 1.2rem;
    font-size: 20px;
    letter-spacing: 0.12rem;
  }
  
  .packages {
  
    display: flex;
    justify-content: center;
    margin: 2rem 0;
  
    ul {
      margin-top: 20px;
      display: flex;
      list-style-type: none;
      width: max-content;
      cursor: pointer;
      transition: all 0.5s ease-out;
  
      li {
        padding: 1rem 2rem;
        border-bottom: 0.1rem solid black;
        transition: all 0.3s ease-out;
      }
  
      .active {
  
        border-bottom: 0.5rem solid #5a5555;
      }
    }
  }
  
  .destinations {
    display: grid;
    cursor: pointer;
    grid-template-columns: repeat(3, 1fr);
    gap: 3rem;
    padding: 0 3rem;
  
    .destination {
      padding: 1.2rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      background-color: #3c4a7429;
      border-radius: 1rem;
      transition: 0.3s ease-in-out;
  
      &:hover {
        transform: translateX(0.4rem) translateY(-1rem);
        box-shadow: rgba(0, 0, 0, 0.469) 0px 5px 15px;
      }
  
      img {
        width: 100%;
        border-radius: 10px;
        
      }
  
      .info {
        display: flex;
        align-items: center;
  
        .services {
          display: flex;
          gap: 0.3rem;
  
          img {
            border-radius: 1rem;
            background-color: #00000084;
            width: 2rem;
            padding: 1rem;
            padding: 0.3rem 0.4rem;
          }
        }
  
        display: flex;
        justify-content: space-between;
      }
  
      .distance {
        display: flex;
        justify-content: space-between;
      }
    }
  }
  @media screen and (min-width: 280px) and (max-width: 768px) {
    .packages {
        display: flex;
        flex-direction: row;
      ul {
        li {
          padding: 0 0.5rem;
          font-size: 11px;
          padding-bottom: 1rem;
          font-weight: 600;
        }
        .active {
          border-bottom-width: 0.3rem;
        }
      }
    }
    .destinations {
      grid-template-columns: 1fr;
      padding: 0;
    }
  }
`;