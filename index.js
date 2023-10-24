function updateDivDisplay() {
  const windowHeight = window.innerHeight;
  const scrollPosition = window.scrollY;
  const divElement = document.querySelector("#navvigationbarvisablehidden");  // div ID

  // Calculate the percentage scrolled
  const scrolledPercentage = (scrollPosition / (windowHeight - windowHeight * 0.25)) * 100;

  // Update display property based on the scroll percentage
  if (scrolledPercentage < 100) {
  divElement.style.visibility="inherit"
  } else if (scrolledPercentage >= 25) {
  divElement.style.visibility="hidden"
  }}
// Attach the event listener to update display on scroll
window.addEventListener('scroll', updateDivDisplay);

// Call the function to set the initial display state
updateDivDisplay();