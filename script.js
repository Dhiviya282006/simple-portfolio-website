// Mobile menu
function toggleMenu() {
    const navLinks = document.getElementById("navLinks");

    navLinks.classList.toggle("active");
}

// Close mobile menu when clicking a link
const navItems = document.querySelectorAll(".nav-links a");

navItems.forEach(function (item) {
    item.addEventListener("click", function () {
        document.getElementById("navLinks").classList.remove("active");
    });
});

// Contact form
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;

    document.getElementById("formMessage").textContent =
        "Thank you, " + name + "! Your message has been received.";

    contactForm.reset();
});














