import React, { useRef, useEffect } from 'react';
import ReactInputMask, { Props as InputProps } from 'react-input-mask';
import { useField } from '@unform/core';
import { BasicInput, ErrorLabel, InputGroup } from '../styles';

interface Props extends InputProps {
    name: string;
    label?: string;
    required?: boolean;
}

const InputMask: React.FC<Props> = ({ name, label, required, ...rest }) => {
    const inputRef = useRef(null);
    const { fieldName, registerField, defaultValue, error } = useField(name);
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRef.current,
            path: 'value',
            setValue(ref: any, value: string) {
                ref.setInputValue(value);
            },
            clearValue(ref: any) {
                ref.setInputValue('');
            },
        });
    }, [fieldName, registerField]);
    return (
        <InputGroup>
            {label && <label htmlFor={fieldName}>{label} {required && <span style={{ color: 'red' }}>*</span>}</label>}
            <ReactInputMask ref={inputRef} defaultValue={defaultValue} {...rest}>
                {(inputProps: any) => <BasicInput {...inputProps} />}
            </ReactInputMask>
            {error && <ErrorLabel>{error}</ErrorLabel>}
        </InputGroup>
    );
};
export default InputMask;
