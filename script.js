const loveButtons = document.querySelectorAll(".love-button");

loveButtons.forEach(function(button) {
    button.addEventListener("click", function() {

        if (button.textContent.trim() === "♡") {
            button.textContent = "♥";
            button.classList.remove("text-gray-500");
            button.classList.add("text-red-500");
        } else {
            button.textContent = "♡";
            button.classList.remove("text-red-500");
            button.classList.add("text-gray-500");
        }

    });
});