import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 55 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function AlbumCompartido() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="relative overflow-hidden bg-[#4F5A35] px-5 py-24 sm:py-32">
        <div className="absolute inset-0 bg-gradient-to-b from-[#6F7756] via-[#4F5A35] to-[#252B1E]" />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="relative z-10 mx-auto max-w-4xl text-center"
        >
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.55em] text-[#E6D3A3] mb-4">
            Comparte tus recuerdos
          </p>

          <h2 className="font-cursiveDancing text-[54px] sm:text-[78px] text-[#F8F4EB] leading-none">
            Álbum Compartido
          </h2>

          <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C9A44C] to-transparent mx-auto mt-6 mb-12" />

          <div className="relative bg-[#F8F4EB] rounded-[36px] border border-[#C9A44C]/50 shadow-[0_35px_100px_rgba(0,0,0,0.35)] p-8 sm:p-12 overflow-hidden">
            <p className="font-serif text-[17px] sm:text-[21px] leading-relaxed text-[#2F3624]">
              Sube tus fotos del evento y revive cada momento especial junto a nosotros.
            </p>

            <motion.button
              onClick={() => setOpen(true)}
              className="mt-10 bg-[#4F5A35] text-[#F8F4EB] px-8 py-4 rounded-full border border-[#C9A44C]/60 shadow-lg uppercase tracking-[0.25em] text-[11px]"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.97 }}
            >
              Ir al Álbum
            </motion.button>
          </div>
        </motion.div>
      </section>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-md flex items-center justify-center z-[999] px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setOpen(false)}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.86, opacity: 0, y: 35 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.86, opacity: 0, y: 35 }}
              transition={{ duration: 0.4 }}
              className="relative bg-[#F8F4EB] rounded-[34px] border border-[#C9A44C]/50 p-7 sm:p-9 max-w-md w-full text-center shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute top-5 right-6 text-[#4F5A35]/70 hover:text-[#4F5A35] text-xl"
              >
                ✕
              </button>

              <h2 className="font-cursiveDancing text-[44px] text-[#4F5A35] leading-none">
                Nuestro Álbum
              </h2>

              <div className="w-24 h-[1px] mx-auto bg-gradient-to-r from-transparent via-[#C9A44C] to-transparent my-6" />

              <p className="text-[#5B6247]">
                Aplicación:
                <span className="block font-semibold text-[#4F5A35] mt-1">
                  Wedshoots
                </span>
              </p>

              <a
                href="https://apps.apple.com/mx/app/wedshoots/id660256196"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-3 px-6 py-2 rounded-full border border-[#C9A44C]/70 text-[#4F5A35] hover:bg-[#4F5A35] hover:text-[#F8F4EB] transition"
              >
                Descargar App
              </a>

              <div className="mt-4 space-y-2">
                <p className="text-[#6F7756] text-sm">Código del álbum</p>

                <div className="bg-white rounded-xl py-3 px-4 font-mono text-lg tracking-[0.3em] text-[#4F5A35] shadow-inner">
                  MX37d1f8f3
                </div>
              </div>

              <div className="flex justify-center mt-4">
                <div className="p-3 bg-white rounded-2xl shadow-lg border border-[#C9A44C]/35">
                  <img src="/QR.JPG" alt="QR" className="w-40 h-40 rounded-lg" />
                </div>
              </div>

              <p className="mt-1 text-lg text-[#5B6247]">
                Entra a la App de Wedshoots
              </p>
              <p className="mt-1 text-lg text-[#5B6247]">
                1.- Seleccion mis albumes
              </p>
              <p className="mt-1 text-lg text-[#5B6247]">
                2.- Selecciona Unirse a un boda
              </p>
              <p className="mt-1 text-lg text-[#5B6247]">
                3.- Escanea el código o ingresa el codigo 
              </p>
              <p className="mt-1 text-xl text-[#5B6247]">
                usa la app para subir tus fotos.
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}