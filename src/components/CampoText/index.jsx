/* eslint-disable react/prop-types */
import styled from 'styled-components';
import { useState } from 'react';

const CampoDeTexto = styled.input`
padding: 10px;
border: 2px solid ${props => props.$error ? 'red' : '#5e5e5e'};
background-color: transparent;
color: #fff;
border-radius: 4px;
font-size: 16px;
width: 100%;
box-sizing: border-box;
font-family: 'Roboto', sans-serif;

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

const CampoText = ({ mensajeFormato = 'El formato no es válido', mensajeError = 'Este campo es obligatorio', label = '', type = 'text', placeholder = '', required = false, pattern = '', value = '', onChange, ...rest }) => {
  const [error, setError] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    onChange(inputValue);

    if (required && inputValue.trim() === '') {
      setError(mensajeError);
    } else if (pattern && !new RegExp(pattern).test(inputValue)) {
      setError(mensajeFormato);
    } else {
      setError('');
    }
  };

  return (
    <Contenedor>
      <Etiqueta htmlFor={label}>{label}{required && '*'}</Etiqueta>
      <CampoDeTexto
        $error={error}
        type={type}
        placeholder={placeholder}
        required={required}
        pattern={pattern}
        value={value}
        onChange={handleInputChange}
        {...rest}
      />
      {error && <ErrorMensaje>{error}</ErrorMensaje>}
    </Contenedor>
  );
};

export default CampoText;
