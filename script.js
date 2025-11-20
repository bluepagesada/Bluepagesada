"use strict";

const address = "addr1qx9c4qr8lpp73lxz2z80jgdme9ua22096d8kdhf0249jv5qgpe74yz745c80rht0pm0zrahhudcccgawzvxvg4lc59ks7fw8yq";

const tagClasses = {
    "Revenue": "badge-revenue",
    "Enterprise": "badge-enterprise",
    "Government": "badge-gov"
};

const categories = {
    depin: "DePIN & Connectivity",
    rwa: "Real-World Assets",
    defi: "DeFi & Finance",
    payments: "Payments & Stablecoins",
    oracles: "Oracles",
    identity: "Digital Identity",
    wallets: "Wallets",
    infra: "Infrastructure",
    nft: "NFT Platforms",
    other: "Other"
};

let projects = [];

fetch('projects.json')
    .then(r => {
        if (!r.ok) throw new Error('Failed');
        return r.json();
    })
    .then(data => {
        projects = data;
        const count = projects.length;
        const dateStr = "November 20, 2025";

        document.getElementById('update-date').textContent = dateStr;
        document.getElementById('project-count').textContent = `${count} projects that actually matter`;
        document.getElementById('searchInput').placeholder = `Search ${count} verified projects...`;

        renderHallOfFame();
        renderTabs();
        setupSearch();
        document.querySelectorAll('.skeleton').forEach(el => el.remove());
    })
    .catch(() => {
        document.getElementById('projects').innerHTML = '<div class="alert alert-danger">JSON load failed – tell the maintainer to stop being useless</div>';
    });

function renderHallOfFame() {
    const featuredNames = ["World Mobile","Minswap","Indigo Protocol","Liqwid Finance","Lenfi","NMKR","JPG.store","Atala PRISM","Book.io","Empowa","Orcfax","Tangible","Blockfrost"];
    const featured = projects.filter(p => featuredNames.includes(p.name));
    const container = document.getElementById('hallOfFame');
    container.innerHTML = featured.map(p => `
        <div class="col">
            <div class="card h-100 project-card border-primary shadow-lg">
                <div class="card-body d-flex flex-column">
                    <div class="d-flex align-items-center mb-3">
                        ${p.logo ? `<img src="${p.logo}" alt="${p.name}" class="me-3 logo-img rounded">` : `<div class="logo-circle me-3">${p.name[0]}</div>`}
                        <h5 class="mb-0">${p.name}</h5>
                    </div>
                    <p class="small text-muted mt-2">${p.desc}</p>
                    <div class="badges mb-3">${p.tags.map(t => `<span class="badge ${tagClasses[t] || 'badge-secondary'} me-1">${t}</span>`).join('')}</div>
                    <div class="metrics">
                        <small>${p.metrics}</small><br>
                        <small>Proof: <a href="${p.proof}" target="_blank">source ↗</a></small>
                    </div>
                    <a href="${p.link}" target="_blank" class="btn btn-primary btn-sm mt-auto">Visit →</a>
                </div>
            </div>
        </div>
    `).join('');
}

function renderTabs() {
    const tabList = document.getElementById('categoryTabs');
    const tabContent = document.getElementById('categoryTabContent');
    tabList.innerHTML = '';
    tabContent.innerHTML = '';

    Object.entries(categories).forEach(([key, title], index) => {
        const filtered = projects.filter(p => p.cat === key);
        if (filtered.length === 0) return;

        const tab = document.createElement('li'>
            <button class="nav-link ${index === 0 ? 'active' : ''}" data-bs-toggle="pill" data-bs-target="#tab-${key}" type="button">${title} (${filtered.length})</button>
        </li>`;
        tabList.innerHTML += tab;

        const pane = document.createElement('div');
        pane.className = `tab-pane fade ${index === 0 ? 'show active' : ''}" id="tab-${key}">
            <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                ${filtered.map(p => `
                    <div class="col">
                        <div class="card h-100 project-card">
                            <div class="card-body d-flex flex-column">
                                <div class="d-flex align-items-center mb-3">
                                    ${p.logo ? `<img src="${p.logo}" alt="${p.name}" class="me-3 logo-img rounded">` : `<div class="logo-circle me-3">${p.name[0]}</div>`}
                                    <h5 class="mb-0">${p.name}</h5>
                                </div>
                                <p class="small text-muted">${p.desc}</p>
                                <div class="badges mb-3">${p.tags.map(t => `<span class="badge ${tagClasses[t] || 'badge-secondary'} me-1">${t}</span>`).join('')}</div>
                                <div class="metrics">
                                    <small>${p.metrics}</small><br>
                                    <small>Proof: <a href="${p.proof}" target="_blank">source ↗</a></small>
                                </div>
                                <a href="${p.link}" target="_blank" class="btn btn-primary btn-sm mt-auto">Visit →</a>
                                <small class="text-muted mt-2 d-block">Verified: Nov 20, 2025</small>
                            </div>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>`;
        tabContent.appendChild(pane);
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

// Theme toggle, copy, visitor counter same as last version

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
        themeToggle.innerHTML = '<i class="bi-sun-fill"></i>';
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
