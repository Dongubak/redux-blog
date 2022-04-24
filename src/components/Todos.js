function Todos({ value, todos, onChange, onDelete, onPost }) {
    const onSubmit = e => {
        e.preventDefault();
        return onPost(value);
    };

    return(
        <div>
            <form onSubmit={ onSubmit }>
                <input type="text" value={value} onChange={ onChange }></input>
                <input type="submit" value="submit"></input>
                {
                    todos.map( e => (
                        <div key={ e.title }>
                            <h2>{ e.title }</h2>
                            <button onClick={ () => {
                                onDelete(e.id)
                            } }>Delete</button>
                        </div>  
                    ))
                }
            </form>
        </div>
    )
}

export default Todos;