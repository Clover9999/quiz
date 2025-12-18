// =========================
// QUIZ CRISTÃO LOW TICKET
// =========================

const $ = (sel) => document.querySelector(sel);

const screens = {
  start: $("#screen-start"),
  quiz: $("#screen-quiz"),
  result: $("#screen-result"),
};

const el = {
  year: $("#year"),
  name: $("#name"),
  phone: $("#phone"),
  btnStart: $("#btnStart"),
  btnBack: $("#btnBack"),
  btnNext: $("#btnNext"),
  qCount: $("#qCount"),
  qTitle: $("#qTitle"),
  answers: $("#answers"),
  progressBar: $("#progressBar"),
  resultPill: $("#resultPill"),
  resultTitle: $("#resultTitle"),
  resultDesc: $("#resultDesc"),
  resultBullets: $("#resultBullets"),
  resultNext: $("#resultNext"),
  resultVerse: $("#resultVerse"),
  btnWhats: $("#btnWhats"),
  btnRestart: $("#btnRestart"),
  saveNote: $("#saveNote"),
};

el.year.textContent = new Date().getFullYear();

const QUIZ = [
  {
    id: "q1",
    title: "Quando você pensa em oração, o que mais descreve você hoje?",
    answers: [
      { text: "Tenho dificuldade de começar, parece distante.", tag: "recomeço" },
      { text: "Oro às vezes, mas falta constância.", tag: "constancia" },
      { text: "Tenho uma rotina, mas quero me aprofundar.", tag: "crescimento" },
      { text: "Tenho intimidade e quero servir mais.", tag: "servico" },
    ],
  },
  {
    id: "q2",
    title: "Sua maior luta nos últimos meses tem sido…",
    answers: [
      { text: "Ansiedade e pensamentos acelerados.", tag: "recomeço" },
      { text: "Procrastinação e falta de foco.", tag: "constancia" },
      { text: "Desânimo/rotina espiritual morna.", tag: "constancia" },
      { text: "Quero frutificar mais e ajudar pessoas.", tag: "servico" },
    ],
  },
  {
    id: "q3",
    title: "Quanto tempo você consegue separar por dia para Deus?",
    answers: [
      { text: "0–5 min (quase nada).", tag: "recomeço" },
      { text: "5–10 min.", tag: "constancia" },
      { text: "10–20 min.", tag: "crescimento" },
      { text: "20+ min.", tag: "servico" },
    ],
  },
  {
    id: "q4",
    title: "O que mais te trava de manter uma rotina espiritual?",
    answers: [
      { text: "Culpa / sensação de não ser digno.", tag: "recomeço" },
      { text: "Falta de organização / disciplina.", tag: "constancia" },
      { text: "Falta de direção: não sei o que fazer exatamente.", tag: "crescimento" },
      { text: "Quero algo mais profundo e prático.", tag: "servico" },
    ],
  },
  {
    id: "q5",
    title: "Como você se sente ao ler a Bíblia?",
    answers: [
      { text: "Me perco e não entendo direito.", tag: "recomeço" },
      { text: "Entendo, mas não aplico sempre.", tag: "constancia" },
      { text: "Tenho prazer, mas quero aprofundar.", tag: "crescimento" },
      { text: "Quero ensinar/compartilhar com outras pessoas.", tag: "servico" },
    ],
  },
  {
    id: "q6",
    title: "Qual dessas frases mais parece com seu momento atual?",
    answers: [
      { text: "Preciso voltar pra Deus de verdade.", tag: "recomeço" },
      { text: "Quero ser constante sem depender de emoção.", tag: "constancia" },
      { text: "Quero crescer e ter direção espiritual.", tag: "crescimento" },
      { text: "Quero servir, liderar e frutificar mais.", tag: "servico" },
    ],
  },
  {
    id: "q7",
    title: "O que você quer sentir daqui 30 dias?",
    answers: [
      { text: "Paz e recomeço com Deus.", tag: "recomeço" },
      { text: "Rotina firme e mente mais tranquila.", tag: "constancia" },
      { text: "Mais clareza, disciplina e maturidade.", tag: "crescimento" },
      { text: "Impacto: ajudar outras pessoas na fé.", tag: "servico" },
    ],
  },
  {
    id: "q8",
    title: "Se existisse um plano guiado (versículo + reflexão + oração + ação prática), você…",
    answers: [
      { text: "Preciso disso pra recomeçar sem culpa.", tag: "recomeço" },
      { text: "Quero pra manter constância de verdade.", tag: "constancia" },
      { text: "Quero pra crescer com direção.", tag: "crescimento" },
      { text: "Quero pra usar e também servir outros.", tag: "servico" },
    ],
  },
];

// ✅ chaves com ç precisam estar entre aspas
const PROFILES = {
  "recomeço": {
    pill: "Perfil: Recomeço",
    title: "Você está no tempo do Recomeço",
    desc:
      "Seu coração quer voltar, mas talvez a culpa e o cansaço estejam falando alto. Deus te chama com amor e te dá um novo começo.",
    bullets: [
      "Seu foco agora é recomeçar sem peso.",
      "Pequenos passos diários vão reconstruir sua constância.",
      "Você precisa de um plano simples e acolhedor.",
    ],
    next:
      "Hoje: separe 5 minutos. Faça uma oração curta e anote 1 frase do que Deus falou com você.",
    verse:
      "“Cheguem perto de Deus, e ele se chegará a vocês.” (Tiago 4:8)",
  },
  constancia: {
    pill: "Perfil: Constância",
    title: "Você está no tempo da Constância",
    desc:
      "Você já tem fé e vontade, mas falta ritmo. Seu desafio é criar disciplina espiritual mesmo nos dias comuns.",
    bullets: [
      "Seu foco é consistência (não perfeição).",
      "Uma rotina guiada elimina a dúvida do “por onde começar”.",
      "A constância vai trazer paz e clareza.",
    ],
    next:
      "Hoje: escolha um horário fixo por 7 dias. Mesmo que seja pouco, seja fiel ao combinado.",
    verse:
      "“Sejam firmes, inabaláveis… sabendo que o trabalho de vocês no Senhor não é inútil.” (1 Coríntios 15:58)",
  },
  crescimento: {
    pill: "Perfil: Crescimento",
    title: "Você está no tempo do Crescimento",
    desc:
      "Você já caminha com Deus, mas quer direção e profundidade. Seu próximo nível é maturidade e aplicação prática da Palavra.",
    bullets: [
      "Seu foco é aprofundar e aplicar o que lê.",
      "Você cresce quando transforma Palavra em atitude.",
      "Rotina guiada + reflexão vai acelerar sua maturidade.",
    ],
    next:
      "Hoje: leia um trecho curto e responda: “O que isso muda no meu dia?” Escreva 1 ação prática.",
    verse:
      "“Cresçam na graça e no conhecimento de nosso Senhor e Salvador Jesus Cristo.” (2 Pedro 3:18)",
  },
  servico: {
    pill: "Perfil: Serviço",
    title: "Você está no tempo do Serviço",
    desc:
      "Você quer frutificar e impactar pessoas. Seu chamado agora é consolidar hábitos e transbordar vida onde Deus te plantou.",
    bullets: [
      "Seu foco é frutificar com equilíbrio.",
      "Serviço nasce de intimidade (não de cobrança).",
      "Você tem perfil de influência e cuidado.",
    ],
    next:
      "Hoje: ore por 1 pessoa específica e mande uma mensagem edificante (sem pressionar).",
    verse:
      "“Cada um exerça o dom que recebeu para servir aos outros…” (1 Pedro 4:10)",
  },
};

let state = {
  step: 0,
  answers: Array(QUIZ.length).fill(null), // index -> {aIndex, tag}
};

function show(screen) {
  Object.values(screens).forEach((s) => s.classList.add("hidden"));
  screens[screen].classList.remove("hidden");
}

function renderQuestion() {
  const q = QUIZ[state.step];
  el.qCount.textContent = `Pergunta ${state.step + 1} de ${QUIZ.length}`;
  el.qTitle.textContent = q.title;

  const pct = Math.round((state.step / QUIZ.length) * 100);
  el.progressBar.style.width = `${pct}%`;

  el.answers.innerHTML = "";
  q.answers.forEach((a, i) => {
    const row = document.createElement("label");
    row.className = "answer";
    row.innerHTML = `
      <input type="radio" name="ans" value="${i}" />
      <div>${a.text}</div>
    `;

    const saved = state.answers[state.step];
    if (saved && saved.aIndex === i) {
      row.classList.add("selected");
      row.querySelector("input").checked = true;
      el.btnNext.disabled = false;
    }

    row.addEventListener("click", () => {
      [...el.answers.querySelectorAll(".answer")].forEach((x) => x.classList.remove("selected"));
      row.classList.add("selected");

      state.answers[state.step] = { aIndex: i, tag: a.tag };
      el.btnNext.disabled = false;
      persist();
    });

    el.answers.appendChild(row);
  });

  el.btnBack.disabled = state.step === 0;
}

function calcResult() {
  // ✅ também precisa de aspas aqui
  const score = { "recomeço": 0, constancia: 0, crescimento: 0, servico: 0 };

  state.answers.forEach((a) => {
    if (a?.tag && score[a.tag] !== undefined) score[a.tag] += 1;
  });

  let topTag = "constancia";
  let topVal = -1;
  for (const [k, v] of Object.entries(score)) {
    if (v > topVal) {
      topVal = v;
      topTag = k;
    }
  }

  return { topTag, score };
}

function renderResult() {
  const { topTag, score } = calcResult();
  const p = PROFILES[topTag];

  el.resultPill.textContent = p.pill;
  el.resultTitle.textContent = p.title;
  el.resultDesc.textContent = p.desc;

  el.resultBullets.innerHTML = "";
  p.bullets.forEach((b) => {
    const li = document.createElement("li");
    li.textContent = b;
    el.resultBullets.appendChild(li);
  });

  el.resultNext.textContent = p.next;
  el.resultVerse.textContent = p.verse;

  el.progressBar.style.width = `100%`;

  const nm = (el.name.value || "").trim();
  el.saveNote.textContent = nm
    ? `Resultado gerado para: ${nm} • Você pode copiar e colar o texto no seu direct/WhatsApp.`
    : `Você pode copiar e colar o texto no seu direct/WhatsApp.`;

  const phone = (el.phone.value || "").replace(/\D/g, "");
  const msg = buildWhatsMessage(nm, score, p);

  el.btnWhats.onclick = () => {
    const url = phone
      ? `https://wa.me/55${phone}?text=${encodeURIComponent(msg)}`
      : `https://wa.me/?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank");
  };
}

function buildWhatsMessage(name, score, profile) {
  const nm = name ? `Olá! Aqui é ${name}.` : "Olá!";
  return [
    nm,
    "",
    "✅ Fiz o Quiz da Jornada com Deus e meu perfil deu:",
    `➡️ ${profile.title}`,
    "",
    "Resumo:",
    `• Recomeço: ${score["recomeço"]}`,
    `• Constância: ${score["constancia"]}`,
    `• Crescimento: ${score["crescimento"]}`,
    `• Serviço: ${score["servico"]}`,
    "",
    "Quero o eBook/Plano de 30 dias pra continuar com um passo a passo (versículo + reflexão + oração + ação prática).",
    "Pode me enviar o link de compra e as instruções?",
  ].join("\n");
}

function persist() {
  const data = {
    step: state.step,
    answers: state.answers,
    name: el.name.value,
    phone: el.phone.value,
  };
  localStorage.setItem("quizCristaoLowTicket", JSON.stringify(data));
}

function restore() {
  const raw = localStorage.getItem("quizCristaoLowTicket");
  if (!raw) return;
  try {
    const data = JSON.parse(raw);
    if (data?.answers?.length === QUIZ.length) {
      state.step = data.step ?? 0;
      state.answers = data.answers;
      el.name.value = data.name ?? "";
      el.phone.value = data.phone ?? "";
    }
  } catch (e) {}
}

function resetAll() {
  localStorage.removeItem("quizCristaoLowTicket");
  state = { step: 0, answers: Array(QUIZ.length).fill(null) };
  el.name.value = "";
  el.phone.value = "";
}

el.btnStart.addEventListener("click", () => {
  persist();
  show("quiz");
  renderQuestion();
});

el.btnBack.addEventListener("click", () => {
  if (state.step > 0) {
    state.step -= 1;
    persist();
    renderQuestion();
    el.btnNext.disabled = !state.answers[state.step];
  }
});

el.btnNext.addEventListener("click", () => {
  if (!state.answers[state.step]) return;

  if (state.step < QUIZ.length - 1) {
    state.step += 1;
    persist();
    renderQuestion();
    el.btnNext.disabled = !state.answers[state.step];
  } else {
    persist();
    show("result");
    renderResult();
  }
});

el.btnRestart.addEventListener("click", () => {
  resetAll();
  show("start");
});

restore();
show("start");

