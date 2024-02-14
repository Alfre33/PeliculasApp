import React from 'react'
import "../App.css";
import movies from '../assets/Movies.png';
import series from '../assets/Series.png';
import { Link } from 'react-router-dom';

const Inicio = () => {

  return (
  <>
  <div className='section-page'>
<Link to="/series">

    <div className="card" >
        <img className="card-img-top" src={series} alt='' />
        <div className="card-body card-body-home">
            <p className="card-text">Series</p>
        </div>
    </div>
</Link>
<Link to="/peliculas">
    <div className="card" >
        <img className="card-img-top" src={movies}alt='peliculas' />
        <div className="card-body card-body-home">
            <p className="card-text">Peliculas</p>
        </div>
    </div>
</Link>
  </div>
  </>
  )
}
export default Inicio;