import Banner from "../../components/Banner";
import styled from 'styled-components';
import Tarjetas from "../../components/Tarjetas";

const Contenedor = styled.div`
position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: fit-content;
  background-color: #000000;
  `;

const Inicio = () => {

  return (
    <>
      <Contenedor>
        <Banner/>
        <Tarjetas/>
      </Contenedor>
    </>
  );
}

export default Inicio;

