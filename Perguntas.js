export default [
    // Tema:  Acessibilidade  //
    // Perguntas Fáceis  //
       {//P1 (A)
           question: "O que significa WCAG?",
           answers: [
               { option: "Web Content Accessibility Guidelines", correct: true},
               { option: "World Content Accessibility Guide", correct: false},
               { option: "Web Compliance and Accessibility Goals", correct: false},
               { option: "Wide Content Accessibility Guidelines", correct: false},
           ],
       },
       {//P2 (B) (Desing vermelho)
           question: "Qual elemento HTML é usado para fornecer uma descrição textual de uma imagem para leitores de tela?",
           answers: [
               { option: "<desc>", correct: false},
               { option: "<alt>", correct: true},
               { option: "<text>", correct: false},
               { option: "<caprion>", correct: false},
           ], 
       },
       {//P3 (A)
           question: "O que é constraste adequado para acessibilidade?",
           answers: [
               { option: "Alto contraste entre texto e fundo", correct: true},
               { option: "Uso exclusivo de cores vibrantes", correct: false},
               { option: "Apenas preto e branco", correct: false},
               { option: "Nenhuma requisito específico", correct: false},
           ],
       },
       {//P4 (A)
           question: "Qual tecnologia auxilia usuários com deficiência visual na navegação na web?",
           answers: [
               { option: "Leitores de tela", correct: true},
               { option: "VR Headsets", correct: false},
               { option: "Chatbots", correct: false},
               { option: "Mapas interativos", correct: false},
           ],
       },
       {//P5 (A)
           question: 'O que significa "teclado acessível"?',
           answers: [
               { option: "Interface que pode ser navegação sem mouse", correct: true},
               { option: "Apenas teclados físicos", correct: false},
               { option: "Necessidade de atalhos avançados", correct: false},
               { option: "Exige software especial", correct: false},
           ],
       },
       {//P6 (A) (Desing vermelho)
           question: "Qual atributo HTML melhora a navegação para leitores de tela?",
           answers: [
               { option: "arial-label", correct: true},
               { option: "text-enhance", correct: false},
               { option: "nav-guide", correct: false},
               { option: "label-access", correct: false},
           ],
       },
       {//P7 (C)
           question: "Qual dos seguintes NÃO é um princípio fundamental das diretrizes WCAG?",
           answers: [
               { option: "Perceptível", correct: false},
               { option: "Operável", correct: false},
               { option: "Rápido", correct: true},
               { option: "Robusto", correct: false},
           ],
       },
       // Perguntas Médias  //
       {//P8 (B)
           question: 'O que é "Texto Alternativo" (alt text)?',
           answers: [
               { option: "Texto decorativo em imagens", correct: false},
               { option: "Texto usado para descrever imagens para leitores de tela", correct: true},
               { option: "Texto oculto no código-fonte", correct: false},
               { option: "Uma legenda de vídeo", correct: false},
           ],
       },
       {//P9 (A)
           question: "Qual WCAG sugere o nível mínimo de conformidade para sites públicos?",
           answers: [
               { option: "AA", correct: true},
               { option: "AAA", correct: false},
               { option: "A", correct: false},
               { option: "Nenhuma conformidade é obrigatória", correct: false},
           ],
       },
       {//P10 (A)
           question: 'Qual é o objetivo do "modo de alto contraste" em sistemas operacionais?',
           answers: [
               { option: "Melhorar a acessibilidade visual", correct: true},
               { option: "Reduzir brilho da tela", correct: false},
               { option: "Melhorar gráficos de jogos", correct: false},
               { option: "Aumentar a velocidade de carregamento", correct: false},
           ],
       },
       // Perguntas Difíceis //
       {//P11 (A)
           question: "Qual tecnologia permite navegação por voz para acessibilidade?",
           answers: [
               { option: "Web Speech API", correct: true},
               { option: "VoiceOver SDK", correct: false},
               { option: "HTML Audio API", correct: false},
               { option: "ScreenReader.js", correct: false},
           ],
       },
       {//P12 (A)
           question: "Qual diretriz WCAG exige que conteúdo multimídia tenha legendas?",
           answers: [
               {option: "1.2.2", correct: true},
               {option: "2.4.5", correct: false},
               {option: "3.1.3", correct: false},
               {option: "4.2.1", correct: false},
           ],
       },
       // Tema: Usabilidade //
       // Nível Fácil //
       {//P1/13(B)
           question: "O que é usabilidade?",
           answers: [
               { option: "A velocidade de um sistema", correct: false },
               { option: "A facilidade com que os usuários podem aprender e usar um produto", correct: true },
               { option: "O design visual de um site", correct: false },
               { option: "O custo de desenvolvimento de um software", correct: false },
           ],
       },
       {//P2/14 (B)
           question: "Qual é o objetivo principal de um teste de usabilidade?",
           answers: [
               { option: "Verificar a velocidade do site", correct: false },
               { option: "Identificar problemas que os usuários enfrentam ao interagir com um produto", correct: true },
               { option: "Testar a segurança do sistema", correct: false },
               { option: "Medir o número de acessos", correct: false },
           ],
       },
       {//P3/15 (A)
           question: 'O que significa "UX Design"?',
           answers: [
               { option: "Design de experiência do usuário", correct: true },
               { option: "Design de interfaces complexas", correct: false },
               { option: "Design exclusivamente visual", correct: false },
               { option: "Design de hardware", correct: false },
           ],
       },
       {//P4/16 (B)
           question: "Qual destes é um princípio básico de usabilidade?",
           answers: [
               { option: "Tornar o sistema o mais complexo possível", correct: false },
               { option: "Reduzir a carga cognitiva do usuário", correct: true },
               { option: "Usar cores vibrantes em todos os elementos", correct: false },
               { option: "Ignorar o feedback do usuário", correct: false },
           ],
       },
       {//P5/17 (A)
           question: 'O que é um "call-to-action" (CTA) em design de interface?',
           answers: [
               { option: "Um elemento que incentiva o usuário a realizar uma ação", correct: true },
               { option: "Um erro no sistema", correct: false },
               { option: "Uma mensagem de alerta", correct: false },
               { option: "Um tipo de fonte", correct: false },
           ],
       },
       {//P6/18 (B)
           question: "Qual ferramenta é comumente usada para criar protótipos de interfaces?",
           answers: [
               { option: "Excel", correct: false },
               { option: "Figma", correct: true },
               { option: "Photoshop", correct: false },
               { option: "Blender", correct: false },
           ],
       },
       {//P7/19 (A)
           question: "O que é 'acessibilidade' em design digital?",
           answers: [
               { option: "Tornar um produto utilizável por pessoas com diferentes habilidades", correct: true },
               { option: "Aumentar a velocidade de carregamento", correct: false },
               { option: "Usar apenas cores contrastantes", correct: false },
               { option: "Criar designs minimalistas", correct: false },
           ],
       },   
       // Nível Médio //
       {//P8/20 (C)
           question: 'O que é "Heurística de Nielsen" no contexto de usabilidade?',
           answers: [
               { option: "Um conjunto de regras para otimização de SEO", correct: false },
               { option: "Um método de criptografia de dados", correct: false },
               { option: "Um conjunto de princípios para avaliar a usabilidade de interfaces", correct: true },
               { option: "Uma técnica de animação em UI", correct: false },
           ],
       },
       {//P9/21 (A)
           question: "Qual é a importância do 'feedback do sistema' em usabilidade?",
           answers: [
               { option: "Garantir que o usuário saiba o resultado de suas ações", correct: true },
               { option: "Aumentar o número de anúncios exibidos", correct: false },
               { option: "Reduzir o tempo de desenvolvimento", correct: false },
               { option: "Melhorar apenas o aspecto visual", correct: false },
           ],
       },
       {//P10/22 (A)
           question: 'O que é "teste A/B" em UX?',
           answers: [
               { option: "Comparar duas versões de uma interface para ver qual performa melhor", correct: true },
               { option: "Um teste de velocidade de internet", correct: false },
               { option: "Uma metodologia de codificação", correct: false },
               { option: "Um tipo de questionário qualitativo", correct: false },
           ],
       },
       // Nível Difícil //
       {//P11/23 (A)
           question: 'O que é "Lei de Fitts" em design de interface?',
           answers: [
               { option: "Quanto maior e mais próximo um elemento, mais rápido ele pode ser acessado", correct: true },
               { option: "Quanto mais cores, melhor a usabilidade", correct: false },
               { option: "O tempo de carregamento deve ser menor que 2 segundos", correct: false },
               { option: "Interfaces devem ter no máximo 3 cliques para qualquer ação", correct: false },
           ],
       },
       {//P12/24 (A)
           question: "Qual é a diferença entre 'usabilidade' e 'experiência do usuário (UX)'?",
           answers: [
               { option: "Usabilidade é sobre eficiência, e UX engloba emoções e percepções do usuário", correct: true },
               { option: "Não há diferença, são a mesma coisa", correct: false },
               { option: "UX é apenas sobre design visual", correct: false },
               { option: "Usabilidade é sobre segurança, UX é sobre velocidade", correct: false },
           ],
       },   
       // Tema: Design de Interação //   
       // Nível Fácil //
       {//P1/25 (B)
           question: "O que é Design de Interação (Interaction Design - IxD)?",
           answers: [
               { option: "A criação de ilustrações para interfaces", correct: false },
               { option: "O design de como usuários interagem com produtos digitais", correct: true },
               { option: "A programação de sistemas complexos", correct: false },
               { option: "O estudo de cores e tipografia", correct: false },
           ],
       },
       {//P2/26 (B)
           question: "Qual é o principal objetivo do Design de Interação?",
           answers: [
               { option: "Tornar a interface visualmente atraente", correct: false },
               { option: "Melhorar a forma como usuários realizam tarefas com um produto", correct: true },
               { option: "Reduzir custos de desenvolvimento", correct: false },
               { option: "Aumentar a velocidade de processamento", correct: false },
           ],
       },
       {//P3/27 (B)
           question: 'O que é um "wireframe" em Design de Interação?',
           answers: [
               { option: "Um protótipo de alta fidelidade com cores e imagens", correct: false },
               { option: "Um esqueleto visual que define a estrutura e funcionalidade de uma interface", correct: true },
               { option: "Um código-fonte de um aplicativo", correct: false },
               { option: "Uma animação de transição entre telas", correct: false },
           ],
       },
       {//P4/28 (D)
           question: "Qual elemento NÃO faz parte do Design de Interação?",
           answers: [
               { option: "Feedback do sistema", correct: false },
               { option: "Microinterações", correct: false },
               { option: "Hierarquia visual", correct: false },
               { option: "Otimização de servidores", correct: true },
           ],
       },
       {//P5/29 (A)
           question: 'O que são "microinterações"?',
           answers: [
               { option: "Pequenas animações ou respostas a ações do usuário", correct: true },
               { option: "Erros de programação", correct: false },
               { option: "Técnicas de SEO", correct: false },
               { option: "Tipos de fontes usadas em interfaces", correct: false },
           ],
       },
       {//P6/30 (A)
           question: "Qual destes é um princípio do Design de Interação?",
           answers: [
               { option: "Consistência", correct: true },
               { option: "Complexidade deliberada", correct: false },
               { option: "Uso exclusivo de texto", correct: false },
               { option: "Ausência de feedback", correct: false },
           ],
       },
       {//P7/31 (A)
           question: 'O que significa "affordance" em Design de Interação?',
           answers: [
               { option: "A propriedade de um elemento que sugere sua função", correct: true },
               { option: "O custo de desenvolvimento de um produto", correct: false },
               { option: "Um tipo de animação em UI", correct: false },
               { option: "Um erro de usabilidade", correct: false },
           ],
       },
       // Nível Médio    
       {//P8/32 (A)
           question: 'O que é "fluxo de usuário" (user flow)?',
           answers: [
               { option: "O caminho que um usuário segue para completar uma tarefa", correct: true },
               { option: "A velocidade de carregamento de uma página", correct: false },
               { option: "Um diagrama de cores em uma interface", correct: false },
               { option: "Um tipo de teste de usabilidade", correct: false },
           ],
       },
       {//P9/33 (A)
           question: "Qual técnica é usada para mapear a interação do usuário com um sistema?",
           answers: [
               { option: "Journey Maps (Mapas de Jornada do Usuário)", correct: true },
               { option: "Heatmaps (apenas para análise de cliques)", correct: false },
               { option: "A/B Testing (comparação entre versões)", correct: false },
               { option: "SEO Audit (análise de otimização para buscadores)", correct: false },
           ],
       },
       {//P10/34 (B)
           question: 'O que é "feedback háptico"?',
           answers: [
               { option: "Resposta visual a uma ação do usuário", correct: false },
               { option: "Resposta tátil (como vibração) a uma interação", correct: true },
               { option: "Um tipo de erro de sistema", correct: false },
               { option: "Uma técnica de animação em scroll", correct: false },
           ],
       },
       // Nível Difícil    
       {//P11/35 (A)
           question: 'Segundo Don Norman, o que é o "Gulfo de Execução" (Gulf of Execution)?',
           answers: [
               { option: "A diferença entre o que o usuário quer fazer e como o sistema permite que ele faça", correct: true },
               { option: "O tempo de carregamento entre duas páginas", correct: false },
               { option: "A distância entre botões em uma interface", correct: false },
               { option: "Um tipo de teste de usabilidade", correct: false },
           ],
       },
       {//P12/36 (A)
           question: 'O que é o modelo "PACT" (People, Activities, Contexts, Technologies) no Design de Interação?',
           answers: [
               { option: "Uma estrutura para analisar sistemas de interação considerando usuários, tarefas, contextos e tecnologias", correct: true },
               { option: "Um método de programação ágil", correct: false },
               { option: "Uma técnica para escolher cores em UI", correct: false },
               { option: "Um tipo de protótipo de alta fidelidade", correct: false },
           ],
       },
       // Tema: Pesquisa com Usuários //   
       // Nível Fácil //    
       {//P1/37 (B)        
           question: "Qual o principal objetivo da pesquisa com usuários em UX?",
           answers: [
               { option: "Criar interfaces bonitas", correct: false },
               { option: "Entender necessidades e comportamentos reais dos usuários", correct: true },
               { option: "Reduzir custos de desenvolvimento", correct: false },
               { option: "Aumentar o número de páginas do site", correct: false },
           ],
       },
       {//P2/38 (C)
           question: "Qual destes NÃO é um método comum de pesquisa com usuários?",
           answers: [
               { option: "Entrevistas", correct: false },
               { option: "Testes de usabilidade", correct: false },
               { option: "Análise de código-fonte", correct: true },
               { option: "Questionários", correct: false },
           ],
       },
       {//P3/39 (A)
           question: 'O que são "personas" em pesquisa de UX?',
           answers: [
               { option: "Representações fictícias de usuários baseadas em dados reais", correct: true },
               { option: "Números de acesso ao site", correct: false },
               { option: "Tipos de layouts de interface", correct: false },
               { option: "Cores usadas em designs", correct: false },
           ],
       },
       {//P4/40 (B)
           question: "Qual técnica coleta dados diretamente com usuários em seu ambiente natural?",
           answers: [
               { option: "Card Sorting", correct: false },
               { option: "Estudo de Campo", correct: true },
               { option: "A/B Testing", correct: false },
               { option: "Análise de Heatmaps", correct: false },
           ],
       },
       {//P5/41 (A)
           question: "O que mede um questionário quantitativo?",
           answers: [
               { option: "Dados estatísticos e métricas", correct: true },
               { option: "Histórias pessoais detalhadas", correct: false },
               { option: "Reações emocionais inconscientes", correct: false },
               { option: "Cores preferidas dos usuários", correct: false },
           ],
       },
       {//P6/42 (B)
           question: "Qual é a vantagem de testes de usabilidade remotos?",
           answers: [
               { option: "Maior controle do ambiente de teste", correct: false },
               { option: "Possibilidade de testar com usuários geograficamente dispersos", correct: true },
               { option: "Menor necessidade de preparação", correct: false },
               { option: "Substitui totalmente testes presenciais", correct: false },
           ],
       },
       {//P7/43 (A)
           question: 'O que é "recrutamento de participantes" em pesquisa?',
           answers: [
               { option: "Selecionar usuários que representem o público-alvo", correct: true },
               { option: "Contratar designers para o projeto", correct: false },
               { option: "Coletar dados de analytics", correct: false },
               { option: "Criar wireframes", correct: false },
           ],
       },  
       // Nível Médio
       {//P8/44 (A)
           question: "Quando usar pesquisa qualitativa em vez de quantitativa?",
           answers: [
               { option: "Quando se precisa de insights profundos sobre 'porquês' e motivações", correct: true },
               { option: "Para validar estatísticas com grandes amostras", correct: false },
               { option: "Para medir tempo de tarefa", correct: false },
               { option: "Quando se prioriza velocidade sobre profundidade", correct: false },
           ],
       },
       {//P9/45 (A)
           question: 'O que é "Triangulação" em pesquisa com usuários?',
           answers: [
               { option: "Usar múltiplos métodos para validar resultados", correct: true },
               { option: "Um tipo de teste de usabilidade com 3 etapas", correct: false },
               { option: "Técnica para analisar heatmaps", correct: false },
               { option: "Formato de questionário com 3 perguntas", correct: false },
           ],
       },
       {//P10/46 (B)
           question: "Qual método identifica padrões de navegação não intuitivos?",
           answers: [
               { option: "Entrevistas", correct: false },
               { option: "Mapas de Calor (Heatmaps)", correct: true },
               { option: "Surveys", correct: false },
               { option: "Card Sorting", correct: false },
           ],
       },
       // Nível Difícil
       {//P11/47 (B)
           question: "Segundo Jakob Nielsen, qual o número mínimo de participantes para um teste de usabilidade eficaz?",
           answers: [
               { option: "1-2", correct: false },
               { option: "5", correct: true },
               { option: "20", correct: false },
               { option: "50+", correct: false },
           ],
       },
       {//P12/48 (A)
           question: 'O que é "Dunning-Kruger Effect" no contexto de pesquisa com usuários?',
           answers: [
               { option: "Tendência de usuários leigos superestimarem seu conhecimento", correct: true },
               { option: "Viés de confirmação em entrevistas", correct: false },
               { option: "Erro na análise quantitativa", correct: false },
               { option: "Fenômeno de abandonar testes longos", correct: false },
           ],
       },
       {//P13/49 (C)
            question: "O que é um Sistema Operacional?",
            answers: [
                { option: "Um Sistema Operacional é um aplicativo de produtividade utilizado para edição de textos e planilhas", correct: false },
                { option: "Um Sistema Operacional é um conjunto de componentes de hardware que formam a parte física do computador", correct: false },
                { option: "Um Sistema Operacional é o software essencial que gerencia os recursos do computador e fornece uma plataforma para a execução de aplicativos", correct: true },
                { option: "Um Sistema Operacional é um dispositivo de armazenamento externo utilizado para salvar arquivos e dados", correct: false },
            ],
       },
       {//P14/50 (A)
            question: "Qual é a função principal de um Sistema Operacional?",
            answers: [
                { option: "Gerenciar e coordenar o hardware e software do computador", correct: true },
                { option: "Criar gráficos e animações", correct: false },
                { option: "Proteger o computador contra vírus e malware", correct: false },
                { option: "Conectar o computador à internet", correct: false },
            ],
       },
   ];