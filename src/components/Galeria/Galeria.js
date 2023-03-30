import React from 'react';
import PropTypes from 'prop-types';
import styles from './Galeria.module.css';



/* importar swiper */
import { Navigation, Pagination, A11y} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import 'swiper/css/zoom';




const Galeria = ({galery}) => {
  return (
    <div className={styles.Galeria}>
      <Swiper 
      style={{
        "--swiper-navigation-color": "#000000",
        "--swiper-navigation-border": "solid black 2px"
        // "--swiper-pagination-color": "#000000",
      }}
          modules={[Navigation, Pagination, A11y]}
          spaceBetween={55}
          slidesPerView={5}
          navigation
          pagination={{ clickable: true, loop: true }}
       
        >

        <section className={styles.Swiper}>
          {galery.map((item) => {
            return (
              <div className={styles.SliderWrapper} key={JSON.stringify(item)}>
              <SwiperSlide >
                <img className={styles.ImageFotoGalery} src={item.src} alt={item.alt} />
              </SwiperSlide> 
              </div>
            );
          })} 
        </section>
      </Swiper>
    </div>
  )
};


Galeria.propTypes = {};

Galeria.defaultProps = {};

export default Galeria;
