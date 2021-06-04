var moreText = document.querySelector(".overview__para");
var btn = document.querySelector("#myBtn");

btn.addEventListener("click", (e) => {
  console.log("works");
  moreText.classList.toggle("overview__expand");
  if (btn.innerHTML === "Read More") {
    btn.innerHTML = "Read Less";
  } else {
    btn.innerHTML = "Read More";
  }
});

// Funtionality to Open & Close Mini Window of Characters

const openDetail = document.querySelectorAll(".btn--opens");
const detailedContainer = document.querySelectorAll(".Character__detailed");
const closeWindow = document.querySelectorAll(".closeWindow");
const overlay = document.querySelector(".overlay");
const cardsContainer = document.querySelector(".cards__container")



for (let i = 0; i < openDetail.length; i++) {
  // initView Function
  const initView = () => {
    detailedContainer[i].classList.add("hidden");
    overlay.classList.remove("overlayShow");
    cardsContainer.style.overflow = "auto"
    document.body.style.overflow = "auto"
  }
      // test
  // Showing detail by clicking Btn
  openDetail[i].addEventListener("click", (e) => {
    detailedContainer[i].classList.remove("hidden");
    overlay.classList.add("overlayShow");
    cardsContainer.style.overflow = "hidden"
    document.body.style.overflow = "hidden"
  });

  // Closing detail by clicking overlay
  overlay.addEventListener("click", function () {
   initView()
  });
  
  // Closing detail by clicking close icon (X)
  closeWindow[i].addEventListener("click", (e) => {
    initView()
  });
}
