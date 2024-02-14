import React, { useState, useEffect } from 'react';
import "../App.css";
import { Cargando } from '../components/cargando';
import { MensajeError } from '../components/MensajeError';
import data from "../data/sample.json"
import { Link } from 'react-router-dom';

function Series() {
    const [isLoading, setIsLoading] = useState(true);
    const [hasError, setHasError] = useState(false);

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

    const filterSeries = data.entries
        .filter(entry => entry.releaseYear >= 2010 && entry.programType === "series")
        .sort((a, b) => a.title.localeCompare(b.title))
        .slice(0, 24);

    return (
        <div>
            {/* <nav className='NavGlobal'><Link to="/peliculas">Mejores Series</Link></nav> */}
            {/* <h3>Top 20 series de la semana</h3> */}
            <div className="movies-container">
                {filterSeries.map(series => {
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
    );
}

export default Series;
