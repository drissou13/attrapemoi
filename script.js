const button = document.getElementById("runawayButton");

function moveButton() {
    const container = document.querySelector(".container");
    const maxX = container.clientWidth - button.clientWidth;
    const maxY = container.clientHeight - button.clientHeight;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    button.style.left = `${newX}px`;
    button.style.top = `${newY}px`;
}

button.addEventListener("mouseover", moveButton); // Pour ordi
button.addEvent