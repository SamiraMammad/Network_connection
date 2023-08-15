const network = document.querySelector(".network-checking");

window.addEventListener("online", () => {
    network.style.backgroundColor = "green";
    network.textContent = "You are Online"

    setTimeout(() => {
        network.classList.remove("active");
    }, 3000);
    network
});

window.addEventListener("offline", () => {
    network.classList.add("active");
    console.log("You are offline");
});