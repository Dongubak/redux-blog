import {createAction, handleActions} from 'redux-actions';

let id = 2;

const POST = 'todos/POST';
const DELETE = 'todos/DELETE';
const CHANGE = 'todos/CHANGE';

const initialState = {
    value: '',
    todos: [
        {
            id: 1,
            title: '이거이거하기'
        },
        {
            id: 2,
            title: '저거저거하기'
        }
    ]
};

export const post = createAction(POST, title => (
    {
        id: ++id,
        title: title,
    }
));
export const delete_ = createAction(DELETE, id => id);
export const change = createAction(CHANGE, value => value);

const todos = handleActions(
    {
        [POST]: (state, action) => ({
            value: '',
            todos: [...state.todos, action.payload]
        }),

        [CHANGE]: (state, action) => (
            {
                ...state,
                value: action.payload
            }
        ),

        [DELETE]: (state, action) => {
            const index = state.todos.findIndex( e => e.id === action.payload);
            return {
                ...state,
                todos: [...state.todos.slice(0, index), ...state.todos.slice(index + 1)]
            }
        },
    },
    initialState
);

export default todos;