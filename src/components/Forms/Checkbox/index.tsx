import React, { useEffect, useRef, InputHTMLAttributes } from 'react';
import { useField } from '@unform/core';
import { ErrorLabel, InputGroup } from '../styles';

interface Props extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    label?: string;
    required?: boolean;
    options: {
        id: string;
        value: string;
        label: string;
    }[];
}

const CheckboxInput: React.FC<Props> = ({ name, options, label, required, ...rest }) => {
    const inputRefs = useRef<HTMLInputElement[]>([]);
    const { fieldName, registerField, defaultValue = [], error } = useField(name);
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: inputRefs.current,
            getValue: (refs: HTMLInputElement[]) => {
                return refs.filter(ref => ref.checked).map(ref => ref.value);
            },
            clearValue: (refs: HTMLInputElement[]) => {
                refs.forEach(ref => {
                    ref.checked = false;
                });
            },
            setValue: (refs: HTMLInputElement[], values: string[]) => {
                refs.forEach(ref => {
                    if (values.includes(ref.id)) {
                        ref.checked = true;
                    }
                });
            },
        });
    }, [defaultValue, fieldName, registerField]);
    return (
        <InputGroup>
            {label && <label htmlFor={fieldName}>{label} {required && <span style={{ color: 'red' }}>*</span>}</label>}
            {options.map((option, index) => (
                <label htmlFor={option.id} key={option.id}>
                    <input
                        defaultChecked={defaultValue.find((dv: string) => dv === option.id)}
                        ref={ref => {
                            inputRefs.current[index] = ref as HTMLInputElement;
                        }}
                        value={option.value}
                        type="checkbox"
                        id={option.id}
                        {...rest}
                    />
                    {option.label}
                </label>
            ))}
            {error && <ErrorLabel>{error}</ErrorLabel>}
        </InputGroup>
    );
};
export default CheckboxInput;