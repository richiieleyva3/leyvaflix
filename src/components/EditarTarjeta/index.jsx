/* eslint-disable no-useless-escape */
/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import CampoText from '../CampoText';
import CampoSelect from '../CampoSelect';
import CampoTextArea from '../CampoTextArea';
import CampoBoton from '../CampoBoton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BotonCerrar from '../BotonCerrar';

// Función para mostrar un mensaje de éxito al guardar un video
const showToastLimpiado = () => {
  toast.info("¡Se ha limpiado el formulario!");
};

const ModalContainer = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100%;
height: 100%;
background-color: rgba(255, 255, 255, 0.888);
display: flex;
justify-content: center;
align-items: center;
z-index: 9998;
`;

const ModalContent = styled.div`
display: flex;
flex-direction: column;
background-color: rgba(0, 0, 0, 0.888);
border-radius: 5px;
padding: 20px;
position: fixed; 
top: 50%;
left: 50%;
transform: translate(-50%, -50%);
width: 100vw;
height: fit-content;
box-shadow: 0 4px 10px rgba(0, 0, 0, 0.67);
max-width: 600px;
z-index: 9999;
gap: 20px;
`;

const Form = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;
`;

const H1 = styled.h1`
    font-size: 2rem;
    color: #E18433;
    font-weight: bold;
    font-family: "Bebas Neue", sans-serif;
    text-transform: uppercase;
`;

const ContenedorBotones = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 20px;
    width: 100%;
`;

const EditarTarjeta = ({ isOpen, onClose, initialValues, onGuardar }) => {
const [id, setId] = useState(initialValues.id);
const [titulo, setTitulo] = useState(initialValues.titulo);
const [categoria, setCategoria] = useState(initialValues.categoria);
const [imagen, setImagen] = useState(initialValues.imagen);
const [video, setVideo] = useState(initialValues.video);
const [descripcion, setDescripcion] = useState(initialValues.descripcion);
const [categorias, setCategorias] = useState(initialValues.opciones);

// si cambia el valor de initialValues renderizamos el componente
useEffect(() => {
  setId(initialValues.id);
  setTitulo(initialValues.titulo);
  setCategoria(initialValues.categoria);
  setImagen(initialValues.imagen);
  setVideo(initialValues.video);
  setDescripcion(initialValues.descripcion);
  setCategorias(initialValues.opciones);
}, [initialValues]);

const handleGuardar = () => {
  // color en funcion de la categoria
const color = categoria === 'Front end' ? '#6BD1FF' : categoria === 'Back end' ? '#00C86F' : '#FFBA05';
const data = {
  "titulo" : titulo,
  "categoria" : categoria,
  "fondo" : imagen,
  "url" : video,
  "descripcion" : descripcion,
  "color" : color
};

onGuardar(id.toString(), data);
};

const handleLimpiar = () => {
setTitulo('');
setCategoria('');
setImagen('');
setVideo('');
setDescripcion('');
showToastLimpiado();
};

if (!isOpen) return null;

const patronCampoDeTexto = /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ0-9])[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ0-9\s'\".,¿?+#:;!¡)(%@*$]{3,}$/;

  return (
    <>
      <ModalContent>
        <H1>Editar Tarjeta:</H1>
        <Form>
          <CampoText label="Título" value={titulo} onChange={setTitulo} mensajeFormato="El título debe contener por lo menos 3 caracteres alfanumericos" mensajeError="El título es obligatorio" pattern="^(?=.*[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ0-9])[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ0-9 #!¡,.\-¿?!¡#]{3,}$" required />
          <CampoSelect label="Categoría" options={categorias} value={categoria} onChange={setCategoria} required /> 
          <CampoText label="Imagen" value={imagen} onChange={setImagen} mensajeFormato="La imagen debe contener una url valida" mensajeError="La imagen es obligatorio"  pattern="^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$" required />
          <CampoText label="Video" value={video} onChange={setVideo} mensajeFormato="El video debe contener una url valida" mensajeError="El video es obligatorio"  pattern="^((http|https)://)?[a-zA-Z0-9@:%._+~#?&//=]{2,}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%._+~#?&//=]*)$" required />
          <CampoTextArea label="Descripción" value={descripcion} onChange={setDescripcion} mensajeFormato="La descripción debe ser más larga o tiene caracteres no validos" mensajeError="La descripción es obligatoria"  pattern={patronCampoDeTexto} required />
          <ContenedorBotones>
            <CampoBoton color="#E18433" label="Guardar" onClick={handleGuardar} />
            <CampoBoton color="#fff" type="reset" label="Limpiar" onClick={handleLimpiar} />
          </ContenedorBotones>
        </Form>
      <BotonCerrar onClick={onClose} />
      </ModalContent>
      <ModalContainer onClick={onClose}/>
      <ToastContainer />
      </>
  );
};

export default EditarTarjeta;

/* <CampoBoton label="Cancelar" onClick={onClose} /> */
