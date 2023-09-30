import React from "react";
import Card from "./Card";

const Projects = () => {
  return (
    <section id="Projects" className="w-full md:h-screen p-4 text-center">
      <h2 className="text-xl mb-4">Proyectos</h2>
      <div className="flex gap-4 justify-center items-center flex-wrap">
        <Card
          img="https://i.postimg.cc/Vs0TNJKC/imagen.png"
          title="SURI"
          descripcion="El siguiente es una landing page para un emprendimiento de arte el cual requieres una pagina para mostrar sus productos"
          items="REACT, BOOSTRAP, VITE, TAILWIND"
          link="https://jhorgerlis-art.click/"
        />
        <Card
          img="https://i.postimg.cc/9Q9NB047/Captura-de-pantalla-2023-09-30-144709.png"
          title="Pokedex"
          descripcion="El siguiente es una pagina proyecto en la cual consumo la API de Pokemon"
          items="HTML, SASS, JS"
          link="https://miguelfavioqm.github.io/Pokedex/"
        />
        <Card
          img="https://i.postimg.cc/kgNLmDnd/Captura-de-pantalla-2023-09-30-150249.png"
          title="Encriptador"
          descripcion="El siguiente es una pagina proyecto en la cual se desarrolla logica de programacion en Js parte de mi formacion en ALURA LATAM"
          items="HTML, CSS, JS"
          link="https://miguelfavioqm.github.io/alurachallengeencrypter.github.io/"
        />
        <Card
          img="https://i.postimg.cc/SNSgMV4H/2-login.png"
          title="Hotel Alura"
          descripcion="El siguiente es una proyecto desarrollado en JAVA para un proyecto de HOTEL y reservaciones"
          items="JAVA, ECLIPSE, JCALENDAR, MYSQL"
          link="https://github.com/miguelfavioqm/challenge-one-alura-hotel-latam"
        />
        <Card
          img="https://i.postimg.cc/tCVr98Ct/gympagina.png"
          title="GYM PAGE"
          descripcion="El siguiente es una landing page para un gimnasio"
          items="HTML, SASS, JS"
          link="https://miguelfavioqm.github.io/paginaWebGym.github.io/"
        />
        <Card
          img="https://i.postimg.cc/5Nz285mq/Captura-de-pantalla-2023-09-30-151342.png"
          title="Plantilla Portfolio"
          descripcion="El siguiente es una plantilla para mi portafolio"
          items="REACT, BOOSTRAP, VITE, TAILWIND"
          link="https://comfy-choux-d67c24.netlify.app/"
        />
      </div>
    </section>
  );
};

export default Projects;
