import { useReducer, useEffect } from 'react';

function useLocalStorageReducer(key, defaultval, reducer) {
    const [state, dispatch] = useReducer(reducer, defaultval, () => {
        let value;
        try {
            value = JSON.parse(
                window.localStorage.getItem(key) || String(defaultval)
            );
        } catch (e) {
            value = defaultval;
        }
        return value;
    })

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);
    
    return [state, dispatch];
}

export { useLocalStorageReducer };