```javascript
/* =========================================
   SHIV KERANA GENERAL STORE
   JavaScript
========================================= */

document.addEventListener("DOMContentLoaded", function () {

    /* ---------- SMOOTH NAVIGATION ---------- */

    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(function (link) {

        link.addEventListener("click", function (event) {

            const targetId = this.getAttribute("href");

            if (targetId === "#") return;

            const target = document.querySelector(targetId);

            if (target) {
                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }

        });

    });


    /* ---------- NAVBAR SCROLL EFFECT ---------- */

    const navbar = document.querySelector(".navbar");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            navbar.style.boxShadow =
                "0 8px 30px rgba(30, 60, 40, 0.08)";

        } else {

            navbar.style.boxShadow = "none";

        }

    });


    /* ---------- SCROLL REVEAL ANIMATION ---------- */

    const animatedElements = document.querySelectorAll(
        ".product-card, .why-grid div, .contact-item, .about-text, .about-box, .owner-card"
    );

    const observer = new IntersectionObserver(

        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("show");

                    observer.unobserve(entry.target);

                }

            });

        },

        {
            threshold: 0.15
        }

    );


    animatedElements.forEach(function (element) {

        element.classList.add("hidden");

        observer.observe(element);

    });


    /* ---------- CURRENT YEAR ---------- */

    const copyright = document.querySelector(".copyright");

    if (copyright) {

        const year = new Date().getFullYear();

        copyright.textContent =
            "© " + year +
            " Shiv Kerana General Store. All Rights Reserved.";

    }


    /* ---------- PHOTO ERROR HANDLING ---------- */

    const ownerPhoto = document.querySelector(".photo-circle img");

    if (ownerPhoto) {

        ownerPhoto.addEventListener("error", function () {

            this.style.display = "none";

            const photoCircle =
                document.querySelector(".photo-circle");

            photoCircle.innerHTML =
                '<span style="font-size:70px; display:flex; align-items:center; justify-content:center; height:100%;">👨‍💼</span>';

        });

    }

});
```
