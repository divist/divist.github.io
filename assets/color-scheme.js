/*!
 * color-scheme.js
 */

/*
 * set color scheme
 */
function setColorScheme(cs) {
    if (cs === 'dark')  {
        document.head.getElementsByTagName("link").item(1).href = "assets/dark.min.css";
    } else if (cs === 'light') {
        document.head.getElementsByTagName("link").item(1).href = "assets/light.min.css";
    }
}

/*
 * refresh color scheme
 */
function refreshColorScheme() {
    let cs = localStorage.getItem('colorScheme');
    if (cs === null) {
        cs = 'dark';
    }
    setColorScheme(cs);
    localStorage.setItem('colorScheme', cs);
}

/*
 * toggle color scheme
 */
function toggleColorScheme() {
    let cs = localStorage.getItem('colorScheme');
    if (cs === 'dark') {
        cs = 'light';
    } else if (cs === 'light') {
        cs = 'dark';
    }
    setColorScheme(cs);
    localStorage.setItem('colorScheme', cs);
}

refreshColorScheme();
document.getElementById("color-scheme-toggle").addEventListener("click", toggleColorScheme);
