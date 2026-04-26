/* ══════════════════════════════════════
   AcademiaHub - Complete Data Layer
   ══════════════════════════════════════ */

// ═══════════════ SPECIALIZATIONS ═══════════════
const SPECS = {
    'الطب والعلوم الصحية': {
        img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80',
        icon: 'fa-stethoscope',
        color: '#EF4444',
        branches: ['طب بشري','طب أسنان','صيدلة','تمريض','صحة عامة','علاج طبيعي','مختبرات طبية','أشعة','تخدير','طب عيون','جراحة عامة','طب أطفال','أمراض جلدية','نساء وولادة','عظام']
    },
    'الهندسة': {
        img: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&q=80',
        icon: 'fa-gears',
        color: '#F59E0B',
        branches: ['مدنية','معمارية','كهربائية','ميكانيكية','برمجيات','علوم حاسوب','ذكاء اصطناعي','أمن سيبراني','بيانات','كيميائية','نفط','طيران','صناعية','بيئية','طاقة متجددة']
    },
    'العلوم الطبيعية والبحتة': {
        img: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=400&q=80',
        icon: 'fa-flask',
        color: '#10B981',
        branches: ['فيزياء','كيمياء','أحياء','رياضيات','إحصاء','علوم بيئة','جيولوجيا','فلك','فيزياء طبية','كيمياء حيوية']
    },
    'العلوم الاجتماعية': {
        img: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80',
        icon: 'fa-users-gear',
        color: '#8B5CF6',
        branches: ['علم اجتماع','علم نفس','خدمة اجتماعية','علوم سياسية','إعلام واتصال','أنثروبولوجيا','علاقات دولية']
    },
    'العلوم الإنسانية والتربوية': {
        img: 'https://images.unsplash.com/photo-1491841573634-28140fc7ced7?w=400&q=80',
        icon: 'fa-book',
        color: '#EC4899',
        branches: ['تاريخ','فلسفة','أدب عربي','أدب إنجليزي','لغويات','دراسات إسلامية','تربية','جغرافيا','آثار']
    },
    'الإدارة والاقتصاد': {
        img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&q=80',
        icon: 'fa-chart-line',
        color: '#06B6D4',
        branches: ['إدارة أعمال','تسويق','محاسبة','تمويل','اقتصاد','نظم معلومات','موارد بشرية','سلاسل إمداد']
    },
    'القانون والأنظمة': {
        img: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&q=80',
        icon: 'fa-scale-balanced',
        color: '#6366F1',
        branches: ['قانون عام','قانون خاص','قانون جنائي','قانون تجاري','قانون دولي','أنظمة','قانون إداري']
    }
};

// ═══════════════ SERVICES BY SECTION ═══════════════
const SERVICES = {
    thesis: {
        title: 'خدمات رسائل الماجستير والدكتوراه',
        icon: 'fa-file-pen',
        color: '#2563EB',
        items: [
            {icon:'fa-lightbulb',color:'#2563EB',title:'المساعدة في اقتراح عنوان الرسالة',desc:'نقترح عليك عناوين بحثية مبتكرة وقابلة للتطبيق حسب تخصصك'},
            {icon:'fa-file-lines',color:'#3B82F6',title:'المساعدة في كتابة البروبوزل (Proposal)',desc:'إعداد خطة بحث متكاملة وفق المعايير الأكاديمية'},
            {icon:'fa-book-open',color:'#60A5FA',title:'توفير المصادر والمراجع',desc:'نجمع لك أحدث المراجع والدراسات السابقة ذات الصلة'},
            {icon:'fa-spell-check',color:'#10B981',title:'التدقيق الإملائي واللغوي',desc:'تدقيق شامل للنص من الأخطاء الإملائية والنحوية'},
            {icon:'fa-paint-roller',color:'#F59E0B',title:'إعادة التنسيق حسب دليل الجامعة',desc:'تنسيق الرسالة كاملة حسب دليل الجامعة الخاص بك'},
            {icon:'fa-pen-to-square',color:'#8B5CF6',title:'المساعدة في كتابة أحد الفصول',desc:'نساعدك في كتابة فصل محدد مثل الإطار النظري أو المنهجية'},
            {icon:'fa-user-graduate',color:'#EC4899',title:'الإشراف على كتابة الرسالة كاملة',desc:'مرافقة أكاديمية من البداية حتى مناقشة الرسالة'},
            {icon:'fa-chart-bar',color:'#06B6D4',title:'المساعدة في تحليل البيانات',desc:'تحليل إحصائي احترافي للبيانات باستخدام SPSS وR'},
            {icon:'fa-list-check',color:'#6366F1',title:'إعداد عرض المناقشة (Presentation)',desc:'تصميم عرض تقديمي احترافي لجلسة المناقشة'}
        ]
    },
    memo: {
        title: 'خدمات مذكرات التخرج',
        icon: 'fa-note-sticky',
        color: '#14B8A6',
        items: [
            {icon:'fa-lightbulb',color:'#14B8A6',title:'اقتراح موضوع المذكرة',desc:'نساعدك في اختيار موضوع مناسب لمذكرتك'},
            {icon:'fa-file-lines',color:'#0D9488',title:'كتابة خطة المذكرة',desc:'إعداد خطة عمل متكاملة للمذكرة'},
            {icon:'fa-magnifying-glass',color:'#0F766E',title:'جمع المصادر والمراجع',desc:'توفير قائمة شاملة بالمصادر والمراجع'},
            {icon:'fa-pen-to-square',color:'#115E59',title:'كتابة المذكرة كاملة',desc:'كتابة المذكرة وفق المنهجية العلمية'},
            {icon:'fa-spell-check',color:'#10B981',title:'التدقيق والمراجعة',desc:'مراجعة لغوية وعلمية شاملة'},
            {icon:'fa-paint-roller',color:'#F59E0B',title:'التنسيق النهائي',desc:'تنسيق المذكرة حسب متطلبات المؤسسة'}
        ]
    },
    graduation: {
        title: 'خدمات مشاريع التخرج',
        icon: 'fa-graduation-cap',
        color: '#F97316',
        items: [
            {icon:'fa-lightbulb',color:'#F97316',title:'اقتراح فكرة المشروع',desc:'أفكار مبتكرة لمشروع تخرجك حسب تخصصك'},
            {icon:'fa-diagram-project',color:'#EA580C',title:'كتابة خطة المشروع',desc:'خطة عمل تفصيلية للمشروع'},
            {icon:'fa-code',color:'#C2410C',title:'تنفيذ المشروع البرمجي',desc:'تطوير وبرمجة المشاريع التقنية'},
            {icon:'fa-file-lines',color:'#9A3412',title:'كتابة تقرير المشروع',desc:'تقرير متكامل حسب متطلبات الجامعة'},
            {icon:'fa-sliders',color:'#7C2D12',title:'عرض المشروع',desc:'تحضير عرض تقديمي احترافي للمشروع'}
        ]
    },
    papers: {
        title: 'الأوراق البحثية والمقالات العلمية',
        icon: 'fa-newspaper',
        color: '#8B5CF6',
        items: [
            {icon:'fa-lightbulb',color:'#8B5CF6',title:'اقتراح فكرة الورقة البحثية',desc:'نساعدك في تحديد موضوع بحثي أصيل'},
            {icon:'fa-pen-fancy',color:'#7C3AED',title:'كتابة الورقة البحثية',desc:'كتابة البحث وفق معايير النشر العلمي'},
            {icon:'fa-language',color:'#6D28D9',title:'كتابة المقالات العلمية',desc:'مقالات علمية رصينة بالعربية والإنجليزية'},
            {icon:'fa-file-pen',color:'#5B21B6',title:'تحرير وتدقيق الأبحاث',desc:'مراجعة شاملة للبحث قبل النشر'},
            {icon:'fa-quote-right',color:'#4C1D95',title:'إدارة الاستشهادات والمراجع',desc:'تنسيق المراجع حسب أي نظام توثيق'}
        ]
    },
    publishing: {
        title: 'النشر الدولي والمحلي',
        icon: 'fa-globe',
        color: '#0284C7',
        items: [
            {icon:'fa-magnifying-glass',color:'#0284C7',title:'المساعدة في اختيار المجلة المناسبة',desc:'نختار لك أفضل مجلة تناسب بحثك'},
            {icon:'fa-file-pen',color:'#0369A1',title:'تنسيق المقال حسب شروط وقالب المجلة',desc:'تنسيق كامل حسب Author Guidelines'},
            {icon:'fa-envelope',color:'#075985',title:'كتابة Cover Letter',desc:'رسالة تقديم احترافية للمحرر'},
            {icon:'fa-check-double',color:'#0C4A6E',title:'فحص الاقتباس قبل التقديم',desc:'فحص نسبة الاقتباس باستخدام Turnitin/iThenticate'},
            {icon:'fa-eye',color:'#082F49',title:'متابعة عملية النشر والتحكيم',desc:'نواصل مع المجلة ونرد على ملاحظات المحكمين'}
        ]
    },
    translation: {
        title: 'الترجمة وفحص الاقتباس',
        icon: 'fa-language',
        color: '#D97706',
        items: [
            {icon:'fa-language',color:'#D97706',title:'ترجمة أكاديمية عربي ↔ إنجليزي',desc:'ترجمة احترافية للبحوث والرسائل'},
            {icon:'fa-user-check',color:'#B45309',title:'مراجعة متحدث أصلي (Native)',desc:'تدقيق الترجمة من قبل Native Speakers'},
            {icon:'fa-check-double',color:'#92400E',title:'فحص الاقتباس Turnitin',desc:'فحص دقيق لنسبة الاقتباس مع تقرير'},
            {icon:'fa-pen-to-square',color:'#78350F',title:'إعادة صياغة لتقليل الاقتباس',desc:'Paraphrasing احترافي لتقليل نسبة الاقتباس'},
            {icon:'fa-list-ol',color:'#451A03',title:'تدقيق وتنسيق المراجع',desc:'تنسيق المراجع حسب APA, Harvard, Vancouver'}
        ]
    },
    statistics: {
        title: 'التحليل الإحصائي',
        icon: 'fa-chart-pie',
        color: '#BE185D',
        items: [
            {icon:'fa-table',color:'#BE185D',title:'الإحصاء الوصفي',desc:'متوسطات، انحرافات، تكرارات، رسوم بيانية'},
            {icon:'fa-chart-line',color:'#9D174D',title:'اختبارات الفروض',desc:'T-test, ANOVA, Chi-Square, Mann-Whitney'},
            {icon:'fa-chart-scatter',color:'#831843',title:'تحليل الانحدار',desc:'انحدار بسيط ومتعدد ولوجستي'},
            {icon:'fa-project-diagram',color:'#9D174D',title:'نمذجة SEM',desc:'نمذجة المعادلات الهيكلية باستخدام AMOS/SmartPLS'},
            {icon:'fa-code',color:'#831843',title:'تحليل باستخدام R و Python',desc:'برمجة إحصائية متقدمة'},
            {icon:'fa-file-code',color:'#BE185D',title:'تحليل SPSS',desc:'جميع التحليلات باستخدام SPSS'}
        ]
    },
    programming: {
        title: 'البرمجة والتطوير',
        icon: 'fa-code',
        color: '#334155',
        items: [
            {icon:'fa-globe',color:'#334155',title:'إنشاء مواقع ويب',desc:'تطوير مواقع ويب احترافية'},
            {icon:'fa-mobile-screen',color:'#475569',title:'تطوير تطبيقات الجوال',desc:'تطبيقات iOS و Android'},
            {icon:'fa-desktop',color:'#64748B',title:'إنشاء أنظمة سطح مكتب',desc:'أنظمة إدارة وقواعد بيانات'},
            {icon:'fa-paint-brush',color:'#94A3B8',title:'تصميم واجهات المستخدم',desc:'UI/UX Design احترافي'},
            {icon:'fa-microchip',color:'#334155',title:'برمجة MATLAB',desc:'محاكاة ونمذجة باستخدام MATLAB'},
            {icon:'fa-python',color:'#475569',title:'برمجة Python',desc:'تحليل بيانات وتعلم آلة'},
            {icon:'fa-database',color:'#64748B',title:'قواعد البيانات',desc:'تصميم وإدارة قواعد البيانات'}
        ]
    }
};

// ═══════════════ EXPERTS (6 per category = 42 experts) ═══════════════
const EXPERTS = [
    // الطب (6)
    {n:'أ.د. عبدالرحمن القحطاني',t:'أستاذ دكتور',s:'الطب البشري - الباطنية',c:'الطب والعلوم الصحية',r:4.9,p:62,exp:'15 سنة',b:'diamond',country:'🇸🇦 السعودية',bio:'استشاري باطنية، ناشر في دوريات طبية عالمية، محكم في مجلات Scopus'},
    {n:'د. نورة الشمري',t:'دكتورة',s:'طب الأسنان - تقويم',c:'الطب والعلوم الصحية',r:4.8,p:38,exp:'10 سنوات',b:'diamond',country:'🇸🇦 السعودية',bio:'أخصائية تقويم أسنان، باحثة في مواد طب الأسنان الحيوية'},
    {n:'د. فيصل المطيري',t:'دكتور',s:'الصيدلة السريرية',c:'الطب والعلوم الصحية',r:4.7,p:45,exp:'12 سنة',b:'gold',country:'🇸🇦 السعودية',bio:'صيدلي سريري، خبير في اقتصاديات الدواء والتجارب السريرية'},
    {n:'د. منى العتيبي',t:'دكتورة',s:'التمريض - عناية مركزة',c:'الطب والعلوم الصحية',r:4.6,p:29,exp:'8 سنوات',b:'gold',country:'🇸🇦 السعودية',bio:'ممرضة ممارسة متقدمة، باحثة في جودة الرعاية الصحية'},
    {n:'أ.د. خالد السبيعي',t:'أستاذ دكتور',s:'الصحة العامة - وبائيات',c:'الطب والعلوم الصحية',r:4.9,p:55,exp:'18 سنة',b:'diamond',country:'🇸🇦 السعودية',bio:'خبير وبائيات، مستشار منظمة الصحة العالمية سابقاً'},
    {n:'د. جون سميث',t:'دكتور',s:'الطب البشري - الجراحة',c:'الطب والعلوم الصحية',r:4.7,p:40,exp:'14 سنة',b:'gold',country:'🇬🇧 المملكة المتحدة',bio:'استشاري جراحة، باحث في جامعة كامبريدج'},

    // الهندسة (6)
    {n:'د. سارة الأحمدي',t:'دكتورة',s:'الذكاء الاصطناعي وتعلم الآلة',c:'الهندسة',r:4.9,p:48,exp:'11 سنة',b:'diamond',country:'🇸🇦 السعودية',bio:'باحثة في التعلم العميق، ناشرة في مؤتمرات NeurIPS و ICML'},
    {n:'د. عمر الحربي',t:'دكتور',s:'الهندسة المدنية - إنشاءات',c:'الهندسة',r:4.8,p:41,exp:'13 سنة',b:'diamond',country:'🇸🇦 السعودية',bio:'مهندس استشاري، خبير في تحليل المنشآت والخرسانة المسلحة'},
    {n:'د. ليلى القاسم',t:'دكتورة',s:'الهندسة الكهربائية - اتصالات',c:'الهندسة',r:4.7,p:35,exp:'9 سنوات',b:'gold',country:'🇸🇦 السعودية',bio:'متخصصة في شبكات الجيل الخامس ومعالجة الإشارات'},
    {n:'د. محمد العمري',t:'دكتور',s:'الأمن السيبراني',c:'الهندسة',r:4.8,p:52,exp:'14 سنة',b:'diamond',country:'🇸🇦 السعودية',bio:'خبير أمن معلومات، حاصل على شهادات CISSP و CEH'},
    {n:'د. أحمد الشهري',t:'دكتور',s:'الهندسة الميكانيكية - طاقة متجددة',c:'الهندسة',r:4.7,p:33,exp:'10 سنوات',b:'gold',country:'🇸🇦 السعودية',bio:'باحث في الطاقة الشمسية وكفاءة الأنظمة الحرارية'},
    {n:'د. ماريا رودريغيز',t:'دكتورة',s:'هندسة البرمجيات',c:'الهندسة',r:4.8,p:44,exp:'12 سنة',b:'diamond',country:'🇪🇸 إسبانيا',bio:'خبيرة في هندسة البرمجيات، عملت في مشاريع أوروبية كبرى'},

    // العلوم (6)
    {n:'د. محمد القحطاني',t:'دكتور',s:'الإحصاء وتحليل البيانات',c:'العلوم الطبيعية والبحتة',r:4.8,p:58,exp:'16 سنة',b:'diamond',country:'🇸🇦 السعودية',bio:'إحصائي محترف، خبير في SPSS و R و Python للنمذجة'},
    {n:'د. عبير الرشيدي',t:'دكتورة',s:'الكيمياء التحليلية',c:'العلوم الطبيعية والبحتة',r:4.6,p:24,exp:'7 سنوات',b:'silver',country:'🇸🇦 السعودية',bio:'كيميائية متخصصة في التحليل الآلي والكروماتوغرافيا'},
    {n:'د. طارق الشمري',t:'دكتور',s:'الأحياء الجزيئية',c:'العلوم الطبيعية والبحتة',r:4.7,p:31,exp:'9 سنوات',b:'gold',country:'🇸🇦 السعودية',bio:'باحث في التقنية الحيوية والهندسة الوراثية'},
    {n:'د. هبة اليوسف',t:'دكتورة',s:'الفيزياء الطبية',c:'العلوم الطبيعية والبحتة',r:4.5,p:19,exp:'5 سنوات',b:'bronze',country:'🇸🇦 السعودية',bio:'فيزيائية طبية متخصصة في العلاج الإشعاعي'},
    {n:'د. بيير دوبونت',t:'دكتور',s:'الكيمياء العضوية',c:'العلوم الطبيعية والبحتة',r:4.6,p:28,exp:'11 سنة',b:'gold',country:'🇫🇷 فرنسا',bio:'باحث في الكيمياء العضوية، ناشر في مجلات Nature Chemistry'},
    {n:'د. هانز مولر',t:'دكتور',s:'الفيزياء النظرية',c:'العلوم الطبيعية والبحتة',r:4.7,p:35,exp:'15 سنة',b:'diamond',country:'🇩🇪 ألمانيا',bio:'فيزيائي نظري، باحث في معهد ماكس بلانك'},

    // الاجتماعية (6)
    {n:'د. عبدالله المطيري',t:'دكتور',s:'علم الاجتماع',c:'العلوم الاجتماعية',r:4.7,p:36,exp:'12 سنة',b:'gold',country:'🇸🇦 السعودية',bio:'باحث في التغير الاجتماعي والتنمية المجتمعية'},
    {n:'د. سلمى الحربي',t:'دكتورة',s:'علم النفس السريري',c:'العلوم الاجتماعية',r:4.8,p:42,exp:'11 سنة',b:'diamond',country:'🇸🇦 السعودية',bio:'أخصائية نفسية إكلينيكية، باحثة في الصحة النفسية'},
    {n:'د. وليد القحطاني',t:'دكتور',s:'العلوم السياسية والعلاقات الدولية',c:'العلوم الاجتماعية',r:4.5,p:22,exp:'8 سنوات',b:'silver',country:'🇸🇦 السعودية',bio:'محلل سياسي وباحث في الشؤون الدولية'},
    {n:'د. نادية العجمي',t:'دكتورة',s:'الإعلام والاتصال',c:'العلوم الاجتماعية',r:4.6,p:28,exp:'9 سنوات',b:'gold',country:'🇸🇦 السعودية',bio:'باحثة في الإعلام الرقمي وتحليل المحتوى'},
    {n:'د. إميلي جونسون',t:'دكتورة',s:'علم النفس التنظيمي',c:'العلوم الاجتماعية',r:4.6,p:30,exp:'10 سنوات',b:'gold',country:'🇺🇸 الولايات المتحدة',bio:'أخصائية نفسية تنظيمية، مستشارة لدى شركات عالمية'},
    {n:'د. كينجي تاناكا',t:'دكتور',s:'الأنثروبولوجيا',c:'العلوم الاجتماعية',r:4.5,p:25,exp:'13 سنة',b:'silver',country:'🇯🇵 اليابان',bio:'باحث في الأنثروبولوجيا الثقافية، دراسات ميدانية في آسيا'},

    // الإنسانية (6)
    {n:'د. ليلى العتيبي',t:'دكتورة',s:'الأدب العربي',c:'العلوم الإنسانية والتربوية',r:4.7,p:25,exp:'10 سنوات',b:'gold',country:'🇸🇦 السعودية',bio:'أستاذة الأدب العربي، متخصصة في النقد الأدبي'},
    {n:'د. إبراهيم الدوسري',t:'دكتور',s:'التاريخ الإسلامي',c:'العلوم الإنسانية والتربوية',r:4.5,p:18,exp:'7 سنوات',b:'silver',country:'🇸🇦 السعودية',bio:'مؤرخ متخصص في التاريخ الإسلامي والحضارة'},
    {n:'د. خالد العسيري',t:'دكتور',s:'اللغويات والترجمة',c:'العلوم الإنسانية والتربوية',r:4.6,p:40,exp:'15 سنة',b:'gold',country:'🇸🇦 السعودية',bio:'لغوي ومترجم معتمد، خبير في الترجمة الأكاديمية'},
    {n:'د. هناء الشهري',t:'دكتورة',s:'أصول التربية ومناهج التدريس',c:'العلوم الإنسانية والتربوية',r:4.4,p:15,exp:'5 سنوات',b:'bronze',country:'🇸🇦 السعودية',bio:'تربوية متخصصة في تطوير المناهج وتقنيات التعليم'},
    {n:'د. أحمد بن علي',t:'دكتور',s:'الفلسفة الإسلامية',c:'العلوم الإنسانية والتربوية',r:4.5,p:20,exp:'9 سنوات',b:'silver',country:'🇲🇦 المغرب',bio:'فيلسوف وباحث في الفكر الإسلامي المعاصر'},
    {n:'د. لوسيا فيراري',t:'دكتورة',s:'الأدب المقارن',c:'العلوم الإنسانية والتربوية',r:4.6,p:22,exp:'8 سنوات',b:'gold',country:'🇮🇹 إيطاليا',bio:'باحثة في الأدب المقارن، تدرس في جامعة بولونيا'},

    // الإدارة (6)
    {n:'د. سلطان المالكي',t:'دكتور',s:'إدارة الأعمال - استراتيجية',c:'الإدارة والاقتصاد',r:4.7,p:44,exp:'12 سنة',b:'gold',country:'🇸🇦 السعودية',bio:'خبير استراتيجية، مستشار إداري لعدة جهات حكومية'},
    {n:'د. ريم الفيصل',t:'دكتورة',s:'التسويق الرقمي',c:'الإدارة والاقتصاد',r:4.6,p:32,exp:'8 سنوات',b:'gold',country:'🇸🇦 السعودية',bio:'باحثة في سلوك المستهلك والتسويق عبر المنصات الرقمية'},
    {n:'د. عبدالعزيز العنزي',t:'دكتور',s:'المحاسبة والمراجعة',c:'الإدارة والاقتصاد',r:4.5,p:26,exp:'10 سنوات',b:'silver',country:'🇸🇦 السعودية',bio:'محاسب قانوني، خبير في معايير المحاسبة الدولية'},
    {n:'د. نورة القحطاني',t:'دكتورة',s:'الاقتصاد والتمويل',c:'الإدارة والاقتصاد',r:4.8,p:38,exp:'11 سنة',b:'diamond',country:'🇸🇦 السعودية',bio:'اقتصادية متخصصة في الاقتصاد القياسي والنمذجة المالية'},
    {n:'د. جيمس أندرسون',t:'دكتور',s:'إدارة الموارد البشرية',c:'الإدارة والاقتصاد',r:4.6,p:31,exp:'14 سنة',b:'gold',country:'🇬🇧 المملكة المتحدة',bio:'خبير موارد بشرية، مستشار لدى شركات FTSE 100'},
    {n:'د. صوفي مارتن',t:'دكتورة',s:'التمويل الدولي',c:'الإدارة والاقتصاد',r:4.7,p:36,exp:'12 سنة',b:'gold',country:'🇫🇷 فرنسا',bio:'خبيرة تمويل دولي، عملت في البنك المركزي الأوروبي'},

    // القانون (6)
    {n:'د. فاطمة الزهراني',t:'دكتورة',s:'القانون الجنائي',c:'القانون والأنظمة',r:4.6,p:20,exp:'9 سنوات',b:'silver',country:'🇸🇦 السعودية',bio:'محامية وباحثة في القانون الجنائي المقارن'},
    {n:'د. محمد الدوسري',t:'دكتور',s:'القانون التجاري',c:'القانون والأنظمة',r:4.7,p:34,exp:'14 سنة',b:'gold',country:'🇸🇦 السعودية',bio:'مستشار قانوني، متخصص في قانون الشركات والتحكيم التجاري'},
    {n:'د. سارة العنزي',t:'دكتورة',s:'القانون الدولي',c:'القانون والأنظمة',r:4.5,p:16,exp:'6 سنوات',b:'bronze',country:'🇸🇦 السعودية',bio:'باحثة في القانون الدولي الإنساني وحقوق الإنسان'},
    {n:'د. تركي المالكي',t:'دكتور',s:'القانون العام',c:'القانون والأنظمة',r:4.6,p:28,exp:'11 سنة',b:'gold',country:'🇸🇦 السعودية',bio:'قاضٍ سابق، خبير في القانون الإداري والدستوري'},
    {n:'د. عمر بن جلول',t:'دكتور',s:'القانون الدستوري',c:'القانون والأنظمة',r:4.4,p:18,exp:'8 سنوات',b:'bronze',country:'🇩🇿 الجزائر',bio:'أستاذ قانون دستوري، مستشار لدى مؤسسات حكومية'},
    {n:'د. مايكل براون',t:'دكتور',s:'القانون الدولي التجاري',c:'القانون والأنظمة',r:4.7,p:32,exp:'16 سنة',b:'diamond',country:'🇺🇸 الولايات المتحدة',bio:'محامٍ دولي، خبير في منظمة التجارة العالمية'}
];

// ═══════════════ JOURNALS (الدولية والمحلية) ═══════════════
const JOURNALS = {
    international: {
        title: '🌍 مجلات دولية',
        journals: [
            {name:'Nature',issn:'0028-0836',logo:'https://www.nature.com/favicon.ico',spec:'متعدد التخصصات',q:'Q1'},
            {name:'Science',issn:'0036-8075',logo:'https://www.science.org/favicon.ico',spec:'متعدد التخصصات',q:'Q1'},
            {name:'The Lancet',issn:'0140-6736',logo:'https://www.thelancet.com/favicon.ico',spec:'الطب',q:'Q1'},
            {name:'IEEE Access',issn:'2169-3536',logo:'https://ieeexplore.ieee.org/favicon.ico',spec:'الهندسة',q:'Q1'},
            {name:'Cell',issn:'0092-8674',logo:'https://www.cell.com/favicon.ico',spec:'الأحياء',q:'Q1'},
            {name:'Advanced Materials',issn:'0935-9648',logo:'https://onlinelibrary.wiley.com/favicon.ico',spec:'المواد',q:'Q1'},
            {name:'Journal of Business Research',issn:'0148-2963',logo:'https://www.journals.elsevier.com/favicon.ico',spec:'إدارة',q:'Q1'},
            {name:'Chemical Reviews',issn:'0009-2665',logo:'https://pubs.acs.org/favicon.ico',spec:'الكيمياء',q:'Q1'},
            {name:'Physical Review Letters',issn:'0031-9007',logo:'https://journals.aps.org/favicon.ico',spec:'الفيزياء',q:'Q1'},
            {name:'Psychological Bulletin',issn:'0033-2909',logo:'https://www.apa.org/favicon.ico',spec:'علم النفس',q:'Q1'},
            {name:'Harvard Law Review',issn:'0017-811X',logo:'https://harvardlawreview.org/favicon.ico',spec:'القانون',q:'Q1'},
            {name:'Journal of Political Economy',issn:'0022-3808',logo:'https://www.journals.uchicago.edu/favicon.ico',spec:'اقتصاد',q:'Q1'},
            {name:'Artificial Intelligence',issn:'0004-3702',logo:'https://www.journals.elsevier.com/favicon.ico',spec:'ذكاء اصطناعي',q:'Q1'},
            {name:'Educational Researcher',issn:'0013-189X',logo:'https://www.aera.net/favicon.ico',spec:'التربية',q:'Q1'},
            {name:'Social Forces',issn:'0037-7732',logo:'https://academic.oup.com/favicon.ico',spec:'علم اجتماع',q:'Q1'}
        ]
    },
    algeria: {
        title: '🇩🇿 مجلات جزائرية',
        journals: [
            {name:'مجلة العلوم الإنسانية',issn:'1111-1111',spec:'إنسانية',logo:'https://www.univ-constantine2.dz/favicon.ico'},
            {name:'مجلة الباحث',issn:'1111-2222',spec:'اقتصاد',logo:'https://www.univ-alger.dz/favicon.ico'},
            {name:'مجلة الدراسات القانونية',issn:'1111-3333',spec:'قانون',logo:'https://www.univ-alger.dz/favicon.ico'},
            {name:'المجلة الجزائرية للهندسة',issn:'1111-4444',spec:'هندسة',logo:'https://www.enp.edu.dz/favicon.ico'},
            {name:'مجلة العلوم الطبية',issn:'1111-5555',spec:'طب',logo:'https://www.univ-alger.dz/favicon.ico'}
        ]
    },
    iraq: {
        title: '🇮🇶 مجلات عراقية',
        journals: [
            {name:'مجلة بغداد للعلوم',issn:'2222-1111',spec:'علوم',logo:'https://www.uobaghdad.edu.iq/favicon.ico'},
            {name:'المجلة العراقية للهندسة',issn:'2222-2222',spec:'هندسة',logo:'https://www.uotechnology.edu.iq/favicon.ico'},
            {name:'مجلة الآداب',issn:'2222-3333',spec:'آداب',logo:'https://www.uobaghdad.edu.iq/favicon.ico'},
            {name:'مجلة القانون والسياسة',issn:'2222-4444',spec:'قانون',logo:'https://www.uobaghdad.edu.iq/favicon.ico'},
            {name:'المجلة العراقية للطب',issn:'2222-5555',spec:'طب',logo:'https://www.uobaghdad.edu.iq/favicon.ico'}
        ]
    },
    jordan: {
        title: '🇯🇴 مجلات أردنية',
        journals: [
            {name:'المجلة الأردنية للعلوم',issn:'3333-1111',spec:'علوم',logo:'https://www.ju.edu.jo/favicon.ico'},
            {name:'دراسات - العلوم الإنسانية',issn:'3333-2222',spec:'إنسانية',logo:'https://www.ju.edu.jo/favicon.ico'},
            {name:'المجلة الأردنية للقانون',issn:'3333-3333',spec:'قانون',logo:'https://www.ju.edu.jo/favicon.ico'},
            {name:'مجلة اتحاد الجامعات العربية',issn:'3333-4444',spec:'متعدد',logo:'https://www.aaru.edu.jo/favicon.ico'},
            {name:'المجلة الأردنية للهندسة',issn:'3333-5555',spec:'هندسة',logo:'https://www.just.edu.jo/favicon.ico'}
        ]
    },
    libya: {
        title: '🇱🇾 مجلات ليبية',
        journals: [
            {name:'المجلة الليبية للعلوم',issn:'4444-1111',spec:'علوم',logo:'https://www.uot.edu.ly/favicon.ico'},
            {name:'مجلة جامعة طرابلس',issn:'4444-2222',spec:'متعدد',logo:'https://www.uot.edu.ly/favicon.ico'},
            {name:'مجلة البحوث القانونية',issn:'4444-3333',spec:'قانون',logo:'https://www.uot.edu.ly/favicon.ico'},
            {name:'المجلة الليبية للطب',issn:'4444-4444',spec:'طب',logo:'https://www.uot.edu.ly/favicon.ico'},
            {name:'مجلة الاقتصاد والتجارة',issn:'4444-5555',spec:'اقتصاد',logo:'https://www.uot.edu.ly/favicon.ico'}
        ]
    },
    morocco: {
        title: '🇲🇦 مجلات مغربية',
        journals: [
            {name:'المجلة المغربية للعلوم',issn:'5555-1111',spec:'علوم',logo:'https://www.um5.ac.ma/favicon.ico'},
            {name:'مجلة كلية الآداب',issn:'5555-2222',spec:'آداب',logo:'https://www.um5.ac.ma/favicon.ico'},
            {name:'المجلة المغربية للقانون',issn:'5555-3333',spec:'قانون',logo:'https://www.um5.ac.ma/favicon.ico'},
            {name:'مجلة الاقتصاد المغربي',issn:'5555-4444',spec:'اقتصاد',logo:'https://www.um5.ac.ma/favicon.ico'},
            {name:'المجلة المغربية للهندسة',issn:'5555-5555',spec:'هندسة',logo:'https://www.emi.ac.ma/favicon.ico'}
        ]
    }
};

// ═══════════════ PORTFOLIO (أعمال سابقة) ═══════════════
const PORTFOLIO = [
    {type:'pdf',icon:'fa-file-pdf',color:'#EF4444',title:'رسالة ماجستير في الذكاء الاصطناعي',desc:'دراسة حول تطبيقات التعلم العميق في معالجة الصور الطبية',cat:'رسالة',file:'sample-thesis-ai.pdf'},
    {type:'pdf',icon:'fa-file-pdf',color:'#EF4444',title:'رسالة دكتوراه في الهندسة المدنية',desc:'تحليل سلوك المنشآت الخرسانية تحت الأحمال الزلزالية',cat:'رسالة',file:'sample-phd-civil.pdf'},
    {type:'pdf',icon:'fa-file-pdf',color:'#EF4444',title:'ورقة بحثية منشورة في Scopus Q1',desc:'بحث حول الطاقة المتجددة وكفاءة الخلايا الشمسية',cat:'بحث',file:'sample-paper-energy.pdf'},
    {type:'pdf',icon:'fa-file-pdf',color:'#EF4444',title:'ورقة بحثية في علم النفس',desc:'دراسة حول تأثير وسائل التواصل على الصحة النفسية',cat:'بحث',file:'sample-paper-psych.pdf'},
    {type:'pdf',icon:'fa-file-pdf',color:'#EF4444',title:'مذكرة تخرج في القانون التجاري',desc:'دراسة مقارنة لقوانين الشركات في الدول العربية',cat:'مذكرة',file:'sample-memo-law.pdf'},
    {type:'pdf',icon:'fa-file-pdf',color:'#EF4444',title:'مذكرة تخرج في إدارة الأعمال',desc:'تحليل استراتيجيات التسويق الرقمي للشركات الناشئة',cat:'مذكرة',file:'sample-memo-business.pdf'},
    {type:'ppt',icon:'fa-file-powerpoint',color:'#F97316',title:'عرض تقديمي لمناقشة رسالة ماجستير',desc:'عرض احترافي مكون من 30 شريحة',cat:'عرض',file:'sample-presentation-1.pptx'},
    {type:'ppt',icon:'fa-file-powerpoint',color:'#F97316',title:'عرض تقديمي لمشروع تخرج',desc:'عرض مشروع تخرج في هندسة البرمجيات',cat:'عرض',file:'sample-presentation-2.pptx'},
    {type:'pdf',icon:'fa-file-pdf',color:'#EF4444',title:'بحث في الكيمياء التحليلية',desc:'تطوير طرق تحليلية جديدة لتقدير العناصر الثقيلة',cat:'بحث',file:'sample-paper-chem.pdf'},
    {type:'pdf',icon:'fa-file-pdf',color:'#EF4444',title:'دراسة في الاقتصاد القياسي',desc:'نمذجة العلاقة بين النمو الاقتصادي والاستثمار الأجنبي',cat:'بحث',file:'sample-paper-econ.pdf'},
    {type:'ppt',icon:'fa-file-powerpoint',color:'#F97316',title:'عرض مؤتمر علمي',desc:'عرض تقديمي لمؤتمر دولي في الفيزياء',cat:'عرض',file:'sample-conf-pres.pptx'},
    {type:'pdf',icon:'fa-file-pdf',color:'#EF4444',title:'رسالة ماجستير في التربية',desc:'فاعلية استراتيجيات التعلم النشط في تدريس العلوم',cat:'رسالة',file:'sample-thesis-edu.pdf'},
    {type:'pdf',icon:'fa-file-pdf',color:'#EF4444',title:'مقال علمي في اللغويات',desc:'تحليل تقابلي للتراكيب النحوية بين العربية والإنجليزية',cat:'مقال',file:'sample-article-ling.pdf'},
    {type:'pdf',icon:'fa-file-pdf',color:'#EF4444',title:'بحث في العلوم السياسية',desc:'تحليل السياسات العامة في منطقة الشرق الأوسط',cat:'بحث',file:'sample-paper-pol.pdf'},
    {type:'ppt',icon:'fa-file-powerpoint',color:'#F97316',title:'عرض خطة بحث دكتوراه',desc:'عرض تقديمي لمناقشة خطة بحث الدكتوراه',cat:'عرض',file:'sample-proposal-pres.pptx'},
    {type:'pdf',icon:'fa-file-pdf',color:'#EF4444',title:'دراسة في التاريخ الإسلامي',desc:'بحث حول التطور الحضاري في العصر العباسي',cat:'بحث',file:'sample-paper-hist.pdf'}
];

// ═══════════════ LIBRARY (قوالب) ═══════════════
const LIBRARY = [
    {t:'قالب LaTeX لرسالة الماجستير',f:'LaTeX',d:'قالب LaTeX احترافي لرسالة الماجستير بجميع الفصول',cat:'thesis',icon:'fa-file-code',clr:'purple',dw:3200},
    {t:'قالب LaTeX لرسالة الدكتوراه',f:'LaTeX',d:'قالب متكامل لرسالة الدكتوراه مع تنسيق تلقائي',cat:'thesis',icon:'fa-file-code',clr:'purple',dw:2800},
    {t:'قالب Word لرسالة الماجستير',f:'Word',d:'قالب شامل لرسالة الماجستير مع شرح كل فصل',cat:'thesis',icon:'fa-file-word',clr:'blue',dw:4500},
    {t:'قالب مذكرة تخرج',f:'Word',d:'نموذج مذكرة تخرج احترافي لجميع التخصصات',cat:'memo',icon:'fa-file-word',clr:'blue',dw:2100},
    {t:'قالب مشروع تخرج',f:'Word',d:'قالب تقرير مشروع تخرج مع جميع الأقسام',cat:'project',icon:'fa-file-word',clr:'blue',dw:1800},
    {t:'قالب LaTeX لورقة علمية',f:'LaTeX',d:'قالب جاهز للنشر في مجلات Scopus و ISI',cat:'paper',icon:'fa-file-code',clr:'purple',dw:2600},
    {t:'قالب عرض تقديمي PowerPoint',f:'PowerPoint',d:'قالب عرض احترافي لمناقشة الرسالة',cat:'presentation',icon:'fa-file-powerpoint',clr:'orange',dw:5100},
    {t:'قالب Cover Letter',f:'Word',d:'رسالة تقديم احترافية لمحرري المجلات',cat:'cover',icon:'fa-file-word',clr:'blue',dw:1400},
    {t:'قالب استبيان بحثي',f:'Word',d:'نموذج استبيان جاهز للتعديل',cat:'paper',icon:'fa-file-word',clr:'blue',dw:3200},
    {t:'قالب خطة البحث Proposal',f:'Word',d:'نموذج خطة بحث أكاديمي متكامل',cat:'proposal',icon:'fa-file-word',clr:'blue',dw:3800},
    {t:'قالب LaTeX لخطة البحث',f:'LaTeX',d:'قالب LaTeX احترافي لخطة البحث',cat:'proposal',icon:'fa-file-code',clr:'purple',dw:1900},
    {t:'قالب السيرة الذاتية الأكاديمية',f:'Word',d:'نموذج CV أكاديمي احترافي',cat:'other',icon:'fa-file-word',clr:'blue',dw:2500}
];
