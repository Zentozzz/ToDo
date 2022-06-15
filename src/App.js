import React from "react";

import Form from "./form";
import ToDo from "./ToDo";

function App() {
  const [inputPush, setInputPush] = React.useState([]);

  const addTask = (textInputPush) => {
    if (textInputPush) {
      const element = {
        id: Math.random().toString(3),
        tittle: textInputPush,
        complete: false,
      };
      setInputPush([...inputPush, element]);
    }
  };

  const removeTask = (id) => {
    setInputPush([...inputPush.filter((todo) => todo.id !== id)]);
  };

  const activeTask = (id) => {
    setInputPush([
      ...inputPush.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : { ...todo }
      ),
    ]);
  };

  return (
    <div className="window">
      <Form addTask={addTask} />
      <div className="tasks">
        {inputPush.map((todo) => {
          return (
            <ToDo
              key={todo.id}
              todo={todo}
              activeTask={activeTask}
              removeTask={removeTask}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
