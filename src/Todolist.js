import React,{useState} from 'react';
import Lists from './Lists';


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
              <h1 className="bt1"> <span></span><span></span><span></span><span></span>Todo List </h1>
              <br/>
               <br/>
                <br/>
              <input  className="bt1" type="text" placeholder="Add a Item" value={inputList} onChange={itemEvent}/>
              <button className="bt1" onClick={listofitems}><span></span><span></span><span></span> <span></span> + </button>

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