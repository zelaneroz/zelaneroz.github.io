document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".project-card");

  cards.forEach(card => {
    card.addEventListener("mousemove", (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      const rotateX = ((y - centerY) / 40).toFixed(2);
      const rotateY = ((x - centerX) / -40).toFixed(2);

      card.style.transform = `perspective(2000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.03)`;
      card.style.boxShadow = `0 20px 40px rgba(230, 0, 230, 0.15)`;
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "rotateX(0) rotateY(0) scale(1)";
      card.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.05)";
    });

  });
});

const galleryData = [
  {
    src: 'src/gallery/grad.jpg',
    title: 'UWC ISAK Japan | Graduation',
    date: 'May 19, 2024',
    desc: 'My time at UWC ISAK Japan has been one of the most fulfilling experiences of my life. Living and learning with peers from all over the world opened my perspective in ways I never imagined. Beyond academics, it taught me empathy, courage, and what it means to lead with purpose. I’ll carry the friendships, lessons, and spirit of ISAK with me wherever I go.',
  },
  {
    src: 'src/gallery/mx25.JPG',
    title: 'Mexico | Winter Break 2024',
    date: 'Dec 2024 to Jan 2025',
    desc: 'From the bustling streets of Mexico City to the beaches of Cancún, my winter break in Mexico was a vibrant mosaic of culture, history, and spontaneity. Wandering through Guadalajara’s plazas, swimming in cenotes near Mérida, and tasting everything in sight — this trip reminded me how much I love learning through exploration. This trip is of course incomplete without the generous hospitality of my friends Mayte\'s and Kirsty\'s families, enabling me to feel at home for Christmas and New Year\'s.',
  },
  {
    src: 'src/gallery/iceland25.jpeg',
    title: 'Iceland | ThinkImpact Fellowship',
    date: 'Mar 2025',
    desc: 'Grateful for an unforgettable experience in Iceland through the ThinkImpact Fellowship. From exploring sustainable solutions at Carbfix, SORPA, Húsasmiðjan, and Wolt, to late-night laughs with brilliant minds, this journey deepened my understanding of impact-driven entrepreneurship and left me inspired by the people and ideas that shaped it. I\'ll carry these memories — and this mindset — with me always.',
  },
];

let current = 0;

function renderGalleryStack() {
  const stack = document.getElementById('gallery-stack');
  stack.innerHTML = '';

  // Determine which 3 slides to show
  const total = galleryData.length;
  const visible = [
    galleryData[(current + 2) % total],
    galleryData[(current + 1) % total],
    galleryData[current]
  ];

  visible.forEach((item, index) => {
    const img = document.createElement('img');
    img.src = item.src;
    img.alt = item.title;
    stack.appendChild(img);
  });

  // update text content
  const { title, date, desc } = galleryData[current];
  document.getElementById('gallery-title').innerText = title;
  document.getElementById('gallery-date').innerText = date;
  document.getElementById('gallery-description').innerText = desc;
}

function nextSlide() {
  current = (current + 1) % galleryData.length;
  renderGalleryStack();
}

document.addEventListener('DOMContentLoaded', () => {
  renderGalleryStack();
});

window.addEventListener('DOMContentLoaded', () => {
  // then run your dynamic image & text loading
  initGallery();
});



// PROJECT GRID

const projects = [
  {
    title: "BayBai",
    img: "src/projects/M1-Baybai.png",
    description: "Baybai is a mobile app that teaches and revives Baybayin, the pre-colonial Filipino script. It features flashcards, a translator, and a social space for collaborative learning.",
    tech: "Python, KivyMD, Flask, SQLite",
    github: "https://github.com/zelaneroz/IB-CSHL-2024/tree/main/IA-Baybai"
  },
  {
    title: "Club Hub",
    img: "src/projects/W1-ClubHub.png",
    description: "ClubHub is a full-stack web application designed to streamline the management of student-led organizations. The platform enables multiple user roles (Admin, Club Leader, Student Member) within a university to manage club activities, attendance, event planning, inventory, and internal communication, all authenticated through Google domain-restricted login (e.g., @uwcisak.jp, @case.edu)",
    tech: "React.js, HTML5, CSS3, Node.js, Figma (Planning), Netlify (Hosting),Firebase (Database)",
    github: "https://github.com/zelaneroz/ClubHub"
  },

  {
    title: "Truth or Truth",
    img: "src/projects/truth-or-truth.jpg",
    description: "A habit-building mobile app that gamifies mental wellness and connects users with local events and prompts.",
    tech: "React Native, Firebase, Express.js",
    github: "https://github.com/zelaneroz/truth-or-truth"
  },
];

const projectGrid = document.getElementById("project-grid");

projects.forEach(project => {
  const link = document.createElement("a");
  link.href = project.github;
  link.target = "_blank";
  link.classList.add("project-link");

  const card = document.createElement("div");
  card.classList.add("project-card");

  card.innerHTML = `
    <img src="${project.img}" alt="project preview">
    <h3>${project.title}</h3>
    <p>${project.description}</p>
    <p><strong>Tech Stack:</strong> ${project.tech}</p>
  `;

  link.appendChild(card);
  projectGrid.appendChild(link);
});


window.addEventListener('DOMContentLoaded', () => {
  if (projectGrid.children.length <= 1) {
    // Inject only if fallback is the only one present
    projects.forEach(project => {
      const card = document.createElement("a");
      card.href = project.link;
      card.target = "_blank";
      card.className = "project-link";
      card.innerHTML = `
        <div class="project-card">
          <img src="${project.img}" alt="${project.title} preview">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <p><strong>Tech Stack:</strong> ${project.tech}</p>
        </div>
      `;
      projectGrid.appendChild(card);
    });
  }
});
