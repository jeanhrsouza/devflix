import React from 'react';
import PropTypes from 'prop-types';
import { FormFieldWrapper, Label, Input } from './styles';

function FormField({
  label, type, name, value, onChange,
}) {
  const fieldId = `id_${name}`;
  const isTextArea = type === 'textarea';
  const tag = isTextArea ? 'textarea' : 'input';

  return (
    <FormFieldWrapper>
      <Label
        htmlFor={fieldId}
      >
        <Input
          as={tag}
          id={fieldId}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
        />

        <Label.Text>
          {label}
          :
        </Label.Text>
      </Label>
    </FormFieldWrapper>
  );
}

FormField.defaultProps = {
  // as: 'input',
  type: 'text',
  value: '',
  label: '',
  onChange: () => {},
};

FormField.propTypes = {
  name: PropTypes.string.isRequired,
  //
  // as: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

export default FormField;
