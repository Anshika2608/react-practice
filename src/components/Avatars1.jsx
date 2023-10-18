import React from 'react'
import ReactDOM from 'react-dom'
import './Avatars.css'
function Image(props){
    return(
        <>
        <img  className="img1" src={props.src} alt="Kareena Kapoor" />
        </>
    )
}
export default Image