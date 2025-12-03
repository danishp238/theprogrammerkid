AOS.init({
  duration: 1000,
  once: true,
  offset: 100
});

const params = new URLSearchParams(window.location.search);
const topic = params.get("topic");

const titleEl = document.getElementById("guide-title");
const descEl = document.getElementById("guide-description");
const container = document.getElementById("articles-container");

if (!guidesData[topic]) {
  titleEl.textContent = "Topic Not Found";
  descEl.textContent = "Sorry, this guide does not exist.";
} else {
  const guide = guidesData[topic];
  titleEl.textContent = guide.title;
  descEl.textContent = guide.description;

  guide.articles.forEach(article => {
    const card = document.createElement("div");
    card.className = `article-card bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 shadow-lg card-hover`;
    card.setAttribute("data-difficulty", article.difficulty.toLowerCase());

    const articleUrl = `article.html?topic=${topic}&id=${article.id}`;

    card.innerHTML = `
      <div class="flex justify-between items-start mb-4">
        <div class="difficulty-badge difficulty-${article.difficulty.toLowerCase()}">${article.difficulty}</div>
        <div class="flex items-center text-gray-500 text-sm">
          <svg class="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          ${article.readTime}
        </div>
      </div>
      <h3 class="text-xl font-bold text-gray-800 mb-3">${article.title}</h3>
      <p class="text-gray-600 mb-4">${article.description}</p>
      <div class="flex justify-between items-center">
        <a href="${articleUrl}" class="text-blue-600 font-semibold flex items-center">
          Read Guide
          <svg class="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    `;

    container.appendChild(card);
  });

  // ✅ Now setup filters AFTER cards are created
  setupDifficultyFilters();
}

const statsContainer = document.getElementById("topic-stats-container");
const stat = statsData[topic];

if (stat && statsContainer) {
  statsContainer.innerHTML = `
    <div class="relative">
      <div class="w-64 h-64 bg-blue-400 rounded-full opacity-20 absolute -top-10 -left-10 floating"></div>
      <div class="w-64 h-64 bg-blue-300 rounded-full opacity-30 absolute -bottom-10 -right-10 floating" style="animation-delay: 1.5s;"></div>
      <div class="relative bg-white rounded-2xl shadow-2xl p-6 w-80">
        <div class="flex justify-between items-center mb-6">
          <h3 class="text-lg font-bold text-gray-800">${stat.title}</h3>
          <div class="text-2xl font-bold text-blue-600">${stat.mainValue}</div>
        </div>
        <div class="progress-bar mb-2">
          <div class="progress-value" style="width: ${parseInt(stat.mainValue)}%"></div>
        </div>
        <div class="flex justify-between text-sm text-gray-600 mb-6">
          <span>Before: ${stat.beforeValue}</span>
          <span>After: ${stat.afterValue}</span>
        </div>
        <div class="grid grid-cols-2 gap-4">
          ${stat.stats.map(s => `
            <div class="bg-blue-50 rounded-lg p-3 text-center">
              <div class="text-xl font-bold text-blue-700">${s.value}</div>
              <div class="text-xs text-gray-600">${s.label}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}


function setupDifficultyFilters() {
  const filterButtons = document.querySelectorAll('.filter-btn');
  const articles = document.querySelectorAll('.article-card');

  filterButtons.forEach(button => {
    button.addEventListener('click', function () {
      filterButtons.forEach(btn => btn.classList.remove('active'));
      this.classList.add('active');

      const difficulty = this.getAttribute('data-difficulty');

      articles.forEach(article => { 
        if (difficulty === 'all' || article.getAttribute('data-difficulty') === difficulty) {
          article.style.display = 'block';
          article.style.opacity = '0';
          setTimeout(() => { article.style.opacity = '1'; }, 50);
        } else {
          article.style.display = 'none';
        }
      });
    });
  });
}
