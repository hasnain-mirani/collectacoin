import React, { createContext, useState } from 'react';

interface FormData {
  name: string;
  details: string;
}

interface FormContextProps {
  formData: FormData[];
  addFormData: (data: FormData) => void;
}
interface FormProviderProps {
  children: React.ReactNode;
}

export const FormContext = createContext<FormContextProps>({
  formData: [],
  addFormData: () => {},
});

export const FormProvider: React.FC<FormProviderProps>  = ({ children }) => {
  const [formData, setFormData] = useState<FormData[]>([]);

  const addFormData = (data: FormData) => {
    setFormData([...formData, data]);
  };

  return (
    <FormContext.Provider value={{ formData, addFormData }}>
      {children}
    </FormContext.Provider>
  );
};
