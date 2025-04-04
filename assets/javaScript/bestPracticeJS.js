// DOM Elements
// Get the element for completed count display
const completedCount = document.getElementById('completedCount');
// Get the element for the progress bar
const progressBar = document.getElementById('progressBar');
// Get the element to display the reward container
const rewardContainer = document.getElementById('rewardContainer');
// Get the button to view the reward
const viewRewardBtn = document.getElementById('viewRewardBtn');
// Get the reward section element
const rewardSection = document.getElementById('rewardSection');

// Load selected practices from localStorage
// Function to load selected practices or return an empty object if not found
function loadSelectedPractices() {
    return JSON.parse(localStorage.getItem('selectedPractices')) || {};
}

// Save selected practices to localStorage
// Function to save selected practices to localStorage
function saveSelectedPractices(selectedPractices) {
    localStorage.setItem('selectedPractices', JSON.stringify(selectedPractices));
}

// Update the summary with completed count and progress bar
// Function to update the completed count and progress bar based on the selected practices
function updateSummary() {
    const selectedPractices = loadSelectedPractices();
    const selectedCount = Object.values(selectedPractices).filter(Boolean).length;
    
    // Update completed count on the UI
    completedCount.textContent = selectedCount;
    // Calculate and update progress bar width
    const progressPercentage = (selectedCount / 18) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    
    // Check if user has met success criteria (15/18)
    if (selectedCount >= 15) {
        // If the user meets criteria, unlock reward
        completedCount.classList.add('reward-unlocked');
        viewRewardBtn.disabled = false;
        // Fetch random animal reward if not already shown
        if (!rewardContainer.querySelector('img')) {
            fetchRandomAnimal();
        }
    } else {
        // If criteria is not met, disable reward and reset message
        completedCount.classList.remove('reward-unlocked');
        viewRewardBtn.disabled = true;
        rewardContainer.innerHTML = '<p>Complete at least 15 best practices to unlock your reward!</p>';
    }
}

// Fetch random animal image from API
// Function to fetch a random animal image from an external API
function fetchRandomAnimal() {
    rewardContainer.innerHTML = '<p class="loadingMessage">Loading your reward...</p>';
    
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => {
            // Check if the response is ok
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            // If data is valid, create image element
            if (data && data[0] && data[0].url) {
                const img = document.createElement('img');
                img.src = data[0].url;
                img.alt = 'Cute Animal Reward';
                img.style.maxWidth = '100%';
                img.style.maxHeight = '80%';
                img.style.objectFit = 'contain';
                // Once the image loads, update the reward message
                img.onload = () => {
                    rewardContainer.innerHTML = `
                        <div class="congratsMessage">
                            <i class="fa fa-trophy" aria-hidden="true"></i> Congratulations!
                        </div>
                        <p>You've unlocked this cute reward!</p>
                    `;
                    rewardContainer.appendChild(img);
                };
                img.onerror = () => {
                    // In case the image fails to load
                    rewardContainer.innerHTML = '<p class="errorMessage">Reward unlocked! (Image failed to load)</p>';
                };
            } else {
                // If no image data is available
                throw new Error('No image data available');
            }
        })
        .catch(error => {
            // In case of an error fetching the image
            console.error('Error fetching cat image:', error);
            rewardContainer.innerHTML = '<p class="errorMessage">Reward unlocked! (Could not load image)</p>';
        });
}

// Scroll to reward section
// Function to scroll to the reward section on the page
function scrollToReward() {
    rewardSection.scrollIntoView({ behavior: 'smooth' });
}

// Initialize checkboxes and event listeners
// Function to initialize checkboxes and set up event listeners for changes
function initializeCheckboxes() {
    const selectedPractices = loadSelectedPractices();
    // List of IDs for all checkboxes
    const idList = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'J1', 'J2', 'J3', 'J4', 'J5', 'J6'];

    idList.forEach(id => {
        const checkbox = document.getElementById(id);
        if (checkbox) {
            // Set initial state of checkboxes from localStorage
            checkbox.checked = selectedPractices[id] || false;
            
            // Add event listener to update practices on change
            checkbox.addEventListener('change', () => {
                selectedPractices[id] = checkbox.checked;
                saveSelectedPractices(selectedPractices);
                updateSummary();
            });
        }
    });

    // Set up view reward button
    viewRewardBtn.addEventListener('click', scrollToReward);

    // Initial summary update
    updateSummary();
}

// Initialize everything when DOM is loaded
// Wait for the DOM to be fully loaded before initializing checkboxes
document.addEventListener('DOMContentLoaded', initializeCheckboxes);
