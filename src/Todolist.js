import React,{useState} from 'react';
import Lists from './Lists'

const Todo = () =>{

  const [inputList , setInputList]=useState("");
  
  const [Items , setItems ] = useState([]);

  const itemEvent =(event)=>{
    setInputList(event.target.value);

  };


const listofitems=()=>{
      setItems((oldItem)=>{
        return [...oldItem,inputList]
      });
      setInputList("");
};
const deleteItems =(id)=>{
  setItems((oldItem)=>{
    return oldItem.filter((arrElem ,index)=>{
      return index!==id;
    })
  })
};

  return (
    <>
        <div className="main_div">
            <div className="center_div">
              <br/>
              <h1> Todo List </h1>
              <br/>
              <input type="text" placeholder="Add a Item" value={inputList} onChange={itemEvent}/>
              <button onClick={listofitems}> + </button>

              <ol>
             
               {Items.map((itemval,index)=>{
                  return <Lists
                   key ={index} 
                   id={index}
                   text={itemval}
                   onSelect={deleteItems}
                   />;

                })}
              </ol>
            </div>

        </div>
  </>
  );
};
export default Todo;