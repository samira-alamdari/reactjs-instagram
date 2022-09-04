import {useState} from "react";
export const useHandleChange = (initialState) => {
    const [val, setValue] = useState(initialState);

    const handleChange = e => {
        const {value} = e.target;
        setValue(value);
    }

    const reset = () => setValue('');

    return [
        val,
        handleChange,
        reset
    ]
}
