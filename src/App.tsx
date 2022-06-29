import { type } from "os";
import React, { useState } from "react";
import "./App.css";
import { Toodolist } from "./Toodolist";
export type FilterValuestype = "all" |"active" |"completed";
function App() {
  let initTasks = [
    { id: 1, title: "CSS", isDone: true },
    { id: 2, title: "JS", isDone: true },
    { id: 3, title: "React", isDone: false },
  ];
  let [tasks,setTasks] = useState(initTasks);
  let [filter,setFilter] = useState<FilterValuestype>("all");
  function removeTask(id:number){
    let filtredTasks = tasks.filter(t => t.id !== id)
    setTasks(filtredTasks);
  }
  function changeFilter(value:FilterValuestype){
    setFilter(value);
  }

 
  let tasksForTodolist = initTasks;
  if(filter === "completed"){
    tasksForTodolist = initTasks.filter(t => t.isDone === true);
  }
  if(filter === "active"){
    tasksForTodolist = initTasks.filter(t => t.isDone === false);
  }
  return (
    <div className="App">
      <Toodolist title="What to lern" tasks={tasks}
       removeTask={removeTask}  changeFilter ={changeFilter} />
     
    </div>
  );
}

export default App;
