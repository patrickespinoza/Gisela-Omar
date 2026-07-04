import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 55 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzpb4DkHNpdA5ByILOSwqb36lhm8yUu80Z5G94Z1ayTj449HHQd2H-Xg_foJAepxOPz/exec";

// Cambia este número por el WhatsApp que recibirá las confirmaciones.
// Formato recomendado: 52 + lada + número, sin espacios.
const WHATSAPP_NUMBER = "527224000628";

const Confirmacion = () => {
  const [pasesAsignados, setPasesAsignados] = useState(1);
  const [nombreInvitado, setNombreInvitado] = useState("");
  const [mensajeInvitado, setMensajeInvitado] = useState("");
  const [asistencia, setAsistencia] = useState("");
  const [invitados, setInvitados] = useState(1);

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const enviarConfirmacion = async () => {
    if (!nombreInvitado.trim() || !asistencia) {
      setError("Completa tu nombre y confirma tu asistencia.");
      return;
    }

    setError("");
    setLoading(true);

    const data = {
      nombre: nombreInvitado.trim(),
      asistencia,
      invitados,
      mensaje: mensajeInvitado.trim(),
    };

    const mensajeWhatsApp = `
Hola, quiero confirmar mi asistencia a la boda de Gisela & Omar.

Nombre: ${data.nombre}
Asistencia: ${data.asistencia}
Número de invitados: ${data.invitados}
Mensaje: ${data.mensaje || "Sin mensaje"}
    `.trim();

    try {
      await fetch(SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const whatsappURL = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
        mensajeWhatsApp
      )}`;

      window.open(whatsappURL, "_blank");

      setEnviado(true);
      setNombreInvitado("");
      setMensajeInvitado("");
      setAsistencia("");
      setInvitados(1);

      setTimeout(() => {
        setEnviado(false);
      }, 3500);
    } catch (err) {
      console.error(err);
      setError("Hubo un error al enviar. Inténtalo nuevamente.");
    } finally {
      setLoading(false);
    }
  };
useEffect(() => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");

  if (id) {
    try {
      const reverse = atob(decodeURIComponent(id));
      const json = reverse.split("").reverse().join("");
      const datos = JSON.parse(json);

      if (datos.nombre) setNombreInvitado(datos.nombre);
      if (datos.pases) {
        setPasesAsignados(Number(datos.pases));
        setInvitados(1);
      }
    } catch (error) {
      console.error("ID inválido:", error);
    }

    return;
  }

  const nombre = params.get("nombre");
  const cantidad = params.get("pases");

  if (nombre) setNombreInvitado(nombre);
  if (cantidad) {
    setPasesAsignados(Number(cantidad));
    setInvitados(1);
  }
}, []);
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
        className="relative z-10 mx-auto max-w-4xl text-center"
      >
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.55em] text-[#E6D3A3] mb-4">
          Confirma tu asistencia
        </p>

        <h2 className="font-cursiveDancing text-[54px] sm:text-[78px] md:text-[92px] text-[#F8F4EB] leading-none">
          Te Esperamos
        </h2>

        <div className="w-32 h-[1px] bg-gradient-to-r from-transparent via-[#C9A44C] to-transparent mx-auto mt-6 mb-10" />

        <p className="font-serif text-[20px] sm:text-[30px] leading-relaxed text-[#F8F4EB]/90 max-w-2xl mx-auto mb-12">
          Te agradecemos que nos confirmes tu asistencia antes del día 20 de agosto
        </p>

        <motion.div
          className="
            relative overflow-hidden
            rounded-[36px]
            sm:rounded-tl-[90px]
            sm:rounded-br-[90px]
            border border-[#C9A44C]/50
            bg-[#F8F4EB]
            shadow-[0_35px_100px_rgba(0,0,0,0.35)]
            px-6 py-12
            sm:px-12 sm:py-14
            text-left
          "
          animate={{ y: [0, -5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="absolute inset-4 border border-[#C9A44C]/25 rounded-[28px] sm:rounded-tl-[76px] sm:rounded-br-[76px] pointer-events-none" />

          <div className="relative z-10 space-y-6">
            <div>
              <label className="block text-[10px] uppercase tracking-[0.35em] text-[#6F7756] mb-3">
                Nombre y apellido
              </label>

              <input
  type="text"
  value={nombreInvitado}
  readOnly
  className="
    w-full rounded-2xl border border-[#C9A44C]/40 bg-white/80
    px-5 py-4 text-[#2F3624] outline-none
    cursor-not-allowed
  "
/>
            </div>

            <div>
              <p className="block text-[10px] uppercase tracking-[0.35em] text-[#6F7756] mb-4">
                Asistencia
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <RadioOption
                  label="Sí asistiré"
                  active={asistencia === "Sí asistiré"}
                  onClick={() => setAsistencia("Sí asistiré")}
                />

                <RadioOption
                  label="No podré asistir"
                  active={asistencia === "No podré asistir"}
                  onClick={() => setAsistencia("No podré asistir")}
                />
              </div>
            </div>

            <select
  value={invitados}
  onChange={(e) => setInvitados(Number(e.target.value))}
  className="
    w-full rounded-2xl border border-[#C9A44C]/40 bg-white
    px-5 py-4 text-center text-[#2F3624] outline-none
    focus:border-[#4F5A35] focus:ring-2 focus:ring-[#4F5A35]/15 transition
  "
>
  {Array.from({ length: pasesAsignados }, (_, i) => i + 1).map((num) => (
    <option key={num} value={num}>
      {num} {num === 1 ? "invitado" : "invitados"}
    </option>
  ))}
</select>

            <div>
              <label className="block text-[10px] uppercase tracking-[0.35em] text-[#6F7756] mb-3">
                Mensaje para los novios
              </label>

              <textarea
                placeholder="Escribe un mensaje opcional"
                value={mensajeInvitado}
                onChange={(e) => setMensajeInvitado(e.target.value)}
                rows="4"
                className="
                  w-full resize-none rounded-2xl border border-[#C9A44C]/40 bg-white
                  px-5 py-4 text-[#2F3624] outline-none
                  focus:border-[#4F5A35] focus:ring-2 focus:ring-[#4F5A35]/15 transition
                "
              />
            </div>

            <AnimatePresence>
              {error && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-center text-sm text-red-600"
                >
                  {error}
                </motion.p>
              )}
            </AnimatePresence>

            <AnimatePresence>
              {enviado && (
                <motion.p
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="text-center text-sm text-[#4F5A35] font-semibold"
                >
                  Confirmación enviada correctamente.
                </motion.p>
              )}
            </AnimatePresence>

            <div className="flex justify-center pt-3">
              <motion.button
                onClick={enviarConfirmacion}
                disabled={loading}
                className={`
                  relative inline-flex items-center justify-center overflow-hidden
                  w-full sm:w-auto px-10 py-4 rounded-full
                  border border-[#C9A44C]/60 text-[#F8F4EB]
                  shadow-[0_18px_45px_rgba(79,90,53,0.35)] transition
                  ${
                    loading
                      ? "bg-[#6F7756]/70 cursor-not-allowed"
                      : "bg-[#4F5A35]"
                  }
                `}
                whileHover={!loading ? { scale: 1.05, y: -2 } : {}}
                whileTap={!loading ? { scale: 0.97 } : {}}
              >
                {!loading && (
                  <motion.div
                    className="absolute top-0 left-[-120%] w-[120%] h-full bg-white/20 skew-x-12"
                    animate={{ left: ["-120%", "140%"] }}
                    transition={{
                      duration: 3.2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                )}

                <span className="relative z-10 uppercase tracking-[0.28em] text-[11px] flex items-center gap-3">
                  {loading && (
                    <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  )}
                  {loading ? "Enviando" : "Enviar Confirmación"}
                </span>
              </motion.button>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

function RadioOption({ label, active, onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        flex items-center gap-3 rounded-2xl border px-5 py-4 text-left transition
        ${
          active
            ? "border-[#4F5A35] bg-[#4F5A35] text-[#F8F4EB]"
            : "border-[#C9A44C]/40 bg-white text-[#2F3624]"
        }
      `}
    >
      <span
        className={`
          w-5 h-5 rounded-full border-2 flex items-center justify-center
          ${active ? "border-[#F8F4EB]" : "border-[#C9A44C]"}
        `}
      >
        {active && <span className="w-2.5 h-2.5 bg-[#F8F4EB] rounded-full" />}
      </span>

      <span className="font-serif text-[15px] sm:text-[17px]">{label}</span>
    </button>
  );
}

export default Confirmacion;