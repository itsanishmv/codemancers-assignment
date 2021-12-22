import React,{useContext, useEffect, useRef} from 'react';
import './App.css';
import ComposePost from './components/composePost/ComposePost';
import Posts from './components/POSTS/Posts';
import { MyContext } from './components/Context';

function App() {
  const { postsArray, setstate} = useContext(MyContext)
  const domNode = useRef()

  useEffect(() => {
    document.addEventListener("mousedown", (e) => {
      if (!domNode.current.contains(e.target)) {
        setstate(false)
      }
    })
  })
  
  return (
    <div  className="App">
      <ComposePost />
      <div>
        {postsArray?.slice(0).reverse().map(({ img, message }) => (
          <Posts img={img} message={message} />
        ))
        }
      </div>
     
    </div>
  );
}

export default App;
