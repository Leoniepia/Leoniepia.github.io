// Select the custom cursor element
const customCursor = document.getElementById('customCursor');

// Update the cursor position to follow the mouse
document.addEventListener('mousemove', (e) => {
  customCursor.style.left = `${e.clientX}px`;
  customCursor.style.top = `${e.clientY}px`;
});

// Optional: Hide the cursor when leaving the window
document.addEventListener('mouseout', () => {
  customCursor.style.display = 'none';
});

// Optional: Show the cursor again when re-entering the window
document.addEventListener('mouseover', () => {
  customCursor.style.display = 'block';
});