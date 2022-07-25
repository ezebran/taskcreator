import { useState } from "react";

export default function TaskForm({tasks,setTasks}){

    const [titulo, setTitulo] = useState('');
    const [descripcion, setDescripcion] = useState('');
    const [prioridad, setPrioridad] = useState('baja');

    const taskSubmit = (e) => {
        e.preventDefault();

        const newTask = {
            titulo: titulo,
            descripcion: descripcion,
            prioridad: prioridad
        }

        const newTasks =[...tasks, newTask]
        
        setTasks(newTasks)
    }

    return(
        <form className="task-form" onSubmit={taskSubmit}>
            <h3>Crear tareas</h3>
            <input type="text" placeholder="Ingresar titulo.." onChange={ e => setTitulo(e.target.value)} />
            <input type="text" placeholder="Ingresar descripción.." onChange={ e => setDescripcion(e.target.value)} />
            <select onChange={ e => setPrioridad(e.target.value)}>
                <option value="baja">Baja</option>
                <option value="media">Media</option>
                <option value="alta">Alta</option>
            </select>
            <button>
                Crear tarea
            </button>
        </form>
    );
}