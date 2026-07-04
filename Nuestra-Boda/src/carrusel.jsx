import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const images = [
  "/carrusel.JPG",
  "/carrusel2.JPG",
  "/carrusel3.JPG",
  "/carrusel4.JPG",
];

export default function Carousel() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4500);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="relative overflow-hidden bg-[#4F5A35] px-4 py-24 sm:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-[#6F7756] via-[#4F5A35] to-[#252B1E]" />

      <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,#ffffff_1px,transparent_1px)] [background-size:22px_22px]" />

      <motion.div
        className="absolute -top-32 -left-28 w-[380px] h-[380px] rounded-full bg-[#C9A44C]/20 blur-3xl"
        animate={{ scale: [1, 1.15, 1], opacity: [0.14, 0.28, 0.14] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="absolute -bottom-32 -right-28 w-[340px] h-[340px] rounded-full bg-white/10 blur-3xl"
        animate={{ scale: [1, 1.18, 1], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        className="relative z-10 mx-auto max-w-6xl"
        initial={{ opacity: 0, y: 55 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
        viewport={{ once: true, amount: 0.25 }}
      >
        {/* TÍTULO */}
        <div className="text-center mb-12 sm:mb-14">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.55em] text-[#E6D3A3] mb-4">
            Nuestros Momentos
          </p>

          <h2 className="font-cursiveDancing text-[54px] sm:text-[78px] md:text-[92px] text-[#F8F4EB] leading-none">
            Galería
          </h2>

          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C9A44C] to-transparent mx-auto mt-6" />
        </div>

        {/* CARRUSEL */}
        <motion.div
          className="relative mx-auto w-full max-w-5xl"
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          {/* CONTENEDOR IMAGEN */}
          <div
            className="
              relative
              mx-auto
              w-full

              h-[75svh]
              sm:h-[520px]
              md:h-[620px]

              overflow-hidden
              rounded-3xl
              bg-[#252B1E]
              shadow-[0_35px_90px_rgba(0,0,0,0.38)]
            "
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={index}
                src={images[index]}
                alt={`Imagen ${index + 1}`}
                className="
                  absolute inset-0
                  w-full h-full

                  object-contain
                  sm:object-cover

                  select-none
                  pointer-events-none
                "
                draggable={false}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{
                  duration: 1.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              />
            </AnimatePresence>

            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 pointer-events-none" />
          </div>

          {/* INDICADORES */}
          <div className="flex justify-center mt-8 gap-3">
            {images.map((_, i) => (
              <motion.button
                key={i}
                type="button"
                onClick={() => setIndex(i)}
                className="relative overflow-hidden rounded-full"
                animate={{ scale: index === i ? 1.15 : 1 }}
                transition={{ duration: 0.35 }}
              >
                <div
                  className={`h-[9px] rounded-full transition-all duration-500 ${
                    index === i ? "w-10" : "w-2"
                  }`}
                  style={{
                    background:
                      index === i
                        ? "linear-gradient(90deg, #E6D3A3, #C9A44C)"
                        : "rgba(248,244,235,0.35)",
                  }}
                />
              </motion.button>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}