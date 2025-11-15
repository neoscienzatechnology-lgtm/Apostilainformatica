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
            },
            {
                pergunta: 'Qual a função da memória cache?',
                alternativas: [
                    'Armazenar dados permanentemente',
                    'Acelerar o acesso a dados frequentemente usados pelo processador',
                    'Substituir o HD',
                    'Conectar periféricos'
                ],
                correta: 1
            },
            {
                pergunta: 'O que significa "boot" do computador?',
                alternativas: [
                    'Desligar o PC',
                    'Processo de inicialização do sistema operacional',
                    'Formatar o disco',
                    'Instalar programas'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual a diferença entre bit e byte?',
                alternativas: [
                    'Não há diferença',
                    '1 byte = 8 bits',
                    '1 bit = 8 bytes',
                    'São unidades de velocidade'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é um driver?',
                alternativas: [
                    'Um tipo de hardware',
                    'Software que permite ao SO se comunicar com hardware',
                    'Um navegador',
                    'Um jogo'
                ],
                correta: 1
            },
            {
                pergunta: 'Para que serve a placa de som?',
                alternativas: [
                    'Processar vídeos',
                    'Processar e reproduzir áudio',
                    'Armazenar músicas',
                    'Conectar à internet'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é overclock?',
                alternativas: [
                    'Desligar o computador',
                    'Aumentar a velocidade do processador além do padrão',
                    'Atualizar o Windows',
                    'Limpar arquivos temporários'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual componente é responsável pelo armazenamento permanente?',
                alternativas: [
                    'RAM',
                    'Cache',
                    'HD ou SSD',
                    'Processador'
                ],
                correta: 2
            },
            {
                pergunta: 'O que é barramento (BUS)?',
                alternativas: [
                    'Um tipo de transporte',
                    'Via de comunicação entre componentes do PC',
                    'Um software',
                    'Um tipo de memória'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual a função do cooler?',
                alternativas: [
                    'Armazenar dados',
                    'Resfriar componentes como CPU e GPU',
                    'Processar informações',
                    'Conectar à internet'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é USB?',
                alternativas: [
                    'Um tipo de monitor',
                    'Padrão de conexão para periféricos',
                    'Sistema operacional',
                    'Memória RAM'
                ],
                correta: 1
            },
            {
                pergunta: 'Quantos bits tem 1 kilobyte (KB)?',
                alternativas: [
                    '1000 bits',
                    '8000 bits',
                    '1024 bits',
                    '8192 bits'
                ],
                correta: 3
            },
            {
                pergunta: 'O que é firmware?',
                alternativas: [
                    'Um tipo de hardware',
                    'Software permanente gravado em hardware',
                    'Um antivírus',
                    'Uma rede social'
                ],
                correta: 1
            },
            {
                pergunta: 'Para que serve o slot PCIe?',
                alternativas: [
                    'Conectar memória RAM',
                    'Conectar placas de expansão como GPU',
                    'Conectar HD',
                    'Conectar teclado'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é dual channel de memória?',
                alternativas: [
                    'Usar dois HD',
                    'Tecnologia que duplica velocidade de acesso à RAM',
                    'Ter dois processadores',
                    'Dois sistemas operacionais'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual a diferença entre entrada e saída?',
                alternativas: [
                    'Entrada envia dados ao PC, saída recebe do PC',
                    'São a mesma coisa',
                    'Entrada é mais rápida',
                    'Saída é mais cara'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é socket do processador?',
                alternativas: [
                    'Um software',
                    'Encaixe físico da CPU na placa-mãe',
                    'Um tipo de memória',
                    'Um periférico'
                ],
                correta: 1
            },
            {
                pergunta: 'Para que serve a bateria CMOS?',
                alternativas: [
                    'Alimentar o computador inteiro',
                    'Manter configurações da BIOS quando o PC está desligado',
                    'Carregar celular',
                    'Armazenar arquivos'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é clock do processador?',
                alternativas: [
                    'Um relógio',
                    'Frequência de operação medida em GHz',
                    'Tamanho do HD',
                    'Quantidade de RAM'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual a função da ventoinha (fan)?',
                alternativas: [
                    'Fazer barulho',
                    'Circular ar para refrigeração',
                    'Processar dados',
                    'Armazenar informações'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é chipset?',
                alternativas: [
                    'Um tipo de batata frita',
                    'Conjunto de chips que gerenciam comunicação na placa-mãe',
                    'Um jogo',
                    'Uma marca de computador'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual componente determina a resolução máxima do monitor?',
                alternativas: [
                    'RAM',
                    'Placa de vídeo (GPU)',
                    'HD',
                    'Fonte de alimentação'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é memória ROM?',
                alternativas: [
                    'Memória volátil',
                    'Read Only Memory - memória apenas de leitura',
                    'Memória RAM',
                    'Um tipo de HD'
                ],
                correta: 1
            },
            {
                pergunta: 'Para que serve a porta HDMI?',
                alternativas: [
                    'Conectar mouse',
                    'Transmitir áudio e vídeo digital',
                    'Conectar à internet',
                    'Carregar bateria'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é multitarefa?',
                alternativas: [
                    'Ter vários computadores',
                    'Executar múltiplos programas simultaneamente',
                    'Ter várias pessoas usando o PC',
                    'Vários monitores'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual a diferença entre 32 bits e 64 bits?',
                alternativas: [
                    'Velocidade da internet',
                    'Arquitetura do processador e quantidade de RAM suportada',
                    'Tamanho do HD',
                    'Qualidade da imagem'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é benchmark?',
                alternativas: [
                    'Um banco',
                    'Teste de desempenho de hardware',
                    'Um jogo',
                    'Um sistema operacional'
                ],
                correta: 1
            },
            {
                pergunta: 'Para que serve o dissipador de calor?',
                alternativas: [
                    'Esquentar o processador',
                    'Distribuir e dissipar calor dos componentes',
                    'Armazenar dados',
                    'Conectar periféricos'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é taxa de atualização (refresh rate) do monitor?',
                alternativas: [
                    'Tamanho da tela',
                    'Quantas vezes por segundo a imagem é atualizada (Hz)',
                    'Brilho da tela',
                    'Cor da tela'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual a função do gabinete (case)?',
                alternativas: [
                    'Apenas estética',
                    'Proteger e organizar componentes internos',
                    'Processar dados',
                    'Armazenar arquivos'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é POST?',
                alternativas: [
                    'Um tipo de correio',
                    'Power-On Self-Test - teste inicial ao ligar o PC',
                    'Um software',
                    'Uma rede social'
                ],
                correta: 1
            },
            {
                pergunta: 'Para que serve a placa de rede?',
                alternativas: [
                    'Jogar',
                    'Conectar o computador a redes e internet',
                    'Armazenar dados',
                    'Processar vídeos'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é latência?',
                alternativas: [
                    'Tamanho do arquivo',
                    'Tempo de atraso na resposta do sistema',
                    'Velocidade máxima',
                    'Capacidade de armazenamento'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual a diferença entre HDD e SSD em termos de velocidade?',
                alternativas: [
                    'HDD é mais rápido',
                    'SSD é significativamente mais rápido',
                    'São iguais',
                    'Depende da marca'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é throughput?',
                alternativas: [
                    'Um jogo',
                    'Taxa de transferência de dados',
                    'Tamanho da tela',
                    'Tipo de processador'
                ],
                correta: 1
            },
            {
                pergunta: 'Para que serve o slot M.2?',
                alternativas: [
                    'Conectar mouse',
                    'Conectar SSD compacto de alta velocidade',
                    'Conectar monitor',
                    'Conectar impressora'
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
            },
            {
                pergunta: 'Qual a diferença entre suspender e hibernar?',
                alternativas: [
                    'Não há diferença',
                    'Suspender mantém RAM ativa, hibernar salva em disco',
                    'Hibernar é mais rápido',
                    'Suspender desliga o PC'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é a conta de administrador?',
                alternativas: [
                    'Conta de banco',
                    'Conta com permissões totais no sistema',
                    'Conta de email',
                    'Conta de rede social'
                ],
                correta: 1
            },
            {
                pergunta: 'Para que serve o prompt de comando (CMD)?',
                alternativas: [
                    'Jogar',
                    'Executar comandos de texto no Windows',
                    'Navegar na web',
                    'Editar fotos'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é o registro do Windows?',
                alternativas: [
                    'Um programa',
                    'Banco de dados de configurações do sistema',
                    'Uma pasta',
                    'Um jogo'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual atalho minimiza todas as janelas?',
                alternativas: [
                    'Alt + Tab',
                    'Windows + D',
                    'Ctrl + W',
                    'Alt + F4'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é modo de segurança?',
                alternativas: [
                    'Um jogo',
                    'Modo de inicialização com recursos mínimos para diagnosticar problemas',
                    'Um antivírus',
                    'Um navegador'
                ],
                correta: 1
            },
            {
                pergunta: 'Para que serve o Agendador de Tarefas?',
                alternativas: [
                    'Agendar compromissos',
                    'Automatizar execução de programas em horários específicos',
                    'Limpar arquivos',
                    'Navegar na web'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é boot duplo (dual boot)?',
                alternativas: [
                    'Dois computadores',
                    'Ter dois sistemas operacionais instalados',
                    'Dois monitores',
                    'Dois teclados'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual a função do firewall do Windows?',
                alternativas: [
                    'Esquentar o PC',
                    'Proteger contra acessos não autorizados à rede',
                    'Acelerar internet',
                    'Limpar arquivos'
                ],
                correta: 1
            },
            {
                pergunta: 'O que são variáveis de ambiente?',
                alternativas: [
                    'Temperatura do PC',
                    'Configurações que afetam comportamento de programas',
                    'Clima externo',
                    'Sons do sistema'
                ],
                correta: 1
            },
            {
                pergunta: 'Para que serve a restauração do sistema?',
                alternativas: [
                    'Deletar arquivos',
                    'Voltar o sistema a um ponto anterior no tempo',
                    'Instalar jogos',
                    'Navegar na web'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é UAC (Controle de Conta de Usuário)?',
                alternativas: [
                    'Um jogo',
                    'Recurso de segurança que pede confirmação para alterações',
                    'Um navegador',
                    'Uma rede social'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual atalho abre configurações no Windows 10/11?',
                alternativas: [
                    'Windows + I',
                    'Ctrl + S',
                    'Alt + P',
                    'Windows + P'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é swap/arquivo de paginação?',
                alternativas: [
                    'Um programa',
                    'Espaço em disco usado como extensão da RAM',
                    'Um jogo',
                    'Um navegador'
                ],
                correta: 1
            },
            {
                pergunta: 'Para que serve o Visualizador de Eventos?',
                alternativas: [
                    'Ver filmes',
                    'Registrar e visualizar logs do sistema',
                    'Ver fotos',
                    'Jogar'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é indexação de arquivos?',
                alternativas: [
                    'Deletar arquivos',
                    'Criar índice para busca rápida de arquivos',
                    'Copiar arquivos',
                    'Mover arquivos'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual a diferença entre shutdown e restart?',
                alternativas: [
                    'Não há diferença',
                    'Shutdown desliga, restart reinicia o sistema',
                    'Restart é mais lento',
                    'Shutdown apaga arquivos'
                ],
                correta: 1
            },
            {
                pergunta: 'O que são permissões de arquivo?',
                alternativas: [
                    'Preço dos arquivos',
                    'Regras de quem pode ler, escrever ou executar',
                    'Tamanho dos arquivos',
                    'Cor dos ícones'
                ],
                correta: 1
            },
            {
                pergunta: 'Para que serve a ferramenta msconfig?',
                alternativas: [
                    'Jogar',
                    'Configurar inicialização e serviços do Windows',
                    'Editar textos',
                    'Navegar na web'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é um serviço do Windows?',
                alternativas: [
                    'Uma loja',
                    'Programa que roda em segundo plano',
                    'Um jogo',
                    'Um navegador'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual atalho bloqueia o computador?',
                alternativas: [
                    'Windows + L',
                    'Ctrl + L',
                    'Alt + L',
                    'Shift + L'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é formatação rápida vs completa?',
                alternativas: [
                    'São iguais',
                    'Rápida só apaga índice, completa verifica setores defeituosos',
                    'Rápida é melhor',
                    'Completa é mais rápida'
                ],
                correta: 1
            },
            {
                pergunta: 'Para que serve o comando "sfc /scannow"?',
                alternativas: [
                    'Escanear vírus',
                    'Verificar e reparar arquivos do sistema',
                    'Acelerar internet',
                    'Limpar disco'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é Windows Defender?',
                alternativas: [
                    'Um jogo',
                    'Antivírus integrado do Windows',
                    'Um navegador',
                    'Uma pasta'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual a diferença entre pastas do sistema e pastas do usuário?',
                alternativas: [
                    'Não há diferença',
                    'Sistema contém arquivos do Windows, usuário contém arquivos pessoais',
                    'Sistema é menor',
                    'Usuário é protegido'
                ],
                correta: 1
            },
            {
                pergunta: 'O que são bibliotecas no Windows?',
                alternativas: [
                    'Lojas de livros',
                    'Coleções virtuais que agrupam pastas',
                    'Programas de leitura',
                    'Jogos educativos'
                ],
                correta: 1
            },
            {
                pergunta: 'Para que serve o recurso de área de transferência?',
                alternativas: [
                    'Transferir dinheiro',
                    'Armazenar temporariamente dados copiados',
                    'Mover pastas',
                    'Deletar arquivos'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é sistema de arquivos?',
                alternativas: [
                    'Um programa',
                    'Método de organizar e armazenar arquivos (NTFS, FAT32)',
                    'Um navegador',
                    'Um jogo'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual atalho alterna entre janelas abertas?',
                alternativas: [
                    'Alt + Tab',
                    'Ctrl + Tab',
                    'Windows + Tab',
                    'Shift + Tab'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é a Central de Ações?',
                alternativas: [
                    'Um jogo de ação',
                    'Painel de notificações e configurações rápidas',
                    'Um filme',
                    'Um navegador'
                ],
                correta: 1
            },
            {
                pergunta: 'Para que serve o snap (dividir tela)?',
                alternativas: [
                    'Tirar fotos',
                    'Organizar janelas lado a lado automaticamente',
                    'Fazer barulho',
                    'Deletar arquivos'
                ],
                correta: 1
            },
            {
                pergunta: 'O que são áreas de trabalho virtuais?',
                alternativas: [
                    'Computadores virtuais',
                    'Múltiplas áreas de trabalho para organizar janelas',
                    'Jogos online',
                    'Redes sociais'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual a função do Monitor de Recursos?',
                alternativas: [
                    'Ver vídeos',
                    'Monitorar uso detalhado de CPU, RAM, disco e rede',
                    'Monitorar clima',
                    'Ver notícias'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é compactação de arquivos?',
                alternativas: [
                    'Deletar arquivos',
                    'Reduzir tamanho de arquivos para economizar espaço',
                    'Mover arquivos',
                    'Copiar arquivos'
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
            },
            {
                pergunta: 'O que é URL?',
                alternativas: [
                    'Um vírus',
                    'Endereço de um site na internet',
                    'Um programa',
                    'Um tipo de arquivo'
                ],
                correta: 1
            },
            {
                pergunta: 'O que significa HTTPS?',
                alternativas: [
                    'Hyper Text Transfer Protocol Secure - protocolo seguro',
                    'High Technology Protocol System',
                    'Home Text Transfer',
                    'Apenas um erro de digitação'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é download?',
                alternativas: [
                    'Enviar arquivo da internet para o PC',
                    'Baixar arquivo da internet para o PC',
                    'Deletar arquivo',
                    'Copiar texto'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é upload?',
                alternativas: [
                    'Baixar arquivo',
                    'Enviar arquivo do PC para internet',
                    'Deletar arquivo',
                    'Mover pasta'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é um navegador?',
                alternativas: [
                    'Um mapa',
                    'Programa para acessar sites (Chrome, Firefox, Edge)',
                    'Um GPS',
                    'Um jogo'
                ],
                correta: 1
            },
            {
                pergunta: 'O que são favoritos/marcadores?',
                alternativas: [
                    'Sites salvos para acesso rápido',
                    'Vírus de navegador',
                    'Programas especiais',
                    'Arquivos deletados'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é cache do navegador?',
                alternativas: [
                    'Um vírus',
                    'Armazenamento temporário de dados de sites para carregamento rápido',
                    'Um tipo de cookie',
                    'Uma senha'
                ],
                correta: 1
            },
            {
                pergunta: 'Para que serve o gerenciador de senhas?',
                alternativas: [
                    'Hackear contas',
                    'Armazenar e gerar senhas fortes com segurança',
                    'Deletar senhas',
                    'Compartilhar senhas'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é autenticação de dois fatores (2FA)?',
                alternativas: [
                    'Usar duas senhas',
                    'Segurança extra que pede código adicional além da senha',
                    'Dois computadores',
                    'Duas contas'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é spam?',
                alternativas: [
                    'Um alimento',
                    'Emails indesejados e não solicitados',
                    'Um programa útil',
                    'Um tipo de vírus'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é malware?',
                alternativas: [
                    'Um programa bom',
                    'Software malicioso que danifica ou rouba dados',
                    'Um navegador',
                    'Um antivírus'
                ],
                correta: 1
            },
            {
                pergunta: 'Como identificar site falso?',
                alternativas: [
                    'Cor do site',
                    'Verificar URL, ausência de HTTPS, erros de português',
                    'Tamanho da tela',
                    'Tipo de fonte'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é VPN?',
                alternativas: [
                    'Um jogo',
                    'Rede privada virtual que criptografa conexão',
                    'Um vírus',
                    'Uma rede social'
                ],
                correta: 1
            },
            {
                pergunta: 'Por que não usar WiFi público para banco?',
                alternativas: [
                    'É mais lento',
                    'Risco de interceptação de dados sensíveis',
                    'Gasta mais bateria',
                    'Não há problema'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é ransomware?',
                alternativas: [
                    'Um jogo',
                    'Malware que sequestra dados e pede resgate',
                    'Um antivírus',
                    'Um navegador'
                ],
                correta: 1
            },
            {
                pergunta: 'O que fazer se clicar em link suspeito?',
                alternativas: [
                    'Ignorar',
                    'Escanear com antivírus, mudar senhas, monitorar contas',
                    'Desligar internet',
                    'Nada'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é firewall?',
                alternativas: [
                    'Um incêndio',
                    'Barreira de segurança que filtra tráfego de rede',
                    'Um jogo',
                    'Uma parede física'
                ],
                correta: 1
            },
            {
                pergunta: 'Por que não compartilhar senhas?',
                alternativas: [
                    'É proibido por lei',
                    'Compromete segurança e responsabilidade sobre ações',
                    'Não há problema',
                    'Senhas expiram'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é engenharia social?',
                alternativas: [
                    'Uma profissão',
                    'Manipulação psicológica para obter informações',
                    'Uma rede social',
                    'Um curso técnico'
                ],
                correta: 1
            },
            {
                pergunta: 'O que são extensões de navegador?',
                alternativas: [
                    'Vírus',
                    'Complementos que adicionam funcionalidades ao navegador',
                    'Sites',
                    'Programas separados'
                ],
                correta: 1
            },
            {
                pergunta: 'Por que verificar remetente de email?',
                alternativas: [
                    'Por educação',
                    'Evitar golpes de phishing com endereços falsos',
                    'Não é necessário',
                    'Para responder rápido'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é criptografia end-to-end?',
                alternativas: [
                    'Um tipo de cabo',
                    'Mensagens legíveis apenas por remetente e destinatário',
                    'Um programa',
                    'Um jogo'
                ],
                correta: 1
            },
            {
                pergunta: 'O que fazer ao perder celular com apps bancários?',
                alternativas: [
                    'Esperar',
                    'Bloquear apps, mudar senhas, avisar banco imediatamente',
                    'Nada',
                    'Comprar novo celular'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é backup na nuvem?',
                alternativas: [
                    'Guardar dados no céu',
                    'Cópia de segurança em servidores online',
                    'Um tipo de vírus',
                    'Um jogo online'
                ],
                correta: 1
            },
            {
                pergunta: 'Por que desconfiar de promoções "boas demais"?',
                alternativas: [
                    'Inveja',
                    'Podem ser golpes para roubar dados ou dinheiro',
                    'Não há motivo',
                    'São sempre falsas'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é certificado digital?',
                alternativas: [
                    'Um diploma online',
                    'Documento eletrônico que garante autenticidade',
                    'Um jogo',
                    'Uma rede social'
                ],
                correta: 1
            },
            {
                pergunta: 'O que significa cadeado verde no navegador?',
                alternativas: [
                    'Site é verde',
                    'Conexão segura com HTTPS',
                    'Site é lento',
                    'Site é pago'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é adware?',
                alternativas: [
                    'Um anúncio bom',
                    'Software que exibe propagandas indesejadas',
                    'Um navegador',
                    'Um jogo'
                ],
                correta: 1
            },
            {
                pergunta: 'Por que atualizar antivírus regularmente?',
                alternativas: [
                    'Para gastar espaço',
                    'Manter proteção contra novas ameaças',
                    'Não é necessário',
                    'Apenas visual'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é DoS/DDoS?',
                alternativas: [
                    'Dois sistemas operacionais',
                    'Ataque que sobrecarrega servidor para derrubá-lo',
                    'Um programa',
                    'Uma dose de remédio'
                ],
                correta: 1
            },
            {
                pergunta: 'O que fazer antes de vender/doar PC?',
                alternativas: [
                    'Apenas desligar',
                    'Fazer backup e apagar todos os dados completamente',
                    'Nada',
                    'Só tirar a senha'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é política de privacidade?',
                alternativas: [
                    'Lei do governo',
                    'Documento que explica como site usa seus dados',
                    'Um programa',
                    'Uma configuração'
                ],
                correta: 1
            },
            {
                pergunta: 'Por que não baixar programas de sites desconhecidos?',
                alternativas: [
                    'São mais lentos',
                    'Risco de malware e vírus',
                    'Não funcionam',
                    'São pagos'
                ],
                correta: 1
            },
            {
                pergunta: 'O que são permissões de app?',
                alternativas: [
                    'Preços',
                    'Acessos que app pede (câmera, localização, etc)',
                    'Cores do app',
                    'Tamanho do app'
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
            },
            {
                pergunta: 'Como inserir cabeçalho e rodapé no Word?',
                alternativas: [
                    'Menu Inserir > Cabeçalho/Rodapé',
                    'Menu Arquivo > Cabeçalho',
                    'Ctrl + H',
                    'Menu Exibir > Cabeçalho'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz a função COUNT no Excel?',
                alternativas: [
                    'Soma valores',
                    'Conta células com números',
                    'Calcula média',
                    'Multiplica valores'
                ],
                correta: 1
            },
            {
                pergunta: 'Como adicionar animações em slides do PowerPoint?',
                alternativas: [
                    'Menu Animações',
                    'Menu Arquivo',
                    'Menu Exibir',
                    'Menu Inserir'
                ],
                correta: 0
            },
            {
                pergunta: 'Qual atalho seleciona tudo no documento?',
                alternativas: [
                    'Ctrl + T',
                    'Ctrl + A',
                    'Ctrl + S',
                    'Ctrl + E'
                ],
                correta: 1
            },
            {
                pergunta: 'Como criar uma lista numerada no Word?',
                alternativas: [
                    'Menu Página Inicial > Numeração',
                    'Menu Inserir > Lista',
                    'Ctrl + L',
                    'Menu Arquivo > Numeração'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é uma referência relativa no Excel?',
                alternativas: [
                    'Referência que muda ao copiar fórmula',
                    'Referência fixa com $',
                    'Um tipo de gráfico',
                    'Uma função'
                ],
                correta: 0
            },
            {
                pergunta: 'Como inserir um vídeo no PowerPoint?',
                alternativas: [
                    'Menu Inserir > Vídeo',
                    'Menu Arquivo > Vídeo',
                    'Arrastar e soltar apenas',
                    'Não é possível'
                ],
                correta: 0
            },
            {
                pergunta: 'Qual função calcula o maior valor em um intervalo?',
                alternativas: [
                    'MIN',
                    'MAX',
                    'SUM',
                    'AVERAGE'
                ],
                correta: 1
            },
            {
                pergunta: 'Como criar uma tabela de conteúdo automática no Word?',
                alternativas: [
                    'Menu Referências > Sumário',
                    'Menu Inserir > Índice',
                    'Digitar manualmente',
                    'Menu Arquivo > Sumário'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz a função IF no Excel?',
                alternativas: [
                    'Soma valores',
                    'Testa condição e retorna valores diferentes',
                    'Conta células',
                    'Formata células'
                ],
                correta: 1
            },
            {
                pergunta: 'Como duplicar um slide no PowerPoint?',
                alternativas: [
                    'Clicar com botão direito > Duplicar Slide',
                    'Ctrl + D',
                    'Menu Inserir > Duplicar',
                    'Ambas A e B estão corretas'
                ],
                correta: 3
            },
            {
                pergunta: 'Qual atalho aplica negrito ao texto?',
                alternativas: [
                    'Ctrl + B',
                    'Ctrl + N',
                    'Ctrl + I',
                    'Ctrl + U'
                ],
                correta: 0
            },
            {
                pergunta: 'Como congelar painéis no Excel?',
                alternativas: [
                    'Menu Exibir > Congelar Painéis',
                    'Menu Arquivo > Congelar',
                    'Ctrl + F',
                    'Menu Inserir > Congelar'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é um slide mestre no PowerPoint?',
                alternativas: [
                    'Primeiro slide da apresentação',
                    'Template que controla formatação de todos os slides',
                    'Slide mais importante',
                    'Último slide'
                ],
                correta: 1
            },
            {
                pergunta: 'Como inserir símbolos especiais no Word?',
                alternativas: [
                    'Menu Inserir > Símbolo',
                    'Menu Arquivo > Caracteres',
                    'Ctrl + Símbolo',
                    'Menu Exibir > Símbolos'
                ],
                correta: 0
            },
            {
                pergunta: 'Qual função retorna o menor valor em um intervalo?',
                alternativas: [
                    'MAX',
                    'MIN',
                    'SMALL',
                    'LOW'
                ],
                correta: 1
            },
            {
                pergunta: 'Como alterar o tema de uma apresentação?',
                alternativas: [
                    'Menu Design > Temas',
                    'Menu Arquivo > Tema',
                    'Menu Inserir > Tema',
                    'Ctrl + T'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz Ctrl + F no Word?',
                alternativas: [
                    'Salvar documento',
                    'Localizar/Buscar texto',
                    'Formatar texto',
                    'Fechar documento'
                ],
                correta: 1
            },
            {
                pergunta: 'Como mesclar células no Excel?',
                alternativas: [
                    'Menu Página Inicial > Mesclar e Centralizar',
                    'Menu Inserir > Mesclar',
                    'Ctrl + M',
                    'Menu Arquivo > Mesclar'
                ],
                correta: 0
            },
            {
                pergunta: 'Como adicionar notas do apresentador no PowerPoint?',
                alternativas: [
                    'Na área de anotações abaixo do slide',
                    'Menu Arquivo > Notas',
                    'Ctrl + N',
                    'Menu Inserir > Notas'
                ],
                correta: 0
            },
            {
                pergunta: 'Qual atalho aplica itálico ao texto?',
                alternativas: [
                    'Ctrl + B',
                    'Ctrl + I',
                    'Ctrl + U',
                    'Ctrl + T'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é autosoma no Excel?',
                alternativas: [
                    'Recurso que soma automaticamente células adjacentes',
                    'Um tipo de gráfico',
                    'Uma função avançada',
                    'Uma formatação'
                ],
                correta: 0
            },
            {
                pergunta: 'Como configurar orientação da página no Word?',
                alternativas: [
                    'Menu Layout > Orientação',
                    'Menu Arquivo > Página',
                    'Ctrl + O',
                    'Menu Inserir > Orientação'
                ],
                correta: 0
            },
            {
                pergunta: 'Qual extensão de arquivo do Excel?',
                alternativas: [
                    '.docx',
                    '.pptx',
                    '.xlsx',
                    '.txt'
                ],
                correta: 2
            },
            {
                pergunta: 'Como inserir um gráfico SmartArt no PowerPoint?',
                alternativas: [
                    'Menu Inserir > SmartArt',
                    'Menu Design > SmartArt',
                    'Ctrl + S',
                    'Menu Arquivo > SmartArt'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz Ctrl + H no Word?',
                alternativas: [
                    'Localizar',
                    'Localizar e Substituir',
                    'Ajuda',
                    'Ocultar texto'
                ],
                correta: 1
            },
            {
                pergunta: 'Como criar um gráfico de pizza no Excel?',
                alternativas: [
                    'Selecionar dados > Menu Inserir > Gráfico de Pizza',
                    'Menu Arquivo > Gráfico',
                    'Ctrl + P',
                    'Menu Exibir > Pizza'
                ],
                correta: 0
            },
            {
                pergunta: 'Como configurar transição automática de slides?',
                alternativas: [
                    'Menu Transições > Definir tempo',
                    'Menu Animações > Tempo',
                    'Ctrl + T',
                    'Menu Arquivo > Timer'
                ],
                correta: 0
            },
            {
                pergunta: 'Qual atalho sublinha o texto?',
                alternativas: [
                    'Ctrl + S',
                    'Ctrl + U',
                    'Ctrl + L',
                    'Ctrl + B'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é filtro de dados no Excel?',
                alternativas: [
                    'Deletar dados',
                    'Recurso para exibir apenas linhas que atendem critérios',
                    'Formatar células',
                    'Criar gráficos'
                ],
                correta: 1
            },
            {
                pergunta: 'Como adicionar hiperlink no PowerPoint?',
                alternativas: [
                    'Menu Inserir > Hiperlink ou Ctrl + K',
                    'Menu Arquivo > Link',
                    'Clicar com botão direito apenas',
                    'Não é possível'
                ],
                correta: 0
            },
            {
                pergunta: 'Como verificar ortografia no Word?',
                alternativas: [
                    'Menu Revisar > Ortografia e Gramática ou F7',
                    'Menu Arquivo > Verificar',
                    'Ctrl + O',
                    'Menu Inserir > Ortografia'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz a função NOW no Excel?',
                alternativas: [
                    'Retorna data e hora atual',
                    'Soma valores',
                    'Conta células',
                    'Formata células'
                ],
                correta: 0
            },
            {
                pergunta: 'Como agrupar objetos no PowerPoint?',
                alternativas: [
                    'Selecionar objetos > Botão direito > Agrupar',
                    'Menu Arquivo > Agrupar',
                    'Ctrl + G',
                    'Menu Inserir > Grupo'
                ],
                correta: 0
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
            },
            {
                pergunta: 'O que é phishing?',
                alternativas: [
                    'Um jogo online',
                    'Tentativa de roubar dados se passando por entidade confiável',
                    'Um navegador',
                    'Um antivírus'
                ],
                correta: 1
            },
            {
                pergunta: 'Como criar uma senha forte?',
                alternativas: [
                    'Usar apenas letras minúsculas',
                    'Usar nome e data de nascimento',
                    'Combinar letras, números, símbolos e ter 12+ caracteres',
                    'Usar "123456"'
                ],
                correta: 2
            },
            {
                pergunta: 'O que é spyware?',
                alternativas: [
                    'Um jogo',
                    'Malware que monitora atividades sem consentimento',
                    'Um navegador',
                    'Um antivírus'
                ],
                correta: 1
            },
            {
                pergunta: 'Por que atualizar o antivírus regularmente?',
                alternativas: [
                    'Não é necessário',
                    'Para detectar ameaças novas e mais recentes',
                    'Apenas para ocupar espaço',
                    'Para deixar PC lento'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é um trojan?',
                alternativas: [
                    'Um programa útil',
                    'Malware disfarçado de software legítimo',
                    'Um navegador',
                    'Um antivírus'
                ],
                correta: 1
            },
            {
                pergunta: 'Como identificar email de phishing?',
                alternativas: [
                    'Sempre são seguros',
                    'Verificar remetente, erros de português, urgência exagerada',
                    'Todos são verdadeiros',
                    'Não há como identificar'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é firewall?',
                alternativas: [
                    'Um tipo de vírus',
                    'Barreira de segurança que monitora tráfego de rede',
                    'Um navegador',
                    'Um jogo'
                ],
                correta: 1
            },
            {
                pergunta: 'Por que não usar a mesma senha em todos os sites?',
                alternativas: [
                    'Não há problema',
                    'Se um site vazar, todos ficam comprometidos',
                    'Para economizar memória',
                    'É mais rápido'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é SSL/HTTPS?',
                alternativas: [
                    'Um vírus',
                    'Protocolo de segurança que criptografa dados na web',
                    'Um navegador',
                    'Um jogo'
                ],
                correta: 1
            },
            {
                pergunta: 'Como proteger dispositivos móveis?',
                alternativas: [
                    'Não usar senha',
                    'Usar senha/biometria, antivírus e cuidado com apps',
                    'Baixar apps de qualquer lugar',
                    'Desativar bloqueio'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é adware?',
                alternativas: [
                    'Um programa útil',
                    'Software que exibe anúncios indesejados',
                    'Um navegador',
                    'Um antivírus'
                ],
                correta: 1
            },
            {
                pergunta: 'Por que desconfiar de ofertas "boas demais"?',
                alternativas: [
                    'Sempre são verdadeiras',
                    'Podem ser golpes para roubar dados ou dinheiro',
                    'Não há problema',
                    'São sempre seguras'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é engenharia social?',
                alternativas: [
                    'Uma ciência',
                    'Manipulação psicológica para obter informações confidenciais',
                    'Um programa',
                    'Um jogo'
                ],
                correta: 1
            },
            {
                pergunta: 'Como proteger redes WiFi domésticas?',
                alternativas: [
                    'Deixar sem senha',
                    'Usar WPA3/WPA2, senha forte e ocultar SSID',
                    'Usar WEP apenas',
                    'Compartilhar senha com todos'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é keylogger?',
                alternativas: [
                    'Um teclado',
                    'Malware que registra tudo que você digita',
                    'Um programa útil',
                    'Um jogo'
                ],
                correta: 1
            },
            {
                pergunta: 'Por que verificar URL antes de clicar?',
                alternativas: [
                    'Não é necessário',
                    'Para evitar sites maliciosos disfarçados',
                    'Apenas por curiosidade',
                    'Não faz diferença'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é um ataque DDoS?',
                alternativas: [
                    'Um jogo',
                    'Sobrecarga de servidor com múltiplas requisições',
                    'Um antivírus',
                    'Um navegador'
                ],
                correta: 1
            },
            {
                pergunta: 'Como proteger dados em dispositivos perdidos?',
                alternativas: [
                    'Não fazer nada',
                    'Usar criptografia, bloqueio remoto e localização',
                    'Deixar sem senha',
                    'Compartilhar com todos'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é zero-day exploit?',
                alternativas: [
                    'Um jogo',
                    'Vulnerabilidade explorada antes de correção disponível',
                    'Um antivírus',
                    'Um navegador'
                ],
                correta: 1
            },
            {
                pergunta: 'Por que desconfiar de anexos de email desconhecidos?',
                alternativas: [
                    'Sempre são seguros',
                    'Podem conter malware que infecta ao abrir',
                    'Não há perigo',
                    'São sempre úteis'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é gerenciador de senhas?',
                alternativas: [
                    'Um vírus',
                    'Ferramenta segura que armazena e gera senhas fortes',
                    'Um jogo',
                    'Um navegador'
                ],
                correta: 1
            },
            {
                pergunta: 'Como identificar sites seguros?',
                alternativas: [
                    'Qualquer site é seguro',
                    'Verificar HTTPS, cadeado, certificado SSL válido',
                    'Pela cor do site',
                    'Pelo design'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é botnet?',
                alternativas: [
                    'Um jogo',
                    'Rede de computadores infectados controlados remotamente',
                    'Um navegador',
                    'Um antivírus'
                ],
                correta: 1
            },
            {
                pergunta: 'Por que revisar permissões de aplicativos?',
                alternativas: [
                    'Não é necessário',
                    'Para evitar acesso indevido a dados pessoais',
                    'Apenas por curiosidade',
                    'Não faz diferença'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é man-in-the-middle attack?',
                alternativas: [
                    'Um jogo',
                    'Interceptação de comunicação entre duas partes',
                    'Um navegador',
                    'Um antivírus'
                ],
                correta: 1
            },
            {
                pergunta: 'Como proteger crianças online?',
                alternativas: [
                    'Deixar sem supervisão',
                    'Usar controle parental, educar e monitorar atividades',
                    'Liberar tudo',
                    'Proibir totalmente'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é credential stuffing?',
                alternativas: [
                    'Um jogo',
                    'Usar senhas vazadas para invadir outras contas',
                    'Um antivírus',
                    'Um navegador'
                ],
                correta: 1
            },
            {
                pergunta: 'Por que fazer logout em computadores públicos?',
                alternativas: [
                    'Não é necessário',
                    'Para evitar acesso não autorizado às suas contas',
                    'Apenas por educação',
                    'Não faz diferença'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é rootkit?',
                alternativas: [
                    'Um programa útil',
                    'Malware que se oculta no sistema operacional',
                    'Um navegador',
                    'Um jogo'
                ],
                correta: 1
            },
            {
                pergunta: 'Como verificar se email é autêntico?',
                alternativas: [
                    'Confiar sempre',
                    'Verificar endereço completo, cabeçalhos, links',
                    'Pela aparência apenas',
                    'Não há como verificar'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é whaling em segurança?',
                alternativas: [
                    'Um jogo',
                    'Phishing direcionado a executivos importantes',
                    'Um navegador',
                    'Um antivírus'
                ],
                correta: 1
            },
            {
                pergunta: 'Por que limpar histórico e cookies periodicamente?',
                alternativas: [
                    'Não é necessário',
                    'Para proteger privacidade e remover rastreamento',
                    'Apenas para economizar espaço',
                    'Não faz diferença'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é biometria?',
                alternativas: [
                    'Um vírus',
                    'Autenticação por características físicas únicas',
                    'Um navegador',
                    'Um jogo'
                ],
                correta: 1
            },
            {
                pergunta: 'Como identificar aplicativos falsos?',
                alternativas: [
                    'Todos são verdadeiros',
                    'Verificar desenvolvedor, avaliações, permissões',
                    'Pela cor do ícone',
                    'Não há como saber'
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
            },
            {
                pergunta: 'O que é um operador aritmético?',
                alternativas: [
                    'Uma variável',
                    'Símbolos como +, -, *, / para operações matemáticas',
                    'Uma função',
                    'Um loop'
                ],
                correta: 1
            },
            {
                pergunta: 'O que faz o operador AND lógico?',
                alternativas: [
                    'Retorna true se AMBAS condições forem verdadeiras',
                    'Retorna true se UMA condição for verdadeira',
                    'Inverte o valor',
                    'Soma valores'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é um comentário em código?',
                alternativas: [
                    'Um erro',
                    'Texto explicativo ignorado pelo computador',
                    'Uma variável',
                    'Uma função'
                ],
                correta: 1
            },
            {
                pergunta: 'Para que serve ELSE IF?',
                alternativas: [
                    'Terminar programa',
                    'Testar condição adicional se IF for falso',
                    'Criar loops',
                    'Deletar variáveis'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é incremento (++)?',
                alternativas: [
                    'Diminui valor em 1',
                    'Aumenta valor em 1',
                    'Multiplica por 2',
                    'Divide por 2'
                ],
                correta: 1
            },
            {
                pergunta: 'O que faz o operador OR lógico?',
                alternativas: [
                    'Retorna true se PELO MENOS UMA condição for verdadeira',
                    'Retorna true se TODAS forem verdadeiras',
                    'Inverte valores',
                    'Soma valores'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é um índice de array?',
                alternativas: [
                    'Um tipo de loop',
                    'Posição numérica de elemento no array',
                    'Uma variável',
                    'Uma função'
                ],
                correta: 1
            },
            {
                pergunta: 'O que significa variável global?',
                alternativas: [
                    'Variável acessível em todo o programa',
                    'Variável que só existe em uma função',
                    'Uma constante',
                    'Um erro'
                ],
                correta: 0
            },
            {
                pergunta: 'Para que serve o operador NOT?',
                alternativas: [
                    'Somar valores',
                    'Inverter valor booleano (true vira false)',
                    'Multiplicar',
                    'Deletar'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é um loop infinito?',
                alternativas: [
                    'Um loop que nunca para de executar',
                    'Um loop que executa 10 vezes',
                    'Uma função',
                    'Uma variável'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz BREAK em um loop?',
                alternativas: [
                    'Continua para próxima iteração',
                    'Interrompe e sai do loop',
                    'Reinicia o loop',
                    'Deleta variáveis'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é uma constante?',
                alternativas: [
                    'Valor que pode mudar',
                    'Valor que não pode ser alterado após definido',
                    'Um loop',
                    'Uma função'
                ],
                correta: 1
            },
            {
                pergunta: 'Para que serve CONTINUE em um loop?',
                alternativas: [
                    'Sai do loop',
                    'Pula para próxima iteração do loop',
                    'Para o programa',
                    'Deleta o loop'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é concatenação?',
                alternativas: [
                    'Dividir textos',
                    'Juntar strings/textos',
                    'Deletar textos',
                    'Multiplicar números'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é tipo de dado String?',
                alternativas: [
                    'Números inteiros',
                    'Texto/caracteres',
                    'Verdadeiro/Falso',
                    'Números decimais'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é tipo de dado Integer?',
                alternativas: [
                    'Texto',
                    'Números inteiros sem casas decimais',
                    'Verdadeiro/Falso',
                    'Caracteres especiais'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é fluxograma?',
                alternativas: [
                    'Um tipo de código',
                    'Representação gráfica de algoritmo com símbolos',
                    'Uma variável',
                    'Um erro'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é pseudocódigo?',
                alternativas: [
                    'Código com erros',
                    'Descrição de algoritmo em linguagem simplificada',
                    'Um vírus',
                    'Uma função'
                ],
                correta: 1
            },
            {
                pergunta: 'O que faz o operador módulo (%) ?',
                alternativas: [
                    'Multiplica',
                    'Retorna resto da divisão',
                    'Soma',
                    'Subtrai'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é variável local?',
                alternativas: [
                    'Variável global',
                    'Variável que só existe dentro de função/bloco',
                    'Uma constante',
                    'Um erro'
                ],
                correta: 1
            },
            {
                pergunta: 'Para que serve RETURN em função?',
                alternativas: [
                    'Deletar função',
                    'Retornar valor da função',
                    'Criar loop',
                    'Imprimir texto'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é recursão?',
                alternativas: [
                    'Um erro',
                    'Função que chama a si mesma',
                    'Um loop',
                    'Uma variável'
                ],
                correta: 1
            },
            {
                pergunta: 'O que são estruturas de dados?',
                alternativas: [
                    'Tipos de loops',
                    'Formas de organizar e armazenar dados',
                    'Erros de código',
                    'Funções especiais'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é tipo de dado Boolean?',
                alternativas: [
                    'Números',
                    'Verdadeiro (true) ou Falso (false)',
                    'Textos',
                    'Caracteres'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é escopo de variável?',
                alternativas: [
                    'Cor da variável',
                    'Região do código onde variável é acessível',
                    'Tamanho da variável',
                    'Tipo da variável'
                ],
                correta: 1
            },
            {
                pergunta: 'Para que serve SWITCH/CASE?',
                alternativas: [
                    'Criar loops',
                    'Testar múltiplas condições de forma organizada',
                    'Deletar variáveis',
                    'Somar números'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é um objeto em programação?',
                alternativas: [
                    'Um arquivo',
                    'Estrutura que agrupa dados e funções relacionadas',
                    'Um loop',
                    'Um erro'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é tipo de dado Float?',
                alternativas: [
                    'Números inteiros',
                    'Números com casas decimais',
                    'Textos',
                    'Verdadeiro/Falso'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é iteração?',
                alternativas: [
                    'Uma função',
                    'Cada repetição de um loop',
                    'Um erro',
                    'Uma variável'
                ],
                correta: 1
            },
            {
                pergunta: 'Para que serve TRY/CATCH?',
                alternativas: [
                    'Criar loops',
                    'Capturar e tratar erros no código',
                    'Deletar variáveis',
                    'Somar números'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é casting?',
                alternativas: [
                    'Deletar variável',
                    'Converter tipo de dado de uma variável',
                    'Criar função',
                    'Fazer loop'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é lógica booleana?',
                alternativas: [
                    'Matemática avançada',
                    'Sistema lógico com valores verdadeiro/falso',
                    'Um tipo de loop',
                    'Uma linguagem'
                ],
                correta: 1
            },
            {
                pergunta: 'O que são parâmetros opcionais?',
                alternativas: [
                    'Parâmetros obrigatórios',
                    'Parâmetros que têm valor padrão se não fornecidos',
                    'Erros',
                    'Loops'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é null/nulo?',
                alternativas: [
                    'Um número',
                    'Ausência intencional de valor',
                    'Uma string',
                    'Um loop'
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
            },
            {
                pergunta: 'O que é DOM?',
                alternativas: [
                    'Um navegador',
                    'Document Object Model - estrutura de objetos da página',
                    'Um vírus',
                    'Uma linguagem'
                ],
                correta: 1
            },
            {
                pergunta: 'Como criar um parágrafo em HTML?',
                alternativas: [
                    '<p>Texto</p>',
                    '<paragraph>Texto</paragraph>',
                    '<text>Texto</text>',
                    '<para>Texto</para>'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é ID em HTML?',
                alternativas: [
                    'Um tipo de tag',
                    'Identificador único para elemento',
                    'Uma classe',
                    'Um estilo'
                ],
                correta: 1
            },
            {
                pergunta: 'Como incluir CSS externo em HTML?',
                alternativas: [
                    '<style src="estilo.css">',
                    '<link rel="stylesheet" href="estilo.css">',
                    '<css href="estilo.css">',
                    '<include css="estilo.css">'
                ],
                correta: 1
            },
            {
                pergunta: 'O que faz a tag <div>?',
                alternativas: [
                    'Cria divisão',
                    'Container genérico para agrupar elementos',
                    'Divide página',
                    'Deleta conteúdo'
                ],
                correta: 1
            },
            {
                pergunta: 'Como criar lista não ordenada?',
                alternativas: [
                    '<ul><li>Item</li></ul>',
                    '<ol><li>Item</li></ol>',
                    '<list>Item</list>',
                    '<items>Item</items>'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é Bootstrap?',
                alternativas: [
                    'Um navegador',
                    'Framework CSS para design responsivo',
                    'Uma linguagem',
                    'Um servidor'
                ],
                correta: 1
            },
            {
                pergunta: 'Para que serve a tag <head>?',
                alternativas: [
                    'Criar cabeçalho visual',
                    'Conter metadados, título, links CSS/JS',
                    'Criar rodapé',
                    'Exibir texto'
                ],
                correta: 1
            },
            {
                pergunta: 'Como criar botão em HTML?',
                alternativas: [
                    '<button>Clique</button>',
                    '<btn>Clique</btn>',
                    '<click>Clique</click>',
                    '<input type="click">'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é Flexbox?',
                alternativas: [
                    'Um navegador',
                    'Sistema de layout CSS unidimensional',
                    'Uma linguagem',
                    'Um framework'
                ],
                correta: 1
            },
            {
                pergunta: 'Como adicionar JavaScript em HTML?',
                alternativas: [
                    '<script src="codigo.js"></script>',
                    '<js src="codigo.js">',
                    '<javascript src="codigo.js">',
                    '<code src="codigo.js">'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é Grid CSS?',
                alternativas: [
                    'Um jogo',
                    'Sistema de layout bidimensional em linhas e colunas',
                    'Um navegador',
                    'Uma linguagem'
                ],
                correta: 1
            },
            {
                pergunta: 'Para que serve a tag <meta>?',
                alternativas: [
                    'Criar texto',
                    'Fornecer metadados sobre a página',
                    'Criar imagens',
                    'Fazer links'
                ],
                correta: 1
            },
            {
                pergunta: 'Como criar campo de entrada de texto?',
                alternativas: [
                    '<input type="text">',
                    '<text>',
                    '<field>',
                    '<textbox>'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é viewport?',
                alternativas: [
                    'Um navegador',
                    'Área visível da página web no dispositivo',
                    'Um servidor',
                    'Uma linguagem'
                ],
                correta: 1
            },
            {
                pergunta: 'Como criar título principal em HTML?',
                alternativas: [
                    '<h1>Título</h1>',
                    '<title>Título</title>',
                    '<header>Título</header>',
                    '<head>Título</head>'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz z-index em CSS?',
                alternativas: [
                    'Define tamanho',
                    'Controla ordem de empilhamento (profundidade)',
                    'Define cor',
                    'Cria animação'
                ],
                correta: 1
            },
            {
                pergunta: 'Como fazer comentário em HTML?',
                alternativas: [
                    '// comentário',
                    '/* comentário */',
                    '<!-- comentário -->',
                    '# comentário'
                ],
                correta: 2
            },
            {
                pergunta: 'O que é media query?',
                alternativas: [
                    'Um banco de dados',
                    'CSS que aplica estilos baseados em características do dispositivo',
                    'Um navegador',
                    'Uma linguagem'
                ],
                correta: 1
            },
            {
                pergunta: 'Para que serve a tag <span>?',
                alternativas: [
                    'Quebrar linha',
                    'Container inline para estilizar parte do texto',
                    'Criar parágrafo',
                    'Fazer divisão'
                ],
                correta: 1
            },
            {
                pergunta: 'Como criar tabela em HTML?',
                alternativas: [
                    '<table><tr><td>Célula</td></tr></table>',
                    '<grid><row><cell></cell></row></grid>',
                    '<tabela><linha><celula></celula></linha></tabela>',
                    '<data-table>'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é CDN?',
                alternativas: [
                    'Uma linguagem',
                    'Content Delivery Network - rede de distribuição de conteúdo',
                    'Um navegador',
                    'Um servidor local'
                ],
                correta: 1
            },
            {
                pergunta: 'Como aplicar estilo inline em HTML?',
                alternativas: [
                    '<p style="color: red;">Texto</p>',
                    '<p css="color: red;">Texto</p>',
                    '<p class="red">Texto</p>',
                    '<p color="red">Texto</p>'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é AJAX?',
                alternativas: [
                    'Um navegador',
                    'Técnica para atualizar partes da página sem recarregar',
                    'Uma linguagem',
                    'Um framework'
                ],
                correta: 1
            },
            {
                pergunta: 'Para que serve a tag <footer>?',
                alternativas: [
                    'Criar cabeçalho',
                    'Definir rodapé da página ou seção',
                    'Fazer menu',
                    'Criar formulário'
                ],
                correta: 1
            },
            {
                pergunta: 'Como criar link que abre em nova aba?',
                alternativas: [
                    '<a href="url" target="_blank">Link</a>',
                    '<a href="url" new-tab>Link</a>',
                    '<a href="url" open="new">Link</a>',
                    '<link href="url" target="new">'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é Framework?',
                alternativas: [
                    'Um vírus',
                    'Estrutura/conjunto de ferramentas para desenvolvimento',
                    'Um navegador',
                    'Um servidor'
                ],
                correta: 1
            },
            {
                pergunta: 'Como criar checkbox em HTML?',
                alternativas: [
                    '<input type="checkbox">',
                    '<checkbox>',
                    '<input type="check">',
                    '<check>'
                ],
                correta: 0
            },
            {
                pergunta: 'O que são Semantic HTML tags?',
                alternativas: [
                    'Tags decorativas',
                    'Tags que descrevem significado do conteúdo (article, nav, etc)',
                    'Tags antigas',
                    'Tags de estilo'
                ],
                correta: 1
            },
            {
                pergunta: 'Como definir cor de fundo em CSS?',
                alternativas: [
                    'background-color: blue;',
                    'bg-color: blue;',
                    'color-background: blue;',
                    'fundo: blue;'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é API REST?',
                alternativas: [
                    'Um navegador',
                    'Interface de programação que usa HTTP para comunicação',
                    'Uma linguagem',
                    'Um framework CSS'
                ],
                correta: 1
            },
            {
                pergunta: 'Para que serve a tag <nav>?',
                alternativas: [
                    'Criar rodapé',
                    'Definir seção de navegação/menu',
                    'Fazer formulário',
                    'Criar título'
                ],
                correta: 1
            },
            {
                pergunta: 'Como centralizar elemento com CSS?',
                alternativas: [
                    'text-align: center; ou margin: 0 auto;',
                    'align: center;',
                    'center: true;',
                    'position: center;'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é CORS?',
                alternativas: [
                    'Um framework',
                    'Cross-Origin Resource Sharing - política de segurança',
                    'Uma linguagem',
                    'Um navegador'
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
            },
            {
                pergunta: 'Por que organizar cabos e fios?',
                alternativas: [
                    'Não é necessário',
                    'Evitar acidentes, facilitar manutenção e melhorar ventilação',
                    'Apenas estética',
                    'Para economizar energia'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual altura ideal do monitor?',
                alternativas: [
                    'Muito acima dos olhos',
                    'Topo do monitor na altura dos olhos ou pouco abaixo',
                    'Muito abaixo dos olhos',
                    'Não importa'
                ],
                correta: 1
            },
            {
                pergunta: 'Por que evitar multitarefa excessiva?',
                alternativas: [
                    'Não há problema',
                    'Reduz produtividade e aumenta erros',
                    'Deixa PC mais rápido',
                    'Economiza energia'
                ],
                correta: 1
            },
            {
                pergunta: 'Como proteger os pulsos ao digitar?',
                alternativas: [
                    'Forçar muito',
                    'Manter retos, usar apoio, fazer pausas e exercícios',
                    'Dobrá-los muito',
                    'Não é necessário cuidado'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual a importância da iluminação adequada?',
                alternativas: [
                    'Apenas estética',
                    'Reduz fadiga ocular e melhora produtividade',
                    'Não faz diferença',
                    'Deixa PC mais rápido'
                ],
                correta: 1
            },
            {
                pergunta: 'Por que desligar computador corretamente?',
                alternativas: [
                    'Pode usar botão de energia sempre',
                    'Evita perda de dados e danos ao sistema',
                    'Não faz diferença',
                    'Apenas para economizar'
                ],
                correta: 1
            },
            {
                pergunta: 'Como limpar teclado corretamente?',
                alternativas: [
                    'Jogar água',
                    'Desligar PC, virar de cabeça para baixo, ar comprimido',
                    'Usar sabonete',
                    'Não limpar nunca'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual a importância de usar filtro de linha?',
                alternativas: [
                    'Não é importante',
                    'Protege contra picos de tensão e raios',
                    'Apenas deixa bonito',
                    'Para economizar energia'
                ],
                correta: 1
            },
            {
                pergunta: 'Por que evitar fundo de tela muito claro?',
                alternativas: [
                    'Não há problema',
                    'Pode cansar vista com excesso de luminosidade',
                    'Deixa PC lento',
                    'Ocupa memória'
                ],
                correta: 1
            },
            {
                pergunta: 'Como ajustar brilho da tela adequadamente?',
                alternativas: [
                    'Sempre no máximo',
                    'Igualar à iluminação ambiente, nem muito claro nem escuro',
                    'Sempre no mínimo',
                    'Não importa'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual a importância de versionar documentos importantes?',
                alternativas: [
                    'Não é necessário',
                    'Permite recuperar versões anteriores em caso de erro',
                    'Apenas ocupa espaço',
                    'Para deixar desorganizado'
                ],
                correta: 1
            },
            {
                pergunta: 'Por que usar teclado e mouse ergonômicos?',
                alternativas: [
                    'Apenas moda',
                    'Reduzem lesões por esforço repetitivo (LER)',
                    'São mais bonitos',
                    'Não fazem diferença'
                ],
                correta: 1
            },
            {
                pergunta: 'Como organizar área de trabalho do Windows?',
                alternativas: [
                    'Deixar cheio de ícones',
                    'Manter limpo, usar pastas e atalhos organizados',
                    'Não organizar',
                    'Deletar tudo'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual a importância de alongamento?',
                alternativas: [
                    'Não é necessário',
                    'Previne lesões e melhora circulação',
                    'Apenas para atletas',
                    'Deixa PC mais rápido'
                ],
                correta: 1
            },
            {
                pergunta: 'Por que esvaziar lixeira regularmente?',
                alternativas: [
                    'Não é necessário',
                    'Libera espaço em disco',
                    'Para criar vírus',
                    'Deixa PC lento'
                ],
                correta: 1
            },
            {
                pergunta: 'Como cuidar da bateria do notebook?',
                alternativas: [
                    'Deixar sempre na tomada',
                    'Evitar descargas completas, manter entre 20-80%',
                    'Descarregar sempre até 0%',
                    'Não importa'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual a importância de usar screensaver ou desligar tela?',
                alternativas: [
                    'Não é importante',
                    'Economiza energia e prolonga vida útil da tela',
                    'Apenas bonito',
                    'Deixa PC mais rápido'
                ],
                correta: 1
            },
            {
                pergunta: 'Por que manter software sempre atualizado?',
                alternativas: [
                    'Não é necessário',
                    'Corrige falhas de segurança e bugs',
                    'Apenas ocupa espaço',
                    'Deixa PC lento'
                ],
                correta: 1
            },
            {
                pergunta: 'Como evitar superaquecimento do notebook?',
                alternativas: [
                    'Usar em superfícies macias',
                    'Usar base refrigerada, limpar ventilação, superfície rígida',
                    'Cobrir as saídas de ar',
                    'Usar no colo sempre'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual a importância de nomear arquivos de forma descritiva?',
                alternativas: [
                    'Não importa',
                    'Facilita localização e identificação rápida',
                    'Apenas para ficar bonito',
                    'Ocupa mais espaço'
                ],
                correta: 1
            },
            {
                pergunta: 'Por que evitar instalar muitos programas desnecessários?',
                alternativas: [
                    'Não há problema',
                    'Ocupa espaço, consome recursos e pode deixar PC lento',
                    'Deixa PC mais rápido',
                    'Melhora desempenho'
                ],
                correta: 1
            },
            {
                pergunta: 'Como ajustar cadeira corretamente?',
                alternativas: [
                    'Qualquer altura serve',
                    'Pés no chão, coxas paralelas, costas apoiadas',
                    'Muito alta',
                    'Muito baixa'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual a importância de desinstalar programas não usados?',
                alternativas: [
                    'Não é importante',
                    'Libera espaço e recursos do sistema',
                    'Deixa PC mais lento',
                    'Cria vírus'
                ],
                correta: 1
            },
            {
                pergunta: 'Por que usar mousepad?',
                alternativas: [
                    'Não é necessário',
                    'Melhora precisão e protege superfície da mesa',
                    'Apenas decoração',
                    'Deixa mouse mais lento'
                ],
                correta: 1
            },
            {
                pergunta: 'Como evitar reflexão na tela?',
                alternativas: [
                    'Aumentar brilho',
                    'Posicionar tela perpendicular à janela/luz',
                    'Usar óculos escuros',
                    'Não há como evitar'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual a importância de usar estabilizador ou nobreak?',
                alternativas: [
                    'Não é importante',
                    'Protege contra variações de energia e quedas',
                    'Apenas deixa bonito',
                    'Deixa PC lento'
                ],
                correta: 1
            },
            {
                pergunta: 'Por que evitar comer sobre o teclado?',
                alternativas: [
                    'Não há problema',
                    'Migalhas podem danificar mecanismo das teclas',
                    'Apenas para não sujar',
                    'Não faz diferença'
                ],
                correta: 1
            },
            {
                pergunta: 'Como limpar tela do monitor?',
                alternativas: [
                    'Usar álcool puro',
                    'Pano de microfibra levemente umedecido, sem pressão',
                    'Papel toalha seco',
                    'Esponja com sabão'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual a importância de desfragmentar HD (HDD)?',
                alternativas: [
                    'Não é necessário',
                    'Melhora velocidade de acesso aos dados',
                    'Cria vírus',
                    'Apaga dados'
                ],
                correta: 1
            },
            {
                pergunta: 'Por que não desfragmentar SSD?',
                alternativas: [
                    'Deve desfragmentar sempre',
                    'Reduz vida útil do SSD desnecessariamente',
                    'Deixa mais rápido',
                    'Não faz diferença'
                ],
                correta: 1
            },
            {
                pergunta: 'Como evitar fadiga ocular digital?',
                alternativas: [
                    'Olhar fixo na tela',
                    'Regra 20-20-20, piscar, ajustar brilho, pausas',
                    'Aumentar brilho ao máximo',
                    'Não piscar'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual a importância de usar atalhos de teclado?',
                alternativas: [
                    'Não é importante',
                    'Aumenta produtividade e reduz esforço repetitivo',
                    'Apenas para experts',
                    'Deixa PC mais lento'
                ],
                correta: 1
            },
            {
                pergunta: 'Por que evitar baixar arquivos de fontes desconhecidas?',
                alternativas: [
                    'Não há problema',
                    'Podem conter vírus e malware',
                    'São sempre seguros',
                    'Deixam PC mais rápido'
                ],
                correta: 1
            },
            {
                pergunta: 'Como organizar sistema de pastas eficientemente?',
                alternativas: [
                    'Salvar tudo na raiz',
                    'Criar hierarquia lógica e consistente',
                    'Usar apenas área de trabalho',
                    'Não organizar'
                ],
                correta: 1
            },
            {
                pergunta: 'Por que criar senhas únicas para cada serviço?',
                alternativas: [
                    'Não é necessário',
                    'Se uma vazar, outras permanecem seguras',
                    'Para complicar',
                    'Não faz diferença'
                ],
                correta: 1
            },
            {
                pergunta: 'Como manter privacidade ao usar PC compartilhado?',
                alternativas: [
                    'Deixar logado',
                    'Sempre fazer logout, usar modo privado, limpar histórico',
                    'Salvar todas as senhas',
                    'Não se preocupar'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual a importância de fazer manutenção preventiva?',
                alternativas: [
                    'Não é necessária',
                    'Prolonga vida útil e previne problemas',
                    'Apenas gasta dinheiro',
                    'Danifica o PC'
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
            },
            {
                pergunta: 'Como reabrir aba fechada acidentalmente?',
                alternativas: [
                    'Ctrl + Shift + T',
                    'Ctrl + T',
                    'Ctrl + R',
                    'Ctrl + W'
                ],
                correta: 0
            },
            {
                pergunta: 'Qual atalho para capturar apenas uma janela?',
                alternativas: [
                    'Print Screen',
                    'Alt + Print Screen',
                    'Ctrl + Print',
                    'Shift + Print'
                ],
                correta: 1
            },
            {
                pergunta: 'Como abrir o Gerenciador de Tarefas?',
                alternativas: [
                    'Ctrl + Alt + Del',
                    'Ctrl + Shift + Esc',
                    'Alt + Tab',
                    'Ambas A e B estão corretas'
                ],
                correta: 3
            },
            {
                pergunta: 'Qual atalho para renomear arquivo selecionado?',
                alternativas: [
                    'F1',
                    'F2',
                    'F3',
                    'F4'
                ],
                correta: 1
            },
            {
                pergunta: 'Como atualizar página do navegador?',
                alternativas: [
                    'F4',
                    'F5 ou Ctrl + R',
                    'F6',
                    'F7'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual atalho para mover janela para monitor secundário?',
                alternativas: [
                    'Windows + Shift + Setas',
                    'Ctrl + Shift + M',
                    'Alt + M',
                    'Windows + M'
                ],
                correta: 0
            },
            {
                pergunta: 'Como abrir execução rápida (Executar)?',
                alternativas: [
                    'Windows + E',
                    'Windows + R',
                    'Windows + D',
                    'Windows + X'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual atalho para recortar texto/arquivo?',
                alternativas: [
                    'Ctrl + C',
                    'Ctrl + V',
                    'Ctrl + X',
                    'Ctrl + Z'
                ],
                correta: 2
            },
            {
                pergunta: 'Como maximizar janela ativa?',
                alternativas: [
                    'Windows + Seta Cima',
                    'Windows + M',
                    'Alt + Enter',
                    'F11'
                ],
                correta: 0
            },
            {
                pergunta: 'Qual atalho para fechar aba do navegador?',
                alternativas: [
                    'Alt + F4',
                    'Ctrl + W',
                    'Ctrl + Q',
                    'Esc'
                ],
                correta: 1
            },
            {
                pergunta: 'Como abrir uma nova janela do navegador?',
                alternativas: [
                    'Ctrl + N',
                    'Ctrl + T',
                    'Ctrl + Shift + N',
                    'Ctrl + W'
                ],
                correta: 0
            },
            {
                pergunta: 'Qual atalho para modo anônimo/privado no navegador?',
                alternativas: [
                    'Ctrl + N',
                    'Ctrl + Shift + N (Chrome) ou Ctrl + Shift + P (Firefox)',
                    'Ctrl + P',
                    'Ctrl + H'
                ],
                correta: 1
            },
            {
                pergunta: 'Como minimizar janela ativa?',
                alternativas: [
                    'Windows + Seta Baixo',
                    'Windows + M',
                    'Alt + F4',
                    'Ctrl + M'
                ],
                correta: 0
            },
            {
                pergunta: 'Qual atalho para abrir Configurações do Windows?',
                alternativas: [
                    'Windows + S',
                    'Windows + I',
                    'Windows + C',
                    'Windows + P'
                ],
                correta: 1
            },
            {
                pergunta: 'Como navegar entre janelas abertas em ordem?',
                alternativas: [
                    'Alt + Tab',
                    'Ctrl + Tab',
                    'Windows + Tab',
                    'Shift + Tab'
                ],
                correta: 0
            },
            {
                pergunta: 'Qual atalho para deletar arquivo permanentemente?',
                alternativas: [
                    'Delete',
                    'Shift + Delete',
                    'Ctrl + Delete',
                    'Alt + Delete'
                ],
                correta: 1
            },
            {
                pergunta: 'Como abrir histórico do navegador?',
                alternativas: [
                    'Ctrl + H',
                    'Ctrl + Shift + H',
                    'Alt + H',
                    'Windows + H'
                ],
                correta: 0
            },
            {
                pergunta: 'Qual atalho para ir ao início de documento/página?',
                alternativas: [
                    'Ctrl + End',
                    'Home',
                    'Ctrl + Home',
                    'Page Up'
                ],
                correta: 2
            },
            {
                pergunta: 'Como ir ao fim de documento/página?',
                alternativas: [
                    'End',
                    'Ctrl + End',
                    'Page Down',
                    'Ctrl + Down'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual atalho para zoom in (aumentar)?',
                alternativas: [
                    'Ctrl + -',
                    'Ctrl + +',
                    'Ctrl + 0',
                    'Alt + +'
                ],
                correta: 1
            },
            {
                pergunta: 'Como zoom out (diminuir)?',
                alternativas: [
                    'Ctrl + +',
                    'Ctrl + -',
                    'Ctrl + 0',
                    'Alt + -'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual atalho para resetar zoom (100%)?',
                alternativas: [
                    'Ctrl + 1',
                    'Ctrl + 0',
                    'Ctrl + R',
                    'Ctrl + Z'
                ],
                correta: 1
            },
            {
                pergunta: 'Como abrir propriedades de arquivo selecionado?',
                alternativas: [
                    'Alt + Enter',
                    'Ctrl + P',
                    'F4',
                    'Shift + Enter'
                ],
                correta: 0
            },
            {
                pergunta: 'Qual atalho para selecionar tudo em pasta?',
                alternativas: [
                    'Ctrl + S',
                    'Ctrl + A',
                    'Ctrl + E',
                    'Ctrl + T'
                ],
                correta: 1
            },
            {
                pergunta: 'Como abrir barra de endereços no navegador?',
                alternativas: [
                    'Ctrl + E',
                    'Ctrl + L ou F6',
                    'Ctrl + U',
                    'Ctrl + B'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual atalho para adicionar favorito no navegador?',
                alternativas: [
                    'Ctrl + B',
                    'Ctrl + D',
                    'Ctrl + F',
                    'Ctrl + M'
                ],
                correta: 1
            },
            {
                pergunta: 'Como abrir downloads do navegador?',
                alternativas: [
                    'Ctrl + D',
                    'Ctrl + J',
                    'Ctrl + H',
                    'Ctrl + L'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual atalho para tela cheia no navegador?',
                alternativas: [
                    'F10',
                    'F11',
                    'F12',
                    'Alt + Enter'
                ],
                correta: 1
            },
            {
                pergunta: 'Como abrir ferramentas de desenvolvedor?',
                alternativas: [
                    'F11',
                    'F12 ou Ctrl + Shift + I',
                    'F10',
                    'Ctrl + F12'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual atalho para navegar abas do navegador?',
                alternativas: [
                    'Alt + Tab',
                    'Ctrl + Tab',
                    'Shift + Tab',
                    'Windows + Tab'
                ],
                correta: 1
            },
            {
                pergunta: 'Como abrir menu de contexto (botão direito)?',
                alternativas: [
                    'Shift + F10',
                    'Tecla Menu (entre Alt e Ctrl)',
                    'Ctrl + M',
                    'Ambas A e B estão corretas'
                ],
                correta: 3
            },
            {
                pergunta: 'Qual atalho para duplicar linha/seleção (editores)?',
                alternativas: [
                    'Ctrl + C, Ctrl + V',
                    'Ctrl + D',
                    'Ctrl + Shift + D',
                    'Varia por editor'
                ],
                correta: 3
            },
            {
                pergunta: 'Como bloquear computador rapidamente?',
                alternativas: [
                    'Windows + L',
                    'Ctrl + Alt + Del',
                    'Alt + F4',
                    'Windows + X'
                ],
                correta: 0
            },
            {
                pergunta: 'Qual atalho para abrir central de ações?',
                alternativas: [
                    'Windows + A',
                    'Windows + N',
                    'Windows + C',
                    'Windows + X'
                ],
                correta: 0
            },
            {
                pergunta: 'Como exibir área de trabalho temporariamente?',
                alternativas: [
                    'Windows + D',
                    'Windows + , (vírgula)',
                    'Windows + Space',
                    'Windows + T'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual atalho para abrir gerenciador de clipboard?',
                alternativas: [
                    'Windows + C',
                    'Windows + V',
                    'Ctrl + Shift + V',
                    'Alt + V'
                ],
                correta: 1
            },
            {
                pergunta: 'Como alternar entre layouts de teclado?',
                alternativas: [
                    'Alt + Shift',
                    'Windows + Shift',
                    'Ctrl + Shift',
                    'Windows + Space'
                ],
                correta: 3
            },
            {
                pergunta: 'Qual atalho para abrir configurações de projeção?',
                alternativas: [
                    'Windows + P',
                    'Windows + O',
                    'Windows + S',
                    'Windows + D'
                ],
                correta: 0
            },
            {
                pergunta: 'Como abrir assistente virtual (Cortana)?',
                alternativas: [
                    'Windows + Q',
                    'Windows + C',
                    'Windows + A',
                    'Windows + S'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual atalho para abrir emoji picker?',
                alternativas: [
                    'Windows + .',
                    'Windows + ;',
                    'Windows + E',
                    'Ambas A e B estão corretas'
                ],
                correta: 3
            },
            {
                pergunta: 'Como criar nova área de trabalho virtual?',
                alternativas: [
                    'Windows + Ctrl + D',
                    'Windows + Tab',
                    'Alt + Tab',
                    'Ctrl + Alt + D'
                ],
                correta: 0
            },
            {
                pergunta: 'Qual atalho para fechar área de trabalho virtual atual?',
                alternativas: [
                    'Windows + Ctrl + F4',
                    'Alt + F4',
                    'Ctrl + W',
                    'Windows + X'
                ],
                correta: 0
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
            },
            {
                pergunta: 'O que é bandwidth?',
                alternativas: [
                    'Largura de banda - capacidade de transmissão de dados',
                    'Um tipo de cabo',
                    'Um navegador',
                    'Uma placa de vídeo'
                ],
                correta: 0
            },
            {
                pergunta: 'O que significa BIOS?',
                alternativas: [
                    'Basic Internet Operating System',
                    'Basic Input/Output System - sistema básico de entrada/saída',
                    'Binary Information Output System',
                    'Boot Interface Operating System'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é cookie?',
                alternativas: [
                    'Um vírus',
                    'Pequeno arquivo de texto que sites armazenam no navegador',
                    'Um programa',
                    'Um tipo de imagem'
                ],
                correta: 1
            },
            {
                pergunta: 'O que significa FPS?',
                alternativas: [
                    'Fast Processing System',
                    'Frames Per Second - quadros por segundo',
                    'File Processing Service',
                    'Full Performance Speed'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é driver?',
                alternativas: [
                    'Um jogo',
                    'Software que permite comunicação entre SO e hardware',
                    'Um vírus',
                    'Um navegador'
                ],
                correta: 1
            },
            {
                pergunta: 'O que significa HD?',
                alternativas: [
                    'High Definition',
                    'Hard Disk - disco rígido',
                    'Ambas A e B podem estar corretas dependendo do contexto',
                    'Home Directory'
                ],
                correta: 2
            },
            {
                pergunta: 'O que é bug?',
                alternativas: [
                    'Um inseto',
                    'Erro ou falha em programa de computador',
                    'Um vírus',
                    'Um hardware'
                ],
                correta: 1
            },
            {
                pergunta: 'O que significa RAM?',
                alternativas: [
                    'Rapid Access Memory',
                    'Random Access Memory - memória de acesso aleatório',
                    'Read And Modify',
                    'Rotation Access Module'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é patch?',
                alternativas: [
                    'Um jogo',
                    'Atualização que corrige bugs ou adiciona recursos',
                    'Um hardware',
                    'Um cabo'
                ],
                correta: 1
            },
            {
                pergunta: 'O que significa OS?',
                alternativas: [
                    'Online System',
                    'Operating System - sistema operacional',
                    'Output Service',
                    'Open Source'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é firmware?',
                alternativas: [
                    'Software embutido em hardware',
                    'Um tipo de vírus',
                    'Um programa antivírus',
                    'Uma placa de vídeo'
                ],
                correta: 0
            },
            {
                pergunta: 'O que significa LAN?',
                alternativas: [
                    'Long Area Network',
                    'Local Area Network - rede de área local',
                    'Linear Access Network',
                    'Link Area Node'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é beta?',
                alternativas: [
                    'Versão final de software',
                    'Versão de testes públicos antes do lançamento',
                    'Um tipo de arquivo',
                    'Um vírus'
                ],
                correta: 1
            },
            {
                pergunta: 'O que significa WAN?',
                alternativas: [
                    'Wide Area Network - rede de área ampla',
                    'Wireless Access Network',
                    'World Area Node',
                    'Web Application Network'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é localhost?',
                alternativas: [
                    'Um servidor remoto',
                    'Referência ao próprio computador (127.0.0.1)',
                    'Uma rede social',
                    'Um tipo de cabo'
                ],
                correta: 1
            },
            {
                pergunta: 'O que significa CPU?',
                alternativas: [
                    'Computer Processing Unit',
                    'Central Processing Unit - unidade central de processamento',
                    'Core Performance Unit',
                    'Central Program Utility'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é script?',
                alternativas: [
                    'Um tipo de vírus',
                    'Programa ou sequência de instruções',
                    'Um hardware',
                    'Uma rede'
                ],
                correta: 1
            },
            {
                pergunta: 'O que significa HTML?',
                alternativas: [
                    'High Text Markup Language',
                    'HyperText Markup Language',
                    'Home Tool Markup Language',
                    'Hyperlink and Text Markup Language'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é open source?',
                alternativas: [
                    'Software pago',
                    'Software com código-fonte aberto e modificável',
                    'Um tipo de vírus',
                    'Um navegador'
                ],
                correta: 1
            },
            {
                pergunta: 'O que significa URL?',
                alternativas: [
                    'Universal Resource Locator',
                    'Uniform Resource Locator - localizador uniforme de recursos',
                    'United Reference Link',
                    'Universal Reference Location'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é kernel?',
                alternativas: [
                    'Um programa',
                    'Núcleo do sistema operacional',
                    'Um tipo de arquivo',
                    'Um hardware'
                ],
                correta: 1
            },
            {
                pergunta: 'O que significa FTP?',
                alternativas: [
                    'Fast Transfer Protocol',
                    'File Transfer Protocol - protocolo de transferência de arquivos',
                    'Free Text Program',
                    'Full Transmission Process'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é bit?',
                alternativas: [
                    'Um programa',
                    'Menor unidade de informação (0 ou 1)',
                    'Um tipo de arquivo',
                    'Uma placa'
                ],
                correta: 1
            },
            {
                pergunta: 'O que significa byte?',
                alternativas: [
                    'Um programa',
                    'Conjunto de 8 bits',
                    'Um tipo de vírus',
                    'Uma unidade de velocidade'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é thread?',
                alternativas: [
                    'Um cabo',
                    'Menor unidade de processamento em um programa',
                    'Um tipo de vírus',
                    'Uma rede'
                ],
                correta: 1
            },
            {
                pergunta: 'O que significa ISP?',
                alternativas: [
                    'Internet Server Protocol',
                    'Internet Service Provider - provedor de internet',
                    'Internal System Process',
                    'Integrated Software Platform'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é GUI?',
                alternativas: [
                    'Um vírus',
                    'Interface gráfica do usuário',
                    'Um tipo de rede',
                    'Um cabo'
                ],
                correta: 1
            },
            {
                pergunta: 'O que significa SSD?',
                alternativas: [
                    'Super Speed Drive',
                    'Solid State Drive - unidade de estado sólido',
                    'System Storage Device',
                    'Secure Storage Disk'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é log?',
                alternativas: [
                    'Um tipo de madeira',
                    'Registro de eventos do sistema',
                    'Um programa',
                    'Um tipo de vírus'
                ],
                correta: 1
            },
            {
                pergunta: 'O que significa HTTPS?',
                alternativas: [
                    'HyperText Transfer Protocol Secure',
                    'High Transfer Protocol System',
                    'Home Text Transfer Protocol Safe',
                    'Hyperlink Transfer Protection System'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é render?',
                alternativas: [
                    'Deletar arquivo',
                    'Processar e gerar imagem/vídeo final',
                    'Copiar arquivo',
                    'Criar backup'
                ],
                correta: 1
            },
            {
                pergunta: 'O que significa WIFI?',
                alternativas: [
                    'Wireless Internet For Information',
                    'Wireless Fidelity - fidelidade sem fio',
                    'Wide Field Internet',
                    'Web Interface For Information'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é benchmark?',
                alternativas: [
                    'Um tipo de banco',
                    'Teste de desempenho de hardware/software',
                    'Um programa',
                    'Um vírus'
                ],
                correta: 1
            },
            {
                pergunta: 'O que significa GPU?',
                alternativas: [
                    'General Processing Unit',
                    'Graphics Processing Unit - unidade de processamento gráfico',
                    'Global Program Utility',
                    'Graphic Performance Unit'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é kernel?',
                alternativas: [
                    'Um tipo de milho',
                    'Núcleo do sistema operacional',
                    'Um programa',
                    'Um navegador'
                ],
                correta: 1
            },
            {
                pergunta: 'O que significa IDE?',
                alternativas: [
                    'Internet Development Environment',
                    'Integrated Development Environment - ambiente de desenvolvimento',
                    'Internal Data Engine',
                    'Interactive Design Editor'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é pixel?',
                alternativas: [
                    'Um programa',
                    'Menor elemento de uma imagem digital',
                    'Um tipo de arquivo',
                    'Uma medida de velocidade'
                ],
                correta: 1
            },
            {
                pergunta: 'O que significa LAN?',
                alternativas: [
                    'Large Area Network',
                    'Local Area Network - rede local',
                    'Long Access Network',
                    'Limited Application Network'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é byte?',
                alternativas: [
                    'Um programa',
                    'Unidade de informação com 8 bits',
                    'Um tipo de vírus',
                    'Uma velocidade'
                ],
                correta: 1
            },
            {
                pergunta: 'O que significa VPN?',
                alternativas: [
                    'Virtual Public Network',
                    'Virtual Private Network - rede privada virtual',
                    'Very Protected Network',
                    'Visual Program Navigator'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é debug?',
                alternativas: [
                    'Criar bugs',
                    'Processo de encontrar e corrigir erros no código',
                    'Deletar programas',
                    'Instalar software'
                ],
                correta: 1
            },
            {
                pergunta: 'O que significa GUI?',
                alternativas: [
                    'General User Interface',
                    'Graphical User Interface - interface gráfica',
                    'Global Unified Interface',
                    'Guided User Interaction'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é script?',
                alternativas: [
                    'Um documento',
                    'Programa ou sequência de comandos automatizados',
                    'Uma pasta',
                    'Um navegador'
                ],
                correta: 1
            },
            {
                pergunta: 'O que significa IoT?',
                alternativas: [
                    'Internet of Technology',
                    'Internet of Things - internet das coisas',
                    'Internal Operating Technology',
                    'Interactive Online Tools'
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
            },
            {
                pergunta: 'O que é modem?',
                alternativas: [
                    'Um tipo de monitor',
                    'Dispositivo que modula/demodula sinais para internet',
                    'Um programa',
                    'Uma placa de vídeo'
                ],
                correta: 1
            },
            {
                pergunta: 'O que significa Mbps?',
                alternativas: [
                    'Megabytes por segundo',
                    'Megabits por segundo - medida de velocidade',
                    'Megabits por minuto',
                    'Milhares de bytes'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é porta de rede?',
                alternativas: [
                    'Uma entrada física',
                    'Número que identifica serviço/aplicação em rede',
                    'Um tipo de cabo',
                    'Um programa'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é protocolo de rede?',
                alternativas: [
                    'Um tipo de cabo',
                    'Conjunto de regras para comunicação entre dispositivos',
                    'Um programa',
                    'Um hardware'
                ],
                correta: 1
            },
            {
                pergunta: 'O que faz um hub?',
                alternativas: [
                    'Conecta dispositivos mas envia dados para todos',
                    'Filtra dados',
                    'Armazena arquivos',
                    'Protege contra vírus'
                ],
                correta: 0
            },
            {
                pergunta: 'Qual diferença entre hub e switch?',
                alternativas: [
                    'Não há diferença',
                    'Switch é inteligente e envia dados só ao destino',
                    'Hub é mais rápido',
                    'Switch é mais antigo'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é IP estático?',
                alternativas: [
                    'IP que muda sempre',
                    'Endereço IP fixo que não muda',
                    'Um tipo de protocolo',
                    'Um cabo de rede'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é IP dinâmico?',
                alternativas: [
                    'IP que não muda',
                    'Endereço IP atribuído automaticamente e pode mudar',
                    'Um protocolo',
                    'Um tipo de cabo'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é IPv4?',
                alternativas: [
                    'Versão 4 do protocolo IP com endereços de 32 bits',
                    'Um tipo de cabo',
                    'Um programa',
                    'Um navegador'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é IPv6?',
                alternativas: [
                    'Versão antiga de IP',
                    'Nova versão de IP com 128 bits para mais endereços',
                    'Um tipo de cabo',
                    'Um programa'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é banda larga?',
                alternativas: [
                    'Um tipo de cabo largo',
                    'Conexão de alta velocidade à internet',
                    'Um programa',
                    'Um tipo de modem'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é latency/latência?',
                alternativas: [
                    'Velocidade de download',
                    'Tempo de atraso na comunicação de rede',
                    'Tamanho do arquivo',
                    'Tipo de cabo'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é throughput?',
                alternativas: [
                    'Um tipo de cabo',
                    'Taxa real de transferência de dados',
                    'Um protocolo',
                    'Um programa'
                ],
                correta: 1
            },
            {
                pergunta: 'O que significa SSID?',
                alternativas: [
                    'Super Secure Internet Device',
                    'Service Set Identifier - nome da rede WiFi',
                    'System Security ID',
                    'Secure Socket ID'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é WPA2?',
                alternativas: [
                    'Um tipo de cabo',
                    'Protocolo de segurança para redes WiFi',
                    'Um programa',
                    'Um tipo de modem'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é NAT?',
                alternativas: [
                    'Um tipo de cabo',
                    'Network Address Translation - tradução de endereços',
                    'Um programa',
                    'Um protocolo de email'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é proxy?',
                alternativas: [
                    'Um vírus',
                    'Servidor intermediário entre usuário e internet',
                    'Um tipo de cabo',
                    'Um programa antivírus'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é port forwarding?',
                alternativas: [
                    'Deletar portas',
                    'Redirecionar tráfego de porta externa para interna',
                    'Criar portas',
                    'Bloquear portas'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é QoS?',
                alternativas: [
                    'Quality of Service - priorização de tráfego',
                    'Quantum of Speed',
                    'Quick Online System',
                    'Query Operating Service'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é ethernet?',
                alternativas: [
                    'Tecnologia para redes locais com fio',
                    'Uma rede sem fio',
                    'Um tipo de modem',
                    'Um programa'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é UTP?',
                alternativas: [
                    'Ultra Transfer Protocol',
                    'Unshielded Twisted Pair - cabo de par trançado',
                    'Universal Transmission Port',
                    'Unified TCP Protocol'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é cat5e/cat6 em cabos?',
                alternativas: [
                    'Tipos de animais',
                    'Categorias de cabos ethernet com diferentes velocidades',
                    'Tipos de conectores',
                    'Protocolos de rede'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é traceroute/tracert?',
                alternativas: [
                    'Um vírus',
                    'Comando que mostra caminho dos dados na rede',
                    'Um programa de email',
                    'Um tipo de cabo'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é MTU?',
                alternativas: [
                    'Maximum Transmission Unit - tamanho máximo de pacote',
                    'Minimum Transfer Upload',
                    'Multiple TCP Unit',
                    'Modern Transmission Utility'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é firewall de hardware?',
                alternativas: [
                    'Software instalado',
                    'Dispositivo físico dedicado à segurança de rede',
                    'Um tipo de cabo',
                    'Um programa'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é VLAN?',
                alternativas: [
                    'Virtual LAN - segmentação lógica de rede',
                    'Very Large Area Network',
                    'Visual LAN',
                    'Variable Link Access Network'
                ],
                correta: 0
            },
            {
                pergunta: 'O que significa PoE?',
                alternativas: [
                    'Protocol of Ethernet',
                    'Power over Ethernet - alimentação pelo cabo de rede',
                    'Port of Entry',
                    'Process of Encoding'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é mesh network?',
                alternativas: [
                    'Rede com fio',
                    'Rede onde dispositivos se conectam entre si formando malha',
                    'Um tipo de cabo',
                    'Um protocolo'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é packet loss?',
                alternativas: [
                    'Ganho de velocidade',
                    'Perda de pacotes de dados durante transmissão',
                    'Um tipo de cabo',
                    'Um programa'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é jitter?',
                alternativas: [
                    'Variação no tempo de latência',
                    'Um tipo de cabo',
                    'Um protocolo',
                    'Um programa'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é DMZ em redes?',
                alternativas: [
                    'Demilitarized Zone - área de rede menos protegida',
                    'Data Management Zone',
                    'Digital Media Zone',
                    'Dynamic Memory Zone'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é ARP?',
                alternativas: [
                    'Address Resolution Protocol - converte IP em MAC',
                    'Automatic Routing Protocol',
                    'Advanced Router Process',
                    'Access Request Protocol'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é ICMP?',
                alternativas: [
                    'Internet Control Message Protocol - usado pelo ping',
                    'Internal Connection Management Protocol',
                    'Integrated Computer Messaging Process',
                    'Interactive Communication Module Protocol'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é multicast?',
                alternativas: [
                    'Enviar para um destino',
                    'Enviar dados para múltiplos destinos simultaneamente',
                    'Receber múltiplos dados',
                    'Deletar dados'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é broadcast?',
                alternativas: [
                    'Enviar dados para todos da rede',
                    'Receber dados',
                    'Deletar rede',
                    'Criar rede'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é switch gerenciável?',
                alternativas: [
                    'Switch comum',
                    'Switch com configurações avançadas (VLANs, QoS)',
                    'Um router',
                    'Um modem'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é PoE?',
                alternativas: [
                    'Power over Ethernet - energia por cabo de rede',
                    'Protocol of Ethernet',
                    'Point of Entry',
                    'Program of Execution'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é QoS?',
                alternativas: [
                    'Quality of Service - priorização de tráfego',
                    'Quick Operating System',
                    'Query of Status',
                    'Quantum of Speed'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é gateway padrão?',
                alternativas: [
                    'Um programa',
                    'Roteador que conecta rede local à internet',
                    'Um cabo',
                    'Uma senha'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é port forwarding?',
                alternativas: [
                    'Deletar portas',
                    'Redirecionar tráfego de porta externa para interna',
                    'Criar portas',
                    'Fechar portas'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é NAT?',
                alternativas: [
                    'Network Address Translation - tradução de endereços',
                    'New Access Technology',
                    'Network Automatic Transmission',
                    'Node Authentication Token'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é traceroute?',
                alternativas: [
                    'Deletar rede',
                    'Comando que mostra caminho de pacotes até destino',
                    'Criar rota',
                    'Fechar conexão'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é SSID?',
                alternativas: [
                    'Service Set Identifier - nome da rede WiFi',
                    'Secure System ID',
                    'Super Speed Internet Device',
                    'System Security Identification'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é canal WiFi?',
                alternativas: [
                    'Um cabo',
                    'Frequência específica usada pela rede sem fio',
                    'Um programa',
                    'Uma senha'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é interferência WiFi?',
                alternativas: [
                    'Melhora sinal',
                    'Obstrução do sinal por outros dispositivos/redes',
                    'Aumenta velocidade',
                    'Protege rede'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é dual-band router?',
                alternativas: [
                    'Dois cabos',
                    'Router que opera em 2.4GHz e 5GHz',
                    'Dois modems',
                    'Duas antenas'
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
            },
            {
                pergunta: 'O que é backup incremental?',
                alternativas: [
                    'Backup completo sempre',
                    'Backup apenas das mudanças desde último backup',
                    'Não fazer backup',
                    'Deletar arquivos'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é nuvem pública?',
                alternativas: [
                    'Nuvem privada',
                    'Serviço de nuvem disponível para qualquer cliente',
                    'Sem custo sempre',
                    'Apenas para governo'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é nuvem privada?',
                alternativas: [
                    'Nuvem pública',
                    'Infraestrutura exclusiva para uma organização',
                    'Gratuíta sempre',
                    'Sem segurança'
                ],
                correta: 1
            },
            {
                pergunta: 'Como funciona versionamento na nuvem?',
                alternativas: [
                    'Apaga versões antigas',
                    'Mantém histórico de versões de arquivos',
                    'Cria cópias duplicadas',
                    'Deleta arquivos'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é CDN na nuvem?',
                alternativas: [
                    'Content Delivery Network - distribui conteúdo globalmente',
                    'Cloud Data Network',
                    'Central Download Node',
                    'Computer Deployment Network'
                ],
                correta: 0
            },
            {
                pergunta: 'Qual desvantagem da nuvem?',
                alternativas: [
                    'Acesso de qualquer lugar',
                    'Necessita de internet constante',
                    'Backup automático',
                    'Escalabilidade'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é escala horizontal na nuvem?',
                alternativas: [
                    'Aumentar poder de um servidor',
                    'Adicionar mais servidores',
                    'Deletar servidores',
                    'Mudar de nuvem'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é escala vertical na nuvem?',
                alternativas: [
                    'Adicionar mais servidores',
                    'Aumentar recursos (CPU/RAM) de servidor existente',
                    'Deletar recursos',
                    'Criar backup'
                ],
                correta: 1
            },
            {
                pergunta: 'O que são snapshots na nuvem?',
                alternativas: [
                    'Fotos',
                    'Cópias instantâneas do estado do sistema',
                    'Vídeos',
                    'Documentos'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é multi-tenant?',
                alternativas: [
                    'Um usuário apenas',
                    'Múltiplos clientes compartilham infraestrutura',
                    'Muitos servidores',
                    'Vários programas'
                ],
                correta: 1
            },
            {
                pergunta: 'Como funciona pagamento pay-as-you-go?',
                alternativas: [
                    'Pagar tudo adiantado',
                    'Pagar apenas pelo que usar',
                    'Gratuíto sempre',
                    'Pagar mensalidade fixa'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é elasticidade na nuvem?',
                alternativas: [
                    'Ser rígido',
                    'Capacidade de ajustar recursos automaticamente conforme demanda',
                    'Deletar recursos',
                    'Criar backups'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é alta disponibilidade?',
                alternativas: [
                    'Sistema offline sempre',
                    'Sistema online e acessível quase 100% do tempo',
                    'Sistema lento',
                    'Backup diário'
                ],
                correta: 1
            },
            {
                pergunta: 'O que são regiões na nuvem?',
                alternativas: [
                    'Países',
                    'Localizações geográficas de datacenters',
                    'Tipos de arquivos',
                    'Programas'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é redundancy?',
                alternativas: [
                    'Ter apenas uma cópia',
                    'Múltiplas cópias para evitar perda de dados',
                    'Deletar dados',
                    'Comprimir arquivos'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é container na nuvem?',
                alternativas: [
                    'Uma caixa física',
                    'Ambiente isolado para executar aplicações',
                    'Um tipo de arquivo',
                    'Uma pasta'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é serverless computing?',
                alternativas: [
                    'Sem servidores físicos',
                    'Executar código sem gerenciar servidores',
                    'Deletar servidores',
                    'Criar servidores'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é disaster recovery?',
                alternativas: [
                    'Causar desastres',
                    'Plano de recuperação após falhas catastróficas',
                    'Deletar dados',
                    'Criar vírus'
                ],
                correta: 1
            },
            {
                pergunta: 'O que são zonas de disponibilidade?',
                alternativas: [
                    'Uma única localização',
                    'Datacenters isolados dentro de região para redundância',
                    'Tipos de arquivos',
                    'Programas'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é migration para nuvem?',
                alternativas: [
                    'Sair da nuvem',
                    'Transferir sistemas locais para nuvem',
                    'Deletar dados',
                    'Criar backup'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é object storage?',
                alternativas: [
                    'Armazenar objetos físicos',
                    'Armazenamento de dados como objetos com metadados',
                    'Uma pasta',
                    'Um programa'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é block storage?',
                alternativas: [
                    'Bloquear arquivos',
                    'Armazenamento em blocos fixos como discos virtuais',
                    'Deletar blocos',
                    'Criar pastas'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é API na nuvem?',
                alternativas: [
                    'Um tipo de arquivo',
                    'Interface para programas se comunicarem com serviços',
                    'Um navegador',
                    'Um vírus'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é autoscaling?',
                alternativas: [
                    'Escala manual',
                    'Ajuste automático de recursos conforme demanda',
                    'Deletar recursos',
                    'Criar backup'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é load balancer?',
                alternativas: [
                    'Pesar arquivos',
                    'Distribuir tráfego entre múltiplos servidores',
                    'Deletar dados',
                    'Criar backup'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é edge computing?',
                alternativas: [
                    'Processar tudo na nuvem',
                    'Processar dados próximo à fonte para reduzir latência',
                    'Deletar dados',
                    'Criar backup'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é bandwidth na nuvem?',
                alternativas: [
                    'Largura física',
                    'Capacidade de transferência de dados',
                    'Tamanho de arquivo',
                    'Espaço em disco'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é SLA?',
                alternativas: [
                    'Service Level Agreement - acordo de nível de serviço',
                    'System Load Average',
                    'Storage Limit Access',
                    'Security Level Authentication'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é compliance na nuvem?',
                alternativas: [
                    'Descumprir regras',
                    'Conformidade com regulamentações e leis',
                    'Deletar dados',
                    'Criar arquivos'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é encryption at rest?',
                alternativas: [
                    'Dados não criptografados',
                    'Criptografia de dados armazenados',
                    'Dados em trânsito',
                    'Deletar dados'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é encryption in transit?',
                alternativas: [
                    'Dados armazenados',
                    'Criptografia de dados sendo transmitidos',
                    'Dados deletados',
                    'Backup'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é virtual machine na nuvem?',
                alternativas: [
                    'Máquina física',
                    'Simulação de computador rodando na nuvem',
                    'Um programa',
                    'Um arquivo'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é database as a service?',
                alternativas: [
                    'Banco de dados local',
                    'Banco de dados gerenciado na nuvem',
                    'Deletar banco',
                    'Criar backup'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é cold storage?',
                alternativas: [
                    'Armazenamento quente',
                    'Armazenamento de baixo custo para dados raramente acessados',
                    'Deletar dados',
                    'Backup diário'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é hot storage?',
                alternativas: [
                    'Armazenamento para dados frequentemente acessados',
                    'Dados antigos',
                    'Deletar tudo',
                    'Backup frio'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é disaster recovery?',
                alternativas: [
                    'Criar desastres',
                    'Plano de recuperação após falhas/desastres',
                    'Deletar backups',
                    'Remover proteção'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é multi-region deployment?',
                alternativas: [
                    'Deploy em uma região',
                    'Implantar aplicação em múltiplas regiões geográficas',
                    'Deletar deployment',
                    'Criar backup'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é edge computing?',
                alternativas: [
                    'Processamento centralizado',
                    'Processamento próximo à fonte de dados',
                    'Deletar dados',
                    'Backup na nuvem'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é CDN?',
                alternativas: [
                    'Content Delivery Network - rede de distribuição de conteúdo',
                    'Central Data Network',
                    'Cloud Distribution Node',
                    'Computer Delivery Network'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é load balancer?',
                alternativas: [
                    'Deleta servidores',
                    'Distribui tráfego entre múltiplos servidores',
                    'Cria backups',
                    'Desliga servidores'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é auto-scaling?',
                alternativas: [
                    'Escala fixa',
                    'Ajuste automático de recursos baseado na demanda',
                    'Deletar recursos',
                    'Desligar tudo'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é serverless computing?',
                alternativas: [
                    'Sem servidores físicos',
                    'Código executado sem gerenciar servidores',
                    'Deletar servidores',
                    'Criar servidores'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é container?',
                alternativas: [
                    'Uma caixa física',
                    'Pacote leve de software com dependências',
                    'Um arquivo',
                    'Uma pasta'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é Kubernetes?',
                alternativas: [
                    'Um jogo',
                    'Plataforma para orquestrar containers',
                    'Um navegador',
                    'Um antivírus'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é cloud migration?',
                alternativas: [
                    'Mover dados da nuvem para local',
                    'Processo de mover dados/apps para nuvem',
                    'Deletar nuvem',
                    'Criar backup'
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
            },
            {
                pergunta: 'O que faz a função HLOOKUP?',
                alternativas: [
                    'Busca vertical',
                    'Busca horizontal em tabela',
                    'Deleta dados',
                    'Soma valores'
                ],
                correta: 1
            },
            {
                pergunta: 'Como criar lista suspensa?',
                alternativas: [
                    'Menu Dados > Validação de Dados > Lista',
                    'Menu Inserir > Lista',
                    'Ctrl + L',
                    'Não é possível'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz a função CONCATENATE ou CONCAT?',
                alternativas: [
                    'Divide texto',
                    'Junta/une textos de várias células',
                    'Deleta texto',
                    'Conta caracteres'
                ],
                correta: 1
            },
            {
                pergunta: 'Como remover duplicatas?',
                alternativas: [
                    'Menu Dados > Remover Duplicatas',
                    'Menu Arquivo > Duplicatas',
                    'Ctrl + D',
                    'Deletar manualmente'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz a função LEN?',
                alternativas: [
                    'Soma valores',
                    'Conta número de caracteres em texto',
                    'Multiplica',
                    'Divide'
                ],
                correta: 1
            },
            {
                pergunta: 'Como dividir texto em colunas?',
                alternativas: [
                    'Menu Dados > Texto para Colunas',
                    'Menu Inserir > Dividir',
                    'Ctrl + T',
                    'Manualmente apenas'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz TRIM?',
                alternativas: [
                    'Remove espaços extras do texto',
                    'Corta números',
                    'Deleta células',
                    'Formata datas'
                ],
                correta: 0
            },
            {
                pergunta: 'Como criar nome definido para intervalo?',
                alternativas: [
                    'Menu Fórmulas > Definir Nome',
                    'Menu Arquivo > Nome',
                    'Ctrl + N',
                    'Não é possível'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz IFERROR?',
                alternativas: [
                    'Cria erros',
                    'Retorna valor alternativo se fórmula resultar em erro',
                    'Deleta erros',
                    'Conta erros'
                ],
                correta: 1
            },
            {
                pergunta: 'Como agrupar dados em Tabela Dinâmica?',
                alternativas: [
                    'Botão direito > Agrupar',
                    'Menu Arquivo > Agrupar',
                    'Ctrl + G',
                    'Não é possível'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz a função TEXT?',
                alternativas: [
                    'Deleta texto',
                    'Formata número como texto com formato específico',
                    'Conta letras',
                    'Cria texto'
                ],
                correta: 1
            },
            {
                pergunta: 'Como aplicar formatação condicional com fórmula?',
                alternativas: [
                    'Menu Página Inicial > Formatação Condicional > Nova Regra',
                    'Menu Arquivo > Formatar',
                    'Ctrl + F',
                    'Não é possível'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz SUBSTITUTE?',
                alternativas: [
                    'Substitui texto específico dentro de string',
                    'Deleta texto',
                    'Conta palavras',
                    'Formata células'
                ],
                correta: 0
            },
            {
                pergunta: 'Como criar série de preenchimento personalizada?',
                alternativas: [
                    'Menu Arquivo > Opções > Avançado > Editar Listas',
                    'Menu Inserir > Série',
                    'Ctrl + S',
                    'Não é possível'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz a função CHOOSE?',
                alternativas: [
                    'Deleta opções',
                    'Retorna valor de lista baseado em número de índice',
                    'Cria listas',
                    'Formata células'
                ],
                correta: 1
            },
            {
                pergunta: 'Como auditar fórmulas?',
                alternativas: [
                    'Menu Fórmulas > Rastrear Precedência/Dependência',
                    'Menu Arquivo > Auditar',
                    'Ctrl + A',
                    'Não é possível'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz INDIRECT?',
                alternativas: [
                    'Retorna referência especificada por string de texto',
                    'Deleta referências',
                    'Cria links',
                    'Formata células'
                ],
                correta: 0
            },
            {
                pergunta: 'Como criar botão para executar macro?',
                alternativas: [
                    'Menu Desenvolvedor > Inserir > Botão',
                    'Menu Arquivo > Botão',
                    'Ctrl + B',
                    'Não é possível'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz OFFSET?',
                alternativas: [
                    'Retorna referência deslocada de ponto inicial',
                    'Deleta células',
                    'Formata dados',
                    'Cria gráficos'
                ],
                correta: 0
            },
            {
                pergunta: 'Como criar campo calculado em Tabela Dinâmica?',
                alternativas: [
                    'Analisar > Campos, Itens e Conjuntos > Campo Calculado',
                    'Menu Inserir > Campo',
                    'Ctrl + F',
                    'Não é possível'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz MATCH?',
                alternativas: [
                    'Retorna posição de item em intervalo',
                    'Deleta itens',
                    'Formata células',
                    'Cria gráficos'
                ],
                correta: 0
            },
            {
                pergunta: 'Como usar referência estruturada em tabelas?',
                alternativas: [
                    'Usar nome da coluna entre [ ]',
                    'Usar números apenas',
                    'Ctrl + R',
                    'Não é possível'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz TRANSPOSE?',
                alternativas: [
                    'Inverte linhas e colunas',
                    'Deleta dados',
                    'Formata células',
                    'Cria gráficos'
                ],
                correta: 0
            },
            {
                pergunta: 'Como criar gráfico de cascata?',
                alternativas: [
                    'Menu Inserir > Gráficos Recomendados > Cascata',
                    'Menu Arquivo > Cascata',
                    'Ctrl + W',
                    'Não é possível'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz GETPIVOTDATA?',
                alternativas: [
                    'Extrai dados de Tabela Dinâmica',
                    'Deleta tabela',
                    'Cria tabela',
                    'Formata dados'
                ],
                correta: 0
            },
            {
                pergunta: 'Como usar fórmula de array?',
                alternativas: [
                    'Ctrl + Shift + Enter (versões antigas)',
                    'Ctrl + Enter',
                    'Shift + Enter',
                    'Enter apenas'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz UNIQUE?',
                alternativas: [
                    'Retorna lista de valores únicos',
                    'Deleta duplicatas',
                    'Conta valores',
                    'Formata células'
                ],
                correta: 0
            },
            {
                pergunta: 'Como criar sparklines?',
                alternativas: [
                    'Menu Inserir > Sparklines (mini gráficos em célula)',
                    'Menu Arquivo > Spark',
                    'Ctrl + S',
                    'Não é possível'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz FILTER?',
                alternativas: [
                    'Filtra intervalo baseado em critérios',
                    'Deleta dados',
                    'Formata células',
                    'Cria tabelas'
                ],
                correta: 0
            },
            {
                pergunta: 'Como consolidar dados de várias planilhas?',
                alternativas: [
                    'Menu Dados > Consolidar',
                    'Menu Arquivo > Consolidar',
                    'Ctrl + C',
                    'Copiar e colar apenas'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz XLOOKUP?',
                alternativas: [
                    'Função moderna e flexível de busca',
                    'Deleta dados',
                    'Formata células',
                    'Cria tabelas'
                ],
                correta: 0
            },
            {
                pergunta: 'Como criar segmentação de dados?',
                alternativas: [
                    'Menu Inserir > Segmentação de Dados (filtro visual)',
                    'Menu Arquivo > Filtro',
                    'Ctrl + F',
                    'Não é possível'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz LET?',
                alternativas: [
                    'Define variáveis dentro de fórmula',
                    'Deleta variáveis',
                    'Formata células',
                    'Cria gráficos'
                ],
                correta: 0
            },
            {
                pergunta: 'Como ativar guia Desenvolvedor?',
                alternativas: [
                    'Arquivo > Opções > Personalizar Faixa de Opções',
                    'Menu Exibir > Desenvolvedor',
                    'Ctrl + D',
                    'Já vem ativada'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz SORT?',
                alternativas: [
                    'Ordena intervalo de dados',
                    'Deleta dados',
                    'Formata células',
                    'Cria tabelas'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz FILTER?',
                alternativas: [
                    'Filtra dados baseado em critérios',
                    'Deleta filtros',
                    'Cria tabelas',
                    'Formata células'
                ],
                correta: 0
            },
            {
                pergunta: 'Como proteger fórmulas mas permitir entrada?',
                alternativas: [
                    'Desbloquear células de entrada, proteger planilha',
                    'Ctrl + P',
                    'Não é possível',
                    'Ocultar fórmulas'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz UNIQUE?',
                alternativas: [
                    'Retorna valores únicos de lista',
                    'Deleta duplicados',
                    'Conta valores',
                    'Formata células'
                ],
                correta: 0
            },
            {
                pergunta: 'Como criar dropdown dependente?',
                alternativas: [
                    'Usar fórmulas INDIRECT com validação',
                    'Ctrl + D',
                    'Menu Arquivo > Dropdown',
                    'Não é possível'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz SEQUENCE?',
                alternativas: [
                    'Gera sequência de números',
                    'Deleta sequências',
                    'Ordena dados',
                    'Cria tabelas'
                ],
                correta: 0
            },
            {
                pergunta: 'Como ocultar linhas/colunas?',
                alternativas: [
                    'Botão direito > Ocultar ou Ctrl + 9 (linha) / Ctrl + 0 (coluna)',
                    'Deletar linhas',
                    'Menu Arquivo > Ocultar',
                    'Não é possível'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz TRANSPOSE?',
                alternativas: [
                    'Transpõe linhas em colunas e vice-versa',
                    'Deleta dados',
                    'Ordena dados',
                    'Formata células'
                ],
                correta: 0
            },
            {
                pergunta: 'Como criar gráfico combinado?',
                alternativas: [
                    'Selecionar dados > Inserir > Gráfico Combinado',
                    'Ctrl + G',
                    'Menu Arquivo > Gráfico',
                    'Não é possível'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz AGGREGATE?',
                alternativas: [
                    'Realiza cálculos ignorando erros/valores ocultos',
                    'Agrupa células',
                    'Deleta dados',
                    'Formata células'
                ],
                correta: 0
            },
            {
                pergunta: 'Como compartilhar pasta de trabalho?',
                alternativas: [
                    'Arquivo > Compartilhar (OneDrive/SharePoint)',
                    'Ctrl + S',
                    'Menu Editar > Compartilhar',
                    'Enviar por email apenas'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz POWER QUERY?',
                alternativas: [
                    'Ferramenta de importação e transformação de dados',
                    'Deleta consultas',
                    'Formata dados',
                    'Cria backups'
                ],
                correta: 0
            },
            {
                pergunta: 'Como criar botão para executar macro?',
                alternativas: [
                    'Inserir > Formas > Atribuir Macro',
                    'Ctrl + B',
                    'Menu Arquivo > Botão',
                    'Não é possível'
                ],
                correta: 0
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
            },
            {
                pergunta: 'O que é grid em design?',
                alternativas: [
                    'Um jogo',
                    'Sistema de linhas para alinhar elementos',
                    'Um tipo de imagem',
                    'Um programa'
                ],
                correta: 1
            },
            {
                pergunta: 'Como usar teoria das cores?',
                alternativas: [
                    'Usar todas as cores',
                    'Combinar cores harm on mônicas (complementares, análogas)',
                    'Usar apenas preto',
                    'Cores aleatórias'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é kerning?',
                alternativas: [
                    'Um tipo de imagem',
                    'Espaçamento entre caracteres individuais',
                    'Uma cor',
                    'Um programa'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é leading/entrelinhas?',
                alternativas: [
                    'Uma fonte',
                    'Espaço vertical entre linhas de texto',
                    'Uma cor',
                    'Um tipo de imagem'
                ],
                correta: 1
            },
            {
                pergunta: 'Como exportar para impressão?',
                alternativas: [
                    'RGB, 72 DPI',
                    'CMYK, 300 DPI ou mais, PDF',
                    'PNG, 150 DPI',
                    'JPG, 100 DPI'
                ],
                correta: 1
            },
            {
                pergunta: 'O que são fontes display?',
                alternativas: [
                    'Para textos longos',
                    'Fontes decorativas para títulos e destaques',
                    'Fontes padrão',
                    'Fontes sem estilo'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é regra dos terços?',
                alternativas: [
                    'Dividir em 2 partes',
                    'Dividir imagem em 9 partes (3x3) para composição',
                    'Usar 3 cores',
                    'Ter 3 elementos'
                ],
                correta: 1
            },
            {
                pergunta: 'Como criar contraste?',
                alternativas: [
                    'Usar cores similares',
                    'Usar elementos diferentes (tamanho, cor, forma)',
                    'Tudo igual',
                    'Apenas uma cor'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é alinhamento em design?',
                alternativas: [
                    'Posicionar elementos aleatoriamente',
                    'Organizar elementos em linha visual comum',
                    'Deletar elementos',
                    'Mudar cores'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é proximidade?',
                alternativas: [
                    'Espalhar elementos',
                    'Agrupar elementos relacionados próximos',
                    'Deletar elementos',
                    'Mudar cores'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é repetição em design?',
                alternativas: [
                    'Nunca repetir nada',
                    'Reusar elementos para criar consistência',
                    'Copiar tudo',
                    'Deletar duplicatas'
                ],
                correta: 1
            },
            {
                pergunta: 'Como criar ênfase/destaque?',
                alternativas: [
                    'Tudo igual',
                    'Usar cor, tamanho ou posição diferente',
                    'Esconder elemento',
                    'Deletar elemento'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é simetria em design?',
                alternativas: [
                    'Tudo assimétrico',
                    'Equilíbrio espelhado em torno de eixo',
                    'Elementos aleatórios',
                    'Sem padrão'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é assimetria?',
                alternativas: [
                    'Simetria perfeita',
                    'Equilíbrio sem espelhamento',
                    'Sem equilíbrio',
                    'Tudo igual'
                ],
                correta: 1
            },
            {
                pergunta: 'Como usar gradientes?',
                alternativas: [
                    'Nunca usar',
                    'Transição suave entre cores para profundidade',
                    'Apenas cores sólidas',
                    'Deletar cores'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é texture em design?',
                alternativas: [
                    'Apenas cores lisas',
                    'Aparência tátil visual (madeira, papel)',
                    'Um tipo de fonte',
                    'Uma cor'
                ],
                correta: 1
            },
            {
                pergunta: 'Como criar profundidade?',
                alternativas: [
                    'Tudo plano',
                    'Usar sombras, gradientes, sobreposição',
                    'Apenas 2D',
                    'Sem efeitos'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é psicologia das cores?',
                alternativas: [
                    'Cores aleatórias',
                    'Significados e emoções associadas a cores',
                    'Apenas decoração',
                    'Sem significado'
                ],
                correta: 1
            },
            {
                pergunta: 'Qual cor transmite confiança?',
                alternativas: [
                    'Vermelho',
                    'Azul',
                    'Amarelo',
                    'Roxo'
                ],
                correta: 1
            },
            {
                pergunta: 'Como criar equilíbrio visual?',
                alternativas: [
                    'Tudo de um lado',
                    'Distribuir peso visual uniformemente',
                    'Elementos aleatórios',
                    'Sem organização'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é ponto focal?',
                alternativas: [
                    'Ver tudo igual',
                    'Elemento que atrai atenção primeiro',
                    'Sem destaque',
                    'Tudo desfocado'
                ],
                correta: 1
            },
            {
                pergunta: 'Como usar tipografia efetivamente?',
                alternativas: [
                    'Muitas fontes diferentes',
                    'Máximo 2-3 fontes complementares',
                    'Uma fonte para tudo',
                    'Fontes aleatórias'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é legibilidade?',
                alternativas: [
                    'Dificultar leitura',
                    'Facilidade de ler e distinguir caracteres',
                    'Usar fontes pequenas',
                    'Baixo contraste'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é branding visual?',
                alternativas: [
                    'Sem identidade',
                    'Elementos visuais que representam marca',
                    'Apenas um logo',
                    'Cores aleatórias'
                ],
                correta: 1
            },
            {
                pergunta: 'Como criar call-to-action efetivo?',
                alternativas: [
                    'Esconder botão',
                    'Botão destacado com texto claro',
                    'Sem cor',
                    'Texto confuso'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é minimalismo?',
                alternativas: [
                    'Muitos elementos',
                    'Design limpo com elementos essenciais',
                    'Cores vibrantes sempre',
                    'Excesso de decoração'
                ],
                correta: 1
            },
            {
                pergunta: 'Como usar ícones?',
                alternativas: [
                    'Ícones complexos',
                    'Simples, reconhecíveis, consistentes',
                    'Diferentes estilos',
                    'Sem significado'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é mood board?',
                alternativas: [
                    'Uma cor',
                    'Coleção de inspirações visuais para projeto',
                    'Um programa',
                    'Um tipo de arquivo'
                ],
                correta: 1
            },
            {
                pergunta: 'Como criar identidade visual?',
                alternativas: [
                    'Cores e estilos aleatórios',
                    'Paleta, fontes e elementos consistentes',
                    'Mudar sempre',
                    'Sem padrão'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é design responsivo?',
                alternativas: [
                    'Apenas desktop',
                    'Design que se adapta a diferentes telas',
                    'Tamanho fixo',
                    'Apenas mobile'
                ],
                correta: 1
            },
            {
                pergunta: 'Como testar design?',
                alternativas: [
                    'Não testar',
                    'Feedback de usuários, testes A/B',
                    'Decidir sozinho',
                    'Adivinhar'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é escala em design?',
                alternativas: [
                    'Tudo mesmo tamanho',
                    'Variação de tamanho para hierarquia',
                    'Elementos pequenos',
                    'Sem proporção'
                ],
                correta: 1
            },
            {
                pergunta: 'Como criar consistência?',
                alternativas: [
                    'Mudar estilos constantemente',
                    'Manter padrões de cores, fontes e espaçamento',
                    'Design diferente em cada página',
                    'Sem regras'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é copyright em design?',
                alternativas: [
                    'Usar qualquer imagem',
                    'Direitos autorais sobre criações',
                    'Tudo é grátis',
                    'Copiar tudo'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é mockup?',
                alternativas: [
                    'Produto final',
                    'Modelo/protótipo visual do design',
                    'Um erro',
                    'Uma cor'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é wireframe?',
                alternativas: [
                    'Design colorido',
                    'Esboço estrutural básico sem detalhes visuais',
                    'Produto final',
                    'Uma fonte'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é flat design?',
                alternativas: [
                    'Design 3D',
                    'Estilo minimalista bidimensional',
                    'Design complexo',
                    'Com sombras profundas'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é skeuomorfismo?',
                alternativas: [
                    'Design plano',
                    'Design que imita objetos reais',
                    'Minimalismo extremo',
                    'Sem detalhes'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é grid system?',
                alternativas: [
                    'Elementos aleatórios',
                    'Sistema de linhas guia para organizar elementos',
                    'Sem estrutura',
                    'Apenas bordas'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é call-to-action (CTA)?',
                alternativas: [
                    'Texto decorativo',
                    'Elemento que incentiva ação (botão, link)',
                    'Imagem de fundo',
                    'Título principal'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é branding?',
                alternativas: [
                    'Fazer design',
                    'Criar identidade visual de marca',
                    'Escolher cores',
                    'Fazer logo'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é favicon?',
                alternativas: [
                    'Logo grande',
                    'Ícone pequeno exibido na aba do navegador',
                    'Imagem de fundo',
                    'Um vídeo'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é portfolio de design?',
                alternativas: [
                    'Lista de tarefas',
                    'Coleção dos melhores trabalhos',
                    'Agenda',
                    'Certificados'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é pixel perfeito?',
                alternativas: [
                    'Design aproximado',
                    'Design precisamente alinhado pixel por pixel',
                    'Imagem borrada',
                    'Sem medidas'
                ],
                correta: 1
            },
            {
                pergunta: 'O que são breakpoints?',
                alternativas: [
                    'Erros no design',
                    'Pontos onde layout muda para diferentes telas',
                    'Pausas no trabalho',
                    'Cores quebradas'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é hierarchy visual?',
                alternativas: [
                    'Tudo igual',
                    'Organização de elementos por importância',
                    'Sem ordem',
                    'Aleatório'
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
            },
            {
                pergunta: 'O que são tuplas em Python?',
                alternativas: [
                    'Listas mutáveis',
                    'Sequências imutáveis de valores',
                    'Dicionários',
                    'Funções'
                ],
                correta: 1
            },
            {
                pergunta: 'Como criar loop infinito?',
                alternativas: [
                    'for i in range(10):',
                    'while True:',
                    'loop forever:',
                    'infinite loop:'
                ],
                correta: 1
            },
            {
                pergunta: 'O que faz break em loop?',
                alternativas: [
                    'Continua loop',
                    'Sai do loop',
                    'Reinicia loop',
                    'Pausa loop'
                ],
                correta: 1
            },
            {
                pergunta: 'O que faz continue em loop?',
                alternativas: [
                    'Sai do loop',
                    'Pula para próxima iteração',
                    'Para programa',
                    'Deleta variável'
                ],
                correta: 1
            },
            {
                pergunta: 'Como converter lista em string?',
                alternativas: [
                    'str(lista)',
                    '\"\".join(lista)',
                    'list_to_string()',
                    'convert(lista)'
                ],
                correta: 1
            },
            {
                pergunta: 'O que são list comprehensions?',
                alternativas: [
                    'Erros de lista',
                    'Criar listas de forma concisa: [x for x in range(10)]',
                    'Deletar listas',
                    'Imprimir listas'
                ],
                correta: 1
            },
            {
                pergunta: 'Como lidar com exceções?',
                alternativas: [
                    'Ignorar erros',
                    'try: ... except:',
                    'if error:',
                    'catch error'
                ],
                correta: 1
            },
            {
                pergunta: 'O que faz pass em Python?',
                alternativas: [
                    'Deleta código',
                    'Placeholder que não faz nada',
                    'Passa valores',
                    'Cria função'
                ],
                correta: 1
            },
            {
                pergunta: 'Como abrir arquivo?',
                alternativas: [
                    'open(\"arquivo.txt\", \"r\")',
                    'file(\"arquivo.txt\")',
                    'read(\"arquivo.txt\")',
                    'get(\"arquivo.txt\")'
                ],
                correta: 0
            },
            {
                pergunta: 'O que são métodos de string?',
                alternativas: [
                    'Variáveis',
                    'Funções integradas para manipular strings',
                    'Loops',
                    'Erros'
                ],
                correta: 1
            },
            {
                pergunta: 'Como verificar tipo de variável?',
                alternativas: [
                    'type(variavel)',
                    'typeof(variavel)',
                    'get_type()',
                    'check()'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz .strip()?',
                alternativas: [
                    'Deleta string',
                    'Remove espaços em branco das pontas',
                    'Divide string',
                    'Une strings'
                ],
                correta: 1
            },
            {
                pergunta: 'Como dividir string?',
                alternativas: [
                    'string.divide()',
                    'string.split()',
                    'split_string()',
                    'divide(string)'
                ],
                correta: 1
            },
            {
                pergunta: 'O que são argumentos *args?',
                alternativas: [
                    'Erro',
                    'Número variável de argumentos posicionais',
                    'Argumentos fixos',
                    'Sem argumentos'
                ],
                correta: 1
            },
            {
                pergunta: 'O que são argumentos **kwargs?',
                alternativas: [
                    'Erro',
                    'Número variável de argumentos nomeados',
                    'Argumentos fixos',
                    'Sem argumentos'
                ],
                correta: 1
            },
            {
                pergunta: 'Como criar classe?',
                alternativas: [
                    'function NomeClasse:',
                    'class NomeClasse:',
                    'object NomeClasse:',
                    'create class:'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é self em métodos?',
                alternativas: [
                    'Uma variável global',
                    'Referência à instância da classe',
                    'Um erro',
                    'Um loop'
                ],
                correta: 1
            },
            {
                pergunta: 'Como criar método?',
                alternativas: [
                    'function nome(self):',
                    'def nome(self):',
                    'method nome():',
                    'create nome():'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é __init__?',
                alternativas: [
                    'Erro',
                    'Construtor da classe',
                    'Destruidor',
                    'Loop'
                ],
                correta: 1
            },
            {
                pergunta: 'Como instanciar classe?',
                alternativas: [
                    'NomeClasse.create()',
                    'obj = NomeClasse()',
                    'new NomeClasse()',
                    'instance NomeClasse()'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é herança?',
                alternativas: [
                    'Copiar código',
                    'Classe filha herda atributos/métodos da pai',
                    'Deletar classes',
                    'Criar variáveis'
                ],
                correta: 1
            },
            {
                pergunta: 'Como importar biblioteca específica?',
                alternativas: [
                    'from biblioteca import funcao',
                    'get biblioteca.funcao',
                    'use biblioteca::funcao',
                    'require biblioteca.funcao'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz enumerate()?',
                alternativas: [
                    'Deleta elementos',
                    'Retorna índice e valor ao iterar',
                    'Conta elementos',
                    'Ordena lista'
                ],
                correta: 1
            },
            {
                pergunta: 'Como ordenar lista?',
                alternativas: [
                    'lista.order()',
                    'lista.sort() ou sorted(lista)',
                    'order(lista)',
                    'arrange(lista)'
                ],
                correta: 1
            },
            {
                pergunta: 'O que faz zip()?',
                alternativas: [
                    'Comprime arquivos',
                    'Combina múltiplas listas em tuplas',
                    'Deleta listas',
                    'Ordena listas'
                ],
                correta: 1
            },
            {
                pergunta: 'Como reverter lista?',
                alternativas: [
                    'lista.back()',
                    'lista.reverse() ou lista[::-1]',
                    'reverse_list()',
                    'lista.backwards()'
                ],
                correta: 1
            },
            {
                pergunta: 'O que são lambda functions?',
                alternativas: [
                    'Funções grandes',
                    'Funções anônimas de uma linha',
                    'Erros',
                    'Variáveis'
                ],
                correta: 1
            },
            {
                pergunta: 'Como usar map()?',
                alternativas: [
                    'Cria mapas',
                    'Aplica função a todos elementos de iterável',
                    'Deleta elementos',
                    'Ordena elementos'
                ],
                correta: 1
            },
            {
                pergunta: 'Como usar filter()?',
                alternativas: [
                    'Deleta tudo',
                    'Filtra elementos baseado em condição',
                    'Ordena elementos',
                    'Cria listas'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é PEP 8?',
                alternativas: [
                    'Um erro',
                    'Guia de estilo para código Python',
                    'Uma biblioteca',
                    'Um framework'
                ],
                correta: 1
            },
            {
                pergunta: 'Como criar virtual environment?',
                alternativas: [
                    'venv create',
                    'python -m venv nome_env',
                    'create env',
                    'virtual nome_env'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é pip?',
                alternativas: [
                    'Um jogo',
                    'Gerenciador de pacotes Python',
                    'Uma variável',
                    'Um erro'
                ],
                correta: 1
            },
            {
                pergunta: 'Como instalar pacote com pip?',
                alternativas: [
                    'pip get pacote',
                    'pip install pacote',
                    'install pacote',
                    'pip download pacote'
                ],
                correta: 1
            },
            {
                pergunta: 'O que é requirements.txt?',
                alternativas: [
                    'Um código',
                    'Arquivo com lista de dependências do projeto',
                    'Um erro',
                    'Uma função'
                ],
                correta: 1
            },
            {
                pergunta: 'Como escrever comentário em Python?',
                alternativas: [
                    '// comentário',
                    '# comentário',
                    '/* comentário */',
                    '<!-- comentário -->'
                ],
                correta: 1
            },
            {
                pergunta: 'O que faz lambda em Python?',
                alternativas: [
                    'Cria função anônima de uma linha',
                    'Deleta funções',
                    'Cria classes',
                    'Importa módulos'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é list comprehension?',
                alternativas: [
                    'Um tipo de loop',
                    'Forma concisa de criar listas',
                    'Um erro',
                    'Uma biblioteca'
                ],
                correta: 1
            },
            {
                pergunta: 'Como converter string para int?',
                alternativas: [
                    'int(string)',
                    'str.to_int()',
                    'convert(string)',
                    'string.int()'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz enumerate()?',
                alternativas: [
                    'Conta elementos',
                    'Retorna índice e valor em iteração',
                    'Deleta lista',
                    'Ordena lista'
                ],
                correta: 1
            },
            {
                pergunta: 'Como verificar tipo de variável?',
                alternativas: [
                    'type(variavel)',
                    'variavel.type()',
                    'typeof(variavel)',
                    'get_type(variavel)'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é slicing?',
                alternativas: [
                    'Deletar lista',
                    'Extrair partes de sequência [início:fim]',
                    'Ordenar lista',
                    'Criar lista'
                ],
                correta: 1
            },
            {
                pergunta: 'Como concatenar strings?',
                alternativas: [
                    'string1 + string2',
                    'concat(string1, string2)',
                    'string1.add(string2)',
                    'merge(string1, string2)'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz range()?',
                alternativas: [
                    'Gera sequência de números',
                    'Deleta números',
                    'Ordena números',
                    'Soma números'
                ],
                correta: 0
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
            },
            {
                pergunta: 'O que faz JSON.stringify()?',
                alternativas: [
                    'Converter objeto em string JSON',
                    'Deletar objetos',
                    'Criar arrays',
                    'Formatar HTML'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é arrow function?',
                alternativas: [
                    'const func = () => {}',
                    'function func() {}',
                    'func function',
                    'new Function()'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é hoisting?',
                alternativas: [
                    'Movimento de declarações para topo do escopo',
                    'Deletar variáveis',
                    'Criar funções',
                    'Um erro'
                ],
                correta: 0
            },
            {
                pergunta: 'Diferença entre let e var?',
                alternativas: [
                    'Não há diferença',
                    'let tem escopo de bloco, var de função',
                    'var é mais moderno',
                    'let é mais lento'
                ],
                correta: 1
            },
            {
                pergunta: 'O que faz .filter()?',
                alternativas: [
                    'Cria novo array com elementos que passam no teste',
                    'Deleta elementos',
                    'Ordena array',
                    'Conta elementos'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é callback function?',
                alternativas: [
                    'Função passada como argumento para outra função',
                    'Função que retorna',
                    'Função principal',
                    'Um erro'
                ],
                correta: 0
            },
            {
                pergunta: 'Como prevenir comportamento padrão de evento?',
                alternativas: [
                    'event.preventDefault()',
                    'event.stop()',
                    'event.cancel()',
                    'event.prevent()'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz .reduce()?',
                alternativas: [
                    'Reduz array a único valor acumulado',
                    'Remove elementos',
                    'Ordena array',
                    'Duplica array'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é this em JavaScript?',
                alternativas: [
                    'Referência ao objeto de contexto',
                    'Uma string',
                    'Um número',
                    'Um erro'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz .find()?',
                alternativas: [
                    'Retorna primeiro elemento que satisfaz condição',
                    'Remove elementos',
                    'Ordena array',
                    'Conta elementos'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é módulo ES6?',
                alternativas: [
                    'Sistema de import/export de código',
                    'Um tipo de loop',
                    'Uma função',
                    'Um erro'
                ],
                correta: 0
            },
            {
                pergunta: 'Como exportar função?',
                alternativas: [
                    'export function nome() {}',
                    'function export nome() {}',
                    'export nome function',
                    'send function nome'
                ],
                correta: 0
            },
            {
                pergunta: 'Como importar módulo?',
                alternativas: [
                    'import { funcao } from "arquivo"',
                    'get funcao from arquivo',
                    'require(funcao)',
                    'use funcao'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é Webpack?',
                alternativas: [
                    'Bundler de módulos JavaScript',
                    'Um framework',
                    'Uma biblioteca',
                    'Um navegador'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é npm?',
                alternativas: [
                    'Node Package Manager - gerenciador de pacotes',
                    'New Programming Method',
                    'Network Protocol Module',
                    'No Package Manager'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz setTimeout()?',
                alternativas: [
                    'Executa código após delay especificado',
                    'Para o programa',
                    'Deleta variáveis',
                    'Cria loops'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz setInterval()?',
                alternativas: [
                    'Executa código repetidamente em intervalos',
                    'Para execução',
                    'Deleta funções',
                    'Cria variáveis'
                ],
                correta: 0
            },
            {
                pergunta: 'Como parar setInterval?',
                alternativas: [
                    'clearInterval(id)',
                    'stopInterval()',
                    'interval.stop()',
                    'cancelInterval()'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é strict mode?',
                alternativas: [
                    '"use strict" - modo que impõe regras mais rígidas',
                    'Um tipo de loop',
                    'Uma função',
                    'Um erro'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz .some()?',
                alternativas: [
                    'Verifica se ALGUM elemento passa no teste',
                    'Conta todos',
                    'Remove elementos',
                    'Ordena array'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz .every()?',
                alternativas: [
                    'Verifica se TODOS elementos passam no teste',
                    'Conta elementos',
                    'Remove items',
                    'Ordena array'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é destructuring de array?',
                alternativas: [
                    'const [a, b] = array',
                    'array.destroy()',
                    'delete array',
                    'array.split()'
                ],
                correta: 0
            },
            {
                pergunta: 'O que são rest parameters?',
                alternativas: [
                    'function(...args) - agrupa argumentos em array',
                    'Pausar função',
                    'Deletar parâmetros',
                    'Um erro'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é default parameter?',
                alternativas: [
                    'function(x = 5) - valor padrão se não fornecido',
                    'Parâmetro obrigatório',
                    'Primeiro parâmetro',
                    'Um erro'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz Object.keys()?',
                alternativas: [
                    'Retorna array com chaves do objeto',
                    'Deleta objeto',
                    'Cria objeto',
                    'Ordena objeto'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz Object.values()?',
                alternativas: [
                    'Retorna array com valores do objeto',
                    'Deleta valores',
                    'Conta valores',
                    'Ordena valores'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é prototype?',
                alternativas: [
                    'Mecanismo de herança em JavaScript',
                    'Um tipo de array',
                    'Uma função',
                    'Um erro'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é class em ES6?',
                alternativas: [
                    'Sintaxe para criar objetos e herança',
                    'Um loop',
                    'Uma função simples',
                    'Um erro'
                ],
                correta: 0
            },
            {
                pergunta: 'Como criar instância de classe?',
                alternativas: [
                    'const obj = new MinhaClasse()',
                    'const obj = MinhaClasse',
                    'const obj = create MinhaClasse',
                    'const obj = MinhaClasse.new()'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é constructor?',
                alternativas: [
                    'Método especial para inicializar objeto',
                    'Deletar objeto',
                    'Uma variável',
                    'Um loop'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é extends?',
                alternativas: [
                    'Cria classe filha que herda de pai',
                    'Deleta classe',
                    'Copia classe',
                    'Um erro'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz super()?',
                alternativas: [
                    'Chama constructor da classe pai',
                    'Deleta pai',
                    'Cria classe',
                    'Um erro'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é getter?',
                alternativas: [
                    'Método que retorna propriedade como se fosse atributo',
                    'Deleta propriedade',
                    'Cria objeto',
                    'Um erro'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é setter?',
                alternativas: [
                    'Método que define propriedade como se fosse atributo',
                    'Remove propriedade',
                    'Cria classe',
                    'Um erro'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é Symbol?',
                alternativas: [
                    'Tipo de dado primitivo único',
                    'Uma string',
                    'Um número',
                    'Um array'
                ],
                correta: 0
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
            },
            {
                pergunta: 'O que faz git status?',
                alternativas: [
                    'Mostra estado atual das alterações',
                    'Deleta arquivos',
                    'Cria branch',
                    'Envia commits'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é README.md?',
                alternativas: [
                    'Um erro',
                    'Arquivo de documentação do projeto em Markdown',
                    'Uma pasta',
                    'Um comando'
                ],
                correta: 1
            },
            {
                pergunta: 'Como desfazer último commit local?',
                alternativas: [
                    'git reset HEAD~1',
                    'git undo',
                    'git revert last',
                    'git remove commit'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é .gitignore?',
                alternativas: [
                    'Um comando',
                    'Arquivo que lista o que Git deve ignorar',
                    'Uma branch',
                    'Um erro'
                ],
                correta: 1
            },
            {
                pergunta: 'Como ver diferenças de arquivos?',
                alternativas: [
                    'git diff',
                    'git compare',
                    'git changes',
                    'git show-diff'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é stash?',
                alternativas: [
                    'Guardar temporariamente alterações sem commit',
                    'Deletar mudanças',
                    'Criar branch',
                    'Enviar para GitHub'
                ],
                correta: 0
            },
            {
                pergunta: 'Como aplicar stash salvo?',
                alternativas: [
                    'git stash apply ou git stash pop',
                    'git stash get',
                    'git stash load',
                    'git stash use'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz git fetch?',
                alternativas: [
                    'Baixa mudanças sem fazer merge',
                    'Envia commits',
                    'Deleta branch',
                    'Cria repositório'
                ],
                correta: 0
            },
            {
                pergunta: 'Como deletar branch?',
                alternativas: [
                    'git branch -d branch-name',
                    'git delete branch-name',
                    'git remove branch-name',
                    'git drop branch-name'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é tag no Git?',
                alternativas: [
                    'Marcador de versão específica do código',
                    'Uma branch',
                    'Um commit',
                    'Um arquivo'
                ],
                correta: 0
            },
            {
                pergunta: 'Como criar tag?',
                alternativas: [
                    'git tag v1.0',
                    'git create-tag v1.0',
                    'git new tag v1.0',
                    'git add-tag v1.0'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz git merge?',
                alternativas: [
                    'Junta alterações de branches',
                    'Deleta branch',
                    'Cria commit',
                    'Envia para GitHub'
                ],
                correta: 0
            },
            {
                pergunta: 'Como ver branches existentes?',
                alternativas: [
                    'git branch',
                    'git list branches',
                    'git show branches',
                    'git get branches'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é rebase?',
                alternativas: [
                    'Reorganizar histórico de commits',
                    'Deletar commits',
                    'Criar branch',
                    'Enviar para GitHub'
                ],
                correta: 0
            },
            {
                pergunta: 'Como configurar nome de usuário?',
                alternativas: [
                    'git config user.name "Seu Nome"',
                    'git set user "Seu Nome"',
                    'git user "Seu Nome"',
                    'git name "Seu Nome"'
                ],
                correta: 0
            },
            {
                pergunta: 'Como configurar email?',
                alternativas: [
                    'git config user.email "email@example.com"',
                    'git set email "email@example.com"',
                    'git email "email@example.com"',
                    'git user-email "email@example.com"'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é origin?',
                alternativas: [
                    'Nome padrão do repositório remoto',
                    'Primeira branch',
                    'Commit inicial',
                    'Uma tag'
                ],
                correta: 0
            },
            {
                pergunta: 'Como adicionar repositório remoto?',
                alternativas: [
                    'git remote add origin URL',
                    'git add remote URL',
                    'git connect URL',
                    'git set remote URL'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz git cherry-pick?',
                alternativas: [
                    'Aplica commit específico de outra branch',
                    'Deleta commit',
                    'Cria branch',
                    'Envia commits'
                ],
                correta: 0
            },
            {
                pergunta: 'Como renomear branch atual?',
                alternativas: [
                    'git branch -m novo-nome',
                    'git rename novo-nome',
                    'git change-name novo-nome',
                    'git mv novo-nome'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é HEAD?',
                alternativas: [
                    'Ponteiro para commit atual',
                    'Primeira branch',
                    'Último arquivo',
                    'Um comando'
                ],
                correta: 0
            },
            {
                pergunta: 'Como ver histórico de um arquivo?',
                alternativas: [
                    'git log arquivo.txt',
                    'git history arquivo.txt',
                    'git show arquivo.txt',
                    'git file-log arquivo.txt'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é Issues no GitHub?',
                alternativas: [
                    'Sistema de rastreamento de bugs e tarefas',
                    'Erros de código',
                    'Commits',
                    'Branches'
                ],
                correta: 0
            },
            {
                pergunta: 'O que são GitHub Actions?',
                alternativas: [
                    'Automação de CI/CD no GitHub',
                    'Comandos Git',
                    'Tipo de commit',
                    'Uma branch'
                ],
                correta: 0
            },
            {
                pergunta: 'Como clonar branch específica?',
                alternativas: [
                    'git clone -b branch-name URL',
                    'git clone URL branch-name',
                    'git get-branch branch-name URL',
                    'git clone branch-name'
                ],
                correta: 0
            },
            {
                pergunta: 'O que faz git clean?',
                alternativas: [
                    'Remove arquivos não rastreados',
                    'Deleta branch',
                    'Limpa commits',
                    'Formata código'
                ],
                correta: 0
            },
            {
                pergunta: 'Como ver quem modificou cada linha?',
                alternativas: [
                    'git blame arquivo.txt',
                    'git who arquivo.txt',
                    'git author arquivo.txt',
                    'git show-author arquivo.txt'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é GitHub Pages?',
                alternativas: [
                    'Hospedagem gratuita de sites estáticos',
                    'Documentação do Git',
                    'Uma branch',
                    'Um comando'
                ],
                correta: 0
            },
            {
                pergunta: 'Como desfazer alterações não commitadas?',
                alternativas: [
                    'git checkout -- arquivo.txt',
                    'git undo arquivo.txt',
                    'git revert arquivo.txt',
                    'git remove arquivo.txt'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é squash?',
                alternativas: [
                    'Combinar múltiplos commits em um',
                    'Deletar commits',
                    'Criar branch',
                    'Enviar para GitHub'
                ],
                correta: 0
            },
            {
                pergunta: 'Como criar repositório vazio?',
                alternativas: [
                    'git init',
                    'git create',
                    'git new',
                    'git start'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é upstream?',
                alternativas: [
                    'Repositório original de um fork',
                    'Primeira branch',
                    'Commit inicial',
                    'Uma tag'
                ],
                correta: 0
            },
            {
                pergunta: 'Como atualizar fork com original?',
                alternativas: [
                    'git fetch upstream e git merge',
                    'git sync',
                    'git update',
                    'git pull-original'
                ],
                correta: 0
            },
            {
                pergunta: 'O que é Gist?',
                alternativas: [
                    'Compartilhamento rápido de código/notas no GitHub',
                    'Um comando Git',
                    'Uma branch',
                    'Um tipo de commit'
                ],
                correta: 0
            },
            {
                pergunta: 'Como contribuir para projeto open source?',
                alternativas: [
                    'Fork, branch, commit, pull request',
                    'Apenas commit',
                    'Clone e push',
                    'Download e edit'
                ],
                correta: 0
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
