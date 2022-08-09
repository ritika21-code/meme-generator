import React from "react";
import memedata from "./memedata";
export default function Meme() {
   const[allmeme,setallmeme]=React.useState([]);
    const[meme,setmeme]=React.useState({
       top : "",
       bottom:"",
       im:"http://i.imgflip.com/1bij.jpg"
    })
     React.useEffect(()=>{(
        fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setallmeme(data.data.memes))
   )},[])
  function getimage() {
        const randomNumber = Math.floor(Math.random() * allmeme.length)
        const url=allmeme[randomNumber].url
        setmeme(prev=>({
            ...prev,
            im:url
        }))
        
    }
    function handle(event){
        const{name,value}=event.target
        setmeme(prev=>({
            ...prev,
            [name]:value
        }))
    }
  

    const def=(e)=>{
        e.preventDefault();
    }
    
    return (
        <main>
          <div>
            <form className="form" onClick={def}>
                <input type="text" className="finput" placeholder="top text"
                name="top"
                value={meme.top}
                onChange={handle} />
                <input type="text" className="finput" placeholder="bottom text" 
                name="bottom"
                value={meme.bottom}
                onChange={handle}/>

                <button onClick={getimage} className="fbutton">Get a New Meme Image</button>
                
            </form></div>
            <div className="meme">
            <img src={meme.im} className="meme--image"/>
            <h2 className="meme--text top">{meme.top}</h2>
            <h2 className="meme--text bottom">{meme.bottom}</h2>
       </div>
        </main>
    )
}

    
    
    
