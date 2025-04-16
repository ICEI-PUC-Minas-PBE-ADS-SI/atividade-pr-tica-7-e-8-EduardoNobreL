function createCard(imageUrl, title, description, index) {
    const card = document.createElement('article');
    card.classList.add('news-card');
  
    const link = document.createElement('a');
    link.href = `detalhe.html?id=${index}`;
    link.classList.add('card-link'); // classe para aplicar estilo
  
    const img = document.createElement('img');
    img.src = imageUrl;
    img.alt = title;
  
    const contentDiv = document.createElement('div');
    contentDiv.classList.add('card-content');
  
    const h3 = document.createElement('h3');
    h3.textContent = title;
  
    const p = document.createElement('p');
    p.textContent = description;
  
    // Agrupa o conteúdo no div
    contentDiv.appendChild(h3);
    contentDiv.appendChild(p);
  
    // Monta o link
    link.appendChild(img);
    link.appendChild(contentDiv);
  
    // Monta o card
    card.appendChild(link);
  
    return card;
  }
  
  const newsData = [
    {
        imageUrl: "./Imagem/mercado.jpg",
        title: "Reforma do Mercado Central",
        description: "As obras devem começar no próximo mês, com melhorias estruturais e acessibilidade."
    },
    {
        imageUrl: "./Imagem/comida.jpg",
        title: "Festival de Gastronomia",
        description: "Evento gastronômico reunirá chefs renomados e atrações culturais."
    },
    {
        imageUrl: "./Imagem/metrô.jpg",
        title: "Novo Sistema de Transporte",
        description: "Cidade implementa melhorias no transporte público com integração entre linhas."
    },
    {
        imageUrl: "./Imagem/parque.jpg",
        title: "Novo Parque será Inaugurado",
        description: "Um novo espaço verde será inaugurado no centro da cidade."
    },
    {
        imageUrl: "./Imagem/cultura.jpg",
        title: "Cultura e Arte na Praça",
        description: "Eventos culturais acontecerão semanalmente na praça central."
    },
    {
        imageUrl: "./Imagem/livro.jpg",
        title: "Lançamento de Livro",
        description: "Novo livro será lançado na biblioteca municipal com sessão de autógrafos."
    },
    {
        imageUrl: "./Imagem/monumento.jpg",
        title: "Conferência de Tecnologia",
        description: "Conferência sobre inovações tecnológicas acontecerá na cidade."
    }
  ];
  
  const newsGrid = document.getElementById('news-grid');
  newsData.forEach((data, index) => {
    const card = createCard(data.imageUrl, data.title, data.description, index);
    newsGrid.appendChild(card);
  });
  
  document.querySelector('.search-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const searchTerm = event.target.querySelector('input[type="search"]').value.toLowerCase();
    const articles = document.querySelectorAll('.news-card');
  
    articles.forEach(article => {
        const title = article.querySelector('h3').textContent.toLowerCase();
        article.style.display = title.includes(searchTerm) ? 'block' : 'none';
    });
  });
  
  document.querySelector('.newsletter-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const email = event.target.querySelector('input[type="email"]').value;
    alert(`Inscrição realizada com sucesso para: ${email}`);
    event.target.reset();
  });