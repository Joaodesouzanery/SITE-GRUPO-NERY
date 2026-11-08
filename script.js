/* ============================================================
   CONFIGURAÇÃO DO SITE: edite aqui (não precisa de variável de ambiente)
   whatsapp: só números, com DDI e DDD. Ex.: "5513999999999"
   email: e-mail comercial
   redes: links completos (deixe "" para esconder o ícone)
   Enquanto WhatsApp/e-mail estiverem vazios, os botões levam para o formulário.
   ============================================================ */
const CONFIG = {
  whatsapp: "",
  email: "",
  redes: { linkedin: "", facebook: "", instagram: "" },
  mensagemPadrao: "Olá! Vim pelo site do Grupo Nery e gostaria de conversar sobre a gestão das nossas obras.",
};

/* Realizações (modal). Clientes sempre anônimos; resultado só quando medido. */
const OBRAS = [
  { seg: "Saneamento · Case", img: "img/obra-canteiro.jpg", titulo: "Gestão e caixa de empreiteira de manutenção de redes",
    desc: "Empreiteira de manutenção e obras de redes de água e esgoto para concessionária, com caixa pressionado e parte relevante do faturamento presa por falta de documentação. Estruturamos:",
    itens: ["Caixa de 13 semanas com recebíveis em devido, prometido e provável", "Lista de dinheiro preso com dono, motivo e prazo", "Modelo de gestão, manual de rotinas e reuniões fixas", "Controle fiscal com alerta de validade de certidões", "Painel de gestão por obra e processo comercial com funil", "RDO padrão e relato mínimo pelo WhatsApp"] },
  { seg: "Pisos industriais · Case", img: "img/obra-planta.jpg", titulo: "Do controle por mensagens a um painel por contrato",
    desc: "Empresa com cerca de 14 frentes e 5 contratos ativos, com gestão em grupos de mensagem e planilhas soltas. Construímos uma plataforma com:",
    itens: ["Dashboard por obra e por contrato", "Contratos e notas fiscais conciliados", "Receita, custo, lucro e margem por contrato", "Cobertura diária de RDO e produtividade", "Mão de obra, presença, estoque e compras", "Conferência automática dos dados; ganho estimado de 20 a 25 h/mês de gestão"] },
  { seg: "Saneamento · Ferramenta", img: "img/obra-armacao.jpg", titulo: "RDO padrão e relato mínimo para manutenção por OS",
    desc: "Relatório diário de obra com a marca do cliente e da contratante, alimentado por uma mensagem curta do encarregado:",
    itens: ["Catálogo de 35 códigos de serviço (água, esgoto, reposição)", "Relato mínimo de 2 minutos no WhatsApp", "RDO rascunho gerado automaticamente", "Lista do que faltou para cobrar no dia seguinte", "Unidade automática pelo código e causa padronizada de paralisação"] },
  { seg: "Produção · Metodologia", img: "img/obra-ferragem.jpg", titulo: "Painel de controle de produção por obra",
    desc: "Um arquivo por obra, fonte única da verdade, com:",
    itens: ["Previsto x realizado por serviço e por frente", "Produtividade por equipe e por homem-hora", "PPC semanal e Pareto de causas", "Retrabalho e custo da qualidade", "OS executadas x baixadas e ciclo da OS"] },
  { seg: "Contratos · Metodologia", img: "img/obra-predio.jpg", titulo: "Mapa do contrato e aula do contrato",
    desc: "O contrato que a obra toca, em duas páginas, para engenheiros e encarregados:",
    itens: ["O que é medido, como e com qual evidência", "O que pode ser cobrado fora do escopo e como avisar", "Riscos, multas, reajuste e prazos que não podem passar", "Aulas semanais nas primeiras quatro semanas de obra", "Questões jurídicas sempre com advogado parceiro"] },
  { seg: "Planejamento · Metodologia", img: "img/obra-guindaste.jpg", titulo: "Planejamento semanal e criticidade por obra",
    desc: "Rotina de planejamento de curto prazo e acompanhamento proporcional ao risco:",
    itens: ["Compromissos semanais com as equipes (Last Planner)", "Look-ahead de 4 a 6 semanas com remoção de restrições", "Criticidade verde, amarelo e vermelho por obra", "Frequência de acompanhamento por nível", "Plano de ação 5W2H nas obras críticas"] },
];

(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];

  /* contato */
  const linkWhats = (t) => (CONFIG.whatsapp ? `https://wa.me/${CONFIG.whatsapp}?text=${encodeURIComponent(t)}` : null);
  const linkEmail = (a, c) => (CONFIG.email ? `mailto:${CONFIG.email}?subject=${encodeURIComponent(a)}&body=${encodeURIComponent(c)}` : null);
  $$(".js-whats").forEach((a) => { const u = linkWhats(CONFIG.mensagemPadrao); if (u) { a.href = u; a.target = "_blank"; a.rel = "noopener"; } });
  $$(".js-email").forEach((a) => { const u = linkEmail("Contato pelo site", CONFIG.mensagemPadrao); if (u) a.href = u; else a.hidden = true; });
  if (!CONFIG.whatsapp) $(".whats-flutuante")?.setAttribute("hidden", "");
  $$(".js-rede").forEach((a) => { const u = CONFIG.redes[a.dataset.rede]; if (u) { a.href = u; a.target = "_blank"; a.rel = "noopener"; } else a.hidden = true; });

  /* menu celular */
  const botaoMenu = $(".menu__abrir"), menu = $("#menu");
  botaoMenu?.addEventListener("click", () => { const ab = menu.classList.toggle("aberto"); botaoMenu.setAttribute("aria-expanded", String(ab)); });
  $$("#menu a").forEach((a) => a.addEventListener("click", () => { menu.classList.remove("aberto"); botaoMenu?.setAttribute("aria-expanded", "false"); }));

  /* carrossel */
  const slides = $$(".slide"), pontos = $(".hero__pontos");
  let atual = 0, timer;
  slides.forEach((_, i) => {
    const b = document.createElement("button");
    b.setAttribute("role", "tab"); b.setAttribute("aria-label", `Destaque ${i + 1}`);
    b.addEventListener("click", () => { ir(i); reiniciar(); });
    pontos.appendChild(b);
  });
  function ir(i) {
    atual = (i + slides.length) % slides.length;
    slides.forEach((s, k) => { s.classList.toggle("ativo", k === atual); s.setAttribute("aria-hidden", String(k !== atual)); });
    $$("button", pontos).forEach((b, k) => b.setAttribute("aria-selected", String(k === atual)));
  }
  const reduzir = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  function reiniciar() { clearInterval(timer); if (!reduzir) timer = setInterval(() => ir(atual + 1), 7000); }
  $(".hero__seta--ant")?.addEventListener("click", () => { ir(atual - 1); reiniciar(); });
  $(".hero__seta--prox")?.addEventListener("click", () => { ir(atual + 1); reiniciar(); });
  ir(0); reiniciar();

  /* abas de soluções */
  const abas = $$('[role="tab"]', $(".abas__lista"));
  function ativar(aba) {
    abas.forEach((a) => { const on = a === aba; a.setAttribute("aria-selected", String(on)); a.tabIndex = on ? 0 : -1; $("#" + a.getAttribute("aria-controls")).hidden = !on; });
  }
  abas.forEach((a, i) => {
    a.addEventListener("click", () => ativar(a));
    a.addEventListener("keydown", (e) => {
      const d = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
      if (d) { e.preventDefault(); const n = abas[(i + d + abas.length) % abas.length]; ativar(n); n.focus(); }
    });
  });

  /* modal de realizações */
  const modal = $("#modal"); let idx = 0, origem = null;
  function mostrar(i) {
    idx = (i + OBRAS.length) % OBRAS.length; const o = OBRAS[idx];
    $("#modal-img").src = o.img; $("#modal-img").alt = o.titulo;
    $("#modal-seg").textContent = o.seg; $("#modal-titulo").textContent = o.titulo; $("#modal-desc").textContent = o.desc;
    $("#modal-lista").replaceChildren(...o.itens.map((t) => Object.assign(document.createElement("li"), { textContent: t })));
  }
  function abrir(i, btn) { origem = btn; mostrar(i); modal.hidden = false; document.body.style.overflow = "hidden"; $(".modal__fechar").focus(); }
  function fechar() { modal.hidden = true; document.body.style.overflow = ""; origem?.focus(); }
  $$(".obra").forEach((b) => b.addEventListener("click", () => abrir(Number(b.dataset.obra), b)));
  $(".modal__fechar").addEventListener("click", fechar);
  modal.addEventListener("click", (e) => { if (e.target === modal) fechar(); });
  $$(".modal__setas button").forEach((b) => b.addEventListener("click", () => mostrar(idx + Number(b.dataset.dir))));
  document.addEventListener("keydown", (e) => {
    if (modal.hidden) return;
    if (e.key === "Escape") fechar();
    if (e.key === "ArrowRight") mostrar(idx + 1);
    if (e.key === "ArrowLeft") mostrar(idx - 1);
  });

  /* formulário */
  const form = $("#form-contato");
  form?.addEventListener("submit", (e) => {
    e.preventDefault(); let ok = true;
    $$("[required]", form).forEach((c) => { const v = !c.value.trim(); c.classList.toggle("erro", v); if (v) ok = false; });
    if (!ok) return;
    const d = Object.fromEntries(new FormData(form));
    const t = `Olá! Sou ${d.nome}${d.empresa ? ", da " + d.empresa : ""}.\n${d.mensagem}${d.telefone ? "\nContato: " + d.telefone : ""}`;
    const u = linkWhats(t) || linkEmail("Contato pelo site: " + (d.empresa || d.nome), t);
    if (u) window.open(u, "_blank", "noopener"); else alert("Canal de contato em configuração. Por favor, tente novamente em breve.");
  });

  $("#ano").textContent = new Date().getFullYear();
})();
