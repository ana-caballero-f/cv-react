import React from 'react';
import PropTypes from 'prop-types';
import styles from './Education.module.css';


const Education = ( {education}) => (
  <div className={styles.Education}>
  <section className={styles.EducationContainer}>
    {education.map((item) => {
      return (
        <div className={styles.EducationItem} key={JSON.stringify(item)}>
          <p className={styles.EducacionTitulo}><b>{item.estudios}</b> - {item.escuela} | {item.year}</p>
        </div>
      )
    })}
    </section>
  </div>
);

Education.propTypes = {};

Education.defaultProps = {};

export default Education;
