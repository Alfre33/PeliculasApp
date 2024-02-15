import React from 'react'
import './components.css';
export const Cargando = () => {
  return (
    <div className='content-cargando'>
    <div className='alert alert-info text-center'>
      <h2>Cargando...</h2>
        
        <div className="lds-spinner"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      </div>
    </div>
  )
}
