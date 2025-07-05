const quotes = [
  "Take care of your body. It’s the only place you have to live.",
  "Your health is an investment, not an expense.",
  "A healthy outside starts from the inside.",
  "Don’t wish for it. Work for it.",
  "Health is not about the weight you lose, but the life you gain.",
  "The greatest wealth is health.",
  "Fitness is about being better than your past self.",
  "It’s never too early or too late to work towards being the healthiest you.",
  "You are what you eat — so don’t be fast, cheap, easy, or fake.",
  "Small steps every day lead to big results.",
  "Discipline is the bridge between goals and accomplishment.",
  "Eat to fuel your body, not to feed your emotions.",
  "The difference between try and triumph is a little 'umph'.",
  "Wellness is the complete integration of body, mind, and spirit.",
  "What seems impossible today will one day become your warm-up.",
  "Fall in love with taking care of yourself.",
  "Don’t count the days, make the days count.",
  "Push yourself because no one else is going to do it for you.",
  "Your future self will thank you for what you do today.",
  "Strong is the new skinny.",
  "You don’t have to be extreme, just consistent.",
  "Health is the crown on the well person’s head that only the ill can see.",
  "Love yourself enough to live a healthy lifestyle.",
  "Results happen over time, not overnight.",
  "If you’re tired of starting over, stop giving up.",
  "Health requires healthy food.",
  "Wake up with determination, go to bed with satisfaction.",
  "Believe you can and you're halfway there.",
  "Convince your mind, your body will follow.",
  "Sweat is fat crying.",
  "Consistency is more important than perfection.",
  "You don’t have to go fast. You just have to go.",
  "Create healthy habits, not restrictions.",
  "Hustle for that muscle.",
  "Eat clean, train mean, live lean.",
  "The only bad workout is the one that didn’t happen.",
  "No pain, no gain.",
  "Exercise shapes your body and mindset.",
  "Motivation gets you going, but discipline keeps you growing.",
  "You are your only limit.",
  "Stop doubting yourself. Work hard and make it happen.",
  "If it doesn’t challenge you, it won’t change you.",
  "Progress is progress, even when slow.",
  "Take the risk or lose the chance.",
  "A little progress each day adds up to big results.",
  "Good things come to those who sweat.",
  "Eat for the body you want, not for the body you have.",
  "The groundwork for all happiness is good health.",
  "Strive for progress, not perfection.",
  "Being healthy and fit isn’t a fad or a trend, it’s a lifestyle.",
  "No excuses. Just results.",
  "You’re only one workout away from a good mood.",
  "Your only competition is who you were yesterday.",
  "Work hard in silence, let your success be your noise.",
  "It’s going to be a journey. It’s not a sprint to get in shape.",
  "You miss 100% of the shots you don’t take.",
  "Keep your vitality. A life without health is like a river without water.",
  "Do what you’ve never done to get what you’ve never had.",
  "Your health is your responsibility.",
  "Health is a relationship between you and your body.",
  "Move it or lose it.",
  "Every healthy day is a victory.",
  "Make your body the sexiest outfit you own.",
  "There is no elevator to success — you have to take the stairs.",
  "Sweat, smile, repeat.",
  "Stronger than yesterday.",
  "Success starts with self-discipline.",
  "Make yourself a priority.",
  "Excuses don’t burn calories.",
  "Be stronger than your strongest excuse.",
  "The pain you feel today will be the strength you feel tomorrow.",
  "Nothing tastes as good as being fit feels.",
  "You don't find willpower — you create it.",
  "Healthy isn’t a goal — it’s a way of living.",
  "Mindset is what separates the best from the rest.",
  "You are capable of more than you know.",
  "The best project you'll ever work on is you.",
  "Train like a beast, look like a beauty.",
  "Sweat now, shine later.",
  "Be fit. Be healthy. Be happy.",
  "Train insane or remain the same.",
  "The scale is just a number. Focus on how you feel.",
  "Stop stopping yourself.",
  "Respect your body. It’s the only one you get.",
  "Slow progress is better than no progress.",
  "Lift with purpose. Lead with power.",
  "Health isn’t a punishment — it’s a gift.",
  "You don’t get the ass you want by sitting on it.",
  "Don’t limit your challenges — challenge your limits.",
  "Your body deserves the best.",
  "Success is the sum of small efforts, repeated daily.",
  "When you feel like quitting, think about why you started.",
  "You didn’t come this far just to come this far.",
  "Pain is temporary. Pride is forever.",
  "A fit body fuels a sharp mind.",
  "Fitness is not a destination, it’s a way of life.",
  "You’re not tired — you’re uninspired.",
  "Make health your hobby.",
  "Healthy habits create a healthy life.",
  "Keep going. You’re getting there.",
  "Today’s choices build tomorrow’s body.",
  "You’re worth the effort.",
];

function showQuote() {
  const quoteBox = document.getElementById("quoteBox");
  if (quoteBox) {
    const random = Math.floor(Math.random() * quotes.length);
    quoteBox.classList.remove("fade");
    void quoteBox.offsetWidth;
    quoteBox.classList.add("fade");
    quoteBox.innerText = quotes[random];
  }
}

showQuote();
setInterval(showQuote, 8000);
var btn = document.querySelector("button");
if (btn) {
  btn.addEventListener("click", () => {
    btn.classList.remove("glow-click");
    void btn.offsetWidth;
    btn.classList.add("glow-click");
  });
}

const backBtn = document.querySelector(".go-back");
if (backBtn) {
  backBtn.addEventListener("click", () => {
    setTimeout(function () {
      window.location.href = "index.html";
    }, 500);
  });
}
const checkBtn = document.querySelector("#checkBtn");
if (checkBtn) {
  checkBtn.addEventListener("click", () => {
    setTimeout(function () {
      window.location.href = "calculator.html";
    }, 500);
  });
}
const hipSection = document.querySelector(".hip-box");
const genderSelect = document.getElementById("gender");
const hipInput = document.getElementById("hip");
genderSelect.addEventListener("change", () => {
  if (genderSelect.value === "male") {
    hipSection.style.display = "none";
    hipInput.removeAttribute("required");
    hipInput.value = "";
  } else {
    hipSection.style.display = "inline-block";
    hipInput.setAttribute("required", "required");
  }
});
const form = document.getElementById("userForm");
const errorMsg = document.getElementById("formErrorMsg");
form.addEventListener("input", () => {
  if (form.checkValidity()) {
    errorMsg.style.display = "none";
  }
});

function calculateBMI(weightInKg, heightInMeters) {
  if (heightInMeters <= 0) return 0;
  return (weightInKg / (heightInMeters * heightInMeters)).toFixed(2);
}

function calculateBFP({ gender, height, neck, waist, hip }) {
  const log10 = (x) => Math.log(x) / Math.LN10;

  if (gender === "male") {
    const denominator =
      1.0324 - 0.19077 * log10(waist - neck) + 0.15456 * log10(height);
    return (495 / denominator - 450).toFixed(2);
  }

  if (gender === "female") {
    const denominator =
      1.29579 - 0.35004 * log10(waist + hip - neck) + 0.221 * log10(height);
    return (495 / denominator - 450).toFixed(2);
  }

  return 0;
}

async function generateAIReport(prompt) {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer api-key",
      },
      body: JSON.stringify({
        model: "gpt-4",
        messages: [
          {
            role: "system",
            content: "You are a professional AI health assistant.",
          },
          { role: "user", content: prompt },
        ],
        temperature: 0.7,
      }),
    });

    const data = await response.json();
    return data.choices[0].message.content;
  } catch (error) {
    console.log("There was an error while fetching data from GPT: ", error);
    return null;
  }
}

document
  .querySelector(".generate-report")
  .addEventListener("click", async (e) => {
    if (!form.checkValidity()) {
      e.preventDefault();
      errorMsg.style.display = "block";
      return;
    } else {
      errorMsg.style.display = "none";
    }

    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);

    const occupation = document.getElementById("occupation").value;
    const gender = genderSelect.value;
    let height = parseFloat(document.getElementById("height").value);
    const heightUnit = document.getElementById("heightUnit").value;
    if (heightUnit === "cm") {
      height = height / 100;
    } else if (heightUnit === "ft") {
      height = height * 0.3048;
    }

    let weight = parseFloat(document.getElementById("weight").value);
    const weightUnit = document.getElementById("weightUnit").value;
    if (weightUnit === "lb") {
      weight = weight * 0.453592;
    }

    let neck = parseFloat(document.getElementById("neck").value);
    const neckUnit = document.getElementById("neckUnit").value;
    if (neckUnit === "in") {
      neck = neck * 2.54;
    }

    let waist = parseFloat(document.getElementById("waist").value);
    const waistUnit = document.getElementById("waistUnit").value;
    if (waistUnit === "in") {
      waist = waist * 2.54;
    }

    let hip = parseFloat(document.getElementById("hip").value);
    const hipUnit = document.getElementById("hipUnit").value;
    if (hipUnit === "in") {
      hip = hip * 2.54;
    }

    let userBMI = calculateBMI(weight, height);
    const heightInCm = height * 100;
    let userBFP = calculateBFP({
      gender,
      height: heightInCm,
      neck,
      waist,
      hip,
    });
    document.querySelector(".container").style.display = "none";
    const reportBox = document.querySelector(".report");
    document.querySelector(".report").style.display = "block";
    const prompt = `You are NutriBot, a professional AI health assistant trained in nutrition, fitness science, and wellness coaching.Create a clear, personalized, and professional health report for the following user:
- Name: ${name}
- Age: ${age} years
- Gender: ${gender}
- Height: ${height} m
- Weight: ${weight} kg
- Occupation: ${occupation}
- BMI: ${userBMI}
- BFP: ${userBFP} %

Your response should include:

1. A formal introduction addressing the user by name and referencing the purpose of the report.
2. An interpretation of their BMI and BFP — include what the values mean and which category they fall into.
3. A short analysis of any health implications or areas of improvement (if applicable), phrased professionally and constructively.
4. Tailored recommendations:
   - **Diet**: Macronutrient balance, hydration, meal timing, or key food choices.
   - **Exercise**: Specific training styles (cardio, strength, flexibility), frequency, or lifestyle fit.
   - **Wellness habits**: Suggestions for sleep, stress management, and screen-time balance.
5. A professional closing statement offering encouragement and inviting the user to explore the chatbot (NutriBot) for guidance on diet plans, workouts, or health-related questions.

Maintain a tone that is professional, evidence-informed, and reassuring.`;

    reportBox.innerHTML = `<span class="spinner"></span> Generating your AI-powered health report...`;

    try {
      const aiReport = await generateAIReport(prompt);
      reportBox.innerText = aiReport;
    } catch (err) {
      reportBox.innerText =
        "⚠️ Failed to fetch AI report. Please try again later.";
      console.error(err);
    }

    reportBox.innerHTML += `<br><br><em>🤖 Need more guidance? Ask <strong>NutriBot</strong> below for a customized diet plan, workout routine, or any health-related advice!</em>`;
  });
// window.addEventListener("DOMContentLoaded", async () => {
//   if (window.location.pathname.endsWith("report.html")) {
//     const reportBox = document.querySelector(".report");
//     const user = JSON.parse(localStorage.getItem("healthData"));

//     if (!user || !reportBox) {
//       reportBox.innerText =
//         "⚠️ No user data found. Please go back and try again.";
//       return;
//     }
//     const prompt = `You are NutriBot, a professional AI health assistant trained in nutrition, fitness science, and wellness coaching.Create a clear, personalized, and professional health report for the following user:
// - Name: ${user.name}
// - Age: ${user.age} years
// - Gender: ${user.gender}
// - Height: ${user.height} m
// - Weight: ${user.weight} kg
// - Occupation: ${user.occupation}
// - BMI: ${user.BMI}
// - BFP: ${user.BFP} %

// Your response should include:

// 1. A formal introduction addressing the user by name and referencing the purpose of the report.
// 2. An interpretation of their BMI and BFP — include what the values mean and which category they fall into.
// 3. A short analysis of any health implications or areas of improvement (if applicable), phrased professionally and constructively.
// 4. Tailored recommendations:
//    - **Diet**: Macronutrient balance, hydration, meal timing, or key food choices.
//    - **Exercise**: Specific training styles (cardio, strength, flexibility), frequency, or lifestyle fit.
//    - **Wellness habits**: Suggestions for sleep, stress management, and screen-time balance.
// 5. A professional closing statement offering encouragement and inviting the user to explore the chatbot (NutriBot) for guidance on diet plans, workouts, or health-related questions.

// Maintain a tone that is professional, evidence-informed, and reassuring.`;

//     reportBox.innerHTML = `<span class="spinner"></span> Generating your AI-powered health report...`;

//     try {
//       const aiReport = await generateAIReport(prompt);
//       reportBox.innerText = aiReport;
//     } catch (err) {
//       reportBox.innerText =
//         "⚠️ Failed to fetch AI report. Please try again later.";
//       console.error(err);
//     }

//     reportBox.innerHTML += `<br><br><em>🤖 Need more guidance? Ask <strong>NutriBot</strong> below for a customized diet plan, workout routine, or any health-related advice!</em>`;
//   }
// });
