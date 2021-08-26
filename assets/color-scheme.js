/*
 * color-scheme.js
 */

let darkMode = true;

function toggleColor() {
    if (darkMode) {
        document.head.getElementsByTagName("link").item(1).href = "assets/css/light.min.css";
    } else {
        document.head.getElementsByTagName("link").item(1).href = "assets/css/dark.min.css";
    }
    darkMode = !darkMode;
}

document.getElementById("color-scheme-toggle").addEventListener("click", toggleColor);
