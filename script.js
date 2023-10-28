let rating = document.getElementsByClassName("rating-val");
let btn = document.getElementsByClassName("btn");

for (let i = 0; i < rating.length; i++) {
  rating[i].addEventListener("click", function() {
    for (let j = 0; j < rating.length; j++) {
    rating[j].classList.remove("active");
    }
    this.classList.add("active");
    // this.classList.toggle("active");
  });
}


