const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    navLinks.classList.toggle("active");
});

/* Close menu when clicking on link */
document.querySelectorAll(".nav-item").forEach(item => {
    item.addEventListener("click", () => {
        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");
    });
});

/* Close menu if clicked outside */
document.addEventListener("click", (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
        menuToggle.classList.remove("active");
        navLinks.classList.remove("active");
    }
});

// Smooth Scroll (Better UX + SEO friendly)
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth"
        });
    });
});

// ===== Certificate Modal =====
const modal = document.getElementById("certificateModal");
const modalImg = document.getElementById("modalImg");

function openModal(imgElement) {
    modal.style.display = "flex";
    modalImg.src = imgElement.src;

    // Disable background scroll
    document.body.style.overflow = "hidden";
}

function closeModal() {
    modal.style.display = "none";

    // Enable background scroll again
    document.body.style.overflow = "auto";
}

// Close modal when clicked outside
modal.addEventListener("click", (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

const form = document.getElementById("contactForm");

form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                Accept: "application/json",
            },
        });

        if (response.ok) {
            form.reset();
            alert("Message sent successfully ✅");
        } else {
            alert("Oops! Something went wrong ❌");
        }
    } catch (error) {
        alert("Network error ❌ Please try again.");
    }
});

// ===== Scroll To Top Button =====
const scrollTopBtn = document.getElementById("scrollTopBtn");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
        scrollTopBtn.style.display = "flex";
    } else {
        scrollTopBtn.style.display = "none";
    }
});

scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});