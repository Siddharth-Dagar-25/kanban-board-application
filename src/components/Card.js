import React from 'react'
import './Card.css';
import { FaExclamation } from "react-icons/fa";
import { GoDotFill } from "react-icons/go";
import { USER_PROFILE_AVATAR } from '../utils/constants.js';

const Card = ({id, title, tag, status}) => {
  return (
    <div className="cardContainer flex-gap-10" style={{gap : '5px'}}>
        <div className="cardHeading flex-sb">
            <span style={{textTransform : "uppercase"}} className='color-grey'>{id}</span>
            <div className="imageContainer relative" style={{ width : "30px", height : "30px"}}>
                <img style={{width : "100%", height : "100%",  borderRadius : "50%" }}  src={USER_PROFILE_AVATAR} alt="UserImage" />
                <div className="showStatus"></div>
            </div>
        </div>
        <div className="cardTitle">
            <p>{title}</p>
        </div>
        <div className="cardTags">
        <div className="tags color-grey"> <FaExclamation /> </div>
            {
                tag?.map((elem, index) => {
                    return <div key={index} className="tags color-grey"> <div className='doticon'><GoDotFill style={{ color: 'gray', fontSize: '24px' }} /></div> {elem}</div>
                })
            }
        </div>
    </div>
  )
}

export default Card;