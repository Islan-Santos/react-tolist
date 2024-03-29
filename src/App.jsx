import './App.css';
import { useState } from 'react';

function App() {

  const [todos, setTodos] = useState([
    {
      id: 1,
      text: 'Criar funcionalidade X no Sistema',
      category: 'Trabalho',
      isCompleted: false,
    },
    {
      id: 1,
      text: 'Criar funcionalidade X no Sistema',
      category: 'Trabalho',
      isCompleted: false,
    },
    {
      id: 2,
      text: 'Ir para a academia',
      category: 'Pessoal',
      isCompleted: false,
    },
    {
      id: 3,
      text: 'Estudar React',
      category: 'Estudos',
      isCompleted: false,
    },
  ])

  return <div className="app">
    <h1>Lista de Tarefas</h1>
    <div className="todo-list">
      {todos.map((todo) => (
        <div className="todo">
          <div className="content">
            <p>{todo.text}<div className="category">({todo.category}) </div></p>
          </div>
          <div>
            <button>Complementar</button>
            <button>X</button>
          </div>
        </div>
      ))}
    </div>
  </div>;
}

export default App;