import { useState, useEffect, useCallback } from "react";
import FormStateAndValidationContext from "../context/FormStateAndValidationContext";

export function FormStateAndValidationProvider({ children }) {
    const [inputsValues, setInputsValues] = useState();
    const [errorMessages, setErrorMessages] = useState({});
    const [formIsValid, setFormValidity] = useState(false);



    // function handleInputChange(evt) {
    //     const { name, value } = evt.target;

    //     setInputsValues(current => ({
    //         ...current,
    //         [name]: value,
    //     }))

    //     handleValidityCheck(evt);
    // }



    // const resetFormValues = useCallback((newValues = {}, newErrors = {}, newIsValid = false) => {
    //     setInputsValues(newValues);
    //     setErrorMessages(newErrors);
    //     setFormValidity(newIsValid);
    // }, [setInputsValues, setErrorMessages, setFormValidity]);


    // useEffect(() => {
    //     resetFormValues();
    // }, [resetFormValues]);

    return (
        <FormStateAndValidationContext.Provider
            value={{
                inputsValues,
                errorMessages,
                formIsValid,
                // handleInputChange,
                // handleToggleChange,
                // resetFormValues
            }}
        >
            {children}
        </FormStateAndValidationContext.Provider>
    );
}