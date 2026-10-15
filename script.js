
const questions = [
  {
    title: "How does your skin feel after cleansing?",
    help: "Think about how it feels before applying moisturizer.",
    options: [
      { text: "Tight or uncomfortable", type: "dry" },
      { text: "Comfortable and balanced", type: "normal" },
      { text: "Shiny or greasy quite quickly", type: "oily" },
      { text: "Dry cheeks but oily forehead or nose", type: "combination" }
    ]
  },
  {
    title: "How does your skin usually look by midday?",
    help: "Choose the description that fits most often.",
    options: [
      { text: "Dull, flaky or dry", type: "dry" },
      { text: "Mostly balanced", type: "normal" },
      { text: "Shiny across most of my face", type: "oily" },
      { text: "Shiny only around my T-zone", type: "combination" }
    ]
  },
  {
    title: "What is your main skincare concern?",
    help: "This helps us personalize your advice.",
    options: [
      { text: "Dryness and dehydration", concern: "hydration" },
      { text: "Breakouts and clogged pores", concern: "breakouts" },
      { text: "Redness and sensitivity", concern: "sensitivity" },
      { text: "Uneven tone and dark spots", concern: "tone" }
    ]
  },
  {
    title: "How does your skin react to new products?",
    help: "Select the closest answer.",
    options: [
      { text: "It often stings or becomes red", sensitive: true },
      { text: "Sometimes it reacts", sensitive: true },
      { text: "Usually it feels fine", sensitive: false },
      { text: "I'm not sure", sensitive: false }
    ]
  }
];

const profiles = {
  dry: {
    name: "Dry Skin",
    advice: "Your skin may benefit from gentle cleansing and richer moisturizers.",
    morning: ["Gentle cleanser or water rinse", "Hydrating moisturizer", "Broad-spectrum SPF 30+"],
    evening: ["Gentle cleanser", "Moisturizer with ceramides or glycerin"]
  },
  oily: {
    name: "Oily Skin",
    advice: "Lightweight, non-comedogenic products may help you feel more balanced.",
    morning: ["Gentle gel cleanser", "Lightweight moisturizer", "Broad-spectrum SPF 30+"],
    evening: ["Gentle cleanser", "Lightweight non-comedogenic moisturizer"]
  },
  combination: {
    name: "Combination Skin",
    advice: "Different areas of your face may need different levels of hydration.",
    morning: ["Gentle cleanser", "Light moisturizer", "Broad-spectrum SPF 30+"],
    evening: ["Gentle cleanser", "Moisturizer, using more on dry areas"]
  },
  normal: {
    name: "Balanced Skin",
    advice: "A simple, consistent routine can help maintain your skin barrier.",
    morning: ["Gentle cleanser", "Moisturizer", "Broad-spectrum SPF 30+"],
    evening: ["Gentle cleanser", "Moisturizer"]
  }
};

const concerns = {
  hydration: "Look for hydrating ingredients such as glycerin or hyaluronic acid.",
  breakouts: "Choose non-comedogenic products and avoid harsh scrubbing.",
  sensitivity: "Prefer fragrance-free products and patch-test new skincare.",
  tone: "Daily sun protection is especially important for uneven skin tone."
};

const titleEl = document.getElementById("question-title");
const helpEl = document.getElementById("question-help");
const optionsEl = document.getElementById("answer-options");
const nextBtn = document.getElementById("next-btn");
const progressLabel = document.getElementById("progress-label");
const progressFill = document.getElementById("progress-fill");
const quizContent = document.getElementById("quiz-content");
const resultEl = document.getElementById("quiz-result");

let step = 0;
let selected = null;
let answers = [];

function renderQuestion() {
  const question = questions[step];
  selected = null;

  titleEl.textContent = question.title;
  helpEl.textContent = question.help;
  progressLabel.textContent =
    String(step + 1).padStart(2, "0") + " / 04";
  progressFill.style.width =
    ((step + 1) / questions.length) * 100 + "%";

  optionsEl.innerHTML = "";
  nextBtn.disabled = true;
  nextBtn.textContent =
    step === questions.length - 1 ? "See My Results →" : "Continue →";

  question.options.forEach((option, index) => {
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

function addText(parent, tag, text, className) {
  const element = document.createElement(tag);
  element.textContent = text;
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

function showResults() {
  const scores = { dry: 0, oily: 0, combination: 0, normal: 0 };

  answers.forEach(answer => {
    if (answer.type) scores[answer.type]++;
  });

  const skinType = Object.keys(scores).reduce((best, current) =>
    scores[current] > scores[best] ? current : best
  );

  const profile = profiles[skinType];
  const concern = answers.find(answer => answer.concern);
  const sensitive = answers.some(answer => answer.sensitive === true);

  quizContent.hidden = true;
  resultEl.hidden = false;
  resultEl.innerHTML = "";

  addText(resultEl, "p", "YOUR SKIN PROFILE", "section-label");
  addText(resultEl, "h2", profile.name, "result-type");
  addText(resultEl, "p", profile.advice);

  if (concern) {
    addText(resultEl, "h3", "Your Skin Concern");
    addText(resultEl, "p", concerns[concern.concern]);
  }

  if (sensitive) {
    addText(resultEl, "p",
      "Your answers also suggest possible sensitivity. Introduce new products slowly.");
  }

  addRoutine(resultEl, "☀ Morning Routine", profile.morning);
  addRoutine(resultEl, "☾ Evening Routine", profile.evening);

  addText(resultEl, "p",
    "This quiz provides general skincare guidance, not a medical diagnosis.");

  const restart = document.createElement("button");
  restart.type = "button";
  restart.className = "answer-option";
  restart.textContent = "↻ Retake the Quiz";
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

  if (step < questions.length) {
    renderQuestion();
  } else {
    showResults();
  }
});

const photoInput = document.getElementById("skin-photo");
const photoPreview = document.getElementById("photo-preview");

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

renderQuestion();
