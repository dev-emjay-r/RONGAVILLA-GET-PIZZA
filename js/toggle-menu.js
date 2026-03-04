const initToggle = () => {

    const headerNav = document.querySelector(".headerNav ul");
    const toggleMenu = document.querySelector(".toggleMenu");

    toggleMenu.addEventListener("click", () => {
      toggleMenu.classList.toggle("open");
      headerNav.classList.toggle("open");
    });

}

export default initToggle;