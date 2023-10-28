let rating = document.getElementsByClassName("rating-val");
let ratingSelected = document.querySelectorAll("[data-rating-btn]");
let thanksContainer = document.querySelector(".thanks-container");
let ratingContainer = document.querySelector(".rating-container");
let btn = document.querySelector("[data-submit-btn]");
let spanNumber = document.querySelector("#spanNumber");

const RatingValue = ratingSelected.forEach((rate) => {
    rate.addEventListener("click",() => {
        const RatingValue = rate.innerHTML;
        spanNumber.textContent = RatingValue;
        if (RatingValue > 0) {
            btn.addEventListener("click", () => {
              thanksContainer.classList.remove("hidden");
              ratingContainer.classList.add("hidden");
            });
        }
    });
});

for (let i = 0; i < rating.length; i++) {
  rating[i].addEventListener("click", function() {
    for (let j = 0; j < rating.length; j++) {
    rating[j].classList.remove("active");
    }
    this.classList.add("active");
    // this.classList.toggle("active");
  });
}


