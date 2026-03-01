let slides = document.querySelectorAll('.slide');
let current = 0;

setInterval(() => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}, 3000);

function updateSlideshowSize() {
  const activeSlide = document.querySelector('.slide.active');
  const slideshow = document.querySelector('.slideshow');
  
  if (activeSlide && slideshow) {
    // Wait for image to load
    const img = activeSlide;
    const updateSize = () => {
      slideshow.style.width = img.naturalWidth + 'px';
      slideshow.style.height = img.naturalHeight + 'px';
    };
    
    // If image is already loaded
    if (img.complete) {
      updateSize();
    } else {
      // Wait for image to load
      img.addEventListener('load', updateSize, { once: true });
    }
  }
}

// Call on initial load
updateSlideshowSize();

// Update size when slide changes
setInterval(() => {
  slides[current].classList.remove('active');
  slides[current].classList.add('active');
  updateSlideshowSize();
}, 3000);
 
const text = "Dear Roseline,\n\nHappy Birthday! I can't believe we're turning 27 already. Do you also feel like the past few years have flown by?\n\nAs much as university was a wild ride, I feel like our first few years of full-time work have been their own trial in learning and growth. I know there has been a lot of change for you, between new loves, new locations, and new jobs (including employers!). I really think you should be proud of yourself and everything you've been brave and resilient enough to accomplish in just a few short years. Each of these new things is hard by itself, and you've done so well in continuing to look and move forward. I mean, I was already stressed when doing interviews to leave McKinsey, and at that point I was only two years rusty!\n\nAnd between the grind, I'm pretty sure you've built a fuller, more established community here in Toronto I have. My lovely manager at work tells me that she feels more and more comfortable with herself as she ages, and I think she's right in that us girls gain self-esteem (and just care a bit less / are a bit less self-critical) as we get older. You're doing the right things by trying your best, so trust the process, enjoy your downtime, and take care of yourself. I hope this year brings you joy, laughter, and all the positivity needed to drown out any self-doubts.\n\nLove always,\n\n Yigga 💕";
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