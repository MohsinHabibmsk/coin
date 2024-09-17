const coinImage = document.getElementById('coin-image');
const coinCount = document.getElementById('coin-count');
const tapButton = document.getElementById('coin-image');
const miningSpeed = document.getElementById('mining-speed');
const totalMined = document.getElementById('total-mined');
const upgradeContainer = document.getElementById('upgrade-container');
const tabItems = document.querySelectorAll('.tab-item');
const tabContents = document.querySelectorAll('.tab-content');

let coins = 6;
let miningSpeedMultiplier = 100;

// Tap Button Functionality
tapButton.addEventListener('click', () => {
    coins += miningSpeedMultiplier * 2;
    totalMined.textContent = `Total Mined: ${coins}`;
});

let imageIndex = 1;

function changeImage() {
    const image = document.getElementById('coin-image');

    if (imageIndex === 1) {
        image.src = 'IMG_3445.PNG'; // Change to the next image
        imageIndex = 2;
    } else {
        image.src = 'IMG_3443.PNG'; // Change back to the original image
        imageIndex = 1;
    }
}







const dismissButton = document.getElementById('dismiss-button');
const notification = document.getElementById('notification');
const mainContent = document.getElementById('main-content');

dismissButton.addEventListener('click', function() {
    // Hide notification
    notification.style.display = 'none';
    // Show main content
    mainContent.style.display = 'block';
});

window.onload = function() {
    notification.style.display = 'flex'; // Show notification on load
};
