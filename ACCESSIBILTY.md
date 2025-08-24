The modal has role="dialog" and aria-modal="true so assistive tech knows it’s a popup. The close button also has an accessible label.

When the modal opens, focus stays inside it (trapped), and pressing Esc closes it. When it closes, focus goes back to the button that opened it.

Timeline buttons can be reached with Tab and activated by keyboard. The active marker can use aria-current.

Images have descriptive alt text.

Color contrast was checked — text/background combinations meet WCAG AA, so no extra CSS changes were needed.

The modal can be closed with the button, by clicking outside, or with Esc, so users have multiple options.