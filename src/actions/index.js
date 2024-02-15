import data from "../data/sample.json";
export const getPeliculas = () => async dispatch => {
  dispatch({ type: 'GET_PELICULAS_START' });
  try {
    // Se cargan los datos 
    setTimeout(() => {
      // Lamamos a la API
      const peliculasData = data.entries.filter(entry => entry.releaseYear >= 2010 && entry.programType === "movie")

      dispatch({ type: 'GET_PELICULAS_SUCCESS', payload: peliculasData });
    }, 1000);
  } catch (error) {
    dispatch({ type: 'GET_PELICULAS_FAIL', payload: error.message });
  }
};

export const getSeries = () => async dispatch => {
  dispatch({ type: 'GET_SERIES_START' });

  try {
    // Simula la carga de datos
    setTimeout(() => {
      // Aquí es donde normalmente harías la llamada a la API para obtener tus datos
      const seriesData = data.entries.filter(entry => entry.releaseYear >= 2010 && entry.programType === "series");

      dispatch({ type: 'GET_SERIES_SUCCESS', payload: seriesData });
    }, 1000);
  } catch (error) {
    dispatch({ type: 'GET_SERIES_FAIL', payload: error.message });
  }
};