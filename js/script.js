/*
==========================================
PROJECT 100
Application Startup
Version 1.0
==========================================
*/

const SCENES = {

    TRAILHEAD: "trailhead",
    MAP: "map",
    BASE_CAMP: "basecamp",
    JOURNAL: "journal"

};

let currentScene = SCENES.TRAILHEAD;

function changeScene(scene) {

    currentScene = scene;

    renderScene(scene);

    buildNavigation(scene);

}

document.addEventListener("DOMContentLoaded", () => {

    buildAppShell();

    changeScene(SCENES.TRAILHEAD);

});