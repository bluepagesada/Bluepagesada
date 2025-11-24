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
                            The strict real-world Cardano directory.<br className="d-none d-md-block" />
                            Only projects with revenue, real users, or enterprise contracts. Proof required.
                        </p>

                        <p className="fs-5 mb-5 opacity-90">
                            As of <span id="update-date"></span> – <strong id="project-count">0 projects</strong> – verified daily
                        </p>

                        <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                            <a href="#projects" className="btn btn-primary btn-lg px-5 py-3 fw-semibold">View Projects</a>
                            <a href="#submit" className="btn btn-outline-light btn-lg px-5 py-3 fw-semibold">Submit Project</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* METRICS DASHBOARD */}
        <section className="py-5 bg-light bg-opacity-10">
            <div className="container">
                <h2 className="text-center mb-5 fw-bold fs-2">Cardano at a Glance <small className="text-muted">(Nov 23, 2025)</small></h2>
                <div id="metrics-grid" className="row g-4 justify-content-center"></div>
            </div>
        </section>

        {/* MAIN NAV TABS */}
        <div className="container my-5">
            <ul className="nav nav-tabs nav-fill border-0 shadow-sm rounded" id="mainTabs" role="tablist">
                <li className="nav-item" role="presentation">
                    <button className="nav-link active fs-4 fw-semibold" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab">Home</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link fs-4 fw-semibold" id="projects-tab" data-bs-toggle="tab" data-bs-target="#projects" type="button" role="tab">Projects</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link fs-4 fw-semibold" id="submit-tab" data-bs-toggle="tab" data-bs-target="#submit" type="button" role="tab">Submit</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link fs-4 fw-semibold" id="about-tab" data-bs-toggle="tab" data-bs-target="#about" type="button" role="tab">About</button>
                </li>
            </ul>

            <div className="tab-content border-0 shadow-sm rounded-bottom p-4 mt-0" id="mainTabContent">
                {/* HOME TAB */}
                <div className="tab-pane fade show active" id="home" role="tabpanel">
                    <div className="row g-4">
                        <div className="col-lg-8">
                            <h3 className="fw-bold mb-4">Why Blue Pages?</h3>
                            <p className="lead">Cardano's ecosystem is flooded with hype. We're here to cut through it.</p>
                            <ul className="list-unstyled">
                                <li className="mb-3"><i className="bi bi-check-circle-fill text-success me-2"></i><strong>Strict Curation:</strong> Revenue proof, real mainnet users, or verifiable contracts. No exceptions.</li>
                                <li className="mb-3"><i className="bi bi-check-circle-fill text-success me-2"></i><strong>Daily Updates:</strong> JSON-driven. One edit = live changes. No caveman HTML.</li>
                                <li className="mb-3"><i className="bi bi-check-circle-fill text-success me-2"></i><strong>Real Impact Focus:</strong> Sorted by proven utility, not market cap theater.</li>
                            </ul>
                            <hr />
                            <h5 className="fw-bold">Quick Stats</h5>
                            <div className="row g-3 mb-4">
                                <div className="col-md-4">
                                    <div className="text-center p-3 bg-primary bg-opacity-10 rounded">
                                        <div className="fs-1 fw-bold text-primary" id="home-project-count">0</div>
                                        <div className="text-muted">Projects Listed</div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="text-center p-3 bg-success bg-opacity-10 rounded">
                                        <div className="fs-1 fw-bold text-success">71%</div>
                                        <div className="text-muted">ADA Staked</div>
                                    </div>
                                </div>
                                <div className="col-md-4">
                                    <div className="text-center p-3 bg-info bg-opacity-10 rounded">
                                        <div className="fs-1 fw-bold text-info">185M</div>
                                        <div className="text-muted">DeFi TVL</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4">
                            <h5 className="fw-bold mb-3">Top Categories</h5>
                            <ul className="list-group list-group-flush">
                                <li className="list-group-item bg-transparent border-0 py-2"><span className="badge bg-primary rounded-pill me-2">DePIN</span> 12 projects</li>
                                <li className="list-group-item bg-transparent border-0 py-2"><span className="badge bg-success rounded-pill me-2">RWA</span> 10 projects</li>
                                <li className="list-group-item bg-transparent border-0 py-2"><span className="badge bg-warning rounded-pill me-2">DeFi</span> 8 projects</li>
                                <li className="list-group-item bg-transparent border-0 py-2"><span className="badge bg-info rounded-pill me-2">Identity</span> 5 projects</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* PROJECTS TAB */}
                <div className="tab-pane fade" id="projects" role="tabpanel">
                    {/* SEARCH & SORT */}
                    <div className="row mb-4 align-items-center">
                        <div className="col-md-5">
                            <div className="input-group">
                                <span className="input-group-text bg-transparent border-0"><i className="bi bi-search text-muted"></i></span>
                                <input type="text" id="searchInput" className="form-control bg-transparent border-0 ps-0" placeholder="Search all projects..." />
                            </div>
                        </div>
                        <div className="col-md-3">
                            <select id="sortSelect" className="form-select bg-transparent border-0 text-end">
                                <option value="impact">Sort by Impact</option>
                                <option value="name">Sort by Name</option>
                                <option value="tvl">Sort by TVL</option>
                            </select>
                        </div>
                        <div className="col-md-4 text-md-end">
                            <div id="projectsFound" className="text-muted small">55 projects found</div>
                        </div>
                    </div>

                    {/* CATEGORY TABS */}
                    <ul className="nav nav-pills mb-4 justify-content-center flex-wrap gap-2" id="categoryTabs">
                        <li className="nav-item">
                            <a className="nav-link active" href="#" data-cat="all">All <span className="text-muted small">(55)</span></a>
                        </li>
                        <li className="nav-item"><a className="nav-link" data-cat="depin">DePIN & Connectivity <span className="text-muted small">(12)</span></a></li>
                        <li className="nav-item"><a className="nav-link" data-cat="rwa">Real-World Assets <span className="text-muted small">(10)</span></a></li>
                        <li className="nav-item"><a className="nav-link" data-cat="defi">DeFi <span className="text-muted small">(8)</span></a></li>
                        <li className="nav-item"><a className="nav-link" data-cat="payments">Payments <span className="text-muted small">(4)</span></a></li>
                        <li className="nav-item"><a className="nav-link" data-cat="oracles">Oracles <span className="text-muted small">(3)</span></a></li>
                        <li className="nav-item"><a className="nav-link" data-cat="identity">Digital Identity <span className="text-muted small">(5)</span></a></li>
                        <li className="nav-item"><a className="nav-link" data-cat="wallets">Wallets <span className="text-muted small">(2)</span></a></li>
                        <li className="nav-item"><a className="nav-link" data-cat="infra">Infrastructure <span className="text-muted small">(6)</span></a></li>
                        <li className="nav-item"><a className="nav-link" data-cat="nft">NFT Platforms <span className="text-muted small">(3)</span></a></li>
                        <li className="nav-item"><a className="nav-link" data-cat="gaming">Gaming <span className="text-muted small">(2)</span></a></li>
                        <li className="nav-item"><a className="nav-link" data-cat="other">Other <span className="text-muted small">(0)</span></a></li>
                    </ul>

                    {/* PROJECTS GRID */}
                    <div id="projectsGrid" className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4"></div>
                </div>

                {/* SUBMIT TAB */}
                <div className="tab-pane fade" id="submit" role="tabpanel">
                    <div className="row justify-content-center">
                        <div className="col-md-8 col-lg-6">
                            <h3 className="fw-bold mb-4 text-center">Submit a Project</h3>
                            <p className="text-center text-muted mb-4">Meet our bar? We'll review in 48h. Proof mandatory.</p>
                            <form id="submitForm">
                                <div className="mb-3">
                                    <label className="form-label">Project Name *</label>
                                    <input type="text" className="form-control" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Category</label>
                                    <select className="form-select">
                                        <option>DePIN & Connectivity</option>
                                        <option>Real-World Assets</option>
                                        <option>DeFi</option>
                                        {/* ... other options ... */}
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Website *</label>
                                    <input type="url" className="form-control" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Twitter Handle</label>
                                    <input type="text" className="form-control" placeholder="@handle" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Short Description (100 chars max) *</label>
                                    <textarea className="form-control" rows="3" maxLength="100" required></textarea>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Proof of Revenue/Users/Contracts (URL) *</label>
                                    <input type="url" className="form-control" placeholder="e.g., DefiLlama, blog post, contract PDF" required />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Logo URL (optional)</label>
                                    <input type="url" className="form-control" />
                                </div>
                                <button type="submit" className="btn btn-primary w-100 py-3 fw-bold">Submit for Review</button>
                            </form>
                            <div id="submitFeedback" className="mt-3 text-center d-none">
                                <div className="alert alert-success">Submitted! We'll review soon.</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ABOUT TAB */}
                <div className="tab-pane fade" id="about" role="tabpanel">
                    <div className="row g-4">
                        <div className="col-lg-8">
                            <h3 className="fw-bold mb-4">The Only Directory That Matters</h3>
                            <p className="lead">Built for builders. By someone who's seen too much bullshit.</p>
                            <p>Blue Pages is the anti-hype filter Cardano needed. We reject 99% of submissions because <em>proof or GTFO</em>. Curated daily, JSON-powered, and zero-compromise.</p>
                            <hr />
                            <h5 className="fw-bold">Curation Rules</h5>
                            <ul className="list-unstyled">
                                <li className="mb-2"><strong>Revenue:</strong> On-chain fees, off-chain contracts, or verifiable sales. Show receipts.</li>
                                <li className="mb-2"><strong>Users:</strong> Mainnet active wallets or DAUs. Testnet doesn't count.</li>
                                <li className="mb-2"><strong>Adoption:</strong> Signed gov/enterprise deals. Public proof only.</li>
                            </ul>
                            <p className="text-muted small">Maintained by <a href="https://twitter.com/BluePagesADA">@BluePagesADA</a>. Donations fuel the fire: <code className="bg-dark p-1 rounded">addr1qx9c4qr8lpp73lxz2z80jgdme9ua22096d8kdhf0249jv5qgpe74yz745c80rht0pm0zrahhudcccgawzvxvg4lc59ks7fw8yq</code></p>
                        </div>
                        <div className="col-lg-4">
                            <div className="card h-100 border-0 shadow">
                                <div className="card-body text-center p-4">
                                    <i className="bi bi-shield-check fs-1 text-primary mb-3"></i>
                                    <h5 className="card-title fw-bold">Zero Tolerance</h5>
                                    <p className="card-text text-muted">No memecoins. No vaporware. No paid listings. Ever.</p>
                                    <div className="mt-3">
                                        <small className="text-muted">Visitors: <span id="visitor-count">0</span></small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {/* FOOTER */}
        <footer className="bg-dark text-white py-5 mt-auto">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <h5 className="fw-bold mb-3">Blue Pages</h5>
                        <p className="text-muted small">The strict Cardano directory. Updated: <span id="footer-update-date"></span></p>
                        <p className="text-muted small mb-0">© 2025 Blue Pages. All rights reserved.</p>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <h6 className="fw-bold mb-3">Support Us</h6>
                        <div className="d-flex align-items-center justify-content-end mb-3">
                            <img src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUyIiBoZWlnaHQ9IjE1MiIgdmlld0JveD0iMCAwIDE1MiAxNTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjxyZWN0IHdpZHRoPSIxNTIiIGhlaWdodD0iMTUyIiBmaWxsPSIjRkZGRkZGIi8+CjxwYXRoIGQ9Ik0xNiAxNkwxMzYgMTZIMTYgMTZaIiBzdHJva2U9IiMwMEI4RkYiIHN0cm9rZS13aWR0aD0iNCIvPgo8L3N2Zz4K" alt="ADA QR" className="me-2" style={{width: '40px', height: '40px'}} />
                            <div>
                                <small className="text-muted d-block mb-1">Donate ADA</small>
                                <button id="copyBtn" className="btn btn-outline-light btn-sm">Copy Address</button>
                                <span id="copyFeedback" className="text-success small ms-2 opacity-0">Copied!</span>
                            </div>
                        </div>
                        <div className="text-muted small">
                            <a href="https://twitter.com/BluePagesADA" className="text-white me-3"><i className="bi bi-twitter"></i></a>
                            <a href="https://github.com/bluepagesada/Bluepagesada" className="text-white me-3"><i className="bi bi-github"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
      </body>

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
      <Script src="/script.js" strategy="afterInteractive" />
    </>
  );
}
