


function TodoCounter ({total,completed}){
    return (
        <h1> 
            {completed == total ? 'Congrats! you finished all your todos' : `You completed ${completed} of ${total} ToDo's`} 
        </h1>
    )
}

export { TodoCounter }