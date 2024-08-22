import React, { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
    const [formData, setFormData] = useState({
        name: '', 
        surname: '', 
        email: '', 
        phone: '', 
        address: '', 
        cardNumber: '',
        expiryDate: '', 
        cvv: '', 
        city:'', 
        state: '', 
        zipcode : '',
    });

    const updateFormData = (key, value) => {
        setFormData({ ...formData, [key]: value });
    };

    return (
        <FormContext.Provider value={{ formData, updateFormData }}>
            {children}
        </FormContext.Provider>
    );
};
