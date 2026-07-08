/*
==========================================
PROJECT 100
Navigation
Version 1.0
==========================================
*/

function buildNavigation(activeScene = SCENES.TRAILHEAD) {

    const navigation = document.getElementById("navigation");

    navigation.innerHTML = `

        <button
            class="nav-item ${activeScene === SCENES.TRAILHEAD ? "active" : ""}"
            onclick="changeScene(SCENES.TRAILHEAD)">

            <span class="nav-icon">🏔</span>
            <span class="nav-label">Trailhead</span>

        </button>

        <button
            class="nav-item ${activeScene === SCENES.MAP ? "active" : ""}"
            onclick="changeScene(SCENES.MAP)">

            <span class="nav-icon">🗺</span>
            <span class="nav-label">Map</span>

        </button>

        <button
            class="nav-item ${activeScene === SCENES.BASECAMP ? "active" : ""}"
            onclick="changeScene(SCENES.BASECAMP)">

            <span class="nav-icon">🏕</span>
            <span class="nav-label">Base Camp</span>

        </button>

        <button
            class="nav-item ${activeScene === SCENES.JOURNAL ? "active" : ""}"
            onclick="changeScene(SCENES.JOURNAL)">

            <span class="nav-icon">📖</span>
            <span class="nav-label">Journal</span>

        </button>

    `;

}