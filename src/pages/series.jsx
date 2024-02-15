import React, { useState, useEffect } from 'react';
import "../App.css";
import { Cargando } from '../components/cargando';
import { MensajeError } from '../components/MensajeError';
import { useDispatch, useSelector } from 'react-redux';
import { getSeries } from '../actions';

function Series() {
    const dispatch = useDispatch();
  const { series, isLoading, hasError } = useSelector(state => state.series); // Accede al estado de las series
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getSeries()); // Despacha tu acción
  }, [dispatch]);

  if (isLoading) {
    return <Cargando />;
  }

  if (hasError) {
    return <MensajeError />;
  }

  const itemsPerPage = 8; // Elementos por pagina
    const startIndex = (page - 1) * itemsPerPage;  // Calcula el índice de inicio para la página actual

  const paginatedSeries = series
    .sort((a, b) => a.title.localeCompare(b.title)) //filtra por orden alfabetico
    .slice(startIndex, startIndex + itemsPerPage);  // Muestra solo los elementos para la página actual

    const numItem=series.length;
    const totalPages = Math.ceil(numItem / itemsPerPage);   //divide el total de items de series por los items a mostrar po pagina
    return (
        <>
        <div>
            <div className="movies-container">
                {paginatedSeries.map(series => {
                    // Divide la descripción en palabras
                    let words = series.description.split(' ');

                    // Si la descripción tiene más de 30 palabras, la recorta
                    if (words.length > 30) {
                        words = words.slice(0, 30);
                    }

                    // Une las palabras en una cadena
                    let shortDescription = words.join(' ');

                    return (
                        <div className="card " key={series.title} >
                            <div className="front">
                            <img className="card-img-top" src={series.images["Poster Art"].url} alt={series.title} />
                            <div className="card-body">
                                <p className="card-text">{series.title}</p>
                            </div>
                            </div>    
                            <div className="back">
                                <div className="card">
                                    <div className="card-body">
                                        <h5 className="card-title">{series.title}</h5>
                                        <h6 className="card-subtitle mb-2 text-muted">{series.releaseYear}</h6>
                                        <p className="card-text descripcion">{shortDescription}</p>
                                        <button type="button" className="btn btn-primary">Ver ahora</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
                    <div className='btn-content'>
                    <button type="button" className="btn btn-primary" onClick={() => setPage(page - 1)} disabled={page === 1}>Anterior</button>
                    <button type="button" className="btn btn-primary" onClick={() => setPage(page + 1)} disabled={page >= totalPages}>Siguiente</button>
    
                </div>
        </>
    );
}

export default Series;
