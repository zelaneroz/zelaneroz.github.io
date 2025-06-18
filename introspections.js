// introspections.js
const posts = [
  {
    title: "Graduation Reflection",
    file: "posts/uwc-reflection.md",
    tags: ["Life", "Reflections"],
    summary: "Reflections on my UWC ISAK Japan graduation — a moment of growth, gratitude, and global friendship.",
    date: "2024-05-19",
    readTime: "2 min"
  },
  {
    title: "Winter in Mexico",
    file: "posts/winter-mexico.md",
    tags: ["Travel"],
    summary: "Exploring color, culture, and community from Guadalajara to Cancún.",
    date: "2024-12-28",
    readTime: "3 min"
  },
  {
    title: "Iceland Fellowship",
    file: "posts/iceland-fellowship.md",
    tags: ["Reflections", "Sustainability"],
    summary: "Lessons and laughter from my ThinkImpact fellowship across Iceland’s sustainable ecosystem.",
    date: "2025-03-14",
    readTime: "3 min"
  }
];

const grid = document.getElementById('thoughts-grid');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.getElementById('close-modal');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('#tag-filters button');

function renderPosts(postsToShow) {
  thoughtsGrid.innerHTML = '';

  postsToShow.forEach(post => {
    const card = document.createElement("div");
    card.className = "thought-card";
    card.innerHTML = `
      <h3>${post.title}</h3>
      <p class="summary">${post.summary}</p>
      <p class="tags">${post.tags.join(', ')}</p>
      <p class="date">${post.date} • ${post.readTime}</p>
    `;
    card.addEventListener("click", () => {
      fetch(post.file)
        .then(res => res.text())
        .then(content => {
          document.getElementById("modal-body").innerHTML = marked(content);
          modal.classList.remove("hidden");
        });
    });

    thoughtsGrid.appendChild(card);
  });
}


function openModal(thought) {
  modalBody.innerHTML = `
    <h2>${thought.title}</h2>
    <p><em>${thought.date}</em></p>
    <pre>${thought.content}</pre>
  `;
  modal.classList.remove('hidden');
}

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();
  const filtered = thoughts.filter(thought =>
    thought.title.toLowerCase().includes(query) ||
    thought.summary.toLowerCase().includes(query) ||
    thought.tags.join(' ').toLowerCase().includes(query)
  );
  renderCards(filtered);
});

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    filterButtons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
    const tag = button.dataset.tag;
    if (tag === 'all') {
      renderCards(thoughts);
    } else {
      renderCards(thoughts.filter(th => th.tags.includes(tag)));
    }
  });
});

// Initial render
renderCards(thoughts);
