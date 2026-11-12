export const migrationPhases = [
    {
        id: 0,
        title: "Fase 0: Levantamento e Preparação Prévia (Remoto)",
        tasks: [
            {
                id: "task_0_1",
                description: "Verificar se o servidor novo é 32 ou 64 bits no Painel de Controle (Ref: Seção 2.1)",
                isCompleted: false,
            },
            {
                id: "task_0_2",
                description: "Anotar Hostname e IP do servidor antigo e definir os do novo...",
                isCompleted: false,
            }
            // ... demais tarefas da Fase 0
        ]
    },
    {
        id: 1,
        title: "Fase 1: Preparação no Servidor Novo",
        tasks: [
            // ... tarefas da Fase 1
        ]
    }
    // ... demais fases até a Fase 5
];