import React from 'react';
import PropTypes from 'prop-types';
import styles from './Hero.module.css';
import About from '../About/About';


/* Pasar la información de la propiedad hero del CV  por prop*/
const Hero = ( { hero }) => (
  <div className={styles.Hero}> 
    <div>
      <div className={styles.CardHero}>
        
        <div className={styles.TextHero}>
          <h2 className={styles.NombreHero}>{hero.name}</h2>
          <p className={styles.SubNombre}> Desarrolladora Front-End | Fotógrafa</p>
          <About hero={hero}></About>
          <a href={hero.linkedin}> 
            <img className={styles.LinksImageHero} src="/images/linkedin.png" alt="logo linkedIn"/> 
          </a> 
          <a href={hero.gitHub}> 
            <img className={styles.LinksImageHero} src="/images/gh.png" alt="logo GitHub"/>
          </a> 
        </div> 
      </div>
    </div>
    
  </div>
);

Hero.propTypes = {};

Hero.defaultProps = {};

export default Hero;
