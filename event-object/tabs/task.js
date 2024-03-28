const tabs = document.querySelectorAll(".tab");
const tabContent = document.querySelectorAll(".tab__content");

function changeTabs(index) {
  tabs.forEach(elem => elem.classList.remove("tab_active"));
  tabContent.forEach(elem => elem.classList.remove("tab__content_active"));
  tabs[index].classList.add("tab_active");
  tabContent[index].classList.add("tab__content_active");
}

tabs.forEach((tab, index) => {
  tab.onclick = () => changeTabs(index);
})