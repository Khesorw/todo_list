

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {useState} from 'react';


const App = () => {
  

   const [items, setItems] = useState([]);
   const [input, setInput] = useState("");
  // const [editItem, setEditItem] = useState(null);
  // const list = [...items];

 

  function addTask() { 

    //document.getElementById('my_tasks').innerHTML = addItem();
   // const newTask = ` Task ${addTask.length + 1}.`;

    setItems([...items, input]);
    console.log(items);
    
    
  }



  function getInput(inp) {
    setInput(inp);
    addTask();
    setInput("");
  }


  function keyPress(e) { 
    if (e.key === "Enter") {
      getInput(input);
    }
  }

  const placeHolder = "Enter your task here...";
  return (

    <>
      <div className='container p-3 text-black bg-white text-center fw-bold'>
        <h1 className="custom-font">TODO LIST</h1>
        <hr />
        <div className="container-fluid">
          <input type="text" className="form-control" placeholder={placeHolder} onKeyDown={keyPress}  value={input} onChange={(e)=>{setInput(e.target.value)}} />
        </div>
          <div className="d-flex px-1 ms-2 mt-2">
          <button className="btn bg-black text-white" onClick={() => {
            getInput(input)
            

          }}>ADD</button>
        </div>
       
         
        
        <div className="list-group mt-3" id='my_tasks'>
          {items.map((elem, index) => {
            
            return (
              <li className='list-group-item d-flex  align-items-center' key={index}>

                <p className='mb-0 flex-grow-1 text-left'>{elem}</p>
              <div>
                  <button className="btn bg-warning text-white me-2" onClick={() => {
                    let newText = prompt("Edit the todo: "+items[index]);
                    items[index] = newText;
                    setItems([...items]);


                  }}>EDIT</button>
              
                  
                  <button className="btn bg-danger text-white" onClick={() => {
                    const upadted = items.filter((_, i) => i !== index);
                    setItems(upadted);
                  }}>DELETE</button>
                  
              </div>
      
          </li>
              
            );


          })}
            
          
          
         

        </div>


      
      
      </div>
      
    </>
  );
}

export default App;
