/*
==========================================
PROJECT 100
Map Renderer
Version 1.0
==========================================
*/

function renderMap() {

    setHeader(
        "Expedition Map",
        "Your journey"
    );

    const scene = getScene();

    scene.innerHTML = `

        <section class="card">

            <h2>🗺 Expedition Map</h2>

            <p>
                This part of Project 100
                is still being surveyed.
            </p>

        </section>

        <section class="card">

            <p>
                Soon you'll be able to
                follow your expedition from
                Trailhead to Project Beyond.
            </p>

        </section>

    `;

}