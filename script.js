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


const menuForm = document.getElementById("menuForm");
const menuContainer = document.getElementById("menuContainer");

menuForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const menuName = document.getElementById("menuName").value;
    const menuPrice = document.getElementById("menuPrice").value;
    const menuImage = document.getElementById("menuImage").value;
    const menuDescription = document.getElementById("menuDescription").value;

    const card = document.createElement("article");

    card.className = "bg-white shadow-sm p-4 w-full rounded-lg";

    card.innerHTML = `
        <img
            src="${menuImage}"
            alt="${menuName}"
            class="w-full h-40 sm:h-44 md:h-48 object-cover rounded-md"
        >

        <div class="mt-3">
            <div class="flex justify-between items-center gap-2">
                <h2 class="font-semibold text-base sm:text-lg">
                    ${menuName}
                </h2>

                <span class="text-emerald-600 font-bold text-sm">
                    Rp${Number(menuPrice).toLocaleString("id-ID")}
                </span>
            </div>

            <p class="text-xs sm:text-sm text-gray-500 mt-1">
                ${menuDescription}
            </p>
        </div>
    `;

    menuContainer.appendChild(card);

    menuForm.reset();
});
