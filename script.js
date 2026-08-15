const $ = (selector, parent = document) => parent.querySelector(selector);

$('#year').textContent = new Date().getFullYear();

const menuButton = $('.menu-toggle');
const navigation = $('#main-nav');
menuButton.addEventListener('click', () => {
  const isOpen = navigation.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(isOpen));
});
navigation.addEventListener('click', event => {
  if (event.target.matches('a')) {
    navigation.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});

const emailButton = $('[data-copy-email]');
const copyStatus = $('.copy-status');
emailButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(emailButton.dataset.copyEmail);
    copyStatus.textContent = 'Email copiado. Hablemos pronto.';
  } catch {
    copyStatus.textContent = 'Escríbeme a hello@affner.dev';
  }
});

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => { if (entry.isIntersecting) entry.target.classList.add('visible'); });
}, { threshold: .12 });
document.querySelectorAll('.reveal').forEach(element => revealObserver.observe(element));

const featuredRepositories = ['ConsultaSismos', 'SoapToRestIntegration', 'monsterdam-microservices'];
const fallbackProjects = [
  { name: 'ConsultaSismos', description: 'Aplicación MVC para consultar sismos por fechas usando la API de USGS.', language: 'Java', html_url: 'https://github.com/affner/ConsultaSismos', updated_at: '2026-01-01' },
  { name: 'SoapToRestIntegration', description: 'Exploración de integración y traducción entre servicios.', language: 'Java', html_url: 'https://github.com/affner/SoapToRestIntegration', updated_at: '2026-01-01' },
  { name: 'monsterdam-microservices', description: 'Servicio de contenido construido con una aproximación de microservicios.', language: 'Java', html_url: 'https://github.com/affner/monsterdam-microservices', updated_at: '2026-01-01' }
];

function renderProjects(repositories) {
  const grid = $('#project-grid');
  const template = $('#project-template');
  grid.innerHTML = '';
  repositories.forEach((repository, index) => {
    const project = template.content.cloneNode(true);
    const link = $('.project-card', project);
    link.href = repository.html_url;
    $('.project-index', project).textContent = `0${index + 1} / 0${repositories.length}`;
    $('.project-language', project).textContent = repository.language || 'Código abierto';
    $('h3', project).textContent = repository.name;
    $('.project-description', project).textContent = repository.description || 'Repositorio y experimentación de ingeniería de software.';
    $('.project-updated', project).textContent = `ACT. ${new Intl.DateTimeFormat('es-MX', { month: 'short', year: 'numeric' }).format(new Date(repository.updated_at)).toUpperCase()}`;
    grid.appendChild(project);
  });
}

async function loadProjects() {
  const state = $('#github-state');
  try {
    const response = await fetch('https://api.github.com/users/affner/repos?sort=updated&per_page=100', { headers: { Accept: 'application/vnd.github+json' } });
    if (!response.ok) throw new Error('GitHub no disponible');
    const repositories = await response.json();
    const selected = featuredRepositories.map(name => repositories.find(repo => repo.name === name)).filter(Boolean);
    renderProjects(selected.length ? selected : repositories.filter(repo => !repo.fork).slice(0, 3));
    state.textContent = 'Actualizado desde GitHub';
  } catch {
    renderProjects(fallbackProjects);
    state.textContent = 'Mostrando selección local';
  }
}

loadProjects();
