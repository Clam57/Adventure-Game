
document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('start-button');
    const saveButton = document.getElementById('save-button');
    const loadButton = document.getElementById('load-button');
    const storySection = document.getElementById('story');
    let currentStep = 0;

    // Placeholder for story steps
    const storySteps = [
        'You find yourself in a dark forest. Do you go left or right?',
        'You went left and encountered a dragon!',
        'You went right and found a treasure chest!'
    ];

    startButton.addEventListener('click', function() {
        startGame();
    });

    saveButton.addEventListener('click', function() {
        saveGame();
    });

    loadButton.addEventListener('click', function() {
        loadGame();
    });

    function startGame() {
        currentStep = 0;
        updateStory();
        startButton.style.display = 'none';
        storySection.style.display = 'block';
    }

    function updateStory() {
        storySection.innerHTML = storySteps[currentStep] + 
        '<br><button onclick="makeChoice(1)">Left</button>' +
        '<button onclick="makeChoice(2)">Right</button>';
    }

    window.makeChoice = function(choice) {
        if (choice === 1) {
            currentStep = 1;
        } else {
            currentStep = 2;
        }
        updateStory();
    }

    function saveGame() {
        localStorage.setItem('currentStep', currentStep);
    }

    function loadGame() {
        currentStep = localStorage.getItem('currentStep');
        updateStory();
    }
});
