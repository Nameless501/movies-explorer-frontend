import { useState, useCallback } from "react";

function useFormDataCollect(initialValue = {}) {
    const [inputsValues, setInputsValues] = useState(initialValue);

    function handleInputChange(evt) {
        const { name, value } = evt.target;

        setInputsValues(current => ({
            ...current,
            [name]: value,
        }));
    }

    function handleToggleChange(evt) {
        const { name, checked } = evt.target;

        setInputsValues(current => ({
            ...current,
            [name]: checked,
        }));
    }

    const resetInputsValues = useCallback(( newValues = {} ) => {
        setInputsValues(newValues);
    }, [setInputsValues]);

    return { inputsValues, handleInputChange, handleToggleChange, resetInputsValues };
}

export default useFormDataCollect;