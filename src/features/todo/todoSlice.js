import { createSlice,nanoid } from "@reduxjs/toolkit";

const initialState = {
  
    todos:[
       {
        id:1,
        text:"this is DEMO TODO You can edit this",
        completed:false
        }
    ]
}


export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers:{
        addToto:(state,action)=>{
           
            if(action.payload!=""){

                state.todos.push({
                    id:nanoid(),
                    text:action.payload,
                    completed:false
                })
            }
                
        },
        removeTodo:(state,action)=>{
            console.log("hit - ",action.payload)
               state.todos = state.todos.filter((todo)=>todo.id!= action.payload);

        },
        editTodo:(state,action)=>{
           if(action.payload.text!=""){
               state.todos = state.todos.filter((todo)=>(todo.id===action.payload.id)?todo.text = action.payload.text:todo);

           }
         
        },
        complete:(state,action)=>{
           console.log("completed")

           state.todos = state.todos.filter((todo)=>{
            if(todo.id === action.payload){
            
               todo.completed = !(todo.completed)
               return todo;
                
            }else{
                return todo;
            }
           });

      

        }
      
    }
});

export const{addToto, removeTodo,editTodo,complete} = todoSlice.actions;
export default todoSlice.reducer;
