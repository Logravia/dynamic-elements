let dropdowns = document.querySelectorAll('.dropdown');
let timer;

dropdowns.forEach(el => {
  el.addEventListener("mouseover", e=> {
    e.currentTarget.querySelector(".dropdown-options").className = "dropdown-options open"
    clearTimeout(timer);
  });
  el.addEventListener("mouseout", _ => {
    timer = setTimeout( _ => {
      document.querySelector(".dropdown-options.open").className = "dropdown-options";
    }, 1000);
  });
});

console.log(dropdowns)
