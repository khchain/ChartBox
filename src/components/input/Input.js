import React from 'react';
import {Controller, useFormContext} from 'react-hook-form';

function Input({name, label, placeholder, required = false}) {
  const {control, formState: {errors}} = useFormContext()
  const validationRules = {...(required && {required: 'This field is required'})};

  return (
    <div className="flex flex-col mb-4">
      {label && (
        <label htmlFor={name} className="text-gray-700 mb-3 text-sm">
          {label}
        </label>
      )}
      <Controller
        name={name}
        control={control}
        rules={validationRules}
        render={({field}) => (
          <input
            {...field}
            id={name}
            type="text"
            placeholder={placeholder}
            className="border border-gray-300 p-2 rounded text-sm"/>
        )}/>
      {errors[name] && (
        <span className="text-red-500 text-xs mt-1">
          {errors[name].message}
        </span>
      )}
    </div>
  );
}

export default Input;