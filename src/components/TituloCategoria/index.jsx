/* eslint-disable react/prop-types */
import styled from 'styled-components';

const Div = styled.div`
display: flex;
justify-content: center;
align-items: center;
font-family: "Bebas Neue", sans-serif;
font-weight: bold;
font-size: 1.5em;
text-transform: uppercase;
border-radius: 10px;
color: #fff;
background-color: ${props => props.color};
width: 230px;
height: 60px;
box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.5);

@media (max-width: 800px) {
    justify-content: center;
    align-items: center;
    margin: auto;
}
`;

const TituloCategoria = ({ children, color }) => {

    return (
        <Div color={color}> 
            {children}
        </Div>
    );
};

export default TituloCategoria;
