import React from "react";

function ToDo({ todo, activeTask, removeTask }) {
  return (
    <div key={todo.id} className="list">
      <div className={todo.complete ? "active" : "list_text"}>
        <input type="checkbox" onClick={() => activeTask(todo.id)} />
        <p>{todo.tittle}</p>
      </div>
      <div onClick={() => removeTask(todo.id)} className="delete">
        Х
      </div>
    </div>
  );
}

export default ToDo;
