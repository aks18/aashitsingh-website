/**
 * ==========================================
 * DATA CONFIGURATION
 * Single Source of Truth for site content
 * ==========================================
 */

// --- HOME PAGE DATA ---
const CORE_DOMAINS = [
    {
        icon: "account_tree",
        title: "Systems Design",
        description: "Architecting robust, scalable, and highly available technical infrastructures."
    },
    {
        icon: "smart_toy",
        title: "AI/ML Engineering",
        description: "Developing and deploying machine learning models into production. Making systems <b>INTELLIGENT</b>."
    },
    {
        icon: "analytics",
        title: "Data Science",
        description: "Extracting actionable insights from complex datasets using statistical modeling, predictive analytics and deep learning."
    }
];

// --- RESUME DATA ---
const RESUME_STATS = [
    { value: "8+", label: "Years Exp.", span: false },
    { value: "20+", label: "Projects", span: false },
    { value: "REMOTE, INDIA", label: "Based In", span: true }
];

const EXPERIENCE_DATA = [
    {
        period: "Jan 2026 — Present", role: "Associate Principal, AIML", company: "Tiger Analytics, Hyderabad",
        description: "Designing and building scalable, API-first multi-agent AI platforms on Azure & GCP with strict SLOs, enabling automated DS workflows and codebase documentation. Driving measurable impact with 99% faster time-to-first-model and 97% reduction in documentation effort, while owning roadmap and cross-functional execution.",
        tags: ["Multiagent AI Systems Design", "Leadership", "GCP", "Azure", "GenAI", "Unsupervised ML"], isActive: true
    },
    {
        period: "Jan 2025 — Dec 2025", role: "Lead AIML Engineer", company: "Tiger Analytics, Remote",
        description: "Built and productionized a scalable GenAI bot & data platform on Azure & Databricks with reusable, API-driven components, owning system design, roadmap and end-to-end delivery. Delivered 97% accurate ingestion of 70K+ unstructured files, enabled self-serve analytics with 99.9% faster TAT and 100% adoption and established SLO-driven systems for scalable, cost-efficient LLM workloads.",
        tags: ["Agentic Systems Design", "Data Pipelines", "Azure", "Databricks", "GenAI"], isActive: false
    },
    {
        period: "Jan 2023 — Dec 2024", role: "Senior Data Scientist", company: "Tiger Analytics, Remote",
        description: "Designed and deployed a scalable, configurable OCR + LLM + NLP ingestion platform on Azure and Databricks, processing 500+ GB/day of unstructured data into structured, analytics-ready datasets. Delivered 95% extraction accuracy and 90% reduction in manual effort, while building RAG-based support systems that reduced AHT by 21% and improved CSAT by 15% with high adoption.",
        tags: ["System Design", "Data Pipelines", "OCR", "NLP", "GenAI"], isActive: false
    },
    {
        period: "Nov 2021 — Dec 2022", role: "Data Scientist", company: "Tiger Analytics, Hyderabad",
        description: "Built and deployed an XGBoost-based customer segmentation model, reducing marketing spend by 40% and saving $25M+ with minimal impact on response rates. Developed OCR + CNN + NLP pipelines and automated ML systems for retraining and monitoring, ensuring robust end-to-end model performance from problem framing to production deployment.",
        tags: ["Statistics", "Supervised ML", "EDA", "FE"], isActive: false
    },
    {
        period: "Oct 2019 — Nov 2021", role: "Data Scientist", company: "Dozee, Bangalore",
        description: "Researched, developed, and deployed a novel ML model using CNNs and signal processing to predict blood pressure from contactless body vibration data. Achieved 0.92 correlation and 83% detection rate, driving 600% growth in product adoption and supporting successful pre-Series A and Series A fundraising.",
        tags: ["Statistics", "Supervised ML", "Unsupervised ML", "Deep Learning", "Signal Processing", "Time-Series Modeling"], isActive: false
    }
];

const SKILLS_DATA = [
    {
        category: "Leadership",
        skills: ["Stakeholder Management", "Mentoring", "Performance Reviews", "Interviews"]
    },
    {
        category: "Systems Design",
        skills: ["Multiagent AI Systems", "Distributed Systems", "API Design", "SLO/SLI Design", "Security & Governance"]
    }, 
    {
        category: "Cloud & Infra",
        skills: ["GCP", "Azure", "Databricks", "AWS"]
    }, 
    {
        category: "AI, ML & DS",
        skills: ["Statistics", "Data Pipelines", "Data Modeling", "ML Infra", "LLMOps", "EDA", "FE", "NLP", "GenAI", "Machine Learning", "Reinforcement Learning"]
    }
];

const EDUCATION_DATA = [
    { degree: "B. Tech. (CSE)", period: "2013 - 2017", school: "NIT Hamirpur" }
];

// --- PROJECTS DATA ---
const PROJECTS_DATA = [
    {
        id: 1,
        title: "Neural Market Forecasting",
        category: "Machine Learning",
        tech: "Python",
        description: "Developed a highly parallelized LSTM model predicting short-term asset price movements. Achieved a 14% improvement in directional accuracy over baseline models by integrating real-time sentiment analysis from social streams via Apache Kafka.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDcjjio1Pr8uzDM6yN4KHgwdmRDgXiGM5KjXC_z5qLjR5thn0WVg0HKn3wbMxHeZgzEX130tX-DJBunyflDnQDCehE0om2A05_5edZdChAP6kvHM4iU9_sF0DGjJuvKqenVGQ-dRKAPZBV-ejlasnz-3tK_nH1xj0izwU-BA9v_nEqmbUqK7x5q9Hwgqh0NvZxBc3EaZsPmubeBaMjOrZUqMv6hOmCv3JRUYV6txLuBdU2TIAlyWu2Qmo0nvTgX_xAzabthPNUz3iw",
        featured: true,
        link: "#",
        code: "#"
    },
    {
        id: 2,
        title: "High-Volume Telemetry Pipeline",
        category: "Data Eng",
        tech: "Rust",
        description: "Designed a distributed ingestion layer using Rust and gRPC capable of processing 200k events/sec. Reduced compute overhead by 40% compared to previous Node.js implementation while decreasing p99 latency to sub-10ms.",
        link: "#"
    },
    {
        id: 3,
        title: "Zero-Trust Auth Mesh",
        category: "Security",
        tech: "Go",
        description: "Implemented a centralized authentication and authorization service in Go, integrating seamlessly with an existing Istio service mesh. Enabled fine-grained RBAC and reduced inter-service authentication latency by utilizing short-lived JWTs and Redis caching.",
        link: "#"
    },
    {
        id: 4,
        title: "Distributed In-Memory Cache",
        category: "Backend",
        tech: "C++",
        description: "Built a custom, distributed caching system tailored for high-read workloads. Implemented consistent hashing for horizontal scalability and an LRU eviction policy optimized for minimal lock contention.",
        link: "#"
    }
];

// --- BLOG DATA ---
const BLOG_POSTS = [
    {
        id: 1, title: "The Moral Algorithms: Teaching Empathy to Neural Networks", category: "AI Ethics", date: "March 15, 2024",
        excerpt: "As models scale, the alignment problem shifts from theoretical constraints to practical implementations of human values.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDRzTZlqtIqupXcifk-LWrvUy0AdvDAOc10MVwp9cTz0vfEhl9-st3U9sWvoSVPrOi-vKSg9biDNOC1g3wzWaFrcpljoMk0BEMGtcH4_WXdZiZGNtiPclMOEWP6ZzmoTJ3u8-o8ua0epW_QRpkmM03aq0SPhvAI4GBBItGJ2xklbTC77mQKfKG2F54gGIP2GNG7OUPMLRHBqeQ6ErzRdIOo9uqc8oQKlqdOA3zkx0ICN9A5AplUJnP0HXR_NC3NLXcXkFuq2DCqt6w", featured: true
    },
    {
        id: 2, title: "Architecting Resilience in Distributed Cloud Environments", category: "Systems Eng", date: "Feb 28, 2024",
        excerpt: "A deep dive into failure states and how chaos engineering principles can be applied to build self-healing infrastructure.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAFXDpbcjJedQw8qgTEkWSXn3SFd8G_4MfMH9HmqeX4MZTN01j3Zsn8UEw4-n7W3Ske-6IB9zytfcNtx9GB4FujYr_7BrIYxyxdwKyJ4KMU5VZxcOAKRd5IWHmeOrAPrys3vclesySyR4cp7AS8u-3oCUN9aqu6zjeXoP0rJdxNZLYgRq9NtUDkd9Ocq-2uFtLPW4wEh3Ow4DgJMf5h2DThH75umPVFcVsEASqj605FsB1lRgSlE1vPQooAWyI-5c1ADRUalQhyhuY", featured: false
    },
    {
        id: 3, title: "The Narrative Arc of Big Data", category: "Data Storytelling", date: "Jan 12, 2024",
        excerpt: "Raw metrics lack context. Discovering the frameworks required to translate petabytes of raw telemetry.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDKp_qI_7P0ZA2j08swXKGXLyAZ-mdltyof9TyyfLV6cnLhQBqbz714tqBLq4B6-C_5_u-usFOEVUqmoZCHXqTdQByWZ3FQ4PsR1LxrbEal11ef6DeTfQT2hEUAXtIyu7sIg6v6H7rx6HSyry0KVgGxAQuqAfwzF3AEa4Ix1lQu6ZIzDprbmjfDk2yKokIRVHHMRIw5_pQWtQhKsqPzSV0t5vEerKOl6p9Y4cDY2VWWycwTjnOtVpKCZlQC19XnqsWUTzoDmjDSB0M", featured: false
    },
    {
        id: 4, title: "Bias in Generative Models: A Systemic Review", category: "AI Ethics", date: "Nov 05, 2023",
        excerpt: "Evaluating the hidden latencies of bias within popular LLMs and strategies for more equitable training.",
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBcd7Cyb6pCHTCkQEjjQv_qPnNrHvrVBmTsUri8EvivtQsAO9ofu4e5Q1_cDY1vGPa-DdWkYmX9pEojWGfVUJPp121xkC-NZzAFyMVerTXNydGt7DYpWphaN-VIh__kWxbBd6s50pFxtjICdOn3XhjJL_vBZOLZ0_jOO114pOrKrr1tUq2PrEYCyYviwPX-FL0gmowpGQMsaCtmMiF6fC20mCHCMelqfs4tlTPBWEPDYilI0xQKP1K45Q56frHA-sRdWedxfvSSHgE", featured: false
    }
];


/**
 * ==========================================
 * WEB COMPONENTS (UI Framework)
 * ==========================================
 */

class SiteHeader extends HTMLElement {
    connectedCallback() {
        const active = this.getAttribute('active-page');
        const navItems = [
            { name: 'Home', link: 'index.html', id: 'home' },
            { name: 'Resume', link: 'resume.html', id: 'resume' },
            { name: 'Projects', link: 'projects.html', id: 'projects' },
            { name: 'Blogs', link: 'blogs.html', id: 'blogs' },
            { name: 'Contact', link: 'contact.html', id: 'contact' }
        ];

        this.innerHTML = `
            <header class="fixed top-0 w-full z-50 bg-[#0A0A0A]/80 backdrop-blur-lg bg-gradient-to-b from-[#1A1A1A] to-transparent">
                <div class="flex justify-between items-center px-8 py-6 w-full max-w-screen-2xl mx-auto">
                    <div class="flex items-center gap-4">
                        <span class="material-symbols-outlined text-lime-400 cursor-pointer hover:opacity-80 scale-95 transition-all text-2xl">menu_open</span>
                        <span class="font-['Space_Grotesk'] font-bold text-lg tracking-tighter text-white uppercase">AASHIT SINGH</span>
                    </div>
                    <nav class="hidden md:flex gap-8 items-center font-['Space_Grotesk'] uppercase tracking-widest text-sm">
                        ${navItems.map(item => `
                            <a class="${active === item.id ? 'text-lime-400 font-bold' : 'text-zinc-500'} hover:text-lime-400 transition-colors duration-300" href="${item.link}">${item.name}</a>
                        `).join('')}
                    </nav>
                </div>
            </header>`;
    }
}

class MobileNav extends HTMLElement {
    connectedCallback() {
        const active = this.getAttribute('active-page');
        const navItems = [
            { name: 'Home', icon: 'home', link: 'index.html', id: 'home' },
            { name: 'Resume', icon: 'description', link: 'resume.html', id: 'resume', fill: true },
            { name: 'Projects', icon: 'folder_special', link: 'projects.html', id: 'projects' },
            { name: 'Blogs', icon: 'edit_note', link: 'blogs.html', id: 'blogs' },
            { name: 'Contact', icon: 'mail', link: 'contact.html', id: 'contact' }
        ];

        this.innerHTML = `
            <nav class="md:hidden fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-safe bg-[#0A0A0A] border-t border-zinc-800/50 shadow-[0_-10px_40px_rgba(204,255,0,0.05)] z-50 rounded-t-sm pt-2">
                ${navItems.map(item => `
                    <a class="flex flex-col items-center justify-center py-2 transition-all flex-1 ${active === item.id ? 'text-lime-400 border-t-2 border-lime-400 -mt-[2px] active:scale-110 duration-200 ease-in-out' : 'text-zinc-500 hover:bg-zinc-900'}" href="${item.link}">
                        <span class="material-symbols-outlined mb-1" ${item.fill && active === item.id ? `style="font-variation-settings: 'FILL' 1;"` : ''}>${item.icon}</span>
                        <span class="font-['Manrope'] text-[10px] font-medium tracking-tight">${item.name}</span>
                    </a>
                `).join('')}
            </nav>`;
    }
}

class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="bg-[#0A0A0A] w-full py-12 px-8 flex flex-col md:flex-row justify-between items-center max-w-7xl mx-auto border-t border-zinc-900 mt-12 pb-24 md:pb-12">
                <div class="text-white font-bold tracking-tighter mb-4 md:mb-0 uppercase">AASHIT SINGH</div>
                <div class="flex gap-6 mb-4 md:mb-0">
                    <a class="font-['Manrope'] text-xs tracking-tight text-zinc-600 hover:text-white transition-colors" href="https://www.linkedin.com/in/aashit-singh/">LinkedIn</a>
                    <a class="font-['Manrope'] text-xs tracking-tight text-zinc-600 hover:text-white transition-colors" href="https://github.com/aks18/">GitHub</a>
                </div>
                <div class="font-['Manrope'] text-xs tracking-tight text-zinc-500">© 2026 AASHIT SINGH.</div>
            </footer>`;
    }
}

customElements.define('site-header', SiteHeader);
customElements.define('mobile-nav', MobileNav);
customElements.define('site-footer', SiteFooter);


/**
 * ==========================================
 * HTML TEMPLATE GENERATORS
 * ==========================================
 */

// Blogs 
function createBlogCard(post) { /* Same as previous version */
    return `
        <article class="bg-surface-container-low rounded p-6 flex flex-col gap-5 hover:-translate-y-1 transition-transform duration-300 group relative cursor-pointer">
            <div class="absolute left-0 top-0 bottom-0 w-1 bg-primary-container opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div class="aspect-video w-full rounded overflow-hidden bg-surface-container-high relative">
                <img alt="${post.title}" class="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-500" src="${post.image}"/>
            </div>
            <div class="flex items-center gap-3">
                <span class="px-2 py-1 bg-surface-variant text-on-surface-variant text-[10px] font-medium uppercase tracking-wider rounded">${post.category}</span>
                <span class="text-xs text-on-surface-variant">${post.date}</span>
            </div>
            <h3 class="text-xl font-bold text-primary leading-snug group-hover:text-primary-container transition-colors">${post.title}</h3>
            <p class="text-sm text-on-surface-variant line-clamp-2">${post.excerpt}</p>
        </article>`;
}

function createFeaturedPost(post) { /* Same as previous version */
    if (!post) return '';
    return `
        <section class="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full animate-fade-in-up" style="animation-delay: 0.1s;">
            <article class="lg:col-span-12 bg-surface-container-low rounded-lg p-8 md:p-12 flex flex-col md:flex-row gap-8 glow-box-primary group cursor-pointer border border-transparent hover:border-surface-variant transition-all duration-300 relative overflow-hidden">
                <div class="absolute left-0 top-0 bottom-0 w-1 bg-primary-container scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300 ease-out"></div>
                <div class="md:w-1/2 flex flex-col justify-center gap-6">
                    <div class="flex items-center gap-3">
                        <span class="px-3 py-1 bg-tertiary-container/10 text-tertiary text-xs font-medium tracking-widest uppercase rounded">${post.category}</span>
                        <span class="text-xs text-on-surface-variant">${post.date}</span>
                    </div>
                    <h2 class="text-3xl md:text-5xl font-bold text-primary leading-tight group-hover:text-primary-container transition-colors">${post.title}</h2>
                    <p class="text-on-surface-variant text-base leading-relaxed line-clamp-3">${post.excerpt}</p>
                    <div class="mt-4">
                        <span class="text-primary-container font-medium text-sm flex items-center gap-2 group-hover:gap-3 transition-all">Read Full Editorial <span class="material-symbols-outlined text-sm">arrow_forward</span></span>
                    </div>
                </div>
                <div class="md:w-1/2 rounded aspect-video md:aspect-auto overflow-hidden relative">
                    <div class="absolute inset-0 bg-gradient-to-tr from-surface to-transparent z-10 opacity-30"></div>
                    <img alt="${post.title}" class="w-full h-full object-cover opacity-80 group-hover:scale-105 group-hover:opacity-100 transition-all duration-700 ease-out" src="${post.image}"/>
                </div>
            </article>
        </section>`;
}

// Resume
function createStatCard(stat) {
    return `
        <div class="bg-surface-container-lowest p-6 rounded-xl flex flex-col gap-2 border border-outline-variant/10 ${stat.span ? 'col-span-2' : ''}">
            <span class="font-headline text-${stat.span ? '2xl' : '4xl'} font-bold text-primary">${stat.value}</span>
            <span class="font-label text-xs uppercase tracking-widest text-on-surface-variant">${stat.label}</span>
        </div>`;
}

function createExperienceItem(exp) {
    const activeClass = exp.isActive ? 'is-active' : '';
    const indicatorBg = exp.isActive ? 'bg-primary-fixed shadow-primary-glow' : 'bg-surface-container-high';
    const iconName = exp.isActive ? 'work' : 'work_outline';
    const iconColor = exp.isActive ? 'text-on-primary-fixed' : 'text-on-surface-variant';
    const fillStyle = exp.isActive ? `style="font-variation-settings: 'FILL' 1;"` : '';
    const dateColor = exp.isActive ? 'text-primary-fixed' : 'text-on-surface-variant';
    const cardBg = exp.isActive ? 'bg-surface-container-low border-primary-fixed/30' : 'bg-surface-container-lowest border-outline-variant/10';
    const lineScale = exp.isActive ? 'scale-y-100' : 'scale-y-0';
    
    const tagsHtml = exp.tags.map(tag => `<span class="px-3 py-1 bg-surface-container-highest rounded text-xs font-label text-primary border border-outline-variant/20">${tag}</span>`).join('');
    const tagsContainer = tagsHtml ? `<div class="flex flex-wrap gap-2">${tagsHtml}</div>` : '';

    return `
    <div class="experience-item relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group ${activeClass} cursor-pointer">
        <div class="experience-indicator flex items-center justify-center w-8 h-8 rounded-full border-4 border-surface ${indicatorBg} shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10 ml-0 md:left-1/2 md:absolute transition-all duration-300">
            <span class="material-symbols-outlined ${iconColor} text-[14px]" ${fillStyle}>${iconName}</span>
        </div>
        <div class="experience-card w-[calc(100%-3rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-xl ${cardBg} border relative hover:border-primary-fixed/30 transition-all duration-500 overflow-hidden">
            <div class="active-line absolute left-0 top-0 bottom-0 w-1 bg-primary-fixed transform origin-top ${lineScale} transition-transform duration-500"></div>
            <div class="experience-header flex flex-col gap-2">
                <span class="date-label font-label text-xs uppercase tracking-widest ${dateColor} font-semibold transition-colors">${exp.period}</span>
                <div class="flex justify-between items-center">
                    <h3 class="font-headline text-2xl font-bold text-primary">${exp.role}</h3>
                    <span class="material-symbols-outlined text-on-surface-variant group-[.is-active]:rotate-180 transition-transform">expand_more</span>
                </div>
                <h4 class="font-body text-sm text-on-surface-variant">${exp.company}</h4>
            </div>
            <div class="experience-content">
                <div class="flex flex-col">
                    <p class="font-body text-sm text-on-surface-variant leading-relaxed ${exp.tags.length ? 'mb-6' : ''} pt-4">
                        ${exp.description}
                    </p>
                    ${tagsContainer}
                </div>
            </div>
        </div>
    </div>`;
}

function createSkillCategory(group) {
    return `
        <div class="space-y-4">
            <h3 class="font-label text-sm uppercase tracking-widest text-primary-fixed">${group.category}</h3>
            <div class="flex flex-wrap gap-3">
                ${group.skills.map(skill => `<div class="px-4 py-2 bg-surface-container-low border border-outline-variant/20 rounded text-sm text-primary hover:border-primary-fixed/50 transition-colors cursor-default">${skill}</div>`).join('')}
            </div>
        </div>`;
}

function createEducationItem(edu) {
    return `
        <div class="p-6 rounded-xl bg-surface-container-low border border-outline-variant/10 hover:bg-surface-container transition-colors group">
            <div class="flex justify-between items-start mb-2">
                <h3 class="font-headline text-xl font-bold text-primary group-hover:text-primary-fixed transition-colors">${edu.degree}</h3>
                <span class="font-label text-xs uppercase tracking-widest text-on-surface-variant">${edu.period}</span>
            </div>
            <h4 class="font-body text-sm text-on-surface-variant mb-4">${edu.school}</h4>
        </div>`;
}

// Projects
function createProjectCard(project) {
    if (project.featured) {
        return `
            <article class="col-span-1 md:col-span-2 lg:col-span-2 bg-surface-container-low rounded-xl overflow-hidden group hover:bg-surface-container transition-all duration-300 flex flex-col md:flex-row relative border border-transparent hover:border-surface-variant">
                <div class="absolute left-0 top-0 h-full w-1 bg-primary-container scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300 ease-out"></div>
                <div class="w-full md:w-2/5 h-64 md:h-auto bg-surface-container-highest relative overflow-hidden">
                    <img alt="${project.title}" class="w-full h-full object-cover grayscale opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out mix-blend-luminosity" src="${project.image}"/>
                    <div class="absolute inset-0 bg-primary-container/10 blur-[40px] pointer-events-none mix-blend-screen opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
                </div>
                <div class="p-8 flex flex-col justify-between w-full md:w-3/5">
                    <div>
                        <div class="flex items-center gap-2 mb-4">
                            <span class="bg-primary-container/10 text-primary-fixed text-[10px] font-headline font-bold px-2 py-1 rounded tracking-widest uppercase">${project.category}</span>
                            <span class="bg-surface-variant text-on-surface-variant text-[10px] font-headline font-bold px-2 py-1 rounded tracking-widest uppercase">${project.tech}</span>
                        </div>
                        <h3 class="font-headline text-2xl font-bold text-primary mb-3 group-hover:text-primary-container transition-colors">${project.title}</h3>
                        <p class="font-body text-on-surface-variant mb-6 text-sm leading-relaxed">${project.description}</p>
                    </div>
                    <div class="flex items-center gap-4 mt-auto">
                        <a class="inline-flex items-center justify-center bg-primary-container text-on-primary-container font-headline font-bold px-5 py-2.5 rounded text-xs uppercase tracking-widest hover:opacity-90 transition-all" href="${project.link}">
                            View Case Study
                            <span class="material-symbols-outlined text-sm ml-2">arrow_forward</span>
                        </a>
                        <a class="text-on-surface-variant hover:text-white transition-colors" href="${project.code}">
                            <span class="material-symbols-outlined">code</span>
                        </a>
                    </div>
                </div>
            </article>`;
    }

    return `
        <article class="bg-surface-container-low rounded-xl p-8 relative group hover:bg-surface-container transition-all duration-300 flex flex-col h-full border border-transparent hover:border-surface-variant">
            <div class="absolute left-0 top-0 h-full w-1 bg-primary-container scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-300 ease-out"></div>
            <div class="flex items-center gap-2 mb-6">
                <span class="bg-primary-container/10 text-primary-fixed text-[10px] font-headline font-bold px-2 py-1 rounded tracking-widest uppercase">${project.category}</span>
                <span class="bg-surface-variant text-on-surface-variant text-[10px] font-headline font-bold px-2 py-1 rounded tracking-widest uppercase">${project.tech}</span>
            </div>
            <h3 class="font-headline text-xl font-bold text-primary mb-3 group-hover:text-primary-container transition-colors">${project.title}</h3>
            <p class="font-body text-on-surface-variant text-sm leading-relaxed mb-8 flex-grow">${project.description}</p>
            <a class="inline-flex items-center text-primary-container font-headline font-bold text-[10px] uppercase tracking-widest hover:underline decoration-2 underline-offset-4" href="${project.link}">
                Read Documentation
                <span class="material-symbols-outlined text-sm ml-1">chevron_right</span>
            </a>
        </article>`;
}

/**
 * ==========================================
 * INITIALIZATION ENGINE
 * ==========================================
 */
document.addEventListener('DOMContentLoaded', () => {

    // --- 1. RENDER HOME PAGE DOMAINS ---
    const domainsContainer = document.getElementById('domains-container');
    if (domainsContainer) {
        domainsContainer.innerHTML = CORE_DOMAINS.map(domain => `
            <div class="bg-surface-container-low p-10 rounded-xl border-b-4 border-transparent hover:border-primary-fixed transition-all duration-500 group hover:bg-surface-container-high hover:-translate-y-2">
                <div class="w-16 h-16 bg-background rounded-lg flex items-center justify-center mb-8 border border-outline-variant/10 group-hover:border-primary-fixed/30 transition-colors">
                    <span class="material-symbols-outlined text-4xl text-primary-fixed" style="font-variation-settings: 'FILL' 1;">${domain.icon}</span>
                </div>
                <h3 class="font-headline text-2xl font-bold text-primary mb-4">${domain.title}</h3>
                <p class="font-body text-base text-on-surface-variant leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                    ${domain.description}
                </p>
            </div>
        `).join('');
    }

    // --- 2. RENDER RESUME PAGE ---
    const statsContainer = document.getElementById('stats-container');
    const experienceContainer = document.getElementById('experience-container');
    const skillsContainer = document.getElementById('skills-container');
    const educationContainer = document.getElementById('education-container');

    if (statsContainer) statsContainer.innerHTML = RESUME_STATS.map(createStatCard).join('');
    if (experienceContainer) experienceContainer.innerHTML = EXPERIENCE_DATA.map(createExperienceItem).join('');
    if (skillsContainer) skillsContainer.innerHTML = SKILLS_DATA.map(createSkillCategory).join('');
    if (educationContainer) educationContainer.innerHTML = EDUCATION_DATA.map(createEducationItem).join('');

    // --- 3. BIND INTERACTIVITY (Accordion) ---
    // Note: We run this AFTER injecting the HTML so the elements exist in the DOM.
    const experienceItems = document.querySelectorAll('.experience-item');
    experienceItems.forEach(item => {
        const header = item.querySelector('.experience-header');
        if (header) {
            header.addEventListener('click', () => {
                const wasActive = item.classList.contains('is-active');
                
                // Reset all items to closed state
                experienceItems.forEach(i => {
                    i.classList.remove('is-active');
                    
                    const indicator = i.querySelector('.experience-indicator');
                    if (indicator) {
                        indicator.classList.remove('bg-primary-fixed', 'shadow-primary-glow');
                        indicator.classList.add('bg-surface-container-high');
                        const icon = indicator.querySelector('.material-symbols-outlined');
                        if (icon) {
                            icon.innerText = 'work_outline';
                            icon.classList.remove('text-on-primary-fixed');
                            icon.classList.add('text-on-surface-variant');
                        }
                    }
                    
                    const card = i.querySelector('.experience-card');
                    if (card) {
                        card.classList.remove('bg-surface-container-low', 'border-primary-fixed/30');
                        card.classList.add('bg-surface-container-lowest', 'border-outline-variant/10');
                    }
                    
                    const line = i.querySelector('.active-line');
                    if (line) {
                        line.classList.remove('scale-y-100');
                        line.classList.add('scale-y-0');
                    }

                    const dateLabel = i.querySelector('.date-label');
                    if (dateLabel) {
                        dateLabel.classList.remove('text-primary-fixed');
                        dateLabel.classList.add('text-on-surface-variant');
                    }
                });

                // Open the clicked item (if it wasn't already open)
                if (!wasActive) {
                    item.classList.add('is-active');
                    
                    const indicator = item.querySelector('.experience-indicator');
                    if (indicator) {
                        indicator.classList.add('bg-primary-fixed', 'shadow-primary-glow');
                        indicator.classList.remove('bg-surface-container-high');
                        const icon = indicator.querySelector('.material-symbols-outlined');
                        if (icon) {
                            icon.innerText = 'work';
                            icon.classList.add('text-on-primary-fixed');
                            icon.classList.remove('text-on-surface-variant');
                        }
                    }
                    
                    const card = item.querySelector('.experience-card');
                    if (card) {
                        card.classList.add('bg-surface-container-low', 'border-primary-fixed/30');
                        card.classList.remove('bg-surface-container-lowest', 'border-outline-variant/10');
                    }
                    
                    const line = item.querySelector('.active-line');
                    if (line) {
                        line.classList.remove('scale-y-0');
                        line.classList.add('scale-y-100');
                    }

                    const dateLabel = item.querySelector('.date-label');
                    if (dateLabel) {
                        dateLabel.classList.add('text-primary-fixed');
                        dateLabel.classList.remove('text-on-surface-variant');
                    }
                }
            });
        }
    });

    // --- 4. RENDER PROJECTS PAGE ---
    const projectsGrid = document.getElementById('projects-grid');
    if (projectsGrid) {
        projectsGrid.innerHTML = PROJECTS_DATA.map(createProjectCard).join('');
    }

    // --- 5. RENDER BLOGS PAGE ---
    const gridContainer = document.getElementById('blog-grid');
    const featuredContainer = document.getElementById('featured-post-container');

    if (gridContainer && featuredContainer) {
        const featuredPost = BLOG_POSTS.find(p => p.featured) || BLOG_POSTS[0];
        const otherPosts = BLOG_POSTS.filter(p => p.id !== featuredPost.id);

        featuredContainer.innerHTML = createFeaturedPost(featuredPost);
        gridContainer.innerHTML = otherPosts.map(createBlogCard).join('');
    }
});