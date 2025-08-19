const works = [
  {
    title: "Streaming App",
    img: "/images/streaming-app-project.png",
    link: "https://streamvibe-auro.vercel.app/",
    repo: "https://github.com/AuroSampad2003/StreamVibe",
    techStack: [
      "/images/js-icon.png",
      "/images/react-icon.png",
      "/images/tailwind-icon.png"
    ],
    description:
      "Developed a movie streaming platform with genre-based browsing, top-rated lists, and movie details, utilizing API for state management and Vite for fast builds",
  },
  {
    title: "Calculator App",
    img: "/images/calculator-project.png",
    link: "https://aurosampad2003.github.io/REAL-TIME-CALCULATOR/",
    repo: "https://github.com/AuroSampad2003/REAL-TIME-CALCULATOR",
    techStack: [
      "/images/html-icon.png",
      "/images/css-icon.png",
      "/images/js-icon.png"
    ],
    description:
      "Developed a responsive web-based calculator for basic arithmetic operations also implemented event-driven programming for a smooth user experience.",
  },
  {
    title: "User Management System",
    img: "/images/user-mngmnt-project.png",
    link: "https://github.com/AuroSampad2003/User-Management-System",
    repo: "https://github.com/AuroSampad2003/User-Management-System",
    techStack: [
      "/images/java-icon.png",
      "/images/hibernate-icon.png",
      "/images/mysql-icon.png",
      "/images/bootstrap-icon.png"
    ],
    description:
      "Developed a User Management System for 1,000+ users with secure login, profile management, and role-based authentication, ensuring efficiency and security in a seamless user experience.",
  },
  {
    title: "Note Taking App",
    img: "/images/note-app-project.png",
    link: "https://github.com/AuroSampad2003/Note-App",
    repo: "https://github.com/AuroSampad2003/Note-App",
    techStack: [
      "/images/java-icon.png",
      "/images/hibernate-icon.png",
      "/images/mysql-icon.png",
      "/images/bootstrap-icon.png"
    ],
    description:
      "Developed a note-taking app with CRUD features and 95% uptime, enabled users to manage 500+ notes efficiently with search, edit, and delete functionalities",
  },
];

const worksToShowInitially = 3;

function displayWorks() {
  const workList = document.querySelector(".work-list");
  workList.innerHTML = "";

  works.forEach((work, index) => {
    const workItem = document.createElement("div");
    workItem.classList.add("work-item");
    workItem.innerHTML = `
            <img src="${work.img}" alt="${work.title}">
            <div class="work-info">
              <h3>${work.title}</h3>
              <p>${work.description}</p>

              <!-- New horizontal container -->
              <div class="bottom-row">
                  <!-- Left side: Link buttons -->
                  <div class="link-buttons">
                      <a href="${work.link}" target="_blank">
                          <i class="fa-solid fa-up-right-from-square"></i>
                      </a>
                      <a href="${work.repo}" target="_blank">
                          <i class="fa-solid fa-code"></i>
                      </a>
                  </div>

                  <!-- Right side: Tech stack -->
                  <div class="tech-stack">
                    ${Array.isArray(work.techStack) && work.techStack.length > 0
        ? work.techStack.map(icon => `
                            <img src="${icon}" alt="Tech icon" class="tech-icon" />
                          `).join('')
        : '' // show nothing if no tech stack
      }
                  </div>
              </div>
            </div>
        `;

    if (index >= worksToShowInitially) {
      workItem.classList.add("hidden-work");
    }

    workList.appendChild(workItem);
  });

  const seeMoreBtn = document.getElementById("seeMoreWorksBtn");
  if (works.length > worksToShowInitially) {
    seeMoreBtn.style.display = "block";
  } else {
    seeMoreBtn.style.display = "none";
  }
}

function toggleWorks() {
  const workItems = document.querySelectorAll(".work-item");
  const seeMoreBtn = document.getElementById("seeMoreWorksBtn");

  if (seeMoreBtn.innerText === "See More") {
    workItems.forEach((item) => item.classList.remove("hidden-work"));
    seeMoreBtn.innerText = "See Less";
  } else {
    workItems.forEach((item, index) => {
      if (index >= worksToShowInitially) {
        item.classList.add("hidden-work");
      }
    });
    seeMoreBtn.innerText = "See More";
  }
}

window.onload = displayWorks;
