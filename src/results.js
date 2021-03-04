const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const sang = urlParams.get('sang')
const chol = urlParams.get('chol')
const mel = urlParams.get('mel')
const phleg = urlParams.get('phleg')
console.log(sang)
document.querySelector("#display").innerHTML = "<strong>Sanguine: </strong>" + sang +
                                                "<br><br><strong>Choleric: </strong>" + chol +
                                                "<br><br><strong>Melancholic: </strong>" + mel +
                                                "<br><br><strong>Phlegmatic: </strong>" + phleg;

// for accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}