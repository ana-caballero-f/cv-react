import React from 'react';
import PropTypes from 'prop-types';
import styles from './More.module.css';


const More = ({cursos, languages}) => (
  <div className={styles.More}>
    <section className={styles.MoreContainer}>
{/* sección de cursos */}
    <section className={styles.Cursos}>
    {cursos.map((item) => {
      return (
        <div className={styles.CursosItem} key={JSON.stringify(item)}>
          <p className={styles.CursosParrafo}><b>{item.name}</b> | {item.date}</p>
        </div>
      )
    })}
    </section>

{/* sección de idiomas */}
    <section className={styles.Idiomas}>
    {languages.map((item) => {
      return (
        <div className={styles.LanguagesItem} key={JSON.stringify(item)}>
          <p className={styles.IdiomasParrafo}><b>Idioma:</b> {item.name} - Nivel: {item.level}</p> 
        </div>
      )
    })}
    </section>
  </section>
  </div>
);

More.propTypes = {};

More.defaultProps = {};

export default More;
