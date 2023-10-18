import React from 'react'
import ReactDOM from 'react-dom'
import Image from './Avatars1'
import './img.css'
function Card(props){
    return (
        <> 
            <div className="contact">     
            <div className="upper">
            <h2>{props.name}</h2>
            <Image src={props.src} />
            </div>
            <div className="lower">
            <p>{props.tel}</p>
            <p>{props.email}</p>
            </div>
            </div>
        </>
    )
}
export default Card