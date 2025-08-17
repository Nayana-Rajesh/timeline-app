import type { EventData } from "./types.js";

export function renderTimeline(events: EventData[], timeline: HTMLElement): void {
  timeline.innerHTML = "";

  for (const event of events) {
    const article = document.createElement("article");
    article.id = `year-${event.year}`;
    article.innerHTML = `
      <header>
        <p><time datetime="${event.year}">${event.year}</time></p>
        <h2>${event.title}</h2>
      </header>
      <figure>
        <img src="${event.imageURL}" alt="${event.title}" width="100" height="100" />
        <figcaption>${event.title}</figcaption>
      </figure>
      <p>${event.description}</p>
      <button aria-label="Learn more about ${event.title}">Learn More</button>
    `;
    timeline.appendChild(article);
  }
}
