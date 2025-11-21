"use strict";

const address = "addr1qx9c4qr8lpp73lxz2z80jgdme9ua22096d8kdhf0249jv5qgpe74yz745c80rht0pm0zrahhudcccgawzvxvg4lc59ks7fw8yq";

const tagClasses = {
    "Revenue": " : "badge-revenue",
    "Enterprise" : "badge-enterprise",
    "Government" : "badge-gov"
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

const projects = [
  {"name":"World Mobile","desc":"Planetary mobile network live in 10+ countries – millions of daily users, real eSIM revenue sharing","link":"https://worldmobile.io","twitter":"WorldMobileTeam","tags":["Revenue","Enterprise","Government"],"cat":"depin","logo":"https://worldmobile.io/assets/images/logo.svg","proof":"https://worldmobile.io/impact","metrics":"2M+ daily active users • Revenue-sharing live"},
  {"name":"Empowa","desc":"1,200+ real homes built in Africa – tokenized titles issued, real-world impact verified","link":"https://empowa.io","twitter":"Empowa_io","tags":["Government","Revenue"],"cat":"rwa","logo":"https://empowa.io/images/logo.svg","proof":"https://empowa.io/impact","metrics":"1,237 homes completed 2025"},
  {"name":"Minswap","desc":"#1 Cardano DEX by volume for 4 years running","link":"https://minswap.org","tags":["Revenue"],"cat":"defi","logo":"https://minswap.org/logo.png","proof":"https://defillama.com/protocol/minswap","metrics":"$45M+ TVL • Top fee generator"},
  {"name":"Indigo Protocol","desc":"Real synthetics iBTC/iUSD/iETH – highest stable volume","link":"https://indigoprotocol.io","tags":["Revenue"],"cat":"defi","logo":"https://indigoprotocol.io/logo.svg","proof":"https://defillama.com/protocol/indigo","metrics":"$38M TVL • Top revenue"},
  {"name":"Lenfi","desc":"Leading lending protocol – real loan interest","link":"https://lenfi.io","tags":["Revenue"],"cat":"defi","logo":"https://lenfi.io/logo.svg","proof":"https://defillama.com/protocol/lenfi","metrics":"$72M TVL • Highest lending revenue"},
  {"name":"Liqwid Finance","desc":"Liquid staking leader – highest APY with revenue","link":"https://liqwid.finance","tags":["Revenue"],"cat":"defi","logo":"https://liqwid.finance/logo.png","proof":"https://defillama.com/protocol/liqwid","metrics":"$55M TVL • Top staking revenue"},
  {"name":"Axo","desc":"Top perpetuals & spot platform","link":"https://axo.trade","tags":["Revenue"],"cat":"defi","logo":"https://axo.trade/logo.svg","proof":"https://defillama.com/protocol/axo","metrics":"$31M TVL • Growing revenue"},
  {"name":"JPG.store","desc":"Dominant NFT marketplace","link":"https://jpg.store","tags":["Revenue"],"cat":"nft","logo":"https://jpg.store/logo.png","proof":"https://jpg.store/stats","metrics":"Highest NFT volume on Cardano"},
  {"name":"NMKR","desc":"Enterprise NFT platform – FIFA, New Balance, Lufthansa, Scantrust","link":"https://nmkr.io","twitter":"nmkr_io","tags":["Enterprise","Revenue"],"cat":"rwa","logo":"https://nmkr.io/logo.svg","proof":"https://nmkr.io/case-studies","metrics":"Millions in enterprise contracts"},
  {"name":"Book.io","desc":"Tokenized books with major publishers – real royalties","link":"https://book.io","twitter":"book_io","tags":["Revenue","Enterprise"],"cat":"rwa","logo":"https://book.io/logo.svg","proof":"https://book.io/publishers","metrics":"Penguin, HarperCollins partners"},
  {"name":"Atala PRISM","desc":"5M+ credentials issued – Ethiopia + enterprises","link":"https://atalaprism.io","tags":["Government","Enterprise"],"cat":"identity","logo":"https://atalaprism.io/logo.png","proof":"https://cardanofoundation.org/atala-prism","metrics":"Largest SSI deployment worldwide"},
  {"name":"Tangible","desc":"Tokenized real estate & private credit","link":"https://tangible.store","tags":["Revenue"],"cat":"rwa","logo":"https://tangible.store/logo.svg","proof":"https://defillama.com/protocol/tangible","metrics":"$25M+ real assets"},
  {"name":"Orcfax","desc":"Leading oracle with enterprise feeds","link":"https://orcfax.io","twitter":"Orcfax","tags":["Revenue","Enterprise"],"cat":"oracles","logo":"https://orcfax.io/logo.svg","proof":"https://orcfax.io/partners","metrics":"Paid enterprise data feeds"},
  {"name":"Blockfrost","desc":"Dominant paid API service","link":"https://blockfrost.io","tags":["Revenue","Enterprise"],"cat":"infra","logo":"https://blockfrost.io/logo.svg","proof":"https://blockfrost.io/pricing","metrics":"Enterprise tier clients"},
  {"name":"RE-TWIN","desc":"Digital twins for real estate – live enterprise use cases","link":"https://re-twin.io","tags":["Enterprise","Revenue"],"cat":"rwa","logo":"https://re-twin.io/logo.png","proof":"https://re-twin.io","metrics":"Live commercial deployments"},
  {"name":"Mehen USDM","desc":"Fiat-backed stablecoin with real backing","link":"https://mehen.io","tags":["Revenue"],"cat":"payments","logo":"https://mehen.io/logo.svg","proof":"https://mehen.io","metrics":"Live fiat reserves"},
  {"name":"Meld","desc":"Crypto-fiat neobank – live loans & cards","link":"https://meld.com","twitter":"MELD_labs","tags":["Revenue"],"cat":"defi","logo":"https://meld.com/logo.svg","proof":"https://meld.com","metrics":"Real banking licenses"},
  {"name":"Cornucopias","desc":"Land + in-game economy with revenue","link":"https://cornucopias.io","tags":["Revenue"],"cat":"rwa","logo":"https://cornucopias.io/logo.png","proof":"https://cornucopias.io","metrics":"Sustained sales"},
  {"name":"Anvil","desc":"Fractional real estate ownership","link":"https://anvil.app","tags":["Revenue"],"cat":"rwa","logo":"https://anvil.app/logo.svg","proof":"https://anvil.app","metrics":"Live properties"},
  {"name":"Iagon","desc":"Decentralized storage with enterprise clients","link":"https://iagon.com","twitter":"IagonOfficial","tags":["Revenue"],"cat":"depin","logo":"https://iagon.com/logo.png","proof":"https://iagon.com/partners","metrics":"Live payments"},
  {"name":"WingRiders","desc":"Top 5 DEX with farming revenue","link":"https://wingriders.com","tags":["Revenue"],"cat":"defi","logo":"https://wingriders.com/logo.png","proof":"https://defillama.com/protocol/wingriders","metrics":"Sustained volume"},
  {"name":"SundaeSwap","desc":"Original DEX still top volume","link":"https://sundaeswap.finance","tags":["Revenue"],"cat":"defi","logo":"https://sundaeswap.finance/logo.png","proof":"https://defillama.com/protocol/sundaeswap","metrics":"Top 5 volume"},
  {"name":"VyFinance","desc":"Yield aggregator with vaults","link":"https://vyfi.io","tags":["Revenue"],"cat":"defi","logo":"https://vyfi.io/logo.svg","proof":"https://defillama.com/protocol/vyfinance","metrics":"Active vaults"},
  {"name":"Levvy Finance","desc":"NFT-backed lending","link":"https://levvy.fi","tags":["Revenue"],"cat":"defi","logo":"https://levvy.fi/logo.svg","proof":"https://levvy.fi","metrics":"Live loans"},
  {"name":"FluidTokens","desc":"P2P NFT lending + staking","link":"https://fluidtokens.com","tags":["Revenue"],"cat":"defi","logo":"https://fluidtokens.com/logo.svg","proof":"https://fluidtokens.com","metrics":"Live fees"},
  {"name":"DexHunter","desc":"Trade aggregator with premium","link":"https://dexhunter.io","tags":["Revenue"],"cat":"defi","logo":"https://dexhunter.io/logo.svg","proof":"https://dexhunter.io","metrics":"Premium revenue"},
  {"name":"Revuto","desc":"Crypto subscription payments","link":"https://revuto.com","tags":["Revenue"],"cat":"payments","logo":"https://revuto.com/logo.svg","proof":"https://revuto.com","metrics":"Active users"},
  {"name":"Djed","desc":"Leading over-collateralized stablecoin","link":"https://djed.xyz","tags":["Revenue"],"cat":"payments","logo":"https://djed.xyz/logo.svg","proof":"https://djed.xyz","metrics":"Highest adoption stable"},
  {"name":"USDM","desc":"Fiat-backed stablecoin on Cardano","link":"https://mehen.io","tags":["Revenue"],"cat":"payments","logo":"https://mehen.io/logo.svg","proof":"https://mehen.io","metrics":"Live fiat backing"},
  {"name":"Charli3","desc":"Decentralized oracle with live usage","link":"https://charli3.io","tags":["Revenue"],"cat":"oracles","logo":"https://charli3.io/logo.svg","proof":"https://charli3.io","metrics":"Live dApp usage"},
  {"name":"Lace Wallet","desc":"Official IOG wallet","link":"https://lace.io","tags":["Revenue"],"cat":"wallets","logo":"https://lace.io/logo.png","proof":"https://lace.io","metrics":"Millions of users"},
  {"name":"Eternl","desc":"Most popular community wallet","link":"https://eternl.io","tags":["Revenue"],"cat":"wallets","logo":"https://eternl.io/logo.svg","proof":"https://eternl.io","metrics":"Top usage"},
  {"name":"Typhon Wallet","desc":"Feature-rich wallet","link":"https://typhonwallet.io","tags":["Revenue"],"cat":"wallets","logo":"https://typhonwallet.io/logo.svg","proof":"https://typhonwallet.io","metrics":"High adoption"},
  {"name":"Vespr","desc":"Mobile-first with NFC cards","link":"https://vespr.wallet","tags":["Revenue"],"cat":"wallets","logo":"https://vespr.wallet/logo.svg","proof":"https://vespr.wallet","metrics":"Physical sales"},
  {"name":"Flint Wallet","desc":"Light wallet with strong base","link":"https://flint-wallet.com","tags":["Revenue"],"cat":"wallets","logo":"https://flint-wallet.com/logo.svg","proof":"https://flint-wallet.com","metrics":"Active users"},
  {"name":"Nami Wallet","desc":"Popular non-custodial","link":"https://namiwallet.io","tags":["Revenue"],"cat":"wallets","logo":"https://namiwallet.io/logo.svg","proof":"https://namiwallet.io","metrics":"Still widely used"},
  {"name":"NuFi","desc":"Multi-chain wallet","link":"https://nu.fi","tags":["Revenue"],"cat":"wallets","logo":"https://nu.fi/logo.svg","proof":"https://nu.fi","metrics":"Revenue"},
  {"name":"Maestro","desc":"High-performance dApp platform","link":"https://maestro.io","tags":["Revenue"],"cat":"infra","logo":"https://maestro.io/logo.svg","proof":"https://maestro.io","metrics":"Paid tiers"},
  {"name":"Demeter.run","desc":"Cardano cloud platform","link":"https://demeter.run","tags":["Revenue"],"cat":"infra","logo":"https://demeter.run/logo.svg","proof":"https://demeter.run","metrics":"Paid plans"},
  {"name":"MeshJS","desc":"Most used dev toolkit","link":"https://meshjs.dev","tags":["Revenue"],"cat":"infra","logo":"https://meshjs.dev/logo.svg","proof":"https://meshjs.dev","metrics":"Sponsorships"},
  {"name":"TapTools","desc":"Leading analytics with Pro","link":"https://taptools.pro","tags":["Revenue"],"cat":"infra","logo":"https://taptools.pro/logo.svg","proof":"https://taptools.pro","metrics":"Paid Pro"},
  {"name":"Tokhun","desc":"NFT minting platform","link":"https://tokhun.io","tags":["Revenue"],"cat":"nft","logo":"https://tokhun.io/logo.svg","proof":"https://tokhun.io","metrics":"Sustained revenue"},
  {"name":"Scantrust","desc":"Supply chain traceability for luxury brands","link":"https://scantrust.com","tags":["Enterprise"],"cat":"rwa","logo":"https://scantrust.com/logo.png","proof":"https://nmkr.io/case-studies","metrics":"Live with Clarins"},
  {"name":"Midnight Network","desc":"Privacy sidechain with enterprise partners","link":"https://midnight.network","tags":["Enterprise"],"cat":"infra","logo":"https://midnight.network/logo.svg","proof":"https://midnight.network","metrics":"Live enterprise"},
  {"name":"RE-TWIN","desc":"Digital twins for real estate","link":"https://re-twin.io","tags":["Enterprise","Revenue"],"cat":"rwa","logo":"https://re-twin.io/logo.png","proof":"https://re-twin.io","metrics":"Live deployments"},
  {"name":"Cardano Spot","desc":"News platform with sponsorships","link":"https://cardanospot.io","tags":["Revenue"],"cat":"infra","logo":"https://cardanospot.io/logo.svg","proof":"https://cardanospot.io","metrics":"Sponsorship revenue"},
  {"name":"PoolTool","desc":"Stake pool analytics","link":"https://pooltool.io","tags":["Revenue"],"cat":"infra","logo":"https://pooltool.io/logo.svg","proof":"https://pooltool.io","metrics":"Premium alerts"},
  {"name":"AdaStat","desc":"Advanced analytics","link":"https://adastat.net","tags":["Revenue"],"cat":"infra","logo":"https://adastat.net/logo.svg","proof":"https://adastat.net","metrics":"Revenue"},
  {"name":"Cexplorer","desc":"Block explorer with API","link":"https://cexplorer.io","tags":["Revenue"],"cat":"infra","logo":"https://cexplorer.io/logo.svg","proof":"https://cexplorer.io","metrics":"Paid API"},
  {"name":"Tentative","desc":"Real-world payment gateway","link":"https://tentative.io","tags":["Revenue"],"cat":"payments","logo":"https://tentative.io/logo.svg","proof":"https://tentative.io","metrics":"Live merchants"},
  {"name":"Cardano Hotel","desc":"Tokenized hotel with revenue share","link":"https://cardanohotel.io","tags":["Revenue"],"cat":"rwa","logo":"https://cardanohotel.io/logo.svg","proof":"https://cardanohotel.io","metrics":"Live revenue"},
  {"name":"FIFA Collect","desc":"Official FIFA NFTs via NMKR","link":"https://fifa.collect.com","tags":["Enterprise","Revenue"],"cat":"rwa","logo":"https://nmkr.io/logo.svg","proof":"https://nmkr.io/case-studies","metrics":"Official partnership"},
  {"name":"New Balance","desc":"Tokenized sneakers via NMKR","link":"https://newbalance.nmkr.io","tags":["Enterprise"],"cat":"rwa","logo":"https://nmkr.io/logo.svg","proof":"https://nmkr.io/case-studies","metrics":"Official licensed"},
  {"name":"Clarins","desc":"Product authentication via Scantrust","link":"https://clarins.com","tags":["Enterprise"],"cat":"rwa","logo":"https://clarins.com/logo.png","proof":"https://scantrust.com","metrics":"Live luxury brand"},
  {"name":"Sundae Labs","desc":"Development lab with revenue","link":"https://sundaelabs.com","tags":["Revenue"],"cat":"infra","logo":"https://sundaelabs.com/logo.svg","proof":"https://sundaelabs.com","metrics":"Grants + revenue"},
  {"name":"Beefy Finance","desc":"Yield optimizer on Cardano","link":"https://beefy.com","tags":["Revenue"],"cat":"defi","logo":"https://beefy.com/logo.svg","proof":"https://defillama.com/protocol/beefy","metrics":"Live TVL"},
  {"name":"Optim Finance","desc":"Structured products with bonds","link":"https://optim.finance","tags":["Revenue"],"cat":"defi","logo":"https://optim.finance/logo.svg","proof":"https://optim.finance","metrics":"Active bonds"},
  {"name":"Blueshift","desc":"AMM with pools","link":"https://blueshift.fi","tags":["Revenue"],"cat":"defi","logo":"https://blueshift.fi/logo.svg","proof":"https://blueshift.fi","metrics":"Active liquidity"},
  {"name":"A3C","desc":"Algorithmic trading tools","link":"https://a3c.finance","tags":["Revenue"],"cat":"defi","logo":"https://a3c.finance/logo.svg","proof":"https://a3c.finance","metrics":"Revenue"},
  {"name":"Cardano Village","desc":"Community meetup spaces with revenue","link":"https://cardanovillage.io","tags":["Revenue"],"cat":"other","logo":"https://cardanovillage.io/logo.svg","proof":"https://cardanovillage.io","metrics":"Live revenue"},
  {"name":"Ada Pools","desc":"Pool analytics with premium","link":"https://adapools.org","tags":["Revenue"],"cat":"infra","logo":"https://adapools.org/logo.svg","proof":"https://adapools.org","metrics":"Premium"},
  {"name":"Cardano Foundation Tools","desc":"Official tools and partnerships","link":"https://cardanofoundation.org","tags":["Enterprise"],"cat":"infra","logo":"https://cardanofoundation.org/logo.svg","proof":"https://cardanofoundation.org","metrics":"Official"},
  {"name":"IOG Commercial","desc":"Enterprise arm with contracts","link":"https://iohk.io","tags":["Enterprise"],"cat":"infra","logo":"https://iohk.io/logo.svg","proof":"https://iohk.io","metrics":"Paid contracts"},
  {"name":"Midnight Partners","desc":"Enterprise data protection","link":"https://midnight.network","tags":["Enterprise"],"cat":"infra","logo":"https://midnight.network/logo.svg","proof":"https://midnight.network","metrics":"Live clients"},
  {"name":"Cardano Embassy","desc":"Physical embassy projects","link":"https://cardanoembassy.com","tags":["Revenue"],"cat":"other","logo":"https://cardanoembassy.com/logo.svg","proof":"https://cardanoembassy.com","metrics":"Live revenue"}
];

document.addEventListener('DOMContentLoaded', () => {
    const count = projects.length;
    const dateStr = new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

    document.getElementById('update-date').textContent = dateStr;
    document.getElementById('project-count').textContent = `${count} projects that actually matter`;
    document.getElementById('searchInput').placeholder = `Search ${count} verified projects...`;

    renderHallOfFame();
    renderTabs();
    setupSearch();

    // Theme toggle
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

    // Copy button
    document.getElementById('copyBtn').addEventListener('click', () => {
        navigator.clipboard.writeText(address);
        const f = document.getElementById('copyFeedback');
        f.style.opacity = 1;
        setTimeout(() => f.style.opacity = 0, 2000);
    });

    // Visitor counter
    fetch('https://api.countapi.xyz/hit/bluepagesada.github.io/Bluepagesada')
        .then(r => r.json())
        .then(d => document.getElementById('visitor-count').textContent = Number(d.value).toLocaleString())
        .catch(() => document.getElementById('visitor-count').textContent = 'many');
});

function renderHallOfFame() {
    const featuredNames = ["World Mobile", "Minswap", "Indigo Protocol", "Liqwid Finance", "Lenfi", "NMKR", "JPG.store", "Atala PRISM", "Book.io", "Empowa", "Orcfax", "Blockfrost"];
    const featured = projects.filter(p => featuredNames.includes(p.name));
    const container = document.getElementById('hallOfFame');
    container.innerHTML = featured.map(p => `
        <div class="col">
            <div class="card h-100 project-card border-primary shadow">
                <div class="card-body d-flex flex-column">
                    <div class="d-flex align-items-center mb-3">
                        ${p.logo ? `<img src="${p.logo}" alt="${p.name}" class="me-3 logo-img rounded">` : `<div class="logo-circle me-3">${p.name[0]}</div>`}
                        <h5 class="mb-0">${p.name}</h5>
                    </div>
                    <p class="small text-muted">${p.desc}</p>
                    <div class="badges mb-2">${p.tags.map(t => `<span class="badge ${tagClasses[t] || 'badge-secondary'} me-1">${t}</span>`).join('')}</div>
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

        const tabItem = document.createElement('li');
        tabItem.className = 'nav-item';
        tabItem.innerHTML = `<button class="nav-link ${index === 0 ? 'active' : ''}" data-bs-toggle="pill" data-bs-target="#tab-${key}" type="button">${title} (${filtered.length})</button>`;
        tabList.appendChild(tabItem);

        const tabPane = document.createElement('div');
        tabPane.className = `tab-pane fade ${index === 0 ? 'show active' : ''}`;
        tabPane.id = `tab-${key}`;
        tabPane.innerHTML = `<div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 p-4">
            ${filtered.map(p => `
                <div class="col">
                    <div class="card h-100 project-card">
                        <div class="card-body d-flex flex-column">
                            <div class="d-flex align-items-center mb-3">
                                ${p.logo ? `<img src="${p.logo}" alt="${p.name}" class="me-3 logo-img rounded">` : `<div class="logo-circle me-3">${p.name[0]}</div>`}
                                <h5 class="mb-0">${p.name}</h5>
                            </div>
                            <p class="small text-muted">${p.desc}</p>
                            <div class="badges mb-2">${p.tags.map(t => `<span class="badge ${tagClasses[t] || 'badge-secondary'} me-1">${t}</span>`).join('')}</div>
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
        </div>`;
        tabContent.appendChild(tabPane);
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
