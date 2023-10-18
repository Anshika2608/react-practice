import React from 'react'
import ReactDOM from 'react-dom'
import Heading from './components/Header'
import Footer from './components/Footer'
import Notes from './components/Note'
import Card from './components/Card'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
ReactDOM.render(
  <div>
   <h1>My Contacts</h1>
    <Card name="kareena kapoor"  tel="+123 456 789" email="@kareenakapoor.com"  src="https://i2.cinestaan.com/image-bank/1500-1500/111001-112000/111406.jpg"/>
    <Card  name="salman khan"  tel="+123 467 689" email="@salmankhan.com" src="https://th.bing.com/th/id/OIP.HFH356lCZZNvkC0S2KQHTAHaNK?w=115&h=188&c=7&r=0&o=5&dpr=1.3&pid=1.7"/>
    <Card name="shahrukh khan" tel="+123 454 789" email="@shahrukhkhan.com" src="https://www.masala.com/public/images/2019/11/11/Shah-Rukh-Khan-Baadhshah-Of-Bollywood.jpg" />
  </div>
,
  document.getElementById("root")


)
