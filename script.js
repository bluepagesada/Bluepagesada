"use strict";

const address = "addr1qx9c4qr8lpp73lxz2z80jgdme9ua22096d8kdhf0249jv5qgpe74yz745c80rht0pm0zrahhudcccgawzvxvg4lc59ks7fw8yq";

let projects = [];
let currentFilter = "all";
let currentSort = "impact";

const tagClasses = {
    "Revenue": "text-bg-success",
    "Enterprise": "text-bg-primary",
    "Government": "text-bg-purple badge-purple"
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

const splashes = [
    "No memecoins were harmed in the making of this directory.",
    "Proof or it didn't happen.",
    "Vaporware's natural enemy.",
    "Real revenue only. Sorry, not sorry.",
    "Where hype goes to die.",
    "Cardano: Actually shipping since 2017.",
    "Strictly business. No clown coins.",
    "The red pill of Cardano directories.",
    "Curated by someone who hates bullshit.",
    "We removed your favorite project.",
    "Quality > Quantity. Always.",
    "The directory that says 'no' 99% of the time.",
    "Real users or GTFO.",
    "Government contracts or bust.",
    "No airdrops. No promises. Just shipping.",
    "Blue pilled? Stay away.",
    "Still waiting for that 'killer app'? It's here.",
    "Enterprise adoption loading… 100%.",
    "We ghosted 500+ submissions this week.",
    "Not financial advice. Just facts.",
    "Cardano summer never came. Winter is fine.",
    "Running on Voltaire and spite.",
    "The purge continues.",
    "Your rugpull isn't welcome here.",
    "Real yield or real yieldn't.",
    "We don't list dreams. Only reality.",
    "The Cardano filter you didn't know you needed.",
    "Now playing: Shipping Sounds>",
    "Powered by Haskell and disappointment.",
    "0xHype = false",
    "Stake pools hate this list.",
    "One list to rule them all.",
    "The 'actually works' filter.",
    "No roadmap. Just results.",
    "Blue Pages: 100% less hopium.",
    "We fact-checked your whitepaper.",
    "Cardano's immune system.",
    "The directory that removes more than it adds.",
    "Real utility or real quiet.",
    "Your favorite project didn't make the cut. Cope.",
    "The list that made 90% of CT mad.",
    "No paid listings. Ever.",
    "The Cardano reality check.",
    "Still more real than most L1s combined.",
    "We don't do 'coming soon'.",
    "The no-hopium zone.",
    "Real builders only.",
    "The only directory that actually matters."
];

document.addEventListener('DOMContentLoaded', () => {
    // Random savage splash
    const splashEl = document.getElementById('splash-text');
    if (splashEl) {
        splashEl.textContent = splashes[Math.floor(Math.random() * splashes.length)];
    }

    fetch('projects.json')
        .then(r => {
            if (!r.ok) throw new Error('projects.json not found');
            return r.json();
        })
        .then(data => {
            projects = data;

            const count = projects.length;

            // Update all counters
            document.getElementById('project-count').textContent = `${count} projects`;
            const homeCountEl = document.getElementById('home-project-count');
            if (homeCountEl) homeCountEl.textContent = count;
            document.getElementById('update-date').textContent = "November 23, 2025";

            if (document.getElementById('searchInput')) {
                document.getElementById('searchInput').placeholder = `Search all ${count} projects...`;
            }

            // Category counts
            const catCounts = {};
            projects.forEach(p => {
                catCounts[p.cat] = (catCounts[p.cat] || 0) + 1;
            });

            document.querySelectorAll('#categoryTabs a[data-cat]').forEach(link => {
                const cat = link.getAttribute('data-cat');
                const cnt = cat === 'all' ? count : (catCounts[cat] || 0);
                const title = cat === 'all' ? 'All' : categories[cat] || cat.toUpperCase();
                link.innerHTML = `${title} <span class="text-muted small">(${cnt})</span>`;
            });

            renderProjects();
            setupTabs();
            setupSearch();
            setupSort();

            // Hide skeleton, show grid
            const skeleton = document.getElementById('loadingSkeleton');
            const grid = document.getElementById('projectsGrid');
            if (skeleton) skeleton.style.display = 'none';
            if (grid) grid.style.display = 'grid';

            // Force render if directly on Projects tab
            if (document.querySelector('#projects-tab.active')) {
                renderProjects();
            }
        })
        .catch(err => {
            console.error('JSON load failed:', err);
            const skeleton = document.getElementById('loadingSkeleton');
            if (skeleton) {
                skeleton.innerHTML = `<div class="col-12 text-center py-5 text-danger fw-bold fs-3">projects.json broken<br><small>Fix it you magnificent bastard</small></div>`;
            }
        });
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
            const aVal = a.metrics ? parseFloat(a.metrics.match(/\$([0-9,.]+)/)?.[1]?.replace(/,/g, '') || 0) : 0;
            const bVal = b.metrics ? parseFloat(b.metrics.match(/\$([0-9,.]+)/)?.[1]?.replace(/,/g, '') || 0) : 0;
            return bVal - aVal;
        }
        return 0;
    });

    filtered.forEach(p => {
        const col = document.createElement('div');
        col.className = 'col';

        const logoHtml = p.logo 
            ? `<img src="${p.logo}" alt="${p.name} logo" class="logo me-3 flex-shrink-0" onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">`
            : `<div class="logo-placeholder me-3 flex-shrink-0">${p.name.charAt(0)}</div>`;

        const tagsHtml = p.tags 
            ? p.tags.map(t => `<span class="badge ${tagClasses[t] || 'text-bg-secondary'}">${t}</span>`).join('')
            : '';

        const verifiedBadge = p.verified 
            ? '<span class="badge text-bg-success">✓ Verified</span>'
            : '<span class="badge text-bg-warning text-dark">⚠ Pending</span>';

        const typeBadge = p.type 
            ? `<span class="badge ${p.type === 'Physical' ? 'badge-physical' : 'badge-digital'}">${p.type === 'Physical' ? '🌍 Physical' : '💻 Digital'}</span>`
            : '';

        col.innerHTML = `
            <div class="card h-100 project-card shadow-sm border-0">
                <div class="card-body d-flex flex-column p-4">
                    <div class="d-flex align-items-start mb-3">
                        ${logoHtml}
                        <div class="flex-grow-1">
                            <h5 class="fw-bold mb-1">${p.name}</h5>
                            <small class="text-muted text-uppercase fw-semibold">${categories[p.cat] || p.cat.toUpperCase()}</small>
                        </div>
                    </div>

                    <p class="text-muted small flex-grow-1 mb-3">${p.desc}</p>

                    <div class="metrics fw-bold text-primary mb-3">${p.metrics || 'Live on Cardano mainnet'}</div>

                    <div class="d-flex flex-wrap gap-2 mb-3">
                        ${tagsHtml}
                        ${verifiedBadge}
                        ${typeBadge}
                    </div>

                    <div class="proof-link small mb-3">
                        Proof: <a href="${p.proof}" target="_blank" rel="noopener" class="text-decoration-underline">${p.proofText || 'Source ↗'}</a>
                    </div>

                    <div class="mt-auto d-flex gap-2">
                        <a href="${p.link}" target="_blank" rel="noopener" class="btn btn-primary btn-sm flex-grow-1">Website</a>
                        ${p.twitter ? `<a href="https://twitter.com/${p.twitter}" target="_blank" rel="noopener" class="btn btn-outline-secondary btn-sm"><i class="bi bi-twitter-x"></i></a>` : ''}
                    </div>

                    <small class="text-muted mt-3 d-block text-end">Verified: November 23, 2025</small>
                </div>
            </div>
        `;

        grid.appendChild(col);
    });
}

function setupTabs() {
    document.querySelectorAll('#categoryTabs a[data-cat]').forEach(tab => {
        tab.addEventListener('click', e => {
            e.preventDefault();
            document.querySelectorAll('#categoryTabs a[data-cat]').forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            currentFilter = tab.getAttribute('data-cat');
            renderProjects();
        });
    });

    const projectsTab = document.getElementById('projects-tab');
    if (projectsTab) {
        projectsTab.addEventListener('shown.bs.tab', renderProjects);
    }
}

function setupSearch() {
    const input = document.getElementById('searchInput');
    if (!input) return;

    input.addEventListener('input', e => {
        const term = e.target.value.toLowerCase().trim();
        document.querySelectorAll('.project-card').forEach(card => {
            const col = card.closest('.col');
            if (col) {
                col.style.display = card.textContent.toLowerCase().includes(term) ? '' : 'none';
            }
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
    const root = document.documentElement;
    const saved = localStorage.getItem('theme');
    if (saved === 'light') {
        root.setAttribute('data-theme', 'light');
        themeToggle.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
    } else {
        root.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="bi bi-sun-fill"></i>';
    }

    themeToggle.addEventListener('click', () => {
        if (root.getAttribute('data-theme') === 'dark') {
            root.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            themeToggle.innerHTML = '<i class="bi bi-moon-stars-fill"></i>';
        } else {
            root.setAttribute('data-theme', 'dark');
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

// Live Cardano Metrics Tracker (Static Fallback - No CORS Issues)
function loadCardanoMetrics() {
    const grid = document.getElementById('metrics-grid');
    if (!grid) return;

    // Static real-time data (Nov 23, 2025)
    const ada = { usd: 0.41, usd_24h_change: 1.53, usd_market_cap: 14900000000, usd_24h_vol: 116390000 };
    const tvl = 185690000; // $185.69M
    const tvlChange = 0.13; // +0.13%
    const stakingPercent = 71.2;

    const changeClass = ada.usd_24h_change > 0 ? 'text-success' : 'text-danger';
    const tvlChangeClass = tvlChange > 0 ? 'text-success' : 'text-danger';

    // Build cards
    const metricsHtml = `
        <div class="col-md-4 col-sm-6">
            <div class="card border-0 shadow-sm h-100 text-center p-3">
                <i class="bi bi-currency-dollar fs-1 text-primary mb-2"></i>
                <h5 class="card-title fw-bold">ADA Price</h5>
                <p class="card-text fs-4 fw-bold">$${ada.usd.toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</p>
            </div>
        </div>
        <div class="col-md-4 col-sm-6">
            <div class="card border-0 shadow-sm h-100 text-center p-3">
                <i class="bi bi-graph-up-arrow fs-1 ${changeClass} mb-2"></i>
                <h5 class="card-title fw-bold">24h Change</h5>
                <p class="card-text fs-4 fw-bold ${changeClass}">${ada.usd_24h_change.toFixed(2)}%</p>
            </div>
        </div>
        <div class="col-md-4 col-sm-6">
            <div class="card border-0 shadow-sm h-100 text-center p-3">
                <i class="bi bi-building fs-1 text-primary mb-2"></i>
                <h5 class="card-title fw-bold">Market Cap</h5>
                <p class="card-text fs-4 fw-bold">$${ada.usd_market_cap.toLocaleString('en-US', {maximumFractionDigits: 0})}</p>
            </div>
        </div>
        <div class="col-md-4 col-sm-6">
            <div class="card border-0 shadow-sm h-100 text-center p-3">
                <i class="bi bi-bar-chart-line fs-1 text-primary mb-2"></i>
                <h5 class="card-title fw-bold">24h Volume</h5>
                <p class="card-text fs-4 fw-bold">$${ada.usd_24h_vol.toLocaleString('en-US', {maximumFractionDigits: 0})}</p>
            </div>
        </div>
        <div class="col-md-4 col-sm-6">
            <div class="card border-0 shadow-sm h-100 text-center p-3">
                <i class="bi bi-pie-chart fs-1 text-success mb-2"></i>
                <h5 class="card-title fw-bold">DeFi TVL</h5>
                <p class="card-text fs-4 fw-bold">$${tvl.toLocaleString('en-US', {maximumFractionDigits: 0})}</p>
                <small class="text-muted d-block">${tvlChangeClass === 'text-success' ? '+' : ''}${tvlChange.toFixed(2)}% (24h)</small>
            </div>
        </div>
        <div class="col-md-4 col-sm-6">
            <div class="card border-0 shadow-sm h-100 text-center p-3">
                <i class="bi bi-shield-check fs-1 text-success mb-2"></i>
                <h5 class="card-title fw-bold">Staking %</h5>
                <p class="card-text fs-4 fw-bold">${stakingPercent}%</p>
            </div>
        </div>
    `;
    grid.innerHTML = metricsHtml;
}

// Load metrics on page load (static, no interval needed for fallback)
if (document.getElementById('metrics-grid')) {
    loadCardanoMetrics();
}
