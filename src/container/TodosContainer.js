import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Todos from "../components/Todos";
import { change, delete_, post } from "../modules/todos";


function TodosContainer() {
    const { todos, value } = useSelector(state => state.todos);
    const dispatch = useDispatch();
    const onChange = useCallback( event => dispatch( change(event.target.value) ), [dispatch]);
    const onDelete = useCallback( id => dispatch( delete_(id) ), [dispatch]);
    const onPost = useCallback(title => dispatch( post(title) ), [dispatch])
    return (
        <Todos value={ value } todos={ todos } onChange={ onChange } onPost={ onPost } onDelete={ onDelete }></Todos>
    )
}

export default TodosContainer;