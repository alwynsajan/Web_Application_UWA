// Load selected practices from localStorage
function loadSelectedPractices() {
    return JSON.parse(localStorage.getItem("selectedPractices")) || {};
}

// Save selected practices to localStorage
function saveSelectedPractices(selectedPractices) {
    localStorage.setItem("selectedPractices", JSON.stringify(selectedPractices));
}

// Function to update the summary count
function updateSummary() {
    const selectedPractices = loadSelectedPractices();
    const selectedCount = Object.values(selectedPractices).filter(Boolean).length;
    // countDisplay.textContent = selectedCount;

    // Define success criteria: 4/5 best practices met
    // if (selectedCount >= 4) {
    //     fetchRandomAnimal();
    // } else {
    //     rewardContainer.innerHTML = "";
    // }
}

// Function to fetch and display a random animal image as a reward
function fetchRandomAnimal() {
    fetch("https://random.dog/woof.json") // Using the Random Dog API
        .then(response => response.json())
        .then(data => {
            rewardContainer.innerHTML = `<img src="${data.url}" alt="Cute Animal">`;
        })
        .catch(error => console.error("Error fetching image:", error));
}

const idList = ["H1", "H2", "H3", "H4", "H5", "H6"];

function addEventListener() {
    const selectedPractices = loadSelectedPractices();
    console.log("selectedPractices :",selectedPractices);

    idList.forEach(id => {
        const checkbox = document.getElementById(id);

        if (checkbox) {
            checkbox.checked = selectedPractices[id] || false; // Set initial checked state

            // Listen for changes in checkbox state
            checkbox.addEventListener("change", () => {
                selectedPractices[id] = checkbox.checked; // Update the state of the checkbox in selectedPractices
                console.log(id, selectedPractices[id]); // Log the checkbox id and its new state
                saveSelectedPractices(selectedPractices); // Save the updated selectedPractices object
                updateSummary();
            });
        }

        updateSummary();
    });
}

addEventListener();
