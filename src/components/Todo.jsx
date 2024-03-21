import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo,editTodo,complete } from "../features/todo/todoSlice";

function todo({todo,id,completed}) {
  const [text, setText] = useState(todo);
  const [editable, setEditable] = useState(false);
  const dispatch = useDispatch();

  const handleEdit = (e) => {
    if (editable) {
      setEditable(false);
      dispatch(editTodo({text,id}))
    } else {
      setEditable(true);
    }
  };

  const remove = () => {
    const curTodo = document.getElementById(id);
    console.log(curTodo)
    
    setTimeout(() => {
        curTodo.style.marginLeft = "-120%";
      setTimeout(() => {
        curTodo.style.height = "0px";
        
      }, 200);
      
    }, 300);

    setTimeout(() => {
      dispatch(removeTodo(id));
    }, 1200);
  };
  return (
    <div key={id} id={id} className={`todoList transi overflow-hidden  ${completed?"bg-green-300":"bg-blue-300"}  mt-3`}>
      <div className="todoInputbox ">
        <input
          onChange={()=>dispatch(complete(id))}
          className="mx-1 w-4 h-4 "
          type="checkbox"
          checked={completed}

        />
        <input
          type="text"
          className={`todoTxtarea font-bold text-[#1d1d4b]  rounded-lg pl-1 ${!editable?"bg-transparent":"bg-gray-400"}   outline-none`}
          value={text}
          onChange={(e) => setText(e.target.value)}
          readOnly={!editable}
        />
      </div>
      <div className=" todoButtonbox">
        <button onClick={handleEdit} className="editbtn w-1/2 min-w-12 text-white bg-[#ffd311] hover:bg-[#dcb403]">
          {
            editable?
            <i className="fa fa-check-square-o" style={{ fontSize: "24px", color:"red" }}></i>
            :
            <i className="fa fa-pencil" style={{ fontSize: "24px"}}></i>

          }
        </button>
        <button
          onClick={remove}
          className="deletebtn w-1/2 rounded-e-[8px] min-w-12 text-white bg-red-600 hover:bg-red-500"
        >
          <i className="fa fa-trash-o" style={{ fontSize: "24px" }}></i>
        </button>
      </div>
    </div>
  );
}

export default todo;
