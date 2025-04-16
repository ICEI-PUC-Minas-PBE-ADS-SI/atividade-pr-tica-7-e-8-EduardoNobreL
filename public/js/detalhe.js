// Dados das notícias (pode ser substituído por um fetch futuramente)
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

// Função para pegar o parâmetro da URL
function getQueryStringParameter(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Função para preencher o conteúdo da notícia
function renderNewsDetail() {
    const id = getQueryStringParameter("id");
    const noticia = newsData[id];

    if (!noticia) {
        document.getElementById('noticia-detalhe').innerHTML = "<p>Notícia não encontrada.</p>";
        return;
    }

    const container = document.getElementById('noticia-detalhe');
    container.innerHTML = `
        <img src="${noticia.imageUrl}" alt="${noticia.title}">
        <h2>${noticia.title}</h2>
        <p>${noticia.description}</p>
    `;
}

// Executa ao carregar a página
document.addEventListener("DOMContentLoaded", renderNewsDetail);