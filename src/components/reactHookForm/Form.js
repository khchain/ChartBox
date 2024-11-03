import React from 'react';
import {FormProvider} from "react-hook-form";

function Form({methods, onSubmit, children}) {
  const {handleSubmit} = methods;

  return (
    <FormProvider {...methods}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {children}
      </form>
    </FormProvider>
  );
}

export default Form;