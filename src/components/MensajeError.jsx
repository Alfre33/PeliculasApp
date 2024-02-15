import React from 'react'
import './components.css';
export const MensajeError = () => {
  return (
    <div className='content-cargando'>
    <div className='alert alert-danger text-center'>
      <h2> Pagina o datos no encontrados</h2>
      <div class="lds-hourglass"></div>
      </div>
      </div>
  )
}