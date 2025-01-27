import React from "react"

export default function Meme()
{
    setTimeout(() => {
        console.log("Joel");
        setTimeout(() => {
            console.log("Victoria");
            setTimeout(() => {
                console.log("John");
                setTimeout(() => {
                    console.log("Doe");
                    setTimeout(() => {
                        console.log("Sarah");
                    }, 2000);
                }, 2000);
            }, 2000);
        }, 2000);
    }, 2000);
    
    const[meme,setmeme] = React.useState({
        topText : "",
        bottomText : "",
        randomImage: "http://i.imgflip.com/1bij.jpg"
    })

    function stateChanges(event)
    {
        const {name , value} = event.target
        setmeme(prevstate => (
            {
                ...prevstate,
                [name]: value
            }
        ))
    }

    const[allMemes, setAllMemes] = React.useState()


    React.useEffect(() =>
        {
            fetch("https://api.imgflip.com/get_memes")
                .then(res => res.json())
                .then(data => setAllMemes(data.data.memes))
        }, []
    )

    function getRandomMeme()
    {
        const randomNum = Math.floor(allMemes.length * Math.random())
        const url = allMemes[randomNum].url

        setmeme(prevstate => (
        {
            ...prevstate,
            randomImage: url
        }
        ))
    }

    return(
        <main>
            <div className="form">
                <input type="text" placeholder="Top Text" className="form--input"
                 name="topText" value={meme.topText} onChange={stateChanges}/>  
                <input type="text" placeholder="bottom Text" className="form--input"
                 name="bottomText" value={meme.bottomText} onChange={stateChanges}/> 
                <button className="form--button" onClick={getRandomMeme}>Get a new meme image🖼️ </button>
            </div>
            <div className="meme">
                <img src={meme.randomImage} alt="" className="meme--image"/>
                <h2 className="meme--textTop"> {meme.topText} </h2>
                <h2 className="meme--textBottom"> {meme.bottomText} </h2>
            </div>
        </main>
    )
}