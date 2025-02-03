import React from "react";
import data from '../assets/data.png';
import '../styles/home.css';
import image1 from '../assets/image1.webp';
import image2 from "../assets/image2.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";
const Home = () => {
  const cards = [
    {
      image: data,
      cardTitle: "All In One Bottle",
      cardContent:
        "Our return policy is simple and that is why customers love our shop.",
    },
    {
      image: image1,
      cardTitle: "All In One Bottle",
      cardContent:
        "Our return policy is simple and that is why customers love our shop.",
    },
    {
      image: image2,
      cardTitle: "All In One Bottle",
      cardContent:
        "Our return policy is simple and that is why customers love our shop.",
    },
  ];
  return (
    <section className="Holder">
      {cards.map((cardData) => (
        
          <div className="card-container">
            <div>
              <img src={cardData.image} className="card-image" />
            </div>
            <div className="text-1">{cardData.cardTitle}</div>
            <div className="text-2">{cardData.cardContent}</div>
            <div className="iconContainer">
              <IoIosArrowRoundForward className="icon" />
            </div>
          </div>
        
      ))}
    </section>
  );
}
export default Home;