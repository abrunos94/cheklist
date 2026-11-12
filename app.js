// app.js

// --- 1. GERENCIAMENTO DO TEMA (DARK/LIGHT MODE) ---
const themeToggleBtn = document.getElementById('theme-toggle');
const themeIcon = document.getElementById('theme-icon');
const htmlElement = document.documentElement;

// Define o Dark Mode como padrão (combinando com a preferência por dark e detalhes dourados)
const savedTheme = localStorage.getItem('theme') || 'dark';
htmlElement.setAttribute('data-theme', savedTheme);
updateThemeIcon(savedTheme);

themeToggleBtn.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateThemeIcon(newTheme);
});

function updateThemeIcon(theme) {
    // Se estiver escuro, mostra o sol para mudar pro claro, e vice-versa
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
}


// --- 2. GERENCIAMENTO DO PROGRESSO LOCAL (SEGURANÇA) ---
// Usamos um Set (conjunto) para garantir que não existam IDs duplicados
let completedTasks = new Set(JSON.parse(localStorage.getItem('checklistProgress')) || []);

function saveProgress() {
    // Converte o Set de volta para Array para poder salvar como string no navegador
    localStorage.setItem('checklistProgress', JSON.stringify([...completedTasks]));
}


// --- 3. RENDERIZAÇÃO DINÂMICA E CÁLCULO ---
const container = document.getElementById('checklist-container');

function renderChecklist() {
    container.innerHTML = ''; // Limpa antes de injetar

    // checklistData vem do arquivo data.js
    checklistData.forEach(phase => {
        const phaseTotal = phase.tasks.length;
        const phaseCompleted = phase.tasks.filter(task => completedTasks.has(task.id)).length;
        const percentage = phaseTotal === 0 ? 0 : Math.round((phaseCompleted / phaseTotal) * 100);

        // Cria o contêiner da fase (Card)
        const phaseCard = document.createElement('div');
        phaseCard.className = 'phase-card';
        phaseCard.id = `phase-${phase.id}`;

        // Estrutura o HTML interno (Título, Barra e Lista)
        let phaseHTML = `
            <h2 class="phase-title">${phase.title}</h2>
            <div class="progress-wrapper">
                <div class="progress-info">
                    <span>Progresso</span>
                    <span id="percent-text-${phase.id}">${percentage}% (${phaseCompleted}/${phaseTotal})</span>
                </div>
                <div class="progress-bar-container">
                    <div class="progress-bar-fill" id="bar-fill-${phase.id}" style="width: ${percentage}%"></div>
                </div>
            </div>
            <div class="tasks-list">
        `;

        // Loop para gerar cada tarefa com seu checkbox
        phase.tasks.forEach(task => {
            const isChecked = completedTasks.has(task.id);
            const completedClass = isChecked ? 'task-completed' : '';

            phaseHTML += `
                <label class="task-item ${completedClass}" id="label-${task.id}">
                    <input type="checkbox" class="task-checkbox" data-task-id="${task.id}" data-phase-id="${phase.id}" ${isChecked ? 'checked' : ''}>
                    <span class="task-desc">${task.description}</span>
                </label>
            `;
        });

        phaseHTML += `</div>`; // Fecha tasks-list
        phaseCard.innerHTML = phaseHTML;
        container.appendChild(phaseCard);
    });

    // Anexa os eventos de clique nos checkboxes recém-criados
    attachCheckboxEvents();
}

function attachCheckboxEvents() {
    const checkboxes = document.querySelectorAll('.task-checkbox');

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener('change', (e) => {
            const taskId = e.target.getAttribute('data-task-id');
            const phaseId = parseInt(e.target.getAttribute('data-phase-id'));
            const labelElement = document.getElementById(`label-${taskId}`);

            if (e.target.checked) {
                completedTasks.add(taskId);
                labelElement.classList.add('task-completed');
            } else {
                completedTasks.delete(taskId);
                labelElement.classList.remove('task-completed');
            }

            saveProgress(); // Salva no navegador imediatamente
            updatePhaseProgress(phaseId); // Recalcula a barra daquela fase
        });
    });
}

function updatePhaseProgress(phaseId) {
    // Busca a fase atual no banco de dados para saber o total de tarefas
    const phase = checklistData.find(p => p.id === phaseId);

    const phaseTotal = phase.tasks.length;
    const phaseCompleted = phase.tasks.filter(task => completedTasks.has(task.id)).length;
    const percentage = Math.round((phaseCompleted / phaseTotal) * 100);

    // Altera apenas o CSS e o Texto da fase que foi clicada (alta performance)
    const barFill = document.getElementById(`bar-fill-${phaseId}`);
    const percentText = document.getElementById(`percent-text-${phaseId}`);

    barFill.style.width = `${percentage}%`;
    percentText.textContent = `${percentage}% (${phaseCompleted}/${phaseTotal})`;
}

// --- 4. INICIALIZAÇÃO DO APLICATIVO ---
renderChecklist();