import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 55 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const Regalos = ({
  eventoLiverpool = "52006709",
  banco = "BBVA",
  titular = "Omar Venegas Gutiérrez",
  clabe = "012 420 01534229561 5",
}) => {
  const [modalActivo, setModalActivo] = useState(null);
  const [copiado, setCopiado] = useState(false);

  const linkLiverpool = `https://mesaderegalos.liverpool.com.mx/milistaderegalos/52006709`;

  const copiarClabe = async () => {
    await navigator.clipboard.writeText(clabe);
    setCopiado(true);

    setTimeout(() => {
      setCopiado(false);
    }, 2200);
  };

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
        className="absolute -bottom-32 -right-28 w-[380px] h-[380px] rounded-full bg-white/10 blur-3xl"
        animate={{ scale: [1, 1.18, 1], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className="relative z-10 mx-auto max-w-6xl text-center"
      >

        <h2 className="font-cursiveDancing  mb-9 text-[54px] sm:text-[78px] md:text-[92px] text-[#F8F4EB] leading-none">
          Regalos
        </h2>

        <p className="text-[10px] sm:text-xs uppercase tracking-[0.55em] text-[#E6D3A3]">
          Con cariño
        </p>

        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C9A44C] to-transparent mx-auto mt-6 mb-9" />

        <p className="font-serif text-[16px] sm:text-[20px] leading-relaxed text-[#F8F4EB]/90 max-w-3xl mx-auto mb-14">
          El mejor regalo será compartir este día con ustedes. Si desean tener
          un detalle con nosotros, ponemos a su disposición las siguientes
          opciones.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {/* MESA DE REGALOS */}
          <motion.div
            className="relative overflow-hidden rounded-[36px] sm:rounded-tl-[90px] sm:rounded-br-[90px] border border-[#C9A44C]/50 bg-[#F8F4EB] px-7 py-12 sm:px-10 sm:py-14 shadow-[0_35px_100px_rgba(0,0,0,0.35)]"
            animate={{ y: [0, -5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-4 border border-[#C9A44C]/25 rounded-[28px] sm:rounded-tl-[76px] sm:rounded-br-[76px] pointer-events-none" />

            <div className="relative z-10">
              <div className="text-[48px] mb-5">🎁</div>

              <p className="text-[10px] uppercase tracking-[0.45em] text-[#6F7756] mb-4">
                Mesa de Regalos
              </p>

              <h3 className="font-serif text-[36px] sm:text-[46px] text-[#4F5A35] leading-none mb-6">
                Liverpool
              </h3>

              <p className="font-serif text-[15px] sm:text-[17px] leading-relaxed text-[#5B6247] max-w-md mx-auto">
                Hemos preparado una mesa de regalos para quienes deseen
                obsequiarnos un detalle especial.
              </p>

              <motion.button
                onClick={() => setModalActivo("liverpool")}
                className="relative inline-flex items-center justify-center overflow-hidden mt-10 px-9 py-4 rounded-full bg-[#4F5A35] border border-[#C9A44C]/60 text-[#F8F4EB] shadow-[0_18px_45px_rgba(79,90,53,0.35)]"
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
                <span className="relative z-10 uppercase tracking-[0.3em] text-[11px]">
                  Ver información
                </span>
              </motion.button>
            </div>
          </motion.div>

          {/* TRANSFERENCIA */}
          <motion.div
            className="relative overflow-hidden rounded-[36px] sm:rounded-tl-[90px] sm:rounded-br-[90px] border border-[#C9A44C]/50 bg-[#F8F4EB] px-7 py-12 sm:px-10 sm:py-14 shadow-[0_35px_100px_rgba(0,0,0,0.35)]"
            animate={{ y: [0, -6, 0] }}
            transition={{ duration: 6.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="absolute inset-4 border border-[#C9A44C]/25 rounded-[28px] sm:rounded-tl-[76px] sm:rounded-br-[76px] pointer-events-none" />

            <div className="relative z-10">
              <div className="text-[48px] mb-5">💌</div>

              <p className="text-[10px] uppercase tracking-[0.45em] text-[#6F7756] mb-4">
                Transferencia
              </p>

              <h3 className="font-serif text-[36px] sm:text-[46px] text-[#4F5A35] leading-none mb-6">
                Bancaria
              </h3>

              <p className="font-serif text-[15px] sm:text-[17px] leading-relaxed text-[#5B6247] max-w-md mx-auto">
                También ponemos a su disposición la opción de transferencia
                bancaria.
              </p>

              <motion.button
                onClick={() => setModalActivo("transferencia")}
                className="relative inline-flex items-center justify-center overflow-hidden mt-10 px-9 py-4 rounded-full bg-[#4F5A35] border border-[#C9A44C]/60 text-[#F8F4EB] shadow-[0_18px_45px_rgba(79,90,53,0.35)]"
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
                <span className="relative z-10 uppercase tracking-[0.3em] text-[11px]">
                  Ver información
                </span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </motion.div>

      <AnimatePresence>
        {modalActivo && (
          <motion.div
            className="fixed inset-0 z-[999] flex items-center justify-center bg-black/70 backdrop-blur-md px-4"
            onClick={() => setModalActivo(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.86, opacity: 0, y: 35 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.86, opacity: 0, y: 35 }}
              transition={{ duration: 0.4 }}
              className="relative w-full max-w-md overflow-hidden rounded-[34px] sm:rounded-tl-[80px] sm:rounded-br-[80px] border border-[#C9A44C]/50 bg-[#F8F4EB] p-7 sm:p-9 text-center shadow-[0_30px_90px_rgba(0,0,0,0.45)]"
            >
              <div className="absolute inset-4 border border-[#C9A44C]/25 rounded-[26px] sm:rounded-tl-[66px] sm:rounded-br-[66px] pointer-events-none" />

              <button
                onClick={() => setModalActivo(null)}
                className="absolute top-5 right-6 z-20 text-[#4F5A35]/70 hover:text-[#4F5A35] text-xl"
              >
                ✕
              </button>

              {modalActivo === "liverpool" && (
                <div className="relative z-10">
                  <p className="text-[10px] uppercase tracking-[0.45em] text-[#6F7756] mb-4">
                    Mesa de Regalos
                  </p>

                  <h3 className="font-serif text-[42px] text-[#4F5A35] leading-none">
                    Liverpool
                  </h3>

                  <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C9A44C] to-transparent mx-auto my-7" />

                  <p className="text-[10px] uppercase tracking-[0.35em] text-[#6F7756] mb-3">
                    Número de Evento
                  </p>

                  <p className="font-mono text-[30px] tracking-[0.22em] text-[#2F3624]">
                    {eventoLiverpool}
                  </p>

                  <a
                    href={linkLiverpool}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-9 inline-flex w-full items-center justify-center rounded-full bg-[#4F5A35] px-8 py-4 text-[#F8F4EB] border border-[#C9A44C]/60 uppercase tracking-[0.25em] text-[11px]"
                  >
                    Ver mesa
                  </a>
                </div>
              )}

              {modalActivo === "transferencia" && (
                <div className="relative z-10">
                  <p className="text-[10px] uppercase tracking-[0.45em] text-[#6F7756] mb-4">
                    Transferencia Bancaria
                  </p>

                  <h3 className="font-serif text-[40px] text-[#4F5A35] leading-none">
                    {banco}
                  </h3>

                  <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-[#C9A44C] to-transparent mx-auto my-7" />

                  <div className="space-y-5 text-left">
                    <Dato label="Titular" value={titular} />
                    <Dato label="CLABE" value={clabe} mono />
                  </div>

                  <motion.button
                    onClick={copiarClabe}
                    className="mt-8 w-full rounded-full bg-[#4F5A35] px-8 py-4 text-[#F8F4EB] border border-[#C9A44C]/60 uppercase tracking-[0.25em] text-[11px]"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {copiado ? "CLABE copiada" : "Copiar CLABE"}
                  </motion.button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

function Dato({ label, value, mono = false }) {
  return (
    <div className="rounded-2xl border border-[#C9A44C]/30 bg-white/70 px-5 py-4">
      <p className="text-[10px] uppercase tracking-[0.35em] text-[#6F7756] mb-2">
        {label}
      </p>
      <p
        className={`text-[#2F3624] text-[16px] ${
          mono ? "font-mono tracking-[0.12em]" : "font-serif"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

export default Regalos;