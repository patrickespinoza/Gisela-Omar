import React from "react";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 55 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function DressCodePremium() {
  return (
    <section className="relative overflow-hidden bg-[#4F5A35] px-5 py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#6F7756] via-[#4F5A35] to-[#252B1E]" />
      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] [background-size:22px_22px]" />

      <motion.div
        className="absolute -top-32 -left-28 w-[380px] h-[380px] rounded-full bg-[#C9A44C]/20 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.14, 0.28, 0.14] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-6xl"
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
      >
        <div className="text-center mb-14">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.55em] text-[#E6D3A3] mb-4">
            Detalles del evento
          </p>

          <h2 className="font-cursiveDancing text-[54px] sm:text-[78px] md:text-[92px] text-[#F8F4EB] leading-none">
            Código de Vestimenta
          </h2>

          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C9A44C] to-transparent mx-auto mt-6" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">
          {/* IMAGEN DRESSCODE */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -45 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <div className="absolute -inset-4 border border-[#C9A44C]/35 rounded-[34px] sm:rounded-tl-[90px] sm:rounded-br-[90px]" />

            <motion.img
              src="/dresscode.png"
              alt="Código de vestimenta"
              className="
                relative z-10
                w-full
                max-h-[720px]
                object-contain
                rounded-[28px]
                sm:rounded-tl-[80px]
                sm:rounded-br-[80px]
                shadow-[0_35px_100px_rgba(0,0,0,0.35)]
                select-none
                pointer-events-none
              "
              draggable={false}
              animate={{ y: [0, -7, 0] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {/* TEXTO */}
          <motion.div
            className="text-center lg:text-left"
            initial={{ opacity: 0, x: 45 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.1 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] uppercase tracking-[0.45em] text-[#E6D3A3] mb-4">
              Vestimenta
            </p>

            <h3 className="font-serif text-[42px] sm:text-[56px] text-[#F8F4EB] leading-none mb-7">
              Formal
            </h3>

            <p className="font-serif text-[16px] sm:text-[19px] leading-relaxed text-[#F8F4EB]/90 max-w-xl mx-auto lg:mx-0">
              Agradecemos evitar vestimenta en tonos blanco, ivory, beige,
              colores claros y verde olivo, para conservar la armonía de nuestra
              celebración.
            </p>

            <div className="w-28 h-[1px] bg-gradient-to-r from-transparent via-[#C9A44C] to-transparent mx-auto lg:mx-0 my-9" />

            <div className="grid grid-cols-2 gap-5 max-w-md mx-auto lg:mx-0">
              <div className="rounded-[28px] border border-[#C9A44C]/45 bg-[#F8F4EB]/95 px-5 py-7 text-center shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#6F7756] mb-3">
                  Caballeros
                </p>
                <p className="font-cursiveDancing text-[32px] text-[#4F5A35]">
                  Formal
                </p>
              </div>

              <div className="rounded-[28px] border border-[#C9A44C]/45 bg-[#F8F4EB]/95 px-5 py-7 text-center shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
                <p className="text-[10px] uppercase tracking-[0.35em] text-[#6F7756] mb-3">
                  Damas
                </p>
                <p className="font-cursiveDancing text-[32px] text-[#4F5A35]">
                  Formal
                </p>
              </div>
            </div>

            <motion.div
              className="mt-12 rounded-[34px] border border-[#C9A44C]/50 bg-[#F8F4EB] px-6 py-8 text-center lg:text-left shadow-[0_25px_70px_rgba(0,0,0,0.25)]"
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <p className="text-[10px] uppercase tracking-[0.45em] text-[#6F7756] mb-4">
                Celebración para adultos
              </p>

              <p className="font-serif text-[16px] sm:text-[19px] leading-relaxed text-[#2F3624]">
                Aunque adoramos a los más pequeños, nuestra boda será un evento solo para adultos. ¡Esperamos que nos puedan acompañar!
              </p>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}