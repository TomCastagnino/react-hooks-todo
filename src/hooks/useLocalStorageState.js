import { useState, useEffect } from 'react';

function useLocalStorageState(key, defaultval) {
    const [state, setState] = useState( () => {
        let value;
        try {
            value = JSON.parse(
                window.localStorage.getItem(key) || String(defaultval)
            );
        } catch (e) {
            value = defaultval;
        }
        return value;
    } );

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(state));
    }, [state, key]);
    
    return [state, setState];
}

export { useLocalStorageState };