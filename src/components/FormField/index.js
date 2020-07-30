import React from "react";
import { InputText, Textarea } from './styles';



    function FormField({ label, type, name, value, onChange }) {
        return (
            <div>
                <label>
                    {label}:

        {
                        type === "textarea" ?
                            <Textarea
                                type={type}
                                value={value}
                                name={name}
                                onChange={onChange}
                            /> :
                            <InputText
                                type={type}
                                value={value}
                                name={name}
                                onChange={onChange}
                            />

                    }

                </label>
            </div>
        )
    }

export default FormField;