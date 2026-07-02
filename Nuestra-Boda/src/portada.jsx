import React, { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Countdown from "./componentes-encabezado/encabeza-cuenta";

export default function Portada() {
  const audioRef = useRef(null);

  const [introActiva, setIntroActiva] = useState(true);
  const [mostrarContenido, setMostrarContenido] = useState(false);
  const [abrirSobre, setAbrirSobre] = useState(false);

  const [invitados, setInvitados] = useState("Invitado Especial");
  const [pases, setPases] = useState(1);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const nombre = params.get("nombre");
    const cantidad = params.get("pases");

    if (nombre) setInvitados(nombre);
    if (cantidad) setPases(parseInt(cantidad));
  }, []);

  const iniciarExperiencia = () => {
    setAbrirSobre(true);

    setTimeout(() => {
      if (audioRef.current) {
        audioRef.current.volume = 0.45;
        audioRef.current.play().catch(() => {});
      }

      setIntroActiva(false);
      setMostrarContenido(true);
    }, 1800);
  };

  return (
    <div className="relative w-full overflow-hidden bg-black text-white">
      <audio ref={audioRef} loop>
        <source src="/TylerShaw.mp3" type="audio/mpeg" />
      </audio>

      <AnimatePresence>
        {introActiva && (
          <motion.section
            className="
              fixed inset-0 z-50
              h-[100dvh]
              flex flex-col items-center justify-center
              px-4 py-4
              overflow-hidden
              text-center
            "
            exit={{ opacity: 0 }}
            transition={{ duration: 0.9 }}
          >
            {/* FONDO */}
            <motion.img
              src="/logoSW.jpg"
              alt=""
              className="
                absolute inset-0
                w-full h-full
                object-cover
                object-[center_15%]
                md:object-center
                select-none pointer-events-none
              "
              draggable={false}
              initial={{ scale: 1.08, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.8, ease: "easeOut" }}
            />

            <div className="absolute inset-0 bg-black/35" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-transparent to-black/75" />

            {/* CONTENIDO */}
            <div
              className="
                relative z-10
                w-full max-w-5xl
                flex flex-col items-center justify-center
                h-full
              "
            >
              {/* TITULOS */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="mb-3 sm:mb-8"
              >
                <div className="flex items-center justify-center gap-3 mb-2 sm:mb-4">
                  <div className="w-9 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#C9A44C]" />
                  <p className="text-[8px] sm:text-xs tracking-[0.42em] sm:tracking-[0.55em] uppercase text-[#F3DFB3]">
                    Nuestra Boda
                  </p>
                  <div className="w-9 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#C9A44C]" />
                </div>

                <h1
                  className="
                    font-cursiveDancing
                    text-[34px]
                    min-[390px]:text-[38px]
                    sm:text-[66px]
                    md:text-[90px]
                    leading-none
                  "
                  style={{
                    background:
                      "linear-gradient(180deg, #ffffff 0%, #F3DFB3 38%, #C9A44C 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "0 8px 35px rgba(0,0,0,0.7)",
                  }}
                >
                  Gisela Guadalupe
                </h1>

                <p className="text-[#C9A44C] text-[19px] sm:text-[34px] md:text-[44px] font-serif italic my-0 sm:my-1">
                  &
                </p>

                <h1
                  className="
                    font-cursiveDancing
                    text-[34px]
                    min-[390px]:text-[38px]
                    sm:text-[66px]
                    md:text-[90px]
                    leading-none
                  "
                  style={{
                    background:
                      "linear-gradient(180deg, #ffffff 0%, #F3DFB3 38%, #C9A44C 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "0 8px 35px rgba(0,0,0,0.7)",
                  }}
                >
                  Omar Venegas
                </h1>

                <div className="mt-2 sm:mt-5 flex flex-col items-center">
                  <div className="w-20 sm:w-28 h-[1px] bg-gradient-to-r from-transparent via-[#C9A44C] to-transparent mb-2 sm:mb-4" />
                  <p className="text-[9px] sm:text-sm tracking-[0.28em] sm:tracking-[0.35em] uppercase text-[#F8F4EB]">
                    10 • Octubre • 2026
                  </p>
                </div>
              </motion.div>

              {/* SOBRE */}
              <motion.div
                onClick={iniciarExperiencia}
                className="
                  relative
                  w-[78vw]
                  max-w-[285px]
                  sm:max-w-[390px]
                  aspect-[390/315]
                  cursor-pointer
                "
                style={{ perspective: 2200 }}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              >
                <motion.div
                  className="absolute inset-0 rounded-[30px] bg-[#C9A44C]/35 blur-3xl scale-110"
                  animate={{ opacity: [0.35, 0.65, 0.35] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                />

                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[75%] h-12 bg-black/55 blur-3xl rounded-full" />

                {/* CUERPO SOBRE */}
                <div
                  className="absolute inset-0 rounded-[24px] sm:rounded-[28px] border overflow-hidden"
                  style={{
                    background: `
                      linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02)),
                      linear-gradient(135deg, #707A55 0%, #4F5A35 45%, #2D331F 100%)
                    `,
                    borderColor: "rgba(201,164,76,0.7)",
                    boxShadow: `
                      0 35px 70px rgba(0,0,0,0.65),
                      inset 0 1px 0 rgba(255,255,255,0.25),
                      inset 0 -16px 35px rgba(0,0,0,0.38)
                    `,
                  }}
                >
                  <div className="absolute inset-0 opacity-[0.08] bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] [background-size:18px_18px]" />
                  <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/25 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-black/25 to-transparent" />
                </div>

                {/* CARTA INTERNA */}
                <motion.div
                  className="
                    absolute left-1/2 top-[8%]
                    -translate-x-1/2
                    w-[78%] h-[58%]
                    rounded-[16px]
                    z-10 overflow-hidden
                    flex items-center justify-center
                    p-4
                  "
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,252,245,0.98), rgba(244,236,220,0.96))",
                    border: "1px solid rgba(201,164,76,0.65)",
                    boxShadow:
                      "0 18px 35px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.9)",
                  }}
                  animate={
                    abrirSobre
                      ? { y: -55, scale: 1.03 }
                      : { y: 0, scale: 1 }
                  }
                  transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="absolute inset-3 border border-[#C9A44C]/45 rounded-[12px]" />

                  <motion.img
                    src="/cartaSW.jpg"
                    alt="Logo interno"
                    className="relative z-10 w-full h-full object-contain select-none pointer-events-none"
                    draggable={false}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 1, delay: 0.35 }}
                  />
                </motion.div>

                {/* TAPA */}
                <motion.div
                  className="absolute top-0 left-0 w-full h-1/2 origin-top z-20"
                  style={{
                    clipPath: "polygon(0 0, 50% 100%, 100% 0)",
                    background: `
                      linear-gradient(to bottom, rgba(255,255,255,0.18), rgba(255,255,255,0.02)),
                      linear-gradient(to bottom, #7C865E, #3F4A2D)
                    `,
                    borderTop: "1px solid rgba(201,164,76,0.8)",
                    boxShadow: "0 25px 45px rgba(0,0,0,0.45)",
                  }}
                  animate={
                    abrirSobre
                      ? { rotateX: -185, y: -2 }
                      : { rotateX: 0, y: 0 }
                  }
                  transition={{ duration: 1.35, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* SELLO LOGO */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none"
                  animate={
                    abrirSobre
                      ? { scale: 0.55, opacity: 0, y: -20 }
                      : { scale: 1, opacity: 1, y: 0 }
                  }
                  transition={{ duration: 0.55 }}
                >
                  <div className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-full flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-[#C9A44C]/45 blur-2xl scale-125" />

                    <div className="absolute inset-0 rounded-full bg-black border-2 border-[#C9A44C] shadow-[0_0_28px_rgba(201,164,76,0.65)] overflow-hidden">
                      <img
                        src="/SW.png"
                        alt="Logo Star Wars"
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                    </div>
                  </div>
                </motion.div>

                {/* ABRIR */}
                <motion.div
                  className="absolute inset-0 flex items-end justify-center pb-5 sm:pb-8 z-40"
                  animate={abrirSobre ? { opacity: 0 } : { opacity: 1 }}
                >
                  <div className="flex flex-col items-center">
                    <p className="text-white/85 tracking-[0.42em] text-[9px] sm:text-[12px] font-light">
                      ABRIR
                    </p>

                    <motion.div
                      className="mt-2 w-5 h-5 sm:w-7 sm:h-7 border-b border-r border-[#C9A44C] rotate-45"
                      animate={{ y: [0, 6, 0], opacity: [0.5, 1, 0.5] }}
                      transition={{ duration: 1.6, repeat: Infinity }}
                    />
                  </div>
                </motion.div>
              </motion.div>

              {/* PASES */}
              <motion.div
                className="relative mt-4 sm:mt-10 flex flex-col items-center"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.4 }}
              >
                <div className="flex items-center justify-center gap-2 mb-1 sm:mb-4">
                  <div className="w-9 sm:w-14 h-[1px] bg-gradient-to-r from-transparent to-[#C9A44C]" />
                  <p className="text-[8px] sm:text-xs tracking-[0.35em] sm:tracking-[0.45em] uppercase text-[#F3DFB3]">
                    Hemos reservado
                  </p>
                  <div className="w-9 sm:w-14 h-[1px] bg-gradient-to-l from-transparent to-[#C9A44C]" />
                </div>

                <span
                  className="text-[38px] sm:text-[68px] md:text-[78px] leading-none font-light"
                  style={{
                    background:
                      "linear-gradient(180deg, #FFFFFF 0%, #F3DFB3 42%, #C9A44C 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "0 8px 30px rgba(0,0,0,0.55)",
                  }}
                >
                  {pases}
                </span>

                <p className="mt-0 sm:mt-2 text-[8px] sm:text-xs tracking-[0.28em] sm:tracking-[0.35em] uppercase text-[#F8F4EB]">
                  Lugares en su honor
                </p>

                <div className="mt-3 sm:mt-6 px-4 sm:px-8 py-2 sm:py-3 rounded-full border border-[#C9A44C]/70 bg-black/30 backdrop-blur-md max-w-[92vw] shadow-[0_0_25px_rgba(201,164,76,0.18)]">
                  <p className="text-[9px] sm:text-[13px] tracking-[0.14em] sm:tracking-[0.16em] text-[#F8F4EB] text-center">
                    Invitado:
                    <span className="ml-2 text-[#F3DFB3] font-cursiveDancing text-[15px] sm:text-[22px] tracking-normal">
                      {invitados}
                    </span>
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.section>
        )}
      </AnimatePresence>

      {/* CONTENIDO DESPUÉS DE ABRIR */}
      <section className="relative w-full min-h-screen overflow-hidden">
        <motion.img
          src="/starwars-bg.jpg"
          alt=""
          className="
            absolute inset-0
            w-full h-full
            object-cover
            object-[center_15%]
            md:object-center
            select-none pointer-events-none
          "
          draggable={false}
          initial={{ opacity: 0, scale: 1.08 }}
          animate={mostrarContenido ? { opacity: 1, scale: 1 } : { opacity: 0 }}
          transition={{ duration: 1.3, ease: "easeOut" }}
        />

        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/80" />

        <motion.div
          className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4 py-20"
          initial={{ opacity: 0, y: 35 }}
          animate={mostrarContenido ? { opacity: 1, y: 0 } : { opacity: 0 }}
          transition={{ duration: 1.2, delay: 0.3 }}
        >
          <p className="text-[11px] sm:text-sm tracking-[0.45em] uppercase text-[#F3DFB3] mb-5">
            Nuestra Boda
          </p>

          <h1
            className="text-[48px] sm:text-[72px] md:text-[100px] leading-none font-cursiveDancing"
            style={{
              background:
                "linear-gradient(180deg, #FFFFFF 0%, #F3DFB3 42%, #C9A44C 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              textShadow: "0 8px 35px rgba(0,0,0,0.75)",
            }}
          >
            Gisela & Omar
          </h1>

          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C9A44C] to-transparent my-7" />

          <p className="text-[12px] sm:text-base tracking-[0.35em] uppercase text-[#F8F4EB] mb-8">
            10 • Octubre • 2026
          </p>

          <Countdown targetDate="2026-10-10T00:00:00" />
        </motion.div>
      </section>
    </div>
  );
}