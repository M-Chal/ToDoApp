import React, { useState } from "react";
import './App.css';

//Importing Components

import Form from "./components/form";
import Todolist from  "./components/todolist"

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setToDo] = useState([]);
  return (
    <div className="App">
      <header>
      <h1>To-Do List</h1>
      </header>
      <Form 
      inputText={inputText} 
      todos={todos} 
      setToDo={setToDo} 
      setInputText = {setInputText} />
      <Todolist setToDo={setToDo} todos={todos}/>
    </div>
  );
}

export default App;
