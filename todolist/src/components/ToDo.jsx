import { useState } from "react"

export default function ToDo() {

    const [tasks, setTasks] = useState([])
    const [input, setInput] =  useState('')

    const addTask = () => {
            setTasks([...tasks, input])
        }


    return(
        <>
        <div className="AddTask">
            <input
            className="input" 
            type="text" 
            placeholder="Новая задача..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            />
            <button 
            className="addBut"
            onClick={() => {
                addTask()
                setInput('')
            }}
            />
        </div>
        <div className="tasksList">
            {tasks.map((each, index) => (
                <div key={index}>
                    {each}<button
                    onClick={() => setTasks(
                        tasks.filter((item, del) => del !== index)
                    )}
                    >delete</button>
                </div>
            ))}
        </div>
        </>
        
    )
}
