import React, { useEffect, useState } from 'react';
import "../App.css";
import { Cargando } from '../components/cargando';
import { MensajeError } from '../components/MensajeError';
import { useDispatch, useSelector } from 'react-redux';
import { getPeliculas } from '../actions';

const Peliculas = () => {
    const dispatch = useDispatch();
    const { peliculas, isLoading, hasError } = useSelector(state => state.peliculas);
    const [page, setPage] = useState(1); 
  
    useEffect(() => {
      dispatch(getPeliculas()); // Ejecuta la accion getPeliculas
    }, [dispatch]);
  
    if (isLoading) {
      return <Cargando />;
    }
  
    if (hasError) {
      return <MensajeError />;
    }
  
    const itemsPerPage = 8; // Elementos por pagina
    const startIndex = (page - 1) * itemsPerPage; // Calcula el índice de inicio para la página actual
  
    const paginatedPeliculas = peliculas
      .sort((a, b) => a.title.localeCompare(b.title))
      .slice(startIndex, startIndex + itemsPerPage); // Muestra solo los elementos para la página actual
      const numItem=peliculas.length;
    const totalPages = Math.ceil(numItem/ itemsPerPage);

    return (
        <>
            <div className="movies-container">
                {paginatedPeliculas.map(movie => {
                    // Divide la descripción en palabras
                    let words = movie.description.split(' ');

                    // Si la descripción tiene más de 30 palabras, la recorta
                    if (words.length > 30) {
                        words = words.slice(0, 30);
                    }

                    // Une las palabras en una cadena
                    let shortDescription = words.join(' ');

                    return (
                        <div className="card" key={movie.title}>
                            <div className="front">
                                <img className="card-img-top" src={movie.images["Poster Art"].url} alt={movie.title} />
                                <div className="card-body">
                                    <p className="card-text">{movie.title}</p>
                                </div>
                            </div>
                            <div className="back">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{movie.title}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">{movie.releaseYear}</h6>
                                        <p className="card-text descripcion">{shortDescription}</p>
                                        <button type="button" className="btn btn-primary">Ver ahora</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
            <div className='btn-content'>
                <button type="button" className="btn btn-primary" onClick={() => setPage(page - 1)} disabled={page === 1}>Anterior</button>
                <button type="button" className="btn btn-primary" onClick={() => setPage(page + 1)} disabled={page >= totalPages}>Siguiente</button>

            </div>
        </>
    );
}

export default Peliculas;
