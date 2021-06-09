document.querySelector(`#center`).addEventListener(`click`, toggleFN);
console.log(`works`);
function toggleFN() {
  console.log(`works`);

  let logo = document.querySelector(`.navbar__logo`);
  let socMedia = document.querySelector(`.navbar__soc-media`);
  let plus = document.querySelector(`#navbar__plus`);
  let center = document.querySelector(`#center`);
  let mobile = document.querySelector(`.navbar__mobile-btn`);
  let links = document.querySelector(`.navbar__links-block`);
  logo.classList.toggle(`away-left`);
  socMedia.classList.toggle(`away-right`);
  plus.classList.toggle(`away-up`);
  center.classList.toggle(`right`);
  mobile.classList.toggle(`relative`);
  links.classList.toggle(`none`);
}
