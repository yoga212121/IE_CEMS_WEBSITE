
    const body = document.body;
    const themeToggleBtn = document.getElementById('theme-toggle-btn');

   
    // Toggle mode and change icon on button click
    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', function () {
            body.classList.toggle('dark-mode');
            body.classList.toggle('light-mode');

            const newMode = body.classList.contains('dark-mode') ? 'dark-mode' : 'light-mode';

            updateIcon(newMode);
        });
    }

    // Function to update the icon based on the theme
    function updateIcon(mode) {
        const sunIcon = themeToggleBtn.querySelector('.fa-sun');
        const moonIcon = themeToggleBtn.querySelector('.fa-moon');

        if (mode === 'dark-mode') {
            sunIcon.classList.remove('hidden');
            moonIcon.classList.add('hidden');
        } else {
            sunIcon.classList.add('hidden');
            moonIcon.classList.remove('hidden');
        }
    }

