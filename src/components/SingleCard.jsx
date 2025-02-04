import React from 'react'
import '../styles/single.css';
import { useParams } from 'react-router-dom';
import { cards } from './Home';

function SingleCard() {
  const { id } = useParams();
 
    
  const card = cards.find((card) => card._id == id)
  
  console.log(cards);
  
  return (
      <div>
       
          <div><img src={card?.image}/></div>
    </div>
  )
}

export default SingleCard

