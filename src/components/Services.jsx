import React from 'react'
import { MdOutlineWeb } from "react-icons/md";
import { FaUserClock } from "react-icons/fa";
import '../styles/service.css';
import image1 from'../assets/image1.webp';

function Services() {
    const service = [
        {
            name: 'Software development',
            picture:image1,
            content:'Welcome to our company'
        },
         {
            name: 'Software development',
            picture:image1,
            content:'Welcome to our company'
        },
          {
            name: 'Software development',
            picture:image1,
            content:'Welcome to our company'
        }
    ]
  return (
      <div className='service'>
          
          {
              service.map((item) => (
                  <>
                      <div><img src={item.picture}/></div>
                      <div>{item.name}</div>
                       <div>{ item.content}</div>
                  </>
          ))
      }

    </div>
  )
}

export default Services