import './App.css';
import Header from './components/Header'
import Main from './components/Main'
import { useState } from 'react';

export default function App(){

  const [tasks, setTasks] = useState([]);

  return(
    <>
      <Header 
        tasks={tasks}
      />
      <Main
        tasks={tasks}
        setTasks={setTasks}
      />
    </>
  );
}