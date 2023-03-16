import './App.css';
/* importar useState */
import { useState } from "react";

/* importar los componentes */
import Hero from './components/Hero/Hero';
import Education from './components/Education/Education';
import Experience from './components/Experience/Experience';
import More from './components/More/More';
import Proyectos from './components/Proyectos/Proyectos';
import Galeria from './components/Galeria/Galeria';

/* importar la constante donde está almacenada la info del CV */
import { CV } from './CV/CV';
import Carrusel from './components/Carrusel/Carrusel';

  
/* destructuring de las propiedades de CV */
const { hero, education, experience, cursos, languages, proyects, galery } = CV;


function App() {
  const [mostrarEducacion, setMostrarEducacion] = useState("1");
  const [mostrarProyectos, setMostrarProyectos] = useState (true);

  return (
    <div className="App">

{/* inicio con foto y presentación con Hero y frases de About*/}
      <Hero hero={hero}/>
      
{/* botones para elegir vista "formación" (por defecto), "tectnologías" o "cursos e idiomas (More component)" */}
      <div className='container-buttons'>
        <div className='buttons-div'>
        <button onClick={() => setMostrarEducacion("1")}>
          Formación
        </button>
        <button onClick={() => setMostrarEducacion("2")}>
          Tecnologías
        </button>
        <button onClick={() => setMostrarEducacion("3")}>
          Cursos e idiomas
        </button>
        </div>
      </div>

{/* vista de Formación - Tecnologías- Idiomas  dependiendo del botón clicado */}
      <div>
        {mostrarEducacion === "1" ?   
          (<Education education={education} />) :   
        
        mostrarEducacion ==="2" ?
          (<Experience experience={experience} />) :

        mostrarEducacion === "3" ?
          (<More cursos={cursos} languages={languages}/>) :
          (<Education education={education} />)}
      </div>

{/* botones para elegir entre la galería de proyectos o la galería de fotos */}
<div className='container-buttons'>
      <div className='buttons-div'>
        <button onClick={() => setMostrarProyectos(true)}>
          Proyectos Front-End
        </button>
        <button onClick={() => setMostrarProyectos(false)}>
          Galería de fotografías
        </button>
      </div>
      </div>

  {/* vista de Proyectos o Galería fotos dependiendo de lo clicado */}
      <div>
        {mostrarProyectos ? (
          <Proyectos proyects={proyects} /> ) : (
          <Galeria galery={galery} />)}
          {/* <Carrusel galery={galery} />)} */}
      </div>
    </div>
  );
}

export default App;
