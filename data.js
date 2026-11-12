// data.js
const checklistData = [
    {
        id: 0,
        title: "Fase 0: Levantamento e Preparação Prévia (Remoto)",
        tasks: [
            { id: "task_0_1", description: "Arquitetura do Windows: Verificar se o servidor novo é 32 ou 64 bits no Painel de Controle (Ref: Seção 2.1)." },
            { id: "task_0_2", description: "Endereçamento de Rede: Anotar Hostname e IP do servidor antigo (hostname e ipconfig) e definir os do servidor novo — priorizar manter o mesmo nome e IP para economizar tempo nas estações (Ref: Seção 2.1)." },
            { id: "task_0_3", description: "Mapeamento e Caminhos: Anotar a letra do mapeamento nas estações e o caminho exato da pasta do sistema pelo atalho (Ref: Seção 2.1)." },
            { id: "task_0_4", description: "Localização Real do Banco: Abrir o my.ini do servidor antigo, confirmar o caminho na linha datadir= e o nome da database (consys, check, sgf) e guardar o bloco [mysqld] (Ref: Seção 2.1 e 2.2)." },
            { id: "task_0_5", description: "Dimensionamento: Medir o tamanho em GB da pasta de dados do MySQL e das pastas de XML fiscal para estimar o tempo de cópia (Ref: Seção 2.1 e 2.4)." },
            { id: "task_0_6", description: "Topologia das Estações: Mapear quantas estações existem, quais são caixas e se há caixa separado conferindo a seção [servidor loja] no TERWIN.INI (Ref: Seção 2.1)." },
            { id: "task_0_7", description: "Certificado e Integrações: Localizar o Certificado Digital (A1/A3) e senha, além de listar integrações ativas nos INIs (TEF, SNGPC/SCGPC, PBM, Scanntech, balança, e-commerce) e rotinas no services.msc e taskschd.msc (Ref: Seção 2.1)." },
            { id: "task_0_8", description: "Kit de Campo e Alinhamento: Separar instaladores (MySQL Essentials 5.1.66, GUI Tools 5.0 r17 ou Workbench 5.2.44), HD externo, instalador do sistema, senhas do Windows e alinhar a janela de parada com o movimento fechado (Ref: Seção 2.3 e 2.4)." }
        ]
    },
    {
        id: 1,
        title: "Fase 1: Preparação no Servidor Novo (Com a Loja Trabalhando)",
        tasks: [
            { id: "task_1_1", description: "Instalar MySQL Essentials: Executar como Administrador (versão 32 ou 64 bits correta), escolher modo Typical e manter marcado Configure the MySQL Server now (Ref: Etapa 1 - Item 3.1)." },
            { id: "task_1_2", description: "Wizard de Configuração do MySQL: Configurar com Detailed Configuration > Server Machine (ou Developer Machine) > Non-Transactional Database Only (MyISAM) > Online Transaction Processing (OLTP) (Ref: Etapa 1 - Item 3.2, Passos 1 a 5)." },
            { id: "task_1_3", description: "Rede, Charset e Serviço: Marcar Enable TCP/IP Networking na porta 3306 com exceção no Firewall e Enable Strict Mode, definir Standard Character Set (latin1) e marcar Install As Windows Service (MySQL) com início automático (Ref: Etapa 1 - Item 3.2, Passos 6 a 8)." },
            { id: "task_1_4", description: "Segurança do Banco: Definir a senha do root como consys, marcar Enable root access from remote machines e deixar Create An Anonymous Account desmarcado (Contingência via prompt se falhar) (Ref: Etapa 1 - Item 3.2, Passos 9 a 11)." },
            { id: "task_1_5", description: "Instalar MySQL GUI Tools: Executar como Administrador no modo Complete (Ref: Etapa 1 - Item 3.3)." },
            { id: "task_1_6", description: "Criar Schema e Usuário: No MySQL Administrator, criar o Schema em Catalogs com o mesmo nome do antigo, criar o usuário consys (senha consys), atribuir todos os Schema Privileges e zerar todos os limites na aba Resources (Ref: Etapa 1 - Item 3.4.1 a 3.4.4)." },
            { id: "task_1_7", description: "Criar Estrutura de Pastas: Criar C:\\SISTEMA (com subpastas CHECK, CONSYS, SCGPC), além de C:\\EXPDIR e C:\\IMPDIR na raiz (Ref: Etapa 2 - Seção 4)." },
            { id: "task_1_8", description: "Cópia Prévia (Arquivos Leves): Copiar executáveis (check.exe, etc.), todos os .ini, .dll e subpastas. Não copiar DBF, CDX e MEM agora (Ref: Etapa 3 - Item 5.1 e 5.3)." },
            { id: "task_1_9", description: "1ª Passada dos XMLs: Iniciar a cópia prévia de XmlNFe e XMLNFCE via robocopy (Ref: Etapa 3 - Item 5.2)." }
        ]
    },
    {
        id: 2,
        title: "Fase 2: Durante a Parada (Loja Sem Vender)",
        tasks: [
            { id: "task_2_1", description: "Fechar Sistema e Conferir Conexões: Fechar o sistema em todas as máquinas e validar no servidor antigo via SHOW PROCESSLIST que ninguém está conectado (Ref: Etapa 4 - Seção 6)." },
            { id: "task_2_2", description: "Travar Executáveis no Antigo: Renomear check.exe, check-desktop.exe e sgf_win.exe para .OLD no servidor antigo (Ref: Etapa 4 - Seção 6)." },
            { id: "task_2_3", description: "Parar Serviços do Sistema: Pausar WCENTCOM, integrações, backup e envio de XML no servidor antigo (Ref: Etapa 4 - Seção 6)." },
            { id: "task_2_4", description: "Parar MySQL Antigo e Copiar Base: Executar net stop MySQL no antigo, copiar pasta da database inteira e o my.ini (ignorando logs) (Ref: Etapa 5 - Item 7.1 e 7.2)." },
            { id: "task_2_5", description: "Conferir Volume Copiado: Comparar tamanho em bytes e quantidade de arquivos da pasta do banco entre origem e destino (Ref: Etapa 5 - Item 7.3)." },
            { id: "task_2_6", description: "Subir Banco no Servidor Novo: Parar o MySQL novo, renomear a base limpa, colar a pasta do antigo, reaplicar parâmetros do my.ini e subir o serviço (Ref: Etapa 6 - Item 8.1 a 8.4)." },
            { id: "task_2_7", description: "Prova Real dos Dados: Validar SHOW TABLES, comparar quantidade de linhas (TABLE_ROWS) e checar MAX(data) FROM mov (Ref: Etapa 6 - Item 8.5 e 8.6)." },
            { id: "task_2_8", description: "Copiar Arquivos Dinâmicos Finais: Transferir .DBF, .cdx, .mem, controles de terminal, IMPO.DBF, INIs e pastas de logs/histórico (Ref: Etapa 6 - Item 8.7)." }
        ]
    },
    {
        id: 3,
        title: "Fase 3: Ajustes de Configuração, Rede e Estações",
        tasks: [
            { id: "task_3_1", description: "Backup de Segurança dos INIs: Copiar todos os arquivos INI para uma subpasta _backup antes de editá-los (Ref: Etapa 7 - Seção 9)." },
            { id: "task_3_2", description: "Ajustar consys.ini e conexao.ini: Atualizar IP/Hostname mantendo DTB, PRT, UID, PWD e sem tocar no PWDCRYPT (Ref: Etapa 7 - Item 9.1)." },
            { id: "task_3_3", description: "Ajustar TERWIN.INI (Fiscal e Duplicatas): Atualizar diretórios de nfe/nfce, instalar certificado digital e corrigir seções duplicadas em maiúsculas/minúsculas (Ref: Etapa 7 - Item 9.2)." },
            { id: "task_3_4", description: "Ajustar SCGPC e Caixas Separados: Atualizar caminho UNC e ajustar conestri nas seções de servidor e concentrador (Ref: Etapa 7 - Item 9.3 e 9.4)." },
            { id: "task_3_5", description: "Restaurar Executáveis no Novo: Renomear os executáveis de .OLD para .exe no servidor novo (Ref: Etapa 7 - Item 9.5)." },
            { id: "task_3_6", description: "Compartilhamento, Firewall e Hora: Compartilhar C:\\SISTEMA, liberar permissões, abrir porta 3306 no Firewall e conferir fuso horário (Ref: Etapa 7 - Item 9.7)." },
            { id: "task_3_7", description: "Recriar Serviços e Agendamentos: Configurar WCENTCOM, serviço do check-desktop, backup automático, envio de XML e integrações (Ref: Etapa 7 - Item 9.8)." },
            { id: "task_3_8", description: "Apontar Estações: Recriar mapeamento de rede (mesma letra), atualizar atalhos mantendo parâmetro de terminal (A1, A2) e recriar impressoras (Ref: Etapa 8 - Item 10.1 a 10.4)." }
        ]
    },
    {
        id: 4,
        title: "Fase 4: Bateria de Testes Obrigatórios (Antes de Liberar a Loja)",
        tasks: [
            { id: "task_4_1", description: "Login Local e Rede: Abrir o sistema e logar no servidor novo e em cada uma das estações (Ref: Etapa 9 - Seção 11)." },
            { id: "task_4_2", description: "Integridade de Cadastros e Histórico: Consultar um cliente e produto antigos e verificar na tela a última venda do dia anterior (Ref: Etapa 9 - Seção 11)." },
            { id: "task_4_3", description: "Operação de Caixa e Emissão Fiscal: Realizar uma venda de teste e cancelar, emitir uma NFC-e real de baixo valor e confirmar a gravação do XML (Ref: Etapa 9 - Seção 11)." },
            { id: "task_4_4", description: "Rotinas Pesadas e Integrações: Gerar relatório de movimento, testar abertura/fechamento de caixa, validar TEF, PBM e confirmar backup (Ref: Etapa 9 - Seção 11)." }
        ]
    },
    {
        id: 5,
        title: "Fase 5: Pós-Liberação, Encerramento e Plano de Volta Atrás",
        tasks: [
            { id: "task_5_1", description: "2ª Passada dos XMLs: Rodar novamente o robocopy para XmlNFe, XMLNFCE e Cancelamentos até copiar 100% da diferença (Ref: Etapa 7 - Item 9.6)." },
            { id: "task_5_2", description: "Desativar Servidor Antigo (Regra de Ouro): Renomear a pasta do sistema para CHECK_OLD, desabilitar o serviço MySQL, renomear database e guardar máquina por 30 dias (Ref: Etapa 10 - Seção 12)." },
            { id: "task_5_3", description: "Plano de Rollback (Em Caso de Falha Crítica): Se abortar, anotar vendas do novo, desligar rede, voltar executáveis .OLD no antigo, subir MySQL antigo e refazer as vendas (Ref: Seção 13)." }
        ]
    }
];