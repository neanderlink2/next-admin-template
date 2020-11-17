import React, { useRef, useEffect, InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';
import { BasicInput, ErrorLabel, InputGroup } from '../styles';

type Props = InputHTMLAttributes<HTMLInputElement> & {
    name: string;
    label?: string;
    required?: boolean;
}

const InputField: React.FC<Props> = ({ name, label, required, ...rest }) => {
    const inputRef = useRef(null);
    const { fieldName, defaultValue, registerField, error, clearError } = useField(name);

    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
        });
    }, [fieldName, registerField]);
    return (
        <InputGroup>
            {label && <label htmlFor={fieldName}>{label} {required && <span style={{ color: 'red' }}>*</span>}</label>}
            <BasicInput
                {...rest}
                id={fieldName}
                ref={inputRef}
                defaultValue={defaultValue}
                onFocus={(e) => {
                    clearError();
                    if (rest.onFocus) {
                        rest.onFocus(e);
                    }
                }}
            />
            {error && <ErrorLabel>{error}</ErrorLabel>}
        </InputGroup>
    );
}

export default InputField;