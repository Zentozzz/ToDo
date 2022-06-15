import React from 'react';

function App() {
  const [textInputPush, setTextInputPush] = React.useState('');
  const [inputPush, setInputPush] = React.useState();

  return (
    <div className="window">
      <input
        type="text"
        placeholder="Введите задачу"
        value={textInputPush}
        onChange={(e) => setTextInputPush(e.target.value)}
      />
      <div className="tasks">{inputPush}</div>
    </div>
  );
}

export default App;
