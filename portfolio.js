console.log('fdas');
let dark = true;

function toggleTheme() {

    console.log(dark);

    if (!dark) {
        document.scrollingElement.setAttribute('data-theme', 'light');
        dark = true;
    } else {
        document.scrollingElement.setAttribute('data-theme', 'dark');
        dark = false;
    }
}