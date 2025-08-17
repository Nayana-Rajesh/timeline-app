import { fetchEvents } from "./fetcher.js";
import { renderTimeline } from "./renderer.js";
import { setupModal } from "./modal.js";
const timeline = document.getElementById("timeline");
const modal = document.getElementById("modal");
async function main() {
    if (!timeline || !modal) {
        console.error("#timeline or #modal not found in HTML");
        return;
    }
    try {
        const events = await fetchEvents();
        renderTimeline(events, timeline);
        setupModal(timeline, modal);
    }
    catch (err) {
        console.error(err);
        timeline.innerHTML = `<p style="color:#c00">Failed to load timeline.</p>`;
    }
}
main();
document.addEventListener("DOMContentLoaded", () => {
    const themeButton = document.querySelector('button[aria-label="Toggle Theme"]');
    if (themeButton) {
        themeButton.addEventListener("click", () => {
            document.body.classList.toggle("dark");
        });
    }
});
