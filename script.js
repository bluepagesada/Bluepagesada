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
    government: "Government & Institutions",
    other: "Other Real-World Use Cases"
};

let projects = [];

fetch('projects.json')
    .then(r => {
        if (!r.ok) throw new Error('Failed to load projects.json');
        return r.json();
    })
    .then(data => {
        projects = data;
        const count = projects.length;
        const dateStr = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

        document.getElementById('update-date').textContent = dateStr;
        document.getElementById('project-count').textContent = `${count} projects that actually matter`;
        document.getElementById('searchInput').placeholder = `Search ${count} verified projects...`;

        renderHallOfFame();
        renderTabs();
        setupSearch();
    })
    .catch(err => {
        console.error(err);
        document.getElementById('projects').innerHTML = '<div class="alert alert-danger text-center">Failed to load projects.json – check console. Likely invalid JSON.</div>';
    });

function renderHallOfFame() {
    const featured = projects.filter(p => ["World Mobile","Minswap","Indigo Protocol","Liqwid Finance","NMKR","JPG.store","Atala PRISM","Lenfi","Book.io","Empowa","Orcfax","Tangible","Blockfrost","Lace Wallet","Eternl"].includes(p.name));
    const container = document.getElementById('hallOfFame');
    container.innerHTML = featured.map(p => `
        <div class="col">
            <div class="card h-100 project-card border-primary shadow-lg">
                <div class="card-body d-flex flex-column">
                    <div class="d-flex align-items-center mb-3">
                        ${p.logo ? `<img src="${p.logo}" alt="${p.name}" class="me-3 rounded" style="width:48px;height:48px;object-fit:contain;">` : `<div class="logo-circle me-3">${p.name[0]}</div>`}
                        <h5 class="mb-0">${p.name}</h5>
                    </div>
                    <p class="small text-muted">${p.desc}</p>
                    <div class="badges mb-3">${p.tags.map(t => `<span class="badge ${tagClasses[t] || 'badge-secondary'} me-1">${t}</span>`).join('')}</div>
                    <div class="metrics">
                        <small>${p.metrics}</small><br>
                        <small>Proof: <a href="${p.proof}" target="_blank" class="text-primary">source ↗</a></small>
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

        // Create tab
        const tab = document.createElement('li');
        tab.className = 'nav-item';
        tab.innerHTML = `<a class="nav-link ${index === 0 ? 'active' : ''}" data-bs-toggle="pill" href="#tab-${key}">${title} (${filtered.length})</a>`;
        tabList.appendChild(tab);

        // Create tab pane
        const pane = document.createElement('div');
        pane.className = `tab-pane fade ${index === 0 ? 'show active' : ''}`;
        pane.id = `tab-${key}`;
        pane.innerHTML = `<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 p-4">
            ${filtered.map(p => `
                <div class="col">
                    <div class="card h-100 project-card">
                        <div class="card-body d-flex flex-column">
                            <div class="d-flex align-items-center mb-3">
                                ${p.logo ? `<img src="${p.logo}" alt="${p.name}" class="me-3 rounded" style="width:48px;height:48px;object-fit:contain;">` : `<div class="logo-circle me-3">${p.name[0]}</div>`}
                                <h5 class="mb-0">${p.name}</h5>
                            </div>
                            <p class="small text-muted">${p.desc}</p>
                            <div class="badges mb-3">${p.tags.map(t => `<span class="badge ${tagClasses[t] || 'badge-secondary'} me-1">${t}</span>`).join('')}</div>
                            <div class="metrics">
                                <small>${p.metrics}</small><br>
                                <small>Proof: <a href="${p.proof}" target="_blank" class="text-primary">source ↗</a></small>
                            </div>
                            <div class="mt-auto pt-3">
                                <a href="${p.link}" target="_blank" class="btn btn-primary btn-sm me-2">Visit</a>
                                ${p.twitter ? `<a href="https://twitter.com/${p.twitter}" target="_blank" class="btn btn-outline-dark btn-sm"><i class="bi bi-twitter-x"></i></a>` : ''}
                            </div>
                        </div>
                    </div>
                </div>
            `).join('')}
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

// Theme toggle, copy, visitor counter (same as before – copy from my last full version)

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
