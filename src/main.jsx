import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { App } from './App';
import TodoState from './context/TodoState';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <TodoState>
      <App />
    </TodoState>
  </React.StrictMode>,
)





