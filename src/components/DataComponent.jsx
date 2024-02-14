import React, { useEffect } from 'react'
import { useFetch } from '../hooks/useFetch';

export const DataComponent = () => {
  const {data,isLoading,hasError}=useFetch('../data/sample.json');
  
  useEffect(() => {
      if (data && !isLoading && !hasError) {
          data.entries.forEach(entry => {
              console.log(entry.title); 
              console.log(entry.images['Poster Art'].url); 
          });
      }
  }, [data, isLoading, hasError]);

  return (
      <div>DataComponent</div>
  )
}

// import React from "react";
// import "../containerHome.css";
// import "../header.css";


