import React from 'react';
import PropTypes from 'prop-types';
import styles from './Experience.module.css';

const Experience = ({experience}) => (
  <div className={styles.Experience}>
    <section className={styles.ExperienceContainer}>
   {experience.map((item) => {
    return (
      <div key={JSON.stringify(item)}>
        <img className={styles.ImageLogo} src={item.src} alt={item.logo} />
        <p>{item.name}</p>
      </div>
    )
   })}
    </section> 
  </div>
);

Experience.propTypes = {};

Experience.defaultProps = {};

export default Experience;
