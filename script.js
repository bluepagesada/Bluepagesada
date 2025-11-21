"use strict";

const address = "addr1qx9c4qr8lpp73lxz2z80jgdme9ua22096d8kdhf0249jv5qgpe74yz745c80rht0pm0zrahhudcccgawzvxvg4lc59ks7fw8yq";

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

let projects = [];

fetch('projects.json')
    .then(r => {
        if (!r.ok) throw new Error('projects.json not found or invalid');
        return r.json();
    })
    .then(data => {
        projects = data;
        const count = projects.length;
        const dateStr = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

        document.getElementById('update-date').textContent = dateStr;
        document.getElementById('project-count').textContent = `${count} projects`;
        document.getElementById('searchInput').placeholder = `Search all ${count} projects...`;

        renderCategories();
        setupSearch();
    })
    .catch(err => {
        console.error(err);
        document.getElementById('projects').innerHTML = '<div class="alert alert-danger text-center">Failed to load projects.json – check console.</div>';
    });

function renderCategories() {
    const accordion = document.getElementById('categoryAccordion');
    accordion.innerHTML = '';

    Object.entries(categories).forEach(([key, title]) => {
        const filtered = projects.filter(p => p.cat === key);
        if (filtered.length === 0) return;

        const item = document.createElement('div');
        item.className = 'accordion-item';
        item.innerHTML = `
            <h2 class="accordion-header">
                <button class="accordion-button fw-bold fs-4 ${key === 'depin' ? '' : 'collapsed'}" type="button" data-bs-toggle="collapse" data-bs-target="#cat-${key}">
                    ${title} (${filtered.length})
                </button>
            </h2>
            <div id="cat-${key}" class="accordion-collapse collapse ${key === 'depin' ? 'show' : ''}">
                <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 p-4">
                    ${filtered.map(p => `
                        <div class="col">
                            <div class="card h-100 project-card">
                                <div class="card-body">
                                    <h5>${p.name}</h5>
                                    <p class="text-muted small">${p.desc}</p>
                                    <div class="mb-2">
                                        ${p.tags.map(t => `<span class="badge ${tagClasses[t] || 'badge-defi'} me-1">${t}</span>`).join('')}
                                    </div>
                                    <a href="${p.link}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">Website</a>
                                    ${p.twitter ? `<a href="https://twitter.com/${p.twitter}" target="_blank" rel="noopener" class="btn btn-outline-dark btn-sm ms-2"><i class="bi bi-twitter-x"></i></a>` : ''}
                                </div>
                            </div>
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        accordion.appendChild(item);
    });
}

function setupSearch() {
    document.getElementById('searchInput').addEventListener('input', e => {
        const term = e.target.value.toLowerCase().trim();
        document.querySelectorAll('.project-card').forEach(card => {
            const col = card.closest('.col');
            const matches = card.textContent.toLowerCase().includes(term);
            col.style.display = (term === '' || matches) ? '' : 'none';
        });
    });
}

const themeToggle = document.getElementById('themeToggle');
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

document.getElementById('copyBtn').addEventListener('click', () => {
    navigator.clipboard.writeText(address);
    const f = document.getElementById('copyFeedback');
    f.style.opacity = 1;
    setTimeout(() => f.style.opacity = 0, 2000);
});

fetch('https://api.countapi.xyz/hit/bluepagesada.github.io/Bluepagesada')
    .then(r => r.json())
    .then(d => document.getElementById('visitor-count').textContent = Number(d.value).toLocaleString())
    .catch(() => document.getElementById('visitor-count').textContent = 'many');
