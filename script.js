// ============================= //
// CONTROLE DE NAVEGAÇÃO DO MENU //
// ============================= //

/**
 * Seleciona todos os links do menu
 */
const menuLinks = document.querySelectorAll('.menu-link');
const contentSections = document.querySelectorAll('.content-section');
const sidebar = document.querySelector('.sidebar');
const menuToggle = document.getElementById('menuToggle');

/**
 * Função para mostrar seção de conteúdo
 * @param {string} sectionId - ID da seção a ser mostrada
 */
function showSection(sectionId) {
    // Remove a classe active de todas as seções
    contentSections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Remove a classe active de todos os itens de menu
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Adiciona a classe active à seção correspondente
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active');
    }
    
    // Marca o item de menu como ativo
    const menuItem = document.querySelector(`a[href="#${sectionId}"]`)?.closest('.menu-item');
    if (menuItem) {
        menuItem.classList.add('active');
    }
    
    // Fecha o sidebar em dispositivos móveis
    if (window.innerWidth <= 768) {
        sidebar.classList.remove('active');
    }
    
    // Scroll para o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

/**
 * Adiciona evento de clique para cada link do menu
 */
menuLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const href = this.getAttribute('href');
        const sectionId = href.substring(1); // Remove o '#'
        showSection(sectionId);
    });
});

// ============================= //
// TOGGLE DO MENU MOBILE //
// ============================= //

/**
 * Toggle do menu em dispositivos móveis
 */
menuToggle.addEventListener('click', function() {
    sidebar.classList.toggle('active');
});

/**
 * Fecha o menu ao clicar fora dele
 */
document.addEventListener('click', function(e) {
    if (window.innerWidth <= 768) {
        if (!sidebar.contains(e.target) && !menuToggle.contains(e.target)) {
            sidebar.classList.remove('active');
        }
    }
});

// ============================= //
// FUNCIONALIDADES DO HEADER //
// ============================= //

/**
 * Busca funcional
 */
const searchInput = document.querySelector('.search-box input');

if (searchInput) {
    searchInput.addEventListener('input', function(e) {
        const searchTerm = e.target.value.toLowerCase();
        console.log('Buscando por:', searchTerm);
        // Adicionar lógica de busca aqui
    });
}

/**
 * Notificações
 */
const notificationBtn = document.querySelector('.notification-btn');

if (notificationBtn) {
    notificationBtn.addEventListener('click', function() {
        console.log('Abrindo notificações...');
        // Adicionar lógica de notificações aqui
    });
}

// ============================= //
// FUNCIONALIDADES DO USUÁRIO //
// ============================= //

/**
 * Perfil do usuário
 */
const userProfile = document.querySelector('.user-profile');

if (userProfile) {
    userProfile.addEventListener('click', function() {
        console.log('Abrindo menu do usuário...');
        // Adicionar lógica de menu do usuário aqui
    });
}

/**
 * Botão de logout
 */
const logoutBtn = document.querySelector('.logout-btn');

if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
        if (confirm('Tem certeza que deseja sair?')) {
            console.log('Usuário desconectado');
            // Adicionar lógica de logout aqui
        }
    });
}

// ============================= //
// FUNCIONALIDADES DOS CARDS //
// ============================= //

/**
 * Menus dos cards
 */
const cardMenus = document.querySelectorAll('.card-menu');

cardMenus.forEach(menu => {
    menu.addEventListener('click', function(e) {
        e.preventDefault();
        console.log('Abrindo menu do card...');
        // Adicionar lógica de menu do card aqui
    });
});

// ============================= //
// FUNCIONALIDADES DOS LINKS RÁPIDOS //
// ============================= //

/**
 * Links rápidos
 */
const quickLinkBtns = document.querySelectorAll('.quick-link-btn');

quickLinkBtns.forEach(btn => {
    btn.addEventListener('click', function(e) {
        e.preventDefault();
        const linkText = this.querySelector('span').textContent;
        console.log('Clicou em:', linkText);
        // Adicionar lógica de navegação aqui
    });
});

// ============================= //
// ANIMAÇÕES E EFEITOS //
// ============================= //

/**
 * Anima as barras de progresso ao carregar
 */
function animateProgressBars() {
    const progressFills = document.querySelectorAll('.progress-fill');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0%';
                
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 100);
                
                observer.unobserve(entry.target);
            }
        });
    });
    
    progressFills.forEach(fill => observer.observe(fill));
}

// Inicia a animação das barras de progresso
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', animateProgressBars);
} else {
    animateProgressBars();
}

// ============================= //
// FUNÇÕES AUXILIARES //
// ============================= //

/**
 * Função para formatar data
 * @param {Date} date - Data a ser formatada
 * @returns {string} Data formatada
 */
function formatDate(date) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(date).toLocaleDateString('pt-BR', options);
}

/**
 * Função para contar caracteres
 * @param {string} text - Texto a contar
 * @returns {number} Número de caracteres
 */
function countCharacters(text) {
    return text.length;
}

/**
 * Função para truncar texto
 * @param {string} text - Texto a truncar
 * @param {number} length - Comprimento máximo
 * @returns {string} Texto truncado
 */
function truncateText(text, length = 50) {
    return text.length > length ? text.substring(0, length) + '...' : text;
}

// ============================= //
// TEMAS E MODO ESCURO //
// ============================= //

/**
 * Função para alternar modo escuro
 */
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
}

/**
 * Carrega o modo escuro salvo
 */
function loadDarkMode() {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
    }
}

// ============================= //
// MONITORAMENTO E DEBUG //
// ============================= //

/**
 * Log de eventos para debug
 */
const debugMode = false; // Altere para true para ativar logs

function debugLog(message, data = null) {
    if (debugMode) {
        console.log(`[DEBUG] ${message}`, data || '');
    }
}

/**
 * Monitora o redimensionamento da janela
 */
window.addEventListener('resize', function() {
    debugLog('Janela redimensionada', {
        largura: window.innerWidth,
        altura: window.innerHeight
    });
});

// ============================= //
// INICIALIZAÇÃO //
// ============================= //

/**
 * Inicializa a aplicação
 */
function init() {
    debugLog('Aplicação inicializada');
    loadDarkMode();
    // Adicionar outras inicializações aqui
}

// Executa a inicialização quando o DOM está pronto
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}