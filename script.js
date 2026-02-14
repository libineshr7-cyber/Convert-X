const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.onclick = () => {
        alert(card.innerText + " coming soon 🚀");
    };
});
