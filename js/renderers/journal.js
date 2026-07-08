/*
==========================================
PROJECT 100
Journal Renderer
Version 1.0
==========================================
*/

function renderJournal() {

    setHeader(
        "Expedition Journal",
        "Every expedition tells a story"
    );

    const scene = getScene();

    scene.innerHTML = `

        <section class="card">

            <h2>📖 Expedition Journal</h2>

            <p>
                Every completed expedition
                becomes part of your story.
            </p>

        </section>

        <section class="card">

            <p>
                Your journal will begin
                with today's journey.
            </p>

        </section>

    `;

}