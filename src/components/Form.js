import React, { useState } from 'react';
import FormField from './FormField';

const Form = () => {
  const [formFields, setFormFields] = useState([]);
  const [errors, setErrors] = useState([]);


  const addFormField = (type) => {
    setFormFields([...formFields, { type, label: '', options: [] }]);
  };

  const removeFormField = (index) => {
    const updatedFields = [...formFields];
    updatedFields.splice(index, 1);
    setFormFields(updatedFields);
  };

  const updateFormField = (index, field) => {
    const updatedFields = [...formFields];
    updatedFields[index] = field;
    setFormFields(updatedFields);
  };

  const handleAddField = (type) => {
    const newField = { type, label: '', options: [] };
    setFormFields([...formFields, newField]);
  };
//   
const validateForm = () => {
    const newErrors = formFields.map((field) => {
      if (field.label === '') {
        return 'Label cannot be empty';
      }
      
      return '';
    });
    setErrors(newErrors);
    return newErrors.every((error) => error === '');
  };

  const handleSubmit = () => {
    if (validateForm()) {
      console.log('Form data:', formFields);
      alert('Form submitted successfully!');
    } else {
      alert('There are errors in the form. Please fix them before submitting.');
    }
  };
  

  return (
    <div>
      <button onClick={() => handleAddField('text')}>Add Text Input</button>
        <button onClick={() => handleAddField('textarea')}>Add Text Area</button>
        <button onClick={() => handleAddField('dropdown')}>Add Dropdown</button>
        <button onClick={() => handleAddField('checkbox')}>Add Checkbox</button>
        <button onClick={() => handleAddField('radio')}>Add Radio Button</button>
      
      {formFields.map((field, index) => (
        <FormField
          key={index}
          index={index}
          field={field}
          updateFormField={updateFormField}
          removeFormField={removeFormField}
          error={errors[index]}
        />
      ))}
      <button onClick={handleSubmit}>Submit Form</button>
    </div>
  );
};

export default Form;
