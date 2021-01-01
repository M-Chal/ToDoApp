import React from  "react";
import Todo from "./Todo";
const Todolist = ({todos,setToDo}) => {
    return(
        <div className="todo-container">
            <ul className="todo-list">
                {todos.map(todo => (
                    <Todo setToDo={setToDo} todo={todo} todos={todos} key={todo.id} text={todo.text}/>
                ))}
            </ul>
        </div>
    );
}

export default Todolist;