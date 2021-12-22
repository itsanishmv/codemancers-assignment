import React,{useContext, useEffect , useRef} from 'react'
import { MyContext } from '../Context'
import './Giphy.css' 

function Giphy() {
    const {setstate, gif, setGif, loading, setLoading, setclickedGif} = useContext(MyContext)
    
    // const REACT_APP__KEY = 'cKsjWR7sqTaCItoEbK93spDaTtN5FuzF'
    const endPointTrending = `http://api.giphy.com/v1/gifs/trending?api_key=${ process.env.REACT__APP__API__KEY }&limit=10`
    const domNode = useRef()

     useEffect(() => {
             fetch(endPointTrending)
                 .then(res => res.json())
             .then(data => setGif(data.data))
     })
    
    useEffect(() => {
        document.addEventListener("mousedown", (e) => {
            if (!domNode.current.contains(e.target)) {
              setstate(false)
            }
          })
    })
 
    const getData = (e) => {
     
        const endPointSearch = `http://api.giphy.com/v1/gifs/search?api_key=${process.env.REACT__APP__API__KEY}&limit=10&q=${e.target.value}`
        fetch(endPointSearch)
        .then(res => {
            setLoading(true)
            return res.json()
        })
        .then(data => {
            setGif(data.data)
            setLoading(false)
        })
        console.log(gif)
    }
       
    const debounce = (getData) => {
        let timer
        return function (args) {
            clearTimeout(timer)
            timer = setTimeout(() => {
                getData(args)
            }, 500)
        }
    }

    const optimizedSearch = debounce(getData)

    function pickGif(e) {
        setclickedGif(e.target.src)
    }
    return (
        <div ref={domNode} className='giphy__wrapper'>
            <form action="">
                <input className='search_input' onChange={optimizedSearch}  type="text" placeholder='search GIF...'/>
            </form>
            <div className='gif__wrapper'>
                
                {loading ? <img style={{zIndex:"3"}} src="./loading2.svg" alt="loading" />
                    :
                    gif?.map(images => (
                        <img onClick={pickGif} className='gif' src={images.images.fixed_height.webp} alt="gif" />
                )) }
            </div>
          
        </div>
    )
}

export default Giphy
