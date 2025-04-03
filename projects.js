const works = [
  {
    title: "Streaming App",
    img: "/images/streaming-app-project.png",
    link: "https://streaming-a5kwazjv5-aurosampad-champatirays-projects.vercel.app/",
    description:
      "Developed a movie streaming platform with genre-based browsing, top-rated lists, and movie details, utilizing API for state management and Vite for fast builds",
  },
  {
    title: "Calculator App",
    img: "/images/calculator-project.png",
    link: "https://aurosampad2003.github.io/REAL-TIME-CALCULATOR/",
    description:
      "Developed a responsive web-based calculator for basic arithmetic operations also implemented event-driven programming for a smooth user experience.",
  },
  {
    title: "User Management System",
    img: "/images/user-mngmnt-project.png",
    link: "https://github.com/AuroSampad2003/User-Management-System",
    description:
      "Developed a User Management System for 1,000+ users with secure login, profile management, and role-based authentication, ensuring efficiency and security in a seamless user experience.",
  },
  {
    title: "Note Taking App",
    img: "/images/note-app-project.png",
    link: "https://github.com/AuroSampad2003/Note-App",
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
                <a href="${work.link}" target="_blank">
                    <i class="fa-solid fa-up-right-from-square"></i>
                </a>
            </div>
        `;

    if (index >= worksToShowInitially) {
      workItem.classList.add("hidden");
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
    workItems.forEach((item) => item.classList.remove("hidden"));
    seeMoreBtn.innerText = "See Less";
  } else {
    workItems.forEach((item, index) => {
      if (index >= worksToShowInitially) {
        item.classList.add("hidden");
      }
    });
    seeMoreBtn.innerText = "See More";
  }
}

window.onload = displayWorks;
