import { useState, useCallback } from "react";

function useFormValidation() {
    const [formIsValid, setFormValidity] = useState(false);
    const [errorMessages, setErrorMessages] = useState({});

    function handleValidation(evt) {
        const isValid = evt.target.closest('form').checkValidity();

        setFormValidity(isValid);
        setErrorMessages(current => ({
            ...current,
            [evt.target.name]: evt.target.validationMessage,
        }));
    }

    const resetFormValidation = useCallback(( newErrors = {}, newIsValid = false ) => {
        setErrorMessages(newErrors);
        setFormValidity(newIsValid);
    }, [setErrorMessages, setFormValidity]);

    return { formIsValid, errorMessages, handleValidation, resetFormValidation };
}

export default useFormValidation;