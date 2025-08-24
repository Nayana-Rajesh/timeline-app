interface Event {
  year: number;
  title: string;
  description: string;
  imageURL: string;
  category: string;
}

interface Props {
  event: Event | null;
  onClose: () => void;
}

export default function EventModal({ event, onClose }: Props) {
  if (!event) return null;

  return (
    <section id="modal" role="dialog" aria-modal="true">
      <h2>{event.title} ({event.year})</h2>
      <p>{event.description}</p>
      <p><strong>Category:</strong> {event.category}</p>
      <img src={`/images/${event.imageURL}`} alt={event.title} />
      <button aria-label="Close Modal" onClick={onClose}>Close</button>
    </section>
  );
}
