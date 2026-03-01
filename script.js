let slides = document.querySelectorAll('.slide');
let current = 0;

setInterval(() => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}, 3000);

const text = "Dear you,\n\nHappy Birthday. I hope this year brings you joy, laughter, and everything soft and magical.\n\nLove always 💕";
let i = 0;
let typingStarted = false;

function typeWriter() {
  if (i < text.length) {
    document.getElementById("typewriter").innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 50);
  }
}

// Trigger typing when letter section comes into view
const letterSection = document.querySelector('.letter');
const typewriterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting && !typingStarted) {
      typingStarted = true;
      typeWriter();
    }
  });
});

typewriterObserver.observe(letterSection);

document.getElementById("soulmateBtn").onclick = () => {
  document.getElementById("shrug").classList.remove("hidden");
  document.getElementById("errorText").innerText = "404 soulmate not found 🤷‍♀️";
};

const soulmateBtn = document.getElementById("soulmateBtn");
const fortuneResult = document.getElementById("fortuneResult");
const hideSadnessBtn = document.getElementById("hideSadnessBtn");

soulmateBtn.addEventListener("click", () => {
  soulmateBtn.style.display = "none";
  fortuneResult.classList.remove("hidden");
});

hideSadnessBtn.addEventListener("click", () => {
  fortuneResult.classList.add("hidden");
  soulmateBtn.style.display = "block";
});