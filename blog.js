const harmburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".navbars");
harmburger.addEventListener("click", function () {
  navLinks.classList.toggle("active");
  console.log("The button was clicked");
});
const job = document.querySelectorAll("#job")

setInterval(() => {
job[0].innerHTML = Math.ceil(Math.random() * 100) + " "+ "Jobs"
job[1].innerHTML = Math.ceil(Math.random() * 100) + " "+ "Jobs"
job[2].innerHTML = Math.ceil(Math.random() * 100) + " "+ "Jobs"
job[3].innerHTML = Math.ceil(Math.random() * 100) + " "+ "Jobs"

},6000);












class UI {
  constructor() {
    (this.content = document.querySelector(".content"));
      (this.jobdivs = document.querySelector(".job-divs"));
    this.jobLinks = document.querySelector(".job-links");
  }
}

function listeners() {
  const dove = document.querySelector(".content");
  const bird = document.querySelector(".job-links");
  const fowl = document.querySelector(".job-divs");
}
const doc = this.content;
console.log(doc);
document.addEventListener("DOMContentLoaded", listeners()
);
