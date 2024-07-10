import './App.css'
import Header from './components/Header'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './pages/Inicio';
import NuevoVideo from './pages/NuevoVideo';
import Error404 from './pages/404';
import Footer from './components/Footer';

const App = () => {

  return (
    <>
    <BrowserRouter>
    <Header/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nuevo-video" element={<NuevoVideo />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App;
