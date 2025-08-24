import { useEffect, useRef } from "react";

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
  triggerRef?: React.RefObject<HTMLElement> | null;
}

export default function EventModal({ event, onClose, triggerRef }: Props) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!event) return;

    const modal = modalRef.current;
    if (!modal) return;

    // Focusable elements inside modal
    const focusableEls = modal.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstEl = focusableEls[0];
    const lastEl = focusableEls[focusableEls.length - 1];

    firstEl?.focus();

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Tab") {
        if (e.shiftKey) {
          if (document.activeElement === firstEl) {
            e.preventDefault();
            lastEl.focus();
          }
        } else {
          if (document.activeElement === lastEl) {
            e.preventDefault();
            firstEl.focus();
          }
        }
      } else if (e.key === "Escape") {
        onClose();
      }
    }

    modal.addEventListener("keydown", handleKeyDown);

    return () => {
      modal.removeEventListener("keydown", handleKeyDown);
      if (triggerRef?.current) triggerRef.current.focus();
    };
  }, [event, onClose, triggerRef]);

  if (!event) return null;

  return (
    <div
      className="modal-backdrop"
      role="presentation"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className="modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
      >
        <h2 id="modal-title">
          {event.title} ({event.year})
        </h2>
        <p>{event.description}</p>
        <p>
          <strong>Category:</strong> {event.category}
        </p>
        <img src={`images/${event.imageURL}`} alt={event.title} />
        <button onClick={onClose} aria-label="Close Modal">
          Close
        </button>
      </div>
    </div>
  );
}
