"use strict";

const address = "addr1qx9c4qr8lpp73lxz2z80jgdme9ua22096d8kdhf0249jv5qgpe74yz745c80rht0pm0zrahhudcccgawzvxvg4lc59ks7fw8yq";

let projects = [];
let currentFilter = "all";
let currentSort = "impact";

const tagClasses = {
    "Revenue": "badge-revenue",
    "Enterprise": "badge-enterprise",
    "Government": "badge-gov"
};

const categories = {
    depin: "DePIN & Connectivity",
    rwa: "Real-World Assets & Tokenization",
    defi: "Finance & Real-Yield DeFi",
    payments: "Payments & Stablecoins",
    oracles: "Oracles & Data",
    identity: "Digital Identity",
    wallets: "Wallets",
    infra: "Infrastructure & Dev Tools",
    nft: "NFT & Tokenization Platforms",
    gaming: "Gaming & Metaverse",
    other: "Other Real-World Use Cases"
};

fetch('projects.json')
    .then(r => {
        if (!r.ok) throw new Error('projects.json not found or invalid');
        return r.json();
    })
    .then(data => {
        projects = data;

        const count = projects.length;
        const dateStr = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

        const projectCountEl = document.getElementById('project-count');
        if (projectCountEl) projectCountEl.textContent = `${count} projects`;

        const updateDateEl = document.getElementById('update-date');
        if (updateDateEl) updateDateEl.textContent = dateStr;

        const searchInput = document.getElementById('searchInput');
        if (searchInput) searchInput.placeholder = `Search all ${count} projects...`;

        // Update tab counts safely
        const catCounts = {};
        projects.forEach(p => catCounts[p.cat] = (catCounts[p.cat] || 0) + 1);

        document.querySelectorAll('#categoryTabs a[data-cat]').forEach(link => {
            if (!link) return;
            const cat = link.getAttribute('data-cat');
            const title = cat === 'all' ? 'All' : (categories[cat] || cat.charAt(0).toUpperCase() + cat.slice(1));
            const tabCount = cat === 'all' ? count : (catCounts[cat] || 0);
            link.textContent = `${title} (${tabCount})`;
        });

        renderProjects();
        setupTabs();
        setupSearch();
        setupSort();

        const skeleton = document.getElementById('loadingSkeleton');
        if (skeleton) skeleton.style.display = 'none';
        const grid = document.getElementById('projectsGrid');
        if (grid) grid.style.display = 'grid';
    })
    .catch(err => {
        console.error(err);
        const projectsContainer = document.getElementById('projects');
        if (projectsContainer) {
            projectsContainer.innerHTML = '<div class="alert alert-danger text-center">Failed to load projects.json – check console</div>';
        }
    });

function renderProjects() {
    const grid = document.getElementById('projectsGrid');
    if (!grid) return;
    grid.innerHTML = '';

    let filtered = currentFilter === 'all' ? projects : projects.filter(p => p.cat === currentFilter);

    filtered.sort((a, b) => {
        if (currentSort === "impact") return (b.impactScore || 0) - (a.impactScore || 0);
        if (currentSort === "name") return a.name.localeCompare(b.name);
        if (currentSort === "tvl") {
            const aVal = a.metrics ? parseFloat(a.metrics.match(/\$([0-9.]+)/)?.[1] || 0) : 0;
            const bVal = b.metrics ? parseFloat(b.metrics.match(/\$([0-9.]+)/)?.[1] || 0) : 0;
            return bVal - aVal;
        }
        return 0;
    });

    filtered.forEach(p => {
        const col = document.createElement('div');
        col.className = 'col';
        col.innerHTML = `
            <div class="card h-100 project-card shadow-sm border-0">
                <div class="card-body d-flex flex-column p-4">
                    <div class="d-flex align-items-start mb-3">
                        ${p.logo ? `<img src="${p.logo}" alt="${p.name} logo" class="logo me-3 flex-shrink-0">` : `<div class="logo-placeholder me-3 flex-shrink-0"></div>`}
                        <div class="flex-grow-1">
                            <h5 class="fw-bold mb-1">${p.name}</h5>
                            <small class="text-muted text-uppercase fw-semibold">${categories[p.cat] || p.cat}</small>
                        </div>
                    </div>

                    <p class="text-muted small flex-grow-1 mb-3">${p.desc}</p>

                    <div class="metrics fw-bold text-primary mb-3">${p.metrics || 'Live on Cardano mainnet'}</div>

                    <div class="mb-3">
                        ${p.tags.map(t => `<span class="badge ${tagClasses[t] || 'badge-defi'} me-1">${t}</span>`).join('')}
                    </div>

                    <div class="proof-link small mb-3">
                        Proof: <a href="${p.proof}" target="_blank" rel="noopener" class="text-decoration-underline">${p.proofText || 'Source ↗'}</a>
                    </div>

                    <div class="mt-auto d-flex gap-2">
                        <a href="${p.link}" target="_blank" rel="noopener" class="btn btn-primary btn-sm flex-grow-1">Website</a>
                        ${p.twitter ? `<a href="https://twitter.com/${p.twitter}" target="_blank" rel="noopener" class="btn btn-outline-secondary btn-sm"><i class="bi bi-twitter-x"></i></a>` : ''}
                    </div>

                    <small class="text-muted mt-3 d-block text-end">Verified: Nov 20, 2025</small>
                </div>
            </div>
        `;
        grid.appendChild(col);
    });
}

function setupTabs() {
    document.querySelectorAll('#categoryTabs a').forEach(tab => {
        tab.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector('#categoryTabs .nav-link.active')?.classList.remove('active');
            tab.classList.add('active');
            currentFilter = tab.getAttribute('data-cat');
            renderProjects();
        });
    });
}

function setupSearch() {
    const input = document.getElementById('searchInput');
    if (!input) return;
    input.addEventListener('input', e => {
        const term = e.target.value.toLowerCase().trim();
        document.querySelectorAll('.project-card').forEach(card => {
            const text = card.textContent.toLowerCase();
            const col = card.closest('.col');
            col.style.display = text.includes(term) ? '' : 'none';
        });
    });
}

function setupSort() {
    const select = document.getElementById('sortSelect');
    if (!select) return;
    select.addEventListener('change', e => {
        currentSort = e.target.value;
        renderProjects();
    });
}

// Theme toggle
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    if (localStorage.getItem('theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
    }
    themeToggle.addEventListener('click', () => {
        if (document.documentElement.hasAttribute('data-theme')) {
            document.documentElement.removeAttribute('data-theme');
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
        } else {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
        }
    });
}

// Copy button
const copyBtn = document.getElementById('copyBtn');
if (copyBtn) {
    copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText(address);
        const f = document.getElementById('copyFeedback');
        if (f) {
            f.style.opacity = 1;
            setTimeout(() => f.style.opacity = 0, 2000);
        }
    });
}

// Visitor counter
fetch('https://api.countapi.xyz/hit/bluepagesada.github.io/Bluepagesada')
    .then(r => r.json())
    .then(d => {
        const el = document.getElementById('visitor-count');
        if (el) el.textContent = Number(d.value).toLocaleString();
    })
    .catch(() => {
        const el = document.getElementById('visitor-count');
        if (el) el.textContent = 'many';
    });
