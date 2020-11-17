import React, { useRef, useEffect } from 'react';
import { OptionTypeBase } from 'react-select';
import Select, { Props as AsyncProps } from 'react-select/async';
import { useField } from '@unform/core';
import { ErrorLabel } from '../../styles';
interface Props extends AsyncProps<OptionTypeBase> {
    name: string;
    label?: string;
    required?: string;
}
const AsyncSelect: React.FC<Props> = ({ name, label, required, ...rest }) => {
    const selectRef = useRef(null);
    const { fieldName, defaultValue, registerField, error, clearError } = useField(name);
    useEffect(() => {
        registerField({
            name: fieldName,
            ref: selectRef.current,
            getValue: (ref: any) => {
                if (rest.isMulti) {
                    if (!ref.select.state.value) {
                        return [];
                    }
                    return ref.select.state.value.map(
                        (option: OptionTypeBase) => option.value,
                    );
                }
                if (!ref.select.state.value) {
                    return '';
                }
                return ref.select.state.value.value;
            },
        });
    }, [fieldName, registerField, rest.isMulti]);
    return (
        <>
            {label && <label htmlFor={fieldName}>{label} {required && <span style={{ color: 'red' }}>*</span>}</label>}
            <Select
                cacheOptions
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
        </>
    );
};
export default AsyncSelect;