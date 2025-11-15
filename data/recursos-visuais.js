/**
 * RECURSOS VISUAIS - Imagens, diagramas e infográficos
 * Para cada módulo: imagens ilustrativas, diagramas e links de vídeos
 */

const recursosVisuais = {
    introducao: {
        imagens: [
            {
                titulo: 'Componentes do Computador',
                url: 'https://i.imgur.com/placeholder-hardware.jpg',
                descricao: 'Diagrama mostrando CPU, RAM, HD, Placa-mãe e outros componentes',
                tipo: 'diagrama'
            },
            {
                titulo: 'Hardware vs Software',
                emoji: '🖥️ ⚙️',
                descricao: 'Hardware = partes físicas | Software = programas',
                tipo: 'infografico'
            },
            {
                titulo: 'Periféricos de Entrada e Saída',
                emoji: '⌨️ 🖱️ 🖨️ 🔊',
                descricao: 'Entrada: Mouse, Teclado, Webcam | Saída: Monitor, Impressora, Caixas de som',
                tipo: 'infografico'
            }
        ],
        videos: [
            'Como funciona um computador?',
            'Montagem de PC passo a passo',
            'Diferença entre RAM e HD'
        ]
    },
    
    'sistemas-operacionais': {
        imagens: [
            {
                titulo: 'Interface do Windows',
                emoji: '🪟',
                descricao: 'Área de Trabalho, Barra de Tarefas, Menu Iniciar',
                tipo: 'infografico'
            },
            {
                titulo: 'Gerenciador de Tarefas',
                emoji: '📊',
                descricao: 'CPU, Memória, Disco, Rede - monitoramento em tempo real',
                tipo: 'diagrama'
            },
            {
                titulo: 'Sistema de Arquivos',
                emoji: '📁 📂 📄',
                descricao: 'Pastas, Subpastas, Arquivos - organização hierárquica',
                tipo: 'infografico'
            }
        ],
        videos: [
            'Windows 11 - Guia completo para iniciantes',
            'Como otimizar o Windows',
            'Atalhos essenciais do Windows'
        ]
    },
    
    internet: {
        imagens: [
            {
                titulo: 'Como funciona a Internet',
                emoji: '🌐 📡 💻',
                descricao: 'Roteador → Provedor (ISP) → Servidores → Sites',
                tipo: 'diagrama'
            },
            {
                titulo: 'Exemplo de Phishing',
                emoji: '🎣 ⚠️ ❌',
                descricao: 'E-mail falso pedindo dados bancários - NÃO CLIQUE!',
                tipo: 'alerta'
            },
            {
                titulo: 'Senha Forte vs Fraca',
                emoji: '🔐 vs 🔓',
                descricao: 'Forte: Ab#9Kp@2Lz (12+ caracteres, símbolos) | Fraca: 123456',
                tipo: 'comparacao'
            }
        ],
        videos: [
            'Como se proteger online',
            'Identificando golpes na internet',
            'Navegação anônima e privacidade'
        ]
    },
    
    office: {
        imagens: [
            {
                titulo: 'Interface do Word',
                emoji: '📝',
                descricao: 'Barra de ferramentas, Régua, Área de edição, Estilos',
                tipo: 'diagrama'
            },
            {
                titulo: 'Excel - Fórmulas Básicas',
                emoji: '📊 = SUM(A1:A10)',
                descricao: 'SUM, AVERAGE, COUNT, MAX, MIN - funções essenciais',
                tipo: 'referencia'
            },
            {
                titulo: 'PowerPoint - Design de Slide',
                emoji: '🎨 📊 📷',
                descricao: 'Título grande, pouco texto, imagens de qualidade, cores harmoniosas',
                tipo: 'dicas'
            }
        ],
        videos: [
            'Word - Formatação profissional de documentos',
            'Excel - Fórmulas e gráficos para iniciantes',
            'PowerPoint - Apresentações impactantes'
        ]
    },
    
    seguranca: {
        imagens: [
            {
                titulo: 'Tipos de Ameaças',
                emoji: '🦠 Vírus | 🐛 Worms | 🐴 Trojans | 🔓 Ransomware',
                descricao: 'Cada malware tem comportamento diferente',
                tipo: 'classificacao'
            },
            {
                titulo: 'Antivírus em Ação',
                emoji: '🛡️ ↔️ 🦠',
                descricao: 'Antivírus detecta → Quarentena → Remove ameaça',
                tipo: 'processo'
            },
            {
                titulo: 'Backup 3-2-1',
                emoji: '3️⃣ cópias | 2️⃣ mídias | 1️⃣ fora de casa',
                descricao: 'Regra de ouro para proteção de dados',
                tipo: 'regra'
            }
        ],
        videos: [
            'Segurança digital para jovens',
            'Como fazer backup seguro',
            'Antivírus gratuitos vs pagos'
        ]
    },
    
    programacao: {
        imagens: [
            {
                titulo: 'Lógica de Programação',
                emoji: '📥 INPUT → ⚙️ PROCESSO → 📤 OUTPUT',
                descricao: 'Todo programa recebe dados, processa e retorna resultado',
                tipo: 'fluxo'
            },
            {
                titulo: 'Estruturas Condicionais',
                emoji: '❓ IF → ✅ TRUE / ❌ FALSE',
                descricao: 'SE condição ENTÃO ação1 SENÃO ação2',
                tipo: 'diagrama'
            },
            {
                titulo: 'Loop FOR',
                emoji: '🔄 FOR i = 1 TO 10',
                descricao: 'Repete ação N vezes - economiza código',
                tipo: 'conceito'
            }
        ],
        videos: [
            'Lógica de programação do zero',
            'Algoritmos explicados de forma simples',
            'Pseudocódigo vs código real'
        ]
    },
    
    'web-design': {
        imagens: [
            {
                titulo: 'Estrutura HTML',
                emoji: '🏗️ <html><head><body>',
                descricao: 'HTML = Estrutura | CSS = Estilo | JS = Interatividade',
                tipo: 'stack'
            },
            {
                titulo: 'Box Model CSS',
                emoji: '📦 Margin | Border | Padding | Content',
                descricao: 'Como elementos ocupam espaço na página',
                tipo: 'diagrama'
            },
            {
                titulo: 'Design Responsivo',
                emoji: '💻 📱 ⌚',
                descricao: 'Um site que se adapta a Desktop, Tablet e Mobile',
                tipo: 'conceito'
            }
        ],
        videos: [
            'HTML e CSS do zero ao site completo',
            'Design responsivo com Bootstrap',
            'JavaScript para iniciantes'
        ]
    },
    
    'boas-praticas': {
        imagens: [
            {
                titulo: 'Organização de Arquivos',
                emoji: '📁 Documentos/2024/Trabalhos',
                descricao: 'Pastas por categoria → ano → subpasta específica',
                tipo: 'hierarquia'
            },
            {
                titulo: 'Nomenclatura de Arquivos',
                emoji: '✅ trabalho-historia-2024.docx | ❌ Novo1.docx',
                descricao: 'Use nomes descritivos e padronizados',
                tipo: 'comparacao'
            },
            {
                titulo: 'Backup Regular',
                emoji: '📅 Diário: Nuvem | Semanal: HD Externo | Mensal: DVD',
                descricao: 'Diferentes frequências para diferentes mídias',
                tipo: 'cronograma'
            }
        ],
        videos: [
            'Organização digital para estudantes',
            'Produtividade com tecnologia',
            'Ferramentas gratuitas indispensáveis'
        ]
    },
    
    atalhos: {
        imagens: [
            {
                titulo: 'Atalhos Essenciais',
                emoji: '⌨️ Ctrl+C | Ctrl+V | Ctrl+Z',
                descricao: 'Copiar | Colar | Desfazer - economize tempo!',
                tipo: 'referencia'
            },
            {
                titulo: 'Atalhos Windows',
                emoji: '⊞ Win+E (Explorer) | Win+L (Lock) | Win+D (Desktop)',
                descricao: 'Navegação rápida pelo sistema',
                tipo: 'referencia'
            },
            {
                titulo: 'Atalhos Navegador',
                emoji: 'Ctrl+T (Nova aba) | Ctrl+Shift+T (Reabrir aba) | Ctrl+W (Fechar)',
                descricao: 'Gestão eficiente de abas',
                tipo: 'referencia'
            }
        ],
        videos: [
            'Top 50 atalhos de teclado',
            'Produtividade extrema com atalhos',
            'Atalhos secretos do Windows'
        ]
    },
    
    glossario: {
        imagens: [
            {
                titulo: 'Termos Técnicos Ilustrados',
                emoji: '🔤',
                descricao: 'API, Bug, Cache, Debug, Framework - explicados visualmente',
                tipo: 'dicionario'
            },
            {
                titulo: 'Acrônimos Comuns',
                emoji: 'URL, HTML, CSS, PDF, USB, RAM, CPU',
                descricao: 'Siglas que você precisa conhecer',
                tipo: 'lista'
            }
        ],
        videos: [
            'Glossário tech para iniciantes',
            'Termos de informática explicados'
        ]
    },
    
    'redes-computadores': {
        imagens: [
            {
                titulo: 'Topologia de Rede',
                emoji: '💻 ↔️ 🔀 ↔️ 💻 ↔️ 💻',
                descricao: 'Dispositivos conectados via roteador (topologia estrela)',
                tipo: 'diagrama'
            },
            {
                titulo: 'Endereço IP',
                emoji: '🏠 192.168.1.100',
                descricao: 'Cada dispositivo tem um "endereço" na rede',
                tipo: 'conceito'
            },
            {
                titulo: 'WiFi vs Cabo',
                emoji: '📶 Wireless vs 🔌 Ethernet',
                descricao: 'WiFi = Conveniência | Cabo = Velocidade e estabilidade',
                tipo: 'comparacao'
            }
        ],
        videos: [
            'Como funciona o WiFi',
            'Configurando sua rede doméstica',
            'Melhorando sinal WiFi'
        ]
    },
    
    'cloud-computing': {
        imagens: [
            {
                titulo: 'Armazenamento Local vs Nuvem',
                emoji: '💾 HD Local vs ☁️ Google Drive',
                descricao: 'Local = Só seu PC | Nuvem = Qualquer lugar com internet',
                tipo: 'comparacao'
            },
            {
                titulo: 'Serviços Cloud Populares',
                emoji: '☁️ Drive | OneDrive | Dropbox | iCloud',
                descricao: 'Diferentes serviços, mesma função: backup online',
                tipo: 'opcoes'
            },
            {
                titulo: 'Sincronização Automática',
                emoji: '📱 ↔️ ☁️ ↔️ 💻',
                descricao: 'Edite no celular, acesse no PC automaticamente',
                tipo: 'processo'
            }
        ],
        videos: [
            'Google Drive - Guia completo',
            'OneDrive para estudantes',
            'Backup na nuvem passo a passo'
        ]
    },
    
    'excel-avancado': {
        imagens: [
            {
                titulo: 'Fórmulas Avançadas',
                emoji: '= VLOOKUP(A2, B:C, 2, FALSE)',
                descricao: 'Busca valores em tabelas - super útil!',
                tipo: 'formula'
            },
            {
                titulo: 'Tabela Dinâmica',
                emoji: '📊 Dados brutos → 🔄 → 📈 Relatório resumido',
                descricao: 'Analise milhares de linhas em segundos',
                tipo: 'transformacao'
            },
            {
                titulo: 'Gráficos Profissionais',
                emoji: '📊 Colunas | 📈 Linhas | 🥧 Pizza',
                descricao: 'Visualize dados de forma impactante',
                tipo: 'tipos'
            }
        ],
        videos: [
            'Excel avançado para jovens',
            'Tabelas dinâmicas simplificadas',
            'Gráficos impressionantes no Excel'
        ]
    },
    
    'design-grafico-basico': {
        imagens: [
            {
                titulo: 'Princípios de Design',
                emoji: '⚖️ Equilíbrio | 🎯 Contraste | 🔄 Repetição | 📍 Alinhamento',
                descricao: 'Fundamentos para qualquer design',
                tipo: 'principios'
            },
            {
                titulo: 'Paleta de Cores',
                emoji: '🎨 🔴 🔵 🟡 → Harmonia visual',
                descricao: 'Cores complementares criam impacto',
                tipo: 'teoria'
            },
            {
                titulo: 'Tipografia',
                emoji: '📝 Serif (formal) vs Sans-serif (moderna)',
                descricao: 'Escolha da fonte muda completamente o visual',
                tipo: 'comparacao'
            }
        ],
        videos: [
            'Canva para iniciantes',
            'Design gráfico com celular',
            'Criando posts para redes sociais'
        ]
    },
    
    'python-introducao': {
        imagens: [
            {
                titulo: 'Sintaxe Python',
                emoji: 'print("Hello World") → Hello World',
                descricao: 'Python é simples e legível',
                tipo: 'codigo'
            },
            {
                titulo: 'Variáveis',
                emoji: 'nome = "João"\nidade = 15\naltura = 1.70',
                descricao: 'Armazene valores para usar depois',
                tipo: 'exemplo'
            },
            {
                titulo: 'Loop FOR',
                emoji: 'for i in range(5):\n    print(i)\n→ 0 1 2 3 4',
                descricao: 'Repita ações facilmente',
                tipo: 'codigo'
            }
        ],
        videos: [
            'Python para adolescentes',
            'Programação do zero com Python',
            'Projetos legais em Python'
        ]
    },
    
    'javascript-avancado': {
        imagens: [
            {
                titulo: 'Arrow Functions',
                emoji: 'const soma = (a, b) => a + b',
                descricao: 'Sintaxe moderna e concisa',
                tipo: 'codigo'
            },
            {
                titulo: 'DOM Manipulation',
                emoji: 'document.querySelector("#botao").addEventListener("click")',
                descricao: 'Torne páginas interativas',
                tipo: 'conceito'
            },
            {
                titulo: 'Fetch API',
                emoji: 'fetch(url) → get data → update page',
                descricao: 'Busque dados de APIs externas',
                tipo: 'fluxo'
            }
        ],
        videos: [
            'JavaScript moderno ES6+',
            'Projetos práticos com JavaScript',
            'React para iniciantes'
        ]
    },
    
    'git-github': {
        imagens: [
            {
                titulo: 'Git Workflow',
                emoji: '📝 Edit → ➕ Add → ✅ Commit → 📤 Push',
                descricao: 'Fluxo básico do controle de versão',
                tipo: 'fluxo'
            },
            {
                titulo: 'Branches',
                emoji: '🌳 main → 🌿 feature → 🔀 merge',
                descricao: 'Desenvolva features sem quebrar o código principal',
                tipo: 'diagrama'
            },
            {
                titulo: 'GitHub Profile',
                emoji: '👤 Perfil + 📁 Repositórios = 💼 Portfólio',
                descricao: 'Seu portfólio de desenvolvedor',
                tipo: 'conceito'
            }
        ],
        videos: [
            'Git e GitHub para iniciantes',
            'Criando seu primeiro repositório',
            'Colaborando em projetos open source'
        ]
    }
};
