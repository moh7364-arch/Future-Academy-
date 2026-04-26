/* ══════════════════════════════════════
   AcademiaHub - Public Platform Logic
   ══════════════════════════════════════ */

// ═══════════════ STATE ═══════════════
const STATE = {
    currentSection: 'home',
    sidebarOpen: false,
    user: null
};

// ═══════════════ INIT ═══════════════
document.addEventListener('DOMContentLoaded', () => {
    initPreloader();
    initHeaderScroll();
    initSidebar();
    initMobileMenu();
    initHeroParticles();
    initAOS();
    loadSpecsGrid();
    loadAllServiceSections();
    loadJournalsSection();
    loadExpertsSection();
    loadPortfolioSection();
    loadLibrarySection();
    initSectionNavigation();
    initSidebarSearch();
    initSmoothScroll();
    initWhatsAppFloat();
    initFooterYear();
    checkExistingSession();
    console.log('✅ AcademiaHub Public Platform Ready');
    console.log('📧 Email: scottmcnamara316@gmail.com');
    console.log('📱 WhatsApp Group Ready');
    console.log('👥 Experts:', EXPERTS.length);
    console.log('📚 Library:', LIBRARY.length);
    console.log('📄 Portfolio:', PORTFOLIO.length);
});

// ═══════════════ PRELOADER ═══════════════
function initPreloader() {
    setTimeout(() => {
        const loader = document.getElementById('preloader');
        if (loader) loader.classList.add('hidden');
    }, 1200);
}

// ═══════════════ HEADER SCROLL ═══════════════
function initHeaderScroll() {
    const header = document.getElementById('publicHeader');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// ═══════════════ AOS ═══════════════
function initAOS() {
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            once: true,
            offset: 80,
            easing: 'ease-out-cubic'
        });
    }
}

// ═══════════════ HERO PARTICLES ═══════════════
function initHeroParticles() {
    const container = document.getElementById('heroParticles');
    if (!container) return;
    for (let i = 0; i < 40; i++) {
        const particle = document.createElement('div');
        const size = Math.random() * 4 + 2;
        particle.style.cssText = `
            position: absolute;
            width: ${size}px;
            height: ${size}px;
            background: rgba(255,255,255,${Math.random() * 0.4 + 0.1});
            border-radius: 50%;
            top: ${Math.random() * 100}%;
            left: ${Math.random() * 100}%;
            animation: floatParticle ${Math.random() * 8 + 6}s linear infinite;
            animation-delay: ${Math.random() * 6}s;
        `;
        container.appendChild(particle);
    }
    const styleEl = document.createElement('style');
    styleEl.textContent = `
        @keyframes floatParticle {
            0% { transform: translateY(0) translateX(0); opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { transform: translateY(-100vh) translateX(${Math.random() * 100 - 50}px); opacity: 0; }
        }
    `;
    document.head.appendChild(styleEl);
}

// ═══════════════ SIDEBAR ═══════════════
function initSidebar() {
    const sidebar = document.getElementById('publicSidebar');
    const overlay = document.getElementById('sidebarOverlay');
    const closeBtn = document.getElementById('sidebarClose');
    
    // Open sidebar
    document.getElementById('mobileMenuBtn').addEventListener('click', () => {
        sidebar.classList.add('open');
        STATE.sidebarOpen = true;
    });
    
    // Close sidebar
    function closeSidebar() {
        sidebar.classList.remove('open');
        STATE.sidebarOpen = false;
    }
    
    closeBtn.addEventListener('click', closeSidebar);
    overlay.addEventListener('click', closeSidebar);
    
    // Close on escape
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && STATE.sidebarOpen) closeSidebar();
    });
    
    // Close on menu item click
    sidebar.querySelectorAll('.sidebar-menu-item[data-section]').forEach(item => {
        item.addEventListener('click', () => {
            closeSidebar();
            const section = item.dataset.section;
            navigateToSection(section);
        });
    });
}

// ═══════════════ MOBILE MENU ═══════════════
function initMobileMenu() {
    // Already handled in sidebar init
}

// ═══════════════ SECTION NAVIGATION ═══════════════
function initSectionNavigation() {
    // Scroll-based section detection
    const sections = document.querySelectorAll('.pub-section');
    const menuItems = document.querySelectorAll('.sidebar-menu-item[data-section]');
    
    if (sections.length === 0) return;
    
    // Use Intersection Observer for better performance
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const sectionId = entry.target.id.replace('section-', '');
                STATE.currentSection = sectionId;
                updateActiveMenuItem(sectionId);
            }
        });
    }, { threshold: 0.3 });
    
    sections.forEach(section => {
        if (section.id !== 'section-home') {
            observer.observe(section);
        }
    });
}

function updateActiveMenuItem(sectionId) {
    document.querySelectorAll('.sidebar-menu-item[data-section]').forEach(item => {
        item.classList.toggle('active', item.dataset.section === sectionId);
    });
}

function navigateToSection(section) {
    STATE.currentSection = section;
    updateActiveMenuItem(section);
    
    const targetSection = document.getElementById('section-' + section);
    if (targetSection) {
        // Show section
        document.querySelectorAll('.pub-section').forEach(s => s.classList.remove('active'));
        targetSection.classList.add('active');
        
        // Scroll to section
        setTimeout(() => {
            targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
    } else if (section === 'home') {
        document.querySelectorAll('.pub-section').forEach(s => s.classList.remove('active'));
        document.getElementById('section-home').classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

// ═══════════════ SIDEBAR SEARCH ═══════════════
function initSidebarSearch() {
    const searchInput = document.getElementById('sidebarSearch');
    if (!searchInput) return;
    
    searchInput.addEventListener('input', function() {
        const query = this.value.toLowerCase().trim();
        const menuItems = document.querySelectorAll('.sidebar-menu-item[data-section]');
        
        menuItems.forEach(item => {
            const text = item.textContent.toLowerCase();
            if (query === '' || text.includes(query)) {
                item.style.display = 'flex';
            } else {
                item.style.display = 'none';
            }
        });
    });
}

// ═══════════════ SMOOTH SCROLL ═══════════════
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href === '#') return;
            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// ═══════════════ SPECS GRID ═══════════════
function loadSpecsGrid() {
    const grid = document.getElementById('specsGridMain');
    if (!grid) return;
    
    grid.innerHTML = Object.entries(SPECS).map(([key, spec]) => `
        <div class="spec-card-main" onclick="scrollToSection('experts')">
            <img src="${spec.img}" alt="${key}" loading="lazy">
            <div class="spec-body">
                <h4><i class="fa-solid ${spec.icon}" style="color:${spec.color}"></i> ${key}</h4>
                <div class="branches">
                    ${spec.branches.map(b => `<span>${b}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
}

// ═══════════════ ALL SERVICE SECTIONS ═══════════════
function loadAllServiceSections() {
    loadServiceSection('thesis', 'thesisServicesGrid');
    loadServiceSection('memo', 'memoServicesGrid');
    loadServiceSection('graduation', 'gradServicesGrid');
    loadServiceSection('papers', 'papersServicesGrid');
    loadServiceSection('publishing', 'pubServicesGrid');
    loadServiceSection('translation', 'transServicesGrid');
    loadServiceSection('statistics', 'statsServicesGrid');
    loadServiceSection('programming', 'progServicesGrid');
}

function loadServiceSection(sectionKey, gridId) {
    const grid = document.getElementById(gridId);
    if (!grid) return;
    const services = SERVICES[sectionKey];
    if (!services) return;
    
    grid.innerHTML = services.items.map((item, index) => `
        <div class="service-item-card" data-aos="fade-up" data-aos-delay="${index * 50}" onclick="scrollToCTA()">
            <div class="service-item-icon" style="background:${item.color}">
                <i class="fa-solid ${item.icon}"></i>
            </div>
            <div class="service-item-info">
                <h4>${item.title}</h4>
                <p>${item.desc}</p>
            </div>
        </div>
    `).join('');
}

// ═══════════════ JOURNALS SECTION ═══════════════
function loadJournalsSection() {
    const container = document.getElementById('journalsWorldSection');
    if (!container) return;
    
    let html = '<h3 class="section-title" style="margin-bottom:24px"><i class="fa-solid fa-globe"></i> قائمة المجلات العلمية</h3>';
    
    // International journals
    html += buildJournalsBlock(JOURNALS.international);
    
    // Local journals by country
    const countries = ['algeria', 'iraq', 'jordan', 'libya', 'morocco'];
    const countryNames = { algeria: 'الجزائر', iraq: 'العراق', jordan: 'الأردن', libya: 'ليبيا', morocco: 'المغرب' };
    
    countries.forEach(country => {
        html += buildJournalsBlock(JOURNALS[country]);
    });
    
    container.innerHTML = html;
}

function buildJournalsBlock(countryData) {
    return `
        <div class="journals-country-block">
            <h4>${countryData.title}</h4>
            <div class="journals-grid">
                ${countryData.journals.map(j => `
                    <div class="journal-card">
                        <div class="journal-card-logo">
                            <img src="${j.logo}" alt="${j.name}" loading="lazy" onerror="this.parentElement.innerHTML='<i class=fa-solid fa-book-open style=font-size:1.5rem;color:var(--p)></i>'">
                        </div>
                        <div class="journal-card-info">
                            <h5>${j.name}</h5>
                            <span>ISSN: ${j.issn} | ${j.spec || ''} ${j.q ? '| ' + j.q : ''}</span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
}

// ═══════════════ EXPERTS SECTION ═══════════════
function loadExpertsSection() {
    const grid = document.getElementById('expertsGridFull');
    const filterSelect = document.getElementById('expertFilterCategory');
    const searchInput = document.getElementById('expertSearchInput');
    if (!grid) return;
    
    // Populate filter
    const categories = ['all', ...new Set(EXPERTS.map(e => e.c))];
    filterSelect.innerHTML = categories.map(c => 
        `<option value="${c}">${c === 'all' ? 'جميع التخصصات' : c}</option>`
    ).join('');
    
    function renderExperts(filter = 'all', search = '') {
        let experts = EXPERTS;
        if (filter !== 'all') experts = experts.filter(e => e.c === filter);
        if (search) experts = experts.filter(e => 
            e.n.toLowerCase().includes(search) || 
            e.s.toLowerCase().includes(search) ||
            e.country.includes(search)
        );
        
        const badgeLabels = { diamond: '💎 خبير ماسي', gold: '🥇 خبير ذهبي', silver: '🥈 خبير فضي', bronze: '🥉 خبير برونزي' };
        
        grid.innerHTML = experts.map(e => `
            <div class="expert-full-card" data-aos="fade-up">
                <span class="expert-badge-full badge-${e.b}">${badgeLabels[e.b]}</span>
                <div class="expert-avatar-full"><i class="fa-solid fa-user-tie"></i></div>
                <h4>${e.t} ${e.n}</h4>
                <p class="expert-spec">${e.s}</p>
                <span style="font-size:.8rem">${e.country}</span>
                <div class="expert-stars">${'★'.repeat(Math.floor(e.r))}${e.r % 1 >= 0.5 ? '½' : ''} <b>${e.r}</b></div>
                <p class="expert-bio">${e.bio}</p>
                <div class="expert-stats">
                    <div><b>${e.p}</b><span>مشروع</span></div>
                    <div><b>${e.exp}</b><span>خبرة</span></div>
                    <div><b>${Math.round(e.r * 20)}%</b><span>رضا</span></div>
                </div>
                <button class="hero-btn primary" style="margin-top:10px;padding:10px 20px;font-size:.85rem" onclick="scrollToCTA()">
                    <i class="fa-solid fa-paper-plane"></i> طلب خدمة
                </button>
            </div>
        `).join('');
    }
    
    filterSelect.addEventListener('change', () => renderExperts(filterSelect.value, searchInput.value));
    searchInput.addEventListener('input', () => renderExperts(filterSelect.value, searchInput.value.toLowerCase()));
    
    renderExperts();
}

// ═══════════════ PORTFOLIO SECTION ═══════════════
function loadPortfolioSection() {
    const grid = document.getElementById('portfolioGrid');
    if (!grid) return;
    
    grid.innerHTML = PORTFOLIO.map((item, index) => `
        <div class="portfolio-card" data-aos="fade-up" data-aos-delay="${index * 30}">
            <div class="portfolio-card-header">
                <i class="fa-solid ${item.icon}" style="color:${item.color};font-size:2rem"></i>
                <div>
                    <span style="background:${item.color}20;color:${item.color};padding:3px 12px;border-radius:20px;font-size:.7rem;font-weight:700">${item.cat}</span>
                </div>
            </div>
            <div class="portfolio-card-body">
                <h5>${item.title}</h5>
                <p>${item.desc}</p>
            </div>
            <div class="portfolio-card-footer">
                <span style="font-size:.7rem;color:var(--g5)">${item.type.toUpperCase()} - ${item.file}</span>
                <button class="portfolio-dl-btn" onclick="downloadPortfolioFile('${item.file}', '${item.title}')">
                    <i class="fa-solid fa-download"></i> تحميل
                </button>
            </div>
        </div>
    `).join('');
}

function downloadPortfolioFile(filename, title) {
    // في النسخة الحقيقية، هذه الملفات ستكون موجودة في مجلد downloads
    alert('📥 جارٍ تحميل: ' + title + '\n\nالملف: ' + filename + '\n\nفي النسخة النهائية، سيتم تحميل الملف مباشرة من الخادم.');
}

// ═══════════════ LIBRARY SECTION ═══════════════
function loadLibrarySection() {
    const grid = document.getElementById('libraryGridFull');
    if (!grid) return;
    
    const colorMap = { blue: '#2563EB', purple: '#7C3AED', orange: '#F97316', green: '#10B981' };
    
    grid.innerHTML = LIBRARY.map((item, index) => `
        <div class="lib-full-card" data-aos="fade-up" data-aos-delay="${index * 40}">
            <div class="lib-full-icon" style="background:${colorMap[item.clr]}15;color:${colorMap[item.clr]}">
                <i class="fa-solid ${item.icon}"></i>
            </div>
            <span style="display:inline-block;padding:4px 12px;border-radius:20px;font-size:.7rem;font-weight:600;background:var(--g1);margin-bottom:8px">${item.f}</span>
            <h5>${item.t}</h5>
            <p>${item.d}</p>
            <div class="lib-meta">
                <button class="lib-dl-full-btn" onclick="downloadLibraryTemplate('${item.t}')">
                    <i class="fa-solid fa-download"></i> تحميل
                </button>
                <span style="font-size:.75rem;color:var(--g4)"><i class="fa-solid fa-download"></i> ${item.dw.toLocaleString()}</span>
            </div>
        </div>
    `).join('');
}

function downloadLibraryTemplate(title) {
    alert('📥 جارٍ تحميل: ' + title + '\n\nسيتم تحميل القالب مباشرة.');
}

// ═══════════════ CTA / SCROLL TO CTA ═══════════════
function scrollToCTA() {
    const ctaSection = document.getElementById('ctaSection');
    if (ctaSection) {
        ctaSection.scrollIntoView({ behavior: 'smooth', block: 'center' });
        // Highlight effect
        ctaSection.style.transition = 'all 0.5s ease';
        ctaSection.querySelector('.cta-content').style.transform = 'scale(1.03)';
        setTimeout(() => {
            ctaSection.querySelector('.cta-content').style.transform = 'scale(1)';
        }, 500);
    }
}

function scrollToSection(section) {
    const target = document.getElementById('section-' + section);
    if (target) {
        document.querySelectorAll('.pub-section').forEach(s => s.classList.remove('active'));
        target.classList.add('active');
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        STATE.currentSection = section;
        updateActiveMenuItem(section);
    }
}

// ═══════════════ AUTH MODAL ═══════════════
function openAuthModal(mode) {
    const modal = document.getElementById('authModal');
    const content = document.getElementById('authModalContent');
    if (!modal || !content) return;
    
    const isLogin = mode === 'login';
    
    content.innerHTML = `
        <div style="text-align:center;margin-bottom:24px">
            <i class="fa-solid fa-graduation-cap" style="font-size:2.5rem;color:var(--p);display:block;margin-bottom:12px"></i>
            <h3 style="font-family:var(--ffd);font-size:1.3rem">${isLogin ? 'تسجيل الدخول' : 'إنشاء حساب جديد'}</h3>
            <p style="color:var(--g5);font-size:.85rem">${isLogin ? 'مرحباً بعودتك!' : 'انضم إلينا وابدأ رحلتك الأكاديمية'}</p>
        </div>
        <form id="authForm" style="display:flex;flex-direction:column;gap:12px">
            ${!isLogin ? `
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px">
                <div class="fg"><label>الاسم الأول</label><input type="text" required placeholder="الاسم الأول"></div>
                <div class="fg"><label>الاسم الأخير</label><input type="text" required placeholder="الاسم الأخير"></div>
            </div>
            ` : ''}
            <div class="fg"><label>البريد الإلكتروني</label><input type="email" required placeholder="example@email.com" id="authEmail"></div>
            ${!isLogin ? `
            <div class="fg"><label>المستوى الأكاديمي</label><select required><option value="">اختر...</option><option>بكالوريوس</option><option>ماجستير</option><option>دكتوراه</option><option>باحث</option></select></div>
            <div class="fg"><label>التخصص</label><select required>${Object.keys(SPECS).map(s => `<option>${s}</option>`).join('')}</select></div>
            ` : ''}
            <div class="fg"><label>كلمة المرور</label><input type="password" required placeholder="********" id="authPassword" minlength="8"></div>
            ${!isLogin ? '<div class="fg"><label>تأكيد كلمة المرور</label><input type="password" required placeholder="********" id="authConfirm"></div>' : ''}
            <button type="submit" class="cta-btn" style="width:100%;justify-content:center;margin-top:8px">
                <i class="fa-solid fa-${isLogin ? 'right-to-bracket' : 'user-plus'}"></i> ${isLogin ? 'دخول' : 'إنشاء حساب'}
            </button>
        </form>
        <p style="text-align:center;margin-top:14px;font-size:.85rem;color:var(--g5)">
            ${isLogin ? 'ليس لديك حساب؟' : 'لديك حساب بالفعل؟'}
            <a href="#" onclick="event.preventDefault();openAuthModal('${isLogin ? 'register' : 'login'}')" style="color:var(--p);font-weight:700">
                ${isLogin ? 'إنشاء حساب جديد' : 'تسجيل الدخول'}
            </a>
        </p>
        <div id="authMsg" style="text-align:center;margin-top:8px;font-size:.85rem;min-height:20px"></div>
    `;
    
    modal.classList.add('show');
    
    // Form submit
    document.getElementById('authForm').addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('authEmail').value.trim();
        const password = document.getElementById('authPassword').value;
        
        if (!isLogin) {
            const confirm = document.getElementById('authConfirm').value;
            if (password !== confirm) {
                document.getElementById('authMsg').innerHTML = '<span style="color:#EF4444">كلمة المرور غير متطابقة</span>';
                return;
            }
        }
        
        if (!email || !password) {
            document.getElementById('authMsg').innerHTML = '<span style="color:#EF4444">يرجى ملء جميع الحقول</span>';
            return;
        }
        
        // Save user
        const user = {
            email: email,
            name: email.split('@')[0],
            fullName: email.split('@')[0],
            firstName: email.split('@')[0],
            isLoggedIn: true,
            academicLevel: 'researcher',
            loginTime: new Date().toISOString()
        };
        localStorage.setItem('ahu', JSON.stringify(user));
        
        document.getElementById('authMsg').innerHTML = '<span style="color:#10B981">✅ تم ' + (isLogin ? 'تسجيل الدخول' : 'إنشاء الحساب') + ' بنجاح! جارٍ تحويلك...</span>';
        
        setTimeout(() => {
            window.location.href = 'dashboard.html';
        }, 1000);
    });
}

function closeAuthModal() {
    const modal = document.getElementById('authModal');
    if (modal) modal.classList.remove('show');
}

// Close modal on overlay click
document.addEventListener('click', function(e) {
    const modal = document.getElementById('authModal');
    if (e.target === modal) closeAuthModal();
});

// ═══════════════ CHECK EXISTING SESSION ═══════════════
function checkExistingSession() {
    const userData = localStorage.getItem('ahu');
    if (userData) {
        try {
            const user = JSON.parse(userData);
            if (user.isLoggedIn) {
                STATE.user = user;
                // User is logged in, could show different UI
                updateHeaderForLoggedInUser(user);
            }
        } catch(e) {}
    }
}

function updateHeaderForLoggedInUser(user) {
    const actionsDiv = document.querySelector('.header-actions');
    if (actionsDiv && user) {
        actionsDiv.innerHTML = `
            <span style="color:var(--g3);font-size:.85rem;margin-left:8px">${user.name}</span>
            <a href="dashboard.html" class="btn-auth-header btn-auth-primary">
                <i class="fa-solid fa-th-large"></i> لوحة التحكم
            </a>
            <button class="btn-auth-header" onclick="logout()">
                <i class="fa-solid fa-right-from-bracket"></i> خروج
            </button>
        `;
    }
}

function logout() {
    localStorage.removeItem('ahu');
    STATE.user = null;
    location.reload();
}

// ═══════════════ WHATSAPP FLOAT ═══════════════
function initWhatsAppFloat() {
    const waBtn = document.querySelector('.wa-float');
    if (waBtn) {
        // Add ripple effect on click
        waBtn.addEventListener('click', function(e) {
            const ripple = document.createElement('span');
            ripple.style.cssText = `
                position: absolute;
                width: 100%;
                height: 100%;
                border-radius: 50%;
                background: rgba(255,255,255,.3);
                animation: ripple .6s ease-out;
                top: 0;
                left: 0;
            `;
            this.appendChild(ripple);
            setTimeout(() => ripple.remove(), 600);
        });
    }
}

// Add ripple keyframe
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
    @keyframes ripple {
        from { transform: scale(0); opacity: 1; }
        to { transform: scale(2); opacity: 0; }
    }
`;
document.head.appendChild(rippleStyle);

// ═══════════════ FOOTER ═══════════════
function initFooterYear() {
    const yearEl = document.querySelector('.footer-bottom p');
    if (yearEl) {
        const year = new Date().getFullYear();
        yearEl.textContent = `© ${year} AcademiaHub. جميع الحقوق محفوظة.`;
    }
}

// ═══════════════ KEYBOARD SHORTCUTS ═══════════════
document.addEventListener('keydown', function(e) {
    // Escape to close modals
    if (e.key === 'Escape') {
        closeAuthModal();
        if (STATE.sidebarOpen) {
            document.getElementById('publicSidebar').classList.remove('open');
            STATE.sidebarOpen = false;
        }
    }
    
    // Ctrl+K for search focus
    if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.getElementById('sidebarSearch');
        if (searchInput) {
            document.getElementById('publicSidebar').classList.add('open');
            STATE.sidebarOpen = true;
            setTimeout(() => searchInput.focus(), 300);
        }
    }
});

// ═══════════════ GLOBAL FUNCTIONS ═══════════════
window.openAuthModal = openAuthModal;
window.closeAuthModal = closeAuthModal;
window.scrollToCTA = scrollToCTA;
window.scrollToSection = scrollToSection;
window.downloadPortfolioFile = downloadPortfolioFile;
window.downloadLibraryTemplate = downloadLibraryTemplate;
window.logout = logout;
