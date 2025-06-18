// introspections.js
const thoughts = [
  {
    title: "Why I Fell in Love with Language Models",
    summary: "A reflection on how I discovered NLP and its overlap with curiosity, communication, and culture.",
    tags: ["AI", "Reflections"],
    date: "2025-06-01",
    content: `I first stumbled upon language models out of curiosity. But the more I read, built, and tested, the more I realized this was about far more than just code. It was about meaning — the space between words, and what it means to bridge people and cultures through machines.\n\n— Z`
  },
  {
    title: "Solo Hiking in Kyoto",
    summary: "Wandering into the mountains of Kyoto alone taught me lessons I didn’t expect.",
    tags: ["Travel", "Life"],
    date: "2024-11-10",
    content: `Kyoto’s trails humbled me. I came looking for peace and found it in the quiet discomfort of getting lost, meeting strangers, and trusting the path.\n\n— Z`
  },
  {
    title: "The Math of Uncertainty",
    summary: "On learning to embrace risk through data and intuition.",
    tags: ["Life", "AI"],
    date: "2025-03-15",
    content: `We try to predict everything — markets, weather, even people. But some of the best things in life come from not knowing. Data helps. So does trust.\n\n— Z`
  }
];

const grid = document.getElementById('thoughts-grid');
const modal = document.getElementById('modal');
const modalBody = document.getElementById('modal-body');
const closeModal = document.getElementById('close-modal');
const searchInput = document.getElementById('searchInput');
const filterButtons = document.querySelectorAll('#tag-filters button');

function renderCards(data) {
  grid.innerHTML = '';
  data.forEach(thought => {
    const card = document.createElement('div');
    card.className = 'thought-card';
    card.innerHTML = `
      <h3>${thought.title}</h3>
      <p>${thought.summary}</p>
      <div class="tags">${thought.tags.join(', ')} | ${thought.date}</div>
    `;
    card.addEventListener('click', () => openModal(thought));
    grid.appendChild(card);
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
