import React from "react";
const Display = ({title,Data,handler}) =>{
    return(
        <>   
        <h3 className="text-center my-3">{title}</h3>
          <ul className="list-unstyled">
               {
                      Data.map(
                          (item,index) => {
                          return (
                          <li className="shadow-sm p-3 m-1 position-relative" key={index}>
                            {item}
                            <span
                            onClick={() => handler(index)}
                            style={{right:"10px", cursor:"pointer"}}
                             className="position-absolute fw-bold">X</span>
                          </li>)
                      }
                   )
               } 
          </ul>
        </>
    );
}


export default Display;