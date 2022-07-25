export default function Task({task, setTasks, taskIndex, tasks}){

    const deleteTask = (e) => {
        e.preventDefault();

        const tasksFilter = tasks.filter(t => t !== tasks[taskIndex])

        setTasks(tasksFilter)
    }

    return(
        <div className={`task ${task.prioridad}`}>
            <div className="task-head">
                <span>{task.prioridad}</span>
                <button onClick={deleteTask}>Eliminar</button>
            </div>
            <h4>{task.titulo}</h4>
            <p>{task.descripcion}</p>
        </div>
    );
}