// ============================================================
// WHAT-I-DO.JS — Single Scroll Button
// ============================================================
// One button. Arrow points down near the top, up near the bottom.
// Clicking scrolls to the destination.
// A scroll listener keeps the arrow accurate at all times —
// not just when you click, but as you scroll with the wheel too.
// ============================================================

const btn = document.getElementById('scrollBtn');

// How close to the bottom (in pixels) before we consider the
// user "at the bottom". Buffer handles sub-pixel rounding
// differences across browsers.
const BUFFER = 10;


// ── CHECK POSITION ────────────────────────────────────────────
// Returns true if the user is at (or very near) the bottom.

function isAtBottom() {
  return window.innerHeight + window.scrollY >= document.body.scrollHeight - BUFFER;
}


// ── UPDATE ARROW ──────────────────────────────────────────────
// Swaps the icon and aria-label based on current scroll position.
// Called on every scroll event so it's always accurate.

function updateArrow() {
  if (isAtBottom()) {
    btn.innerHTML = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M7.41 15.41L12 10.83l4.59 4.58L18 14l-6-6-6 6z"/></svg>';
    btn.setAttribute('aria-label', 'Scroll to top');
  } else {
    btn.innerHTML = '<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6z"/></svg>';
    btn.setAttribute('aria-label', 'Scroll to bottom');
  }
}


// ── CLICK HANDLER ─────────────────────────────────────────────
// Scrolls to the correct destination, then updates the arrow
// after the smooth scroll finishes.

btn.addEventListener('click', function () {
  if (isAtBottom()) {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } else {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  }

  // Wait for smooth scroll to finish before updating the arrow.
  // 500ms covers most smooth scroll durations across browsers.
  setTimeout(updateArrow, 500);
});


// ── SCROLL LISTENER ───────────────────────────────────────────
// Updates the arrow in real time as the user scrolls with
// the wheel, keyboard, or any other method — not just on click.

window.addEventListener('scroll', updateArrow);


// ── INIT ──────────────────────────────────────────────────────
// Run once on load so the arrow is correct immediately.

updateArrow();
