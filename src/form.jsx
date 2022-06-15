import React from "react";

function Form({ addTask }) {
  const [textInputPush, setTextInputPush] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(textInputPush);
    setTextInputPush("");
  };

  const handleChange = (e) => {
    setTextInputPush(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Введите задачу"
        value={textInputPush}
        onChange={handleChange}
      />
      <button>Добавить</button>
    </form>
  );
}

export default Form;
