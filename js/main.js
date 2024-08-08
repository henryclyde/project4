function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

let button = document.getElementById("themeToggle");
let link = document.getElementById("themeLink");

function toggle() {
    link.disabled=!link.disabled;
}

button.addEventListener("click", toggle);
