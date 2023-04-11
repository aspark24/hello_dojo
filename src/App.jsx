import React from 'react';

function App() {
  const todos = ['Learn React', 'Climb Mt. Everest', 'Run a marathon', 'Feed the dogs'];
  return (
    <div>
      <h1>Hello Dojo!</h1>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
