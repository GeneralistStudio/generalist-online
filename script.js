//DARK MODE BUTTON

// Function to toggle theme
function toggleTheme() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  // Apply theme to document
  document.documentElement.setAttribute('data-theme', newTheme);
  
  // Save preference
  localStorage.setItem('theme', newTheme);
}

//CLOCK FUNCTIONALITY

// Function to update the clock with Eastern Time
function updateClock() {
  const now = new Date();
  
  // Format time for Eastern timezone (handles EST/EDT automatically)
  const easternTime = now.toLocaleTimeString('en-US', {
    timeZone: 'America/New_York',
    hour12: false, // 24-hour format
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
  
  // Get timezone abbreviation (EST or EDT)
  const timeZoneAbbr = now.toLocaleDateString('en-US', {
    timeZone: 'America/New_York',
    timeZoneName: 'short'
  }).split(', ')[1];
  
  // Check if mobile
  const isMobile = window.innerWidth <= 768;
  const separator = isMobile ? ' ' : '<br>';
  
  // Update the clock element
  const clockElement = document.querySelector('.clock-col');
  if (clockElement) {
    clockElement.innerHTML = `Providence, RI${separator}${easternTime} ${timeZoneAbbr}`;
  }
}

// Start the clock immediately and update every second
function startClock() {
  updateClock(); // Update immediately
  setInterval(updateClock, 1000); // Update every second
}

// Combined DOMContentLoaded event listener
document.addEventListener('DOMContentLoaded', function() {
  // Wire up theme toggle button
  const themeButton = document.getElementById('theme-toggle');
  if (themeButton) {
    themeButton.addEventListener('click', toggleTheme);
  }
  
  // Start the live clock
  startClock();
  
  // Random background image
  const imageElement = document.querySelector('.image');
  if (imageElement) {
    imageElement.style.backgroundImage = `url(./images/0${Math.floor(Math.random()*3)+1}.JPG)`;
  }
});
  