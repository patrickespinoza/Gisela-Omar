"use client";

import { motion } from "framer-motion";

const eventos = [
  {
    titulo: "Ceremonia",
    dia: "Sabado",
    fecha: "10",
    mesAnio: "Octubre 2026",
    hora: "13:30",
    lugar: "Templo de la Santa Veracruz",
    direccion: "Portal 20 de Noviembre 113, Centro, 50000 Toluca de Lerdo, Méx.",
    ubicacion: "https://maps.app.goo.gl/Tr3q8chbqLDRcCE1A",
  },
  {
    titulo: "Salon",
    dia: "Sabado",
    fecha: "10",
    mesAnio: "Octubre 2026",
    hora: "16:00",
    lugar: "Salón Loma Linda Jardin. Salón Social",
    direccion: "Manzana 002, 52160 Metepec, Méx.",
    ubicacion: "https://maps.app.goo.gl/Q95ab9xy6FTLcUYQ6",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 55 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
};

function EventoCard({ evento, index }) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: index * 0.15 }}
      className="relative overflow-hidden rounded-[36px] sm:rounded-tl-[80px] sm:rounded-br-[80px] px-7 py-12 sm:px-10 sm:py-14 text-center bg-[#F8F4EB] border border-[#C9A44C]/50 shadow-[0_28px_80px_rgba(0,0,0,0.28)]"
    >
      <div className="absolute inset-4 border border-[#C9A44C]/25 rounded-[28px] sm:rounded-tl-[65px] sm:rounded-br-[65px] pointer-events-none" />

      <div className="absolute -top-20 -right-20 w-52 h-52 rounded-full bg-[#C9A44C]/15 blur-3xl" />
      <div className="absolute -bottom-20 -left-20 w-52 h-52 rounded-full bg-[#4F5A35]/15 blur-3xl" />

      <div className="relative z-10">
        <p className="uppercase text-[10px] sm:text-xs tracking-[0.5em] text-[#6F7756] mb-7">
          {evento.titulo}
        </p>

        <div className="flex justify-center items-center mb-9">
          <div className="w-20 h-[1px] bg-gradient-to-r from-transparent to-[#C9A44C]" />

          <div className="relative mx-5">
            <div className="absolute inset-0 blur-xl bg-[#C9A44C]/30 scale-150 rounded-full" />
            <div className="relative w-3 h-3 rotate-45 bg-[#C9A44C] shadow-[0_0_14px_rgba(201,164,76,0.55)]" />
          </div>

          <div className="w-20 h-[1px] bg-gradient-to-l from-transparent to-[#C9A44C]" />
        </div>

        <h2 className="font-serif text-[25px] sm:text-[32px] leading-tight text-[#2F3624] tracking-[0.08em]">
          {evento.dia}
          <br />

          <span
            className="text-[62px] sm:text-[82px] leading-none"
            style={{
              background:
                "linear-gradient(180deg, #D8BE73 0%, #C9A44C 48%, #8A6A20 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            {evento.fecha}
          </span>

          <br />

          <span className="tracking-[0.32em] uppercase text-[12px] sm:text-[14px] text-[#4F5A35]">
            {evento.mesAnio}
          </span>
        </h2>

        <div className="w-28 h-[1px] mx-auto my-8 bg-gradient-to-r from-transparent via-[#C9A44C] to-transparent" />

        <p className="text-[10px] uppercase tracking-[0.42em] text-[#6F7756] mb-3">
          Hora
        </p>

        <p className="text-[34px] sm:text-[42px] font-light text-[#252B1E] mb-7">
          {evento.hora}
        </p>

        <p className="font-cursiveDancing text-[34px] sm:text-[44px] text-[#4F5A35] leading-none mb-4">
          {evento.lugar}
        </p>

        <p className="font-serif text-[15px] sm:text-[17px] leading-relaxed text-[#5B6247] max-w-md mx-auto">
          {evento.direccion}
        </p>

        <motion.a
          href={evento.ubicacion}
          target="_blank"
          rel="noopener noreferrer"
          className="relative inline-flex items-center justify-center overflow-hidden mt-10 px-9 py-4 rounded-full bg-[#4F5A35] shadow-[0_15px_35px_rgba(79,90,53,0.32)] border border-[#C9A44C]/50"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
        >
          <motion.div
            className="absolute top-0 left-[-120%] w-[120%] h-full bg-white/20 skew-x-12"
            animate={{ left: ["-120%", "140%"] }}
            transition={{
              duration: 3.2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          <span className="relative z-10 uppercase tracking-[0.32em] text-[11px] text-[#F8F4EB]">
            Ver ubicación
          </span>
        </motion.a>
      </div>
    </motion.div>
  );
}

export default function EventoDireccion() {
  return (
    <section className="relative overflow-hidden px-5 py-24 sm:py-32 bg-[#4F5A35]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#6F7756] via-[#4F5A35] to-[#252B1E]" />
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] [background-size:22px_22px]" />

      <motion.div
        className="absolute -top-32 -left-28 w-[380px] h-[380px] rounded-full bg-[#C9A44C]/20 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.14, 0.28, 0.14] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.55em] text-[#E6D3A3] mb-4">
            Acompáñanos a celebrar
          </p>

          <h2 className="font-cursiveDancing text-[52px] sm:text-[76px] md:text-[90px] text-[#F8F4EB] leading-none">
            Nuestro Gran Día
          </h2>

          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C9A44C] to-transparent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
          {eventos.map((evento, index) => (
            <EventoCard key={index} evento={evento} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}