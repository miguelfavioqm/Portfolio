import React from "react";

const Contact = () => {
  return (
    <section id="Contact" className="w-full h-screen flex flex-col gap-4 p-4">
      <div className="w-full text-center text-xl">
        <h3 className="underline mb-2">CONTACTO</h3>
        <ul>
          <li>
            <a href="https://api.whatsapp.com/send?phone=59164121283&text=%C2%A1Hola!%20">
              Whatsapp: {"(+591)"} 64121283
            </a>
          </li>
          <li>Correo: {"miguelfavioqm@gmail.com"}</li>
          <li>
            <a href="https://www.linkedin.com/in/miguel-favio-qm/">
              Linkedin:{" miguel-favio-qm"}
            </a>
          </li>
        </ul>
      </div>
      <form
        action="https://getform.io/f/84b8bf82-382e-45aa-a2b0-a4cb6f82e731"
        method="POST"
        className=" w-full flex flex-col items-center gap-4 py-4"
      >
        <label>ENVIAME UN MENSAJE 😁</label>
        <label className="w-full flex items-center justify-center gap-4">
          Nombre
          <input
            className="w-2/4 border-b-2 border-gray-950 focus:outline-none"
            type="text"
            name="name"
          />
        </label>
        <label className="w-full flex items-center justify-center gap-4 ">
          Email
          <input
            className="w-2/4 border-b-2 border-gray-950 focus:outline-none"
            type="email"
            name="email"
          />
        </label>
        <label className="w-full flex items-center justify-center gap-4">
          Mensaje{" "}
          <textarea
            className="w-2/4 h-28 border-b-2 border-gray-950 focus:border-none"
            name="message"
          />
        </label>
        <button
          className="rounded-md border-2 border-gray-500 w-1/3 hover:opacity-75"
          type="submit"
        >
          ENVIAR
        </button>
      </form>
    </section>
  );
};

export default Contact;
