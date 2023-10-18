function App() {
  // let lname="mittal";
  // let name='Anshika';
  let number=Math.floor(Math.random()*10)+1;
  let date=new Date().getHours();
   const style={
    color:"blue",
    fontWeight:"700",
    fontSize:"3rem"
  }
let wish="";
  if (date<12)
  {
    wish="Good Morning";
    style.color="green";
  }
  else if(date<18)
  {
     wish="Good Evening";
     style.color="red";
  }
  else{
    wish="Good Night";
  }

  return (
     <>
     <h1 className="heading" style={style}>{wish}</h1>
     </>
    )
 

}

export default App
