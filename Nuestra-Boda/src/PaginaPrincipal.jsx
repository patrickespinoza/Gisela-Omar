import React, { useState } from "react";
import Carousel from "./carrusel";
import { motion, AnimatePresence } from "framer-motion";
import Itinerario from "./Itinerario";
import Preguntas from "./Preguntas";
import Regalos from "./componentes-encabezado/Regalos";
import Confirmacion from "./componentes-encabezado/Confirmacion";
import FrasePremium from "./componentes-encabezado/FrasePrincipal";
import EventoDireccion from "./componentes-encabezado/Ubicacion";
import DressCodePremium from "./componentes-encabezado/codigovestimenta";
import NoviosPadres from "./componentes-encabezado/Novios";
import Album from "./componentes-encabezado/albun";

export default function PaginaPrincipal() {
   // Estados para manejar boton de album
  const [open, setOpen] = useState(false);
  // Estados para manejar el formulario
  
  const fadeUp = {
  hidden: { opacity: 0, y: 80 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
    },
  },
};
// Estados para manejar boton de tarjeta bancaria

  const[mostrarModal, setMostrarModal] = useState(false)
  const [copiado, setCopiado] = useState(false);
  const copiarCuenta = () => {
  navigator.clipboard.writeText("1234 5678 9012 3456");
  setCopiado(true);

  setTimeout(() => {
    setCopiado(false);
  }, 2000);
};
  




  return (
    <div >

<FrasePremium/>

<NoviosPadres/>
{/* Direccion del evento*/}

<EventoDireccion/>

 {/* Sección de Momentos */}
       <motion.section
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="relative overflow-hidden "
  style={{
    background: `
      radial-gradient(circle at top left, rgba(255,255,255,0.05), transparent 18%),
      radial-gradient(circle at bottom right, rgba(255,255,255,0.04), transparent 22%),
      linear-gradient(
        145deg,
        #f8f4ee 0%,
        #efe4d2 38%,
        #dcc4a3 100%
      )
    `,
  }}
>

  {/* GLOW */}
  <motion.div
    className="absolute w-[450px] h-[450px] rounded-full blur-3xl opacity-20"
    style={{
      background: "rgba(212,175,55,0.18)",
      top: "-140px",
      left: "-120px",
    }}
    animate={{
      scale: [1, 1.12, 1],
      opacity: [0.15, 0.25, 0.15],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  {/* TEXTURA */}
  <div
    className="absolute inset-0 opacity-[0.03]"
    style={{
      backgroundImage: `
        repeating-linear-gradient(
          45deg,
          rgba(0,0,0,0.08) 0px,
          rgba(0,0,0,0.08) 1px,
          transparent 1px,
          transparent 6px
        )
      `,
    }}
  />

  {/* GALERÍA */}
<motion.section
  initial={{ opacity: 0, y: 60 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
  viewport={{ once: true, amount: 0.2 }}
  className="relative overflow-hidden bg-[#4F5A35]"
>
  <Carousel />
</motion.section>

</motion.section>

{/* Seccion de Itinerario  */}
    <Itinerario />


   {/* Sección de Vestimenta */}

 <DressCodePremium/>

 {/* Sección de Album Compartido */}

 <Album/>

{/* Sección de Cuanto nos conoces */}

    <Preguntas/>
  
     

 {/* Sección de Regalos */}
    <Regalos/>
 
     

{/* Sección de imagen de separacion */}

<motion.div
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true }}
  className="relative w-full flex justify-center items-center py-16 bg-black overflow-hidden"
>

  {/* Fondo con blur */}
  <img
    src="/imagenfinal.JPG"
    alt="Fondo boda"
    className="absolute w-full h-full object-cover opacity-30 blur-sm scale-110"
  />

  {/* Contenido principal */}
  <div className="relative flex flex-col items-center">

    <img
      src="/imagenfinal.JPG"
      alt="Boda"
      className="w-72 sm:w-96 rounded-2xl shadow-2xl border border-white/20"
    />

    {/* Línea decorativa */}
    <div className="w-24 h-[2px] bg-[#9E8E7B] mt-6"></div>

    {/* Texto opcional elegante */}
    <p className="text-white mt-4 text-lg font-cursiveDancing opacity-90">
      ¡Te esperamos!
    </p>

  </div>
</motion.div>

{/* Sección de Confirmación de Asistencia */}
    <Confirmacion/>
  

      </div>      
  );
}
