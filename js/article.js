const params = new URLSearchParams(window.location.search);
const topic = params.get("topic");
const id = parseInt(params.get("id"), 10);

if (!topic || !guidesData[topic]) {
  document.body.innerHTML = "<p class='text-center text-red-600 mt-20'>Invalid topic.</p>";
} else {
  const article = guidesData[topic].articles.find(a => a.id === id);
  if (!article) {
    document.body.innerHTML = "<p class='text-center text-red-600 mt-20'>Article not found.</p>";
  } else {
    document.title = article.title + " — Laravel Addicts";

    document.getElementById("article-title").textContent = article.title;
    document.getElementById("article-description").textContent = article.description;
    document.getElementById("article-difficulty").textContent = article.difficulty;
    document.getElementById("article-difficulty").classList.add(`difficulty-${article.difficulty.toLowerCase()}`);
    document.getElementById("article-readtime").textContent = article.readTime;
    document.getElementById("article-content").innerHTML = article.content;
  }
}

function renderRelatedGuides(topic, currentArticleId) {
  const relatedContainer = document.getElementById("related-guides");
  const topicData = guidesData[topic];

  if (!topicData) return;

  // Filter out the current article
  const relatedArticles = topicData.articles.filter(a => a.id !== currentArticleId).slice(0, 2); // show 2

  if (relatedArticles.length === 0) {
    relatedContainer.innerHTML = ""; // hide if none
    return;
  }

  const cards = relatedArticles
    .map(
      (a) => `
      <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
        <h3 class="text-xl font-bold text-gray-800 mb-3">${a.title}</h3>
        <p class="text-gray-600 mb-4">${a.description}</p>
        <a href="article.html?topic=${topic}&id=${a.id}" class="text-blue-600 font-semibold flex items-center hover:underline">
          Read Guide
          <i class="fas fa-arrow-right ml-2"></i>
        </a>
      </div>`
    )
    .join("");

  relatedContainer.innerHTML = `
    <h2 class="text-2xl font-bold text-blue-800 mb-6">Related Guides</h2>
    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">${cards}</div>
  `;
}

// Call it at the end of your article rendering logic
renderRelatedGuides(topic, id);

