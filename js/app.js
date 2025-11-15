/**
 * APLICAÇÃO PRINCIPAL - APOSTILA DE INFORMÁTICA
 * Sistema de navegação, renderização de conteúdo e gerenciamento de exercícios
 */

// ============================================
// VARIÁVEIS GLOBAIS
// ============================================

let currentModuleIndex = 0;
let completedModules = new Set();
let userAnswers = {}; // Armazena respostas do usuário

// ============================================
// INICIALIZAÇÃO
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    console.log('Iniciando Apostila de Informática...');
    
    // Carrega dados salvos do localStorage
    loadProgress();
    
    // Renderiza a lista de módulos na sidebar
    renderModulesList();
    
    // Renderiza cards na página inicial
    renderHomeModules();
    
    // Mostra página home inicialmente
    showHome();
    
    console.log('Apostila carregada com sucesso!');
});

// ============================================
// RENDERIZAÇÃO DA SIDEBAR
// ============================================

function renderModulesList() {
    const modulesList = document.getElementById('modulesList');
    modulesList.innerHTML = '';
    
    modulosApostila.forEach((modulo, index) => {
        const link = document.createElement('li');
        link.className = 'nav-item';
        
        const isCompleted = completedModules.has(modulo.id);
        const badge = isCompleted ? '✓' : '';
        
        link.innerHTML = `
            <a class="nav-link d-flex align-items-center justify-content-between ${index === currentModuleIndex ? 'active' : ''}" 
               href="#" onclick="loadModule(${index}); return false;">
                <span>
                    <i class="${modulo.icone} me-2"></i>${modulo.titulo}
                </span>
                ${isCompleted ? '<span class="badge bg-danger">✓</span>' : ''}
            </a>
        `;
        
        modulesList.appendChild(link);
    });
}

// ============================================
// RENDERIZAÇÃO DA HOME PAGE
// ============================================

function renderHomeModules() {
    const modulesGrid = document.getElementById('modulesGrid');
    modulesGrid.innerHTML = '';
    
    modulosApostila.forEach((modulo, index) => {
        const isCompleted = completedModules.has(modulo.id);
        const badgeClass = isCompleted ? 'bg-success' : 'bg-danger';
        const badgeText = isCompleted ? '✓ Completo' : `${modulo.exercicios.length} Exercícios`;
        
        const card = document.createElement('div');
        card.className = 'col-md-6 col-lg-4 mb-4';
        card.innerHTML = `
            <a href="#" onclick="loadModule(${index}); return false;" class="module-card">
                <div class="icon-wrapper">
                    <i class="${modulo.icone}"></i>
                </div>
                <div class="content">
                    <h5>${modulo.titulo}</h5>
                    <p>${modulo.descricao}</p>
                    <span class="badge ${badgeClass}">${badgeText}</span>
                </div>
            </a>
        `;
        
        modulesGrid.appendChild(card);
    });
}

// ============================================
// NAVEGAÇÃO PRINCIPAL
// ============================================

function showHome() {
    document.getElementById('homePage').style.display = 'block';
    document.getElementById('modulePage').style.display = 'none';
    
    // Atualiza header
    document.getElementById('pageTitle').innerHTML = 
        '<i class="fas fa-graduation-cap"></i> Bem-vindo à Apostila de Informática';
    document.getElementById('pageSubtitle').textContent = 
        'Aprenda Informática de forma didática e interativa';
    
    // Remove ativo da sidebar
    document.querySelectorAll('#modulesList .nav-link').forEach(link => {
        link.classList.remove('active');
    });
    
    // Atualiza progresso
    updateProgress();
}

function loadModule(index) {
    currentModuleIndex = index;
    const modulo = modulosApostila[index];
    
    // Mostra página do módulo
    document.getElementById('homePage').style.display = 'none';
    document.getElementById('modulePage').style.display = 'block';
    
    // Atualiza header
    document.getElementById('pageTitle').innerHTML = 
        `<i class="${modulo.icone}"></i> ${modulo.titulo}`;
    document.getElementById('pageSubtitle').textContent = modulo.descricao;
    
    // Atualiza breadcrumb
    document.getElementById('breadcrumbModule').textContent = modulo.titulo;
    
    // Renderiza teoria
    renderTheory(modulo);
    
    // Renderiza exemplos
    renderExamples(modulo);
    
    // Renderiza recursos visuais
    renderVisualResources(modulo);
    
    // Renderiza exercícios
    renderExercises(modulo);
    
    // Renderiza resumo
    renderSummary(modulo);
    
    // Atualiza botões de navegação
    updateNavigationButtons();
    
    // Atualiza sidebar
    renderModulesList();
    
    // Atualiza progresso
    updateProgress();
    
    // Scroll para o topo
    window.scrollTo(0, 0);
}

// ============================================
// RENDERIZAÇÃO DO CONTEÚDO TEÓRICO
// ============================================

function renderTheory(modulo) {
    const theoryContainer = document.getElementById('moduleTheory');
    theoryContainer.innerHTML = '';
    
    const content = conteudoModulos[modulo.id];
    if (!content) return;
    
    const theoryHTML = document.createElement('div');
    theoryHTML.innerHTML = `
        <h3 class="text-danger mb-4">
            <i class="fas fa-book"></i> Conceitos Teóricos
        </h3>
    `;
    
    content.teoria.forEach((item, index) => {
        const box = document.createElement('div');
        box.className = 'theory-box';
        box.innerHTML = `
            <h4>
                <i class="fas fa-circle text-danger" style="font-size: 0.5em; margin-right: 0.5rem;"></i>
                ${item.titulo}
            </h4>
            <p>${item.conteudo}</p>
        `;
        theoryHTML.appendChild(box);
    });
    
    theoryContainer.appendChild(theoryHTML);
}

// ============================================
// RENDERIZAÇÃO DE EXEMPLOS
// ============================================

function renderExamples(modulo) {
    const examplesContainer = document.getElementById('moduleExamples');
    examplesContainer.innerHTML = '';
    
    const content = conteudoModulos[modulo.id];
    if (!content || !content.exemplos) return;
    
    const examplesHTML = document.createElement('div');
    examplesHTML.innerHTML = `
        <h3 class="text-danger mb-4">
            <i class="fas fa-lightbulb"></i> Exemplos Práticos
        </h3>
    `;
    
    content.exemplos.forEach((exemplo) => {
        const box = document.createElement('div');
        box.className = 'example-box';
        box.innerHTML = `
            <h5>
                <i class="fas fa-code"></i> ${exemplo.titulo}
            </h5>
            <p>${exemplo.descricao}</p>
        `;
        examplesHTML.appendChild(box);
    });
    
    examplesContainer.appendChild(examplesHTML);
}

// ============================================
// RENDERIZAÇÃO DE RECURSOS VISUAIS
// ============================================

function renderVisualResources(modulo) {
    const visualContainer = document.getElementById('visualContent');
    visualContainer.innerHTML = '';
    
    // Verifica se existe dados visuais para este módulo
    if (typeof recursosVisuais === 'undefined' || !recursosVisuais[modulo.id]) {
        document.getElementById('visualResources').style.display = 'none';
        return;
    }
    
    document.getElementById('visualResources').style.display = 'block';
    const recursos = recursosVisuais[modulo.id];
    
    // Renderiza imagens/diagramas
    if (recursos.imagens) {
        recursos.imagens.forEach((img) => {
            const card = document.createElement('div');
            card.className = 'col-md-6 col-lg-4 mb-3';
            
            // Se tem HTML customizado, renderiza ele
            if (img.html) {
                card.innerHTML = `<div class="visual-card h-100">${img.html}</div>`;
            } else {
                // Renderização padrão com emoji
                card.innerHTML = `
                    <div class="visual-card h-100">
                        <div class="visual-emoji text-center mb-2" style="font-size: 2.5rem;">
                            ${img.emoji || '📊'}
                        </div>
                        <h6 class="text-danger mb-2">
                            <i class="fas fa-image"></i> ${img.titulo}
                        </h6>
                        <p class="small text-muted mb-2">${img.descricao}</p>
                        <span class="badge bg-light text-dark border">${img.tipo}</span>
                    </div>
                `;
            }
            visualContainer.appendChild(card);
        });
    }
    
    // Renderiza links de vídeos
    if (recursos.videos && recursos.videos.length > 0) {
        const videosCard = document.createElement('div');
        videosCard.className = 'col-12 mt-3';
        videosCard.innerHTML = `
            <div class="visual-card">
                <h6 class="text-danger mb-3">
                    <i class="fab fa-youtube"></i> Vídeos Recomendados
                </h6>
                <ul class="list-unstyled mb-0">
                    ${recursos.videos.map(video => `
                        <li class="mb-2">
                            <i class="fas fa-play-circle text-danger"></i>
                            <span class="ms-2">${video}</span>
                        </li>
                    `).join('')}
                </ul>
                <p class="small text-muted mt-3 mb-0">
                    <i class="fas fa-info-circle"></i> Busque esses títulos no YouTube para complementar seus estudos!
                </p>
            </div>
        `;
        visualContainer.appendChild(videosCard);
    }
}

// ============================================
// RENDERIZAÇÃO DE EXERCÍCIOS (DUOLINGO STYLE)
// ============================================

function renderExercises(modulo) {
    const container = document.getElementById('exercisesContainer');
    container.innerHTML = '';
    
    modulo.exercicios.forEach((exercicio, indexEx) => {
        const exerciseDiv = document.createElement('div');
        exerciseDiv.className = 'exercise-container';
        exerciseDiv.id = `exercise-${modulo.id}-${indexEx}`;
        
        // Questão
        const questionHTML = `
            <div class="exercise-question">
                <i class="fas fa-question-circle text-danger me-2"></i>
                ${exercicio.pergunta}
            </div>
        `;
        
        // Alternativas
        let alternativasHTML = '<div class="exercise-answers">';
        
        exercicio.alternativas.forEach((alt, indexAlt) => {
            const buttonId = `btn-${modulo.id}-${indexEx}-${indexAlt}`;
            alternativasHTML += `
                <button class="answer-button" id="${buttonId}" 
                        onclick="checkAnswer('${modulo.id}', ${indexEx}, ${indexAlt})">
                    <span class="answer-letter" style="font-weight: bold; margin-right: 1rem;">
                        ${String.fromCharCode(65 + indexAlt)}.
                    </span>
                    <span>${alt}</span>
                </button>
            `;
        });
        
        alternativasHTML += '</div>';
        
        // Feedback
        const feedbackDiv = `
            <div id="feedback-${modulo.id}-${indexEx}" class="exercise-feedback"></div>
        `;
        
        exerciseDiv.innerHTML = questionHTML + alternativasHTML + feedbackDiv;
        container.appendChild(exerciseDiv);
    });
}

// ============================================
// LÓGICA DE RESPOSTA DE EXERCÍCIOS
// ============================================

function checkAnswer(moduleId, exerciseIndex, answerIndex) {
    const modulo = modulosApostila.find(m => m.id === moduleId);
    const exercicio = modulo.exercicios[exerciseIndex];
    
    // Desabilita todos os botões
    const buttons = document.querySelectorAll(`#exercise-${moduleId}-${exerciseIndex} .answer-button`);
    buttons.forEach(btn => btn.disabled = true);
    
    // Marca o botão selecionado
    const selectedBtn = document.getElementById(`btn-${moduleId}-${exerciseIndex}-${answerIndex}`);
    selectedBtn.classList.add('selected');
    
    // Verifica se está correto
    const isCorrect = answerIndex === exercicio.correta;
    
    // Mostra a resposta correta
    const correctBtn = document.getElementById(`btn-${moduleId}-${exerciseIndex}-${exercicio.correta}`);
    correctBtn.classList.add('correct');
    
    // Se errou, mostra a resposta correta em vermelho
    if (!isCorrect) {
        selectedBtn.classList.add('incorrect');
    }
    
    // Mostra feedback
    const feedbackDiv = document.getElementById(`feedback-${moduleId}-${exerciseIndex}`);
    feedbackDiv.classList.add('show');
    
    if (isCorrect) {
        feedbackDiv.classList.add('correct');
        feedbackDiv.innerHTML = '<i class="fas fa-check-circle me-2"></i> Parabéns! Resposta correta!';
    } else {
        feedbackDiv.classList.add('incorrect');
        feedbackDiv.innerHTML = `
            <i class="fas fa-times-circle me-2"></i> 
            Que pena! A resposta correta é: <strong>${exercicio.alternativas[exercicio.correta]}</strong>
        `;
    }
    
    // Armazena resposta
    if (!userAnswers[moduleId]) {
        userAnswers[moduleId] = {};
    }
    userAnswers[moduleId][exerciseIndex] = isCorrect;
    
    // Salva progresso
    saveProgress();
    
    // Mostra modal com resultado
    showResultModal(isCorrect);
}

// ============================================
// MODAL DE RESULTADO
// ============================================

function showResultModal(isCorrect) {
    const modal = new bootstrap.Modal(document.getElementById('exerciseResultModal'));
    const resultHeader = document.querySelector('#resultHeader .modal-title');
    const resultIcon = document.getElementById('resultIcon');
    const resultText = document.getElementById('resultText');
    const resultMessage = document.getElementById('resultMessage');
    
    if (isCorrect) {
        resultHeader.textContent = 'Resposta Correta! 🎉';
        resultIcon.innerHTML = '<i class="fas fa-check-circle" style="color: #28a745;"></i>';
        resultText.textContent = 'Parabéns!';
        resultMessage.textContent = 'Você acertou! Continue assim!';
        document.getElementById('resultHeader').style.backgroundColor = '#28a745';
    } else {
        resultHeader.textContent = 'Resposta Incorreta';
        resultIcon.innerHTML = '<i class="fas fa-times-circle" style="color: #FF0000;"></i>';
        resultText.textContent = 'Não foi desta vez!';
        resultMessage.textContent = 'Leia a resposta correta e tente novamente no próximo exercício.';
        document.getElementById('resultHeader').style.backgroundColor = '#FF0000';
    }
    
    modal.show();
}

// ============================================
// RENDERIZAÇÃO DO RESUMO
// ============================================

function renderSummary(modulo) {
    const summaryContent = document.getElementById('summaryContent');
    summaryContent.innerHTML = '';
    
    const content = conteudoModulos[modulo.id];
    if (!content || !content.resumo) return;
    
    const ul = document.createElement('ul');
    ul.className = 'summary-list';
    
    content.resumo.forEach((item) => {
        const li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });
    
    summaryContent.appendChild(ul);
}

// ============================================
// ATUALIZAÇÃO DE BOTÕES DE NAVEGAÇÃO
// ============================================

function updateNavigationButtons() {
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    // Primeiro módulo
    if (currentModuleIndex === 0) {
        prevBtn.style.display = 'none';
    } else {
        prevBtn.style.display = 'block';
    }
    
    // Último módulo
    if (currentModuleIndex === modulosApostila.length - 1) {
        nextBtn.innerHTML = 'Voltar ao Início <i class="fas fa-home"></i>';
    } else {
        nextBtn.innerHTML = 'Próximo <i class="fas fa-chevron-right"></i>';
    }
}

function previousModule() {
    if (currentModuleIndex > 0) {
        loadModule(currentModuleIndex - 1);
    }
}

function nextModule() {
    if (currentModuleIndex < modulosApostila.length - 1) {
        loadModule(currentModuleIndex + 1);
    } else {
        showHome();
    }
}

// ============================================
// GERENCIAMENTO DE PROGRESSO
// ============================================

function updateProgress() {
    // Calcula progresso overall
    const totalModulos = modulosApostila.length;
    const completados = completedModules.size;
    const percentual = Math.round((completados / totalModulos) * 100);
    
    const progressBar = document.getElementById('overallProgress');
    const progressText = document.getElementById('progressText');
    
    progressBar.style.width = percentual + '%';
    progressText.textContent = `${percentual}% completo (${completados}/${totalModulos})`;
}

function saveProgress() {
    // Determina módulos completos (todos os exercícios respondidos corretamente)
    modulosApostila.forEach(modulo => {
        const moduleAnswers = userAnswers[modulo.id];
        
        if (moduleAnswers) {
            const todosCorretos = modulo.exercicios.every((_, index) => {
                return moduleAnswers[index] === true;
            });
            
            if (todosCorretos) {
                completedModules.add(modulo.id);
            }
        }
    });
    
    // Salva no localStorage
    const progress = {
        completedModules: Array.from(completedModules),
        userAnswers: userAnswers,
        lastModule: currentModuleIndex
    };
    
    localStorage.setItem('apostilaProgress', JSON.stringify(progress));
    console.log('Progresso salvo:', progress);
}

function loadProgress() {
    const saved = localStorage.getItem('apostilaProgress');
    
    if (saved) {
        const progress = JSON.parse(saved);
        completedModules = new Set(progress.completedModules);
        userAnswers = progress.userAnswers || {};
        console.log('Progresso carregado:', progress);
    }
}

// ============================================
// FUNÇÕES UTILITÁRIAS
// ============================================

/**
 * Função para limpar progresso (útil para testes)
 * Descomente a linha abaixo se quiser resetar tudo
 */
function resetAllProgress() {
    if (confirm('Deseja resetar todo o progresso? Esta ação não pode ser desfeita!')) {
        localStorage.removeItem('apostilaProgress');
        completedModules.clear();
        userAnswers = {};
        location.reload();
    }
}

// Função para exportar progresso como JSON
function exportProgress() {
    const progress = {
        completedModules: Array.from(completedModules),
        userAnswers: userAnswers,
        exportDate: new Date().toLocaleString()
    };
    
    const dataStr = JSON.stringify(progress, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,' + encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'apostila-progresso.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
}

console.log('App.js carregado com sucesso!');
