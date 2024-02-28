import { useEffect, useState } from "react";
import Display from "./Display";

function App() {
  const [rightList,setRightList]= useState([]);
  const [leftList,setLeftList]= useState([]);

  useEffect(
    () =>{
      const lsRL =localStorage.getItem("right_list");
      const lsLL =localStorage.getItem("left_list");
      if (lsRL !=null) {
        setRightList(JSON.parse(lsRL));
      }
      if (lsLL !=null) {
        setLeftList(JSON.parse(lsLL));
      }
    },
    []
  )

  useEffect(
    () =>{
      if (rightList.length !=0) localStorage.setItem("right_list",JSON.stringify(rightList));
      if (leftList.length !=0) localStorage.setItem("left_list",JSON.stringify(leftList));
    },
    [rightList,leftList]
  )
 
  const moveToRight=(index) =>{
     console.log("moveToRight",index);
     const data = leftList[index];
     const newLeftList = leftList.filter(
      (item,i) => {
        if (i==index) return false;
        else return true
      }
     )
      setLeftList(newLeftList);
      setRightList([
          ...rightList,
          data
      ])

  }

  const moveToLeft=(index) =>{
    const data = rightList[index];
    const newRightList = rightList.filter(
     (item,i) => i !=index
    )
    setRightList(newRightList);
    setLeftList([
        ...leftList,
        data
    ])
  }

  return (
    <div className="container my-3"> 
     <input type="text" onKeyUp={(e) =>{
      if (e.key == "Enter"){
        setLeftList([...leftList,e.target.value]);
        e.target.value=""
      }
     }} className="form-control" />
    <div className="row my-3">
       <div className="col-6">
        <Display Data={leftList} handler={moveToRight} title="Left List"/>
       </div>

       <div className="col-6 border-start">
       <Display Data={rightList}  handler={moveToLeft} title="Right List"/>
       </div>
    </div>
    </div>
  );
}

export default App;
