import React from 'react'
import ReactDOM from 'react-dom'
import './img.css'
function Card(props){
    return (
        <div>
            <h2>{props.name}</h2>
            <img  className="img1" src={props.src} alt="Kareena Kapoor" />
            <p>{props.tel}</p>
            <p>{props.email}</p>
        </div>
    )
}
export default Card