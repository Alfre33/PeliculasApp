import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
<ul class="nav nav-pills nav-fill">
    <li class="nav-item">
      <a class="nav-link active" href="#">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Peliculas</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Series</a>
    </li>
  </ul>
  );
};

export default Navbar;
