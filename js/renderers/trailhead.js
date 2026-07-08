/*
==========================================
PROJECT 100
Trailhead Renderer
Version 1.0
==========================================
*/

function renderTrailhead() {

    setHeader(
        "Good morning, Darren.",
        "Ready for today's expedition?"
    );

    const scene = getSceneContainer();

    scene.innerHTML = `

        <section class="card">

            <p class="date">
                Wednesday 9 July
            </p>

            <h2>
                Trailhead Initialised
            </h2>

            <p>
                The new application architecture is working.
            </p>

        </section>

        <section class="card">

            <h3>Mission Objective</h3>

            <p>
                Confirm the application shell and renderer system before reconnecting expedition data.
            </p>

        </section>

        <section class="card">

            <h3>Today's Thought</h3>

            <blockquote>
                Every well-built expedition begins with a solid base camp.
            </blockquote>

        </section>

        <button id="completeButton">

            ✓ Complete Mission

        </button>

    `;

}