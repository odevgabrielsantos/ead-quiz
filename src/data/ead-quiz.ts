import type { QuizData } from "@/models";

export const eadQuiz: QuizData = {
  title: 'Quiz - Fundamentos da Educação a Distância',
  questions: [
    {
      id: 'q1',
      question: 'Em relação aos Ambientes Virtuais de Aprendizagem (AVA), assinale a alternativa CORRETA:',
      options: [
        { id: 'a', text: 'São espaços exclusivamente síncronos que substituem o papel do professor.' },
        { id: 'b', text: 'São ferramentas utilizadas apenas para o envio de materiais impressos ao aluno.' },
        { id: 'c', text: 'São plataformas que possibilitam interação, acesso a conteúdos, atividades e acompanhamento do processo de aprendizagem.' },
        { id: 'd', text: 'São redes sociais usadas exclusivamente para fins comerciais.' },
      ],
      correctOptionId: 'c',
    },
    {
      id: 'q2',
      question: 'Qual das alternativas representa uma diferença central entre um AVA e uma plataforma digital genérica?',
      options: [
        { id: 'a', text: 'Plataformas digitais são sempre gratuitas, enquanto AVAs são pagas.' },
        { id: 'b', text: 'AVAs são voltados para fins educacionais, com recursos pedagógicos integrados; plataformas genéricas não possuem foco educacional.' },
        { id: 'c', text: 'AVAs não permitem interação entre alunos e professores, enquanto plataformas digitais sim.' },
        { id: 'd', text: 'Plataformas genéricas não podem ser usadas em contextos educacionais.' },
      ],
      correctOptionId: 'b',
    },
    {
      id: 'q3',
      question: 'No contexto da educação a distância, o termo "cibercultura" refere-se:',
      options: [
        { id: 'a', text: 'À cultura de realizar apenas reuniões presenciais em espaços físicos de aprendizagem.' },
        { id: 'b', text: 'Ao conjunto de normas e regras jurídicas que regem a internet.' },
        { id: 'c', text: 'À nova forma de viver, aprender e interagir mediada pelas tecnologias digitais e pela internet.' },
        { id: 'd', text: 'À rejeição de qualquer forma de aprendizagem mediada por computador.' },
      ],
      correctOptionId: 'c',
    },
    {
      id: 'q4',
      question: 'Um dos princípios fundamentais da Educação a Distância é:',
      options: [
        { id: 'a', text: 'A obrigatoriedade de encontros presenciais semanais.' },
        { id: 'b', text: 'A centralização total do conhecimento na figura do tutor.' },
        { id: 'c', text: 'A autonomia do aluno na construção do próprio conhecimento, com mediação tecnológica.' },
        { id: 'd', text: 'O uso exclusivo de livros físicos como principal recurso didático.' },
      ],
      correctOptionId: 'c',
    },
    {
      id: 'q5',
      question: 'Sobre os elementos essenciais para o bom funcionamento da EaD, é CORRETO afirmar:',
      options: [
        { id: 'a', text: 'A tecnologia é mais importante que os aspectos pedagógicos.' },
        { id: 'b', text: 'A interação e a comunicação são pilares fundamentais da aprendizagem a distância.' },
        { id: 'c', text: 'O foco deve ser apenas em vídeos gravados, sem necessidade de atividades.' },
        { id: 'd', text: 'O aluno não precisa de nenhum tipo de acompanhamento durante o curso.' },
      ],
      correctOptionId: 'b',
    },
    {
      id: 'q6',
      question: 'Que é ciberespaço?',
      options: [
        { id: 'a', text: 'Espaço de trabalho virtual.' },
        { id: 'b', text: 'Espaço das comunicações por redes de computadores.' },
        { id: 'c', text: 'Espaço de interação virtual.' },
        { id: 'd', text: 'Espaço de programação de robótica.' },
      ],
      correctOptionId: 'b',
    },
    {
      id: 'q7',
      question: 'Interatividade é:',
      options: [
        { id: 'a', text: 'Capacidade de um sistema, meio ou conteúdo comunicar e responder às ações do usuário, possibilitando a interação bidirecional e dinâmica.' },
        { id: 'b', text: 'Uma comunicação unidirecional e linear.' },
        { id: 'c', text: 'Um conceito que se aplica à oferta de informações de forma linear.' },
        { id: 'd', text: 'É a capacidade do usuário se comunicar com  um sistema de formar passiva.' },
      ],
      correctOptionId: 'a',
    },
    {
      id: 'q8',
      question: 'Princípio da educação online que descreve o ato de encontrar, agrupar, organizar ou compartilhar o melhor e mais relevante conteúdo sobre um assunto específico.',
      options: [
        { id: 'a', text: 'Obra Aberta.' },
        { id: 'b', text: 'Ambiências Computacionais diversas.' },
        { id: 'c', text: 'Curadoria de conteúdos online.' },
        { id: 'd', text: 'Atividades autorais.' },
      ],
      correctOptionId: 'c',
    },
    {
      id: 'q9',
      question: 'Os ambientes tecnológicos, para trabalhar-se com EaD, são conhecidos como:',
      options: [
        { id: 'a', text: 'Ambientes Virtuais de Aprendizagem, desenvolvidos para gerenciar a aprendizagem dos alunos, dispondo de ferramentas síncronas e assíncronas.' },
        { id: 'b', text: 'Ambientes Tecnológicos para abrigar professores e alunos, organizados numa disciplina ou curso, onde são postadas tarefas para serem resolvidas online.' },
        { id: 'c', text: 'Ambientes Virtuais de Aprendizagem, desenvolvidos para gerenciar os conteúdos dos cursos ou disciplinas junto aos alunos, com acesso on line e síncrono.' },
        { id: 'd', text: 'Ambientes Tecnológicos, para funcionar como repositório de conteúdos e distribuição, junto aos alunos, em tempo diferido.' },
      ],
      correctOptionId: 'a',
    },
    {
      id: 'q10',
      question: 'Podemos afirmar que Ambiente virtual é:',
      options: [
        { id: 'a', text: 'Um ambiente que difere completamente do ambiente físico.' },
        { id: 'b', text: 'Um ambiente que não permite a interação com objetos ou outro usuário.' },
        { id: 'c', text: 'Um ambiente que não se acessa através de um dispositivo eletrônico.' },
        { id: 'd', text: 'Um ambiente que imita o espaço físico, permitindo interação com objetos e outros usuários.' },
      ],
      correctOptionId: 'd',
    },
    {
      id: 'q11',
      question: 'Qual é uma das principais vantagens da Educação a Distância?',
      options: [
        { id: 'a', text: 'Aulas presenciais obrigatórias todos os dias' },
        { id: 'b', text: 'Flexibilidade de horário para o aluno' },
        { id: 'c', text: 'Exigência de residência próxima à instituição' },
        { id: 'd', text: 'Ausência total de interação entre alunos e professores' },
      ],
      correctOptionId: 'b',
    },
    {
      id: 'q12',
      question: 'Qual tecnologia é mais utilizada para viabilizar cursos de EaD?',
      options: [
        { id: 'a', text: 'Telefone fixo' },
        { id: 'b', text: 'Aplicativos de mensagem instantânea' },
        { id: 'c', text: 'Plataformas de ensino online (LMS)' },
        { id: 'd', text: 'Fax' },
      ],
      correctOptionId: 'c',
    },
    {
      id: 'q13',
      question: 'Qual desses é um requisito essencial para o sucesso em cursos de Educação a Distância?',
      options: [
        { id: 'a', text: 'Estar disponível em tempo integral' },
        { id: 'b', text: 'Ter alto nível de autonomia e disciplina' },
        { id: 'c', text: 'Visitar a instituição diariamente' },
        { id: 'd', text: 'Ter aulas apenas gravadas, sem nenhum acompanhamento' },
      ],
      correctOptionId: 'b',
    },
    {
      id: 'q14',
      question: 'A legislação brasileira reconhece diplomas obtidos em cursos superiores EaD como:',
      options: [
        { id: 'a', text: 'Inferiores aos diplomas presenciais' },
        { id: 'b', text: 'Não válidos em concursos públicos' },
        { id: 'c', text: 'De igual validade aos diplomas presenciais' },
        { id: 'd', text: 'Válidos apenas para cursos técnicos' },
      ],
      correctOptionId: 'c',
    },
    {
      id: 'q15',
      question: 'De acordo com os fundamentos da Educação a Distância, o papel principal do tutor é:',
      options: [
        { id: 'a', text: 'Apenas corrigir provas' },
        { id: 'b', text: 'Transmitir conteúdo de forma expositiva' },
        { id: 'c', text: 'Facilitar a aprendizagem e apoiar o aluno no processo educativo' },
        { id: 'd', text: 'Controlar o tempo de acesso dos alunos à plataforma' },
      ],
      correctOptionId: 'c',
    },
  ],
};