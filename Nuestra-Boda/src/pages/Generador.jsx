import { useState } from "react";

export default function Generador() {
  const [nombre, setNombre] = useState("");
  const [pases, setPases] = useState(1);
  const [link, setLink] = useState("");
  const [mensaje, setMensaje] = useState("");

  const generarLink = () => {
    if (!nombre.trim()) return;

    // Encriptar datos
const datos = {
  nombre: nombre.trim(),
  pases: Number(pases),
};

// Convertimos a JSON
const json = JSON.stringify(datos);

// Invertimos el texto
const reverse = json.split("").reverse().join("");

// Codificamos en Base64
const id = btoa(reverse);

// Link final
const url = `${window.location.origin}/?id=${encodeURIComponent(id)}`;

    const textoWhatsApp = `Hola ${nombre.trim()} ✨

Con mucho cariño queremos compartirte nuestra invitación digital.

Hemos reservado ${pases} ${Number(pases) === 1 ? "lugar" : "lugares"} en tu honor para acompañarnos en este día tan especial.

Puedes abrir tu invitación aquí:
${url}

Con cariño,
Gisela & Omar`;

    setLink(url);
    setMensaje(textoWhatsApp);
  };

  const copiarLink = async () => {
    if (!link) return;
    await navigator.clipboard.writeText(link);
    alert("Link copiado ✅");
  };

  const copiarMensaje = async () => {
    if (!mensaje) return;
    await navigator.clipboard.writeText(mensaje);
    alert("Mensaje copiado para WhatsApp ✅");
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center px-5 py-10 overflow-hidden">

  {/* Imagen de fondo */}
  <img
    src="/logoSW.jpg"
    alt=""
    className="
      absolute
      inset-0
      w-full
      h-full
      object-cover
      object-center
      pointer-events-none
      select-none
    "
    draggable={false}
  />

  {/* Oscurecer ligeramente */}
  <div className="absolute inset-0 bg-black/45" />

  {/* Gradiente elegante */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/25 via-black/35 to-black/70" />

  {/* Brillo dorado */}
  <div className="absolute -top-32 -left-32 w-[420px] h-[420px] rounded-full bg-[#C9A44C]/20 blur-3xl" />

  <div className="absolute -bottom-32 -right-32 w-[420px] h-[420px] rounded-full bg-white/10 blur-3xl" />

  {/* Contenido */}
  <div className="relative z-10 w-full flex justify-center">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 bg-[#F8F4EB] rounded-[32px] overflow-hidden shadow-[0_35px_100px_rgba(0,0,0,0.35)]">
        
        {/* PORTADA */}
        <div className="relative min-h-[360px] md:min-h-[640px] overflow-hidden">
          <img
            src="/portada.JPG"
            alt="Gisela y Omar"
            className="absolute inset-0 w-full h-full object-cover object-[center_20%]"
          />

          <div className="absolute inset-0 bg-black/35" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/80" />

          <div className="relative z-10 h-full flex flex-col items-center justify-end text-center px-6 pb-10 text-white">
            <p className="text-[10px] uppercase tracking-[0.45em] text-[#F3DFB3] mb-4">
              Nuestra Boda
            </p>

            <h1
              className="font-cursiveDancing text-[54px] sm:text-[72px] leading-none"
              style={{
                background:
                  "linear-gradient(180deg, #FFFFFF 0%, #F3DFB3 42%, #C9A44C 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                textShadow: "0 8px 35px rgba(0,0,0,0.75)",
              }}
            >
              Gisela & Omar
            </h1>

            <div className="w-28 h-[1px] bg-gradient-to-r from-transparent via-[#C9A44C] to-transparent my-5" />

            <p className="text-[11px] uppercase tracking-[0.3em] text-[#F8F4EB]">
              10 • Octubre • 2026
            </p>
          </div>
        </div>

        {/* FORMULARIO */}
        <div className="relative px-6 py-10 sm:px-10 md:px-12 md:py-14">
          <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(circle_at_center,#4F5A35_1px,transparent_1px)] [background-size:18px_18px]" />

          <div className="relative z-10">
            <p className="text-[10px] uppercase tracking-[0.45em] text-[#B99745] mb-3 text-center">
              Wedly
            </p>

            <h1 className="font-serif text-[28px] sm:text-[34px] text-[#2F3624] text-center mb-2">
              Generador de Invitaciones
            </h1>

            <p className="text-center text-[#6F7756] text-sm mb-8">
              Crea el link personalizado y el mensaje listo para WhatsApp.
            </p>

            <label className="block text-[10px] uppercase tracking-[0.32em] text-[#6F7756] mb-3">
              Nombre del invitado
            </label>

            <input
              type="text"
              placeholder="Ej. Familia Pérez"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              className="
                w-full mb-5
                rounded-2xl
                border border-[#C9A44C]/40
                bg-white
                px-5 py-4
                text-[#2F3624]
                outline-none
                focus:border-[#4F5A35]
                focus:ring-2
                focus:ring-[#4F5A35]/15
                transition
              "
            />

            <label className="block text-[10px] uppercase tracking-[0.32em] text-[#6F7756] mb-3">
              Número de pases
            </label>

            <input
              type="number"
              min="1"
              value={pases}
              onChange={(e) => setPases(e.target.value)}
              className="
                w-full mb-6
                rounded-2xl
                border border-[#C9A44C]/40
                bg-white
                px-5 py-4
                text-center
                text-[#2F3624]
                outline-none
                focus:border-[#4F5A35]
                focus:ring-2
                focus:ring-[#4F5A35]/15
                transition
              "
            />

            <button
              onClick={generarLink}
              className="
                w-full
                bg-[#4F5A35]
                text-[#F8F4EB]
                py-4
                rounded-full
                border border-[#C9A44C]/60
                shadow-[0_18px_45px_rgba(79,90,53,0.35)]
                uppercase
                tracking-[0.28em]
                text-[11px]
                transition
                hover:scale-[1.02]
              "
            >
              Generar invitación
            </button>

            {link && (
              <div className="mt-8 space-y-5">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.32em] text-[#6F7756] mb-3">
                    Link generado
                  </p>

                  <div className="bg-white border border-[#C9A44C]/30 p-4 rounded-2xl break-all text-sm text-[#2F3624]">
                    {link}
                  </div>

                  <button
                    onClick={copiarLink}
                    className="
                      mt-3
                      w-full
                      bg-[#252B1E]
                      text-[#F8F4EB]
                      py-3
                      rounded-full
                      uppercase
                      tracking-[0.22em]
                      text-[10px]
                    "
                  >
                    Copiar link
                  </button>
                </div>

                <div>
                  <p className="text-[10px] uppercase tracking-[0.32em] text-[#6F7756] mb-3">
                    Mensaje para WhatsApp
                  </p>

                  <div className="bg-white border border-[#C9A44C]/30 p-4 rounded-2xl whitespace-pre-line text-sm text-[#2F3624] leading-relaxed">
                    {mensaje}
                  </div>

                  <button
                    onClick={copiarMensaje}
                    className="
                      mt-3
                      w-full
                      bg-[#B99745]
                      text-white
                      py-3
                      rounded-full
                      uppercase
                      tracking-[0.22em]
                      text-[10px]
                    "
                  >
                    Copiar mensaje completo
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}