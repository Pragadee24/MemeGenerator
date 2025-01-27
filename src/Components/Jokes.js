import React from "react";

export default function Joke(props)
{
    let [isShown,setIsShown] = React.useState(false)

    function toggle()
    {
        setIsShown(prevstate=> !prevstate)
    }

    return(
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggle}> Show Punchline</button>
            <hr/>
        </div>
    )
}