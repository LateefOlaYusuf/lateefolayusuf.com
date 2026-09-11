document.addEventListener("DOMContentLoaded", function () {

    const yearElement = document.getElementById("year");

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }


    const menuButton = document.querySelector(".menu-toggle");
    const navigation = document.querySelector(".main-nav");

    if (menuButton && navigation) {

        menuButton.addEventListener("click", function () {

            navigation.classList.toggle("open");

            const isOpen = navigation.classList.contains("open");

            menuButton.setAttribute(
                "aria-expanded",
                isOpen.toString()
            );
        });
    }

});
