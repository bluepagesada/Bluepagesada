import Head from 'next/head';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Head>
        <title>Blue Pages – Cardano Utility Directory</title>
        <meta name="description" content="Blue Pages – The strict real-world Cardano project directory. Only projects with revenue, real users, or enterprise adoption. No hype. No memecoins." />
        <meta property="og:title" content="Blue Pages – Cardano Utility Directory" />
        <meta property="og:description" content="The only Cardano directory that actually matters." />
        <meta property="og:image" content="https://bluepagesada.github.io/Bluepagesada/og-preview.jpg" />
        <meta property="og:url" content="https://bluepagesada.github.io/Bluepagesada/" />
        <meta name="theme-color" content="#002D72" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 220 220'><defs><linearGradient id='bluegrad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%230033AD'/><stop offset='100%' stop-color='%2300D4FF'/></linearGradient></defs><g filter='url(%23shadow)'><path d='M110 20 L200 80 L200 140 L110 200 L20 140 L20 80 Z' fill='url(%23bluegrad)' stroke='%23002D5A' stroke-width='6'/><path d='M110 60 L170 100 L170 120 L110 160 L50 120 L50 100 Z' fill='white'/><path d='M110 80 L145 110 L110 140 L75 110 Z' fill='%23002D5A'/></g><defs><filter id='shadow' x='-50%' y='-50%' width='200%' height='200%'><feGaussianBlur in='SourceAlpha' stdDeviation='10'/><feOffset dx='0' dy='15' result='offsetblur'/><feFlood flood-color='rgba(0,0,0,0.6)'/><feComposite in2='offsetblur' operator='in'/><feMerge><feMergeNode/><feMergeNode in='SourceGraphic'/></feMerge></filter></defs></svg>" />
      </Head>
      <body className=" d-flex flex-column min-vh-100">
        {/* TOP RIGHT THEME TOGGLE */}
        <div className="position-fixed top-0 end-0 p-3 z-3">
            <button id="themeToggle" className="btn btn-outline-light rounded-circle p-3 shadow-lg">
                <i className="bi bi-sun-fill"></i>
            </button>
        </div>
        {/* HERO */}
        <section className="hero text-center text-white d-flex align-items-center min-vh-100">
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-10 col-xxl-8">
                        {/* Logo */}
                        <div className="text-center mb-4">
                            <svg width="220" height="220" viewBox="0 0 220 220" className="hero-logo" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="bluegrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                        <stop offset="0%" stop-color="#0033AD"/>
                                        <stop offset="100%" stop-color="#00D4FF"/>
                                    </linearGradient>
                                </defs>
                                <g filter="url(#shadow)">
                                    <path d="M110 20 L200 80 L200 140 L110 200 L20 140 L20 80 Z" fill="url(#bluegrad)" stroke="#002D5A" stroke-width="6"/>
                                    <path d="M110 60 L170 100 L170 120 L110 160 L50 120 L50 100 Z" fill="white"/>
                                    <path d="M110 80 L145 110 L110 140 L75 110 Z" fill="#002D5A"/>
                                </g>
                                <defs>
                                    <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                                        <feGaussianBlur in="SourceAlpha" stdDeviation="10"/>
                                        <feOffset dx="0" dy="15" result="offsetblur"/>
                                        <feFlood flood-color="rgba(0,0,0,0.6)"/>
                                        <feComposite in2="offsetblur" operator="in"/>
                                        <feMerge>
                                            <feMergeNode/>
                                            <feMergeNode in="SourceGraphic"/>
                                        </feMerge>
                                    </filter>
                                </defs>
                            </svg>
                        </div>

                        <h1 className="display-1 fw-bold mb-3">
                            Blue<span className="fw-light">Pages</span>
                        </h1>

                        <p id="splash-text" className="fs-4 mb-5 opacity-90 fw-medium"></p>

                        <p className="lead fw-medium mb-4 opacity-95">
                            The strict real-world Cardano directory.<br className="d-none d-md-block">
                            Only projects with revenue, real users, or enterprise contracts. Proof required.
                        </p>

                        <p className="fs-5 mb-5 opacity-90">
                            As of <span id="update-date"></span> – <strong id="project-count">0 projects</strong> – verified daily
                        </p>
                    </div>
                </div>
            </div>
        </section>
        {/* MAIN NAV TABS */}
        <div className="container my-5">
            <ul className="nav nav-tabs nav-fill border-0 shadow-sm rounded" id="mainTabs" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active fs-4 fw-semibold" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button">Home</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link fs-4 fw-semibold" id="projects-tab" data-bs-toggle="tab" data-bs-target="#projectsTab" type="button">Projects</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link fs-4 fw-semibold" id="quests-tab" data-bs-toggle="tab" data-bs-target="#quests" type="button">Quests</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link fs-4 fw-semibold" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button">Contact</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link fs-4 fw-semibold" id="coming-tab" data-bs-toggle="tab" data-bs-target="#coming" type="button">Coming Soon</button>
                </li>
            </ul>
        </div>
        {/* TAB CONTENT */}
        <div className="tab-content" id="mainTabContent">
            {/* HOME TAB */}
            <div className="tab-pane fade show active" id="home" role="tabpanel">
                <div className="container py-5">
                    <div className="row justify-content-center text-center">
                        <div className="col-lg-10">
                            <h2 className="display-5 fw-bold mb-4">The Real Cardano</h2>
                            <p className="lead mb-5">Blue Pages is the strictest directory of Cardano projects with proven real-world impact.<br>Revenue, users, or enterprise/government adoption required. Everything else is removed.</p>
                            <p className="fs-5 mb-5 text-muted">No hype. No memecoins. No vaporware. Only what actually works.</p>
                            <div className="row g-5 mb-5">
                                <div className="col-md-4">
                                    <div className="h1 fw-bold text-primary" id="home-project-count">0</div>
                                    <p className="fs-5">Verified Projects</p>
                                </div>
                                <div className="col-md-4">
                                    <div className="h1 fw-bold text-primary">5M+</div>
                                    <p className="fs-5">Real Credentials Issued (Atala PRISM)</p>
                                </div>
                                <div className="col-md-4">
                                    <div className="h1 fw-bold text-primary">$423M+</div>
                                    <p className="fs-5">Real TVL Across Protocols</p>
                                </div>
                            </div>
                            <div className="row g-5">
                                <div className="col-md-6">
                                    <h3 className="h4 fw-bold mb-3">About Blue Pages</h3>
                                    <p className="text-muted">Launched in 2024, Blue Pages is the only Cardano directory that removes projects when they stop shipping. Every entry is manually verified using public data. No paid listings. No exceptions. Curated daily by @BluePagesADA.</p>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="h4 fw-bold mb-3">Why Cardano Matters</h3>
                                    <p className="text-muted">Cardano is the only layer-1 blockchain built on peer-reviewed research, designed for security, sustainability, and real-world use. From government digital identity in Ethiopia to enterprise supply chain with Lufthansa and Scantrust, Cardano is quietly executing while others chase hype.</p>
                                </div>
                            </div>
                            <div className="text-center mt-5">
                                <p className="fs-5 text-muted">The filter Cardano needed.<br>The directory Cardano deserves.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* PROJECTS TAB */}
            <div className="tab-pane fade" id="projectsTab" role="tabpanel">
                <div className="container py-4">
                    {/* Search + Sort */}
                    <div className="row g-3 align-items-center mb-5">
                        <div className="col-lg-8">
                            <input type="text" id="searchInput" className="form-control form-control-lg rounded-pill shadow-sm" placeholder="Search all projects..." autoComplete="off" />
                        </div>
                        <div className="col-lg-4">
                            <select id="sortSelect" className="form-select form-select-lg rounded-pill shadow-sm">
                                <option value="impact">Sort: Impact Score</option>
                                <option value="name">Name (A-Z)</option>
                                <option value="tvl">Highest TVL/Revenue</option>
                            </select>
                        </div>
                    </div>
                    {/* Category Pills */}
                    <ul className="nav nav-pills justify-content-center gap-3 mb-5 flex-wrap" id="categoryTabs">
                        <li className="nav-item"><a className="nav-link active" data-cat="all">All</a></li>
                        <li className="nav-item"><a className="nav-link" data-cat="depin">DePIN & Connectivity</a></li>
                        <li className="nav-item"><a className="nav-link" data-cat="rwa">Real-World Assets & Tokenization</a></li>
                        <li className="nav-item"><a className="nav-link" data-cat="defi">Finance & Real-Yield DeFi</a></li>
                        <li className="nav-item"><a className="nav-link" data-cat="payments">Payments & Stablecoins</a></li>
                        <li className="nav-item"><a className="nav-link" data-cat="identity">Digital Identity</a></li>
                        <li className="nav-item"><a className="nav-link" data-cat="wallets">Wallets</a></li>
                        <li className="nav-item"><a className="nav-link" data-cat="infra">Infrastructure & Dev Tools</a></li>
                        <li className="nav-item"><a className="nav-link" data-cat="nft">NFT & Tokenization Platforms</a></li>
                        <li className="nav-item"><a className="nav-link" data-cat="gaming">Gaming & Metaverse</a></li>
                        <li className="nav-item"><a className="nav-link" data-cat="other">Other</a></li>
                    </ul>
                    {/* Loading Skeleton – 12 full placeholder cards */}
                    <div id="loadingSkeleton" className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                        <div className="col"><div className="card h-100"><div className="card-body placeholder-glow"><div className="d-flex align-items-start mb-3"><div className="bg-secondary rounded me-3" style={{width: '64px', height: '64px'}}></div><div><span className="placeholder col-8"></span><br/><span className="placeholder col-6"></span></div></div><span className="placeholder col-12"></span><br/><span className="placeholder col-11"></span><br/><span className="placeholder col-10"></span><br/><span className="placeholder col-7"></span></div></div></div>
                        <div className="col"><div className="card h-100"><div className="card-body placeholder-glow"><div className="d-flex align-items-start mb-3"><div className="bg-secondary rounded me-3" style={{width: '64px', height: '64px'}}></div><div><span className="placeholder col-8"></span><br/><span className="placeholder col-6"></span></div></div><span className="placeholder col-12"></span><br/><span className="placeholder col-11"></span><br/><span className="placeholder col-10"></span><br/><span className="placeholder col-7"></span></div></div></div>
                        <div className="col"><div className="card h-100"><div className="card-body placeholder-glow"><div className="d-flex align-items-start mb-3"><div className="bg-secondary rounded me-3" style={{width: '64px', height: '64px'}}></div><div><span className="placeholder col-8"></span><br/><span className="placeholder col-6"></span></div></div><span className="placeholder col-12"></span><br/><span className="placeholder col-11"></span><br/><span className="placeholder col-10"></span><br/><span className="placeholder col-7"></span></div></div></div>
                        <div className="col"><div className="card h-100"><div className="card-body placeholder-glow"><div className="d-flex align-items-start mb-3"><div className="bg-secondary rounded me-3" style={{width: '64px', height: '64px'}}></div><div><span className="placeholder col-8"></span><br/><span className="placeholder col-6"></span></div></div><span className="placeholder col-12"></span><br/><span className="placeholder col-11"></span><br/><span className="placeholder col-10"></span><br/><span className="placeholder col-7"></span></div></div></div>
                        <div className="col"><div className="card h-100"><div className="card-body placeholder-glow"><div className="d-flex align-items-start mb-3"><div className="bg-secondary rounded me-3" style={{width: '64px', height: '64px'}}></div><div><span className="placeholder col-8"></span><br/><span className="placeholder col-6"></span></div></div><span className="placeholder col-12"></span><br/><span className="placeholder col-11"></span><br/><span className="placeholder col-10"></span><br/><span className="placeholder col-7"></span></div></div></div>
                        <div className="col"><div className="card h-100"><div className="card-body placeholder-glow"><div className="d-flex align-items-start mb-3"><div className="bg-secondary rounded me-3" style={{width: '64px', height: '64px'}}></div><div><span className="placeholder col-8"></span><br/><span className="placeholder col-6"></span></div></div><span className="placeholder col-12"></span><br/><span className="placeholder col-11"></span><br/><span className="placeholder col-10"></span><br/><span className="placeholder col-7"></span></div></div></div>
                        <div className="col"><div className="card h-100"><div className="card-body placeholder-glow"><div className="d-flex align-items-start mb-3"><div className="bg-secondary rounded me-3" style={{width: '64px', height: '64px'}}></div><div><span className="placeholder col-8"></span><br/><span className="placeholder col-6"></span></div></div><span className="placeholder col-12"></span><br/><span className="placeholder col-11"></span><br/><span className="placeholder col-10"></span><br/><span className="placeholder col-7"></span></div></div></div>
                        <div className="col"><div className="card h-100"><div className="card-body placeholder-glow"><div className="d-flex align-items-start mb-3"><div className="bg-secondary rounded me-3" style={{width: '64px', height: '64px'}}></div><div><span className="placeholder col-8"></span><br/><span className="placeholder col-6"></span></div></div><span className="placeholder col-12"></span><br/><span className="placeholder col-11"></span><br/><span className="placeholder col-10"></span><br/><span className="placeholder col-7"></span></div></div></div>
                        <div className="col"><div className="card h-100"><div className="card-body placeholder-glow"><div className="d-flex align-items-start mb-
