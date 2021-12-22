import React, { createContext,useState} from "react";


export const MyContext= createContext()
    
const Context = (props) => {
    const [state, setstate] = useState(false)
    const [gif, setGif] = useState([])
    const [loading, setLoading] = useState(false)
    const [clickedGif, setclickedGif] = useState()
    const [postsArray, setPostsArray] = useState([])
    const [text , setText] = useState('')
    
    return (
        <MyContext.Provider value={{text , setText, postsArray, setPostsArray,state, setstate, gif, setGif, loading, setLoading, clickedGif, setclickedGif }}>
            {props.children}
       </MyContext.Provider>
    )
}
export default Context