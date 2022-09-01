function myFunc() {
    const hamburger = document.querySelector(".hamburger");
    const headerMenu = document.querySelector(".header__nav");

    hamburger.addEventListener("click", () => {
        hamburger.classList.toggle("active");
        headerMenu.classList.toggle("active");
    })

    document.querySelectorAll(".header__nav-item-home", ".header__nav-item").forEach(n =>
        a.addEventListener("click", () => {
            hamburger.classList.remove("active");
            headerMenu.classList.remove("active");
        }))
}