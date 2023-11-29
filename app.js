console.log("app.js");

const filterButtons = document.querySelectorAll("#filter-buttons > button");
const stuffList = document.querySelectorAll("#stuff > div[data-category]");

console.log(filterButtons);
console.log(stuffList);

filterButtons.forEach((button) => {
  button.addEventListener("click", (evt) => {
    filterButtonClicked(evt.target);
  });
});

function filterButtonClicked(target) {
  filterButtons.forEach((button) => {
    button.classList.remove("active");
  });
  target.classList.add("active");

  const filter = target.getAttribute("data-filter");

  stuffList.forEach((item) => {
    if (filter === "all") {
      item.removeAttribute("hidden");
      return;
    }
    item.removeAttribute("hidden");
    if (item.getAttribute("data-category") !== filter) {
      item.setAttribute("hidden", "");
    }
  });
}
