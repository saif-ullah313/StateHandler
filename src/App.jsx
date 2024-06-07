
// var expect = function(val) {
//   return {
//    toBe: (val1)=>{
//        if(val === val1){
//        return true;
//       }
//        else {
//            return "Not Equal";
           
//        }
//    },
//    notToBe : (val1)=>{
//        if(val !==val1){
//            return true;
//        }else {
//            return "Equal";
//        }
//    }
//   }
   
// };
// console.log(expect(5).toBe(5));
// console.log(expect(5).notToBe(5));

import { sculptureList } from "./StateComponents/State1";
import { useState } from "react";
import Form from "./StateComponents/State2";
function App() {

  const [index, setIndex] = useState(0)
  const [showMore, setShowMore] = useState(false)

  function handleClick() {
    setIndex(index + 1);
    if(index === 11){
      setIndex(0);
    }

  }
  function handleMoreClick(){
    setShowMore(!showMore);
  }
  function handleBack(){

    setIndex(index-1);
    if(index === 0){
        setIndex(11)
    }
  }


  let sculpture = sculptureList[index];
  return (
    <>
    <div>
    <h2>Question No 01:</h2>
      <button onClick={handleClick} disabled={(index ==11)?true:false}>
        Next
      </button>
      <h2>
        <i>{sculpture.name}</i> 
        by {sculpture.artist}
      </h2>
      <h3>  
        ({index} of {sculptureList.length-1})
      </h3>
      <button onClick={handleMoreClick}>{showMore ? 'Hide':'Show'}</button>
      {showMore && <p>
        {sculpture.description}
      </p>}<br/>
      <br/>
      
      <img 
        src={sculpture.url} 
        alt={sculpture.alt}
      /><br/>
      <br/>
      
      <button onClick={handleBack}>Back</button><br/>

      <hr/>

      <h2>Question No 02:</h2>

      <Form/>
      <br/>
      <hr/>
      </div>
    </>

  );


}

export default App;




