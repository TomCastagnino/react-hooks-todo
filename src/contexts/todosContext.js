import React, { createContext, useReducer } from 'react';
import reducer from '../reducers/todoReducer';

const defaultTodos = [
    { id: 1, task: 'Pet the cat', completed: false },
    { id: 2, task: 'Pet the dog', completed: false }
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
    const [todos, dispatch] = useReducer(reducer, defaultTodos);

    return (
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    );
}