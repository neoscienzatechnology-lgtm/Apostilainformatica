/**
 * BANCO DE DADOS DE EXERCÍCIOS - APOSTILA DE INFORMÁTICA
 * Formato: JSON com exercícios estilo Duolingo para cada módulo
 * Estrutura: pergunta, alternativas, correta (índice 0-3)
 */

const modulosApostila = [
    {
        id: 'introducao',
        titulo: 'Introdução à Informática',
        descricao: 'Hardware, software e periféricos - os conceitos fundamentais',
        icone: 'fas fa-laptop',
        exercicios: [
            {
                pergunta: 'O que é hardware?',
                alternativas: [
                    'Programas que rodam no computador',
                    'Partes físicas do computador',
                    'Um navegador de internet',
                    'Backup em nuvem'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual dos seguintes é um exemplo de software?',
                alternativas: [
                    'Mouse',
                    'Teclado',
                    'Microsoft Word',
                    'Monitor'
                ],
                correta: 2
            },
            {
                pergunta: 'O que é um periférico?',
                alternativas: [
                    'A memória do computador',
                    'Um dispositivo conectado ao computador para entrada ou saída de dados',
                    'O processador do computador',
                    'Um programa antivírus'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual é a função principal da RAM?',
                alternativas: [
                    'Armazenar dados permanentemente',
                    'Processar imagens',
                    'Armazenar dados temporariamente durante a execução de programas',
                    'Conectar à internet'
                ],
                correta: 2
            },
            {
                pergunta: 'O que é um SSD?',
                alternativas: [
                    'Um tipo de memória volátil',
                    'Um disco rígido sólido que armazena dados sem peças móveis',
                    'Um periférico de entrada',
                    'Um tipo de processador'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual desses é um periférico de ENTRADA?',
                alternativas: [
                    'Monitor',
                    'Impressora',
                    'Mouse',
                    'Caixa de som'
                ],
                correta: 2
            },
            {
                pergunta: 'O que é a BIOS?',
                alternativas: [
                    'Um tipo de software',
                    'O sistema operacional',
                    'Um firmware que inicializa o computador antes do SO carregar',
                    'Um programa antivírus'
                ],
                correta: 2
            },
            {
                pergunta: 'Qual é a diferença entre GB e GHz?',
                alternativas: [
                    'GB é gigabyte, GHz é a velocidade do processador',
                    'São a mesma coisa',
                    'GB é um tipo de HD',
                    'GHz é memória RAM'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz a CPU (Processador)?',
                alternativas: [
                    'Armazena dados',
                    'Processa cálculos e instruções do computador',
                    'Exibe imagens na tela',
                    'Conecta à internet'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual a diferença entre HD e SSD?',
                alternativas: [
                    'Não há diferença',
                    'HD tem peças móveis, SSD é mais rápido e sem partes móveis',
                    'SSD é mais lento',
                    'HD é melhor para jogos'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é placa-mãe?',
                alternativas: [
                    'Um software',
                    'A placa principal que conecta todos os componentes',
                    'Um tipo de memória',
                    'Um periférico'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual componente processa gráficos 3D e jogos?',
                alternativas: [
                    'RAM',
                    'HD',
                    'Placa de vídeo (GPU)',
                    'Processador'
                ],
                correta: 2
            },
            {
                pergunta: 'O que é fonte de alimentação?',
                alternativas: [
                    'Fornece energia elétrica aos componentes',
                    'Armazena dados',
                    'Processa informações',
                    'Conecta à internet'
                ],
                correta: 0
            },
            {
                pergunta: 'Quanto é 1 Terabyte (TB)?',
                alternativas: [
                    '1000 MB',
                    '1000 GB',
                    '100 GB',
                    '10 GB'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é um notebook?',
                alternativas: [
                    'Um caderno',
                    'Computador portátil com tela, teclado e bateria',
                    'Um tablet',
                    'Um celular'
                ],
                correta: 1
            }
        ]
    },
    {
        id: 'sistemas-operacionais',
        titulo: 'Sistemas Operacionais',
        descricao: 'Foco no Windows - funcionamento, recursos e configurações',
        icone: 'fas fa-desktop',
        exercicios: [
            {
                pergunta: 'O que é um sistema operacional?',
                alternativas: [
                    'Um hardware do computador',
                    'Um software que gerencia os recursos do computador',
                    'Um programa de internet',
                    'Um backup em nuvem'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual é a principal função do Windows?',
                alternativas: [
                    'Conectar à internet',
                    'Gerenciar hardware, software e recursos do computador',
                    'Armazenar dados na nuvem',
                    'Criar documentos'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é a Área de Trabalho no Windows?',
                alternativas: [
                    'A tela inicial que contém ícones de programas e arquivos',
                    'Um programa específico',
                    'Uma pasta na nuvem',
                    'Um navegador de internet'
                ],
                correta: 0
            },
            {
                pergunta: 'Qual atalho abre o Executar no Windows?',
                alternativas: [
                    'Ctrl + A',
                    'Alt + Tab',
                    'Windows + R',
                    'Ctrl + Shift + Esc'
                ],
                correta: 2
            },
            {
                pergunta: 'O que é a Barra de Tarefas?',
                alternativas: [
                    'Uma área que mostra programas abertos e permite acessar programas',
                    'Um navegador de arquivos',
                    'Um programa de email',
                    'Uma pasta especial'
                ],
                correta: 0
            },
            {
                pergunta: 'Como você acessa o Gerenciador de Tarefas no Windows?',
                alternativas: [
                    'Ctrl + Alt + Delete',
                    'Windows + X',
                    'Alt + F4',
                    'Ctrl + Shift + Esc'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é uma partição de disco?',
                alternativas: [
                    'Uma cópia de segurança',
                    'Uma divisão lógica do disco rígido em seções',
                    'Um tipo de vírus',
                    'Um navegador'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual é a função do Painel de Controle?',
                alternativas: [
                    'Gerenciar configurações do computador',
                    'Navegar na internet',
                    'Criar documentos',
                    'Fazer backup automático'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é o Explorador de Arquivos?',
                alternativas: [
                    'Um navegador web',
                    'Ferramenta para navegar pastas e arquivos do PC',
                    'Um antivírus',
                    'Um jogo'
                ],
                correta: 1
            },
            {
                pergunta: 'Para que serve a Lixeira?',
                alternativas: [
                    'Deletar vírus',
                    'Armazenar arquivos deletados temporariamente',
                    'Fazer backup',
                    'Limpar RAM'
                ],
                correta: 1
            },
            {
                pergunta: 'O que faz o Gerenciador de Tarefas?',
                alternativas: [
                    'Cria tarefas escolares',
                    'Mostra programas em execução e uso de recursos',
                    'Agenda compromissos',
                    'Faz backup'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual atalho abre o Gerenciador de Tarefas?',
                alternativas: [
                    'Ctrl + Alt + Del',
                    'Ctrl + C',
                    'Alt + F4',
                    'Windows + E'
                ],
                correta: 0
            },
            {
                pergunta: 'O que são drivers?',
                alternativas: [
                    'Programas de jogos',
                    'Software que permite comunicação entre SO e hardware',
                    'Vírus de computador',
                    'Aplicativos de música'
                ],
                correta: 1
            },
            {
                pergunta: 'Para que serve a Desfragmentação de disco?',
                alternativas: [
                    'Deletar arquivos',
                    'Organizar dados para melhorar desempenho do HD',
                    'Instalar programas',
                    'Criar backups'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é o Windows Update?',
                alternativas: [
                    'Um jogo',
                    'Sistema de atualização automática do Windows',
                    'Um navegador',
                    'Um antivírus'
                ],
                correta: 1
            }
        ]
    },
    {
        id: 'internet',
        titulo: 'Internet e Segurança Digital',
        descricao: 'Navegação segura, phishing, senhas e boas práticas online',
        icone: 'fas fa-globe',
        exercicios: [
            {
                pergunta: 'O que é phishing?',
                alternativas: [
                    'Um tipo de vírus de computador',
                    'Uma técnica de fraude que tenta roubar informações pessoais',
                    'Um programa antivírus',
                    'Um navegador de internet'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual é uma senha segura?',
                alternativas: [
                    '123456',
                    'Seu nome completo',
                    'Uma combinação de letras, números e caracteres especiais',
                    'A data do seu aniversário'
                ],
                correta: 2
            },
            {
                pergunta: 'O que significa SSL em um navegador?',
                alternativas: [
                    'Um tipo de vírus',
                    'Uma conexão segura criptografada',
                    'Um programa de email',
                    'Um tipo de memória'
                ],
                correta: 1
            },
            {
                pergunta: 'Como identificar um email de phishing?',
                alternativas: [
                    'Por ser muito colorido',
                    'Por conter erros de digitação, endereços suspeitos e pedidos de informações',
                    'Por ter anexos',
                    'Por ser do Gmail'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é um firewall?',
                alternativas: [
                    'Um tipo de arquivo',
                    'Um programa que protege seu computador contra ataques de rede',
                    'Um navegador de internet',
                    'Um tipo de malware'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual é o endereço web correto?',
                alternativas: [
                    'www.google..com',
                    'www.google.com',
                    'www..google.com',
                    'www.google.co'
                ],
                correta: 1
            },
            {
                pergunta: 'O que significa o cadeado no navegador?',
                alternativas: [
                    'Que o site está bloqueado',
                    'Que o site usa HTTPS (conexão segura)',
                    'Que o site não pode ser visitado',
                    'Que o site é muito antigo'
                ],
                correta: 1
            },
            {
                pergunta: 'É seguro usar a mesma senha em todos os sites?',
                alternativas: [
                    'Sim, é mais fácil lembrar',
                    'Não, você corre risco de que todos os seus contas sejam hackeadas',
                    'Sim, os sites protegem suas senhas',
                    'Não importa'
                ],
                correta: 1
            },
            {
                pergunta: 'O que significa HTTPS?',
                alternativas: [
                    'Hyper Text Protocol Secure - protocolo seguro',
                    'High Technology Protocol System',
                    'Home Transfer Protocol Safe',
                    'Hyperlink Text Protocol Server'
                ],
                correta: 0
            },
            {
                pergunta: 'Qual é um sinal de site malicioso?',
                alternativas: [
                    'Ter muitas cores',
                    'URL estranha, erros de português e pedidos suspeitos',
                    'Ter vídeos',
                    'Ter formulários'
                ],
                correta: 1
            },
            {
                pergunta: 'O que fazer ao receber email suspeito?',
                alternativas: [
                    'Clicar em todos os links',
                    'Não abrir anexos, não clicar em links e reportar como spam',
                    'Responder imediatamente',
                    'Encaminhar para amigos'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é um cookie na internet?',
                alternativas: [
                    'Um tipo de vírus perigoso',
                    'Pequeno arquivo que sites guardam no navegador para lembrar preferências',
                    'Um programa antivírus',
                    'Uma ferramenta de hacker'
                ],
                correta: 1
            },
            {
                pergunta: 'Como criar uma senha forte?',
                alternativas: [
                    'Usar apenas números',
                    'Usar seu nome completo',
                    'Combinar letras maiúsculas, minúsculas, números e símbolos',
                    'Usar 123456'
                ],
                correta: 2
            },
            {
                pergunta: 'O que é navegação anônima/privada?',
                alternativas: [
                    'Torna você invisível na internet',
                    'Modo que não salva histórico e cookies no navegador',
                    'Protege contra todos os vírus',
                    'Acelera a conexão'
                ],
                correta: 1
            },
            {
                pergunta: 'Por que atualizar o navegador regularmente?',
                alternativas: [
                    'Para mudar as cores',
                    'Corrigir falhas de segurança e melhorar desempenho',
                    'Não é necessário atualizar',
                    'Apenas para ter novos ícones'
                ],
                correta: 1
            }
        ]
    },
    {
        id: 'office',
        titulo: 'Pacote Office',
        descricao: 'Word, Excel e PowerPoint - o essencial para trabalhar com documentos',
        icone: 'fas fa-file-alt',
        exercicios: [
            {
                pergunta: 'Para que serve o Microsoft Word?',
                alternativas: [
                    'Para criar planilhas',
                    'Para criar e editar documentos de texto',
                    'Para criar apresentações',
                    'Para navegar na internet'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é uma célula no Excel?',
                alternativas: [
                    'Um tipo de vírus',
                    'A intersecção de uma linha e coluna em uma planilha',
                    'Um tipo de arquivo',
                    'Um programa de email'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual é o atalho para salvar um documento?',
                alternativas: [
                    'Ctrl + S',
                    'Ctrl + Z',
                    'Ctrl + C',
                    'Ctrl + V'
                ],
                correta: 0
            },
            {
                pergunta: 'Para que serve o PowerPoint?',
                alternativas: [
                    'Para criar e editar documentos de texto',
                    'Para criar planilhas',
                    'Para criar apresentações com slides',
                    'Para navegação de internet'
                ],
                correta: 2
            },
            {
                pergunta: 'O que é uma fórmula no Excel?',
                alternativas: [
                    'Um tipo de arquivo',
                    'Uma expressão que realiza cálculos com valores da planilha',
                    'Um tipo de vírus',
                    'Um programa antivírus'
                ],
                correta: 1
            },
            {
                pergunta: 'Como inserir uma tabela no Word?',
                alternativas: [
                    'Menu Inserir > Tabela',
                    'Menu Arquivo > Tabela',
                    'Menu Exibir > Tabela',
                    'Menu Editar > Tabela'
                ],
                correta: 0
            },
            {
                pergunta: 'O que significa SUM em uma fórmula do Excel?',
                alternativas: [
                    'Subtração',
                    'Soma de valores',
                    'Multiplicação',
                    'Divisão'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual é a extensão de arquivo padrão do Word?',
                alternativas: [
                    '.xlsx',
                    '.pptx',
                    '.docx',
                    '.pdf'
                ],
                correta: 2
            },
            {
                pergunta: 'Como inserir uma quebra de página no Word?',
                alternativas: [
                    'Ctrl + Enter',
                    'Ctrl + P',
                    'Alt + Enter',
                    'Shift + Enter'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz a função AVERAGE no Excel?',
                alternativas: [
                    'Soma valores',
                    'Calcula a média de valores',
                    'Conta células',
                    'Multiplica valores'
                ],
                correta: 1
            },
            {
                pergunta: 'Como alinhar texto ao centro no Word?',
                alternativas: [
                    'Ctrl + E',
                    'Ctrl + C',
                    'Ctrl + T',
                    'Ctrl + J'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é uma referência absoluta no Excel?',
                alternativas: [
                    'Uma célula qualquer',
                    'Referência que não muda ao copiar fórmula, usa $ como $A$1',
                    'Uma fórmula complexa',
                    'Um gráfico'
                ],
                correta: 1
            },
            {
                pergunta: 'Como adicionar uma transição entre slides no PowerPoint?',
                alternativas: [
                    'Menu Transições',
                    'Menu Inserir',
                    'Menu Arquivo',
                    'Menu Revisar'
                ],
                correta: 0
            },
            {
                pergunta: 'Qual atalho para imprimir um documento?',
                alternativas: [
                    'Ctrl + I',
                    'Ctrl + P',
                    'Ctrl + Print',
                    'Alt + P'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é Mala Direta no Word?',
                alternativas: [
                    'Um tipo de email',
                    'Recurso para criar múltiplos documentos personalizados a partir de uma lista',
                    'Uma pasta especial',
                    'Um formato de arquivo'
                ],
                correta: 1
            }
        ]
    },
    {
        id: 'seguranca',
        titulo: 'Segurança Digital e Privacidade',
        descricao: 'Vírus, malware, privacidade online e proteção de dados',
        icone: 'fas fa-shield-alt',
        exercicios: [
            {
                pergunta: 'O que é um vírus de computador?',
                alternativas: [
                    'Um programa que melhora o desempenho',
                    'Um código malicioso que se replica e danifica o sistema',
                    'Um programa antivírus',
                    'Um backup automático'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é malware?',
                alternativas: [
                    'Um software de proteção',
                    'Um programa que melhora a internet',
                    'Qualquer software malicioso que prejudica o sistema',
                    'Um navegador de internet'
                ],
                correta: 2
            },
            {
                pergunta: 'Como proteger seu computador contra vírus?',
                alternativas: [
                    'Não usar a internet',
                    'Usar antivírus, manter SO atualizado e ter cuidado com downloads',
                    'Desligar o firewall',
                    'Usar sempre a mesma senha'
                ],
                correta: 1
            },
            {
                pergunta: 'O que significa backup?',
                alternativas: [
                    'Um tipo de vírus',
                    'Uma cópia de segurança de dados',
                    'Um programa antivírus',
                    'Um navegador'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual é o principal risco de usar WiFi público?',
                alternativas: [
                    'Conexão lenta',
                    'Seus dados podem ser interceptados por hackers',
                    'Perda de bateria',
                    'Desconexão automática'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é criptografia?',
                alternativas: [
                    'Um tipo de vírus',
                    'O processo de codificar dados para protegê-los',
                    'Um navegador de internet',
                    'Um programa antivírus'
                ],
                correta: 1
            },
            {
                pergunta: 'Como evitar roubo de identidade online?',
                alternativas: [
                    'Compartilhar dados pessoais livremente',
                    'Usar senhas fracas',
                    'Ser cauteloso com informações pessoais e não compartilhá-las desnecessariamente',
                    'Não usar email'
                ],
                correta: 2
            },
            {
                pergunta: 'O que é autenticação de dois fatores?',
                alternativas: [
                    'Usar dois navegadores',
                    'Uma camada adicional de segurança que exige duas formas de verificação',
                    'Ter dois computadores',
                    'Usar dois antivírus'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é ransomware?',
                alternativas: [
                    'Um programa de backup',
                    'Malware que criptografa seus dados e exige pagamento',
                    'Um antivírus',
                    'Um navegador'
                ],
                correta: 1
            },
            {
                pergunta: 'Como identificar um pendrive com vírus?',
                alternativas: [
                    'Pela cor',
                    'Antivírus detecta, arquivos ocultos suspeitos aparecem',
                    'Pelo tamanho',
                    'Pelo preço'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é uma VPN?',
                alternativas: [
                    'Um tipo de vírus',
                    'Rede Privada Virtual que criptografa sua conexão',
                    'Um navegador',
                    'Um antivírus'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual a frequência ideal para trocar senhas importantes?',
                alternativas: [
                    'Nunca trocar',
                    'A cada 3-6 meses, ou imediatamente se suspeitar de vazamento',
                    'Todo dia',
                    'A cada 10 anos'
                ],
                correta: 1
            },
            {
                pergunta: 'O que fazer ao encontrar um link suspeito?',
                alternativas: [
                    'Clicar para ver o que é',
                    'Não clicar, verificar URL, usar verificadores de segurança',
                    'Compartilhar com amigos',
                    'Baixar tudo'
                ],
                correta: 1
            },
            {
                pergunta: 'O que são atualizações de segurança?',
                alternativas: [
                    'Novos jogos',
                    'Correções de vulnerabilidades no sistema',
                    'Novos papeis de parede',
                    'Músicas novas'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual o perigo de baixar programas piratas?',
                alternativas: [
                    'Nenhum perigo',
                    'Podem conter vírus, trojans, spyware e roubar seus dados',
                    'Apenas deixam PC lento',
                    'Só ocupam espaço'
                ],
                correta: 1
            }
        ]
    },
    {
        id: 'logica',
        titulo: 'Noções de Programação',
        descricao: 'Lógica, variáveis, loops e conceitos fundamentais',
        icone: 'fas fa-code',
        exercicios: [
            {
                pergunta: 'O que é uma variável em programação?',
                alternativas: [
                    'Um tipo de vírus',
                    'Um container que armazena um valor ou dado',
                    'Um programa',
                    'Um navegador'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é um loop?',
                alternativas: [
                    'Um tipo de erro',
                    'Uma estrutura que repete um bloco de código',
                    'Um programa antivírus',
                    'Um tipo de arquivo'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é uma condição em programação?',
                alternativas: [
                    'Um tipo de arquivo',
                    'Uma instrução que verifica se algo é verdadeiro ou falso',
                    'Um loop',
                    'Um programa'
                ],
                correta: 1
            },
            {
                pergunta: 'O que significa IF em programação?',
                alternativas: [
                    'Um tipo de loop',
                    'Se - uma estrutura condicional',
                    'Um navegador',
                    'Um vírus'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é um array?',
                alternativas: [
                    'Um tipo de vírus',
                    'Uma estrutura que armazena múltiplos valores',
                    'Um loop',
                    'Um programa'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é uma função?',
                alternativas: [
                    'Um tipo de arquivo',
                    'Um bloco de código reutilizável que realiza uma tarefa específica',
                    'Um loop',
                    'Um navegador'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual é a lógica correta para verificar se um número é positivo?',
                alternativas: [
                    'if numero < 0',
                    'if numero > 0',
                    'if numero == 0',
                    'if numero'
                ],
                correta: 1
            },
            {
                pergunta: 'O que significa TRUE e FALSE em programação?',
                alternativas: [
                    'Verdadeiro e Falso - valores booleanos',
                    'Tipos de dados',
                    'Tipos de loops',
                    'Tipos de variáveis'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é um operador lógico?',
                alternativas: [
                    'Um tipo de variável',
                    'Símbolos como AND, OR, NOT que comparam valores',
                    'Um loop',
                    'Uma função'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é ELSE em programação?',
                alternativas: [
                    'Um tipo de loop',
                    'A alternativa executada quando IF é falso',
                    'Uma variável',
                    'Um array'
                ],
                correta: 1
            },
            {
                pergunta: 'Para que serve o operador == ?',
                alternativas: [
                    'Atribuir valor',
                    'Comparar se dois valores são iguais',
                    'Somar números',
                    'Deletar variáveis'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é um algoritmo?',
                alternativas: [
                    'Um tipo de vírus',
                    'Sequência de passos para resolver um problema',
                    'Um navegador',
                    'Um arquivo'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual a diferença entre WHILE e FOR?',
                alternativas: [
                    'Não há diferença',
                    'FOR para contagens definidas, WHILE para condições',
                    'WHILE é mais rápido',
                    'FOR não existe'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é um parâmetro de função?',
                alternativas: [
                    'Um tipo de loop',
                    'Valor passado para a função executar',
                    'Um erro',
                    'Uma variável global'
                ],
                correta: 1
            },
            {
                pergunta: 'O que significa "debugar" um código?',
                alternativas: [
                    'Deletar o programa',
                    'Encontrar e corrigir erros no código',
                    'Criar variáveis',
                    'Formatar texto'
                ],
                correta: 1
            }
        ]
    },
    {
        id: 'web',
        titulo: 'Introdução à Web',
        descricao: 'HTML, CSS, JavaScript básico - fundamentos do desenvolvimento web',
        icone: 'fas fa-sitemap',
        exercicios: [
            {
                pergunta: 'O que é HTML?',
                alternativas: [
                    'Um programa',
                    'Linguagem de marcação para criar páginas web',
                    'Um navegador',
                    'Um programa antivírus'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é CSS?',
                alternativas: [
                    'Uma linguagem de programação',
                    'Linguagem para estilizar e dar aparência a páginas web',
                    'Um navegador',
                    'Um tipo de arquivo'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é JavaScript?',
                alternativas: [
                    'Uma linguagem de marcação',
                    'Um programa antivírus',
                    'Linguagem de programação que adiciona interatividade a páginas web',
                    'Um navegador'
                ],
                correta: 2
            },
            {
                pergunta: 'O que é uma tag HTML?',
                alternativas: [
                    'Um tipo de vírus',
                    'Um elemento marcado com < >, usada para estruturar o conteúdo',
                    'Um programa',
                    'Um arquivo'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é um navegador web?',
                alternativas: [
                    'Um programa antivírus',
                    'Um programa que permite visualizar páginas web',
                    'Um tipo de vírus',
                    'Um arquivo'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual é a estrutura básica de um documento HTML?',
                alternativas: [
                    '<html>, <head>, <body>',
                    '<css>, <js>, <html>',
                    '<start>, <middle>, <end>',
                    '<header>, <content>, <footer>'
                ],
                correta: 0
            },
            {
                pergunta: 'Qual é a cor padrão de um hiperlink em HTML?',
                alternativas: [
                    'Vermelho',
                    'Azul',
                    'Verde',
                    'Preto'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é um servidor web?',
                alternativas: [
                    'Um navegador de internet',
                    'Um programa antivírus',
                    'Um computador que armazena e fornece páginas web',
                    'Um tipo de vírus'
                ],
                correta: 2
            },
            {
                pergunta: 'Como criar um link em HTML?',
                alternativas: [
                    '<a href="url">Texto</a>',
                    '<link>url</link>',
                    '<url>Texto</url>',
                    '<href>Texto</href>'
                ],
                correta: 0
            },
            {
                pergunta: 'O que significa CSS?',
                alternativas: [
                    'Computer Style System',
                    'Cascading Style Sheets - Folhas de Estilo em Cascata',
                    'Code Style Script',
                    'Central Security System'
                ],
                correta: 1
            },
            {
                pergunta: 'Como inserir uma imagem em HTML?',
                alternativas: [
                    '<image src="foto.jpg">',
                    '<img src="foto.jpg" alt="Descrição">',
                    '<photo src="foto.jpg">',
                    '<pic>foto.jpg</pic>'
                ],
                correta: 1
            },
            {
                pergunta: 'O que são classes em CSS?',
                alternativas: [
                    'Tipos de arquivos',
                    'Seletores reutilizáveis para estilizar múltiplos elementos',
                    'Programas',
                    'Vírus'
                ],
                correta: 1
            },
            {
                pergunta: 'Para que serve o JavaScript em uma página?',
                alternativas: [
                    'Estruturar conteúdo',
                    'Estilizar elementos',
                    'Adicionar interatividade e dinâmica',
                    'Armazenar dados permanentemente'
                ],
                correta: 2
            },
            {
                pergunta: 'O que é responsividade web?',
                alternativas: [
                    'Velocidade da internet',
                    'Design que se adapta a diferentes tamanhos de tela',
                    'Tempo de resposta do servidor',
                    'Qualidade das imagens'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual elemento HTML cria um formulário?',
                alternativas: [
                    '<input>',
                    '<form>',
                    '<field>',
                    '<submit>'
                ],
                correta: 1
            }
        ]
    },
    {
        id: 'boas-praticas',
        titulo: 'Boas Práticas no Uso do Computador',
        descricao: 'Postura, ergonomia, organização e cuidados gerais',
        icone: 'fas fa-user-check',
        exercicios: [
            {
                pergunta: 'Qual é a postura correta ao usar o computador?',
                alternativas: [
                    'Deitado na cama',
                    'Sentado com costas retas, pés no chão e braços relaxados',
                    'Em pé muito tempo',
                    'Não importa a postura'
                ],
                correta: 1
            },
            {
                pergunta: 'Quantas horas por dia é recomendado usar o computador?',
                alternativas: [
                    'O máximo possível',
                    'Com pausas frequentes de 15-20 minutos a cada hora',
                    'Sem pausas',
                    'Mais de 8 horas contínuas'
                ],
                correta: 1
            },
            {
                pergunta: 'Como proteger seus olhos ao usar o computador?',
                alternativas: [
                    'Aproximar muito da tela',
                    'Manter distância apropriada, piscar frequentemente e fazer pausas',
                    'Aumentar o brilho ao máximo',
                    'Não piscar'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual é a distância ideal entre seus olhos e a tela?',
                alternativas: [
                    '10 cm',
                    '30-50 cm',
                    '100 cm',
                    'Não importa'
                ],
                correta: 1
            },
            {
                pergunta: 'Como organizar suas pastas e arquivos?',
                alternativas: [
                    'Salvar tudo na Área de Trabalho',
                    'Criar pastas bem organizadas e estruturadas',
                    'Não organizar nada',
                    'Salvar tudo no D:\\'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual é um cuidado importante com o hardware?',
                alternativas: [
                    'Não limpá-lo nunca',
                    'Derramar água sobre ele',
                    'Manter ventilação adequada e limpeza periódica',
                    'Deixar ligado 24/7 sem descanso'
                ],
                correta: 2
            },
            {
                pergunta: 'Como fazer backup de dados importantes?',
                alternativas: [
                    'Não é necessário fazer backup',
                    'Copiar para outro disco ou nuvem regularmente',
                    'Apenas confiar no disco rígido',
                    'Nunca copiar arquivos'
                ],
                correta: 1
            },
            {
                pergunta: 'O que fazer para evitar perda de dados?',
                alternativas: [
                    'Não se preocupar com dados',
                    'Fazer backups regulares e usar antivírus',
                    'Ignorar mensagens de erro',
                    'Desligar o computador sem salvar'
                ],
                correta: 1
            },
            {
                pergunta: 'Por que não comer ou beber perto do computador?',
                alternativas: [
                    'Não há problema',
                    'Líquidos podem danificar componentes eletrônicos',
                    'Só para economizar comida',
                    'É apenas uma sugestão'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é a regra 20-20-20 para saúde ocular?',
                alternativas: [
                    'Usar 20 minutos, descansar 20',
                    'A cada 20 minutos, olhar algo a 20 pés (6m) por 20 segundos',
                    'Piscar 20 vezes a cada 20 minutos',
                    'Fechar os olhos por 20 segundos'
                ],
                correta: 1
            },
            {
                pergunta: 'Como manter o computador ventilado?',
                alternativas: [
                    'Cobrir as saídas de ar',
                    'Deixar em superfície plana com saídas desobstruídas',
                    'Usar em cima da cama',
                    'Bloquear ventoinhas'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual a importância de nomear arquivos corretamente?',
                alternativas: [
                    'Não é importante',
                    'Facilita encontrar e organizar documentos rapidamente',
                    'Só para ficar bonito',
                    'Não faz diferença'
                ],
                correta: 1
            },
            {
                pergunta: 'Por que atualizar o sistema operacional?',
                alternativas: [
                    'Apenas para mudar visão',
                    'Corrigir bugs, melhorar segurança e desempenho',
                    'Não é necessário',
                    'Só ocupar espaço'
                ],
                correta: 1
            },
            {
                pergunta: 'Como proteger o notebook ao transportar?',
                alternativas: [
                    'Jogar na mochila sem cuidado',
                    'Usar case acolchoado, desligar antes e evitar impactos',
                    'Deixar ligado na mochila',
                    'Não precisa cuidado'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual a temperatura ideal para o ambiente de trabalho?',
                alternativas: [
                    'Muito quente, acima de 30°C',
                    'Entre 20-24°C com boa ventilação',
                    'Abaixo de 10°C',
                    'Temperatura não importa'
                ],
                correta: 1
            }
        ]
    },
    {
        id: 'atalhos',
        titulo: 'Atalhos Úteis do Teclado',
        descricao: 'Atalhos essenciais do Windows para aumentar produtividade',
        icone: 'fas fa-keyboard',
        exercicios: [
            {
                pergunta: 'Qual atalho copia um arquivo/texto?',
                alternativas: [
                    'Ctrl + X',
                    'Ctrl + Z',
                    'Ctrl + C',
                    'Ctrl + V'
                ],
                correta: 2
            },
            {
                pergunta: 'Qual atalho cola um arquivo/texto?',
                alternativas: [
                    'Ctrl + C',
                    'Ctrl + X',
                    'Ctrl + Z',
                    'Ctrl + V'
                ],
                correta: 3
            },
            {
                pergunta: 'Qual atalho desfaz a última ação?',
                alternativas: [
                    'Ctrl + C',
                    'Ctrl + Y',
                    'Ctrl + Z',
                    'Ctrl + X'
                ],
                correta: 2
            },
            {
                pergunta: 'Como abrir o Explorador de Arquivos?',
                alternativas: [
                    'Windows + E',
                    'Windows + D',
                    'Windows + L',
                    'Windows + V'
                ],
                correta: 0
            },
            {
                pergunta: 'Qual atalho minimiza todas as janelas?',
                alternativas: [
                    'Windows + D',
                    'Windows + L',
                    'Windows + M',
                    'Windows + E'
                ],
                correta: 0
            },
            {
                pergunta: 'Como trocar entre janelas abertas?',
                alternativas: [
                    'Alt + Tab',
                    'Ctrl + Tab',
                    'Shift + Tab',
                    'Windows + Tab'
                ],
                correta: 0
            },
            {
                pergunta: 'Qual atalho abre o menu iniciar?',
                alternativas: [
                    'Windows',
                    'Ctrl + Esc',
                    'Alt + Esc',
                    'Shift + Esc'
                ],
                correta: 0
            },
            {
                pergunta: 'Como bloquear o computador rapidamente?',
                alternativas: [
                    'Windows + L',
                    'Windows + U',
                    'Windows + P',
                    'Windows + D'
                ],
                correta: 0
            },
            {
                pergunta: 'Qual atalho abre o menu de configurações rápidas?',
                alternativas: [
                    'Windows + A',
                    'Windows + X',
                    'Windows + S',
                    'Windows + C'
                ],
                correta: 1
            },
            {
                pergunta: 'Como fazer screenshot da tela inteira?',
                alternativas: [
                    'Print Screen',
                    'Ctrl + P',
                    'Alt + Print',
                    'Windows + P'
                ],
                correta: 0
            },
            {
                pergunta: 'Qual atalho refaz uma ação desfeita?',
                alternativas: [
                    'Ctrl + Z',
                    'Ctrl + Y',
                    'Ctrl + R',
                    'Ctrl + F'
                ],
                correta: 1
            },
            {
                pergunta: 'Como selecionar tudo em um documento?',
                alternativas: [
                    'Ctrl + T',
                    'Ctrl + S',
                    'Ctrl + A',
                    'Ctrl + E'
                ],
                correta: 2
            },
            {
                pergunta: 'Qual atalho abre a busca do Windows?',
                alternativas: [
                    'Windows + S',
                    'Windows + F',
                    'Windows + B',
                    'Windows + A'
                ],
                correta: 0
            },
            {
                pergunta: 'Como fechar a janela ativa?',
                alternativas: [
                    'Ctrl + F4',
                    'Alt + F4',
                    'Shift + F4',
                    'Windows + F4'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual atalho para abrir uma nova aba no navegador?',
                alternativas: [
                    'Ctrl + N',
                    'Ctrl + T',
                    'Ctrl + W',
                    'Ctrl + Tab'
                ],
                correta: 1
            }
        ]
    },
    {
        id: 'glossario',
        titulo: 'Glossário de Informática',
        descricao: 'Dicionário completo de termos técnicos da Informática',
        icone: 'fas fa-book-open',
        exercicios: [
            {
                pergunta: 'O que é CPU?',
                alternativas: [
                    'Uma unidade de armazenamento',
                    'Unidade Central de Processamento - o processador do computador',
                    'Um tipo de memória',
                    'Um programa'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é GB?',
                alternativas: [
                    'Uma velocidade de processador',
                    'Um tipo de arquivo',
                    'Gigabyte - unidade de medida de armazenamento',
                    'Um programa'
                ],
                correta: 2
            },
            {
                pergunta: 'O que é URL?',
                alternativas: [
                    'Um tipo de arquivo',
                    'Um programa',
                    'Localizador de Recursos Uniforme - endereço de página web',
                    'Um navegador'
                ],
                correta: 2
            },
            {
                pergunta: 'O que é download?',
                alternativas: [
                    'Enviar arquivos para a internet',
                    'Baixar arquivos da internet para seu computador',
                    'Um tipo de arquivo',
                    'Um programa'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é upload?',
                alternativas: [
                    'Baixar arquivos da internet',
                    'Enviar arquivos para a internet',
                    'Um tipo de arquivo',
                    'Um programa'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é ícone?',
                alternativas: [
                    'Um programa',
                    'Um tipo de arquivo',
                    'Uma pequena imagem que representa um programa ou arquivo',
                    'Um navegador'
                ],
                correta: 2
            },
            {
                pergunta: 'O que é cache?',
                alternativas: [
                    'Um tipo de vírus',
                    'Um programa',
                    'Memória temporária que armazena dados para acesso rápido',
                    'Um arquivo'
                ],
                correta: 2
            },
            {
                pergunta: 'O que é plugin?',
                alternativas: [
                    'Um tipo de arquivo',
                    'Um módulo que adiciona funcionalidades a um programa',
                    'Um navegador',
                    'Um tipo de vírus'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é streaming?',
                alternativas: [
                    'Baixar arquivos permanentemente',
                    'Transmissão contínua de áudio/vídeo pela internet',
                    'Um tipo de vírus',
                    'Um programa antivírus'
                ],
                correta: 1
            },
            {
                pergunta: 'O que significa USB?',
                alternativas: [
                    'Universal Serial Bus - barramento serial universal',
                    'United System Base',
                    'User Security Block',
                    'Ultimate Storage Backup'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é pixel?',
                alternativas: [
                    'Um programa',
                    'Menor ponto de imagem em uma tela',
                    'Um tipo de arquivo',
                    'Uma placa de vídeo'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é localhost?',
                alternativas: [
                    'Um servidor na internet',
                    'Endereço que aponta para o próprio computador (127.0.0.1)',
                    'Um tipo de vírus',
                    'Uma rede social'
                ],
                correta: 1
            },
            {
                pergunta: 'O que significa API?',
                alternativas: [
                    'Application Programming Interface - interface de programação',
                    'Advanced Protocol Internet',
                    'Automatic Processing Information',
                    'Applied Program Integration'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é encoder?',
                alternativas: [
                    'Um tipo de vírus',
                    'Programa que converte arquivos de um formato para outro',
                    'Um navegador',
                    'Uma placa de rede'
                ],
                correta: 1
            },
            {
                pergunta: 'O que significa GUI?',
                alternativas: [
                    'General User Internet',
                    'Graphical User Interface - interface gráfica do usuário',
                    'Global Universal Integration',
                    'Generic Upload Interface'
                ],
                correta: 1
            }
        ]
    },
    
    // ============================================
    // MÓDULOS AVANÇADOS - CURSO COMPLETO 6 MESES
    // ============================================
    
    {
        id: 'redes-computadores',
        titulo: 'Redes de Computadores',
        descricao: 'LAN, WAN, IP, protocolos e configuração de redes',
        icone: 'fas fa-network-wired',
        exercicios: [
            {
                pergunta: 'O que é uma LAN?',
                alternativas: [
                    'Uma rede mundial',
                    'Uma rede local (casa, escritório)',
                    'Um tipo de vírus',
                    'Um navegador'
                ],
                correta: 1
            },
            {
                pergunta: 'O que faz um roteador?',
                alternativas: [
                    'Armazena arquivos',
                    'Conecta diferentes redes e roteia pacotes',
                    'Imprime documentos',
                    'Cria backups'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é endereço IP?',
                alternativas: [
                    'Um tipo de arquivo',
                    'Identificador numérico de dispositivo na rede',
                    'Um programa',
                    'Um vírus'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual é um protocolo da Internet?',
                alternativas: [
                    'TCP/IP',
                    'JPEG',
                    'MP3',
                    'DOC'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é DNS?',
                alternativas: [
                    'Um antivírus',
                    'Sistema que converte nomes em endereços IP',
                    'Um tipo de cabo',
                    'Um navegador'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é DHCP?',
                alternativas: [
                    'Atribui IPs automaticamente aos dispositivos',
                    'Um tipo de cabo de rede',
                    'Um antivírus',
                    'Um navegador'
                ],
                correta: 0
            },
            {
                pergunta: 'Qual comando testa conectividade de rede?',
                alternativas: [
                    'copy',
                    'ping',
                    'delete',
                    'format'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é endereço MAC?',
                alternativas: [
                    'Um computador da Apple',
                    'Endereço físico único da placa de rede',
                    'Um programa',
                    'Um tipo de vírus'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é WAN?',
                alternativas: [
                    'Rede local',
                    'Wide Area Network - rede de área ampla',
                    'Um tipo de cabo',
                    'Um navegador'
                ],
                correta: 1
            },
            {
                pergunta: 'Para que serve um switch de rede?',
                alternativas: [
                    'Conectar dispositivos na mesma rede local',
                    'Conectar à internet',
                    'Armazenar arquivos',
                    'Proteger contra vírus'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é máscara de sub-rede?',
                alternativas: [
                    'Um tipo de vírus',
                    'Define qual parte do IP identifica a rede e qual identifica o host',
                    'Um programa',
                    'Um cabo de rede'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual a diferença entre IP estático e dinâmico?',
                alternativas: [
                    'Não há diferença',
                    'Estático é fixo, dinâmico muda automaticamente',
                    'Estático é mais rápido',
                    'Dinâmico é mais seguro'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é gateway padrão?',
                alternativas: [
                    'Um tipo de arquivo',
                    'Roteador que conecta sua rede local à internet',
                    'Um programa',
                    'Um vírus'
                ],
                correta: 1
            },
            {
                pergunta: 'Para que serve o comando ipconfig?',
                alternativas: [
                    'Deletar arquivos',
                    'Exibir configurações de rede do computador',
                    'Instalar programas',
                    'Formatar disco'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é VoIP?',
                alternativas: [
                    'Um tipo de cabo',
                    'Voice over IP - chamadas de voz pela internet',
                    'Um vírus',
                    'Um navegador'
                ],
                correta: 1
            }
        ]
    },
    {
        id: 'cloud-computing',
        titulo: 'Cloud Computing (Nuvem)',
        descricao: 'Google Drive, OneDrive, backup na nuvem e armazenamento',
        icone: 'fas fa-cloud',
        exercicios: [
            {
                pergunta: 'O que é Cloud Computing?',
                alternativas: [
                    'Um tipo de vírus',
                    'Armazenamento e processamento em servidores remotos',
                    'Um navegador',
                    'Um antivírus'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual é um serviço de nuvem?',
                alternativas: [
                    'Google Drive',
                    'Paint',
                    'Bloco de Notas',
                    'Calculadora'
                ],
                correta: 0
            },
            {
                pergunta: 'Qual vantagem da nuvem?',
                alternativas: [
                    'Ocupa espaço no HD',
                    'Acesso de qualquer dispositivo conectado',
                    'Funciona sem internet',
                    'Não precisa de senha'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é SaaS?',
                alternativas: [
                    'Um tipo de vírus',
                    'Software como Serviço (Gmail, Office 365)',
                    'Um hardware',
                    'Um cabo de rede'
                ],
                correta: 1
            },
            {
                pergunta: 'Quanto espaço o Google Drive oferece gratis?',
                alternativas: [
                    '1 GB',
                    '5 GB',
                    '15 GB',
                    '100 GB'
                ],
                correta: 2
            },
            {
                pergunta: 'O que é sincronização na nuvem?',
                alternativas: [
                    'Deletar arquivos',
                    'Manter arquivos atualizados em todos os dispositivos',
                    'Um tipo de vírus',
                    'Formatar disco'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual serviço de nuvem da Microsoft?',
                alternativas: [
                    'iCloud',
                    'Google Drive',
                    'OneDrive',
                    'Dropbox'
                ],
                correta: 2
            },
            {
                pergunta: 'Por que fazer backup na nuvem?',
                alternativas: [
                    'Para ocupar espaço',
                    'Proteger dados contra perda de HD local',
                    'Para deixar PC lento',
                    'Não tem vantagem'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é IaaS?',
                alternativas: [
                    'Internet as a Service',
                    'Infrastructure as a Service - infraestrutura como serviço',
                    'Information as a Service',
                    'Integration as a Service'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual desvantagem da nuvem?',
                alternativas: [
                    'Acesso de qualquer lugar',
                    'Depende de conexão com internet',
                    'Backup automático',
                    'Colaboração em tempo real'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é PaaS?',
                alternativas: [
                    'Platform as a Service - plataforma como serviço',
                    'Program as a Service',
                    'Protocol as a Service',
                    'Processing as a Service'
                ],
                correta: 0
            },
            {
                pergunta: 'Qual serviço de nuvem da Apple?',
                alternativas: [
                    'OneDrive',
                    'Google Drive',
                    'iCloud',
                    'Dropbox'
                ],
                correta: 2
            },
            {
                pergunta: 'Como compartilhar arquivo no Google Drive?',
                alternativas: [
                    'Enviar por email',
                    'Botão Compartilhar, definir permissões e gerar link',
                    'Copiar para pendrive',
                    'Imprimir e digitalizar'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é hybrid cloud?',
                alternativas: [
                    'Um tipo de computador',
                    'Combinação de nuvem pública e privada',
                    'Um navegador',
                    'Um vírus'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual vantagem de editar documentos na nuvem?',
                alternativas: [
                    'Ocupa mais espaço',
                    'Várias pessoas podem editar simultaneamente',
                    'É mais lento',
                    'Não tem vantagem'
                ],
                correta: 1
            }
        ]
    },
    {
        id: 'excel-avancado',
        titulo: 'Excel Avançado',
        descricao: 'Fórmulas complexas, tabelas dinâmicas, macros e automação',
        icone: 'fas fa-table',
        exercicios: [
            {
                pergunta: 'O que faz a função VLOOKUP?',
                alternativas: [
                    'Soma valores',
                    'Busca valores em uma tabela',
                    'Deleta dados',
                    'Formata células'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é uma Tabela Dinâmica (Pivot Table)?',
                alternativas: [
                    'Uma tabela que não pode ser editada',
                    'Ferramenta para resumir e analisar grandes conjuntos de dados',
                    'Um tipo de gráfico',
                    'Uma planilha protegida'
                ],
                correta: 1
            },
            {
                pergunta: 'O que são Macros no Excel?',
                alternativas: [
                    'Fórmulas matemáticas',
                    'Sequências de ações automatizadas',
                    'Tipos de gráficos',
                    'Formatação de células'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual fórmula soma valores com condição?',
                alternativas: [
                    'SUM',
                    'SUMIF',
                    'COUNT',
                    'AVERAGE'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é VBA no Excel?',
                alternativas: [
                    'Um tipo de vírus',
                    'Linguagem de programação para automação avançada',
                    'Um formato de arquivo',
                    'Um gráfico'
                ],
                correta: 1
            },
            {
                pergunta: 'Como criar um gráfico no Excel?',
                alternativas: [
                    'Menu Inserir > Gráfico',
                    'Menu Arquivo > Gráfico',
                    'Menu Exibir > Gráfico',
                    'Não é possível'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é formatação condicional?',
                alternativas: [
                    'Deletar células',
                    'Destacar células automaticamente com base em regras',
                    'Proteger planilha',
                    'Imprimir documento'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual atalho para gravar macro?',
                alternativas: [
                    'Ctrl + M',
                    'Alt + F8',
                    'Ctrl + G',
                    'F12'
                ],
                correta: 1
            },
            {
                pergunta: 'O que faz a função COUNTIF?',
                alternativas: [
                    'Soma valores',
                    'Conta células que atendem a um critério',
                    'Multiplica valores',
                    'Busca valores'
                ],
                correta: 1
            },
            {
                pergunta: 'Para que serve a função CONCATENATE?',
                alternativas: [
                    'Deletar células',
                    'Juntar textos de várias células',
                    'Somar números',
                    'Criar gráficos'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é validação de dados no Excel?',
                alternativas: [
                    'Deletar dados',
                    'Restringir tipo de entrada permitida em células',
                    'Formatar células',
                    'Criar gráficos'
                ],
                correta: 1
            },
            {
                pergunta: 'Como proteger uma planilha com senha?',
                alternativas: [
                    'Menu Arquivo > Salvar Como',
                    'Menu Revisar > Proteger Planilha',
                    'Menu Inserir > Senha',
                    'Ctrl + P'
                ],
                correta: 1
            },
            {
                pergunta: 'O que faz a função IF aninhada?',
                alternativas: [
                    'Soma valores',
                    'Permite múltiplas condições uma dentro da outra',
                    'Deleta linhas',
                    'Cria gráficos'
                ],
                correta: 1
            },
            {
                pergunta: 'Para que serve a função INDEX-MATCH?',
                alternativas: [
                    'Deletar dados',
                    'Busca mais flexível que VLOOKUP, em qualquer direção',
                    'Formatar células',
                    'Imprimir planilha'
                ],
                correta: 1
            },
            {
                pergunta: 'Como criar um gráfico dinâmico?',
                alternativas: [
                    'Menu Arquivo > Gráfico',
                    'A partir de uma Tabela Dinâmica',
                    'Ctrl + G',
                    'Não é possível'
                ],
                correta: 1
            }
        ]
    },
    {
        id: 'design-grafico-basico',
        titulo: 'Design Gráfico Básico',
        descricao: 'Canva, cores, tipografia e criação de materiais visuais',
        icone: 'fas fa-paint-brush',
        exercicios: [
            {
                pergunta: 'Quais são os princípios básicos de design?',
                alternativas: [
                    'Apenas cores',
                    'Contraste, Alinhamento, Repetição, Proximidade',
                    'Apenas fontes',
                    'Não existem princípios'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é Canva?',
                alternativas: [
                    'Um antivírus',
                    'Ferramenta online de design gráfico',
                    'Um navegador',
                    'Um jogo'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual formato de imagem tem transparência?',
                alternativas: [
                    'JPG',
                    'PNG',
                    'BMP',
                    'MP3'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é SVG?',
                alternativas: [
                    'Um vírus',
                    'Formato de imagem vetorial escalável',
                    'Um navegador',
                    'Uma fonte'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual a diferença entre fonte serif e sans-serif?',
                alternativas: [
                    'Não há diferença',
                    'Serif tem detalhes decorativos, sans-serif é limpa',
                    'Sans-serif é sempre vermelha',
                    'Serif é apenas para títulos'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é paleta de cores?',
                alternativas: [
                    'Uma ferramenta de pintura',
                    'Conjunto harmonioso de cores para um design',
                    'Um tipo de imagem',
                    'Um programa'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual formato melhor para fotos?',
                alternativas: [
                    'PNG',
                    'SVG',
                    'JPG',
                    'GIF'
                ],
                correta: 2
            },
            {
                pergunta: 'O que é contraste em design?',
                alternativas: [
                    'Usar apenas uma cor',
                    'Diferença visual para destacar elementos',
                    'Deletar imagens',
                    'Tipo de fonte'
                ],
                correta: 1
            },
            {
                pergunta: 'O que são cores complementares?',
                alternativas: [
                    'Cores iguais',
                    'Cores opostas no círculo cromático que criam contraste',
                    'Apenas preto e branco',
                    'Cores inexistentes'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é resolução de imagem (DPI)?',
                alternativas: [
                    'Tamanho do arquivo',
                    'Dots per inch - pontos por polegada',
                    'Um tipo de imagem',
                    'Um programa'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual DPI ideal para impressão de qualidade?',
                alternativas: [
                    '72 DPI',
                    '150 DPI',
                    '300 DPI ou mais',
                    '50 DPI'
                ],
                correta: 2
            },
            {
                pergunta: 'O que é espaço negativo em design?',
                alternativas: [
                    'Um erro',
                    'Área vazia ao redor dos elementos que melhora legibilidade',
                    'Cor preta',
                    'Um tipo de fonte'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é mockup?',
                alternativas: [
                    'Um vírus',
                    'Modelo realista mostrando design aplicado a produto real',
                    'Uma cor',
                    'Uma fonte'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual a diferença entre RGB e CMYK?',
                alternativas: [
                    'Não há diferença',
                    'RGB para telas, CMYK para impressão',
                    'RGB é mais bonito',
                    'CMYK é mais rápido'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é hierarquia visual?',
                alternativas: [
                    'Deletar elementos',
                    'Organizar elementos por ordem de importância visual',
                    'Usar apenas uma cor',
                    'Um tipo de arquivo'
                ],
                correta: 1
            }
        ]
    },
    {
        id: 'python-introducao',
        titulo: 'Introdução ao Python',
        descricao: 'Sintaxe, variáveis, loops, funções e bibliotecas',
        icone: 'fab fa-python',
        exercicios: [
            {
                pergunta: 'Como imprimir "Hello World" em Python?',
                alternativas: [
                    'console.log("Hello World")',
                    'print("Hello World")',
                    'echo "Hello World"',
                    'System.out.println("Hello World")'
                ],
                correta: 1
            },
            {
                pergunta: 'Como criar uma variável em Python?',
                alternativas: [
                    'var nome = "João"',
                    'nome = "João"',
                    'let nome = "João"',
                    'const nome = "João"'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual estrutura cria um loop de 1 a 10?',
                alternativas: [
                    'for i in range(1, 11):',
                    'while (i < 10)',
                    'loop 10 times',
                    'repeat 10'
                ],
                correta: 0
            },
            {
                pergunta: 'Como definir uma função em Python?',
                alternativas: [
                    'function nome()',
                    'def nome():',
                    'func nome()',
                    'create nome()'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é uma lista em Python?',
                alternativas: [
                    'Um tipo de loop',
                    'Estrutura que armazena múltiplos valores',
                    'Um arquivo',
                    'Uma variável'
                ],
                correta: 1
            },
            {
                pergunta: 'Como importar uma biblioteca?',
                alternativas: [
                    'import nome',
                    'include nome',
                    'require nome',
                    'use nome'
                ],
                correta: 0
            },
            {
                pergunta: 'Qual símbolo indica comentário em Python?',
                alternativas: [
                    '//',
                    '#',
                    '/*',
                    '--'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é indentação em Python?',
                alternativas: [
                    'Um erro',
                    'Espaços/tabs que definem blocos de código',
                    'Uma variável',
                    'Um loop'
                ],
                correta: 1
            },
            {
                pergunta: 'Como criar um dicionário em Python?',
                alternativas: [
                    'dict = []',
                    'dict = {}',
                    'dict = ()',
                    'dict = <>'
                ],
                correta: 1
            },
            {
                pergunta: 'O que faz o método .append() em listas?',
                alternativas: [
                    'Remove elementos',
                    'Adiciona elemento no final da lista',
                    'Ordena a lista',
                    'Deleta a lista'
                ],
                correta: 1
            },
            {
                pergunta: 'Como ler entrada do usuário em Python?',
                alternativas: [
                    'input()',
                    'read()',
                    'get()',
                    'ask()'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é um módulo em Python?',
                alternativas: [
                    'Um erro',
                    'Arquivo .py contendo funções e variáveis reutilizáveis',
                    'Uma variável',
                    'Um loop'
                ],
                correta: 1
            },
            {
                pergunta: 'Como converter string para inteiro?',
                alternativas: [
                    'int()',
                    'str()',
                    'float()',
                    'convert()'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz o operador % em Python?',
                alternativas: [
                    'Divisão',
                    'Resto da divisão (módulo)',
                    'Multiplicação',
                    'Subtração'
                ],
                correta: 1
            },
            {
                pergunta: 'Como verificar o tamanho de uma lista?',
                alternativas: [
                    'size(lista)',
                    'len(lista)',
                    'count(lista)',
                    'length(lista)'
                ],
                correta: 1
            }
        ]
    },
    {
        id: 'javascript-avancado',
        titulo: 'JavaScript Avançado',
        descricao: 'ES6+, async/await, Promises, APIs e frameworks modernos',
        icone: 'fab fa-js',
        exercicios: [
            {
                pergunta: 'O que é uma Arrow Function?',
                alternativas: [
                    'Um erro',
                    'Sintaxe concisa de função: () => {}',
                    'Um loop',
                    'Uma variável'
                ],
                correta: 1
            },
            {
                pergunta: 'Para que serve async/await?',
                alternativas: [
                    'Deletar arquivos',
                    'Lidar com código assíncrono de forma mais limpa',
                    'Criar loops',
                    'Formatar texto'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é uma Promise?',
                alternativas: [
                    'Uma promessa pessoal',
                    'Objeto que representa eventual conclusão de operação assíncrona',
                    'Um loop',
                    'Uma variável'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual método faz requisições HTTP?',
                alternativas: [
                    'ask()',
                    'fetch()',
                    'get()',
                    'request()'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é React?',
                alternativas: [
                    'Um banco de dados',
                    'Biblioteca JavaScript para interfaces de usuário',
                    'Um antivírus',
                    'Uma linguagem de programação'
                ],
                correta: 1
            },
            {
                pergunta: 'Como selecionar um elemento HTML?',
                alternativas: [
                    'document.querySelector("#id")',
                    'get.element("id")',
                    'select("#id")',
                    'find("id")'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é destructuring em ES6?',
                alternativas: [
                    'Deletar variáveis',
                    'Extrair valores de objetos/arrays: {nome, idade} = pessoa',
                    'Um loop',
                    'Um erro'
                ],
                correta: 1
            },
            {
                pergunta: 'O que são template literals?',
                alternativas: [
                    'Um tipo de arquivo',
                    'Strings com interpolação usando backticks: `Olá ${nome}`',
                    'Um erro',
                    'Uma função'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é closure em JavaScript?',
                alternativas: [
                    'Fechar o navegador',
                    'Função que tem acesso ao escopo externo',
                    'Deletar variáveis',
                    'Um loop'
                ],
                correta: 1
            },
            {
                pergunta: 'Para que serve o método .map()?',
                alternativas: [
                    'Deletar elementos',
                    'Criar novo array transformando cada elemento',
                    'Ordenar array',
                    'Concatenar arrays'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é Event Bubbling?',
                alternativas: [
                    'Um erro',
                    'Propagação de evento do elemento filho para pais',
                    'Uma função',
                    'Um loop'
                ],
                correta: 1
            },
            {
                pergunta: 'O que faz o operador spread (...)? ',
                alternativas: [
                    'Deleta elementos',
                    'Expande arrays/objetos em elementos individuais',
                    'Soma valores',
                    'Cria loops'
                ],
                correta: 1
            },
            {
                pergunta: 'Como adicionar event listener?',
                alternativas: [
                    'element.onClick()',
                    'element.addEventListener("click", funcao)',
                    'element.listen()',
                    'element.on("click")'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é LocalStorage?',
                alternativas: [
                    'Disco rígido',
                    'Armazenamento no navegador que persiste após fechar',
                    'Memória RAM',
                    'Um vírus'
                ],
                correta: 1
            },
            {
                pergunta: 'Para que serve JSON.parse()?',
                alternativas: [
                    'Deletar dados',
                    'Converter string JSON em objeto JavaScript',
                    'Criar strings',
                    'Formatar texto'
                ],
                correta: 1
            }
        ]
    },
    {
        id: 'git-github',
        titulo: 'Git e GitHub',
        descricao: 'Controle de versão, repositórios, branches e colaboração',
        icone: 'fab fa-github',
        exercicios: [
            {
                pergunta: 'O que é Git?',
                alternativas: [
                    'Um navegador',
                    'Sistema de controle de versão distribuído',
                    'Um antivírus',
                    'Uma linguagem'
                ],
                correta: 1
            },
            {
                pergunta: 'O que faz o comando "git commit"?',
                alternativas: [
                    'Deleta arquivos',
                    'Salva uma versão do código com mensagem',
                    'Baixa repositório',
                    'Cria pasta'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é GitHub?',
                alternativas: [
                    'Um jogo',
                    'Plataforma de hospedagem de código com Git',
                    'Um antivírus',
                    'Um navegador'
                ],
                correta: 1
            },
            {
                pergunta: 'Como enviar commits para repositório remoto?',
                alternativas: [
                    'git send',
                    'git push',
                    'git upload',
                    'git sync'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é uma branch?',
                alternativas: [
                    'Um erro',
                    'Ramificação do código para desenvolver features',
                    'Uma pasta',
                    'Um arquivo'
                ],
                correta: 1
            },
            {
                pergunta: 'Como baixar um repositório?',
                alternativas: [
                    'git download',
                    'git clone URL',
                    'git get',
                    'git fetch-all'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é Pull Request?',
                alternativas: [
                    'Um erro',
                    'Proposta de mudança para revisão antes do merge',
                    'Deletar código',
                    'Baixar repositório'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual comando atualiza repositório local?',
                alternativas: [
                    'git pull',
                    'git download',
                    'git sync',
                    'git refresh'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz o git init?',
                alternativas: [
                    'Deleta repositório',
                    'Inicializa novo repositório Git',
                    'Baixa repositório',
                    'Envia commits'
                ],
                correta: 1
            },
            {
                pergunta: 'Como ver histórico de commits?',
                alternativas: [
                    'git history',
                    'git log',
                    'git commits',
                    'git show'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é merge conflict?',
                alternativas: [
                    'Um vírus',
                    'Quando duas branches alteram mesma parte do código',
                    'Um comando',
                    'Um tipo de arquivo'
                ],
                correta: 1
            },
            {
                pergunta: 'Como criar nova branch?',
                alternativas: [
                    'git new branch-name',
                    'git branch branch-name',
                    'git create branch-name',
                    'git add branch-name'
                ],
                correta: 1
            },
            {
                pergunta: 'O que faz git add .?',
                alternativas: [
                    'Deleta tudo',
                    'Prepara todos os arquivos modificados para commit',
                    'Envia para GitHub',
                    'Cria branch'
                ],
                correta: 1
            },
            {
                pergunta: 'Como trocar de branch?',
                alternativas: [
                    'git switch branch-name ou git checkout branch-name',
                    'git change branch-name',
                    'git goto branch-name',
                    'git move branch-name'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é fork no GitHub?',
                alternativas: [
                    'Deletar repositório',
                    'Criar cópia de repositório de outro usuário na sua conta',
                    'Enviar commits',
                    'Baixar arquivos'
                ],
                correta: 1
            }
        ]
    }
];

// Conteúdo teórico de cada módulo
const conteudoModulos = {
    introducao: {
        teoria: [
            {
                titulo: 'O que é Informática?',
                conteudo: 'Informática é a ciência que estuda o processamento automático de dados por meio de computadores. Ela abrange o estudo de hardware, software, sistemas operacionais, redes e segurança.'
            },
            {
                titulo: 'Hardware vs Software',
                conteudo: 'Hardware são as partes físicas que você pode tocar (monitor, teclado, processador), enquanto software são os programas e sistemas operacionais que rodam no computador.'
            },
            {
                titulo: 'Componentes Essenciais',
                conteudo: 'Todo computador possui: Processador (CPU), Memória (RAM), Disco Rígido (HD/SSD), Placa-mãe, Fonte de alimentação e Ventilação.'
            },
            {
                titulo: 'Periféricos',
                conteudo: 'Periféricos são dispositivos conectados ao computador. Podem ser de entrada (mouse, teclado), saída (monitor, impressora) ou entrada/saída (pendrive, webcam).'
            }
        ],
        exemplos: [
            {
                titulo: 'Exemplo: Meu Computador',
                descricao: 'Seu computador tem um processador Intel/AMD (hardware) rodando Windows 10 (software). Você usa o mouse e teclado (periféricos) para interagir com programas.'
            },
            {
                titulo: 'Diferença Prática',
                descricao: 'Quando o computador não está rápido, pode ser problema de hardware (pouca RAM) ou software (muitos programas abertos).'
            }
        ],
        resumo: [
            'Informática = Ciência de processar dados automaticamente',
            'Hardware = Partes físicas do computador',
            'Software = Programas e sistemas operacionais',
            'Periféricos = Dispositivos conectados para entrada/saída',
            'RAM = Memória temporária para programas em execução',
            'HD/SSD = Armazena dados permanentemente',
            'CPU = Processa todas as informações',
            'Placa-mãe = Conecta todos os componentes'
        ]
    },
    'sistemas-operacionais': {
        teoria: [
            {
                titulo: 'O que é Sistema Operacional?',
                conteudo: 'Um sistema operacional (SO) é o software principal que gerencia todo o computador. Ele controla hardware, software, recursos e facilita a comunicação entre você e a máquina.'
            },
            {
                titulo: 'Windows - O SO mais Popular',
                conteudo: 'Windows é o sistema operacional mais usado no mundo. Possui interface amigável, compatibilidade com muitos programas, e múltiplas versões (7, 10, 11).'
            },
            {
                titulo: 'Estrutura da Área de Trabalho',
                conteudo: 'A Área de Trabalho é a primeira tela que você vê, contendo ícones, barra de tarefas, relógio e acesso a programas e arquivos.'
            },
            {
                titulo: 'Gerenciamento de Arquivos',
                conteudo: 'O Windows usa o Explorador de Arquivos para organizar pastas e documentos. Tudo fica em estrutura de diretórios hierárquica.'
            }
        ],
        exemplos: [
            {
                titulo: 'Usando o Windows',
                descricao: 'Clique no ícone do Windows para abrir o menu iniciar, procure por um programa ou documento e abra clicando nele.'
            },
            {
                titulo: 'Organização de Pastas',
                descricao: 'Seus documentos devem estar em C:\\Users\\SeuUsuário\\Documents. Você pode criar subpastas para melhor organização.'
            }
        ],
        resumo: [
            'SO = Interface entre você e o computador',
            'Windows = Sistema Operacional mais popular',
            'Área de Trabalho = Tela inicial do Windows',
            'Barra de Tarefas = Acesso a programas abertos',
            'Menu Iniciar = Acesso a todos os programas',
            'Explorador de Arquivos = Gerencia pastas e documentos',
            'Painel de Controle = Configurações do computador',
            'Partição = Divisão lógica do disco rígido'
        ]
    },
    internet: {
        teoria: [
            {
                titulo: 'A Internet e a Web',
                conteudo: 'A Internet é uma rede global de computadores conectados. A Web é um serviço dentro da Internet que permite compartilhar documentos e informações.'
            },
            {
                titulo: 'Navegadores Web',
                conteudo: 'Navegadores como Chrome, Firefox, Edge e Safari permitem acessar e visualizar páginas web. Todos possuem barra de endereço, histórico e abas.'
            },
            {
                titulo: 'Phishing - O Maior Perigo',
                conteudo: 'Phishing é um ataque onde criminosos fingem ser empresas legítimas para roubar seus dados. Cuidado com emails suspeitos e links desconfiados!'
            },
            {
                titulo: 'Segurança na Internet',
                conteudo: 'Proteja-se usando senhas fortes, verificando certificados SSL, evitando downloads de fontes desconfiadas e mantendo antivírus ativo.'
            }
        ],
        exemplos: [
            {
                titulo: 'Email de Phishing',
                descricao: 'Email falso do seu banco pedindo para "confirmar dados". Tenha certeza: bancos NUNCA pedem senhas por email!'
            },
            {
                titulo: 'Navegação Segura',
                descricao: 'Procure pelo cadeado 🔒 na barra de endereço. Se não tiver, o site não é seguro para informações sensíveis.'
            }
        ],
        resumo: [
            'Internet = Rede global de computadores',
            'Web = Serviço para compartilhar documentos',
            'Navegador = Programa para acessar sites',
            'URL = Endereço de página web (www.site.com)',
            'Phishing = Fraude para roubar dados',
            'SSL/HTTPS = Conexão segura e criptografada',
            'Firewall = Proteção contra ataques de rede',
            'Senha forte = Proteção da conta'
        ]
    },
    office: {
        teoria: [
            {
                titulo: 'Microsoft Word - O Processador de Textos Profissional',
                conteudo: 'O Word é muito mais que um simples digitador! Ele permite criar documentos com formatação avançada: diferentes fontes, tamanhos, cores, estilos de parágrafos, alinhamento, espaçamento entre linhas, recuo de parágrafos e muito mais. Você pode inserir imagens, formas, gráficos SmartArt, tabelas complexas, cabeçalhos e rodapés personalizados. Recursos avançados incluem numeração automática de páginas, sumário automático, notas de rodapé, revisão ortográfica e gramatical em tempo real, controle de alterações para trabalho colaborativo e mala direta para criar documentos personalizados em massa.'
            },
            {
                titulo: 'Microsoft Excel - O Poder das Planilhas',
                conteudo: 'Excel é a ferramenta mais poderosa para trabalhar com números e dados! Uma planilha é composta por células (intersecção de linhas e colunas), onde você insere dados. As FÓRMULAS são o coração do Excel: começam com = e fazem cálculos automáticos. Exemplos: =SUM(A1:A10) soma valores, =AVERAGE(B1:B20) calcula média, =MAX(C1:C50) encontra o maior valor. Você pode criar GRÁFICOS incríveis (pizza, colunas, linhas, barras) que visualizam seus dados. Formatação condicional destaca células automaticamente (ex: notas abaixo de 6 em vermelho). Referências absolutas ($A$1) travam a célula ao copiar fórmulas. Excel é usado em escolas, empresas, análise financeira e muito mais!'
            },
            {
                titulo: 'Microsoft PowerPoint - Apresentações Impactantes',
                conteudo: 'PowerPoint cria apresentações visuais com SLIDES (páginas). Cada slide pode ter título, texto, imagens, vídeos, gráficos, tabelas e formas. LAYOUTS pré-definidos facilitam a organização: Título e Conteúdo, Duas Colunas, Apenas Título, etc. TEMAS dão visual profissional com cores e fontes coordenadas. TRANSIÇÕES são efeitos entre slides (dissolver, empurrar, cortar). ANIMAÇÕES fazem elementos aparecerem de forma interessante (aparecer, voar, girar). Modo Apresentador permite ver anotações enquanto apresenta. Dicas: use pouco texto (frases curtas, não parágrafos), imagens de qualidade, cores harmônicas, fontes grandes (mínimo 24pt), pratique sua fala. PowerPoint é essencial para trabalhos escolares, apresentações profissionais e palestras!'
            },
            {
                titulo: 'Recursos Compartilhados dos Três Programas',
                conteudo: 'Word, Excel e PowerPoint compartilham muitos recursos: Atalhos universais (Ctrl+S salvar, Ctrl+Z desfazer, Ctrl+C copiar, Ctrl+V colar), Faixa de Opções (ribbon) organiza ferramentas por abas (Início, Inserir, Design, etc.), Salvamento automático evita perder trabalho, Salvamento na nuvem (OneDrive) permite acessar de qualquer lugar, Compartilhamento online para trabalho em equipe, Inserir objetos de um programa em outro (colar gráfico Excel no Word), Exportar para PDF para distribuição universal. Todos têm Revisão Ortográfica e opções de impressão completas.'
            },
            {
                titulo: 'Dicas Profissionais e Boas Práticas',
                conteudo: 'NOMES DE ARQUIVO: Use nomes descritivos como "Trabalho-Historia-2024-Final.docx" em vez de "Novo1.docx". ORGANIZAÇÃO: Crie pastas por matéria ou projeto. VERSIONAMENTO: Salve versões importantes com datas (Relatorio-v1, Relatorio-v2). TEMPLATES: Use modelos prontos para poupar tempo. ATALHOS: Aprenda os principais para trabalhar 10x mais rápido. BACKUP: Sempre salve em 2 lugares (PC + nuvem). FORMATAÇÃO: Seja consistente (mesma fonte, mesmo espaçamento). REVISÃO: Sempre revise antes de entregar/imprimir!'
            }
        ],
        exemplos: [
            {
                titulo: 'Word - Trabalho Escolar Profissional',
                descricao: 'Capa com imagem de fundo e título centralizado → Sumário automático gerado pelo Word → Texto justificado, fonte Arial 12pt, espaçamento 1,5 linhas → Inserir imagens com legendas "Figura 1: ..." → Tabela comparativa de dados → Cabeçalho com nome da escola, rodapé com número de páginas → Referências bibliográficas formatadas. Resultado: trabalho impecável e profissional!'
            },
            {
                titulo: 'Excel - Controle de Gastos Mensais',
                descricao: 'Coluna A: Categoria (Alimentação, Transporte, Lazer) → Coluna B: Gasto em R$ → Linha total: =SUM(B2:B10) → Média: =AVERAGE(B2:B10) → Gráfico de pizza mostrando % por categoria → Formatação condicional: gastos acima de R$ 500 em vermelho → Você visualiza onde gasta mais e pode economizar!'
            },
            {
                titulo: 'PowerPoint - Apresentação de Projeto de Ciências',
                descricao: 'Slide 1: Título do projeto com imagem de fundo → Slide 2: Objetivo (3 tópicos com bullet points) → Slide 3: Metodologia com diagrama → Slide 4: Resultados com gráfico do Excel colado → Slide 5: Fotos do experimento em 2 colunas → Slide 6: Conclusão → Slide 7: Agradecimentos. Transição suave entre slides, animação nos títulos aparecerem gradualmente. Total: 7 slides, 5 minutos de apresentação perfeita!'
            },
            {
                titulo: 'Integração Office - Relatório Completo',
                descricao: 'Use Excel para calcular dados e criar gráficos → Copie o gráfico e cole no Word → Use Word para escrever análise dos resultados → Exporte o relatório Word como PDF → Crie apresentação PowerPoint resumindo os pontos principais → Cole mesmos gráficos do Excel no PowerPoint. Três programas trabalhando juntos de forma perfeita!'
            },
            {
                titulo: 'Atalhos que Salvam Tempo no Office',
                descricao: 'Ctrl+N = Novo documento | Ctrl+O = Abrir | Ctrl+S = Salvar | Ctrl+P = Imprimir | Ctrl+Z = Desfazer | Ctrl+Y = Refazer | Ctrl+B = Negrito | Ctrl+I = Itálico | Ctrl+U = Sublinhado | Ctrl+E = Centralizar | Ctrl+L = Alinhar à esquerda | Ctrl+R = Alinhar à direita | Ctrl+F = Localizar | Ctrl+H = Substituir | F7 = Verificar ortografia. Memorize e seja 10x mais rápido!'
            }
        ],
        resumo: [
            'Word = Criar documentos com texto formatado, imagens e tabelas',
            'Excel = Planilhas com cálculos automáticos usando fórmulas',
            'PowerPoint = Apresentações visuais com slides',
            'Fórmula Excel sempre começa com =',
            '=SUM() = Soma valores de um intervalo',
            '=AVERAGE() = Calcula média de valores',
            '=MAX() = Encontra maior valor',
            '=MIN() = Encontra menor valor',
            'Célula = Intersecção de linha e coluna (A1, B5, C10)',
            'Referência absoluta = $A$1 (não muda ao copiar)',
            'Layout = Organização pré-definida de slide',
            'Tema = Conjunto de cores e fontes coordenadas',
            'Transição = Efeito entre slides',
            'Animação = Efeito em elementos do slide',
            'Ctrl+S = Salvar (use sempre!)',
            'Ctrl+Z = Desfazer última ação',
            'Ctrl+B = Negrito | Ctrl+I = Itálico | Ctrl+U = Sublinhado',
            'OneDrive = Salvar na nuvem Microsoft',
            'PDF = Formato universal para compartilhar'
        ]
    },
    seguranca: {
        teoria: [
            {
                titulo: 'O que é um Vírus?',
                conteudo: 'Vírus são programas maliciosos que se replicam e danificam seu sistema. Podem roubar dados, lentificar o computador ou até destruir arquivos.'
            },
            {
                titulo: 'Proteção contra Malware',
                conteudo: 'Use antivírus confiável, mantenha Windows atualizado, ative o Firewall e tenha cuidado ao baixar arquivos e abrir emails suspeitos.'
            },
            {
                titulo: 'Backup - Seu Seguro',
                conteudo: 'Sempre faça backup (cópia) de dados importantes em outro disco ou nuvem. Assim você se protege contra perda de dados.'
            },
            {
                titulo: 'Privacidade Online',
                conteudo: 'Cuidado com informações que compartilha. Não divulgue senhas, dados bancários ou pessoais em sites desconfiados.'
            }
        ],
        exemplos: [
            {
                titulo: 'Um Backup Eficaz',
                descricao: 'Você salva seus documentos no Google Drive ou OneDrive. Se o computador falha, você recupera tudo facilmente.'
            },
            {
                titulo: 'Proteção em WiFi Público',
                descricao: 'Em um café, evite acessar seu banco pela WiFi pública. Melhor usar sua conexão móvel para operações sensíveis.'
            }
        ],
        resumo: [
            'Vírus = Programa malicioso que se replica',
            'Malware = Software malicioso genérico',
            'Antivírus = Programa que protege contra vírus',
            'Backup = Cópia de segurança de dados',
            'Criptografia = Codificar dados para proteção',
            'Firewall = Bloqueador de acessos não autorizados',
            '2FA = Autenticação com dois fatores (mais seguro)',
            'WiFi Público = Alto risco de interceptação'
        ]
    },
    logica: {
        teoria: [
            {
                titulo: 'O que é Programação? Falando com o Computador',
                conteudo: 'Programação é a arte de dar instruções precisas para o computador executar tarefas. O computador não pensa sozinho - ele segue EXATAMENTE o que você manda! Um programa é uma sequência de comandos escritos em uma linguagem que o computador entende. Pense assim: você é o diretor de cinema dando ordens para um ator (computador) que obedece tudo ao pé da letra. Programar desenvolve raciocínio lógico, resolução de problemas e pensamento estruturado. Linguagens populares: Python (fácil para iniciantes), JavaScript (web), Java (empresas), C++ (jogos), Scratch (visual para crianças). Todo aplicativo, jogo, site que você usa foi programado por alguém!'
            },
            {
                titulo: 'Variáveis - As Caixinhas de Guardar Valores',
                conteudo: 'Variável é como uma CAIXINHA com um NOME onde você guarda um VALOR. Exemplo: idade = 15 (caixinha "idade" guarda número 15). nome = "Maria" (caixinha "nome" guarda texto "Maria"). aprovado = verdadeiro (caixinha "aprovado" guarda true/false). TIPOS DE DADOS: Número inteiro (10, -5, 0), Número decimal (3.14, -2.5), Texto/String ("Olá", "João"), Booleano (verdadeiro/falso), Array/Lista ([1,2,3,4,5]). Você pode MUDAR o valor: idade = 15, depois idade = 16 (fez aniversário!). Variáveis são FUNDAMENTAIS em toda programação - sem elas, não dá para armazenar e manipular informações!'
            },
            {
                titulo: 'Estruturas de Decisão - IF/ELSE: Fazendo Escolhas',
                conteudo: 'Programas precisam tomar DECISÕES! IF (SE) é a estrutura que permite isso. Lógica: SE condição é verdadeira ENTÃO execute isto SENÃO execute aquilo. Exemplo prático: SE idade >= 18 ENTÃO "Pode dirigir" SENÃO "Ainda não pode dirigir". SE nota >= 6 ENTÃO "Aprovado" SENÃO "Reprovado". SE está chovendo ENTÃO "Leve guarda-chuva" SENÃO "Leve óculos de sol". Operadores de comparação: == (igual), != (diferente), > (maior), < (menor), >= (maior ou igual), <= (menor ou igual). Operadores lógicos: E (AND, ambas condições verdadeiras), OU (OR, pelo menos uma verdadeira), NÃO (NOT, inverte). Exemplo complexo: SE (idade >= 18 E temCNH == verdadeiro) ENTÃO "Pode dirigir" SENÃO "Não pode". IF/ELSE está em TODO programa que você usa!'
            },
            {
                titulo: 'Loops - Repetindo Ações: FOR e WHILE',
                conteudo: 'LOOPS fazem o computador REPETIR ações - essencial para não escrever o mesmo código 1000 vezes! Loop FOR: repete um NÚMERO ESPECÍFICO de vezes. Exemplo: PARA i DE 1 ATÉ 10 FAÇA (imprima i) - resultado: 1,2,3,4,5,6,7,8,9,10. Loop WHILE: repete ENQUANTO uma CONDIÇÃO for verdadeira. Exemplo: ENQUANTO (senha incorreta) FAÇA (pede senha novamente). Quando usar FOR? Quando sabe quantas vezes vai repetir. Quando usar WHILE? Quando não sabe (depende de uma condição). Exemplo real: Instagram mostra suas 50 últimas fotos usando loop FOR de 1 a 50. Jogo verifica colisões usando WHILE (enquanto jogo rodando). Loops economizam MILHARES de linhas de código!'
            },
            {
                titulo: 'Algoritmos - Receitas para Resolver Problemas',
                conteudo: 'ALGORITMO é uma sequência de passos para resolver um problema - como uma RECEITA de bolo! Exemplo: Algoritmo para fazer miojo: 1) Ferva 600ml de água 2) Adicione macarrão 3) Aguarde 3 minutos 4) Adicione tempero 5) Mexa 6) Sirva. Algoritmo para achar maior número em lista: 1) Comece com primeiro número como "maior" 2) Para cada número seguinte: SE número > maior ENTÃO maior = número 3) Fim: retorne "maior". Fluxograma desenha algoritmo visualmente com formas: Retângulo = ação, Losango = decisão, Setas = fluxo. Pseudocódigo escreve algoritmo em português estruturado ANTES de programar. Pensar em algoritmos desenvolve lógica mesmo SEM programar!'
            }
        ],
        exemplos: [
            {
                titulo: 'Exemplo Completo: Calculadora de Média Escolar',
                descricao: 'ALGORITMO: 1) Variáveis: nota1, nota2, nota3, media. 2) Receba 3 notas do usuário. 3) Calcule: media = (nota1 + nota2 + nota3) / 3. 4) Decisão: SE media >= 6 ENTÃO "Aprovado! Média: [media]" SENÃO "Reprovado! Média: [media]". CÓDIGO (Python): nota1 = float(input("Nota 1: ")) / nota2 = float(input("Nota 2: ")) / nota3 = float(input("Nota 3: ")) / media = (nota1 + nota2 + nota3) / 3 / if media >= 6: print(f"Aprovado! Média: {media}") else: print(f"Reprovado! Média: {media}"). Simples, prático, útil!'
            },
            {
                titulo: 'Exemplo: Tabuada com Loop FOR',
                descricao: 'Objetivo: Imprimir tabuada do 5 (5x1 até 5x10). SEM loop: print("5 x 1 = 5") / print("5 x 2 = 10") ... (10 linhas!). COM loop: for i in range(1, 11): print(f"5 x {i} = {5*i}"). ECONOMIA: 1 linha em vez de 10! Resultado: 5 x 1 = 5 / 5 x 2 = 10 / 5 x 3 = 15 ... até 5 x 10 = 50. Loops são PODEROSOS!'
            },
            {
                titulo: 'Exemplo: Jogo de Adivinhação',
                descricao: 'ALGORITMO: 1) Computador escolhe número aleatório de 1 a 100. 2) ENQUANTO não acertou: pede palpite do jogador. 3) SE palpite < número: "Muito baixo!" 4) SENÃO SE palpite > número: "Muito alto!" 5) SENÃO: "ACERTOU! Parabéns!". CÓDIGO usa variáveis (numero_secreto, palpite, tentativas), loop WHILE (enquanto não acertou), IF/ELSE (comparações). Jogo divertido feito com lógica simples!'
            },
            {
                titulo: 'Exemplo Cotidiano: Semáforo Inteligente',
                descricao: 'Lógica de semáforo: SE (horário entre 22h e 6h) E (nenhum carro detectado) ENTÃO piscar amarelo. SENÃO: ciclo normal (verde 30s, amarelo 5s, vermelho 35s). Loop infinito WHILE (verdadeiro): verifica condições e muda luzes. Sensores são VARIÁVEIS (tem_carro, horario_atual). TODA tecnologia ao seu redor usa programação!'
            },
            {
                titulo: 'Desafio Mental: Trocar Valores de Variáveis',
                descricao: 'Problema: a = 5, b = 10. Como trocar? (a vira 10, b vira 5). ERRADO: a = b / b = a (ambos ficam 10!). CERTO: Usa variável auxiliar! temp = a / a = b / b = temp. Resultado: a = 10, b = 5. Esse raciocínio treina lógica de programação!'
            }
        ],
        resumo: [
            'Programação = Dar instruções precisas ao computador',
            'Algoritmo = Sequência de passos para resolver problema (como receita)',
            'Variável = Caixinha nomeada que guarda um valor',
            'Tipos: Número (10), Texto ("olá"), Booleano (true/false)',
            'IF/ELSE = Estrutura de decisão (se/senão)',
            'Operadores: == (igual), > (maior), < (menor), >= , <=',
            'Operadores lógicos: E (AND), OU (OR), NÃO (NOT)',
            'Loop FOR = Repete N vezes (quantidade definida)',
            'Loop WHILE = Repete enquanto condição verdadeira',
            'Array/Lista = Conjunto de valores [1,2,3,4,5]',
            'Função = Bloco de código reutilizável',
            'Fluxograma = Desenho visual do algoritmo',
            'Pseudocódigo = Algoritmo em português antes de programar',
            'Linguagens populares: Python, JavaScript, Java, C++'
        ]
    },
    web: {
        teoria: [
            {
                titulo: 'HTML - A Estrutura da Web (O Esqueleto)',
                conteudo: 'HTML (HyperText Markup Language) é a LINGUAGEM que estrutura TODAS as páginas web! Pense assim: HTML é o ESQUELETO da página. Tags são marcadores entre < >: <h1>Título</h1>, <p>Parágrafo</p>, <img src="foto.jpg">. Estrutura básica: <html> (tudo), <head> (metadados), <body> (conteúdo visível). Tags comuns: <h1> a <h6> (títulos, 1 maior), <p> (parágrafo), <a href="link"> (link), <img src="imagem"> (imagem), <div> (container genérico), <span> (inline), <ul>/<li> (lista), <table> (tabela), <form> (formulário), <button> (botão). Atributos dão propriedades: class, id, src, href, alt, style. Semântica moderna: <header>, <nav>, <main>, <article>, <section>, <footer> deixam código mais legível. HTML NÃO é programação - é MARCAÇÃO!'
            },
            {
                titulo: 'CSS - O Estilo da Web (A Roupa)',
                conteudo: 'CSS (Cascading Style Sheets) define como a página PARECE! Se HTML é o esqueleto, CSS é a ROUPA, MAQUIAGEM e DESIGN. Sintaxe: seletor { propriedade: valor; }. Exemplo: h1 { color: blue; font-size: 32px; }. Seletores: tag (h1), class (.titulo), id (#cabecalho), todos (*). Cores: nome (red), hex (#FF0000), rgb (rgb(255,0,0)). Box Model: margin (espaço externo), border (borda), padding (espaço interno), content (conteúdo). Layout: display (block, inline, flex, grid), position (static, relative, absolute, fixed). Flexbox: layout moderno flexível. Grid: layout bidimensional poderoso. Responsivo: @media queries adaptam para celular. Frameworks: Bootstrap, Tailwind facilitam estilização. CSS transforma página simples em OBRA DE ARTE!'
            },
            {
                titulo: 'JavaScript - A Inteligência da Web (O Cérebro)',
                conteudo: 'JavaScript é a LINGUAGEM DE PROGRAMAÇÃO da web que dá VIDA às páginas! Se HTML é esqueleto e CSS é roupa, JS é o CÉREBRO. Com JS você: valida formulários (senha forte?), cria animações, responde a cliques, carrega conteúdo sem recarregar página (AJAX), cria jogos no navegador, manipula DOM (Document Object Model - estrutura da página). Exemplo: document.getElementById("botao").addEventListener("click", funcao); - quando clica no botão, executa função! Variáveis: let nome = "João"; const idade = 15; var antigo = "evite usar". Funções: function somar(a, b) { return a + b; }. Arrow functions: const somar = (a, b) => a + b; (moderno!). Eventos: click, hover, submit, keypress. Bibliotecas: jQuery (antiga), React (moderna), Vue, Angular. JavaScript está em TODO site moderno!'
            },
            {
                titulo: 'Como a Web Funciona - Entendendo a Mágica',
                conteudo: 'Processo completo: 1) Você digita URL (www.site.com) no navegador. 2) DNS traduz nome em IP (192.168.0.1). 3) Navegador envia REQUISIÇÃO HTTP ao servidor. 4) Servidor processa e retorna RESPOSTA: arquivos HTML, CSS, JS, imagens. 5) Navegador RENDERIZA: interpreta HTML (estrutura), aplica CSS (visual), executa JS (interatividade). 6) Página aparece na sua tela! Protocolos: HTTP (inseguro), HTTPS (seguro com SSL). Cliente-Servidor: Seu navegador = cliente, computador remoto = servidor. Front-end: o que você VÊ (HTML/CSS/JS). Back-end: servidor, banco de dados (PHP, Python, Node.js). Full-stack: programador que faz tudo! APIs conectam front e back. Cada clique seu = nova requisição ao servidor (às vezes). Web moderna usa SPAs (Single Page Applications) que carregam uma vez só!'
            },
            {
                titulo: 'Ferramentas e Boas Práticas para Web Design',
                conteudo: 'Editores de código: VS Code (melhor!), Sublime Text, Atom, Notepad++. Navegadores: Chrome (DevTools poderoso), Firefox, Safari, Edge. Inspecionar elemento: Clique direito > Inspecionar para ver código de QUALQUER site (aprenda assim!). Validadores: W3C valida HTML/CSS. Hospedagem: GitHub Pages (grátis), Netlify, Vercel. Domínio: .com, .br (pago). Design Responsivo: ESSENCIAL! 60% dos acessos são mobile. Mobile-first: projete para celular PRIMEIRO. Performance: minimize arquivos, otimize imagens, use CDN. SEO (Search Engine Optimization): títulos claros, meta tags, URLs amigáveis para Google ranquear bem. Acessibilidade: alt em imagens, contraste bom, navegação por teclado. Versionamento: Git/GitHub guarda histórico de mudanças. Sempre: valide código, teste em vários navegadores, otimize velocidade!'
            }
        ],
        exemplos: [
            {
                titulo: 'HTML - Estrutura Completa de Página Simples',
                descricao: '<!DOCTYPE html> <html lang="pt-BR"> <head> <meta charset="UTF-8"> <title>Minha Página</title> <link rel="stylesheet" href="estilo.css"> </head> <body> <header> <h1>Meu Site Incrível</h1> <nav> <a href="#home">Home</a> <a href="#sobre">Sobre</a> </nav> </header> <main> <section> <h2>Bem-vindo!</h2> <p>Este é meu primeiro site.</p> <img src="foto.jpg" alt="Minha foto"> </section> </main> <footer> <p>&copy; 2024 - Todos os direitos reservados</p> </footer> </body> </html> - Página COMPLETA e PROFISSIONAL!'
            },
            {
                titulo: 'CSS - Estilizando com Classe e Beleza',
                descricao: 'body { font-family: Arial; background: #f0f0f0; margin: 0; } header { background: #333; color: white; padding: 20px; text-align: center; } h1 { font-size: 2.5em; margin: 0; } nav a { color: white; text-decoration: none; margin: 0 15px; } nav a:hover { color: #ff0000; } main { max-width: 800px; margin: 20px auto; padding: 20px; background: white; box-shadow: 0 0 10px rgba(0,0,0,0.1); } footer { text-align: center; padding: 10px; background: #333; color: white; margin-top: 20px; } - Site LINDO com pouco código!'
            },
            {
                titulo: 'JavaScript - Botão Interativo com Contador',
                descricao: 'HTML: <button id="btn">Cliques: <span id="contador">0</span></button>. JavaScript: let clicks = 0; const btn = document.getElementById("btn"); const contador = document.getElementById("contador"); btn.addEventListener("click", function() { clicks++; contador.textContent = clicks; if(clicks >= 10) { alert("Você clicou 10 vezes! Parabéns!"); } }); - Cada clique aumenta contador, ao chegar em 10 mostra alerta! INTERATIVIDADE PURA!'
            },
            {
                titulo: 'Projeto Completo: Formulário de Contato Validado',
                descricao: 'HTML: formulário com nome, email, mensagem. CSS: estilização bonita, cores harmônicas. JavaScript: valida se campos estão preenchidos, valida formato de email (regex), mostra mensagem de erro em vermelho ou sucesso em verde, limpa formulário após envio. Exemplo validação email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) - verifica se tem @ e ponto. Ao clicar "Enviar": if (nome && emailValido && mensagem) { alert("Mensagem enviada!"); } else { alert("Preencha todos os campos!"); } - Formulário PROFISSIONAL e FUNCIONAL!'
            },
            {
                titulo: 'Design Responsivo - Mobile First',
                descricao: 'CSS Mobile (padrão, telas pequenas): .container { width: 100%; padding: 10px; } .menu { display: block; } @media (min-width: 768px) { /* Tablet */ .container { width: 750px; margin: 0 auto; } } @media (min-width: 1024px) { /* Desktop */ .container { width: 960px; } .menu { display: flex; } } - Uma página que funciona PERFEITAMENTE em celular, tablet E desktop! Magic!'
            }
        ],
        resumo: [
            'HTML = Estrutura/Esqueleto da página web',
            'CSS = Estilo/Visual da página',
            'JavaScript = Interatividade/Comportamento',
            'Tag HTML = Marcador entre <tag></tag>',
            'Atributo = Propriedade adicional (class, id, src)',
            'Seletor CSS = Escolhe elementos para estilizar',
            'Box Model = margin, border, padding, content',
            'Flexbox/Grid = Layouts modernos poderosos',
            'Responsivo = Adapta a celular/tablet/desktop',
            '@media query = CSS para diferentes tamanhos',
            'DOM = Estrutura da página que JS manipula',
            'Event Listener = JS escuta ações do usuário',
            'Front-end = Cliente (navegador)',
            'Back-end = Servidor (banco de dados)',
            'VS Code = Melhor editor para programar web',
            'DevTools = F12 no navegador para inspecionar código',
            'GitHub Pages = Hospedar site grátis',
            'Bootstrap/Tailwind = Frameworks CSS',
            'React/Vue/Angular = Frameworks JavaScript modernos'
        ]
    },
    'boas-praticas': {
        teoria: [
            {
                titulo: 'Ergonomia - Saúde Primeiro',
                conteudo: 'Postura correta, altura de tela apropriada, iluminação adequada e pausas frequentes protegem sua saúde. Não é só sobre conforto!'
            },
            {
                titulo: 'Cuidados com Hardware',
                conteudo: 'Mantenha ventilação clara, limite o pó, faça limpeza periódica, evite umidade e calor extremo. Hardware dura mais assim!'
            },
            {
                titulo: 'Organização de Arquivos',
                conteudo: 'Crie pastas estruturadas, nomeie arquivos descritivamente e mantenha backups. Encontrar arquivos fica fácil assim.'
            },
            {
                titulo: 'Segurança do Dados',
                conteudo: 'Faça backups regulares, use senhas fortes, ative antivírus e atualizações. Seus dados são valiosos!'
            }
        ],
        exemplos: [
            {
                titulo: 'Postura Correta',
                descricao: 'Sentado com costas retas, pés no chão, braços em 90°, monitor na altura dos olhos, a 50cm de distância.'
            },
            {
                titulo: 'Organização Ideal',
                descricao: 'Documentos > Trabalho > 2024 > Projetos > Projeto A. Pastas bem hierarquizadas, nomes claros.'
            }
        ],
        resumo: [
            'Postura = Costas retas, pés no chão, braços relaxados',
            'Distância = Monitor a 50-60cm dos olhos',
            'Pausas = 15 min a cada hora de uso',
            'Iluminação = Luz natural ou adequada para evitar reflexos',
            'Limpeza = Hardware sem pó, ventilação livre',
            'Organização = Pastas bem estruturadas',
            'Backup = Cópia de dados regularmente',
            'Antivírus = Sempre ativo e atualizado'
        ]
    },
    atalhos: {
        teoria: [
            {
                titulo: 'Por que Usar Atalhos?',
                conteudo: 'Atalhos de teclado economizam tempo e tornam você mais produtivo. Em vez de vários cliques, uma combinação rápida!'
            },
            {
                titulo: 'Atalhos Essenciais',
                conteudo: 'Ctrl+C (copiar), Ctrl+V (colar), Ctrl+Z (desfazer), Ctrl+S (salvar) são os mais usados em qualquer programa.'
            },
            {
                titulo: 'Atalhos do Windows',
                conteudo: 'Windows+E (Explorador), Windows+D (Área de Trabalho), Alt+Tab (trocar janelas), Windows+L (bloquear).'
            },
            {
                titulo: 'Atalhos de Texto',
                conteudo: 'Ctrl+A (selecionar tudo), Ctrl+X (cortar), Ctrl+Home (início do documento), Ctrl+End (final do documento).'
            }
        ],
        exemplos: [
            {
                titulo: 'Copiar e Colar Rápido',
                descricao: 'Ctrl+C para copiar, depois Ctrl+V para colar em outro lugar. Muito mais rápido que clicar em botões!'
            },
            {
                titulo: 'Navegar Rápido',
                descricao: 'Alt+Tab para trocar entre janelas abertas. Windows+E para abrir Explorador. Tudo sem mouse!'
            }
        ],
        resumo: [
            'Ctrl+C = Copiar',
            'Ctrl+X = Cortar',
            'Ctrl+V = Colar',
            'Ctrl+Z = Desfazer',
            'Ctrl+Y = Refazer',
            'Ctrl+A = Selecionar tudo',
            'Ctrl+S = Salvar',
            'Windows+E = Explorador de Arquivos',
            'Windows+D = Mostrar Área de Trabalho',
            'Windows+L = Bloquear PC',
            'Alt+Tab = Trocar janelas',
            'Ctrl+N = Nova janela'
        ]
    },
    glossario: {
        teoria: [
            {
                titulo: 'Termos Fundamentais',
                conteudo: 'CPU (Processador), RAM (Memória), HD/SSD (Armazenamento), GPU (Placa de vídeo) são componentes essenciais.'
            },
            {
                titulo: 'Unidades de Medida',
                conteudo: '1 Byte = 8 bits, 1 KB = 1.024 Bytes, 1 MB = 1.024 KB, 1 GB = 1.024 MB, 1 TB = 1.024 GB.'
            },
            {
                titulo: 'Termos de Rede',
                conteudo: 'URL (Endereço de site), IP (Identidade do computador), DNS (Converter URL em IP), HTTP/HTTPS (Protocolos de web).'
            },
            {
                titulo: 'Termos de Segurança',
                conteudo: 'Firewall (Bloqueador de ataques), VPN (Conexão segura), 2FA (Autenticação dupla), Backup (Cópia de segurança).'
            }
        ],
        exemplos: [
            {
                titulo: 'Exemplo de Tamanhos',
                descricao: 'Um arquivo de 1 MB é aproximadamente 1 música. 1 GB é aproximadamente 1000 músicas. 1 TB é aproximadamente 1 milhão de músicas.'
            },
            {
                titulo: 'Exemplo de URL',
                descricao: 'https://www.google.com = protocol (https) + www (subdomain) + google (domínio) + .com (extensão).'
            }
        ],
        resumo: [
            'CPU = Processador central',
            'RAM = Memória de acesso rápido',
            'ROM = Memória somente leitura',
            'HD/SSD = Armazenamento permanente',
            'GPU = Processador de gráficos',
            'BIOS = Firmware de inicialização',
            'URL = Endereço web',
            'IP = Identificador de rede',
            'DNS = Serviço de nomes',
            'VPN = Rede privada virtual',
            'FTP = Transferência de arquivos',
            'SMTP/POP3 = Protocolos de email'
        ]
    },
    
    // ============================================
    // MÓDULOS AVANÇADOS - CURSO COMPLETO 6 MESES
    // ============================================
    
    'redes-computadores': {
        teoria: [
            {
                titulo: 'O que são Redes de Computadores?',
                conteudo: 'Redes de computadores permitem que dispositivos se comuniquem e compartilhem recursos. Podem ser LAN (rede local), WAN (rede ampla) ou Internet (rede global).'
            },
            {
                titulo: 'Componentes de Rede',
                conteudo: 'Roteador (conecta redes diferentes), Switch (conecta dispositivos na mesma rede), Modem (converte sinais), Cabo de rede (transmite dados fisicamente).'
            },
            {
                titulo: 'Endereços IP e MAC',
                conteudo: 'IP identifica dispositivos na rede (ex: 192.168.1.1). MAC é o endereço físico único da placa de rede. DHCP atribui IPs automaticamente.'
            },
            {
                titulo: 'Protocolos de Rede',
                conteudo: 'TCP/IP (transmissão confiável), UDP (transmissão rápida), HTTP/HTTPS (web), FTP (transferência de arquivos), DNS (resolução de nomes).'
            }
        ],
        exemplos: [
            {
                titulo: 'Rede Doméstica',
                descricao: 'Internet entra pelo modem, conecta ao roteador WiFi, que distribui para computadores, celulares e TVs. Todos na mesma rede 192.168.1.x'
            },
            {
                titulo: 'Ping e Traceroute',
                descricao: 'ping 8.8.8.8 testa conectividade com Google. tracert google.com mostra o caminho que os dados percorrem.'
            },
            {
                titulo: 'Compartilhamento de Arquivos',
                descricao: 'Dois PCs na mesma rede podem compartilhar pastas. Configure permissões e acesse via \\\\NomePc\\Pasta'
            }
        ],
        resumo: [
            'LAN = Rede local (casa, escritório)',
            'WAN = Rede ampla (entre cidades)',
            'IP = Endereço lógico do dispositivo',
            'MAC = Endereço físico da placa de rede',
            'Roteador = Conecta diferentes redes',
            'Switch = Conecta dispositivos na mesma rede',
            'TCP/IP = Protocolo principal da Internet',
            'DNS = Converte nomes em IPs'
        ]
    },
    
    'cloud-computing': {
        teoria: [
            {
                titulo: 'O que é Cloud Computing?',
                conteudo: 'Cloud (nuvem) permite armazenar dados e executar programas em servidores remotos via Internet, em vez de localmente. Acesse de qualquer lugar!'
            },
            {
                titulo: 'Tipos de Serviços Cloud',
                conteudo: 'IaaS (infraestrutura), PaaS (plataforma) e SaaS (software como serviço). Google Drive, Dropbox e OneDrive são SaaS.'
            },
            {
                titulo: 'Vantagens da Nuvem',
                conteudo: 'Acesso de qualquer dispositivo, backup automático, colaboração em tempo real, escalabilidade, sem necessidade de hardware potente.'
            },
            {
                titulo: 'Segurança na Nuvem',
                conteudo: 'Use autenticação de dois fatores, criptografia ponta-a-ponta, senhas fortes. Cuidado com permissões de compartilhamento.'
            }
        ],
        exemplos: [
            {
                titulo: 'Google Drive',
                descricao: '15 GB gratuitos para armazenar documentos, fotos, vídeos. Edite Google Docs online, compartilhe com colegas em tempo real.'
            },
            {
                titulo: 'OneDrive (Microsoft)',
                descricao: 'Integrado ao Windows. Salve documentos e acesse de qualquer PC. Sincronização automática entre dispositivos.'
            },
            {
                titulo: 'Dropbox',
                descricao: 'Pasta sincronizada automaticamente. Coloque arquivo no PC, aparece no celular instantaneamente. Ideal para backup.'
            }
        ],
        resumo: [
            'Cloud = Armazenamento e apps em servidores remotos',
            'SaaS = Software como serviço (Gmail, Office 365)',
            'IaaS = Infraestrutura como serviço',
            'PaaS = Plataforma como serviço',
            'Google Drive = 15 GB gratuitos',
            'OneDrive = Integrado ao Windows',
            'Dropbox = Sincronização automática',
            'Backup na nuvem = Proteção contra perda de dados'
        ]
    },
    
    'excel-avancado': {
        teoria: [
            {
                titulo: 'Fórmulas Avançadas no Excel',
                conteudo: 'VLOOKUP busca valores em tabelas, IF aninhados para múltiplas condições, SUMIF para soma condicional, INDEX+MATCH para buscas complexas.'
            },
            {
                titulo: 'Tabelas Dinâmicas (Pivot Tables)',
                conteudo: 'Resumem grandes conjuntos de dados em segundos. Agrupe, filtre e analise milhares de linhas sem fórmulas complexas.'
            },
            {
                titulo: 'Gráficos Profissionais',
                conteudo: 'Gráficos de linha (tendências), barras (comparações), pizza (proporções), dispersão (correlações). Customize cores e estilos.'
            },
            {
                titulo: 'Macros e Automação',
                conteudo: 'Macros automatizam tarefas repetitivas. Grave sequências de ações e execute com um clique. VBA permite programação avançada.'
            }
        ],
        exemplos: [
            {
                titulo: 'VLOOKUP Prático',
                descricao: '=VLOOKUP(A2, Tabela!A:B, 2, FALSE) busca o valor de A2 na Tabela e retorna o correspondente da coluna B.'
            },
            {
                titulo: 'Tabela Dinâmica',
                descricao: 'Dados de vendas com 10.000 linhas. Pivot Table resume vendas por mês, produto e vendedor em segundos.'
            },
            {
                titulo: 'Macro de Formatação',
                descricao: 'Grave macro que formata cabeçalhos em negrito, aplica bordas e cores. Execute em qualquer planilha com 1 clique.'
            }
        ],
        resumo: [
            'VLOOKUP = Busca valores em tabelas',
            'SUMIF = Soma condicional',
            'IF aninhado = Múltiplas condições',
            'Pivot Table = Resumo dinâmico de dados',
            'Gráficos = Visualização de informações',
            'Macros = Automação de tarefas',
            'VBA = Programação no Excel',
            'Formatação condicional = Destaque automático'
        ]
    },
    
    'design-grafico-basico': {
        teoria: [
            {
                titulo: 'Princípios de Design',
                conteudo: 'Contraste (destaque), Alinhamento (organização), Repetição (consistência), Proximidade (agrupamento). Fundamentais para design efetivo.'
            },
            {
                titulo: 'Cores e Tipografia',
                conteudo: 'Teoria das cores: primárias, secundárias, complementares. Paleta harmônica. Fontes serifadas (formais) vs sans-serif (modernas). Legibilidade é essencial.'
            },
            {
                titulo: 'Ferramentas de Design',
                conteudo: 'Canva (online, fácil), GIMP (gratuito, poderoso), Adobe Photoshop (profissional, pago), Figma (interfaces, colaborativo).'
            },
            {
                titulo: 'Formatos de Imagem',
                conteudo: 'JPG (fotos, com perda), PNG (transparência, sem perda), SVG (vetorial, escalável), GIF (animações). Use o formato correto!'
            }
        ],
        exemplos: [
            {
                titulo: 'Cartão de Visita no Canva',
                descricao: 'Template pronto, troque textos e cores, adicione logo, export em PNG/PDF. Profissional em 10 minutos!'
            },
            {
                titulo: 'Banner para Redes Sociais',
                descricao: 'Tamanho correto (1200x630 Facebook), cores da marca, texto legível, call-to-action claro. Teste em mobile.'
            },
            {
                titulo: 'Logo Simples',
                descricao: 'Forma geométrica + tipografia clean. SVG para escalar sem perder qualidade. Versões colorida e monocromática.'
            }
        ],
        resumo: [
            'Contraste = Destaque visual',
            'Alinhamento = Organização',
            'Repetição = Consistência',
            'Proximidade = Agrupamento',
            'Paleta de cores = Harmonia visual',
            'Tipografia = Escolha de fontes',
            'JPG = Fotos com compressão',
            'PNG = Imagens com transparência',
            'SVG = Vetorial escalável',
            'Canva = Ferramenta online fácil'
        ]
    },
    
    'python-introducao': {
        teoria: [
            {
                titulo: 'Por que Python?',
                conteudo: 'Python é simples, poderoso e versátil. Usado em web, ciência de dados, automação, IA. Sintaxe clara, comunidade gigante, milhares de bibliotecas.'
            },
            {
                titulo: 'Variáveis e Tipos',
                conteudo: 'Variáveis armazenam valores. name = "João" (string), idade = 25 (int), altura = 1.75 (float), ativo = True (bool). Python detecta tipo automaticamente.'
            },
            {
                titulo: 'Estruturas de Controle',
                conteudo: 'if/elif/else (condições), for (loop com iteração), while (loop com condição), break (sair do loop), continue (próxima iteração).'
            },
            {
                titulo: 'Funções e Módulos',
                conteudo: 'def nomeFuncao(): define função reutilizável. import modulo traz código externo. Organize código em arquivos .py separados.'
            }
        ],
        exemplos: [
            {
                titulo: 'Hello World',
                descricao: 'print("Hello, World!") - seu primeiro programa! Simples assim.'
            },
            {
                titulo: 'Loop FOR',
                descricao: 'for i in range(1, 11): print(i) - imprime números de 1 a 10. range() gera sequência.'
            },
            {
                titulo: 'Função Simples',
                descricao: 'def saudacao(nome): return f"Olá, {nome}!" - chame com saudacao("Maria") retorna "Olá, Maria!"'
            }
        ],
        resumo: [
            'Python = Linguagem versátil e popular',
            'print() = Exibir texto na tela',
            'Variáveis = Armazenam valores',
            'if/else = Decisões condicionais',
            'for = Loop com contagem',
            'while = Loop com condição',
            'def = Define função',
            'import = Importa módulos',
            'range() = Gera sequência numérica',
            'list = Lista de valores'
        ]
    },
    
    'javascript-avancado': {
        teoria: [
            {
                titulo: 'ES6+ Moderno',
                conteudo: 'let/const (escopo), arrow functions (=&gt;), destructuring ({nome, idade} = obj), spread operator (...arr), template literals (`texto ${var}`).'
            },
            {
                titulo: 'Assíncrono e Promises',
                conteudo: 'async/await para código assíncrono limpo. Promises para operações futuras. fetch() para requisições HTTP. then/catch para tratamento.'
            },
            {
                titulo: 'DOM Manipulation',
                conteudo: 'querySelector() seleciona elementos. addEventListener() escuta eventos. createElement() cria elementos. classList manipula classes CSS.'
            },
            {
                titulo: 'Frameworks Modernos',
                conteudo: 'React (componentes), Vue (progressivo), Angular (completo), Svelte (compilado). Escolha depende do projeto e time.'
            }
        ],
        exemplos: [
            {
                titulo: 'Arrow Function',
                descricao: 'const soma = (a, b) =&gt; a + b; - mais conciso que function soma(a,b) { return a+b; }'
            },
            {
                titulo: 'Fetch API',
                descricao: 'fetch("api.com/dados").then(res =&gt; res.json()).then(data =&gt; console.log(data)) - busca dados de API.'
            },
            {
                titulo: 'Event Listener',
                descricao: 'btn.addEventListener("click", () =&gt; alert("Clicou!")) - detecta clique e mostra alerta.'
            }
        ],
        resumo: [
            'let/const = Variáveis com escopo',
            'Arrow function = Sintaxe concisa',
            'async/await = Código assíncrono',
            'Promise = Operação futura',
            'fetch = Requisições HTTP',
            'querySelector = Selecionar elementos DOM',
            'addEventListener = Escutar eventos',
            'React = Framework de componentes',
            'API REST = Interface de programação'
        ]
    },
    
    'git-github': {
        teoria: [
            {
                titulo: 'Controle de Versão com Git',
                conteudo: 'Git rastreia mudanças no código. Commit salva versão, Branch cria ramificação, Merge junta branches. Histórico completo de alterações.'
            },
            {
                titulo: 'GitHub - Repositórios Online',
                conteudo: 'GitHub hospeda repositórios Git na nuvem. Colaboração, Pull Requests, Issues, Actions (CI/CD). Portfólio de desenvolvedores.'
            },
            {
                titulo: 'Workflow Básico',
                conteudo: 'git init (inicializa), git add (prepara), git commit (salva), git push (envia), git pull (baixa). Clone repositórios com git clone.'
            },
            {
                titulo: 'Branches e Colaboração',
                conteudo: 'main/master = branch principal. Crie branch para features (git branch feature). Merge após revisão. Evita conflitos.'
            }
        ],
        exemplos: [
            {
                titulo: 'Primeiro Commit',
                descricao: 'git init, git add ., git commit -m "Initial commit", git remote add origin URL, git push -u origin main'
            },
            {
                titulo: 'Pull Request',
                descricao: 'Crie branch feature, faça commits, push, abra PR no GitHub. Revisão de código, discussão, merge quando aprovado.'
            },
            {
                titulo: 'Resolver Conflito',
                descricao: 'Dois devs editam mesma linha. Git mostra conflito. Escolha versão correta, remove marcadores, commit resolve.'
            }
        ],
        resumo: [
            'Git = Controle de versão distribuído',
            'Commit = Salva versão do código',
            'Branch = Ramificação do código',
            'Merge = Juntar branches',
            'GitHub = Hospedagem de repos',
            'Pull Request = Proposta de mudança',
            'Clone = Copiar repositório',
            'Push = Enviar commits',
            'Pull = Baixar atualizações',
            'README = Documentação do projeto'
        ]
    }
};
