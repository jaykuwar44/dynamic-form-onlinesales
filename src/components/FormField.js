import React from "react";

const FormField = ({ index, field, updateFormField, removeFormField }) => {
  const handleChange = (event) => {
    const { name, value } = event.target;
    updateFormField(index, { ...field, [name]: value });
  };

  const handleOptionChange = (event, optionIndex) => {
    const updatedOptions = [...field.options];
    updatedOptions[optionIndex] = event.target.value;
    updateFormField(index, { ...field, options: updatedOptions });
  };

  const handleAddOption = () => {
    const updatedOptions = [...field.options, ""];
    updateFormField(index, { ...field, options: updatedOptions });
  };

  const handleRemoveOption = (optionIndex) => {
    const updatedOptions = [...field.options];
    updatedOptions.splice(optionIndex, 1);
    updateFormField(index, { ...field, options: updatedOptions });
  };

  return (
    <div>
      <label>
        Label:
        <input
          type="text"
          name="label"
          value={field.label}
          onChange={handleChange}
        />
      </label>

      {field.type === "text" && <input type="text" placeholder="Text Input" />}

      {field.type === "textarea" && (
        <textarea placeholder="Text Area"></textarea>
      )}

      {field.type === "dropdown" && (
        <div>
          <select>
            {field.options.map((option, optionIndex) => (
              <option
                key={optionIndex}
                value={option}
                onChange={(e) => handleOptionChange(e, optionIndex)}
              >
                {option}
              </option>
            ))}
          </select>
          <button onClick={handleAddOption}>Add Option</button>
          {field.options.map((option, optionIndex) => (
            <div key={optionIndex}>
              <input
                type="text"
                value={option}
                onChange={(e) => handleOptionChange(e, optionIndex)}
              />
              <button onClick={() => handleRemoveOption(optionIndex)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}

      {field.type === "checkbox" && (
        <label>
          <input type="checkbox" />
          {field.label}
        </label>
      )}

      {field.type === "radio" && (
        <label>
          <input type="radio" name={`radio_${index}`} />
          {field.label}
        </label>
      )}

      <button onClick={() => removeFormField(index)}>Remove</button>
    </div>
  );
};

export default FormField;