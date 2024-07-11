/* eslint-disable no-undef */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import React, { useEffect, useRef, useState, useCallback } from "react";
import CategoriaVideos from '../CategoriaVideos';
import axios from 'axios';
import EditarTarjeta from '../EditarTarjeta';
import { ToastContainer, toast, Slide, Zoom, Flip, Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import BotonReinicio from '../BotonReinicio';
import videosDefault from '../../assets/videos/videos';
import ReproductorModal from '../ReproductorModal';

// Función para mostrar un mensaje de no se encontro el id del video
const showToastNoId = (id) => {
  toast.error("`No se encontró ningún video con el ID ${id}`");
};

// Función para mostrar un mensaje de no se pudo cargar los videos
const showToastNoCargados = () => {
  toast.error(`No se pudo cargar los videos, es posible que no haya, reinicia la aplicacion en el icono de la esquina superior izquierda`);
};

// Función para mostrar un mensaje de no se pudo abrir el video
const showToastNoAbiertoGeneral = () => {
  toast.error(`No se pudo abrir el video para editarlo`);
};

// Función para mostrar un mensaje de no se pudo abrir el video por ID
const showToastNoAbierto = (id) => {
  toast.error(`No se pudo abrir el video ${id} para editarlo`);
};

// Función para mostrar un mensaje de no se pudo eliminar el video
const showToastNoEliminado = () => {
  toast.error("No se pudo eliminar el video");
};

// Función para mostrar un mensaje de no se pudo guardar el video
const showToastNoGuardado = () => {
    toast.error("No se pudo guardar el video");
  };

// Función para mostrar un mensaje de todos los campos son requeridos
const showToastError = () => {
    toast.error("Todos los campos son requeridos");
  };

  // Función para mostrar un mensaje de éxito al eliminar un video
const showToastEliminado = () => {
  toast.success("¡Video eliminado! (espera unos segundos antes de hacer otro cambio)");
};

// Función para mostrar un mensaje de éxito al guardar un video
const showToastExito = () => {
    toast.success("¡Video editado! (espera unos segundos antes de hacer otro cambio)");
  };

// Función para mostrar un mensaje de éxito al restablecer los videos por default
const showToastExitoDefault = () => {
  toast.success("¡Se restablecio la aplicación!");
};

const Contenedor = styled.div`
position: relative;
display: flex;
justify-content: left;
flex-direction: column;
height: fit-content;
overflow: hidden;
width: 100%;
padding: 30px;
margin-bottom: 100px;
margin-top: 300px;
gap: 40px;
z-index: 6;

@media (max-width: 800px) {
    margin-top: 500px;
}
`;

const Tarjetas = () => {

    //////////////////////// Inicio: Editor de tarjeta
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isReproductorModalOpen, setIsReproductorModalOpen] = useState(false);
    const [tarjetaData, setTarjetaData] = useState([]);
    const [video, setVideo] = useState(null);
    const [opciones, setOpcionesVideos] = useState([]);
    const [initialValues, setInitialValues] = useState([]);
    let [videos, setVideos] = useState([]);
    
    const handleOpenModal = (id) => {
        fetchVideo(id);
        setIsModalOpen(true)
    };
    const handleCloseModal = () => setIsModalOpen(false);

    const handleOpenReproductorModal = (id) => {
      fetchVideo(id);
      setIsReproductorModalOpen(true);
  };
    const handleCloseReproductorModal = () => setIsReproductorModalOpen(false);


    const handleGuardarTarjeta = async (id, data) => {
      // Si alguno de los campos está vacío, no se guarda el video y lanzamos un alert
      if (!data.titulo || !data.categoria || !data.fondo || !data.url || !data.descripcion) {
        showToastError();
        return;
      }
      try {
        await editarVideo(id, data);
        showToastExito();
        fetchAllVideos();
        handleCloseModal();
        } catch (error) {
        showToastNoGuardado();
        }
    };

    const handleEliminarTarjeta = (id) => {
        eliminarVideo(id);
    };

    // Obtenemos un video por ID
    const fetchVideo = async (id) => {
        try {
          const resultado = await axios.get(
            `https://6689c19d0ea28ca88b88cb71.mockapi.io/api/videos/${id}`
          );
          if (resultado.data) {
            setInitialValues({
              id: resultado.data.id,
              titulo: resultado.data.titulo,
              categoria: resultado.data.categoria,
              imagen: resultado.data.fondo,
              video: resultado.data.url,
              descripcion: resultado.data.descripcion,
              opciones: opciones,
            });
          } else {
            showToastNoAbierto(id);
          }
        } catch (error) {
          //showToastNoAbiertoGeneral(); 
        }
      };

      // Editamos un video por ID
      const editarVideo = async (id, data) => {
        try {
          await axios.put(
            `https://6689c19d0ea28ca88b88cb71.mockapi.io/api/videos/${id}`,
            data
          );
            showToastExito();
            fetchAllVideos();
        } catch (error) {
          showToastNoGuardado();
        }
      };

      // Eliminamos un video por ID
      const eliminarVideo = async (id) => {
        try {
          const resultado = await axios.delete(
            `https://6689c19d0ea28ca88b88cb71.mockapi.io/api/videos/${id}`
          );
          if (resultado.data) {
            showToastEliminado();
            fetchAllVideos();
          } else {
            showToastNoId(id);
          }
        } catch (error) {
          showToastNoEliminado(); 
        }
      };

    /////////////////////// Fin: Editor de tarjeta

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

    // Agrupamos videos por categoría
    const videosPorCategoria = videos.reduce((acc, video) => {
        acc[video.categoria] = acc[video.categoria] || [];
        acc[video.categoria].push(video);
        return acc;
    }, {});

    const fetchAllVideos = async () => {
      try {
          const response = await axios.get('https://6689c19d0ea28ca88b88cb71.mockapi.io/api/videos');
        setVideos(response.data);
        obtenerCategorias(response.data);
        if(response.data.length === 0) {
          showToastNoCargados();
        }
      } catch (error) {
        showToastNoCargados();
      }
    };

    // Guardamos un video
const guardarVideo = async (dataRow) => {
  const { titulo, categoria, fondo, url, descripcion } = dataRow;
  const color = categoria === 'Front end' ? '#6BD1FF' : categoria === 'Back end' ? '#00C86F' : '#FFBA05';
  const data = {
    "titulo": titulo,
    "categoria" : categoria,
    "fondo" : fondo,
    "url" : url,
    "descripcion" : descripcion,
    "color" : color
  };
  try {
      const resultado = await axios.post(
      `https://6689c19d0ea28ca88b88cb71.mockapi.io/api/videos`,
      data
      );
  } catch (error) {
    console.log('Error al guardar el video', error);
  }
  };

    // Cargamos los videos desde el json videosDefault a la api
    const cargarVideos = async () => {
      try {
        const response = await axios.get('https://6689c19d0ea28ca88b88cb71.mockapi.io/api/videos');
    
        // Elimina los videos existentes (si los hay)
        if (response.data.length > 0) {
          await Promise.all(response.data.map(video => 
            axios.delete(`https://6689c19d0ea28ca88b88cb71.mockapi.io/api/videos/${video.id}`)
          ));
        }

        await Promise.all(videosDefault.map(video => guardarVideo(video)));
    
        // Sube los nuevos videos uno por uno con espera de 1 segundo
        /*
        for (const video of videosDefault) { // Usamos un bucle for...of en lugar de map
          await guardarVideo(video);
          await new Promise(resolve => setTimeout(resolve, 1000)); // Espera 1 segundo
        }
          */
    
        showToastExitoDefault();
        fetchAllVideos(); 
      } catch (error) {
        showToastNoCargados();
      }
    };
    

  return (
    <>
    <Contenedor>
        {
            Object.keys(videosPorCategoria).map(categoria => (
                <CategoriaVideos
                  key={categoria}
                  onEliminar={handleEliminarTarjeta}
                  funcion={handleOpenModal}
                  reproducir={handleOpenReproductorModal}
                  categoria={categoria}
                  videosPorCategoria={videosPorCategoria} />
            ))
        }
    </Contenedor>
    <ReproductorModal
      isOpen={isReproductorModalOpen}
      onClose={handleCloseReproductorModal}
      titulo={initialValues.titulo}
      descripcion={initialValues.descripcion}
      url={initialValues.video} />
    <EditarTarjeta
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        initialValues={initialValues}
        onGuardar={handleGuardarTarjeta}
    />
    <ToastContainer />
    <BotonReinicio Reiniciar={cargarVideos} />
    </>
  );
}

export default React.memo(Tarjetas);