import React from "react";
import { useState } from "react";
import "./App.css";
import CompletedTask from "./CompletedTask";
import Home from "./Home";


function App() {
  const [todos, setTodos] = useState([]);
  const [count,setCount] = useState(0)
  const [completeCount, setCompleteCount] =useState(0)
  const[page,setpage] = useState('Home')
  const getPage = () => {
    switch (page) {
      case "Home":
        
        return <Home todos={todos} setTodos={setTodos} count={count} setCount={setCount}  completeCount ={completeCount} setCompleteCount={setCompleteCount} />;
      case "Task":
        return <CompletedTask todos={todos} completeCount={completeCount} />;
      default:
        return<Home todos={todos} setTodos={setTodos} count={count} setCount={setCount}  completeCount ={completeCount} setCompleteCount={setCompleteCount} />;
    }
  };

 
  return (

    <div className="app">
      
      <div className="nav">
        <div className="logo">
          <h1 style={{color:'#bcbbbb'}}>My</h1><h1 style={{color:'#FF5631'}}>Todo</h1>
        </div>
        <div className="pageBtn">
          <div className={`homebtn ${page === 'Home' ? 'active' : ''}`}  onClick={()=>{
            setpage('Home')
          }}>
            <p >Home</p>
          </div>
          <div className={`taskbtn ${page === 'Task' ? 'active' : ''}`}  onClick={()=>{
            setpage('Task')
          }}>
            <p>Completed task</p>
          </div>
        </div>
      </div>
      
      {getPage()}
      
    </div>
  );
}

export default App;
