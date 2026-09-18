const searchInput = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");

searchButton.addEventListener("click", function () {

    const searchValue = searchInput.value.trim();

    if (searchValue === "") {
        alert("Please enter a food or restaurant name.");
    } else {
        alert("Searching for: " + searchValue);
    }

});


// ================= LOGIN =================

const loginButton = document.querySelector(".login-btn");

loginButton.addEventListener("click", function () {

    alert("Login feature coming soon!");

});


// ================= SIGN UP =================

const signupButton = document.querySelector(".signup-btn");

signupButton.addEventListener("click", function () {

    alert("Sign Up feature coming soon!");

});


// ================= OFFER BUTTON =================

const offerButton = document.querySelector(".offer-button");

offerButton.addEventListener("click", function () {

    alert("Special offers will be available soon!");

});


// ================= APP BUTTON =================

const appButton = document.querySelector(".app-content button");

appButton.addEventListener("click", function () {

    alert("Foodie App coming soon!");

});


// ================= SCROLL ANIMATION =================

const cards = document.querySelectorAll(
    ".category-card, .feature-card, .stat-box"
);

const observer = new IntersectionObserver(
    function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    },
    {
        threshold: 0.15
    }
);


cards.forEach(function (card) {

    card.style.opacity = "0";
    card.style.transform = "translateY(30px)";
    card.style.transition = "all 0.7s ease";

    observer.observe(card);

});
