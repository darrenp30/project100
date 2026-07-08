/*
==========================================
PROJECT 100
Trailhead Renderer
Version 2.0
==========================================
*/

function renderTrailhead() {

    const today = getTodaysExpedition();

    setHeader(
        `${getGreeting()}, Darren.`,
        "Ready for today's expedition?"
    );

    const scene = getScene();

    if (!today) {

        scene.innerHTML = `

            <section class="card">

                <h2>No Expedition Planned</h2>

                <p>
                    There isn't an expedition scheduled for today.
                </p>

            </section>

        `;

        return;

    }

    scene.innerHTML = `

        <section class="card">

            <p class="date">
            ${formatExpeditionDate(today.date)}
            </p>

            <h2>
                ${today.icon} ${today.title}
            </h2>

            <p style="white-space: pre-line;">
                ${today.workout}
            </p>

        </section>
        
                                    ${renderExpeditionStatus(today)}

        <section class="card">

            <h3>Mission Objective</h3>

            <p>
                ${today.objective}
            </p>

        </section>
        

        <section class="card">

            <h3>Today's Thought</h3>

            <blockquote>
                ${today.thought}
            </blockquote>

        </section>

        <button id="completeButton">

            ✓ Complete Mission

        </button>

    `;

}