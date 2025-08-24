import { useState, useRef } from "react";
import events from "../data/events.json";
import EventModal from "./EventModal";

export default function Timeline() {
  const [selected, setSelected] = useState<any>(null);
  const [triggerRef, setTriggerRef] = useState<React.RefObject<HTMLElement> | null>(null);

  // Refs for returning focus after modal close
  const buttonRefs = useRef<(HTMLButtonElement | null)[]>([]);

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
          <button
            ref={(el) => (buttonRefs.current[idx] = el)}
            onClick={(e) => {
              setSelected(ev);
              setTriggerRef({ current: e.currentTarget });
            }}
            aria-label={`Read more about ${ev.title}`}
          >
            Read More
          </button>
        </article>
      ))}

      <EventModal
        event={selected}
        onClose={() => setSelected(null)}
        triggerRef={triggerRef}
      />
    </section>
  );
}
