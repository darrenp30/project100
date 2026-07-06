// ======================================
// PROJECT 100
// Trailhead v0.1.1
// ======================================

// Athlete
const athleteName = "Darren";

// ------------------------------
// Greeting
// ------------------------------

function getGreeting() {

    const hour = new Date().getHours();

    if (hour < 12) {
        return "Good morning";
    }

    if (hour < 17) {
        return "Good afternoon";
    }

    return "Good evening";

}

// ------------------------------
// Friendly date formatting
// ------------------------------

function formatDate(dateString) {

    const date = new Date(dateString);

    return date.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long"
    });

}

// ------------------------------
// Find today's expedition
// ------------------------------

const today = new Date().toISOString().split("T")[0];

let mission = missions.find(m => m.date === today);

// Fallback if today's date isn't in this week's data
if (!mission) {

    mission = missions[0];

}

// ------------------------------
// Header
// ------------------------------

document.getElementById("greeting").textContent =
`${getGreeting()}, ${athleteName}.`;

document.getElementById("blockName").textContent =
mission.block;

document.getElementById("phaseName").textContent =
mission.phase;

// ------------------------------
// Mission Card
// ------------------------------

document.getElementById("date").textContent =
formatDate(mission.date);

document.getElementById("missionTitle").textContent =
`${mission.icon} ${mission.title}`;

document.getElementById("workout").textContent =
mission.workout;

document.getElementById("objective").textContent =
mission.objective;

document.getElementById("thought").textContent =
mission.thought;

// ------------------------------
// Complete Expedition Button
// ------------------------------

const completeButton =
document.getElementById("completeButton");

completeButton.addEventListener("click", () => {

    completeButton.textContent =
    "✓ Expedition Complete";

    completeButton.style.background =
    "#6A994E";

});

// ------------------------------
// Service Worker
// ------------------------------

if ("serviceWorker" in navigator) {

    navigator.serviceWorker.register("sw.js");

}