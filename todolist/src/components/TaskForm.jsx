import { useState } from "react";

export function TaskForm(props) {

    const {setInput, input, addTask, selectValue, selectTab} = props

    return (
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
            }}>добавить</button>
            <select value={selectValue} className="select" onChange={selectTab}>
                <option value="false">Активные</option>
                <option value="true">Завершенные</option>
            </select>    
        </div>
    );
  }