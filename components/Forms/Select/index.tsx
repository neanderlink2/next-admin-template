import React, { useRef, useEffect } from 'react';
import ReactSelect, {
    OptionTypeBase,
    Props as SelectProps,
} from 'react-select';
import { useField } from '@unform/core';
import { ErrorLabel, InputGroup } from '../styles';

interface Props extends SelectProps<OptionTypeBase> {
    name: string;
    label?: string;
    required?: boolean;
}

const Select: React.FC<Props> = ({ name, label, required, ...rest }) => {
    const selectRef = useRef(null);
    const { fieldName, defaultValue, registerField, error, clearError } = useField(name);
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: selectRef.current,
            getValue: (ref: any) => {
                if (rest.isMulti) {
                    if (!ref.state.value) {
                        return [];
                    }
                    return ref.state.value.map((option: OptionTypeBase) => option.value);
                }
                if (!ref.state.value) {
                    return '';
                }
                return ref.state.value.value;
            },
        });
    }, [fieldName, registerField, rest.isMulti]);
    return (
        <InputGroup>
            {label && <label htmlFor={fieldName}>{label} {required && <span style={{ color: 'red' }}>*</span>}</label>}
            <ReactSelect
                defaultValue={defaultValue}
                ref={selectRef}
                classNamePrefix="react-select"
                onFocus={(e) => {
                    clearError();
                    if (rest.onFocus) {
                        rest.onFocus(e);
                    }
                }}
                {...rest}
            />

            {error && <ErrorLabel>{error}</ErrorLabel>}
        </InputGroup>
    );
};
export default Select;
