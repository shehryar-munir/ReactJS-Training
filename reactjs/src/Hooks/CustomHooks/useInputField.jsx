import React, {useState} from 'react';

const useInputField = (initialValue) => {
    const [value, setValue] = useState(initialValue);

    const handleChange = (e) => {
        setValue(e.target.value);
        console.log(e.target.value)
    }

    return {
        value,
        onChange: handleChange
    }

}

export default useInputField