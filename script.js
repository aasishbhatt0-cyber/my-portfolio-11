// script.js

// 1. Select the button using document.querySelector
const toggleBtn = document.querySelector('#dark-mode-toggle');

// 2. Add an event listener for the 'click' event
toggleBtn.addEventListener('click', () => {
    
    // 3. Use classList.toggle to add/remove the 'dark-mode' class on the body
    document.body.classList.toggle('dark-mode');
    
    // Optional: Log to console to verify (useful for your screenshot!)
    console.log("Dark mode toggled. Current classes:", document.body.classList);
});
