import { useCallback, useState } from "react";

function useFormStateAndValidation(initialValue = {}) {
    const [inputsValues, setInputsValues] = useState(initialValue);
    const [errorMessages, setErrorMessages] = useState({});
    const [formIsValid, setFormValidity] = useState(false);

    function setErrorMessage(message) {
        setErrorMessages(current => ({
            ...current,
            ...message,
        }))
    }

    function handleValidityCheck(evt) {
        const isValid = evt.target.closest('form').checkValidity();
        const { name, validationMessage } = evt.target;

        setErrorMessage({ [name]: validationMessage })
        setFormValidity(isValid);
    }

    function handleInputChange(evt) {
        const { name, value } = evt.target;

        setInputsValues(current => ({
            ...current,
            [name]: value,
        }))

        handleValidityCheck(evt);
    }

    function handleToggleChange(evt) {
        const { name, checked } = evt.target;

        setInputsValues(current => ({
            ...current,
            [name]: checked,
        }));

        handleValidityCheck(evt);
    }

    const resetFormValues = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
        setInputsValues(newValues);
        setErrorMessages(newErrors);
        setFormValidity(newIsValid);
    }, [setInputsValues, setErrorMessages, setFormValidity]);

    return { inputsValues, errorMessages, formIsValid, handleInputChange, handleToggleChange, setErrorMessage, resetFormValues }
}

export default useFormStateAndValidation;