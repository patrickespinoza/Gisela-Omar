import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import Confetti from "react-confetti";
import html2canvas from "html2canvas";

const API_URL =
  "https://script.google.com/macros/s/AKfycbxQTHIUXU3wWSw_mg7wvwbjwLbzskGcgGaGKzuY_yUK1r-RfPfXtSB7WD4CfZ6W7f5QJg/exec";

const preguntas = [
  {
    pregunta: "¿Dónde se conocieron Gisela y Omar?",
    opciones: ["En la Universidad", "En una Fiesta", "En el trabajo", "Por una app", "En un viaje"],
    correcta: 0,
  },
  {
    pregunta: "¿Quién dijo 'te amo' primero?",
    opciones: ["Gisela", "Omar", "Ambos", "Nadie", "Accidente"],
    correcta: 1,
  },
  {
    pregunta: "¿Comida favorita?",
    opciones: ["Pizza", "Sushi", "Tacos", "Pasta", "Hamburguesas"],
    correcta: 2,
  },
  {
    pregunta: "¿Primera cita?",
    opciones: ["Cine", "Restaurante", "Parque", "Café", "Playa"],
    correcta: 3,
  },
  {
    pregunta: "¿Quién es más puntual?",
    opciones: ["Gisela", "Omar", "Ambos", "Ninguno", "Depende"],
    correcta: 0,
  },
];

export default function Preguntas() {
  const [nombre, setNombre] = useState("");
  const [mostrarNombre, setMostrarNombre] = useState(true);
  const [paso, setPaso] = useState(0);
  const [seleccion, setSeleccion] = useState(null);
  const [score, setScore] = useState(0);
  const [terminado, setTerminado] = useState(false);
  const [ranking, setRanking] = useState([]);
  const [showConfetti, setShowConfetti] = useState(false);

  const resultadoRef = useRef(null);

  const enviarResultado = async () => {
    try {
      await fetch(API_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, score }),
      });
    } catch (e) {
      console.log("Error enviando:", e);
    }
  };

  const obtenerRanking = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      const ordenado = data.sort((a, b) => b.score - a.score);
      setRanking(ordenado.slice(0, 3));
    } catch (e) {
      console.log("Error ranking:", e);
    }
  };

  useEffect(() => {
    if (terminado) {
      const flujoFinal = async () => {
        await enviarResultado();

        setTimeout(async () => {
          await obtenerRanking();
        }, 1200);

        setShowConfetti(true);
      };

      flujoFinal();
    }
  }, [terminado]);

  const manejarRespuesta = (index) => {
    if (paso === 0 && !nombre.trim()) {
      alert("Escribe tu nombre");
      return;
    }

    setSeleccion(index);

    if (index === preguntas[paso].correcta) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      setSeleccion(null);

      if (paso === 0) setMostrarNombre(false);

      if (paso + 1 < preguntas.length) {
        setPaso(paso + 1);
      } else {
        setTerminado(true);
      }
    }, 700);
  };

  const guardarResultado = async () => {
    if (!resultadoRef.current) return;

    const canvas = await html2canvas(resultadoRef.current);
    const link = document.createElement("a");
    link.download = "resultado.png";
    link.href = canvas.toDataURL();
    link.click();
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

      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {showConfetti && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={280}
            recycle={false}
          />
        )}

        <p className="text-[10px] sm:text-xs uppercase tracking-[0.55em] text-[#E6D3A3] mb-4">
          Juego para invitados
        </p>

        <h2 className="font-cursiveDancing text-[54px] sm:text-[78px] text-[#F8F4EB] leading-none">
          ¿Cuánto nos conoces?
        </h2>

        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C9A44C] to-transparent mx-auto mt-6 mb-12" />

        <AnimatePresence mode="wait">
          {!terminado ? (
            <motion.div
              key={paso}
              initial={{ opacity: 0, y: 45 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -45 }}
              transition={{ duration: 0.7 }}
              className="relative overflow-hidden rounded-[36px] sm:rounded-tl-[90px] sm:rounded-br-[90px] border border-[#C9A44C]/50 bg-[#F8F4EB] shadow-[0_35px_100px_rgba(0,0,0,0.35)] px-6 py-12 sm:px-12 sm:py-14"
            >
              <div className="absolute inset-4 border border-[#C9A44C]/25 rounded-[28px] sm:rounded-tl-[76px] sm:rounded-br-[76px] pointer-events-none" />

              <div className="relative z-10">
                <p className="text-[10px] uppercase tracking-[0.45em] text-[#6F7756] mb-5">
                  Pregunta {paso + 1} de {preguntas.length}
                </p>

                {mostrarNombre && (
                  <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Tu nombre..."
                    className="mb-8 w-full max-w-sm rounded-full border border-[#C9A44C]/45 bg-white px-5 py-3 text-center text-[#2F3624] outline-none focus:border-[#4F5A35]"
                  />
                )}

                <h3 className="font-serif text-[24px] sm:text-[34px] leading-snug text-[#2F3624] mb-8">
                  {preguntas[paso].pregunta}
                </h3>

                <div className="flex flex-col gap-3 items-center">
                  {preguntas[paso].opciones.map((opcion, index) => (
                    <motion.button
                      key={index}
                      onClick={() => manejarRespuesta(index)}
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      className={`w-full max-w-md px-5 py-4 rounded-full border transition-all text-[14px] sm:text-[16px] ${
                        seleccion === index
                          ? "bg-[#4F5A35] text-[#F8F4EB] border-[#C9A44C]"
                          : "bg-white text-[#2F3624] border-[#C9A44C]/35 hover:bg-[#F3EAD8]"
                      }`}
                    >
                      {opcion}
                    </motion.button>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              ref={resultadoRef}
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-[36px] sm:rounded-tl-[90px] sm:rounded-br-[90px] border border-[#C9A44C]/50 bg-[#F8F4EB] shadow-[0_35px_100px_rgba(0,0,0,0.35)] px-6 py-12 sm:px-12 sm:py-14"
            >
              <h3 className="font-cursiveDancing text-[42px] sm:text-[58px] text-[#4F5A35] leading-none mb-5">
                ¡Gracias, {nombre}!
              </h3>

              <p className="font-serif text-[22px] sm:text-[30px] text-[#2F3624]">
                Acertaste {score} de {preguntas.length}
              </p>

              <div className="w-28 h-[1px] bg-gradient-to-r from-transparent via-[#C9A44C] to-transparent mx-auto my-9" />

              <div className="flex items-end justify-center gap-4 mt-6">
                {ranking[1] && (
                  <div>
                    <div className="bg-[#D8D1C2] h-24 w-20 rounded-t-2xl flex items-center justify-center text-[#4F5A35] font-bold">
                      2
                    </div>
                    <p className="text-[#2F3624] mt-2">{ranking[1].nombre}</p>
                    <span className="text-[#6F7756]">{ranking[1].score}</span>
                  </div>
                )}

                {ranking[0] && (
                  <div>
                    <div className="bg-[#C9A44C] h-32 w-24 rounded-t-2xl flex items-center justify-center text-white text-2xl">
                      🏆
                    </div>
                    <p className="font-bold text-[#2F3624] mt-2">
                      {ranking[0].nombre}
                    </p>
                    <span className="text-[#6F7756]">{ranking[0].score}</span>
                  </div>
                )}

                {ranking[2] && (
                  <div>
                    <div className="bg-[#B9985A] h-20 w-20 rounded-t-2xl flex items-center justify-center text-white font-bold">
                      3
                    </div>
                    <p className="text-[#2F3624] mt-2">{ranking[2].nombre}</p>
                    <span className="text-[#6F7756]">{ranking[2].score}</span>
                  </div>
                )}
              </div>

              <motion.button
                onClick={guardarResultado}
                className="mt-10 bg-[#4F5A35] text-[#F8F4EB] px-8 py-4 rounded-full border border-[#C9A44C]/60 shadow-lg uppercase tracking-[0.25em] text-[11px]"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.97 }}
              >
                Guardar resultado
              </motion.button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}