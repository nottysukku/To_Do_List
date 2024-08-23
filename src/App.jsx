import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import { FaEdit } from "react-icons/fa";
import { AiFillDelete } from "react-icons/ai";
import { v4 as uuidv4 } from 'uuid';

function App() { 
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  const [showFinished, setShowFinished] = useState(true);

  // Load todos from localStorage on initial render
  useEffect(() => {
    const storedTodos = localStorage.getItem("todos");
    if (storedTodos) {
      setTodos(JSON.parse(storedTodos));
    }
  }, []);
  
  // Save todos to localStorage whenever the todos state changes
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleAdd = () => {
    if (todo.trim().length > 3) {
      setTodos(prevTodos => [...prevTodos, { id: uuidv4(), todo, isCompleted: false }]);
      setTodo(""); 
    }
  };

  const handleEdit = (id) => {
    const todoToEdit = todos.find(item => item.id === id);
    if (todoToEdit) {
      setTodo(todoToEdit.todo);
      setTodos(prevTodos => prevTodos.filter(item => item.id !== id));
    }
  };

  const handleDelete = (id) => {  
    setTodos(prevTodos => prevTodos.filter(item => item.id !== id));
  };

  const handleCheckbox = (id) => { 
    setTodos(prevTodos => 
      prevTodos.map(item =>
        item.id === id ? { ...item, isCompleted: !item.isCompleted } : item
      )
    );
  };

  const toggleFinished = () => {
    setShowFinished(prevShowFinished => !prevShowFinished);
  };
  
  const handleChange = (e) => {
    setTodo(e.target.value);
  };

  return (
    <>
      <Navbar/> 
      <div id="lol" className="mx-3 md:container md:mx-auto my-5 rounded-xl p-5 bg-blue-200 min-h-[80vh] md:w-[35%]">
        <h1 className='font-bold text-center text-3xl'>TaskBook - Write your Todos!</h1>
        <div className="addTodo my-5 flex flex-col gap-4">
          <h2 className='text-2xl font-bold'>Add a Todo</h2>
          <div className="flex">
            <input 
              onChange={handleChange} 
              value={todo} 
              type="text" 
              className='w-full rounded-full px-5 py-1' 
              onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
            />
            <button 
              onClick={handleAdd} 
              disabled={todo.length <= 3} 
              className='bg-blue-400 mx-2 rounded-full border hover:bg-blue-600 disabled:bg-blue-200 p-4 py-2 text-sm font-bold text-white'
            >
              Save
            </button>
          </div>
        </div>
        <input 
          className='my-4' 
          id='show' 
          onChange={toggleFinished} 
          type="checkbox" 
          checked={showFinished} 
        /> 
        <label className='mx-2' htmlFor="show">Show Finished</label> 
        <div className='h-[1px] bg-black opacity-15 w-[90%] mx-auto my-2'></div>
        <h2 className='text-2xl font-bold'>Your Todos</h2>
        <div className="todos">
          {todos.length === 0 && <div className='m-5'>No Todos to display</div>}
          {todos.map(({ id, todo, isCompleted }) => 
            (showFinished || !isCompleted) && (
              <div key={id} className="todo flex my-3 justify-between">
                <div className='flex gap-5'> 
                  <input 
                    name={id} 
                    onChange={() => handleCheckbox(id)} 
                    type="checkbox" 
                    checked={isCompleted} 
                  />
                  <div className={isCompleted ? "bg-green-700 p-2 rounded-xl" : "bg-red-400 p-2 rounded-xl"}>
                    {todo}
                  </div>
                </div>
                <div className="buttons flex h-full">
                  <button 
                    onClick={() => handleEdit(id)} 
                    className='bg-blue-400 hover:bg-blue-600 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'
                  >
                    <FaEdit />
                  </button>
                  <button 
                    onClick={() => handleDelete(id)} 
                    className='bg-blue-400 hover:bg-blue-600 p-2 py-1 text-sm font-bold text-white rounded-md mx-1'
                  >
                    <AiFillDelete />
                  </button>
                </div> 
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default App;
