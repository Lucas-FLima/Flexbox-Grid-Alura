const buttonMenu = document.querySelector(".cabecalho__menu");
const menuLateral = document.querySelector(".menu-lateral");

buttonMenu.addEventListener("click", () => {
  menuLateral.classList.toggle("menu-lateral--ativo");
});
