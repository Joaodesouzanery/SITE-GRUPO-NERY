/* ============================================================
   CONFIGURAÇÃO DO SITE: edite aqui (não precisa de variável de ambiente)
   whatsapp: só números, com DDI e DDD. Ex.: "5513999999999"
   email: e-mail comercial
   bio: frase sobre o consultor (formação, CREA, experiência)
   Enquanto um campo estiver vazio, o botão correspondente leva para o formulário.
   ============================================================ */
const CONFIG = {
  whatsapp: "",
  email: "",
  bio: "",
  mensagemPadrao: "Olá! Vim pelo site do Grupo Nery e gostaria de conversar sobre a gestão das nossas obras.",
};

(function () {
  const linkWhats = (texto) =>
    CONFIG.whatsapp ? `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(texto)}` : null;
  const linkEmail = (assunto, corpo) =>
    CONFIG.email ? `mailto:${CONFIG.email}?subject=${encodeURIComponent(assunto)}&body=${encodeURIComponent(corpo)}` : null;

  // botões de WhatsApp e e-mail
  document.querySelectorAll(".js-whats").forEach((a) => {
    const url = linkWhats(CONFIG.mensagemPadrao);
    if (url) { a.href = url; a.target = "_blank"; a.rel = "noopener"; }
  });
  document.querySelectorAll(".js-email").forEach((a) => {
    const url = linkEmail("Contato pelo site", CONFIG.mensagemPadrao);
    if (url) a.href = url; else a.hidden = true;
  });
  if (!CONFIG.whatsapp) document.querySelector(".whats-flutuante")?.setAttribute("hidden", "");
  if (CONFIG.bio) document.querySelectorAll(".js-bio").forEach((p) => (p.textContent = CONFIG.bio));

  // menu no celular
  const botao = document.querySelector(".menu__abrir");
  const menu = document.getElementById("menu");
  botao?.addEventListener("click", () => {
    const aberto = menu.classList.toggle("aberto");
    botao.setAttribute("aria-expanded", String(aberto));
  });
  menu?.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
    menu.classList.remove("aberto");
    botao?.setAttribute("aria-expanded", "false");
  }));

  // formulário: monta a mensagem e abre WhatsApp ou e-mail (nada é salvo no site)
  const form = document.getElementById("form-contato");
  form?.addEventListener("submit", (e) => {
    e.preventDefault();
    let ok = true;
    form.querySelectorAll("[required]").forEach((campo) => {
      const vazio = !campo.value.trim();
      campo.classList.toggle("erro", vazio);
      if (vazio) ok = false;
    });
    if (!ok) return;
    const d = Object.fromEntries(new FormData(form));
    const texto = `Olá! Sou ${d.nome}${d.empresa ? ", da " + d.empresa : ""}.\n${d.mensagem}${d.telefone ? "\nContato: " + d.telefone : ""}`;
    const url = linkWhats(texto) || linkEmail("Contato pelo site: " + (d.empresa || d.nome), texto);
    if (url) window.open(url, "_blank", "noopener");
    else alert("Canal de contato em configuração. Por favor, tente novamente em breve.");
  });

  const ano = document.getElementById("ano");
  if (ano) ano.textContent = new Date().getFullYear();
})();
