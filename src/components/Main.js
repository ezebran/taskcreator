import Task from './tasks/Task'
import TaskForm from './tasks/TaskForm';

export default function Main({tasks, setTasks}){
    return(
        <div className="main">
            <TaskForm
                tasks={tasks}
                setTasks={setTasks}
            />
            {
                tasks.map((task, index)=>(
                    <Task 
                        setTasks={setTasks}
                        tasks={tasks}
                        task={task}
                        key={index}
                        taskIndex={index}
                    />
                ))
            }
        </div>
    );
}