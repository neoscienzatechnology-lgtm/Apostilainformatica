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
                titulo: 'Interface do Microsoft Word',
                url: 'https://i.imgur.com/placeholder.jpg',
                emoji: '📝',
                descricao: 'Barra de ferramentas do Word: Arquivo, Início, Inserir, Design, Layout, Referências',
                html: `
                    <div class="visual-diagram p-3 bg-light rounded">
                        <div style="background: #2b579a; color: white; padding: 10px; border-radius: 5px 5px 0 0;">
                            <strong>📝 Microsoft Word</strong>
                        </div>
                        <div style="background: white; padding: 15px; border: 2px solid #ddd; border-radius: 0 0 5px 5px;">
                            <div style="background: #f0f0f0; padding: 8px; margin-bottom: 10px;">
                                <span style="margin-right: 15px;">📁 Arquivo</span>
                                <span style="margin-right: 15px;">🏠 Início</span>
                                <span style="margin-right: 15px;">➕ Inserir</span>
                                <span style="margin-right: 15px;">🎨 Design</span>
                            </div>
                            <div style="border: 1px dashed #ccc; padding: 40px; text-align: center; background: white;">
                                <p style="color: #999; margin: 0;">Seu documento aqui...</p>
                                <p style="color: #999; margin: 10px 0 0 0; font-size: 14px;">📏 Régua | ✏️ Ferramentas de formatação</p>
                            </div>
                        </div>
                    </div>
                `,
                tipo: 'interface'
            },
            {
                titulo: 'Planilha Excel - Estrutura',
                emoji: '📊',
                descricao: 'Células, linhas (1,2,3...) e colunas (A,B,C...) formam a grade do Excel',
                html: `
                    <div class="visual-diagram p-3 bg-light rounded">
                        <div style="background: #217346; color: white; padding: 10px; border-radius: 5px 5px 0 0;">
                            <strong>📊 Microsoft Excel</strong>
                        </div>
                        <div style="overflow-x: auto;">
                            <table style="border-collapse: collapse; background: white; margin: 10px 0;">
                                <tr>
                                    <th style="border: 1px solid #ddd; padding: 8px; background: #f0f0f0; min-width: 40px;"></th>
                                    <th style="border: 1px solid #ddd; padding: 8px; background: #f0f0f0; min-width: 80px;">A</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; background: #f0f0f0; min-width: 80px;">B</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; background: #f0f0f0; min-width: 80px;">C</th>
                                    <th style="border: 1px solid #ddd; padding: 8px; background: #f0f0f0; min-width: 80px;">D</th>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid #ddd; padding: 8px; background: #f0f0f0; font-weight: bold;">1</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;">Produto</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;">Preço</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;">Qtd</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;">Total</td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid #ddd; padding: 8px; background: #f0f0f0; font-weight: bold;">2</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;">Mouse</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;">R$ 50</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;">2</td>
                                    <td style="border: 1px solid #ddd; padding: 8px; background: #fff3cd;">=B2*C2</td>
                                </tr>
                                <tr>
                                    <td style="border: 1px solid #ddd; padding: 8px; background: #f0f0f0; font-weight: bold;">3</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;">Teclado</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;">R$ 120</td>
                                    <td style="border: 1px solid #ddd; padding: 8px;">1</td>
                                    <td style="border: 1px solid #ddd; padding: 8px; background: #fff3cd;">=B3*C3</td>
                                </tr>
                            </table>
                            <p style="font-size: 12px; color: #666; margin: 5px 0;">
                                💡 Célula D2 = <code style="background: #fff3cd; padding: 2px 5px; border-radius: 3px;">=B2*C2</code> (multiplica preço × quantidade)
                            </p>
                        </div>
                    </div>
                `,
                tipo: 'diagrama'
            },
            {
                titulo: 'PowerPoint - Slide Profissional',
                emoji: '🎨',
                descricao: 'Estrutura de um slide bem feito: título grande, bullet points, imagem de apoio',
                html: `
                    <div class="visual-diagram p-3 bg-light rounded">
                        <div style="background: #d24726; color: white; padding: 10px; border-radius: 5px 5px 0 0;">
                            <strong>🎨 Microsoft PowerPoint</strong>
                        </div>
                        <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 0 0 5px 5px; color: white;">
                            <h3 style="margin: 0 0 20px 0; font-size: 28px; border-bottom: 3px solid white; padding-bottom: 10px;">
                                🚀 Meu Projeto
                            </h3>
                            <ul style="list-style: none; padding: 0; font-size: 18px;">
                                <li style="margin: 10px 0;">✅ Objetivo claro</li>
                                <li style="margin: 10px 0;">✅ Metodologia definida</li>
                                <li style="margin: 10px 0;">✅ Resultados esperados</li>
                            </ul>
                            <div style="margin-top: 20px; text-align: center; background: rgba(255,255,255,0.2); padding: 20px; border-radius: 5px;">
                                📊 [Imagem ou gráfico aqui]
                            </div>
                        </div>
                    </div>
                `,
                tipo: 'exemplo'
            },
            {
                titulo: 'Fórmulas Essenciais do Excel',
                emoji: '🔢',
                descricao: 'As 5 fórmulas que você PRECISA saber',
                html: `
                    <div class="visual-diagram p-3 bg-light rounded">
                        <h6 class="text-success mb-3">🔢 Fórmulas Essenciais</h6>
                        <div style="background: white; border: 2px solid #217346; border-radius: 5px; padding: 15px;">
                            <div style="margin: 10px 0; padding: 10px; background: #f8f9fa; border-left: 4px solid #217346;">
                                <code style="color: #217346; font-size: 16px;">=SUM(A1:A10)</code>
                                <p style="margin: 5px 0 0 0; font-size: 13px; color: #666;">
                                    Soma todos os valores de A1 até A10
                                </p>
                            </div>
                            <div style="margin: 10px 0; padding: 10px; background: #f8f9fa; border-left: 4px solid #217346;">
                                <code style="color: #217346; font-size: 16px;">=AVERAGE(B1:B20)</code>
                                <p style="margin: 5px 0 0 0; font-size: 13px; color: #666;">
                                    Calcula a média dos valores
                                </p>
                            </div>
                            <div style="margin: 10px 0; padding: 10px; background: #f8f9fa; border-left: 4px solid #217346;">
                                <code style="color: #217346; font-size: 16px;">=MAX(C1:C15)</code>
                                <p style="margin: 5px 0 0 0; font-size: 13px; color: #666;">
                                    Encontra o MAIOR valor
                                </p>
                            </div>
                            <div style="margin: 10px 0; padding: 10px; background: #f8f9fa; border-left: 4px solid #217346;">
                                <code style="color: #217346; font-size: 16px;">=MIN(C1:C15)</code>
                                <p style="margin: 5px 0 0 0; font-size: 13px; color: #666;">
                                    Encontra o MENOR valor
                                </p>
                            </div>
                            <div style="margin: 10px 0; padding: 10px; background: #f8f9fa; border-left: 4px solid #217346;">
                                <code style="color: #217346; font-size: 16px;">=COUNT(D1:D50)</code>
                                <p style="margin: 5px 0 0 0; font-size: 13px; color: #666;">
                                    Conta quantas células têm números
                                </p>
                            </div>
                        </div>
                    </div>
                `,
                tipo: 'referencia'
            },
            {
                titulo: 'Atalhos de Teclado - Office',
                emoji: '⌨️',
                descricao: 'Trabalhe 10x mais rápido com esses atalhos!',
                html: `
                    <div class="visual-diagram p-3 bg-light rounded">
                        <h6 class="text-danger mb-3">⌨️ Atalhos Universais</h6>
                        <div class="row g-2">
                            <div class="col-6">
                                <div style="background: white; border: 2px solid #dc3545; border-radius: 5px; padding: 10px; text-align: center;">
                                    <div style="background: #dc3545; color: white; padding: 5px; border-radius: 3px; font-weight: bold; margin-bottom: 5px;">
                                        Ctrl + S
                                    </div>
                                    <small>💾 Salvar</small>
                                </div>
                            </div>
                            <div class="col-6">
                                <div style="background: white; border: 2px solid #dc3545; border-radius: 5px; padding: 10px; text-align: center;">
                                    <div style="background: #dc3545; color: white; padding: 5px; border-radius: 3px; font-weight: bold; margin-bottom: 5px;">
                                        Ctrl + Z
                                    </div>
                                    <small>↩️ Desfazer</small>
                                </div>
                            </div>
                            <div class="col-6">
                                <div style="background: white; border: 2px solid #dc3545; border-radius: 5px; padding: 10px; text-align: center;">
                                    <div style="background: #dc3545; color: white; padding: 5px; border-radius: 3px; font-weight: bold; margin-bottom: 5px;">
                                        Ctrl + C
                                    </div>
                                    <small>📋 Copiar</small>
                                </div>
                            </div>
                            <div class="col-6">
                                <div style="background: white; border: 2px solid #dc3545; border-radius: 5px; padding: 10px; text-align: center;">
                                    <div style="background: #dc3545; color: white; padding: 5px; border-radius: 3px; font-weight: bold; margin-bottom: 5px;">
                                        Ctrl + V
                                    </div>
                                    <small>📌 Colar</small>
                                </div>
                            </div>
                            <div class="col-6">
                                <div style="background: white; border: 2px solid #dc3545; border-radius: 5px; padding: 10px; text-align: center;">
                                    <div style="background: #dc3545; color: white; padding: 5px; border-radius: 3px; font-weight: bold; margin-bottom: 5px;">
                                        Ctrl + B
                                    </div>
                                    <small><strong>N</strong> Negrito</small>
                                </div>
                            </div>
                            <div class="col-6">
                                <div style="background: white; border: 2px solid #dc3545; border-radius: 5px; padding: 10px; text-align: center;">
                                    <div style="background: #dc3545; color: white; padding: 5px; border-radius: 3px; font-weight: bold; margin-bottom: 5px;">
                                        Ctrl + P
                                    </div>
                                    <small>🖨️ Imprimir</small>
                                </div>
                            </div>
                        </div>
                    </div>
                `,
                tipo: 'referencia'
            }
        ],
        videos: [
            'Word do ZERO ao AVANÇADO em 30 minutos',
            'Excel para INICIANTES - Tutorial completo',
            'PowerPoint: Como fazer apresentações INCRÍVEIS',
            'Fórmulas Excel que TODO estudante precisa saber',
            'Atalhos de teclado Office - Produtividade MÁXIMA'
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
