document.addEventListener("DOMContentLoaded", () => {
  // ==== Card Hover Animation ====
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

  // ==== Gallery Setup ====
  const galleryData = [
    {
      src: 'src/gallery/grad.jpg',
      title: 'UWC ISAK Japan | Graduation',
      date: 'May 19, 2024',
      desc: 'My time at UWC ISAK Japan has been one of the most fulfilling experiences of my life...'
    },
    {
      src: 'src/gallery/mx25.JPG',
      title: 'Mexico | Winter Break 2024',
      date: 'Dec 2024 to Jan 2025',
      desc: 'From the bustling streets of Mexico City to the beaches of Cancún...'
    },
    {
      src: 'src/gallery/iceland25.jpeg',
      title: 'Iceland | ThinkImpact Fellowship',
      date: 'Mar 2025',
      desc: 'Grateful for an unforgettable experience in Iceland through the ThinkImpact Fellowship...'
    }
  ];

  let current = 0;

  function renderGalleryStack() {
    const stack = document.getElementById('gallery-stack');
    stack.innerHTML = '';
    const total = galleryData.length;
    const visible = [
      galleryData[(current + 2) % total],
      galleryData[(current + 1) % total],
      galleryData[current]
    ];
    visible.forEach(item => {
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.title;
      stack.appendChild(img);
    });
    const { title, date, desc } = galleryData[current];
    document.getElementById('gallery-title').innerText = title;
    document.getElementById('gallery-date').innerText = date;
    document.getElementById('gallery-description').innerText = desc;
  }

  window.nextSlide = function () {
    current = (current + 1) % galleryData.length;
    renderGalleryStack();
  }

  renderGalleryStack();

  // ==== Project Grid ====
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
      description: "A full-stack app to manage student-led clubs, track attendance, events, and inventory.",
      tech: "React.js, Node.js, Firebase, Netlify",
      github: "https://github.com/zelaneroz/ClubHub"
    },
    {
      title: "Truth or Truth",
      img: "src/projects/truth-or-truth.jpg",
      description: "A habit-building mobile app that gamifies wellness with local prompts and challenges.",
      tech: "React Native, Firebase, Express.js",
      github: "https://github.com/zelaneroz/truth-or-truth"
    }
  ];

  const projectGrid = document.getElementById("project-grid");

  if (projectGrid && projectGrid.children.length <= 1) {
    projects.forEach(project => {
      const link = document.createElement("a");
      link.href = project.github;
      link.target = "_blank";
      link.className = "project-link";
      link.innerHTML = `
        <div class="project-card">
          <img src="${project.img}" alt="${project.title} preview">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <p><strong>Tech Stack:</strong> ${project.tech}</p>
        </div>
      `;
      projectGrid.appendChild(link);
    });
  }
});