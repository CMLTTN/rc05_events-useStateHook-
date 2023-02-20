

const Event = () => {

  let text = "Hi React"

     const handleClick = () =>{
    alert("Hi Events")      
     }
     const handleReset = (msg) =>{
console.log(msg);
     }
     function degistir (){
          text = "Hello react"
          console.log(text);
     }
  return  <div>
   
   <h1>{text}</h1>
   <button onClick={handleClick} >Click</button>  
   <button onClick={() =>handleReset("Please clear the text")} >Reset</button>  
    <button onClick={degistir}>Change</button>
    </div>
  
}

export default Event