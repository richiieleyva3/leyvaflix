/* eslint-disable no-useless-escape */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState, useCallback } from 'react';
import styled from 'styled-components';
import CampoText from '../CampoText';
import CampoSelect from '../CampoSelect';
import CampoTextArea from '../CampoTextArea';
import CampoBoton from '../CampoBoton';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { ToastContainer, toast, Slide, Zoom, Flip, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Función para mostrar un mensaje de no se pudo guardar el video
const showToastNoGuardado = () => {
    toast.error("No se pudo guardar el video");
  };

// Función para mostrar un mensaje de todos los campos son requeridos
const showToastError = () => {
    toast.error("Todos los campos son requeridos");
  };

// Función para mostrar un mensaje de éxito al guardar un video
const showToastExito = () => {
    toast.success("¡Video guardado!");
  };

// Función para mostrar un mensaje de éxito al guardar un video
const showToastLimpiado = () => {
    toast.info("¡Se ha limpiado el formulario!");
  };

const Content = styled.div`
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: calc(100vh + 180px);
    gap: 20px;
    background-color: rgba(0, 0, 0, 0.888);
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const H1 = styled.h1`
    font-size: 3rem;
    text-align: center;
    color: #fff;
    font-family: "Bebas Neue", sans-serif;
    text-transform: uppercase;
`;

const P = styled.p`
    font-size: 1rem;
    text-align: center;
    padding: 0 20px;
    color: #fff;
    font-family: "Bebas Neue", sans-serif;
    text-transform: uppercase;
`;

const Form = styled.form`
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    width: 80%;
`;

const ContenedorBotones = styled.div`
    display: flex;
    justify-content: space-evenly;
    gap: 20px;
    width: 100%;
`;

const AgregarTarjeta = () => {
const [id, setId] = useState();
const [titulo, setTitulo] = useState();
const [categoria, setCategoria] = useState();
const [imagen, setImagen] = useState();
const [video, setVideo] = useState();
const [descripcion, setDescripcion] = useState();
const [opciones, setOpcionesVideos] = useState([]);

const handleGuardar = () => {
const color = categoria === 'Front end' ? '#6BD1FF' : categoria === 'Back end' ? '#00C86F' : '#FFBA05';
const data = {
  "titulo": titulo,
  "categoria" : categoria,
  "fondo" : imagen,
  "url" : video,
  "descripcion" : descripcion,
  "color" : color
};

// Si alguno de los campos está vacío, no se guarda el video y lanzamos un alert
if (!titulo || !categoria || !imagen || !video || !descripcion) {
    console.log('Todos los campos son requeridos');
    showToastError();
    return;
}
guardarVideo(data);
handleLimpiar();
};

const handleLimpiar = () => {
    setTitulo('');
    setCategoria('');
    setImagen('');
    setVideo('');
    setDescripcion('');
    showToastLimpiado();
};

// Guardamos un video
const guardarVideo = async (data) => {
try {
    const resultado = await axios.post(
    `https://6689c19d0ea28ca88b88cb71.mockapi.io/api/videos`,
    data
    );
    if (resultado.data) {
        showToastExito()
    }
} catch (error) {
    showToastNoGuardado();
}
};

useEffect(() => {
    fetchAllVideos();
  }, []);

const obtenerCategorias = useCallback((datos) => {
    const uniqueCategories = new Set(datos.map(video => video.categoria));
    const opcionesVideos = Array.from(uniqueCategories).map(category => ({
      value: category,
      label: category,
    }));
    setOpcionesVideos(opcionesVideos);
}, [opciones]);

const fetchAllVideos = async () => {
    try {
        const response = await axios.get('https://6689c19d0ea28ca88b88cb71.mockapi.io/api/videos');
      obtenerCategorias(response.data);
    } catch (error) {
      console.error('Error fetching videos:', error.response); 
    }
  };

  const patronCampoDeTexto = /^(?=.*[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ0-9])[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ0-9\s'\".,¿?+#:;!¡)(%@*$]{3,}$/;
  
  return (
    <>
      <Content>
        <H1>Nuevo Video</H1>
        <P>Complete el formulario para crear una nueva tarjeta de video</P>
        <Form>
          <CampoText label="Título" value={titulo} onChange={setTitulo} mensajeFormato="El título debe contener por lo menos 3 caracteres alfanumericos" mensajeError="El título es obligatorio" pattern="^(?=.*[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ0-9])[a-zA-ZáéíóúÁÉÍÓÚüÜñÑ0-9 #!¡,.\-¿?!¡#]{3,}$" required />
          <CampoSelect label="Categoría" options={opciones} value={categoria} onChange={setCategoria} required /> 
          <CampoText label="Imagen" value={imagen} onChange={setImagen} mensajeFormato="La imagen debe contener una url valida" mensajeError="La imagen es obligatorio"  pattern="^(https?|ftp):\/\/[^\s/$.?#].[^\s]*$" required />
          <CampoText label="Video" value={video} onChange={setVideo} mensajeFormato="El video debe contener una url valida" mensajeError="El video es obligatorio"  pattern="^((http|https)://)?[a-zA-Z0-9@:%._+~#?&//=]{2,}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%._+~#?&//=]*)$" required />
          <CampoTextArea label="Descripción" value={descripcion} onChange={setDescripcion} mensajeFormato="La descripción debe ser más larga o tiene caracteres no validos" mensajeError="La descripción es obligatoria"  pattern={patronCampoDeTexto} required />
          <ContenedorBotones>
            <CampoBoton color="#E18433" label="Guardar" onClick={handleGuardar} />
            <CampoBoton color="#fff" type="reset" label="Limpiar" onClick={handleLimpiar} />
            <Link to="/"><CampoBoton color="#ff0000" label="Cancelar" /></Link>
          </ContenedorBotones>
        </Form>
      </Content>
      <ToastContainer />
      </>
  );
};

export default AgregarTarjeta;
