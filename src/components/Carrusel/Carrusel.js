import React from 'react';
import PropTypes from 'prop-types';
import styles from './Carrusel.module.css';

/* importar swiper */
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';

const Carrusel = ({galery}) => (
  <div className={styles.Carrusel}>

<section className={styles.SliderWrapper}>

 
{galery.map((item) => {
return (
 
 <div key={JSON.stringify(item)}>
   <img className={styles.ImageFotoGalery} src={item.src} alt={item.alt} />
 </div>
 );
})}



</section>
  </div>
);

Carrusel.propTypes = {};

Carrusel.defaultProps = {};

export default Carrusel;
