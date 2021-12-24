import React,{useContext} from 'react'
import './ComposePost.css'
import Giphy from '../GIPHY/Giphy'
import { MyContext } from '../Context'

function ComposePost() {
    
    const { state, setstate,clickedGif,setclickedGif,text,setText,setPostsArray,postsArray } = useContext(MyContext)
    
    function showGIF() {
       
        setstate(!state)
    }
   
   function handleText(e){
       setText(e.target.value) 
    
    }
    function postfunc() {
        setstate(false)
        setclickedGif("")
        setPostsArray([...postsArray, { message: text, img: clickedGif }])
        setText("")
    }
    
    return (
        <>
            <div className='wrapper'>
                <div  className='text__editor'>
                    <div  className='input'>
                        <img className='user__icon' src="userIcon.png" alt="" />
                        <textarea value={text} onChange={handleText} className='text__area' type="text" placeholder='write something ....' />
                        {clickedGif && <img className='clickedgif' src={clickedGif} alt="" />}
                    </div>
                    <div className='attachment'>
                        <div onClick={showGIF} className='gif__btn'>
                            <img className='gif__icon' src="gifIcon.png" alt="" />
                            <span className='gif__title'>GIF</span>
                        </div>
                        <div>
                            {state && <Giphy />}
                        </div>
                    </div>
                    
                    <button onClick={postfunc} className='post__btn'>
                        Post
                    </button>

                </div>
            </div>
        </>
    )
}

export default ComposePost
