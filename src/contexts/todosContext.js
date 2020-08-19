import React, { createContext } from 'react';
import reducer from '../reducers/todoReducer';
import { useLocalStorageReducer } from '../hooks/useLocalStorageReducer';

const defaultTodos = [
    { id: 1, task: 'Pet the cat', completed: false },
    { id: 2, task: 'Pet the dog', completed: false }
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
    const [todos, dispatch] = useLocalStorageReducer('todos', defaultTodos, reducer);

    return (
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    );
}