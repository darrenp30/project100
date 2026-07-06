// ======================================
// PROJECT 100
// Base Camp v0.1
// ======================================

// Get today's date in YYYY-MM-DD format
const today = new Date().toISOString().split("T")[0];

// Find today's mission
let mission = missions.find(m => m.date === today);

// If today's mission doesn't exist,
// default to the first mission.
if (!mission) {
    mission = missions[0];
}

// Populate the page
document.getElementById("date").textContent =
    `${mission.day} • ${mission.date}`;

document.getElementById("missionTitle").textContent =
    mission.title;

document.getElementById("workout").textContent =
    mission.workout;

document.getElementById("objective").textContent =
    mission.objective;

document.getElementById("thought").textContent =
    mission.thought;


// ======================================
// Complete Mission Button
// (temporary for Base Camp)
// ======================================

const completeButton =
    document.getElementById("completeButton");

completeButton.addEventListener("click", () => {

    completeButton.textContent =
        "✓ Expedition Complete";

    completeButton.style.background =
        "#6A994E";

});

if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("sw.js");
}