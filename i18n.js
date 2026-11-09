// Tradução PT/EN sem dependências. O HTML já vem em português (funciona sem JS);
// este ficheiro troca os textos marcados com data-i18n, data-i18n-html e data-i18n-alt.
const translations = {
  pt: {
    'meta.title': 'Emanuel Cristóvão — Redes & Backend',
    'meta.description': 'Técnico de Informática (ITEL) com foco em redes, administração de sistemas e backend. Autor do routConfig, avaliado em 19/20.',
    'toggle.label': 'Mudar idioma',
    'nav.project': 'Projeto',
    'nav.skills': 'Competências',
    'nav.path': 'Percurso',
    'nav.contact': 'Contacto',
    'hero.title': 'Emanuel Cristóvão<br>constrói infraestrutura<br>e software, com raiz<br>em redes.',
    'hero.lede': 'Técnico de Informática formado pelo ITEL. Atua em redes de computadores, administração de sistemas e desenvolvimento backend — com preferência por redes e infraestrutura. Autor do routConfig, uma ferramenta de configuração de routers via ligação série, avaliada em 19/20.',
    'hero.cta1': 'Ver o routConfig',
    'hero.cta2': 'Contactar',
    'hero.alt': 'Retrato de Emanuel Cristóvão',
    'project.eyebrow': 'Projetos em destaque',
    'project.desc': 'Interface web para configuração de routers Cisco (séries 1800 e 1900) via ligação série, criada para eliminar a inserção manual de código no equipamento. O técnico preenche as variáveis num formulário e o sistema aplica as configurações de protocolos e serviços de rede automaticamente. Projeto avaliado em 19/20.',
    'project.solves.label': 'O que resolve',
    'project.solves.text': 'Reduz a fricção entre a linha de comandos do Cisco IOS e um fluxo de trabalho gerido por uma interface gráfica totalmente intuitiva, reduzindo o esforço mental e aumentando a rapidez na configuração de serviços e protocolos de rede.',
    'project.status.label': 'Estado técnico',
    'project.status.text': 'Estabilizado com 18 tabelas de base de dados antes de uma apresentação a investidores. Resolvido um bug de sincronização em que a função <code>_merge_acls_with_db</code> reativava registos de ACL que o utilizador tinha apagado. Sem bugs conhecidos em aberto.',
    'project2.title': 'Sistema de gestão de estagiários',
    'project2.text': 'Plataforma construída para o ITEL, com o objetivo de facilitar a gestão de estagiários: permite cadastrar, acompanhar o estado do estágio e gerar currículo automaticamente para cada estagiário.',
    'skills.eyebrow': 'Competências',
    'skills.training': 'Formações',
    'skills.web': 'Programação Web',
    'skills.excel': 'Excel Avançado',
    'skills.dev': 'Desenvolvimento',
    'skills.langs': 'Línguas',
    'skills.pt': 'Português — Nativo',
    'skills.en': 'Inglês — Avançado',
    'path.eyebrow': 'Percurso',
    'path.edu.date': 'Formação',
    'path.edu.title': 'Técnico Médio em Informática — ITEL',
    'path.intern.date': 'Estágio · 3 meses',
    'path.intern.desc': 'Estágio profissional aplicado em ambiente de Informática.',
    'contact.eyebrow': 'Contacto',
    'contact.title': 'Vamos falar.'
  },
  en: {
    'meta.title': 'Emanuel Cristóvão — Networking & Backend',
    'meta.description': 'Informatics technician (ITEL) focused on networking, systems administration and backend. Author of routConfig, graded 19/20.',
    'toggle.label': 'Change language',
    'nav.project': 'Project',
    'nav.skills': 'Skills',
    'nav.path': 'Background',
    'nav.contact': 'Contact',
    'hero.title': 'Emanuel Cristóvão<br>builds infrastructure<br>and software, rooted<br>in networking.',
    'hero.lede': 'Informatics technician trained at ITEL. Works in computer networking, systems administration and backend development, with a preference for networking and infrastructure. Author of routConfig, a tool for configuring routers over a serial connection, graded 19/20.',
    'hero.cta1': 'View routConfig',
    'hero.cta2': 'Get in touch',
    'hero.alt': 'Portrait of Emanuel Cristóvão',
    'project.eyebrow': 'Featured projects',
    'project.desc': 'A web interface for configuring Cisco routers (1800 and 1900 series) over a serial connection, built to eliminate typing commands into the device by hand. The technician fills in the variables in a form and the system applies the protocol and network service configuration automatically. Graded 19/20.',
    'project.solves.label': 'What it solves',
    'project.solves.text': 'Reduces the friction between the Cisco IOS command line and a graphical, fully intuitive workflow, lowering the mental effort and speeding up the configuration of network services and protocols.',
    'project.status.label': 'Technical status',
    'project.status.text': 'Stabilized with 18 database tables ahead of an investor presentation. Fixed a sync bug where the <code>_merge_acls_with_db</code> function reactivated ACL records the user had deleted. No known open bugs.',
    'project2.title': 'Intern management system',
    'project2.text': 'A platform built for ITEL to make intern management easier: it lets staff register interns, track internship status and automatically generate a résumé for each intern.',
    'skills.eyebrow': 'Skills',
    'skills.training': 'Training',
    'skills.web': 'Web Programming',
    'skills.excel': 'Advanced Excel',
    'skills.dev': 'Development',
    'skills.langs': 'Languages',
    'skills.pt': 'Portuguese — Native',
    'skills.en': 'English — Advanced',
    'path.eyebrow': 'Background',
    'path.edu.date': 'Education',
    'path.edu.title': 'Mid-Level Technical Diploma in Informatics — ITEL',
    'path.intern.date': 'Internship · 3 months',
    'path.intern.desc': 'Hands-on professional internship in an IT environment.',
    'contact.eyebrow': 'Contact',
    'contact.title': 'Let’s talk.'
  }
};

const SUPPORTED = ['pt', 'en'];

function detectLang() {
  try {
    const saved = localStorage.getItem('lang');
    if (SUPPORTED.includes(saved)) return saved;
  } catch (e) { /* localStorage indisponível */ }
  return (navigator.language || 'pt').toLowerCase().startsWith('pt') ? 'pt' : 'en';
}

function applyLang(lang) {
  const dict = translations[lang];
  document.documentElement.lang = lang;
  document.title = dict['meta.title'];

  const meta = document.querySelector('meta[name="description"]');
  if (meta) meta.setAttribute('content', dict['meta.description']);

  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const v = dict[el.dataset.i18n];
    if (v !== undefined) el.textContent = v;
  });
  document.querySelectorAll('[data-i18n-html]').forEach((el) => {
    const v = dict[el.dataset.i18nHtml];
    if (v !== undefined) el.innerHTML = v;
  });
  document.querySelectorAll('[data-i18n-alt]').forEach((el) => {
    const v = dict[el.dataset.i18nAlt];
    if (v !== undefined) el.setAttribute('alt', v);
  });

  const btn = document.getElementById('lang-toggle');
  if (btn) {
    btn.textContent = lang === 'pt' ? 'EN' : 'PT';
    btn.setAttribute('aria-label', dict['toggle.label']);
  }
  try { localStorage.setItem('lang', lang); } catch (e) { /* ignora */ }
}

let currentLang = detectLang();
applyLang(currentLang);

const langBtn = document.getElementById('lang-toggle');
if (langBtn) {
  langBtn.addEventListener('click', () => {
    currentLang = currentLang === 'pt' ? 'en' : 'pt';
    applyLang(currentLang);
  });
}
