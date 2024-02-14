import React, { useEffect, useState } from 'react';
import "../App.css";
import { Cargando } from '../components/cargando';
import { MensajeError } from '../components/MensajeError';
import data from "../data/sample.json"
import { Link } from 'react-router-dom';

const Peliculas = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);
    const [page, setPage] = useState(1); // Agrega un estado para la página actual

    useEffect(() => {
        setIsLoading(true);
        try {
            // Simula la carga de datos
            setTimeout(() => {
                setIsLoading(false);
                // Simula un error
                if (data === null) {
                    throw new Error('Error al cargar los datos');
                }
            }, 1000);
        } catch (error) {
            setIsLoading(false);
            setHasError(true);
        }
    }, []);

    if (isLoading) {
        return <Cargando />;
    }

    if (hasError) {
        return <MensajeError />;
    }

    const itemsPerPage = 5; // Define cuántos elementos mostrar por página
    const startIndex = (page - 1) * itemsPerPage; // Calcula el índice de inicio para la página actual

    const filterMovies = data.entries
        .filter(entry => entry.releaseYear >= 2010 && entry.programType === "movie")
        .sort((a, b) => a.title.localeCompare(b.title))
        .slice(startIndex, startIndex + itemsPerPage); // Muestra solo los elementos para la página actual
    const NumItem=data.entries.filter(entry => entry.releaseYear >= 2010 && entry.programType === "movie")
    const totalPages = Math.ceil(NumItem.length / itemsPerPage);

    return (
        <>
        {/* <nav className='NavGlobal'>
            <Link to="/series">Mejores Series</Link>
            <Link to="/">Home</Link>
        </nav> */}
            {/* <h3>Top 20 peliculas de la semana</h3> */}
            <div className="movies-container">
                {filterMovies.map(movie => {
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
