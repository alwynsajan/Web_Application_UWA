// DOM Elements
const completedCount = document.getElementById('completedCount');
const progressBar = document.getElementById('progressBar');
const rewardContainer = document.getElementById('rewardContainer');
const viewRewardBtn = document.getElementById('viewRewardBtn');
const rewardSection = document.getElementById('rewardSection');

// Load selected practices from localStorage
function loadSelectedPractices() {
    return JSON.parse(localStorage.getItem('selectedPractices')) || {};
}

// Save selected practices to localStorage
function saveSelectedPractices(selectedPractices) {
    localStorage.setItem('selectedPractices', JSON.stringify(selectedPractices));
}

// Update the summary with completed count and progress bar
function updateSummary() {
    const selectedPractices = loadSelectedPractices();
    const selectedCount = Object.values(selectedPractices).filter(Boolean).length;
    
    completedCount.textContent = selectedCount;
    const progressPercentage = (selectedCount / 18) * 100;
    progressBar.style.width = `${progressPercentage}%`;
    
    // Check if user has met success criteria (15/18)
    if (selectedCount >= 15) {
        completedCount.classList.add('reward-unlocked');
        viewRewardBtn.disabled = false;
        if (!rewardContainer.querySelector('img')) {
            fetchRandomAnimal();
        }
    } else {
        completedCount.classList.remove('reward-unlocked');
        viewRewardBtn.disabled = true;
        // Remove reward image if count falls below 15
        rewardContainer.innerHTML = '<p>Complete at least 15 best practices to unlock your reward!</p>';
    }
}

// Fetch random animal image from API
function fetchRandomAnimal() {
    rewardContainer.innerHTML = '<p class="loadingMessage">Loading your reward...</p>';
    
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            if (data && data[0] && data[0].url) {
                const img = document.createElement('img');
                img.src = data[0].url;
                img.alt = 'Cute Animal Reward';
                img.style.maxWidth = '100%';
                img.style.maxHeight = '80%';
                img.style.objectFit = 'contain';
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
                    rewardContainer.innerHTML = '<p class="errorMessage">Reward unlocked! (Image failed to load)</p>';
                };
            } else {
                throw new Error('No image data available');
            }
        })
        .catch(error => {
            console.error('Error fetching cat image:', error);
            rewardContainer.innerHTML = '<p class="errorMessage">Reward unlocked! (Could not load image)</p>';
        });
}

// Scroll to reward section
function scrollToReward() {
    rewardSection.scrollIntoView({ behavior: 'smooth' });
}

// Initialize checkboxes and event listeners
function initializeCheckboxes() {
    const selectedPractices = loadSelectedPractices();
    const idList = ['H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'C1', 'C2', 'C3', 'C4', 'C5', 'C6', 'J1', 'J2', 'J3', 'J4', 'J5', 'J6'];

    idList.forEach(id => {
        const checkbox = document.getElementById(id);
        if (checkbox) {
            // Set initial state from localStorage
            checkbox.checked = selectedPractices[id] || false;
            
            // Add event listener for changes
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
document.addEventListener('DOMContentLoaded', initializeCheckboxes);