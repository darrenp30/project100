/*
==========================================
PROJECT 100
Application Shell
Version 1.0
==========================================
*/

function buildAppShell() {

    const app = document.getElementById("app");

    app.innerHTML = `
        <div class="app-shell">

    <header id="app-header"></header>

    <main id="scene"></main>

    <nav id="navigation"></nav>

</div>
    `;

}

function setHeader(title = "", subtitle = "") {

    const header = document.getElementById("app-header");

    header.innerHTML = `
        <div class="trailhead">

            <img
                src="assets/icon-192.png"
                class="logo"
                alt="Project 100 Logo">

            <div class="header-text">

                <p class="project-title">
                    PROJECT 100
                </p>

                <h1 id="screen-title">
                    ${title}
                </h1>

                <p id="screen-subtitle">
                    ${subtitle}
                </p>

            </div>

        </div>
    `;

}

function getScene() {

    return document.getElementById("scene");

}

function getGreeting() {

    const hour = new Date().getHours();

    if (hour < 12) {
        return "Good morning";
    }

    if (hour < 18) {
        return "Good afternoon";
    }

    return "Good evening";

}

function formatToday() {

    return new Date().toLocaleDateString(
        "en-GB",
        {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
        }
    );

}