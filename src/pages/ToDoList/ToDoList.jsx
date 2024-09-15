import React, { useState } from 'react';
import 'react-notifications/lib/notifications.css';
import { NotificationManager, NotificationContainer} from 'react-notifications';
// Toastify imports
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ToDoList() {
  const [todos, setTodos] = useState([]);
  const [showLi, setShowLi] = useState(false);


  const handleData = (e) => {
    e.preventDefault();
    let todoData = e.target.toname.value.trim();

    if (todoData === "") {
      toast.error("Empty note can't be added");
      return;
    }

    if (todos.includes(todoData)) {
      toast.error("Duplicate note can't be added");
      return;
    }

    setTodos([...todos, todoData]);
    setShowLi(true);
    NotificationManager.success("you add Note Successfully", `${getCurrentTime()}`)
    e.target.reset();
  };

  // Function to handle removal of todos
  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, todoIndex) => todoIndex !== index);
    setTodos(updatedTodos);
    if (updatedTodos.length === 0) {
      setShowLi(false);
    }
  };

  const getCurrentTime = () => {
    const currentTime = new Date().toLocaleTimeString(); // Get current time in a readable format
    return currentTime;
  };
   

  return (
    <div>
      <ToastContainer />

    {/*  todo list  */}
      <div className='main mt-5 mb-5'>
        <h4 className='center'>ToDo List</h4>
        <NotificationContainer />
        <form id='form' onSubmit={handleData} >
          <input type='text' name='toname' placeholder='Note' />
          
          <button type='submit'  className='btn btn-primary fw-bold' 
        >
        Add
            </button>

        </form>
      </div>

      <div className={`main mt-4 mb-5 DisplayUl${showLi ? "DisplayUl" : ""}`}>
        <ul>
          {todos.map((todo, index) => (
            <div className='liDiv' key={index}>
              <li>{index + 1} {"  "} {todo}</li>
              
              <i class="bi bi-trash3-fill span text-danger" onClick={() => {
       removeTodo(index); 
       NotificationManager.error("You removed Note successfully", getCurrentTime());
   }}></i>

              <hr />
            </div>
          ))}
        </ul>
      </div>

      <p className='ptag'>Design By: Engr Naveed</p>
    </div>
  );
}

export default ToDoList;
