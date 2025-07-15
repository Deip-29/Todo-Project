import { useEffect } from "react";
import { useState } from "react";
export const TodoDate=()=>{

  const[dateTime,setDateTime]=useState("");
  // TODO Date and time 


  useEffect(()=>{
  const interval =
  setInterval(() => {
    const now=new Date();
    const formattedDate= now.toLocaleDateString();
    const formatetedTime= now.toLocaleTimeString();
    setDateTime(`${formattedDate} - ${formatetedTime}`);
  }, 1000);
  return()=> clearInterval(interval);
},[]);


  return(
   <h2 className="date-time"> {dateTime}</h2>

  );
}