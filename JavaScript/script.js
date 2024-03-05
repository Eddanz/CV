/* Script for cv.json */

fetch('Data/cv.json')
.then(response => response.json())
.then(data => {
    var educationList = document.getElementById('education');
    data.education.forEach(function(education) {
        var listItem = document.createElement('li');
        listItem.innerHTML = `${education.name.bold()} - ${education.type}, ${education.year}`;
        educationList.appendChild(listItem);
    });

    var experienceList = document.getElementById('experience');
    data.experience.forEach(function(experience) {
        var listItem = document.createElement('li');
        listItem.innerHTML = `${experience.title} at ${experience.company.bold()}, ${experience.year}`;
        experienceList.appendChild(listItem);
    });

    var skillsList = document.getElementById('skills');
    data.skills.forEach(function(skill) {
        var listItem = document.createElement('li');
        listItem.textContent = skill.skill;
        skillsList.appendChild(listItem);
    });
})

.catch(error => console.error('Error fetching data:', error));

/* easter egg 1 */

var easterEggImage = document.getElementById('easterEgg');

var isOriginalColor = true;

var originalColor = 'AliceBlue';

var savedColor = localStorage.getItem('backgroundColor');

if(savedColor){
    document.body.style.backgroundColor = savedColor;
    isOriginalColor = false;
}

easterEggImage.addEventListener('click', function() {

    if (isOriginalColor) {
        var randomColor = getRandomColor();
        document.body.style.backgroundColor = randomColor;
        localStorage.setItem('backgroundColor', randomColor);
        isOriginalColor = false;
    } else {
        document.body.style.backgroundColor = originalColor;
        localStorage.removeItem('backgroundColor', originalColor);
        isOriginalColor = true;
    }
});

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

/* easter egg 2 */
