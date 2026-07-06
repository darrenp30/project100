// ======================================
// PROJECT 100
// Base Camp v0.1
// ======================================

// Get today's date in YYYY-MM-DD format

const displayDate=new Date(mission.date);

const formattedDate=displayDate.toLocaleDateString(
undefined,
{
weekday:"long",
day:"numeric",
month:"long"
});


function getGreeting(){

    const hour=new Date().getHours();

    if(hour<12){

        return "Good morning";

    }

    if(hour<17){

        return "Good afternoon";

    }

    return "Good evening";

}

// Find today's mission
let mission = missions.find(m => m.date === today);

// If today's mission doesn't exist,
// default to the first mission.
if (!mission) {
    mission = missions[0];
}

// Populate the page
document.getElementById("greeting").textContent=

`${getGreeting()}, Darren.`;

document.getElementById("blockName").textContent=

mission.block;

document.getElementById("phaseName").textContent=

mission.phase;

document.getElementById("date").textContent=

formattedDate;


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