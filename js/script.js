"use strict";

const address = "addr1qx9c4qr8lpp73lxz2z80jgdme9ua22096d8kdhf0249jv5qgpe74yz745c80rht0pm0zrahhudcccgawzvxvg4lc59ks7fw8yq";

const tagClasses = { "Revenue": "badge-revenue", "Enterprise": "badge-enterprise", "Government": "badge-gov" };

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
        if (!r.ok) throw new Error('projects.json not found');
        return r.json();
    })
    .then(data => {
        projects = data;
        const count = projects.length;
        const dateStr = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
        
        document.getElementById('update-date').textContent = dateStr;
        document.getElementById('project-count').textContent = `${count} projects`;
        document.getElementById('searchInput').placeholder = `Search all ${count} projects...`;
        document.getElementById('footer-date').textContent = dateStr;
        
        renderCategories();
        setupSearch();
    })
    .catch(err => {
        console.error(err);
        document.getElementById('projects').innerHTML = '<div class="alert alert-danger">Failed to load projects – check console (likely invalid JSON or wrong path).</div>';
    });

// rest of script unchanged (renderCategories, setupSearch, theme, copy, visitor) – copy from previous version

// ... (exact same functions as my last message – renderCategories, setupSearch, theme toggle, copyBtn, visitor fetch)
