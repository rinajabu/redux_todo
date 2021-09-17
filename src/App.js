// npx create-react-app . --template redux
import React from 'react';
import './App.css';
import Input from './components/Input';
import TodoItem from './components/TodoItem';

const todoList = [
{
  item: 'todo',
  done: false,
  id: 45345221312
},
{
  item: 'todo done',
  done: true,
  id: 12312425244
}
]

function App() {
  return (
    <div className="App">
      <div className="app_container">
        <div className="app_todoContainer">
          {
            todoList.map(item => (
              <TodoItem 
                name={item.item}
                done={item.done}
                id={item.id}
              />
            ))
          }
        </div>

        <Input />
      </div>
    </div>
  );
}

export default App;
