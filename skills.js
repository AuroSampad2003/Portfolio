const skills = [
    { name: "HTML", image: "images/html-icon.png" },
    { name: "CSS", image: "images/css-icon.png" },
    { name: "JavaScript", image: "images/js-icon.png" },
    { name: "React.js", image: "images/react-icon.png" },
    { name: "Bootstrap", image: "images/bootstrap-icon.png" },
    { name: "Tailwind CSS", image: "images/tailwind-icon.png" },
    { name: "Java", image: "images/java-icon.png" },
    { name: "Hibernate", image: "images/hibernate-icon.png" },
    { name: "Spring", image: "images/spring-icon.png" },
    { name: "Spring Boot", image: "images/springboot-icon.png" },
    { name: "SQL", image: "images/sql-icon.png" },
    { name: "MySQL", image: "images/mysql-icon.png" },
    { name: "Git", image: "images/git-icon.png" },
    { name: "GitHub", image: "images/github-icon.png" },
    { name: "Eclipse", image: "images/eclipse-icon.png" },
    { name: "VS Code", image: "images/vs-code-icon.png" },
    { name: "Figma", image: "images/figma-icon.png" },
];

const skillsToShowInitially = 10;

// Function to dynamically create skill items
function displaySkills() {
    const skillsList = document.querySelector('.skills-list');
    skillsList.innerHTML = "";

    skills.forEach((skill, index) => {
        const skillItem = document.createElement('div');
        skillItem.classList.add('skill-item');
        skillItem.innerHTML = `
            <img src="${skill.image}" alt="${skill.name} Icon">
            <h3>${skill.name}</h3>
        `;

        // Initially hide skills beyond the first 'skillsToShowInitially' items
        if (index >= skillsToShowInitially) {
            skillItem.classList.add('hidden');
        }

        skillsList.appendChild(skillItem);
    });

    // Show "See More" button if there are more skills
    const seeMoreBtn = document.getElementById("seeMoreSkillsBtn");
    if (skills.length > skillsToShowInitially) {
        seeMoreBtn.style.display = "block";
    } else {
        seeMoreBtn.style.display = "none";
    }
}

// Toggle visibility of extra skills
function toggleSkills() {
    const skillItems = document.querySelectorAll(".skill-item");
    const seeMoreBtn = document.getElementById("seeMoreSkillsBtn");

    if (seeMoreBtn.innerText === "See More") {
        // Show all hidden skills
        skillItems.forEach(item => item.classList.remove("hidden"));
        seeMoreBtn.innerText = "See Less";
    } else {
        // Hide extra skills again
        skillItems.forEach((item, index) => {
            if (index >= skillsToShowInitially) {
                item.classList.add("hidden");
            }
        });
        seeMoreBtn.innerText = "See More";
    }
}

// Call the function to display skills when the page loads
window.onload = displaySkills;

