const initialState = {
    peliculas: [],
    isLoading: false,
    hasError: false
  };
  
export  const reducerPeliculas = (state = initialState, action) => {
    switch(action.type) {
      case 'GET_PELICULAS_START':
        return {
          ...state,
          isLoading: true
        };
      case 'GET_PELICULAS_SUCCESS':
        return {
          ...state,
          isLoading: false,
          peliculas: action.payload
        };
      case 'GET_PELICULAS_FAIL':
        return {
          ...state,
          isLoading: false,
          hasError: true
        };
      default:
        return state;
    }
  }
  
  const initialStateSeries = {
    series: [],
    isLoading: false,
    hasError: false
  };
  
  export const reducerSeries = (state = initialStateSeries, action) => {
    switch(action.type) {
      case 'GET_SERIES_START':
        return {
          ...state,
          isLoading: true
        };
      case 'GET_SERIES_SUCCESS':
        return {
          ...state,
          isLoading: false,
          series: action.payload
        };
      case 'GET_SERIES_FAIL':
        return {
          ...state,
          isLoading: false,
          hasError: true
        };
      default:
        return state;
    }
  }