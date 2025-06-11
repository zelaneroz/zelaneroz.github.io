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

