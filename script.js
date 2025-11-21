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

        // Update hero
        const projectCountEl = document.getElementById('project-count');
        if (projectCountEl) projectCountEl.textContent = `${count} projects`;

        const updateDateEl = document.getElementById('update-date');
        if (updateDateEl) updateDateEl.textContent = dateStr;

        // Update search placeholder
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

        // Hide skeleton, show grid
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

    // Sort
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
            <div class="card h-100 project-card">
                <div class="card-body d-flex flex-column">
                    <div class="d-flex align-items-center mb-3">
                        ${p.logo ? `<img src="${p.logo}" alt="${p.name} logo" class="logo me-3">` : `<div class="logo-placeholder bg-primary text-white d-flex align-items-center justify-content-center me-3 rounded" style="width:48px;height:48px;font-size:1.5rem;font-weight:bold;">${p.name[0]}</div>`}
                        <h5 class="mb-0">${p.name}</h5>
                    </div>
                    <p class="text-muted small flex-grow-1">${p.desc}</p>
                    <div class="metrics mb-2">${p.metrics || ''}</div>
                    <div class="mb-2">
                        ${p.tags.map(t => `<span class="badge ${tagClasses[t] || 'badge-defi'} me-1">${t}</span>`).join('')}
                    </div>
                    <div class="proof-link mb-2"><small>Proof: <a href="${p.proof}" target="_blank" rel="noopener">${p.proofText || 'Source ↗'}</a></small></div>
                    <div class="mt-auto">
                        <a href="${p.link}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">Website</a>
                        ${p.twitter ? `<a href="https://twitter.com/${p.twitter}" target="_blank" rel="noopener" class="btn btn-outline-dark btn-sm ms-2"><i class="bi bi-twitter-x"></i></a>` : ''}
                    </div>
                    <small class="text-muted mt-2 d-block">Verified: Nov 20, 2025</small>
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
            document.document.documentElement.setAttribute('data-theme', 'dark');
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
