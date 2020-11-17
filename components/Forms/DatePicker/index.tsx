import React, { useRef, useState, useEffect } from 'react';
import ReactDatePicker, { ReactDatePickerProps } from 'react-datepicker';
import { useField } from '@unform/core';
import 'react-datepicker/dist/react-datepicker.css';
import { BasicInput, InputGroup } from '../styles';

interface Props extends Omit<ReactDatePickerProps, 'onChange'> {
    name: string;
    label?: string;
    required?: boolean;
}

const DatePicker: React.FC<Props> = ({ name, required, label, ...rest }) => {
    const datepickerRef = useRef(null);
    const { fieldName, registerField, defaultValue, error, clearError } = useField(name);
    const [date, setDate] = useState(defaultValue || null);
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: datepickerRef.current,
            path: 'props.selected',
            clearValue: (ref: any) => {
                ref.clear();
            },
        });
    }, [fieldName, registerField]);
    return (
        <InputGroup>
            {label && <label htmlFor={fieldName}>{label} {required && <span style={{ color: 'red' }}>*</span>}</label>}
            <ReactDatePicker
                ref={datepickerRef}
                selected={date}
                onChange={setDate}
                {...rest}
                onFocus={(e) => {
                    clearError();
                    if (rest.onFocus) {
                        rest.onFocus(e);
                    }
                }}
                customInput={<BasicInput />}
            />
            {error && <span className="error">{error}</span>}
        </InputGroup>
    );
};
export default DatePicker;
