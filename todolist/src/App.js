import Header from "./components/Header";
import { TaskForm } from "./components/TaskForm";
import { TasksList } from "./components/TasksList";
import { useState } from "react";

function App() {

    const [tasks, setTasks] = useState([])
    const [input, setInput] =  useState('')
    const [selectValue, setSelectValue] = useState("false")

    const addTask = () => {
        let objTask = {
            id: Date.now(),
            text: input,
            done: "false",
        }
        if (input.length > 0) {
            setTasks([...tasks, objTask])
        }

    }

    const delTask = (taskid) => {
        setTasks(tasks.filter((item) => item.id !== taskid))
    }

    const doneTask = (taskid) => {
        setTasks(tasks.map((item) => {
            if (item.id == taskid) {
                return {...item, done: "true"}
            }
            return item;
        }))
    }

    const editBut = () => {
      let edit = prompt("Введите на что будем изменять:")
      if (edit !== null) {
        setTasks(tasks.map((item) => {
          return {...item, text: edit}
        }))
      }
    }

    const selectTab = (e) => {
        setSelectValue(e.target.value)
    }

  return (
    <div>
      <Header />
      <TaskForm 
      setInput={setInput}
      input={input}
      addTask={addTask}
      selectValue={selectValue}
      selectTab={selectTab}
      />
      <TasksList
      tasks={tasks}
      selectValue={selectValue}
      doneTask={doneTask}
      delTask={delTask}
      editBut={editBut}
      />
    </div>
  );
}

export default App;
