import React, { useState, useCallback } from "react";

export default function AddTodoInput() {
    const [value, setValue] = useState('');
    const handleKeyUpEvent = useCallback(e => {
        if (e.key === 'Enter') {
            console.log(e.key + ' pressed');
        };
    }, []);
    const handleChangeEvent = useCallback(e => {
        setValue(e.target.value);
    }, [setValue]);
    return (
        <input 
            type="text"
            className="form-control add-todo"
            placeholder="Add New" 
            onChange={handleChangeEvent} 
            onKeyUp={handleKeyUpEvent}
            value={value}
        />
    );
}