// La lista de espera y la encuesta se guardan en Supabase (Frankfurt), tablas waitlist y encuesta.
// La clave publicable solo permite añadir filas; la tabla se crea con tools/waitlist.sql.
const SB_URL = "https://xyprmvlgjfdvuwjgmutu.supabase.co";
const SB_KEY = "sb_publishable_K_Z1oV_FomxXzzc5YjbuiA_ZDvbsHvk";

const form = document.getElementById("waitlist");
const survey = document.getElementById("encuesta");
const msg = document.getElementById("msg");
const msg2 = document.getElementById("msg2");
const btn = document.getElementById("enviar");
const btn2 = document.getElementById("enviar2");
let joinedEmail = "";

function say(el, text, kind){ el.textContent = text; el.className = "msg " + (kind || ""); }
function track(path, title){ if (window.goatcounter && window.goatcounter.count) window.goatcounter.count({ path, title, event: true }); }

// De dónde viene la visita (?utm_source=facebook o ?ref=grupo), para saber qué publicación funciona.
function origin(){
  const q = new URLSearchParams(location.search);
  let o = q.get("utm_source") || q.get("ref") || "";
  try { if (o) sessionStorage.setItem("origen", o); else o = sessionStorage.getItem("origen") || ""; } catch (e) {}
  if (!o && document.referrer) { try { const h = new URL(document.referrer).hostname; if (h !== location.hostname) o = h; } catch (e) {} }
  return o.slice(0, 60);
}
const ORIGEN = origin();

async function insert(table, row){
  const r = await fetch(SB_URL + "/rest/v1/" + table, {
    method: "POST",
    headers: { "apikey": SB_KEY, "Content-Type": "application/json", "Prefer": "return=minimal" },
    body: JSON.stringify(row)
  });
  if (r.status === 409) return "duplicate";
  if (!r.ok) throw new Error("http " + r.status);
  return "ok";
}

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const data = {
    email: form.email.value.trim().toLowerCase(),
    profesion: form.profesion.value,
    nivel: form.nivel.value,
    consentimiento: form.acepto.checked,
    origen: ORIGEN || null
  };
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return say(msg, "Revisa tu email: parece incompleto.", "err");
  if (!data.profesion || !data.nivel) return say(msg, "Elige tu profesión y tu nivel de alemán.", "err");
  if (!data.consentimiento) return say(msg, "Marca la casilla de privacidad para poder escribirte.", "err");

  btn.disabled = true; say(msg, "Enviando…");
  try {
    if (!form.web.value) {
      const res = await insert("waitlist", data);
      if (res === "ok") track("registro-lista", "Registro en la lista de espera");
    }
    joinedEmail = data.email;
    form.hidden = true;
    survey.hidden = false;
    document.getElementById("gracias").focus();
  } catch (err) {
    say(msg, "No pudimos guardar tus datos. Inténtalo de nuevo en un momento.", "err");
  } finally { btn.disabled = false; }
});

survey.addEventListener("submit", async (e) => {
  e.preventDefault();
  const row = {
    email: joinedEmail,
    pagaria: (survey.querySelector("input[name=pagaria]:checked") || {}).value || null,
    cuando: (survey.querySelector("input[name=cuando]:checked") || {}).value || null,
    falta: survey.falta.value.trim().slice(0, 1000) || null
  };
  if (!row.pagaria && !row.cuando && !row.falta) return say(msg2, "Responde al menos una pregunta, o cierra esta página: ya estás en la lista.", "err");
  btn2.disabled = true; say(msg2, "Enviando…");
  try {
    await insert("encuesta", row);
    track("encuesta-respondida", "Encuesta respondida");
    survey.querySelectorAll("#intro, fieldset, div, button").forEach(el => el.hidden = true);
    say(msg2, "¡Gracias! Tus respuestas nos ayudan mucho.", "ok");
  } catch (err) {
    say(msg2, "No pudimos guardar tus respuestas. Inténtalo de nuevo en un momento.", "err");
  } finally { btn2.disabled = false; }
});

// Visita a la página y clics marcados con data-goatcounter-click (estadísticas anónimas, stats.js).
if (window.goatcounter) window.goatcounter.count();
document.addEventListener("click", (e) => {
  const el = e.target.closest && e.target.closest("[data-goatcounter-click]");
  if (el) track(el.getAttribute("data-goatcounter-click"), el.textContent.trim().slice(0, 100));
});
