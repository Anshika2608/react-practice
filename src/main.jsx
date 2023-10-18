import React from 'react'
import ReactDOM from 'react-dom'
import Heading from './components/Header'
import Footer from './components/Footer'
import Notes from './components/Note'
// import App from './App.jsx'
// import './index.css'

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
// )
ReactDOM.render(
  <div>
    <Heading></Heading>
    <Notes />
    <Footer></Footer>
  </div>
,
  document.getElementById("root")


)
