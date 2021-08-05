import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';


const DATA = [
  { id: "todo-0", name: "HTML", completed: true },
  { id: "todo-1", name: "CSS", completed: false },
  { id: "todo-2", name: "JS", completed: false },
  { id: "todo-3", name: "REACT", completed: false }
];

ReactDOM.render(
  <React.StrictMode>
    <App tasks={DATA} />
  </React.StrictMode>,
  document.getElementById('root')
);
