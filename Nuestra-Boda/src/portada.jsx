import React, { useEffect, useRef, useState } from "react";
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

  const iniciarExperiencia = async () => {
  if (abrirSobre) return;

  setAbrirSobre(true);

  if (audioRef.current) {
    try {
      audioRef.current.volume = 0.45;
      audioRef.current.muted = false;
      await audioRef.current.play();
    } catch (error) {
      console.log("El navegador bloqueó el audio:", error);
    }
  }

  setTimeout(() => {
    setIntroActiva(false);
    setMostrarContenido(true);
  }, 1800);
};

  return (
    <div className="relative w-full overflow-hidden bg-black text-white">
      <audio ref={audioRef} loop playsInline preload="auto">
  <source src="/musica.mp3" type="audio/mpeg" />
</audio>

      <AnimatePresence>
        {introActiva && (
          <motion.section
            className="
              fixed inset-0 z-50
              h-[100dvh]
              overflow-hidden
              flex items-center justify-center
              px-4
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
                object-[center_16%]
                md:object-center
                select-none pointer-events-none
              "
              draggable={false}
              initial={{ opacity: 0, scale: 1.08 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.7, ease: "easeOut" }}
            />

            <div className="absolute inset-0 bg-black/45" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/15 to-black/90" />

            {/* BRILLOS */}
            <motion.div
              className="absolute top-8 left-8 w-40 h-40 rounded-full bg-[#C9A44C]/20 blur-3xl"
              animate={{ opacity: [0.2, 0.55, 0.2], scale: [1, 1.2, 1] }}
              transition={{ duration: 5, repeat: Infinity }}
            />

            <motion.div
              className="absolute bottom-20 right-8 w-52 h-52 rounded-full bg-white/10 blur-3xl"
              animate={{ opacity: [0.12, 0.32, 0.12], scale: [1, 1.15, 1] }}
              transition={{ duration: 6, repeat: Infinity }}
            />

            {/* CONTENEDOR */}
            <div
              className="
                relative z-10
                w-full max-w-5xl
                h-full
                flex flex-col items-center justify-center
                pt-3 pb-4
              "
            >
              {/* LOGO SUPERIOR */}
              <motion.div
                className="mb-2 flex flex-col items-center"
                initial={{ opacity: 0, y: -18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
              >
                <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border border-[#C9A44C]/70 bg-black/45 backdrop-blur-sm flex items-center justify-center shadow-[0_0_25px_rgba(201,164,76,0.35)] overflow-hidden">
                  <img
                    src="/SWblack.png"
                    alt="Logo Star Wars"
                    className="w-full h-full object-cover"
                    draggable={false}
                  />
                </div>

                <div className="mt-2 flex items-center justify-center gap-3">
                  <div className="w-10 sm:w-20 h-[1px] bg-gradient-to-r from-transparent to-[#C9A44C]" />
                  <p className="text-[8px] sm:text-[12px] tracking-[0.5em] uppercase text-[#F3DFB3]">
                    Nuestra Boda
                  </p>
                  <div className="w-10 sm:w-20 h-[1px] bg-gradient-to-l from-transparent to-[#C9A44C]" />
                </div>
              </motion.div>

              {/* NOMBRES */}
              <motion.div
                className="mb-3 sm:mb-6"
                initial={{ opacity: 0, y: 22 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.15 }}
              >
                <h1
                  className="
                    font-serif
                    tracking-[0.08em]
                    text-[44px]
                    min-[390px]:text-[50px]
                    sm:text-[84px]
                    md:text-[75px]
                    leading-[0.86]
                    uppercase
                  "
                  style={{
                    background:
                      "linear-gradient(180deg, #ffffff 0%, #E9D7A6 42%, #B99745 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "0 10px 36px rgba(0,0,0,0.75)",
                  }}
                >
                  Gisela
                </h1>

                <p className="font-cursiveDancing text-[24px] sm:text-[44px] md:text-[54px] leading-none text-[#E9D7A6] -mt-1 sm:-mt-2">
                  Villagómez
                </p>

                <div className="my-1 sm:my-3 flex items-center justify-center">
                  <div className="w-16 sm:w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C9A44C] to-transparent" />
                  <span className="mx-3 w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border border-[#C9A44C]/70 bg-black/40 text-[#F3DFB3] font-serif text-[20px] sm:text-[26px]">
                    &
                  </span>
                  <div className="w-16 sm:w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C9A44C] to-transparent" />
                </div>

                <h1
                  className="
                    font-serif
                    tracking-[0.08em]
                    text-[44px]
                    min-[390px]:text-[50px]
                    sm:text-[84px]
                    md:text-[75px]
                    leading-[0.86]
                    uppercase
                  "
                  style={{
                    background:
                      "linear-gradient(180deg, #ffffff 0%, #E9D7A6 42%, #B99745 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    textShadow: "0 10px 36px rgba(0,0,0,0.75)",
                  }}
                >
                  Omar
                </h1>

                <p className="font-cursiveDancing text-[24px] sm:text-[44px] md:text-[54px] leading-none text-[#E9D7A6] -mt-1 sm:-mt-2">
                  Venegas
                </p>

                <p className="mt-3 sm:mt-5 text-[9px] sm:text-sm tracking-[0.35em] uppercase text-[#F8F4EB]">
                  10 • Octubre • 2026
                </p>
              </motion.div>

              {/* SOBRE */}
              <motion.div
                onClick={iniciarExperiencia}
                className="
                  relative
                  w-[80vw]
                  max-w-[310px]
                  sm:max-w-[450px]
                  aspect-[450/330]
                  cursor-pointer
                  mb-2
                "
                style={{ perspective: 2200 }}
                initial={{ opacity: 0, y: 36, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 1, delay: 0.25 }}
              >
                <motion.div
                  className="absolute inset-0 rounded-[30px] bg-[#C9A44C]/35 blur-3xl scale-110"
                  animate={{ opacity: [0.3, 0.6, 0.3] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />

                <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[78%] h-14 bg-black/65 blur-3xl rounded-full" />

                {/* CUERPO */}
                <div
                  className="absolute inset-0 rounded-[24px] border overflow-hidden"
                  style={{
                    background: `
                      linear-gradient(145deg, rgba(255,255,255,0.12), rgba(255,255,255,0.02)),
                      linear-gradient(135deg, #7A835B 0%, #4F5A35 45%, #252B1E 100%)
                    `,
                    borderColor: "rgba(201,164,76,0.75)",
                    boxShadow:
                      "0 42px 80px rgba(0,0,0,0.65), inset 0 1px 0 rgba(255,255,255,0.25), inset 0 -18px 36px rgba(0,0,0,0.42)",
                  }}
                >
                  <div className="absolute inset-0 opacity-[0.09] bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] [background-size:18px_18px]" />
                  <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/25 to-transparent" />
                </div>

                {/* CARTA */}
                <motion.div
                  className="
                    absolute left-1/2 top-[6%]
                    -translate-x-1/2
                    w-[78%] h-[64%]
                    rounded-[16px]
                    z-10 overflow-hidden
                    flex items-center justify-center
                    p-4
                  "
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(255,252,245,0.98), rgba(239,230,210,0.96))",
                    border: "1px solid rgba(201,164,76,0.65)",
                    boxShadow:
                      "0 18px 35px rgba(0,0,0,0.28), inset 0 1px 0 rgba(255,255,255,0.9)",
                  }}
                  animate={
                    abrirSobre
                      ? { y: -58, scale: 1.03 }
                      : { y: 0, scale: 1 }
                  }
                  transition={{ duration: 1.15, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="absolute inset-3 rounded-[12px] border border-[#C9A44C]/45" />

                  <motion.img
                    src="/cartaSW.jpg"
                    alt="Logo interno"
                    className="relative z-10 w-full h-full object-contain select-none pointer-events-none"
                    draggable={false}
                    initial={{ opacity: 0, scale: 0.86 }}
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
                      linear-gradient(to bottom, #818B61, #3E492D)
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

                {/* LINEAS SOBRE */}
                <div className="absolute inset-0 rounded-[24px] overflow-hidden pointer-events-none z-30">
                  <div className="absolute bottom-0 left-0 w-1/2 h-1/2 border-t border-r border-[#C9A44C]/50 rotate-[26deg] origin-bottom-left" />
                  <div className="absolute bottom-0 right-0 w-1/2 h-1/2 border-t border-l border-[#C9A44C]/50 -rotate-[26deg] origin-bottom-right" />
                </div>

                {/* SELLO */}
                <motion.div
                  className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none"
                  animate={
                    abrirSobre
                      ? { scale: 0.55, opacity: 0, y: -20 }
                      : { scale: 1, opacity: 1, y: 0 }
                  }
                  transition={{ duration: 0.55 }}
                >
                  <div className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-full">
                    <div className="absolute inset-0 rounded-full bg-[#C9A44C]/45 blur-2xl scale-125" />

                    <div className="absolute inset-0 rounded-full bg-black border-2 border-[#C9A44C] shadow-[0_0_28px_rgba(201,164,76,0.65)] overflow-hidden">
                      <img
                        src="/selloimperio.png"
                        alt="Logo Star Wars"
                        className="w-full h-full object-cover"
                        draggable={false}
                      />
                    </div>
                  </div>
                </motion.div>

                {/* ABRIR */}
                <motion.div
                  className="absolute inset-0 flex items-end justify-center pb-5 sm:pb-7 z-50"
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

              {/* SABLE */}
              <motion.div
                className="relative my-2 sm:my-4 w-[84vw] max-w-[460px] h-[10px] flex items-center justify-center"
                initial={{ opacity: 0, scaleX: 0.5 }}
                animate={{ opacity: 1, scaleX: 1 }}
                transition={{ duration: 1, delay: 0.45 }}
              >
                <div className="absolute left-0 w-12 h-3 rounded bg-gradient-to-r from-[#1b1b1b] via-[#6b6254] to-[#222]" />
                <div className="absolute left-10 right-0 h-[3px] bg-[#F3DFB3] shadow-[0_0_18px_rgba(243,223,179,0.95)] rounded-full" />
              </motion.div>

              {/* PASES */}
              <motion.div
                className="flex flex-col items-center"
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.55 }}
              >
                <div className="flex items-center justify-center gap-2 mb-1">
                  <div className="w-8 sm:w-14 h-[1px] bg-gradient-to-r from-transparent to-[#C9A44C]" />
                  <p className="text-[8px] sm:text-xs tracking-[0.38em] uppercase text-[#F3DFB3]">
                    Hemos reservado
                  </p>
                  <div className="w-8 sm:w-14 h-[1px] bg-gradient-to-l from-transparent to-[#C9A44C]" />
                </div>

                <span
                  className="text-[36px] sm:text-[68px] leading-none font-light"
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

                <p className="mt-0 text-[8px] sm:text-xs tracking-[0.3em] uppercase text-[#F8F4EB]">
                  Lugares en su honor
                </p>

                <div
                  className="
                    mt-3
                    px-4 sm:px-8
                    py-2 sm:py-3
                    rounded-[18px]
                    border border-[#C9A44C]/70
                    bg-[#252B1E]/80
                    backdrop-blur-md
                    max-w-[92vw]
                    shadow-[0_0_25px_rgba(201,164,76,0.18)]
                    flex items-center gap-3
                  "
                >
                  <div className="hidden sm:flex w-9 h-9 rounded-full border border-[#C9A44C]/60 overflow-hidden">
                    <img
                      src="/logoSWS.webp"
                      alt=""
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <p className="text-[9px] sm:text-[13px] tracking-[0.14em] text-[#F8F4EB] text-center">
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
<section className="relative w-full h-[100svh] md:h-screen overflow-hidden bg-black">
  <motion.img
    src="/portada.JPG"
    alt=""
    className="
      absolute inset-0
      w-full h-full

      object-cover
      object-[center_10%]

      md:object-cover
      md:object-[center_38%]

      lg:object-[center_34%]
      xl:object-[center_32%]

      select-none
      pointer-events-none
    "
    draggable={false}
    initial={{ opacity: 0 }}
    animate={mostrarContenido ? { opacity: 1 } : { opacity: 0 }}
    transition={{ duration: 1.3, ease: 'easeOut' }}
  />

  <div className="absolute inset-0 bg-black/30 md:bg-black/20" />
  <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/90" />

  <motion.div
    className="
      relative z-10
      h-full

      flex
      flex-col
      items-center
      justify-end

      text-center
      px-6

      pb-10
      sm:pb-14
      md:pb-20
      lg:pb-24
    "
    initial={{ opacity: 0, y: 35 }}
    animate={mostrarContenido ? { opacity: 1, y: 0 } : { opacity: 0 }}
    transition={{ duration: 1.2, delay: 0.3 }}
  >
    <p className="text-[10px] sm:text-sm tracking-[0.42em] uppercase text-[#F3DFB3] mb-4">
      Nuestra Boda
    </p>

    <h1
      className="text-[44px] sm:text-[70px] md:text-[96px] leading-none font-cursiveDancing"
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

    <div className="w-28 md:w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C9A44C] to-transparent my-5 md:my-7" />

    <p className="text-[11px] sm:text-base tracking-[0.3em] md:tracking-[0.35em] uppercase text-[#F8F4EB] mb-6 md:mb-8">
      10 • Octubre • 2026
    </p>

    <Countdown targetDate="2026-10-10T00:00:00" />
  </motion.div>
</section>
    </div>
  );
}