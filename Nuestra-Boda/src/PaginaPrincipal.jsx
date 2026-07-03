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
  className="relative overflow-hidden py-32 px-6"
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
  
{/* SECCIÓN IMAGEN ESPECIAL */}
<motion.section
  variants={fadeUp}
  initial="hidden"
  whileInView="show"
  viewport={{ once: true, amount: 0.25 }}
  className="relative overflow-hidden bg-[#4F5A35] py-24 sm:py-32"
>
  <div className="absolute inset-0 bg-gradient-to-b from-[#6F7756] via-[#4F5A35] to-[#252B1E]" />

  <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] [background-size:24px_24px]" />

  <motion.div
    className="absolute left-1/2 top-1/2 w-[760px] h-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C9A44C]/20 blur-3xl"
    animate={{
      scale: [1, 1.12, 1],
      opacity: [0.15, 0.32, 0.15],
    }}
    transition={{
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    }}
  />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 text-center">
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
      className="mb-12"
    >
      <p className="text-[10px] sm:text-xs uppercase tracking-[0.55em] text-[#E6D3A3] mb-4">
        Una historia de amor
      </p>

      <h2 className="font-cursiveDancing text-[54px] sm:text-[78px] md:text-[92px] text-[#F8F4EB] leading-none">
        Para Siempre
      </h2>

      <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C9A44C] to-transparent mx-auto mt-6" />
    </motion.div>

    <motion.div
      className="relative mx-auto w-full max-w-6xl"
      initial={{ opacity: 0, scale: 0.96 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.3, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true }}
    >
      <div className="absolute -inset-4 sm:-inset-6 border border-[#C9A44C]/35 rounded-[36px] sm:rounded-tl-[90px] sm:rounded-br-[90px]" />

      <div className="absolute -top-10 left-1/2 w-[70%] h-[1px] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C9A44C] to-transparent" />

      <div className="absolute -bottom-10 left-1/2 w-[70%] h-[1px] -translate-x-1/2 bg-gradient-to-r from-transparent via-[#C9A44C] to-transparent" />

      <motion.img
        src="/imagenfinal.JPG"
        alt="Imagen especial"
        className="
          relative z-10
          w-full
          max-h-[820px]
          object-contain
          rounded-[28px]
          sm:rounded-tl-[80px]
          sm:rounded-br-[80px]
          shadow-[0_35px_100px_rgba(0,0,0,0.38)]
          select-none
          pointer-events-none
        "
        draggable={false}
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  </div>
</motion.section>



   {/* Sección de Vestimenta */}

 <DressCodePremium/>

 {/* Sección de Album Compartido */}

 <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="flex items-center justify-center p-6"
      >
        <div className="bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-10 max-w-md w-full text-center space-y-6 text-black relative overflow-hidden">

          {/* Glow */}
          <div className="absolute top-[-50px] left-1/2 -translate-x-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-[#fcd5b5]/40 via-[#f9e1d1]/20 to-transparent rounded-full blur-3xl animate-pulse -z-10"></div>

          <h1 className="text-3xl sm:text-4xl font-bold font-playfair tracking-wide">
            ÁLBUM COMPARTIDO
          </h1>

          <div className="w-20 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#9E8E7B] to-transparent rounded-full"></div>

          <p className="text-lg sm:text-2xl font-[DancingScript]">
            Sube tus fotos del evento y revive cada momento especial junto a nosotros
          </p>

          {/* BOTÓN */}
          <button
            onClick={() => setOpen(true)}
            className="bg-[#9E8E7B] text-white px-6 py-3 rounded-full shadow-lg hover:scale-105 transition"
          >
            Ir al Álbum 📸
          </button>
        </div>
      </motion.div>

      {/* MODAL de Album*/}
 <AnimatePresence>
  {open && (
    <motion.div
      className="fixed inset-0 bg-black/60 backdrop-blur-md flex items-center justify-center z-50 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >

      <motion.div
        initial={{ scale: 0.85, opacity: 0, y: 40 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.85, opacity: 0, y: 40 }}
        transition={{ duration: 0.4 }}
        className="relative bg-white rounded-[2rem] p-8 max-w-md w-full text-center space-y-6 shadow-[0_25px_80px_rgba(0,0,0,0.3)] overflow-hidden"
      >

        {/* Glow interno */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#fcd5b5]/30 via-transparent to-[#f9e1d1]/20 rounded-[2rem] blur-2xl -z-10"></div>

        {/* Cerrar */}
        <button
          onClick={() => setOpen(false)}
          className="absolute top-4 right-5 text-gray-400 hover:text-black text-xl transition"
        >
          ✕
        </button>

        {/* Título */}
        <h2 className="text-2xl font-playfair font-semibold text-[#7f5b45]">
          Nuestro Álbum 📸
        </h2>

        {/* Línea */}
        <div className="w-20 h-[2px] mx-auto bg-gradient-to-r from-transparent via-[#9E8E7B] to-transparent"></div>

        {/* App */}
        <p className="text-gray-600">
          Aplicación:
          <span className="block font-semibold text-[#9E8E7B] mt-1">
            Wedshoots
          </span>
        </p>

        {/* Botón app */}
        <a
          href="https://apps.apple.com/mx/app/wedshoots/id660256196"
          target="_blank"
          className="inline-block px-6 py-2 rounded-full border border-[#9E8E7B] text-[#9E8E7B] hover:bg-[#9E8E7B] hover:text-white transition"
        >
          Descargar App
        </a>

        {/* Código */}
        <div className="space-y-2">
          <p className="text-gray-500 text-sm">Código del álbum</p>
          <div className="bg-[#f8f5f2] rounded-xl py-3 px-4 font-mono text-lg tracking-[0.3em] text-[#7f5b45] shadow-inner">
            MXat19tb26
          </div>
        </div>

        {/* QR con estilo */}
        <div className="flex justify-center">
          <div className="p-3 bg-white rounded-2xl shadow-lg border border-gray-200">
            <img
              src="/qr.png"
              alt="QR"
              className="w-40 h-40 rounded-lg"
            />
          </div>
        </div>

        <p className="text-xs text-gray-400">
          Escanea el código o usa la app para subir tus fotos ✨
        </p>

      </motion.div>
    </motion.div>
  )}
</AnimatePresence>

{/* Sección de Cuanto nos conoces */}
<div className="bg-white rounded-3xl shadow-xl p-4 sm:p-6 flex justify-center">
  <div className="w-full max-w-xl">
    <Preguntas/>
  </div>
</div>
     

 {/* Sección de Regalos */}
<div className="bg-white rounded-3xl shadow-xl p-4 sm:p-6 flex justify-center">
  <div className="w-full max-w-xl">
    <Regalos/>
  </div>
</div>
     

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
    src="/finalboda.webp"
    alt="Fondo boda"
    className="absolute w-full h-full object-cover opacity-30 blur-sm scale-110"
  />

  {/* Contenido principal */}
  <div className="relative flex flex-col items-center">

    <img
      src="/finalboda.webp"
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
<div className="bg-white rounded-3xl shadow-xl p-4 sm:p-6 flex justify-center">
  <div className="w-full max-w-xl">
    <Confirmacion/>
  </div>
</div>

      </div>      
  );
}
