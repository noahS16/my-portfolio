// Get a reference to the header element
const header = document.querySelector('header');

// Store the initial scroll position
let lastScrollTop = 0;

// Function to handle the scroll event
function handleScroll() {
    // Get the current scroll position
    const scrollTop = window.scrollY || document.documentElement.scrollTop;

    // Determine the scroll direction
    const scrollDirection = scrollTop > lastScrollTop ? 'down' : 'up';

    // Update the last scroll position
    lastScrollTop = scrollTop;

    // Check if the scroll direction is down and the scroll position is not at the top
    if (scrollDirection === 'down' && scrollTop > 0) {
        // Hide the header
        header.classList.add('hidden');
    } else {
        // Show the header
        header.classList.remove('hidden');
        
    }
}

// Add the scroll event listener
window.addEventListener('scroll', handleScroll);
