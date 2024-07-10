/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { useState } from 'react';

const Select = styled.select`
padding: 10px;
border: 2px solid ${props => props.$error ? 'red' : '#5e5e5e'};
background: #1f1f1f;
color: #fff;
border-radius: 4px;
font-size: 16px;
width: 100%;
box-sizing: border-box;
font-family: 'Roboto', sans-serif;

& option:checked {
  background: #333 !important;
  appearance: none !important;
}

&:focus {
  outline: none;
  border-color: #E18433;
}
`;

const Etiqueta = styled.label`
  font-size: 14px;
  margin-bottom: 5px;
  display: block;
  color: #fff;
  font-weight: bold;
  font-family: 'Roboto', sans-serif;
`;

const ErrorMensaje = styled.p`
  color: red;
  font-size: 12px;
  margin-top: 5px;
  font-family: 'Roboto', sans-serif;
`;

const Contenedor = styled.div`
  margin-bottom: 15px;
  width: 100%;
`;

const Option = styled.option`
  color: #fff;
  background: #333;

`;

const CampoSelect = ({ mensajeError = 'Este campo es obligatorio', label = '', options = [], required = false, value = '', onChange, ...rest }) => {
  const [error, setError] = useState('');

  const handleSelectChange = (event) => {
    const selectedValue = event.target.value;
    onChange(selectedValue);

    if (required && selectedValue === '') {
      setError(mensajeError);
    } else {
      setError('');
    }
  };

  return (
    <Contenedor>
      <Etiqueta htmlFor={label}>{label}{required && '*'}</Etiqueta>
      <Select $error={error} value={value} onChange={handleSelectChange} {...rest}>
        <option value="">Selecciona una opción</option> {/* Opción por defecto */}
        {
        options.map((option) => (
          <Option key={option.value} value={option.value}>
            {option.label}
          </Option>
        ))}
      </Select>
      {error && <ErrorMensaje>{error}</ErrorMensaje>}
    </Contenedor>
  );
};

export default CampoSelect;
