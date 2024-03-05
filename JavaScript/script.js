/***** Script for cv.json *****/

fetch('Data/cv.json')
    // Once the response is received, parse it as JSON
    .then(response => response.json())
    .then(data => {
        // Get the reference to the DOM element for education list
        var educationList = document.getElementById('education');

        // Iterate through each education entry in the JSON data
        data.education.forEach(function(education) {
            // Create a list item element
            var listItem = document.createElement('li');
            // Populate the list item with education details
            listItem.innerHTML = `${education.name.bold()} - ${education.type}, ${education.year}`;
            // Append the list item to the education list
            educationList.appendChild(listItem);
        });

        // Get the reference to the DOM element for experience list
        var experienceList = document.getElementById('experience');

        // Iterate through each experience entry in the JSON data
        data.experience.forEach(function(experience) {
            // Create a list item element
            var listItem = document.createElement('li');
            // Populate the list item with experience details
            listItem.innerHTML = `${experience.title} at ${experience.company.bold()}, ${experience.year}`;
            // Append the list item to the experience list
            experienceList.appendChild(listItem);
        });

        // Get the reference to the DOM element for skills list
        var skillsList = document.getElementById('skills');

        // Iterate through each skill entry in the JSON data
        data.skills.forEach(function(skill) {
            // Create a list item element
            var listItem = document.createElement('li');
            // Populate the list item with skill details
            listItem.textContent = skill.skill;
            // Append the list item to the skills list
            skillsList.appendChild(listItem);
        });
    })
    // If an error occurs during fetching or parsing the data, log the error
    .catch(error => console.error('Error fetching data:', error));

/***** EASTER EGG MODAL *****/

var modal = document.getElementById("myModal");
var closeButton = document.getElementsByClassName("close")[0];
var videoIframe = document.getElementById("videoIframe");
var keysPressed = [];

// Function to open the modal
function openModal() {
    modal.style.display = "block";
    // Start video autoplay
    videoIframe.src = "https://www.youtube.com/embed/jdulcKB14hs?si=X603W9sJzS3J3KWJ&amp;start=187&autoplay=1";
}

// Function to close the modal
function closeModal() {
    modal.style.display = "none";
    // Pause video playback
    videoIframe.src = "";
}

// When the user presses a key
window.addEventListener("keydown", function(event) {
    // Check if the key is '1', '3', '3', '7'
    if (event.key === '1' || event.key === '3' || event.key === '7') {
        checkFor1337(event.key);
    }
});

// Function to check for '1337'
function checkFor1337(key) {
    // Add the pressed key to the array
    keysPressed.push(key);
    // If the array contains '1', '3', '3', '7' in order
    if (keysPressed.join('') === '1337') {
        // Show the modal
        openModal();
        // Reset the keysPressed array
        keysPressed = [];
    }
}

// When the user clicks on close, close the modal
closeButton.onclick = function() {
    closeModal();
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}

/***** EASTER EGG BACKGROUND COLOR *****/

// Get the reference to the DOM element with the ID 'easterEgg'
var easterEggImage = document.getElementById('easterEgg');

// Flag to keep track of whether the background color is original or changed
var isOriginalColor = true;

// Default background color
var originalColor = 'AliceBlue';

// Retrieve the background color from local storage
var savedColor = localStorage.getItem('backgroundColor');

// If there's a saved color in local storage, set the background color to that color
// and update the flag to indicate that the background color is not the original color
if(savedColor){
    document.body.style.backgroundColor = savedColor;
    isOriginalColor = false;
}

// Add a click event listener to the easterEggImage element
easterEggImage.addEventListener('click', function() {

    // If the background color is original, generate a random color and set it as the background color
    // Also, save the color in local storage and update the flag
    if (isOriginalColor) {
        var randomColor = getRandomColor();
        document.body.style.backgroundColor = randomColor;
        localStorage.setItem('backgroundColor', randomColor);
        isOriginalColor = false;
    } else {
        // If the background color is not original, set it back to the original color
        // Remove the saved color from local storage and update the flag
        document.body.style.backgroundColor = originalColor;
        localStorage.removeItem('backgroundColor');
        isOriginalColor = true;
    }
});

// Function to generate a random color
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}