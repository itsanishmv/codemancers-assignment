import React, { useContext } from 'react'
import { MyContext } from '../Context'
import './Posts.css'

function Posts({img,message}) {
    
    
    return (
        <div className='posts__wrapper'>
            <div className='post__header'>
                <img className='post__icon' src='userIcon.png' alt="" />
                <h4 className='post__name'>Elon musk</h4>
            </div>
            <div className='post__message__head'>
                     <div className='post__message'>{message}</div>
            </div>
           
            
            <img className='post__image' src={img} alt="" />
        </div>
    )
}

export default Posts
