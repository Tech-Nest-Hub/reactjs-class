import { useEffect, useState } from "react";


interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const ShowToDoPage = () => {
  const [todos, setTodos] = useState<Todo[]>(()=>{
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [newTodo, setNewTodo] = useState<string>('');
  
  useEffect(()=>  {
    localStorage.setItem('todos', JSON.stringify(todos));
  },[todos]);

  const addTodo = ():void => {
    setTodos([...todos, {id: Date.now(),text:newTodo, completed: false}])
    setNewTodo('')
  }
  const editTodo = (id: number): void => {
    setTodos([...todos, {id: Date.now(),text:newTodo, completed: false}])
  }

  const deleteTodo = (id: number): void => {
    setTodos(todos.filter(todo => todo.id !==id));
  }

  return (
    <>
    <div>
      <h1 className="text-2xl flex py-4 items-center justify-center">Todo App</h1>
      <div className="flex justify-between mx-12 items-center my-10 gap-4">
        <input 
        type="text"
        value={newTodo}
        onChange={(event)=>{setNewTodo(event.target.value)}}
        placeholder="Add a new Todo"
        className="rounded-lg shadow-lg p-6 w-full border-2 border-blue-500 hover:border-blue-400"
         />
         <button 
         className="p-4 border-2 border-black rounded-2xl
          hover:text-white
          hover:bg-blue-500 cursor-pointer"
          onClick={addTodo}>Add</button>
      </div>
      <ul>
        {todos.map(todo=> {
          return(
            <li key={todo.id} className={todo.completed ? 'bg-red-500' :  "bg-green-500 "}>
            <span>{todo.text}</span>
            <button 
            onClick={()=> deleteTodo(todo.id)} 
            className="
            p-4 border-2 border-black rounded-2xl
          hover:text-white
          hover:bg-red-500 cursor-pointer
            ">Delete</button>
          </li>
      )
        })}
        </ul>
    </div>
    </>
  )
}

export default ShowToDoPage



