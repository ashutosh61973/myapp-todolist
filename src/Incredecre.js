import React ,{ useState } from 'react';


const Incredecre =()=>{

const [num,setnum]=useState(0);

const incnum = ()=>{
  setnum(num + 1);
};
const decnum = ()=>{
  if(num>0){
  setnum(num - 1);}
  if(num<=0)
  {
    alert('zero limit reached');
  }
};

  return(
    <>
        <div className="main_div">
          <div className="center_div">
            <h1 className="count">{num}</h1>
            <div className="btn1">
                <button className="bt1 bt2" onClick={incnum}><span></span><span></span><span></span><span></span>increm</button>
                <button className="bt1 bt3" onClick={decnum}><span></span><span></span><span></span><span></span>decrem</button>
             </div>
          </div>
        
        </div>
    </>
  );
};

export default  Incredecre ;