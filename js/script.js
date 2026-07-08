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

function renderScene(scene) {

    switch (scene) {

        case SCENES.TRAILHEAD:
            renderTrailhead();
            break;

        case SCENES.MAP:
            renderMap();
            break;

        case SCENES.BASE_CAMP:
            renderBaseCamp();
            break;

        case SCENES.JOURNAL:
            renderJournal();
            break;

        default:
            renderTrailhead();

    }

}

document.addEventListener("DOMContentLoaded", () => {

    buildAppShell();

    changeScene(SCENES.TRAILHEAD);

});