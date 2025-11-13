// hamburger menu 
let menuIcon = document.getElementById("menu-icon");
let navLinks = document.getElementById("nav-links");

if (menuIcon && navLinks) {
    menuIcon.addEventListener("click", function () {
        navLinks.classList.toggle("active");
    });
}

// hero buttons
let viewBtn = document.querySelector(".hero-buttons .btn");
let contactBtn = document.querySelector(".hero-buttons .btn-outline");

if (viewBtn && contactBtn) {
    viewBtn.classList.add("active");
    contactBtn.classList.remove("active");

    viewBtn.addEventListener("click", function () {
        viewBtn.classList.add("active");
        contactBtn.classList.remove("active");
    });

    contactBtn.addEventListener("click", function () {
        contactBtn.classList.add("active");
        viewBtn.classList.remove("active");
    });
}

// Form validation
let form = document.getElementById("contactForm");

function validateEmail(email) {
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

if (form) {
    form.addEventListener("submit", function (event) {
        event.preventDefault();

        let name = document.getElementById("contact-name").value.trim().replace(/[\\/]/g, "");
        let email = document.getElementById("contact-email").value.trim().replace(/[\\/]/g, "");
        let message = document.getElementById("contact-message").value.trim().replace(/[\\/]/g, "");

        if (name === "") {
            alert("Full Name is required!");
            return;
        }

        if (email === "") {
            alert("Email is required!");
            return;
        }

        if (!validateEmail(email)) {
            alert("Invalid email format!");
            return;
        }

        if (message === "") {
            alert("Message is required!");
            return;
        }

        alert("Form submitted successfully!");
        form.reset();
    });
}

// Dark/Light Mode
let themeButton = document.getElementById("themeButton");

if (themeButton) {
    themeButton.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {
            themeButton.textContent = "Disable Dark Mode";
        } else {
            themeButton.textContent = "Enable Dark Mode";
        }
    });
}