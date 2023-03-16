import React from 'react';
import PropTypes from 'prop-types';
import styles from './About.module.css';

const About = ( {hero} ) => (
  <div className={styles.About}>
    {hero.aboutMe.map((item) => {
      return (
        <div  key={JSON.stringify(item)}>
          <p className={styles.AboutItems}>{item.info}</p>
        </div>
      )
    })}
  </div>
);

About.propTypes = {};

About.defaultProps = {};

export default About;
