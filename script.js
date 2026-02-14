function scrollToTools() {
    document.getElementById("tools").scrollIntoView({
        behavior: "smooth"
    });
}

const cards = document.querySelectorAll(".card");

cards.forEach(card => {
    card.onclick = () => {
        alert(card.querySelector("h3").innerText + " coming soon 🚀");
    };
});
