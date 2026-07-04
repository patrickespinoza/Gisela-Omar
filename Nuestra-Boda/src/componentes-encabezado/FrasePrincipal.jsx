"use client";

import { motion } from "framer-motion";

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1.1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function FrasePremium() {
  return (
    <motion.section
      variants={fadeUp}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.35 }}
      className="relative flex flex-col items-center justify-center py-28 sm:py-32 px-6 text-center overflow-hidden bg-[#4F5A35]"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-[#6F7756]/40 via-[#4F5A35] to-[#252B1E]" />

      <motion.div
        className="absolute -top-28 -left-28 w-[360px] h-[360px] rounded-full blur-3xl bg-[#C9A44C]/20"
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.16, 0.3, 0.16],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute -bottom-24 -right-24 w-[320px] h-[320px] rounded-full blur-3xl bg-white/10"
        animate={{
          scale: [1, 1.18, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] [background-size:18px_18px]" />

      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[82%] h-[1px] bg-gradient-to-r from-transparent via-[#C9A44C]/60 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[82%] h-[1px] bg-gradient-to-r from-transparent via-[#C9A44C]/45 to-transparent" />

      <motion.div
        className="relative z-10 max-w-5xl rounded-tl-[70px] rounded-br-[70px] border border-[#C9A44C]/45 bg-[#F8F4EB]/95 px-6 py-14 sm:px-12 sm:py-18 shadow-[0_30px_90px_rgba(0,0,0,0.28)]"
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.1, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <motion.div
          className="mb-4"
          animate={{
            opacity: [0.45, 0.8, 0.45],
            y: [0, -4, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-[68px] sm:text-[86px] leading-none font-serif text-[#C9A44C]/35">
            “
          </span>
        </motion.div>

        <motion.p
          className="font-serif text-[22px] sm:text-[30px] md:text-[40px] leading-relaxed text-[#2F3624]"
          animate={{
            opacity: [0.92, 1, 0.92],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          El enamoramiento es el camino al lado del amor,
          <br className="hidden sm:block" />
          el enamoramiento lleva a la pasión.
          <br />
          La pasión lleva al romance.
          <br className="hidden sm:block" />
          El romance lleva al compromiso
          <br />
          y este al lado del amor.
        </motion.p>

        <motion.div
          className="w-28 h-[1px] mx-auto my-9 bg-gradient-to-r from-transparent via-[#C9A44C] to-transparent"
          animate={{
            width: ["90px", "140px", "90px"],
            opacity: [0.55, 1, 0.55],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.p
          className="text-[10px] sm:text-[12px] uppercase tracking-[0.45em] text-[#6F7756]"
          animate={{
            letterSpacing: ["0.38em", "0.5em", "0.38em"],
            opacity: [0.7, 1, 0.7],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          Nuestro camino al amor
        </motion.p>
      </motion.div>
    </motion.section>
  );
}