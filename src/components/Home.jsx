import React from "react";
import data from "../assets/data.png";
import "../styles/home.css";
import image1 from "../assets/image1.webp";
import image2 from "../assets/image2.jpg";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Navigate } from "react-router-dom";
export const cards = [
  {
    _id: 1,
    image: data,
    cardTitle: "All In One Bottle",
    cardContent:
      "Our return policy is simple and that is why customers love our shop.",
  },
  {
    _id: 2,
    image: image1,
    cardTitle: "All In One Bottle",
    cardContent:
      "Our return policy is simple and that is why customers love our shop.",
  },
  {
    _id: 3,
    image: image2,
    cardTitle: "All In One Bottle",
    cardContent:
      "Our return policy is simple and that is why customers love our shop.",
  },
];
const Home = () => {
  // const { id } = useParams();
  const navigatee = useNavigate();
  const handleNavigate = (id) => {
    navigatee(`/card/${id}`);
  };

  
  return (
    <section className="Holder">
      {cards.map((cardData) => (
        <div className="card-container" key={cardData._id}>
          <div>
            <img src={cardData.image} className="card-image" />
          </div>
          <div className="text-1">{cardData.cardTitle}</div>
          <div className="text-2">{cardData.cardContent}</div>
          <div className="iconContainer">
            <IoIosArrowRoundForward
              className="icon"
              onClick={()=>handleNavigate(cardData._id)}
            />
          </div>
        </div>
      ))}
    </section>
  );
};
export default Home;
