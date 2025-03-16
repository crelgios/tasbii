document.addEventListener('DOMContentLoaded', function() {
    // DOM Elements
    const counterElement = document.getElementById('counter');
    const nameArabicElement = document.getElementById('name-arabic');
    const nameEnglishElement = document.getElementById('name-english');
    const nameMeaningElement = document.getElementById('name-meaning');
    const countButton = document.getElementById('count-btn');
    const resetButton = document.getElementById('reset-btn');
    const resetAllButton = document.getElementById('reset-all-btn');
    const progressBar = document.getElementById('progress-bar');
    const nameDisplayElement = document.querySelector('.name-display');
    const themeToggleButton = document.getElementById('theme-toggle');
    const namesContainer = document.getElementById('names-container');

    // App State
    let counter = 0;
    let currentNameIndex = 0;
    let isDarkMode = true; // Default to dark mode
    
    // Initialize the app
    initializeApp();
    
    // Event Listeners
    countButton.addEventListener('click', handleCount);
    countButton.addEventListener('touchstart', createRippleEffect);
    countButton.addEventListener('mousedown', createRippleEffect);
    resetButton.addEventListener('click', resetCurrentCounter);
    resetAllButton.addEventListener('click', resetAllProgress);
    themeToggleButton.addEventListener('click', toggleTheme);

    // Functions
    function initializeApp() {
        // Load progress from local storage
        const savedState = JSON.parse(localStorage.getItem('tasbiState'));
        if (savedState) {
            counter = savedState.counter;
            currentNameIndex = savedState.currentNameIndex;
            
            if (savedState.isDarkMode !== undefined) {
                isDarkMode = savedState.isDarkMode;
                applyTheme();
            }
        }
        
        // Update UI
        updateCounter();
        updateNameDisplay();
        updateProgressBar();
        populateNamesGrid();
    }
    
    function handleCount() {
        counter++;
        
        if (counter >= 100) {
            counter = 0;
            currentNameIndex = (currentNameIndex + 1) % ALLAH_NAMES.length;
            
            // Transition effect for name change
            nameDisplayElement.classList.add('fade-out');
            
            setTimeout(() => {
                updateNameDisplay();
                updateNamesGrid();
                nameDisplayElement.classList.remove('fade-out');
                nameDisplayElement.classList.add('fade-in');
                
                setTimeout(() => {
                    nameDisplayElement.classList.remove('fade-in');
                }, 500);
            }, 300);
        }
        
        updateCounter();
        updateProgressBar();
        saveProgress();
    }
    
    function createRippleEffect(event) {
        const button = event.currentTarget;
        
        // Create new ripple
        const newRipple = document.createElement('span');
        newRipple.classList.add('button-ripple');
        button.appendChild(newRipple);
        
        // Position the ripple
        const rect = button.getBoundingClientRect();
        let x, y;
        
        if (event.type === 'touchstart' && event.touches[0]) {
            x = event.touches[0].clientX - rect.left;
            y = event.touches[0].clientY - rect.top;
        } else {
            x = event.clientX - rect.left;
            y = event.clientY - rect.top;
        }
        
        newRipple.style.left = `${x}px`;
        newRipple.style.top = `${y}px`;
        
        // Auto-remove ripple after animation
        setTimeout(() => {
            if (newRipple && newRipple.parentNode) {
                newRipple.parentNode.removeChild(newRipple);
            }
        }, 600);
    }
    
    function updateCounter() {
        counterElement.textContent = counter;
    }
    
    function updateNameDisplay() {
        const currentName = ALLAH_NAMES[currentNameIndex];
        nameArabicElement.textContent = currentName.arabic;
        nameEnglishElement.textContent = currentName.english;
        nameMeaningElement.textContent = currentName.meaning;
    }
    
    function updateProgressBar() {
        // Update the progress bar for current count progress (0-100)
        const nameProgress = (counter / 100) * 100;
        
        // For overall progress, show percentage of completion through all 99 names
        const totalCounts = ALLAH_NAMES.length * 100;
        const completedCounts = (currentNameIndex * 100) + counter;
        const overallProgress = (completedCounts / totalCounts) * 100;
        
        progressBar.style.width = `${nameProgress}%`;
    }
    
    function populateNamesGrid() {
        // Clear the names container
        namesContainer.innerHTML = '';
        
        // Create grid items for each name
        ALLAH_NAMES.forEach((name, index) => {
            const nameItem = document.createElement('div');
            nameItem.classList.add('name-item');
            if (index === currentNameIndex) {
                nameItem.classList.add('active');
            }
            
            nameItem.innerHTML = `
                <div class="name-item-number">${index + 1}</div>
                <div class="name-item-text">${name.english}</div>
            `;
            
            // Add click event to jump to this name
            nameItem.addEventListener('click', () => {
                currentNameIndex = index;
                counter = 0;
                updateNameDisplay();
                updateCounter();
                updateProgressBar();
                updateNamesGrid();
                saveProgress();
            });
            
            namesContainer.appendChild(nameItem);
        });
    }
    
    function updateNamesGrid() {
        // Update active state for all name items
        const nameItems = document.querySelectorAll('.name-item');
        nameItems.forEach((item, index) => {
            if (index === currentNameIndex) {
                item.classList.add('active');
            } else {
                item.classList.remove('active');
            }
        });
    }
    
    function resetCurrentCounter() {
        counter = 0;
        updateCounter();
        updateProgressBar();
        saveProgress();
    }
    
    function resetAllProgress() {
        if (confirm('Are you sure you want to reset all progress?')) {
            counter = 0;
            currentNameIndex = 0;
            updateCounter();
            updateNameDisplay();
            updateProgressBar();
            updateNamesGrid();
            saveProgress();
        }
    }
    
    function toggleTheme() {
        isDarkMode = !isDarkMode;
        applyTheme();
        saveProgress();
    }
    
    function applyTheme() {
        // Apply theme to HTML element
        document.documentElement.setAttribute('data-theme', isDarkMode ? 'dark' : 'light');
        
        // Update the theme toggle button text
        themeToggleButton.innerHTML = isDarkMode 
            ? '<i class="fas fa-sun"></i> Light Mode' 
            : '<i class="fas fa-moon"></i> Dark Mode';
    }
    
    function saveProgress() {
        const state = {
            counter: counter,
            currentNameIndex: currentNameIndex,
            isDarkMode: isDarkMode
        };
        localStorage.setItem('tasbiState', JSON.stringify(state));
    }
});
