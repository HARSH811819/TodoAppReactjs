import React, { useState } from "react";
import {useDispatch} from 'react-redux';
import { addToto } from "../features/todo/todoSlice";

function form() {
  const[text,setText] = useState("");
  const dispatch = useDispatch();
    const handleSubmit = (e)=>{
      e.preventDefault()
          dispatch(addToto(text));
          setText("")
    }
  return (
    <form key={"form"} className="Form w-full border flex items-center drop-shadow-xl dr " onSubmit={handleSubmit}>
      <input
        type="text"
        className=" bg-gray-500 textArea outline-none p-2 bg-gray-500"
       placeholder="Enter Your TODO"
        value={text}
        onChange={(e)=>setText(e.target.value)}
      ></input>

      <button className="addButton bg-[#e98717] font-bold hover:bg-[#ff9706] " type="submit " >Add</button>
    </form>
  );
}

export default form;
