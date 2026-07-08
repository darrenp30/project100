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
    BASECAMP: "basecamp",
    JOURNAL: "journal"

};

function renderScene(scene) {

    switch (scene) {

        case SCENES.TRAILHEAD:
            renderTrailhead();
            break;

        case SCENES.MAP:
            renderMap();
            break;

        case SCENES.BASECAMP:
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

    renderScene(SCENES.TRAILHEAD);

});