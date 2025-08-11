// Script for About Skills
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    // Remove active class from all tab links and tab contents
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    // Add active class to the selected tab
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


// Script for Side Menu Bar
const menuIcon = document.getElementById("menuIcon");
  const dropdownMenu = document.getElementById("dropdownMenu");
  let menuOpen = false;

  menuIcon.addEventListener("click", () => {
    menuOpen = !menuOpen;

    if (menuOpen) {
      // Show dropdown, change icon to X
      dropdownMenu.classList.add("show");
      menuIcon.innerHTML = '<i class="fa-solid fa-xmark"></i>';
    } else {
      // Hide dropdown, change back to bars
      dropdownMenu.classList.remove("show");
      menuIcon.innerHTML = '<i class="fa-solid fa-bars"></i>';
    }
  });

  // Grab all menu links
const menuLinks = document.querySelectorAll('.dropdown-menu a');

// Map each link's target section
const sections = Array.from(menuLinks).map(link => {
  const id = link.getAttribute('href');
  return document.querySelector(id);
});

// Scroll listener for active section detection
window.addEventListener('scroll', () => {
  let currentIndex = sections.findIndex((section, i) => {
    // Section top is before scroll point AND section bottom is after
    const rect = section.getBoundingClientRect();
    return rect.top <= 150 && rect.bottom >= 150;
  });

  // Remove old active
  menuLinks.forEach(link => link.classList.remove('active'));

  // Add active to current link
  if (currentIndex >= 0) {
    menuLinks[currentIndex].classList.add('active');
  }
});


