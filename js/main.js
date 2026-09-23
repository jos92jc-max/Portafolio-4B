const menuToggle = document.getElementById("menuToggle");
const mainMenu = document.getElementById("mainMenu");
const currentYear = document.getElementById("currentYear");

menuToggle.addEventListener("click", () => {
    const isOpen = mainMenu.classList.toggle("is-open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
});

mainMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
        mainMenu.classList.remove("is-open");
        menuToggle.setAttribute("aria-expanded", "false");
    });
});

currentYear.textContent = new Date().getFullYear();