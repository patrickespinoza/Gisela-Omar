"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function NoviosPadres() {
  return (
    <section className="relative overflow-hidden bg-[#4F5A35] px-5 py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#6F7756] via-[#4F5A35] to-[#252B1E]" />

      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] [background-size:22px_22px]" />

      <motion.div
        className="absolute -top-32 -left-28 w-[360px] h-[360px] rounded-full bg-[#C9A44C]/20 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.14, 0.28, 0.14] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -bottom-32 -right-28 w-[380px] h-[380px] rounded-full bg-white/10 blur-3xl"
        animate={{ scale: [1, 1.18, 1], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative z-10 mx-auto max-w-6xl"
      >
        <div className="text-center mb-12">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.55em] text-[#E6D3A3] mb-4">
            Con la bendición de nuestros padres
          </p>

          <h2 className="font-cursiveDancing text-[52px] sm:text-[74px] md:text-[88px] text-[#F8F4EB] leading-none">
            Nos Casamos
          </h2>

          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C9A44C] to-transparent mx-auto mt-6" />
        </div>

        <div className="relative rounded-[38px] sm:rounded-tl-[90px] sm:rounded-br-[90px] border border-[#C9A44C]/50 bg-[#F8F4EB] shadow-[0_35px_100px_rgba(0,0,0,0.35)] overflow-hidden">
          <div className="absolute inset-4 border border-[#C9A44C]/25 rounded-[28px] sm:rounded-tl-[76px] sm:rounded-br-[76px] pointer-events-none" />

          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[70%] h-[1px] bg-gradient-to-r from-transparent via-white to-transparent" />

          <div className="relative grid grid-cols-1 md:grid-cols-2">
            {/* NOVIA */}
            <motion.div
              initial={{ opacity: 0, x: -45 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="relative px-6 py-14 sm:px-12 sm:py-16 text-center"
            >
              <p className="text-[15px] uppercase tracking-[0.5em] text-[#C9A44C] mb-5">
                La Novia
              </p>

              <h3 className="font-cursiveDancing text-[48px] sm:text-[64px] text-[#4F5A35] leading-none mb-8">
                Gisela Guadalupe
                <br />
                Villagómez Guevara
              </h3>

              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C9A44C] to-transparent mx-auto mb-7" />

              <p className="text-[10px] uppercase tracking-[0.36em] text-[#6F7756] mb-5">
                Padres de la novia
              </p>

              <div className="space-y-3">
                <p className="font-serif text-[20px] sm:text-[24px] text-[#252B1E]">
                  Luisa Guevara Ventura
                </p>
                <p className="font-serif text-[20px] sm:text-[24px] text-[#252B1E]">
                  Mauro Villagómez Rendón +
                </p>
              </div>
            </motion.div>

            {/* DIVISOR */}
            <div className="hidden md:block absolute left-1/2 top-12 bottom-12 w-[1px] bg-gradient-to-b from-transparent via-[#C9A44C]/70 to-transparent" />

            {/* NOVIO */}
            <motion.div
              initial={{ opacity: 0, x: 45 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
              viewport={{ once: true }}
              className="relative px-6 py-14 sm:px-12 sm:py-16 text-center"
            >
              <p className="text-[15px] uppercase tracking-[0.5em] text-[#C9A44C] mb-5">
                El Novio
              </p>

              <h3 className="font-cursiveDancing text-[48px] sm:text-[64px] text-[#4F5A35] leading-none mb-8">
                Omar
                <br />
                Venegas Gutiérrez
              </h3>

              <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C9A44C] to-transparent mx-auto mb-7" />

              <p className="text-[10px] uppercase tracking-[0.36em] text-[#6F7756] mb-5">
                Padres del novio
              </p>

              <div className="space-y-3">
                <p className="font-serif text-[20px] sm:text-[24px] text-[#252B1E]">
                  María Laura Gutiérrez Camargo +
                </p>
                <p className="font-serif text-[20px] sm:text-[24px] text-[#252B1E]">
                  Rolando Venegas Martínez
                </p>
              </div>
            </motion.div>
          </div>

          <div className="relative px-6 pb-12 text-center">
            <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C9A44C] to-transparent mx-auto mb-6" />

            <p className="font-serif text-[18px] sm:text-[22px] italic text-[#4F5A35]">
              Unidos por amor, acompañados por quienes nos dieron la vida.
            </p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}