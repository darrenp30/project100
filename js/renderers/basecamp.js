/*
==========================================
PROJECT 100
Base Camp Renderer
Version 1.0
==========================================
*/

function renderBaseCamp() {

    setHeader(
        "Base Camp",
        "Weekly reflection"
    );

    const scene = getScene();

    scene.innerHTML = `

        <section class="card">

            <h2>🏕 Base Camp</h2>

            <p>
                Every Wednesday you'll return here
                to reflect on your training.
            </p>

        </section>

        <section class="card">

            <h3>The mountain isn't built in one day.</h3>

            <p>
                Neither are you.
            </p>

        </section>

    `;

}