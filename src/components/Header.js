export default function Headers({tasks}){
    return(
        <div className="header">
            {
                tasks.length > 0 ?
                    <p>{tasks.length} tareas creadas</p>
                :
                    <p>No hay tareas</p>
            }
        </div>
    );
}