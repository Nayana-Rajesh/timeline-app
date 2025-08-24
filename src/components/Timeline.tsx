import { useState } from "react";
import events from "../data/events.json";
import EventModal from "./EventModal";

export default function Timeline() {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section id="timeline" aria-label="Historical Timeline">
      {events.map((ev, idx) => (
        <article id={`year-${ev.year}`} key={idx}>
          <header>
            <p>{ev.year}</p>
            <h2>{ev.title}</h2>
          </header>
          <figure>
            <img src={`/images/${ev.imageURL}`} alt={ev.title} />
            <figcaption>{ev.category}</figcaption>
          </figure>
          <p>{ev.description}</p>
          <button onClick={() => setSelected(ev)}>Read More</button>
        </article>
      ))}
      <EventModal event={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
