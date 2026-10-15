
const translations = {
  ar: {
    questions: [
      {
        title: "كيف تشعر ببشرتك بعد غسل الوجه؟",
        help: "فكر في إحساس بشرتك قبل وضع المرطب.",
        options: [
          { text: "مشدودة أو جافة", type: "dry" },
          { text: "مريحة ومتوازنة", type: "normal" },
          { text: "لامعة أو دهنية بسرعة", type: "oily" },
          { text: "الخدان جافان والجبهة أو الأنف دهنيان", type: "combination" }
        ]
      },
      {
        title: "كيف تبدو بشرتك في منتصف اليوم؟",
        help: "اختر الوصف الأقرب إلى بشرتك.",
        options: [
          { text: "جافة أو متقشرة", type: "dry" },
          { text: "متوازنة", type: "normal" },
          { text: "لامعة في معظم الوجه", type: "oily" },
          { text: "لامعة في منطقة الجبهة والأنف فقط", type: "combination" }
        ]
      },
      {
        title: "ما المشكلة الأساسية التي تريد علاجها؟",
        help: "سيساعدنا ذلك على تخصيص روتينك.",
        options: [
          { text: "الجفاف ونقص الترطيب", concern: "hydration" },
          { text: "الحبوب وانسداد المسام", concern: "acne" },
          { text: "الاحمرار والحساسية", concern: "sensitivity" },
          { text: "البقع وتفاوت لون البشرة", concern: "tone" }
        ]
      },
      {
        title: "كيف تتفاعل بشرتك مع المنتجات الجديدة؟",
        help: "اختر الإجابة الأقرب إلى تجربتك.",
        options: [
          { text: "غالباً أشعر بالحرقان أو الاحمرار", sensitive: true },
          { text: "أحياناً تتفاعل بشرتي", sensitive: true },
          { text: "عادة لا توجد مشكلة", sensitive: false },
          { text: "لست متأكداً", sensitive: false }
        ]
      }
    ],
    types: {
      dry: "بشرة جافة",
      oily: "بشرة دهنية",
      combination: "بشرة مختلطة",
      normal: "بشرة عادية"
    },
    routines: {
      dry: {
        morning: ["غسول لطيف أو غسل بالماء", "مرطب غني بالسيراميدات أو الغليسرين", "واقي شمس واسع الطيف SPF 30+"],
        evening: ["غسول لطيف", "مرطب غني لدعم حاجز البشرة"]
      },
      oily: {
        morning: ["غسول جل لطيف", "مرطب خفيف غير مسبب لانسداد المسام", "واقي شمس واسع الطيف SPF 30+"],
        evening: ["غسول لطيف", "مرطب خفيف"]
      },
      combination: {
        morning: ["غسول لطيف", "مرطب خفيف مع ترطيب إضافي للمناطق الجافة", "واقي شمس واسع الطيف SPF 30+"],
        evening: ["غسول لطيف", "مرطب مناسب للمناطق الجافة والدهنية"]
      },
      normal: {
        morning: ["غسول لطيف", "مرطب مناسب", "واقي شمس واسع الطيف SPF 30+"],
        evening: ["غسول لطيف", "مرطب"]
      }
    },
    concerns: {
      hydration: "ابحث عن الغليسرين وحمض الهيالورونيك والسيراميدات.",
      acne: "اختر منتجات غير مسببة لانسداد المسام وتجنب الفرك القاسي.",
      sensitivity: "اختر منتجات خالية من العطور وجرب المنتج على مساحة صغيرة أولاً.",
      tone: "الحماية اليومية من الشمس مهمة للحد من تفاقم البقع."
    },
    continue: "متابعة ←",
    resultsButton: "عرض نتائجي ←",
    resultTitle: "ملف بشرتك",
    morning: "☀ الروتين الصباحي",
    evening: "☾ الروتين المسائي",
    concernTitle: "نصيحة لمشكلتك الأساسية",
    sensitive: "قد تكون بشرتك حساسة. أدخل المنتجات الجديدة تدريجياً.",
    disclaimer: "هذه توصيات تعليمية عامة وليست تشخيصاً طبياً.",
    restart: "↻ إعادة الاختبار"
  },

  en: {
    questions: [
      {
        title: "How does your skin feel after cleansing?",
        help: "Think about how it feels before applying moisturizer.",
        options: [
          { text: "Tight or dry", type: "dry" },
          { text: "Comfortable and balanced", type: "normal" },
          { text: "Shiny or oily quickly", type: "oily" },
          { text: "Dry cheeks but oily forehead or nose", type: "combination" }
        ]
      },
      {
        title: "How does your skin look by midday?",
        help: "Choose the closest description.",
        options: [
          { text: "Dry or flaky", type: "dry" },
          { text: "Balanced", type: "normal" },
          { text: "Shiny across most of my face", type: "oily" },
          { text: "Shiny mainly in the T-zone", type: "combination" }
        ]
      },
      {
        title: "What is your main skin concern?",
        help: "This helps personalize your routine.",
        options: [
          { text: "Dryness and dehydration", concern: "hydration" },
          { text: "Breakouts and clogged pores", concern: "acne" },
          { text: "Redness and sensitivity", concern: "sensitivity" },
          { text: "Dark spots and uneven tone", concern: "tone" }
        ]
      },
      {
        title: "How does your skin react to new products?",
        help: "Select the closest answer.",
        options: [
          { text: "Often stings or becomes red", sensitive: true },
          { text: "Sometimes reacts", sensitive: true },
          { text: "Usually fine", sensitive: false },
          { text: "I'm not sure", sensitive: false }
        ]
      }
    ],
    types: {
      dry: "Dry skin",
      oily: "Oily skin",
      combination: "Combination skin",
      normal: "Normal skin"
    },
    routines: {
      dry: {
        morning: ["Gentle cleanser or water rinse", "Rich moisturizer with ceramides or glycerin", "Broad-spectrum SPF 30+ sunscreen"],
        evening: ["Gentle cleanser", "Rich barrier-supporting moisturizer"]
      },
      oily: {
        morning: ["Gentle gel cleanser", "Lightweight non-comedogenic moisturizer", "Broad-spectrum SPF 30+ sunscreen"],
        evening: ["Gentle cleanser", "Lightweight moisturizer"]
      },
      combination: {
        morning: ["Gentle cleanser", "Lightweight moisturizer, more on dry areas", "Broad-spectrum SPF 30+ sunscreen"],
        evening: ["Gentle cleanser", "Moisturizer suited to dry and oily areas"]
      },
      normal: {
        morning: ["Gentle cleanser", "Moisturizer", "Broad-spectrum SPF 30+ sunscreen"],
        evening: ["Gentle cleanser", "Moisturizer"]
      }
    },
    concerns: {
      hydration: "Look for glycerin, hyaluronic acid and ceramides.",
      acne: "Choose non-comedogenic products and avoid harsh scrubs.",
      sensitivity: "Prefer fragrance-free products and patch-test first.",
      tone: "Daily sun protection helps prevent dark spots from worsening."
    },
    continue: "Continue →",
    resultsButton: "See my results →",
    resultTitle: "YOUR SKIN PROFILE",
    morning: "☀ Morning routine",
    evening: "☾ Evening routine",
    concernTitle: "Advice for your main concern",
    sensitive: "Your skin may be sensitive. Introduce new products gradually.",
    disclaimer: "These are general educational recommendations, not a medical diagnosis.",
    restart: "↻ Retake quiz"
  },

  fr: {
    questions: [
      {
        title: "Comment se sent votre peau après le nettoyage ?",
        help: "Pensez à votre peau avant d'appliquer une crème.",
        options: [
          { text: "Tiraille ou semble sèche", type: "dry" },
          { text: "Confortable et équilibrée", type: "normal" },
          { text: "Brillante ou grasse rapidement", type: "oily" },
          { text: "Joues sèches, front ou nez gras", type: "combination" }
        ]
      },
      {
        title: "Comment est votre peau à midi ?",
        help: "Choisissez la description la plus proche.",
        options: [
          { text: "Sèche ou squameuse", type: "dry" },
          { text: "Équilibrée", type: "normal" },
          { text: "Brillante sur presque tout le visage", type: "oily" },
          { text: "Brillante surtout sur la zone T", type: "combination" }
        ]
      },
      {
        title: "Quelle est votre principale préoccupation ?",
        help: "Cela nous aide à personnaliser votre routine.",
        options: [
          { text: "Sécheresse et déshydratation", concern: "hydration" },
          { text: "Boutons et pores obstrués", concern: "acne" },
          { text: "Rougeurs et sensibilité", concern: "sensitivity" },
          { text: "Taches et teint irrégulier", concern: "tone" }
        ]
      },
      {
        title: "Comment votre peau réagit-elle aux nouveaux produits ?",
        help: "Choisissez la réponse la plus proche.",
        options: [
          { text: "Picotements ou rougeurs fréquents", sensitive: true },
          { text: "Réagit parfois", sensitive: true },
          { text: "Généralement bien", sensitive: false },
          { text: "Je ne sais pas", sensitive: false }
        ]
      }
    ],
    types: {
      dry: "Peau sèche",
      oily: "Peau grasse",
      combination: "Peau mixte",
      normal: "Peau normale"
    },
    routines: {
      dry: {
        morning: ["Nettoyant doux ou rinçage à l'eau", "Crème riche aux céramides ou à la glycérine", "Protection solaire large spectre SPF 30+"],
        evening: ["Nettoyant doux", "Crème hydratante riche"]
      },
      oily: {
        morning: ["Gel nettoyant doux", "Hydratant léger non comédogène", "Protection solaire large spectre SPF 30+"],
        evening: ["Nettoyant doux", "Hydratant léger"]
      },
      combination: {
        morning: ["Nettoyant doux", "Hydratant léger, davantage sur les zones sèches", "Protection solaire large spectre SPF 30+"],
        evening: ["Nettoyant doux", "Hydratant adapté aux différentes zones"]
      },
      normal: {
        morning: ["Nettoyant doux", "Crème hydratante", "Protection solaire large spectre SPF 30+"],
        evening: ["Nettoyant doux", "Crème hydratante"]
      }
    },
    concerns: {
      hydration: "Recherchez la glycérine, l'acide hyaluronique et les céramides.",
      acne: "Choisissez des produits non comédogènes et évitez les gommages agressifs.",
      sensitivity: "Privilégiez les produits sans parfum et faites un test cutané.",
      tone: "La protection solaire quotidienne aide à prévenir l'aggravation des taches."
    },
    continue: "Continuer →",
    resultsButton: "Voir mes résultats →",
    resultTitle: "VOTRE PROFIL DE PEAU",
    morning: "☀ Routine du matin",
    evening: "☾ Routine du soir",
    concernTitle: "Conseil pour votre préoccupation",
    sensitive: "Votre peau peut être sensible. Introduisez les nouveaux produits progressivement.",
    disclaimer: "Ces conseils sont éducatifs et ne constituent pas un diagnostic médical.",
    restart: "↻ Refaire le quiz"
  }
};

let currentLanguage = localStorage.getItem("skiniq-language") || "fr";
if (!translations[currentLanguage]) currentLanguage = "fr";

let step = 0;
let selected = null;
let answers = [];

const titleEl = document.getElementById("question-title");
const helpEl = document.getElementById("question-help");
const optionsEl = document.getElementById("answer-options");
const nextBtn = document.getElementById("next-btn");
const progressLabel = document.getElementById("progress-label");
const progressFill = document.getElementById("progress-fill");
const quizContent = document.getElementById("quiz-content");
const resultEl = document.getElementById("quiz-result");

function addText(parent, tag, value, className = "") {
  const element = document.createElement(tag);
  element.textContent = value;
  if (className) element.className = className;
  parent.appendChild(element);
  return element;
}

function addRoutine(parent, heading, items) {
  addText(parent, "h3", heading);
  const list = document.createElement("ol");
  items.forEach(item => addText(list, "li", item));
  parent.appendChild(list);
}

function renderQuestion() {
  const data = translations[currentLanguage];
  const question = data.questions[step];

  selected = null;
  titleEl.textContent = question.title;
  helpEl.textContent = question.help;

  progressLabel.textContent =
    String(step + 1).padStart(2, "0") + " / 04";

  progressFill.style.width =
    ((step + 1) / data.questions.length) * 100 + "%";

  optionsEl.innerHTML = "";
  nextBtn.disabled = true;
  nextBtn.textContent =
    step === data.questions.length - 1
      ? data.resultsButton
      : data.continue;

  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "answer-option";
    button.textContent = option.text;

    button.addEventListener("click", () => {
      selected = option;
      optionsEl.querySelectorAll(".answer-option")
        .forEach(item => item.classList.remove("selected"));
      button.classList.add("selected");
      nextBtn.disabled = false;
    });

    optionsEl.appendChild(button);
  });
}

function showResults() {
  const data = translations[currentLanguage];
  const scores = { dry: 0, oily: 0, combination: 0, normal: 0 };

  answers.forEach(answer => {
    if (answer.type && answer.type in scores) {
      scores[answer.type]++;
    }
  });

  const skinType = Object.keys(scores).reduce((best, current) =>
    scores[current] > scores[best] ? current : best
  );

  const concern = answers.find(answer => answer.concern);
  const sensitive = answers.some(answer => answer.sensitive === true);

  quizContent.hidden = true;
  resultEl.hidden = false;
  resultEl.innerHTML = "";

  addText(resultEl, "p", data.resultTitle, "section-label");
  addText(resultEl, "h2", data.types[skinType], "result-type");

  if (concern) {
    addText(resultEl, "h3", data.concernTitle);
    addText(resultEl, "p", data.concerns[concern.concern]);
  }

  if (sensitive) {
    addText(resultEl, "p", data.sensitive);
  }

  addRoutine(resultEl, data.morning, data.routines[skinType].morning);
  addRoutine(resultEl, data.evening, data.routines[skinType].evening);

  addText(resultEl, "p", data.disclaimer);

  const restart = document.createElement("button");
  restart.type = "button";
  restart.className = "answer-option";
  restart.textContent = data.restart;

  restart.addEventListener("click", () => {
    step = 0;
    answers = [];
    resultEl.hidden = true;
    quizContent.hidden = false;
    renderQuestion();
  });

  resultEl.appendChild(restart);
}

nextBtn.addEventListener("click", () => {
  if (!selected) return;

  answers.push(selected);
  step++;

  if (step < translations[currentLanguage].questions.length) {
    renderQuestion();
  } else {
    showResults();
  }
});

const photoInput = document.getElementById("skin-photo");
const photoPreview = document.getElementById("photo-preview");

if (photoInput && photoPreview) {
  photoInput.addEventListener("change", () => {
    const file = photoInput.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      photoPreview.src = reader.result;
      photoPreview.hidden = false;
    };
    reader.readAsDataURL(file);
  });
}

function setLanguage(language) {
  if (!translations[language]) return;

  currentLanguage = language;
  localStorage.setItem("skiniq-language", language);
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

  step = 0;
  answers = [];
  resultEl.hidden = true;
  quizContent.hidden = false;
  renderQuestion();
}

document.documentElement.lang = currentLanguage;
document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";

renderQuestion();

