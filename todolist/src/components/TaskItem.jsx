export function TaskItem(props) {

    const {each, doneTask, delTask, editBut} = props


    return (
            <div className="task">
            {each.text}
            <button className="doneBut" onClick={() => doneTask(each.id)}>✔</button>
            <button className="delBut"  onClick={() => delTask(each.id)}>Х</button>
            <button className="editBut" onClick={() => editBut()}>Изменить</button>
        </div>
    )
}