"use client";

import { motion } from "framer-motion";

const eventos = [
  {
    hora: "13:30",
    titulo: "Ceremonia Religiosa",
    descripcion: "El inicio de nuestra historia ante Dios y nuestros seres queridos.",
  },
  {
    hora: "16:00",
    titulo: "Recepción",
    lugar: "Salon Jardín Loma Linda",
    descripcion: "Les recibiremos con alegría para compartir juntos este día tan especial.",
  },
  {
    hora: "16:30",
    titulo: "Ceremonia Civil",
    descripcion: "Uniremos nuestras vidas ante la ley, sellando para siempre nuestro compromiso de amor.",
  },
  {
    hora: "17:00",
    titulo: "Drunch",
    descripcion: "Disfrutemos de una tarde llena de sabores, sonrisas y momentos inolvidables.",
  },
  {
    hora: "18:30",
    titulo: "Fiesta",
    descripcion: "Que la música, el baile y la felicidad nos acompañen para celebrar el comienzo de nuestra nueva vida juntos.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 55 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function ItinerarioTimelinePremium() {
  return (
    <section className="relative overflow-hidden bg-[#4F5A35] px-5 py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#6F7756] via-[#4F5A35] to-[#252B1E]" />

      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] [background-size:22px_22px]" />

      <motion.div
        className="absolute -top-32 -right-28 w-[380px] h-[380px] rounded-full bg-[#C9A44C]/20 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.14, 0.28, 0.14] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -bottom-32 -left-28 w-[380px] h-[380px] rounded-full bg-white/10 blur-3xl"
        animate={{ scale: [1, 1.18, 1], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* TITULO */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.55em] text-[#E6D3A3] mb-4">
            Itinerario
          </p>

          <h2 className="font-cursiveDancing text-[54px] sm:text-[78px] md:text-[92px] text-[#F8F4EB] leading-none">
            Nuestro Día
          </h2>

          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C9A44C] to-transparent mx-auto mt-6" />
        </motion.div>

        {/* CONTENEDOR */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.2 }}
          className="relative rounded-[38px] sm:rounded-tl-[90px] sm:rounded-br-[90px] border border-[#C9A44C]/50 bg-[#F8F4EB] shadow-[0_35px_100px_rgba(0,0,0,0.35)] overflow-hidden px-5 py-12 sm:px-10 sm:py-16"
        >
          <div className="absolute inset-4 border border-[#C9A44C]/25 rounded-[28px] sm:rounded-tl-[76px] sm:rounded-br-[76px] pointer-events-none" />

          <div className="relative z-10 flex flex-col gap-0">
            {eventos.map((evento, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.9,
                  delay: index * 0.12,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="grid grid-cols-1 md:grid-cols-[160px_1fr] gap-6 md:gap-10 py-9 sm:py-11">
                  {/* HORA */}
                  <div className="flex md:flex-col items-center justify-center md:justify-start gap-4 md:gap-3 text-center">
                    <div className="w-3 h-3 rotate-45 bg-[#C9A44C] shadow-[0_0_18px_rgba(201,164,76,0.55)]" />

                    <p
                      className="text-[34px] sm:text-[42px] md:text-[46px] leading-none font-light text-[#4F5A35]"
                      style={{
                        fontFamily: "serif",
                      }}
                    >
                      {evento.hora}
                    </p>
                  </div>

                  {/* INFO */}
                  <div className="text-center md:text-left">
                    <p
                className="text-[25px] uppercase tracking-[0.45em] text-[#C9A44C] mb-3 notranslate"
                translate="no"
                 >
                 {evento.titulo}
                 </p>

                    <h3 className="font-cursiveDancing text-[25px] sm:text-[30px] text-[#4F5A35] leading-none mb-3">
                      {evento.lugar}
                    </h3>

                    <p className="font-serif text-[15px] sm:text-[18px] leading-relaxed text-[#5B6247] max-w-2xl mx-auto md:mx-0">
                      {evento.descripcion}
                    </p>
                  </div>
                </div>

                {index !== eventos.length - 1 && (
                  <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-[#C9A44C]/50 to-transparent" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}