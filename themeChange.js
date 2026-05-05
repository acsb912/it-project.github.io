
window.onload = function() {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        setTheme(currentTheme);
    } else {
        setTheme("default-theme.css");
    }
};


document.getElementById("themeChange").addEventListener("click", function() {
    const currentTheme = document.getElementById('theme-style').getAttribute('href');
    if (currentTheme == 'default-theme.css') {
        setTheme("theme-2.css");
    } else if (currentTheme == "theme-2.css") {
        setTheme("default-theme.css");
    }
});


function setTheme(theme) {
    const themeLink = document.getElementById("theme-style");
    themeLink.setAttribute('href', theme);
    localStorage.setItem('theme', theme);
};