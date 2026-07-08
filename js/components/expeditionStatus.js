/*
==========================================
PROJECT 100
Expedition Status Component
Version 1.0
==========================================
*/

function renderExpeditionStatus(expedition) {

    return `

        <section class="card expedition-status">

            <h3>Expedition Status</h3>

            <p class="status-block">
                ${expedition.block}
            </p>

            <p class="status-phase">
                ${expedition.phase}
            </p>

            <hr class="status-divider">

            <p class="status-week">
                Week ${expedition.week} of ${expedition.totalWeeks}
            </p>

        </section>

    `;

}