import Link from 'next/link';
import { notFound } from 'next/navigation';

const languages = ['en', 'jp', 'ru'] as const;
type Lang = typeof languages[number];

const routes = [
  '/',
  '/services',
  '/about',
  '/industries',
  '/cases',
  '/blog',
  '/contact',
  '/privacy-policy',
  '/services/business-consulting',
  '/services/translation',
  '/services/market-research',
  '/services/business-matching',
  '/services/project-management',
  '/services/international-trade',
  '/blog/japan-market-entry-guide',
  '/blog/business-matching-japan',
  '/blog/translation-for-cross-border-business'
];

const text: any = {
  en: {
    nav: ['Services', 'About', 'Industries', 'Cases', 'Blog', 'Contact'],
    navPaths: ['/services', '/about', '/industries', '/cases', '/blog', '/contact'],
    buttons: {
      consultation: 'Free Consultation',
      explore: 'Explore Our Services',
      contact: 'Contact Us',
      learn: 'Learn More',
      read: 'Read More'
    },
    home: {
      heroTitle: 'Connecting Business Without Borders',
      heroSubtitle:
        'International consulting, translation and business support connecting Japan with global markets.',
      aboutTitle: 'Your Bridge to International Business',
      aboutText:
        'NexBridge Global is a premium boutique consulting brand supporting companies between Japan, Asia, Europe, Russia / CIS, the Middle East and other global markets. We combine business-focused thinking, multilingual communication and practical cross-border support.',
      servicesTitle: 'Services Designed for Cross-Border Growth',
      whyTitle: 'Why NexBridge',
      why: [
        'International Perspective',
        'Japanese Market Understanding',
        'Multilingual Communication',
        'Business-Focused Approach',
        'Cross-Border Support',
        'Personalized Solutions'
      ],
      howTitle: 'How We Work',
      steps: [
        ['01', 'Consultation', 'We clarify your goals and international priorities.'],
        ['02', 'Research & Strategy', 'We define opportunities, risks and a route to action.'],
        ['03', 'Execution', 'We support communication, partner search, translation and coordination.'],
        ['04', 'Ongoing Support', 'We stay involved as your international business develops.']
      ],
      reachTitle: 'Global Reach',
      reach: ['Japan', 'Asia', 'Europe', 'Russia / CIS', 'Middle East'],
      languagesTitle: 'Working Languages',
      cta: "Let's Build Your Next International Opportunity."
    },
    servicesTitle: 'Services',
    services: [
      ['business-consulting', 'International Business Consulting', 'Market entry, strategy and cross-border business support.', ['Foreign market entry', 'Japan market entry', 'International business strategy', 'International project support', 'Partner search', 'Negotiation support']],
      ['translation', 'Translation & Interpretation', 'Business-focused Japanese, English and Russian communication.', ['Russian ↔ Japanese', 'English ↔ Japanese', 'Russian ↔ English', 'Business translation', 'Technical translation', 'Meeting interpretation']],
      ['market-research', 'Market Research', 'Research for better international business decisions.', ['Market research', 'Competitor analysis', 'Consumer research', 'Pricing research', 'Market entry research', 'Industry research']],
      ['business-matching', 'Business Matching', 'Finding relevant manufacturers, suppliers, distributors and buyers.', ['Manufacturers', 'Suppliers', 'Distributors', 'Buyers', 'Potential partners', 'B2B contact organization']],
      ['project-management', 'Project Management', 'Coordination for international projects and negotiations.', ['International project support', 'Company communication', 'Task control', 'Supplier coordination', 'Negotiation support']],
      ['international-trade', 'International Trade Support', 'Import, export, sourcing and documentation support.', ['Import / export', 'Supplier search', 'Purchasing support', 'Foreign company communication', 'Documentation support']]
    ],
    aboutTitle: 'About NexBridge Global',
    aboutIntro:
      'A modern boutique consulting company concept for businesses working across Japan and international markets.',
    aboutSections: [
      ['Who We Are', 'NexBridge Global supports cross-border business communication, market understanding and international project coordination. Company details such as legal entity, offices and team profiles should be added after confirmation.'],
      ['Our Mission', 'Our mission is to make international business clearer, more structured and more accessible for companies working between Japan and global markets.'],
      ['Our Approach', 'We focus on practical business outcomes: clear communication, careful research, structured execution and long-term relationship building.'],
      ['Our Values', 'Clarity, reliability, cultural awareness, confidentiality and business relevance guide our work.'],
      ['Why Clients Work With Us', 'Clients choose a boutique consulting approach when they need focused attention, multilingual support and practical cross-border execution.']
    ],
    industriesTitle: 'Industries',
    industries: [
      ['Cosmetics & Beauty', 'Support for beauty brands, product positioning and international distribution research.'],
      ['FMCG', 'Market and partner support for fast-moving consumer goods.'],
      ['Manufacturing', 'Supplier, buyer and technical communication support for manufacturers.'],
      ['Healthcare', 'Market and communication support for healthcare-related business contexts.'],
      ['Food & Beverage', 'Cross-border research and partner identification for food and beverage companies.'],
      ['Consumer Products', 'Market entry and distribution support for consumer product brands.'],
      ['Technology', 'Business communication, research and project support for technology companies.'],
      ['Trading', 'Import, export and business matching support for trading companies.']
    ],
    casesTitle: 'Case Studies',
    cases: [
      ['Example Case: Japan Market Entry Research', 'A company needed initial clarity before entering the Japanese market.', 'We structured research questions and reviewed market, competitors and channels.', 'A practical market entry framework was prepared.', 'Result placeholder — replace with real measurable outcome later.'],
      ['Example Case: Supplier Search in Asia', 'A business needed to identify potential suppliers in Asia.', 'We defined criteria and prepared a partner search workflow.', 'A shortlist structure and outreach plan were created.', 'Result placeholder — replace with confirmed project data later.'],
      ['Example Case: Multilingual Negotiation Support', 'Several parties needed clear communication across languages.', 'We prepared terminology and supported meeting communication.', 'Negotiation materials and meeting flow were clarified.', 'Result placeholder — replace with real outcome later.']
    ],
    blogTitle: 'Blog',
    categories: [
      'Japan Market',
      'International Business',
      'Translation',
      'Market Research',
      'Business Strategy',
      'International Trade'
    ],
    articles: [
      ['japan-market-entry-guide', 'Demo Article: Japan Market Entry — Key Questions Before You Start', 'Japan Market', 'A SEO-friendly demo structure for a future article about entering the Japanese market.'],
      ['business-matching-japan', 'Demo Article: How Business Matching Supports Cross-Border Growth', 'International Business', 'A demo article structure for business matching between Japan and global markets.'],
      ['translation-for-cross-border-business', 'Demo Article: Why Business Translation Is More Than Words', 'Translation', 'A demo article structure about professional translation for business communication.']
    ],
    contactTitle: 'Contact NexBridge Global',
    contactIntro:
      'Tell us about your international business goals. The contact details below are placeholders until confirmed.',
    form: ['Name', 'Company', 'Country', 'Email', 'Phone', 'Service', 'Message', 'Send Inquiry'],
    privacyTitle: 'Privacy Policy',
    privacy: [
      'This privacy policy is a neutral template and should be reviewed by a qualified specialist before final publication.',
      'The website may collect information submitted through the contact form, such as name, company, country, email, phone, selected service and message.',
      'The information should be used only to respond to inquiries and provide requested business communication.',
      'Do not add analytics, advertising pixels or third-party tools without reviewing privacy requirements for your target jurisdictions.',
      'Contact details and legal entity information should be added after confirmation.'
    ]
  },

  jp: {
    nav: ['サービス', '会社情報', '業界', '事例', 'ブログ', 'お問い合わせ'],
    navPaths: ['/services', '/about', '/industries', '/cases', '/blog', '/contact'],
    buttons: {
      consultation: '無料相談',
      explore: 'サービスを見る',
      contact: 'お問い合わせ',
      learn: '詳しく見る',
      read: '続きを読む'
    },
    home: {
      heroTitle: 'Connecting Business Without Borders',
      heroSubtitle:
        '日本とグローバル市場をつなぐ、国際コンサルティング・翻訳・ビジネス支援。',
      aboutTitle: '国際ビジネスへの架け橋',
      aboutText:
        'NexBridge Globalは、日本、アジア、欧州、ロシア・CIS、中東などの市場を視野に入れたブティック型国際コンサルティングブランドです。',
      servicesTitle: '越境ビジネスのためのサービス',
      whyTitle: 'NexBridgeが選ばれる理由',
      why: ['国際的な視点', '日本市場への理解', '多言語コミュニケーション', 'ビジネス重視のアプローチ', '越境ビジネス支援', '個別最適化された提案'],
      howTitle: '進め方',
      steps: [
        ['01', 'ご相談', '目的と必要な支援を整理します。'],
        ['02', '調査・戦略', '機会、リスク、実行方針を明確にします。'],
        ['03', '実行支援', '翻訳、調整、パートナー探索を支援します。'],
        ['04', '継続支援', '事業の進展に合わせて支援します。']
      ],
      reachTitle: 'グローバル対応エリア',
      reach: ['日本', 'アジア', '欧州', 'ロシア / CIS', '中東'],
      languagesTitle: '対応言語',
      cta: '次の国際ビジネス機会を共に創りましょう。'
    },
    servicesTitle: 'サービス',
    services: [
      ['business-consulting', '国際ビジネスコンサルティング', '海外市場参入、戦略、越境ビジネス支援。', ['海外市場参入', '日本市場参入', '国際ビジネス戦略', '国際プロジェクト支援', 'ビジネスパートナー探索', '交渉支援']],
      ['translation', '翻訳・通訳', '日本語・英語・ロシア語のビジネスコミュニケーション支援。', ['ロシア語 ↔ 日本語', '英語 ↔ 日本語', 'ロシア語 ↔ 英語', 'ビジネス翻訳', '技術翻訳', '会議通訳']],
      ['market-research', 'マーケットリサーチ', '国際ビジネス判断のための調査。', ['市場調査', '競合分析', '消費者調査', '価格調査', '市場参入調査', '業界調査']],
      ['business-matching', 'ビジネスマッチング', 'メーカー、サプライヤー、販売代理店、バイヤー探索。', ['メーカー探索', 'サプライヤー探索', '販売代理店探索', 'バイヤー探索', '候補パートナー探索', 'B2Bコンタクト調整']],
      ['project-management', 'プロジェクトマネジメント', '国際プロジェクトと交渉の調整支援。', ['国際プロジェクト支援', '企業間コミュニケーション', 'タスク管理', 'サプライヤー調整', '交渉支援']],
      ['international-trade', '国際取引支援', '輸出入、調達、書類関連の実務支援。', ['輸出入', 'サプライヤー探索', '調達支援', '海外企業との連絡', '書類サポート']]
    ],
    aboutTitle: 'NexBridge Globalについて',
    aboutIntro:
      '日本と海外市場をつなぐ、現代的なブティック型コンサルティング会社のコンセプトです。',
    aboutSections: [
      ['Who We Are', '法人情報、拠点、チーム情報は確認後に追加してください。'],
      ['Our Mission', '日本と世界のビジネスを、より明確で実行しやすいものにすることを目指します。'],
      ['Our Approach', '明確なコミュニケーション、調査、実行、関係構築を重視します。'],
      ['Our Values', '明瞭性、信頼性、文化理解、守秘性、実務性を大切にします。'],
      ['Why Clients Work With Us', '多言語対応、越境実務、個別対応が必要な企業に適した支援を提供します。']
    ],
    industriesTitle: '対応業界',
    industries: [
      ['化粧品・美容', '美容ブランド、商品ポジショニング、海外展開調査を支援します。'],
      ['FMCG', '日用品・消費財の市場調査とパートナー探索を支援します。'],
      ['製造業', 'メーカー向けのサプライヤー、バイヤー、技術コミュニケーションを支援します。'],
      ['ヘルスケア', 'ヘルスケア関連ビジネスの調査・コミュニケーションを支援します。'],
      ['食品・飲料', '食品・飲料企業の越境調査とパートナー探索を支援します。'],
      ['消費財', '消費財ブランドの市場参入と流通支援を行います。'],
      ['テクノロジー', 'テクノロジー企業の調査、翻訳、プロジェクト支援を行います。'],
      ['商社・貿易', '輸出入、調達、ビジネスマッチングを支援します。']
    ],
    casesTitle: '事例',
    cases: [
      ['Example Case: 日本市場参入調査', '日本市場参入前に初期判断材料が必要でした。', '市場、競合、チャネルを整理しました。', '市場参入のための基本フレームを作成しました。', '成果はプレースホルダーです。'],
      ['Example Case: アジアでのサプライヤー探索', '候補サプライヤーを探す必要がありました。', '条件整理と探索プロセスを設計しました。', '候補リストと連絡方針を準備しました。', '成果はプレースホルダーです。'],
      ['Example Case: 多言語交渉支援', '複数言語での円滑な商談が必要でした。', '用語整理と会議コミュニケーションを支援しました。', '交渉資料と会議進行を明確にしました。', '成果はプレースホルダーです。']
    ],
    blogTitle: 'ブログ',
    categories: ['日本市場', '国際ビジネス', '翻訳', 'マーケットリサーチ', 'ビジネス戦略', '国際取引'],
    articles: [
      ['japan-market-entry-guide', 'デモ記事：日本市場参入前に確認すべきポイント', '日本市場', '日本市場参入に関するSEO向け記事構成のデモです。'],
      ['business-matching-japan', 'デモ記事：越境ビジネスにおけるビジネスマッチング', '国際ビジネス', '日本と海外市場をつなぐビジネスマッチングのデモ記事です。'],
      ['translation-for-cross-border-business', 'デモ記事：ビジネス翻訳は単なる言葉の置き換えではない', '翻訳', '国際ビジネス翻訳に関するデモ記事です。']
    ],
    contactTitle: 'お問い合わせ',
    contactIntro:
      '国際ビジネスの目的をお聞かせください。以下の連絡先は確認前のプレースホルダーです。',
    form: ['お名前', '会社名', '国', 'メール', '電話番号', 'サービス', 'メッセージ', '送信'],
    privacyTitle: 'プライバシーポリシー',
    privacy: [
      'このページは中立的なテンプレートです。公開前に専門家による確認を推奨します。',
      'お問い合わせフォームでは、氏名、会社名、国、メール、電話番号、サービス、メッセージを取得する場合があります。',
      '取得情報はお問い合わせ対応の目的でのみ使用されるべきです。',
      '分析ツールや広告タグを追加する場合は、対象地域の法的要件を確認してください。',
      '法人情報と連絡先は確認後に追加してください。'
    ]
  },

  ru: {
    nav: ['Услуги', 'О компании', 'Отрасли', 'Кейсы', 'Блог', 'Контакты'],
    navPaths: ['/services', '/about', '/industries', '/cases', '/blog', '/contact'],
    buttons: {
      consultation: 'Бесплатная консультация',
      explore: 'Смотреть услуги',
      contact: 'Связаться',
      learn: 'Подробнее',
      read: 'Читать'
    },
    home: {
      heroTitle: 'Connecting Business Without Borders',
      heroSubtitle:
        'Международный консалтинг, переводы и бизнес-сопровождение, соединяющие Японию с глобальными рынками.',
      aboutTitle: 'Ваш мост к международному бизнесу',
      aboutText:
        'NexBridge Global — boutique consulting brand для компаний, работающих между Японией, Азией, Европой, Россией / СНГ, Ближним Востоком и другими рынками.',
      servicesTitle: 'Услуги для трансграничного роста',
      whyTitle: 'Почему NexBridge',
      why: ['Международная перспектива', 'Понимание японского рынка', 'Многоязычная коммуникация', 'Бизнес-ориентированный подход', 'Поддержка cross-border проектов', 'Индивидуальные решения'],
      howTitle: 'Как мы работаем',
      steps: [
        ['01', 'Консультация', 'Уточняем цели, рынки и формат поддержки.'],
        ['02', 'Исследование и стратегия', 'Определяем возможности, риски и план действий.'],
        ['03', 'Реализация', 'Поддерживаем коммуникацию, поиск партнеров, переводы и координацию.'],
        ['04', 'Дальнейшее сопровождение', 'Остаемся рядом по мере развития международного бизнеса.']
      ],
      reachTitle: 'Глобальный охват',
      reach: ['Japan', 'Asia', 'Europe', 'Russia / CIS', 'Middle East'],
      languagesTitle: 'Рабочие языки',
      cta: 'Давайте создадим вашу следующую международную возможность.'
    },
    servicesTitle: 'Услуги',
    services: [
      ['business-consulting', 'International Business Consulting', 'Выход на рынки, стратегия и международное бизнес-сопровождение.', ['Выход на зарубежные рынки', 'Выход на японский рынок', 'Международная бизнес-стратегия', 'Сопровождение проектов', 'Поиск деловых партнеров', 'Поддержка переговоров']],
      ['translation', 'Translation & Interpretation', 'Деловая коммуникация на японском, английском и русском языках.', ['Russian ↔ Japanese', 'English ↔ Japanese', 'Russian ↔ English', 'Business translation', 'Technical translation', 'Meeting interpretation']],
      ['market-research', 'Market Research', 'Исследования для международных бизнес-решений.', ['Market research', 'Competitor analysis', 'Consumer research', 'Pricing research', 'Market entry research', 'Industry research']],
      ['business-matching', 'Business Matching', 'Поиск производителей, поставщиков, дистрибьюторов и покупателей.', ['Производители', 'Поставщики', 'Дистрибьюторы', 'Покупатели', 'Потенциальные партнеры', 'Организация B2B-контактов']],
      ['project-management', 'Project Management', 'Координация международных проектов и переговоров.', ['Сопровождение проектов', 'Коммуникация между компаниями', 'Контроль задач', 'Координация поставщиков', 'Сопровождение переговоров']],
      ['international-trade', 'International Trade Support', 'Импорт, экспорт, закупки и документационное сопровождение.', ['Импорт / экспорт', 'Поиск поставщиков', 'Сопровождение закупок', 'Коммуникация с зарубежными компаниями', 'Документационное сопровождение']]
    ],
    aboutTitle: 'О NexBridge Global',
    aboutIntro:
      'Современная boutique consulting company для бизнеса между Японией и международными рынками.',
    aboutSections: [
      ['Who We Are', 'NexBridge Global поддерживает международную бизнес-коммуникацию, понимание рынков и координацию cross-border проектов. Юридические данные, офисы и информация о команде должны быть добавлены после подтверждения.'],
      ['Our Mission', 'Наша миссия — делать международный бизнес между Японией и мировыми рынками более понятным, структурированным и практичным.'],
      ['Our Approach', 'Мы фокусируемся на деловом результате: ясной коммуникации, исследовании, реализации и долгосрочных отношениях.'],
      ['Our Values', 'Ясность, надежность, культурная чувствительность, конфиденциальность и практическая польза.'],
      ['Why Clients Work With Us', 'Boutique-подход подходит компаниям, которым нужна внимательная многоязычная поддержка и практическое сопровождение международных задач.']
    ],
    industriesTitle: 'Отрасли',
    industries: [
      ['Cosmetics & Beauty', 'Поддержка beauty-брендов, позиционирования и международной дистрибуции.'],
      ['FMCG', 'Исследования и поиск партнеров для товаров повседневного спроса.'],
      ['Manufacturing', 'Поддержка производителей: поставщики, покупатели, техническая коммуникация.'],
      ['Healthcare', 'Исследовательская и коммуникационная поддержка для healthcare-направлений.'],
      ['Food & Beverage', 'Поиск возможностей и партнеров для food & beverage компаний.'],
      ['Consumer Products', 'Поддержка выхода на рынки и дистрибуции потребительских товаров.'],
      ['Technology', 'Коммуникация, исследования и проектная поддержка для tech-компаний.'],
      ['Trading', 'Импорт, экспорт и business matching для торговых компаний.']
    ],
    casesTitle: 'Кейсы',
    cases: [
      ['Example Case: Japan Market Entry Research', 'Компании требовалась первичная ясность перед выходом на японский рынок.', 'Мы структурировали вопросы исследования и изучили рынок, конкурентов и каналы.', 'Был подготовлен практический framework выхода на рынок.', 'Результат — placeholder, замените реальными данными позже.'],
      ['Example Case: Supplier Search in Asia', 'Компании нужно было найти потенциальных поставщиков в Азии.', 'Мы определили критерии и процесс поиска.', 'Была подготовлена структура shortlist и outreach-план.', 'Результат — placeholder.'],
      ['Example Case: Multilingual Negotiation Support', 'Сторонам требовалась понятная коммуникация на нескольких языках.', 'Мы подготовили терминологию и поддержали коммуникацию на встрече.', 'Материалы и ход переговоров стали более структурными.', 'Результат — placeholder.']
    ],
    blogTitle: 'Блог',
    categories: ['Japan Market', 'International Business', 'Translation', 'Market Research', 'Business Strategy', 'International Trade'],
    articles: [
      ['japan-market-entry-guide', 'Demo Article: Japan Market Entry — что проверить перед стартом', 'Japan Market', 'SEO-friendly demo-структура статьи о выходе на японский рынок.'],
      ['business-matching-japan', 'Demo Article: как Business Matching помогает cross-border росту', 'International Business', 'Демо-структура статьи о business matching между Японией и глобальными рынками.'],
      ['translation-for-cross-border-business', 'Demo Article: почему бизнес-перевод — это не просто слова', 'Translation', 'Демо-статья о профессиональном переводе для международного бизнеса.']
    ],
    contactTitle: 'Контакты',
    contactIntro:
      'Расскажите о ваших международных бизнес-целях. Контактные данные ниже — placeholders до подтверждения.',
    form: ['Имя', 'Компания', 'Страна', 'Email', 'Телефон', 'Услуга', 'Сообщение', 'Отправить запрос'],
    privacyTitle: 'Политика конфиденциальности',
    privacy: [
      'Это нейтральный шаблон политики конфиденциальности. Перед публикацией желательно проверить его у специалиста.',
      'Сайт может собирать данные, отправленные через форму: имя, компания, страна, email, телефон, выбранная услуга и сообщение.',
      'Информация должна использоваться только для ответа на запросы и деловой коммуникации.',
      'Не добавляйте аналитику, рекламные пиксели или сторонние инструменты без проверки требований целевых юрисдикций.',
      'Юридические данные и контакты нужно добавить после подтверждения.'
    ]
  }
};

function parse(segments?: string[]) {
  const s = segments || [];
  const first = s[0];
  const lang: Lang = first === 'jp' || first === 'ru' ? first : 'en';
  const rest = lang === 'en' ? s : s.slice(1);
  const path = '/' + rest.join('/');
  return {
    lang,
    path: path === '/' ? '/' : path.replace(/\/$/, '')
  };
}

function href(lang: Lang, path: string) {
  if (lang === 'en') return path;
  return path === '/' ? `/${lang}` : `/${lang}${path}`;
}

export function generateStaticParams() {
  const result: { segments?: string[] }[] = [];

  for (const lang of languages) {
    for (const route of routes) {
      const parts = route === '/' ? [] : route.slice(1).split('/');
      result.push({
        segments: lang === 'en' ? parts : [lang, ...parts]
      });
    }
  }

  return result;
}

function Logo() {
  return (
    <div className="flex items-center gap-3">
      <div className="relative h-9 w-9 rounded-full border border-[#C9A66B]">
        <span className="absolute left-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#C9A66B]" />
        <span className="absolute right-2 top-1/2 h-1.5 w-1.5 -translate-y-1/2 rounded-full bg-[#C9A66B]" />
        <span className="absolute left-[12px] right-[12px] top-1/2 h-px bg-[#C9A66B]" />
      </div>
      <div className="leading-none">
        <div className="text-sm font-bold tracking-[.22em]">NEXBRIDGE</div>
        <div className="mt-1 text-[10px] tracking-[.48em] text-[#C9A66B]">GLOBAL</div>
      </div>
    </div>
  );
}

function Header({ lang, path, c }: any) {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#061427]/95 text-white backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <Link href={href(lang, '/')} aria-label="NexBridge Global home">
          <Logo />
        </Link>

        <nav className="hidden items-center gap-7 text-sm lg:flex">
          {c.nav.map((label: string, i: number) => (
            <Link
              key={label}
              href={href(lang, c.navPaths[i])}
              className="text-white/75 hover:text-[#C9A66B]"
            >
              {label}
            </Link>
          ))}

          <div className="flex items-center gap-2 border-l border-white/20 pl-5">
            {languages.map((l) => (
              <Link
                key={l}
                href={href(l, path)}
                className={l === lang ? 'font-semibold text-[#C9A66B]' : 'text-white/70'}
              >
                {l.toUpperCase()}
              </Link>
            ))}
          </div>
        </nav>

        <details className="relative lg:hidden">
          <summary className="cursor-pointer list-none rounded-full border border-white/25 px-4 py-2 text-sm">
            ☰
          </summary>
          <div className="absolute right-0 top-12 w-72 rounded-2xl border border-white/10 bg-[#061427] p-5 shadow-2xl">
            <nav className="flex flex-col gap-4">
              {c.nav.map((label: string, i: number) => (
                <Link key={label} href={href(lang, c.navPaths[i])} className="text-white">
                  {label}
                </Link>
              ))}
              <div className="mt-3 flex gap-4 border-t border-white/10 pt-4">
                {languages.map((l) => (
                  <Link
                    key={l}
                    href={href(l, path)}
                    className={l === lang ? 'font-semibold text-[#C9A66B]' : 'text-white/70'}
                  >
                    {l.toUpperCase()}
                  </Link>
                ))}
              </div>
            </nav>
          </div>
        </details>
      </div>
    </header>
  );
}

function Footer({ lang, c }: any) {
  return (
    <footer className="bg-[#061427] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-4 lg:px-8">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-5 max-w-md text-sm leading-7 text-white/65">
            International consulting, translation and business support connecting Japan with global markets.
          </p>
          <p className="mt-4 text-xs text-white/45">
            Placeholder email: hello@nexbridge.global
          </p>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-[#C9A66B]">Navigation</h2>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
            {c.nav.map((label: string, i: number) => (
              <Link key={label} href={href(lang, c.navPaths[i])}>
                {label}
              </Link>
            ))}
            <Link href={href(lang, '/privacy-policy')}>Privacy Policy</Link>
          </div>
        </div>

        <div>
          <h2 className="text-sm font-semibold text-[#C9A66B]">Social placeholders</h2>
          <div className="mt-4 flex flex-col gap-3 text-sm text-white/70">
            <span>LinkedIn: PLACEHOLDER</span>
            <span>Instagram: PLACEHOLDER</span>
            <span>Facebook: PLACEHOLDER</span>
            <span>Telegram: PLACEHOLDER</span>
            <span>WhatsApp: PLACEHOLDER</span>
            <span>LINE: PLACEHOLDER</span>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-white/45">
        © NexBridge Global. Placeholder corporate information.
      </div>
    </footer>
  );
}

function Section({ title, eyebrow, children, dark = false }: any) {
  return (
    <section className={dark ? 'bg-[#061427] text-white' : 'bg-white text-[#102033]'}>
      <div className="mx-auto max-w-7xl px-5 py-16 md:py-24 lg:px-8">
        {eyebrow ? (
          <p className="mb-3 text-xs font-semibold uppercase tracking-[.35em] text-[#C9A66B]">
            {eyebrow}
          </p>
        ) : null}

        {title ? (
          <h2 className="max-w-3xl text-3xl font-semibold tracking-tight md:text-5xl">
            {title}
          </h2>
        ) : null}

        <div className={title ? 'mt-10' : ''}>{children}</div>
      </div>
    </section>
  );
}

function HeroGraphic() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-md rounded-[2rem] border border-white/15 bg-white/5 p-6 shadow-2xl">
      <svg
        viewBox="0 0 420 420"
        role="img"
        aria-label="Abstract global network"
        className="h-full w-full"
      >
        <circle cx="210" cy="210" r="145" fill="none" stroke="rgba(255,255,255,.18)" />
        <circle cx="210" cy="210" r="95" fill="none" stroke="rgba(255,255,255,.12)" />
        <path
          d="M70 230 C140 120, 260 110, 350 180"
          fill="none"
          stroke="#C9A66B"
          strokeWidth="2"
        />
        <path
          d="M90 270 C170 330, 260 310, 340 230"
          fill="none"
          stroke="rgba(255,255,255,.35)"
        />
        {[
          [310, 160, 'Tokyo'],
          [150, 150, 'Asia'],
          [95, 250, 'Europe'],
          [205, 310, 'CIS'],
          [295, 265, 'Middle East']
        ].map(([x, y, label]: any) => (
          <g key={label}>
            <circle cx={x} cy={y} r="7" fill="#C9A66B" />
            <circle cx={x} cy={y} r="15" fill="none" stroke="rgba(201,166,107,.35)" />
            <text x={x} y={y + 30} textAnchor="middle" fill="rgba(255,255,255,.8)" fontSize="12">
              {label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

function ServicesGrid({ c, lang }: any) {
  return (
    <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
      {c.services.map((s: any) => (
        <Link
          href={href(lang, `/services/${s[0]}`)}
          key={s[0]}
          className="group rounded-[1.75rem] border border-[#E9DDC7] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-2xl"
        >
          <p className="text-xs font-semibold uppercase tracking-[.25em] text-[#C9A66B]">
            NexBridge
          </p>
          <h3 className="mt-4 text-xl font-semibold text-[#102033]">{s[1]}</h3>
          <p className="mt-3 text-sm leading-6 text-[#102033]/65">{s[2]}</p>
          <span className="mt-5 inline-flex text-sm font-semibold text-[#061427] group-hover:text-[#C9A66B]">
            {c.buttons.learn} →
          </span>
        </Link>
      ))}
    </div>
  );
}

function Home({ c, lang }: any) {
  return (
    <>
      <section className="network-bg text-white">
        <div className="mx-auto grid min-h-[82vh] max-w-7xl items-center gap-12 px-5 py-16 md:grid-cols-2 lg:px-8">
          <div className="fade-up">
            <p className="text-xs font-semibold uppercase tracking-[.35em] text-[#C9A66B]">
              NexBridge Global
            </p>
            <h1 className="mt-5 text-4xl font-semibold tracking-tight md:text-6xl lg:text-7xl">
              {c.home.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-white/75">
              {c.home.heroSubtitle}
            </p>
            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href={href(lang, '/contact')}
                className="rounded-full bg-[#C9A66B] px-7 py-4 text-center font-semibold text-[#061427]"
              >
                {c.buttons.consultation}
              </Link>
              <Link
                href={href(lang, '/services')}
                className="rounded-full border border-white/25 px-7 py-4 text-center font-semibold text-white"
              >
                {c.buttons.explore}
              </Link>
            </div>
          </div>

          <HeroGraphic />
        </div>
      </section>

      <Section title={c.home.aboutTitle}>
        <p className="max-w-3xl text-lg leading-8 text-[#102033]/70">{c.home.aboutText}</p>
      </Section>

      <Section eyebrow="Services" title={c.home.servicesTitle}>
        <ServicesGrid c={c} lang={lang} />
      </Section>

      <Section dark eyebrow="Advantages" title={c.home.whyTitle}>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {c.home.why.map((w: string) => (
            <div key={w} className="rounded-3xl border border-white/10 bg-white/5 p-6">
              <span className="text-[#C9A66B]">●</span>
              <h3 className="mt-3 text-xl font-semibold">{w}</h3>
            </div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Process" title={c.home.howTitle}>
        <div className="grid gap-5 md:grid-cols-4">
          {c.home.steps.map((s: any) => (
            <div key={s[0]} className="rounded-[1.5rem] border border-[#E9DDC7] p-6">
              <p className="text-3xl font-semibold text-[#C9A66B]">{s[0]}</p>
              <h3 className="mt-4 text-lg font-semibold">{s[1]}</h3>
              <p className="mt-3 text-sm leading-6 text-[#102033]/65">{s[2]}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section dark eyebrow="Global Reach" title={c.home.reachTitle}>
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
          <HeroGraphic />
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {c.home.reach.map((r: string) => (
              <span key={r} className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80">
                {r}
              </span>
            ))}
          </div>
        </div>
      </Section>

      <Section eyebrow="Languages" title={c.home.languagesTitle}>
        <div className="grid gap-5 md:grid-cols-3">
          {['Japanese', 'English', 'Russian'].map((l) => (
            <div key={l} className="rounded-[1.5rem] bg-[#E9DDC7]/40 p-8 text-center text-2xl font-semibold">
              {l}
            </div>
          ))}
        </div>
      </Section>

      <Section dark>
        <div className="text-center">
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold md:text-5xl">
            {c.home.cta}
          </h2>
          <Link
            href={href(lang, '/contact')}
            className="mt-8 inline-flex rounded-full bg-[#C9A66B] px-8 py-4 font-semibold text-[#061427]"
          >
            {c.buttons.contact}
          </Link>
        </div>
      </Section>
    </>
  );
}

function ContactPage({ c }: any) {
  const key = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || '';

  return (
    <>
      <Section dark eyebrow="Contact" title={c.contactTitle}>
        <p className="max-w-3xl text-lg leading-8 text-white/70">{c.contactIntro}</p>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-2">
          <form
            action="https://api.web3forms.com/submit"
            method="POST"
            className="grid gap-5 rounded-[2rem] border border-[#E9DDC7] bg-white p-5 shadow-2xl md:p-8"
          >
            <input type="hidden" name="access_key" value={key} />
            <input type="hidden" name="subject" value="NexBridge Global Website Inquiry" />

            {!key ? (
              <p className="rounded-2xl bg-amber-50 p-4 text-sm text-amber-900">
                Form frontend is ready. Add NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY to enable real sending.
              </p>
            ) : null}

            <div className="grid gap-5 md:grid-cols-2">
              {c.form.slice(0, 6).map((label: string, i: number) => {
                const names = ['name', 'company', 'country', 'email', 'phone', 'service'];
                return (
                  <label key={label} className="text-sm font-medium">
                    {label}
                    {i === 5 ? (
                      <select name={names[i]} className="mt-2 w-full rounded-2xl border border-[#E9DDC7] px-4 py-3">
                        {c.services.map((s: any) => (
                          <option key={s[0]}>{s[1]}</option>
                        ))}
                      </select>
                    ) : (
                      <input
                        required={i === 0 || i === 3}
                        type={i === 3 ? 'email' : 'text'}
                        name={names[i]}
                        className="mt-2 w-full rounded-2xl border border-[#E9DDC7] px-4 py-3"
                      />
                    )}
                  </label>
                );
              })}
            </div>

            <label className="text-sm font-medium">
              {c.form[6]}
              <textarea
                required
                name="message"
                rows={6}
                className="mt-2 w-full rounded-2xl border border-[#E9DDC7] px-4 py-3"
              />
            </label>

            <button
              disabled={!key}
              className="rounded-full bg-[#061427] px-7 py-4 font-semibold text-white disabled:opacity-50"
            >
              {c.form[7]}
            </button>
          </form>

          <div className="rounded-[2rem] bg-[#E9DDC7]/35 p-6">
            <h2 className="text-2xl font-semibold">Contact Channels</h2>
            <div className="mt-5 grid gap-3 text-sm">
              <p>
                Email:{' '}
                <a className="font-semibold text-[#061427]" href="mailto:hello@nexbridge.global">
                  hello@nexbridge.global
                </a>
              </p>
              <p className="text-[#102033]/60">Placeholder email until you confirm the real address.</p>
              <p>Phone: PLACEHOLDER_PHONE</p>
              <p>WhatsApp: PLACEHOLDER_WHATSAPP</p>
              <p>Telegram: PLACEHOLDER_TELEGRAM</p>
              <p>LINE: PLACEHOLDER_LINE</p>
              <p>LinkedIn: PLACEHOLDER_LINKEDIN</p>
            </div>
          </div>
        </div>

        <div className="mt-10 rounded-[2rem] border border-[#E9DDC7] bg-white p-6 shadow-sm">
          <div className="network-bg flex min-h-[280px] items-center justify-center rounded-[1.5rem] p-6 text-center text-white">
            <div>
              <p className="text-xs uppercase tracking-[.35em] text-[#C9A66B]">Map Placeholder</p>
              <h2 className="mt-4 text-2xl font-semibold">Google Maps Embed Area</h2>
              <p className="mt-3 max-w-lg text-sm leading-6 text-white/70">
                Later you can insert confirmed address, latitude, longitude or Google Maps embed code here.
                No address is invented.
              </p>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

export default function Page({ params }: { params: { segments?: string[] } }) {
  const { lang, path } = parse(params.segments);
  const c = text[lang];

  if (!routes.includes(path)) notFound();

  const service = c.services.find((s: any) => `/services/${s[0]}` === path);
  const article = c.articles.find((a: any) => `/blog/${a[0]}` === path);

  let page: React.ReactNode;

  if (path === '/') {
    page = <Home c={c} lang={lang} />;
  } else if (path === '/services') {
    page = (
      <Section eyebrow="NexBridge Global" title={c.servicesTitle}>
        <ServicesGrid c={c} lang={lang} />
      </Section>
    );
  } else if (service) {
    page = (
      <>
        <Section dark eyebrow="Service" title={service[1]}>
          <p className="max-w-2xl text-lg leading-8 text-white/70">{service[2]}</p>
        </Section>
        <Section title="Scope of Support">
          <div className="grid gap-4 md:grid-cols-2">
            {service[3].map((b: string) => (
              <div key={b} className="rounded-2xl border border-[#E9DDC7] p-5">
                ✓ {b}
              </div>
            ))}
          </div>
          <Link
            href={href(lang, '/contact')}
            className="mt-10 inline-flex rounded-full bg-[#061427] px-7 py-4 font-semibold text-white"
          >
            {c.buttons.consultation}
          </Link>
        </Section>
      </>
    );
  } else if (path === '/about') {
    page = (
      <>
        <Section dark eyebrow="About" title={c.aboutTitle}>
          <p className="max-w-3xl text-lg leading-8 text-white/70">{c.aboutIntro}</p>
        </Section>
        <Section>
          <div className="grid gap-6">
            {c.aboutSections.map((s: any) => (
              <article key={s[0]} className="rounded-[1.5rem] border border-[#E9DDC7] p-6">
                <h2 className="text-2xl font-semibold">{s[0]}</h2>
                <p className="mt-3 leading-7 text-[#102033]/70">{s[1]}</p>
              </article>
            ))}
          </div>
        </Section>
      </>
    );
  } else if (path === '/industries') {
    page = (
      <Section eyebrow="Industries" title={c.industriesTitle}>
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {c.industries.map((i: any) => (
            <article key={i[0]} className="rounded-[1.5rem] border border-[#E9DDC7] p-6">
              <h2 className="text-xl font-semibold">{i[0]}</h2>
              <p className="mt-3 text-sm leading-6 text-[#102033]/65">{i[1]}</p>
            </article>
          ))}
        </div>
      </Section>
    );
  } else if (path === '/cases') {
    page = (
      <Section eyebrow="Case Studies" title={c.casesTitle}>
        <div className="grid gap-6">
          {c.cases.map((item: any) => (
            <article key={item[0]} className="rounded-[2rem] border border-[#E9DDC7] p-6">
              <p className="text-xs uppercase tracking-[.25em] text-[#C9A66B]">Example Case</p>
              <h2 className="mt-3 text-2xl font-semibold">{item[0]}</h2>
              {['Challenge', 'Approach', 'Solution', 'Result'].map((label, idx) => (
                <div key={label} className="mt-5">
                  <h3 className="font-semibold">{label}</h3>
                  <p className="mt-1 text-[#102033]/65">{item[idx + 1]}</p>
                </div>
              ))}
            </article>
          ))}
        </div>
      </Section>
    );
  } else if (path === '/blog') {
    page = (
      <Section eyebrow="Insights" title={c.blogTitle}>
        <div className="mb-8 flex flex-wrap gap-3">
          {c.categories.map((cat: string) => (
            <span key={cat} className="rounded-full bg-[#E9DDC7]/50 px-4 py-2 text-sm">
              {cat}
            </span>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {c.articles.map((a: any) => (
            <article key={a[0]} className="rounded-[1.5rem] border border-[#E9DDC7] p-6">
              <p className="text-xs uppercase tracking-[.25em] text-[#C9A66B]">{a[2]}</p>
              <h2 className="mt-3 text-xl font-semibold">{a[1]}</h2>
              <p className="mt-3 text-sm leading-6 text-[#102033]/65">{a[3]}</p>
              <Link href={href(lang, `/blog/${a[0]}`)} className="mt-5 inline-flex font-semibold text-[#061427]">
                {c.buttons.read} →
              </Link>
            </article>
          ))}
        </div>
      </Section>
    );
  } else if (article) {
    page = (
      <>
        <Section dark eyebrow={article[2]} title={article[1]}>
          <p className="max-w-3xl text-white/70">{article[3]}</p>
        </Section>
        <Section>
          <div className="max-w-3xl space-y-5">
            <p className="rounded-2xl bg-amber-50 p-4 text-sm text-amber-900">
              Demo content — replace before final publication.
            </p>
            <p className="leading-8 text-[#102033]/70">
              This is demo content. Replace it with a real SEO-friendly article before publication.
            </p>
            <p className="leading-8 text-[#102033]/70">
              Use this page structure for market insights, business strategy, translation guidance and international trade articles.
            </p>
          </div>
        </Section>
      </>
    );
  } else if (path === '/contact') {
    page = <ContactPage c={c} />;
  } else if (path === '/privacy-policy') {
    page = (
      <Section eyebrow="Privacy" title={c.privacyTitle}>
        <div className="max-w-3xl space-y-5">
          {c.privacy.map((p: string) => (
            <p key={p} className="leading-8 text-[#102033]/70">
              {p}
            </p>
          ))}
        </div>
      </Section>
    );
  }

  return (
    <>
      <Header lang={lang} path={path} c={c} />
      {page}
      <Footer lang={lang} c={c} />
    </>
  );
}
