import React from 'react';
import PropTypes from 'prop-types';
import styles from './Proyectos.module.css';


const Proyectos = ({proyects}) => (
  <div className={styles.Proyectos}>

  {/* <iframe 
  src="https://mi-tienda-seven.vercel.app/"></iframe> */}
    {proyects.map((item) => {
    return (
      <div key={JSON.stringify(item)}>
      
        <img className={styles.ImageProyecto} src={item.src} alt={item.logo} /> 
      </div>
      ); 
    })}
    
  </div>
  );

Proyectos.propTypes = {};

Proyectos.defaultProps = {};

export default Proyectos;
