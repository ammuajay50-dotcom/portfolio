// Theme handling logic
const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// Function to set theme
function setTheme(theme) {
    if (theme === 'dark') {
        htmlElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
        if(themeToggleBtn) themeToggleBtn.innerHTML = '<i class="fa-solid fa-sun"></i>';
    } else {
        htmlElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
        if(themeToggleBtn) themeToggleBtn.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
}

// Check for saved preference or system preference
const savedTheme = localStorage.getItem('theme');
const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme === 'dark' || (!savedTheme && systemPrefersDark)) {
    setTheme('dark');
} else {
    setTheme('light');
}

// Event listener for toggle button (delegated or direct)
// We might run this script before the button exists, so we wrapping init in DOMContentLoaded or deferred
document.addEventListener('DOMContentLoaded', () => {
    const btn = document.getElementById('theme-toggle');
    if (btn) {
        // Set initial icon
        if (htmlElement.classList.contains('dark')) {
            btn.innerHTML = '<i class="fa-solid fa-sun"></i>';
        } else {
            btn.innerHTML = '<i class="fa-solid fa-moon"></i>';
        }

        btn.addEventListener('click', () => {
            if (htmlElement.classList.contains('dark')) {
                setTheme('light');
            } else {
                setTheme('dark');
            }
        });
    }
});
