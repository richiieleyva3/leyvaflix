import styled from 'styled-components';
import logo from '../../assets/svg/logo-texto.svg';
import { Link } from "react-router-dom";

const Pie = styled.header`
    position: relative;
    bottom: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 20px;
    height: 60px;
    width: 100%;
    background: #000000;
    border-top: 3px solid #E18433;
    box-shadow: 0 -5px 5px rgba(225, 132, 51, 0.47);

    img {
        cursor: pointer;
        width: 106px;
    }

    @media (max-width: 768px) {
      position: absolute;
      top: 0;
      bottom: auto; 
      border-top: none;
      flex-wrap: wrap;
      background: linear-gradient(0deg, transparent 0%, rgba(0,0,0,1) 60%);
    }
   `;

const Linea = styled.div`
  display: none;
  position: absolute;
  width: 100vw;
  height: 3px;
  background-color: #E18433;
  top: 0;
  left: 0;
  padding: 0;
  margin: 0;
  box-shadow: 0 1px 5px 5px rgba(225, 132, 51, 0.5);

  @media (max-width: 768px) { 
    display: flex; 
  }
`;  

const Div = styled.div`
    color: #fff;
    font-family: "Bebas Neue", sans-serif;
    font-weight: bold;
    font-size: .8em;
    `;

const Footer = () => {

  return (
    <Pie>
      <Linea/>
      <Link to="/">
        <img src={logo} alt="LeyvaFlix" />
      </Link>
        <Div>Desarrollado por: Ricardo Leyva Bueno</Div> 
    </Pie>
  );
}

export default Footer;