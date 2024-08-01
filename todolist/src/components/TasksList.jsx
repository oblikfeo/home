import { TaskItem } from "./TaskItem"

export function TasksList(props) {

    const {tasks, selectValue, doneTask, delTask, editBut} = props

    return (
        <div className="tasksList">
            {tasks.filter((item) => item.done === selectValue).map((each) => (
                <TaskItem 
                each={each}
                doneTask={doneTask}
                delTask={delTask}
                editBut={editBut}
                key={each.id}
                />
            ))}
        </div>     
    )
}
