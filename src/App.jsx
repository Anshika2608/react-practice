function App() {
  let lname="mittal";
  let name='Anshika';
  let number=Math.floor(Math.random()*10)+1;
  let date=new Date().getFullYear();
  return (
    // <>
    //  <h1 >Hello {name}</h1>
    //  <p>Your Lucky number is {number}</p>
    // </>
    <>
    <p>Created by {`${name} ${lname}`}</p>
    <p>Copyright {date}</p>
    </>
    )
 

}

export default App
