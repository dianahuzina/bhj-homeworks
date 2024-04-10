const hasTooltips = document.querySelectorAll(".has-tooltip");

let tooltip = document.createElement("div");
tooltip.classList.add("tooltip");

hasTooltips.forEach(elem => {
  elem.insertAdjacentElement("beforeBegin", tooltip);

  elem.addEventListener('click', (event) => {
    event.preventDefault();
    tooltip.textContent = event.target.getAttribute("title");
    tooltip.classList.toggle("tooltip_active");

    if (tooltip.classList.contains("tooltip_active")) {
      tooltip.style.top = `${event.target.getBoundingClientRect().top + event.target.getBoundingClientRect().height}px`;
      tooltip.style.left = `${event.target.getBoundingClientRect().left}px`;
    }
  })
})

