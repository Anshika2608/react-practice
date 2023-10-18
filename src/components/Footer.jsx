import React from 'react'
import ReactDOM from 'react-dom'
import './Footer.css'
const date=new Date().getFullYear();
function Footer(){
    return(
        <footer>
            <p>Copyright {date}</p>
        </footer>
    
    )
}
export default Footer