const favoriteButtons = document.querySelector('.favorite-btn');

favoriteButtons.forEach((button) => {
    button.addEventListener('click', () => {
        button.classList.toggle('text-red-500');
        button.classList.toggle('text-gray-500');

        if (button.textContent.trim() === '♡') {
            button.textContent = '♥';
        } else {
            button.textContent = '♡';
        }
    });
});