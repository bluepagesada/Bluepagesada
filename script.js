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

const projects = [
  {"name":"World Mobile","desc":"Planetary mobile network live in Africa, Pakistan, USA, Zanzibar – millions of daily users, real eSIM revenue sharing","link":"https://worldmobile.io","twitter":"WorldMobileTeam","tags":["Revenue","Enterprise","Government"],"cat":"depin","logo":"https://worldmobile.io/assets/images/logo.svg","proof":"https://worldmobile.io/impact","metrics":"2M+ daily active users • Revenue-sharing live"},
  {"name":"Iagon","desc":"Decentralized storage & compute – enterprise clients paying in tokens, live usage fees","link":"https://iagon.com","twitter":"IagonOfficial","tags":["Revenue","Enterprise"],"cat":"depin","logo":"https://iagon.com/images/logo.png","proof":"https://iagon.com/partners","metrics":"Enterprise contracts • Token burns from usage"},
  {"name":"IXO World","desc":"Telecom DePIN live in emerging markets with revenue-sharing nodes","link":"https://ixoworld.io","tags":["Revenue"],"cat":"depin","logo":"https://ixoworld.io/logo.png","proof":"https://ixoworld.io","metrics":"Live operator revenue"},
  {"name":"Empowa","desc":"1,200+ real homes built in Mozambique/Tanzania – tokenized titles issued","link":"https://empowa.io","twitter":"Empowa_io","tags":["Government","Revenue"],"cat":"rwa","logo":"https://empowa.io/images/logo.svg","proof":"https://empowa.io/impact","metrics":"1,237 homes completed 2025"},
  {"name":"Tangible","desc":"Tokenized US real estate, private credit, gold – live yield to holders","link":"https://tangible.store","tags":["Revenue"],"cat":"rwa","logo":"https://tangible.store/logo.svg","proof":"https://defillama.com/protocol/tangible","metrics":"$25M+ real assets tokenized"},
  {"name":"Book.io","desc":"Tokenized books with Penguin, HarperCollins – real royalties paid","link":"https://book.io","twitter":"book_io","tags":["Revenue","Enterprise"],"cat":"rwa","logo":"https://book.io/logo.svg","proof":"https://book.io/publishers","metrics":"Major publisher royalties"},
  {"name":"NMKR","desc":"Enterprise NFT platform – FIFA, New Balance, Lufthansa, Scantrust","link":"https://nmkr.io","twitter":"nmkr_io","tags":["Enterprise","Revenue"],"cat":"rwa","logo":"https://nmkr.io/logo.svg","proof":"https://nmkr.io/case-studies","metrics":"Millions in enterprise contracts"},
  {"name":"Anvil","desc":"Fractional US real estate – live properties generating yield","link":"https://anvil.app","tags":["Revenue"],"cat":"rwa","logo":"https://anvil.app/logo.svg","proof":"https://anvil.app","metrics":"Live revenue-generating properties"},
  {"name":"Cornucopias","desc":"Land sales + in-game economy with sustained revenue","link":"https://cornucopias.io","tags":["Revenue"],"cat":"rwa","logo":"https://cornucopias.io/logo.png","proof":"https://cornucopias.io","metrics":"Real sales revenue"},
  {"name":"Paribus","desc":"NFT financial services with real lending volume","link":"https://paribus.io","tags":["Revenue"],"cat":"rwa","logo":"https://paribus.io/logo.svg","proof":"https://paribus.io","metrics":"Live P2P volume"},
  {"name":"Lenfi","desc":"Leading lending protocol – real loan interest revenue","link":"https://lenfi.io","tags":["Revenue"],"cat":"defi","logo":"https://lenfi.io/logo.svg","proof":"https://defillama.com/protocol/lenfi","metrics":"$72M TVL • Highest lending revenue"},
  {"name":"Liqwid Finance","desc":"Liquid staking leader – highest APY with revenue","link":"https://liqwid.finance","tags":["Revenue"],"cat":"defi","logo":"https://liqwid.finance/logo.png","proof":"https://defillama.com/protocol/liqwid","metrics":"$55M TVL • Top staking revenue"},
  {"name":"Minswap","desc":"#1 Cardano DEX by volume for 4 years","link":"https://minswap.org","tags":["Revenue"],"cat":"defi","logo":"https://minswap.org/logo.png","proof":"https://defillama.com/protocol/minswap","metrics":"$45M+ TVL • Highest fees"},
  {"name":"Indigo Protocol","desc":"Real synthetics iBTC/iUSD/iETH – top revenue","link":"https://indigoprotocol.io","tags":["Revenue"],"cat":"defi","logo":"https://indigoprotocol.io/logo.svg","proof":"https://defillama.com/protocol/indigo","metrics":"$38M TVL • Leading stable volume"},
  {"name":"FluidTokens","desc":"P2P NFT lending + staking – live fees","link":"https://fluidtokens.com","tags":["Revenue"],"cat":"defi","logo":"https://fluidtokens.com/logo.svg","proof":"https://defillama.com/protocol/fluidtokens","metrics":"Real P2P revenue"},
  {"name":"Axo","desc":"Top perpetuals & spot platform – real trading revenue","link":"https://axo.trade","tags":["Revenue"],"cat":"defi","logo":"https://axo.trade/logo.svg","proof":"https://defillama.com/protocol/axo","metrics":"$31M TVL • Growing revenue"},
  {"name":"WingRiders","desc":"Top 5 DEX with farming revenue","link":"https://wingriders.com","tags":["Revenue"],"cat":"defi","logo":"https://wingriders.com/logo.png","proof":"https://defillama.com/protocol/wingriders","metrics":"Sustained volume"},
  {"name":"SundaeSwap","desc":"Original DEX still top volume","link":"https://sundaeswap.finance","tags":["Revenue"],"cat":"defi","logo":"https://sundaeswap.finance/logo.png","proof":"https://defillama.com/protocol/sundaeswap","metrics":"Top 5 revenue"},
  {"name":"VyFinance","desc":"Yield aggregator with active vaults","link":"https://vyfi.io","tags":["Revenue"],"cat":"defi","logo":"https://vyfi.io/logo.svg","proof":"https://defillama.com/protocol/vyfinance","metrics":"Live vault revenue"},
  {"name":"Levvy Finance","desc":"NFT-backed lending with volume","link":"https://levvy.fi","tags":["Revenue"],"cat":"defi","logo":"https://levvy.fi/logo.svg","proof":"https://levvy.fi","metrics":"Live loans"},
  {"name":"MuesliSwap","desc":"Multi-chain DEX with Cardano fees","link":"https://muesliswap.com","tags":["Revenue"],"cat":"defi","logo":"https://muesliswap.com/logo.svg","proof":"https://defillama.com/protocol/muesliswap","metrics":"Ongoing fees"},
  {"name":"DexHunter","desc":"Trade aggregator with premium revenue","link":"https://dexhunter.io","tags":["Revenue"],"cat":"defi","logo":"https://dexhunter.io/logo.svg","proof":"https://dexhunter.io","metrics":"Premium features"},
  {"name":"Genius Yield","desc":"Advanced yield optimizer with vaults","link":"https://geniusyield.co","tags":["Revenue"],"cat":"defi","logo":"https://geniusyield.co/logo.svg","proof":"https://defillama.com/protocol/genius-yield","metrics":"Live revenue"},
  {"name":"Meld","desc":"Crypto-fiat neobank – live loans & cards","link":"https://meld.com","twitter":"MELD_labs","tags":["Revenue"],"cat":"defi","logo":"https://meld.com/logo.svg","proof":"https://meld.com","metrics":"Real banking revenue"},
  {"name":"Revuto","desc":"Crypto subscription payments – real revenue","link":"https://revuto.com","tags":["Revenue"],"cat":"payments","logo":"https://revuto.com/logo.svg","proof":"https://revuto.com","metrics":"Active paying users"},
  {"name":"Djed","desc":"Leading over-collateralized stablecoin","link":"https://djed.xyz","tags":["Revenue"],"cat":"payments","logo":"https://djed.xyz/logo.svg","proof":"https://djed.xyz","metrics":"Highest stable adoption"},
  {"name":"Mehen USDM","desc":"Fiat-backed stablecoin with real backing","link":"https://mehen.io","tags":["Revenue"],"cat":"payments","logo":"https://mehen.io/logo.svg","proof":"https://mehen.io","metrics":"Live fiat reserves"},
  {"name":"Orcfax","desc":"Leading oracle with paid feeds","link":"https://orcfax.io","twitter":"Orcfax","tags":["Revenue","Enterprise"],"cat":"oracles","logo":"https://orcfax.io/logo.svg","proof":"https://orcfax.io/partners","metrics":"Enterprise data feeds"},
  {"name":"Charli3","desc":"Decentralized oracle with live usage","link":"https://charli3.io","tags":["Revenue"],"cat":"oracles","logo":"https://charli3.io/logo.svg","proof":"https://charli3.io","metrics":"dApp integration revenue"},
  {"name":"Atala PRISM","desc":"5M+ credentials issued worldwide","link":"https://atalaprism.io","tags":["Government","Enterprise"],"cat":"identity","logo":"https://atalaprism.io/logo.png","proof":"https://cardanofoundation.org/atala-prism","metrics":"Largest SSI deployment"},
  {"name":"Ada Handle","desc":"$handle standard – millions in sales","link":"https://adahandle.com","tags":["Revenue"],"cat":"identity","logo":"https://adahandle.com/logo.svg","proof":"https://adahandle.com","metrics":"Lifetime revenue"},
  {"name":"Lace Wallet","desc":"Official IOG wallet – millions of users","link":"https://lace.io","tags":["Revenue"],"cat":"wallets","logo":"https://lace.io/logo.png","proof":"https://lace.io","metrics":"Official wallet"},
  {"name":"Eternl","desc":"Most popular community wallet","link":"https://eternl.io","tags":["Revenue"],"cat":"wallets","logo":"https://eternl.io/logo.svg","proof":"https://eternl.io","metrics":"Top usage"},
  {"name":"Typhon Wallet","desc":"Feature-rich high adoption wallet","link":"https://typhonwallet.io","tags":["Revenue"],"cat":"wallets","logo":"https://typhonwallet.io/logo.svg","proof":"https://typhonwallet.io","metrics":"Strong user base"},
  {"name":"Vespr","desc":"Mobile-first with NFC card sales","link":"https://vespr.wallet","tags":["Revenue"],"cat":"wallets","logo":"https://vespr.wallet/logo.svg","proof":"https://vespr.wallet","metrics":"Physical product revenue"},
  {"name":"Flint Wallet","desc":"Light wallet with active users","link":"https://flint-wallet.com","tags":["Revenue"],"cat":"wallets","logo":"https://flint-wallet.com/logo.svg","proof":"https://flint-wallet.com","metrics":"Active base"},
  {"name":"Nami Wallet","desc":"Popular non-custodial wallet","link":"https://namiwallet.io","tags":["Revenue"],"cat":"wallets","logo":"https://namiwallet.io/logo.svg","proof":"https://namiwallet.io","metrics":"Still widely used"},
  {"name":"NuFi","desc":"Multi-chain wallet with Cardano revenue","link":"https://nu.fi","tags":["Revenue"],"cat":"wallets","logo":"https://nu.fi/logo.svg","proof":"https://nu.fi","metrics":"Revenue stream"},
  {"name":"Blockfrost","desc":"Dominant paid API service","link":"https://blockfrost.io","tags":["Revenue","Enterprise"],"cat":"infra","logo":"https://blockfrost.io/logo.svg","proof":"https://blockfrost.io/pricing","metrics":"Enterprise clients"},
  {"name":"Maestro","desc":"High-performance dApp platform","link":"https://maestro.io","tags":["Revenue"],"cat":"infra","logo":"https://maestro.io/logo.svg","proof":"https://maestro.io","metrics":"Paid tiers"},
  {"name":"Demeter.run","desc":"Cardano cloud hosting","link":"https://demeter.run","tags":["Revenue"],"cat":"infra","logo":"https://demeter.run/logo.svg","proof":"https://demeter.run","metrics":"Paid plans"},
  {"name":"MeshJS","desc":"Most used dev toolkit","link":"https://meshjs.dev","tags":["Revenue"],"cat":"infra","logo":"https://meshjs.dev/logo.svg","proof":"https://meshjs.dev","metrics":"Sponsorships"},
  {"name":"TapTools","desc":"Leading analytics with Pro","link":"https://taptools.pro","tags":["Revenue"],"cat":"infra","logo":"https://taptools.pro/logo.svg","proof":"https://taptools.pro","metrics":"Paid Pro tier"},
  {"name":"JPG.store","desc":"Dominant NFT marketplace","link":"https://jpg.store","tags":["Revenue"],"cat":"nft","logo":"https://jpg.store/logo.png","proof":"https://jpg.store/stats","metrics":"Highest NFT volume"},
  {"name":"Tokhun","desc":"NFT minting platform","link":"https://tokhun.io","tags":["Revenue"],"cat":"nft","logo":"https://tokhun.io/logo.svg","proof":"https://tokhun.io","metrics":"Sustained revenue"},
  {"name":"Scantrust","desc":"Supply chain for luxury brands","link":"https://scantrust.com","tags":["Enterprise"],"cat":"rwa","logo":"https://scantrust.com/logo.png","proof":"https://nmkr.io/case-studies","metrics":"Live with Clarins"},
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

// No fetch needed anymore

const count = projects.length;
const dateStr = "November 20, 2025";

document.getElementById('update-date').textContent = dateStr;
document.getElementById('project-count').textContent = `${count} projects that actually matter`;
document.getElementById('searchInput').placeholder = `Search ${count} verified projects...`;

renderHallOfFame();
renderTabs();
setupSearch();
document.querySelectorAll('.skeleton').forEach(el => el.remove());

// ... rest of the functions (renderHallOfFame, renderTabs, setupSearch, setupSearch, themeToggle, copyBtn, visitor fetch) remain exactly the same as my last message

// (paste the functions from my previous message here – they are unchanged)
      
