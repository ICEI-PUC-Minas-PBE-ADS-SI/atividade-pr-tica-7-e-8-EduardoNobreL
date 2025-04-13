function createCard(imageUrl, title, description) {
    const card = document.createElement('article');
    card.classList.add('news-card');

    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = title;

    const h3 = document.createElement('h3');
    h3.textContent = title;

    const p = document.createElement('p');
    p.textContent = description;

    card.appendChild(img);
    card.appendChild(h3);
    card.appendChild(p);

    return card;
}

function getQueryStringParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Function to handle search form submission
document.querySelector('.search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const searchTerm = event.target.querySelector('input[type="search"]').value.toLowerCase();
    const articles = document.querySelectorAll('.news-card');

    articles.forEach(article => {
        const title = article.querySelector('h3').textContent.toLowerCase();
        if (title.includes(searchTerm)) {
            article.style.display = 'block'; // Show matching articles
        } else {
            article.style.display = 'none'; // Hide non-matching articles
        }
    });
});

// Function to handle newsletter form submission
document.querySelector('.newsletter-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    const email = event.target.querySelector('input[type="email"]').value;
    alert(`Inscrição realizada com sucesso para: ${email}`);
    event.target.reset(); // Reset the form
});