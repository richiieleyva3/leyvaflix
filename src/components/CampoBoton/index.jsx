/* eslint-disable react/prop-types */
import hexToRgba from 'hex-to-rgba';
import styled from 'styled-components';

// Función auxiliar para generar el color rgba
function getHoverBackgroundColor(hexColor) {
  return hexToRgba(hexColor, 0.4); 
}

const Boton = styled.button`
background-color: transparent;
color: white;
padding: 10px 15px;
border: 2px solid ${props => props.$color || '#007bff'};
border-radius: 4px;
width: 150px;
cursor: pointer;
font-size: 16px;
transition: background-color 0.3s ease;

&:hover {
  background-color: ${props => getHoverBackgroundColor(props.$color)}; 
}

&:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
`;

const CampoBoton = ({ type = 'submit', label = '', onClick, disabled = false, color = '#E18433' }) => {

  const handleClick = () => {
    event.preventDefault();
      onClick();
  };

  return (
    <Boton type={type} $color={color} onClick={() => handleClick(event)} disabled={disabled}>
      {label}
    </Boton>
  );
};

export default CampoBoton;
