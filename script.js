// List of emojis
const emojis = ["❤️", "✨", "💖", "💕", "🌟", "💓"];

// Function to generate falling emojis
function createFallingEmoji() {
    const emojiContainer = document.getElementById('falling-emojis');
    const emoji = document.createElement('div');
    emoji.classList.add('falling-emoji');

    // Randomly select an emoji
    emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];

    // Set random start position (horizontal)
    const xPosition = Math.random() * window.innerWidth;
    emoji.style.left = `${xPosition}px`;

    // Set random duration for each falling emoji
    const duration = Math.random() * 5 + 3; // Between 3 to 8 seconds
    emoji.style.animationDuration = `${duration}s`;

    // Append emoji to the container
    emojiContainer.appendChild(emoji);

    // Remove the emoji after it finishes falling
    setTimeout(() => {
        emoji.remove();
    }, duration * 1000);
}

// Create falling emojis every 600ms
setInterval(createFallingEmoji, 600);

// Select all pages and initialize variables
const pages = document.querySelectorAll('.page');
let currentPageIndex = 0;
let autoFlipInterval;

// Function to flip to the next page
function flipToNextPage() {
    // Remove "active" class from the current page
    pages[currentPageIndex].classList.remove('active');

    // Calculate the next page index
    currentPageIndex = (currentPageIndex + 1) % pages.length;

    // Add "active" class to the next page
    pages[currentPageIndex].classList.add('active');
}

// Function to start the automatic page flipping
function startAutoFlip() {
    autoFlipInterval = setInterval(flipToNextPage, 2000);
}

// Function to stop the automatic page flipping
function stopAutoFlip() {
    clearInterval(autoFlipInterval);
}

// Event listeners to stop flipping on hover and resume on mouse out
pages.forEach(page => {
    page.addEventListener('mouseenter', stopAutoFlip);
    page.addEventListener('mouseleave', startAutoFlip);
});

// Start flipping pages automatically
startAutoFlip();
