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

// Sample news data
const newsData = [
    {
        imageUrl: "https://picsum.photos/id/2/400/200",
        title: "Reforma do Mercado Central",
        description: "Obras devem começar no próximo mês..."
    },
    {
        imageUrl: "https://picsum.photos/id/3/400/200",
        title: "Festival de Gastronomia",
        description: "Evento reunirá chefs renomados da cidade..."
    },
    {
        imageUrl: "https://picsum.photos/id/4/400/200",
        title: "Novo Sistema de Transporte",
        description: "Cidade implementa melhorias no transporte público..."
    },
    {
        imageUrl: "https://picsum.photos/id/5/400/200",
        title: "Novo Parque será Inaugurado",
        description: "Um novo espaço verde será inaugurado no centro da cidade."
    },
    {
        imageUrl: "https://picsum.photos/id/6/400/200",
        title: "Cultura e Arte na Praça",
        description: "Eventos culturais e artísticos acontecerão na praça central."
    },
    {
        imageUrl: "https://picsum.photos/id/7/400/200",
        title: "Lançamento de Livro",
        description: "Um novo livro será lançado por um autor local."
    },
    {
        imageUrl: "https://picsum.photos/id/8/400/200",
        title: "Conferência de Tecnologia",
        description: "Uma conferência sobre inovações tecnológicas acontecerá na cidade."
    }
];

// Populate the news grid
const newsGrid = document.getElementById('news-grid');
newsData.forEach(data => {
    const card = createCard(data.imageUrl, data.title, data.description);
    newsGrid.appendChild(card);
});

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