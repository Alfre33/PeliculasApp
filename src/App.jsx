// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Inicio  from './pages/inicio';
import Peliculas from './pages/peliculas';
import Series from './pages/series';
import Header from './components/Header';
import Navbar from './components/navbar';
import Footer from './components/footer';
import { Link } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <div className='container-pages'>
      <Header/>
      {/* <Navbar/> */}
      <nav className='NavGlobal'>
            <Link to="/">Home</Link>
            <Link to="/series">Mejores Series</Link>
            <Link to="/peliculas">Mejores Peliculas</Link>
        </nav>
      <div className='section-page'>
      <Routes>
        <Route path="/series" element={<Series/>} />
        <Route path="/peliculas" element={<Peliculas/>} />
        <Route path="/" element={<Inicio/>} />
      </Routes>
      </div>
      <Footer/>
      </div>
    </Router>
  );
};

export default App;
