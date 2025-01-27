import React from "react"

export default function BoxDisplay(props)
{
    
    const styles = {
        backgroundColor: props.on? "#222222" : "#cccccc"
    }

    return (
        <div style={styles} className="box" onClick={props.toggle}></div>
    )
}