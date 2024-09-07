const htmlBody = document.getElementById("body");

function setBrowserLight() {
    if (htmlBody && htmlBody.classList) {
        htmlBody.classList.remove("bg-stone-900");
        htmlBody.classList.remove("dark");
        htmlBody.classList.add("bg-stone-100");
        htmlBody.classList.add("light");
    }
}

function setBrowserDark() {
    if (htmlBody && htmlBody.classList) {
        htmlBody.classList.remove("bg-stone-100");
        htmlBody.classList.remove("light");
        htmlBody.classList.add("bg-stone-900");
        htmlBody.classList.add("dark");
    }
}

const localStorageTheme = localStorage.getItem("PERSONAL_WEBSITE_COLOR_THEME");

if (localStorageTheme) {
    if (localStorageTheme === "dark") {
        setBrowserDark();
    } else {
        setBrowserLight();
    }
} else {
    const browserTheme = window.matchMedia("(prefers-color-scheme: dark)");
    if (browserTheme.matches) {
        setBrowserDark();
    } else {
        setBrowserLight();
    }
}
