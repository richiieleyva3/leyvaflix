/* eslint-disable react/prop-types */
import styled from 'styled-components';
import logo from '../../assets/svg/logo-texto.svg';
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { MdAddCircleOutline } from "react-icons/md";
import { useState } from 'react';

const Encabezado = styled.header`
    position: fixed;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    height: ${props => props.$scrolled === 'true' ? '100px' : '100px'};
    width: 100%;
    background: rgba(0, 0, 0, 0);
    background: ${props => props.$scrolled === 'true' ? '#000' : 'linear-gradient(0deg, transparent 0%, rgba(0,0,0,1) 80%)'};
    border-bottom: ${props => props.$scrolled === 'true' ? '3px solid #E18433' : 'none'};
    box-shadow: ${props => props.$scrolled === 'true' ? '0 1px 5px 5px rgba(225, 132, 51, 0.5)' : 'none'};
    z-index: 20;
    text-decoration: none;

    img {
        cursor: pointer;
        width: 169px;
        margin: 20px 0;
    }

    @media (max-width: 768px) {
        position: fixed;
        bottom: 0;
        flex-direction: column;
        padding: 10px;
        height: fit-content;
        background: ${props => props.$scrolled === 'true' ? '#000' : 'linear-gradient(0deg, rgba(0,0,0,1) 50%, transparent 80%)'};
        gap: 0px;
        padding: 0;
        margin: 0;
        box-sizing: 0;
        border-bottom: none;
        //border-top: 3px solid #E18433;
        //box-shadow: 0 -5px 5px rgba(225, 132, 51, 0.47);

        img {
            display: none;
        }
    }
   `;

const Linea = styled.div`
  display: ${props => props.$scrolled === 'true' ? 'flex' : 'none'};
    position: absolute;
    width: 100vw;
    height: 3px;
    background-color: #E18433;
    top: 0;
    left: 0;
    padding: 0;
    margin: 0;
    box-shadow: 0 1px 5px 5px rgba(225, 132, 51, 0.5);
  `;

const Linea2 = styled.div`
    display: none;

    @media (max-width: 768px) {
      display: flex;
      position: absolute;
      width: 100vw;
      height: 4px;
      background-color: #E18433;
      bottom: 0;
      left: 0;
      padding: 0;
      margin: 0;
      z-index: 1;
      box-shadow: 0 1px 5px 5px rgba(225, 132, 51, 0.5);
    }
  `;

const Div = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: right;
    gap: 20px;
    align-items: center;
    width: 30%;
    height: 100%;
    text-decoration: none;

    @media (max-width: 768px) {
      justify-content: space-between;
      align-items: center;
      width: 100%;
      gap: 0;
    }
    `;

const BotonInicio = styled.button`
    cursor: pointer;
    width: 150px;
    height: 50px;
    text-transform: uppercase;
    border-radius: 10px;
    border: 2px solid #E18433;
    color: #E18433;
    background-color: transparent;
    text-decoration: none;
    font-weight: bold;
    box-shadow: inset 0 0 10px 2px rgba(225, 132, 51, 0.47);

    svg {
      display: none;
    }

    @media (max-width: 768px) {
      height: 50px;
      width: 50vw;
      margin: 0;
      padding: 0;
      border-radius: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.2rem;
      border: none;
      gap: 20px;
      text-decoration: none;
      border: ${props => props.$scrolled === 'true' ?  '2px solid #E18433' : 'none'};
      box-shadow: ${props => props.$scrolled === 'true' ? 'inset 0 0 10px 2px rgba(225, 132, 51, 0.47)' : 'none'};

      span {
        display: none;
      }
      
      svg{
        display: flex;
        width: 2rem;
        height: 2rem;
        justify-content: center;
        align-items: center;
      }
    }
    `;

const BotonNuevoVideo = styled.button`
    cursor: pointer;
    position: relative;
    justify-content: center;
    align-items: center;
    display: flex;
    width: 150px;
    height: 50px;
    background-color: transparent;
    text-transform: uppercase;
    border-radius: 10px;
    border: 2px solid #fff;
    color: #fff;
    background-color: transparent;
    font-weight: bold;

    svg {
      display: none;
    }

    @media (max-width: 768px) {
      height: 50px;
      width: 50vw;
      margin: 0;
      padding: 0;
      border-radius: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      border: ${props => props.$scrolled === 'true' ? '2px solid #fff' : 'none'};
      font-size: 1.2rem;
      gap: 20px;
      text-decoration: none;

      span {
        display: none;
      }
      
      svg{
        display: flex;
        width: 2rem;
        height: 2rem;
        justify-content: center;
        align-items: center;
      }
    }
    `;

    const LinkTo = styled(Link)`
      text-decoration: none;
    `;

const Header = () => {

const [isscrolled, setisscrolled] = useState(false);

window.addEventListener('scroll', function() {
    setisscrolled(window.scrollY > 0);
});

  return (
    <Encabezado $scrolled={isscrolled.toString()}>
      <Linea $scrolled={isscrolled.toString()}/>
      <LinkTo to="/">
        <img src={logo} alt="LeyvaFlix" />
      </LinkTo> 
      <Div>
        <LinkTo to="/">
          <BotonInicio $scrolled={isscrolled.toString()}><FaHome/><span>Inicio</span></BotonInicio>
        </LinkTo>
        <LinkTo to="/nuevo-video">
          <BotonNuevoVideo $scrolled={isscrolled.toString()}><MdAddCircleOutline/><span>Nuevo Video</span></BotonNuevoVideo>
        </LinkTo>
      </Div>
      <Linea2 $scrolled={isscrolled.toString()}/>
    </Encabezado>
  );
}

export default Header;