import React from "react";
import foto from "../assets/1680572824153.jpeg";
const AboutMe = () => {
  return (
    <section
      id="AboutMe"
      className="w-full md:h-screen flex gap-4 flex-wrap p-4 justify-center items-center"
    >
      <p className="md:h-full flex flex-col justify-center items-center md:w-1/4">
        <img src={foto} alt="fotoPerfil" className="w-32 rounded-full" />
        HOLA! <br /> Mi nombre es Miguel Favio Quispe Mamani
        <br />
        Soy de La Paz-Bolivia
        <br />
        Me encanta la tecnología, es algo que siempre me lleva a querer aprender
        nuevas cosas y considero que es uno de mis mayores aptitudes la
        facilidad de aprendizaje, considero que el orden, perseverancia y
        respeto son las bases para poder destacar, la empatía para mí es lo que
        lleva a buenas relaciones interpersonales
      </p>
      <p className="md:h-full flex justify-center items-center md:w-1/4">
        EDUCACION
        <br />
        <br />
        Año 2022 - Egresado Licenciatura en Electrónica y Telecomunicaciones
        Facultad de Tecnología U.M.S.A UNIVERSIDAD MAYOR DE SAN ANDRES
        <br />
        Año 2021 - Desarrollo de Software {"<< En progreso >>"}
        Facultad de Ciencias Puras y Naturales U.M.S.A UNIVERSIDAD MAYOR DE SAN
        ANDRES
      </p>
      <div className="md:h-full flex justify-center items-center flex-col md:w-2/5">
        LOGROS Y ESTUDIOS COMPLEMENTARIOS
        <br />
        <br />
        <ol className="list-disc">
          <li>
            En proceso... Obtención grado de Licenciatura por Excelencia
            Académica
          </li>
          <li>
            {
              "CURSO DE PEDAGOGIA EAD <<150 Horas Académicas>> Dinámica de Grupos e Investigación, Evaluación del PEAFACULTAD DE MEDICINA UMSA RES H.C.U. 483/15"
            }
          </li>
          <li>
            {
              " INSPIRING STUDY CONFERENCE WITH GOOGLE Progressio, Paul Cornejo Peralta Google For Education CERTIFIED TRAINER"
            }
          </li>
          <li>
            {
              " Auxiliar de Docencia Electricidad General, Circuitos II, Informatica II"
            }
          </li>
          <li>
            {
              " Microsoft Office <<150 Horas Académicas>>Facultad deTecnología UMSA"
            }
          </li>
          <li>
            {
              "SEGURIDAD INDUSTRIAL <<20 Horas Académicas>> Ministerio deTrabajo"
            }
          </li>
          <li>
            {"Facilitador Instituto de la juventud GAMLP- Geometría Analítica"}
          </li>
          <li>
            {
              "Facilitador Adulto Mayor UPDAM-GAMLP - Talleres de computación y actualización manejo de herramientas en dispositivos móviles"
            }
          </li>
        </ol>
      </div>
    </section>
  );
};

export default AboutMe;
