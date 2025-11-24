import Head from 'next/head';
import Script from 'next/script';

export default function Home() {
  return (
    <>
      <Head>
        <title>Blue Pages – Cardano Real-World Utility Directory</title>
        <meta name="description" content="Blue Pages – The strict real-world Cardano project directory. Only projects with revenue, real users, or government/enterprise adoption. No hype. No memecoins." />
        <meta property="og:title" content="Blue Pages – Cardano Real-World Utility Directory" />
        <meta property="og:description" content="The only Cardano directory that actually matters." />
        <meta property="og:image" content="https://bluepagesada.github.io/Bluepagesada/og-preview.jpg" />
        <meta property="og:url" content="https://bluepagesada.github.io/Bluepagesada/" />
        <meta name="theme-color" content="#002D72" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 220 220'><defs><linearGradient id='bluegrad' x1='0%' y1='0%' x2='100%' y2='100%'><stop offset='0%' stop-color='%230033AD'/><stop offset='100%' stop-color='%2300D4FF'/></linearGradient></defs><g filter='url(%23shadow)'><path d='M110 20 L200 80 L200 140 L110 200 L20 140 L20 80 Z' fill='url(%23bluegrad)' stroke='%23002D5A' stroke-width='6'/><path d='M110 60 L170 100 L170 120 L110 160 L50 120 L50 100 Z' fill='white'/><path d='M110 80 L145 110 L110 140 L75 110 Z' fill='%23002D5A'/></g><defs><filter id='shadow' x='-50%' y='-50%' width='200%' height='200%'><feGaussianBlur in='SourceAlpha' stdDeviation='10'/><feOffset dx='0' dy='15' result='offsetblur'/><feFlood flood-color='rgba(0,0,0,0.6)'/><feComposite in2='offsetblur' operator='in'/><feMerge><feMergeNode/><feMergeNode in='SourceGraphic'/></feMerge></filter></defs></svg>" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css" />
        <link rel="stylesheet" href="/style.css" />
      </Head>

      <main className="d-flex flex-column min-vh-100">
        {/* Theme Toggle */}
        <div className="position-fixed top-0 end-0 p-3 z-3">
          <button id="themeToggle" className="btn btn-outline-light rounded-circle p-3 shadow-lg">
            <i className="bi bi-moon-stars-fill"></i>
          </button>
        </div>

        {/* Hero - Exact Old */}
        <section className="hero text-center text-white d-flex align-items-center min-vh-100">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-lg-10 col-xxl-8">
                <div className="text-center mb-4">
                  <svg width="220" height="220" viewBox="0 0 220 220" className="hero-logo" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <linearGradient id="bluegrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#0033AD" />
                        <stop offset="100%" stopColor="#00D4FF" />
                      </linearGradient>
                    </defs>
                    <g filter="url(#shadow)">
                      <path d="M110 20 L200 80 L200 140 L110 200 L20 140 L20 80 Z" fill="url(#bluegrad)" stroke="#002D5A" strokeWidth="6" />
                      <path d="M110 60 L170 100 L170 120 L110 160 L50 120 L50 100 Z" fill="white" />
                      <path d="M110 80 L145 110 L110 140 L75 110 Z" fill="#002D5A" />
                    </g>
                    <defs>
                      <filter id="shadow" x="-50%" y="-50%" width="200%" height="200%">
                        <feGaussianBlur in="SourceAlpha" stdDeviation="10" />
                        <feOffset dx="0" dy="15" result="offsetblur" />
                        <feFlood floodColor="rgba(0,0,0,0.5)" />
                        <feComposite in2="offsetblur" operator="in" />
                        <feMerge>
                          <feMergeNode />
                          <feMergeNode in="SourceGraphic" />
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
                  As of <span id="update-date">November 23, 2025</span> – <strong id="project-count">71 projects</strong> – verified daily
                </p>
                <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center">
                  <a href="#projects" className="btn btn-primary btn-lg px-5 py-3 fw-semibold">View Projects</a>
                  <button className="btn btn-outline-light btn-lg px-5 py-3 fw-semibold" data-bs-toggle="modal" data-bs-target="#submitModal">Submit Project</button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Metrics - Old Static Fallback */}
        <section className="py-5 bg-light bg-opacity-10">
          <div className="container">
            <h2 className="text-center mb-5 fw-bold fs-2">Cardano at a Glance <small className="text-muted">(November 23, 2025)</small></h2>
            <div id="metrics-grid" className="row g-4 justify-content-center"></div>
          </div>
        </section>

        {/* Tabs - Old Layout */}
        <div className="container my-5 flex-grow-1">
          <ul className="nav nav-tabs nav-fill border-0 shadow-sm rounded mb-4" id="mainTabs" role="tablist">
            <li className="nav-item" role="presentation">
              <button className="nav-link active fs-4 fw-semibold" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab">Home</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link fs-4 fw-semibold" id="projects-tab" data-bs-toggle="tab" data-bs-target="#projects" type="button" role="tab">Projects</button>
            </li>
            <li className="nav-item" role="presentation">
              <button className="nav-link fs-4 fw-semibold" id="about-tab" data-bs-toggle="tab" data-bs-target="#about" type="button" role="tab">About</button>
            </li>
          </ul>
          <div className="tab-content border-0 shadow-sm rounded p-4" id="mainTabContent">
            {/* Home Tab - Old Content */}
            <div className="tab-pane fade show active" id="home" role="tabpanel">
              <div className="row g-4">
                <div className="col-lg-8">
                  <h3 className="fw-bold mb-4">Why Blue Pages?</h3>
                  <p className="lead">Cardano's ecosystem is flooded with hype. We're here to cut through it.</p>
                  <ul className="list-unstyled">
                    <li className="mb-3"><i className="bi bi-check-circle-fill text-success me-2"></i><strong>Strict Curation:</strong> Revenue proof, real mainnet users, or verifiable contracts. No exceptions.</li>
                    <li className="mb-3"><i className="bi bi-check-circle-fill text-success me-2"></i><strong>Daily Updates:</strong> JSON-driven. One edit = live changes.</li>
                    <li className="mb-3"><i className="bi bi-check-circle-fill text-success me-2"></i><strong>Real Impact Focus:</strong> Sorted by proven utility.</li>
                  </ul>
                  <div className="card border-primary shadow-sm mt-4">
                    <div className="card-body">
                      <h4 className="card-title mb-3">Blue Pages Verification Standard (November 23, 2025)</h4>
                      <p>Every project must have <strong>at least one</strong> of the following, publicly verifiable:</p>
                      <ul className="list-unstyled">
                        <li>• Real revenue (protocol fees, paid APIs, sales) – source: DefiLlama or official financials</li>
                        <li>• Real users/TVL on mainnet – DefiLlama TVL > $1M or verified user metrics</li>
                        <li>• Government or enterprise adoption – signed contract, live deployment, or official announcement</li>
                      </ul>
                      <p className="mb-0">All data manually checked by @BluePagesADA. Projects are removed the day they no longer qualify. No exceptions.</p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4">
                  <h5 className="fw-bold mb-3">Quick Stats</h5>
                  <div className="row g-3 mb-4">
                    <div className="col-12">
                      <div className="text-center p-3 bg-primary bg-opacity-10 rounded">
                        <div className="fs-1 fw-bold text-primary" id="home-project-count">71</div>
                        <div className="text-muted">Projects Listed</div>
                      </div>
                    </div>
                  </div>
                  <h6 className="fw-bold mb-2">Top Categories</h6>
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item bg-transparent border-0 py-2"><span className="badge bg-primary rounded-pill me-2">DePIN</span> 15 projects</li>
                    <li className="list-group-item bg-transparent border-0 py-2"><span className="badge bg-success rounded-pill me-2">RWA</span> 12 projects</li>
                    <li className="list-group-item bg-transparent border-0 py-2"><span className="badge bg-warning rounded-pill me-2">DeFi</span> 10 projects</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Projects Tab - Old Grid + Skeleton */}
            <div className="tab-pane fade" id="projects" role="tabpanel">
              <div className="row mb-4 align-items-center">
                <div className="col-md-5">
                  <div className="input-group">
                    <span className="input-group-text bg-transparent border-0"><i className="bi bi-search text-muted"></i></span>
                    <input type="text" id="searchInput" className="form-control bg-transparent border-0 ps-0" placeholder="Search all 71 projects..." />
                  </div>
                </div>
                <div className="col-md-3">
                  <select id="sortSelect" className="form-select bg-transparent border-0 text-end">
                    <option value="impact">Sort by Impact</option>
                    <option value="name">Sort by Name</option>
                  </select>
                </div>
                <div className="col-md-4 text-md-end">
                  <div id="projectsFound" className="text-muted small">71 projects found</div>
                </div>
              </div>
              <ul className="nav nav-pills mb-4 justify-content-center flex-wrap gap-2" id="categoryTabs">
                <li className="nav-item"><a className="nav-link active" href="#" data-cat="all">All (71)</a></li>
                <li className="nav-item"><a className="nav-link" data-cat="depin">DePIN & Connectivity (15)</a></li>
                <li className="nav-item"><a className="nav-link" data-cat="rwa">Real-World Assets (12)</a></li>
                <li className="nav-item"><a className="nav-link" data-cat="defi">DeFi (10)</a></li>
                <li className="nav-item"><a className="nav-link" data-cat="payments">Payments (4)</a></li>
                <li className="nav-item"><a className="nav-link" data-cat="oracles">Oracles (3)</a></li>
                <li className="nav-item"><a className="nav-link" data-cat="identity">Digital Identity (5)</a></li>
                <li className="nav-item"><a className="nav-link" data-cat="wallets">Wallets (2)</a></li>
                <li className="nav-item"><a className="nav-link" data-cat="infra">Infrastructure (6)</a></li>
                <li className="nav-item"><a className="nav-link" data-cat="nft">NFT Platforms (3)</a></li>
                <li className="nav-item"><a className="nav-link" data-cat="gaming">Gaming (2)</a></li>
                <li className="nav-item"><a className="nav-link" data-cat="other">Other (0)</a></li>
              </ul>
              <div id="projectsGrid" className="row row-cols-1 row-cols-md-2 row-cols-lg-4 g-4">
                {/* 8 Skeleton Cards - Old Style */}
                {Array.from({ length: 8 }, (_, i) => (
                  <div key={i} className="col">
                    <div className="card h-100">
                      <div className="card-body placeholder-glow">
                        <div className="d-flex align-items-start mb-3">
                          <div className="bg-secondary rounded me-3" style={{ width: '64px', height: '64px' }}></div>
                          <div>
                            <span className="placeholder col-8"></span>
                            <br />
                            <span className="placeholder col-6"></span>
                          </div>
                        </div>
                        <span className="placeholder col-12"></span>
                        <br />
                        <span className="placeholder col-11"></span>
                        <br />
                        <span className="placeholder col-10"></span>
                        <br />
                        <span className="placeholder col-7"></span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* About Tab - Old */}
            <div className="tab-pane fade" id="about" role="tabpanel">
              <div className="row g-4">
                <div className="col-lg-8">
                  <h3 className="fw-bold mb-4">The Only Directory That Matters</h3>
                  <p className="lead">Built for builders. By someone who's seen too much bullshit.</p>
                  <p>Blue Pages is the anti-hype filter Cardano needed. We reject 99% of submissions because <em>proof or GTFO</em>. Curated daily, JSON-powered, zero-compromise.</p>
                  <hr />
                  <h5 className="fw-bold">Curation Rules</h5>
                  <ul className="list-unstyled">
                    <li className="mb-2"><strong>Revenue:</strong> On-chain fees, off-chain contracts, or verifiable sales. Show receipts.</li>
                    <li className="mb-2"><strong>Users:</strong> Mainnet active wallets or DAUs. Testnet doesn't count.</li>
                    <li className="mb-2"><strong>Adoption:</strong> Signed gov/enterprise deals. Public proof only.</li>
                  </ul>
                </div>
                <div className="col-lg-4">
                  <div className="card h-100 border-0 shadow">
                    <div className="card-body text-center p-4">
                      <i className="bi bi-shield-check fs-1 text-primary mb-3"></i>
                      <h5 className="card-title fw-bold">Zero Tolerance</h5>
                      <p className="card-text text-muted">No memecoins. No vaporware. No paid listings. Ever.</p>
                      <div className="mt-3">
                        <small className="text-muted">Visitors: <span id="visitor-count">...</span></small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Footer - Old QR + Copy */}
        <footer className="bg-dark text-white py-5 mt-auto text-center">
          <div className="container">
            <p className="fw-bold fs-4 mb-3">Donate to Support Blue Pages</p>
            <button id="copyBtn" className="btn btn-outline-light btn-lg mb-3">
              <i className="bi bi-copy"></i> Copy ADA Address
            </button>
            <span id="copyFeedback" className="ms-3 fw-bold text-success" style={{ opacity: 0, transition: 'opacity .3s' }}>Copied!</span>
            <p className="my-4">
              <img src="https://api.qrserver.com/v1/create-qr-code/?data=addr1qx9c4qr8lpp73lxz2z80jgdme9ua22096d8kdhf0249jv5qgpe74yz745c80rht0pm0zrahhudcccgawzvxvg4lc59ks7fw8yq&size=220x220&margin=20" alt="Blue Pages ADA donation QR code" className="img-fluid" style={{ maxWidth: '220px' }} />
            </p>
            <p>
              Updated: <span id="footer-update-date">November 23, 2025</span><br />
              Visitors: <span id="visitor-count">...</span> • <strong>@BluePagesADA</strong><br />
              <small>The only Cardano directory that actually matters.</small>
            </p>
          </div>
        </footer>

        {/* Submit Modal - Old Form */}
        <div className="modal fade" id="submitModal" tabIndex="-1">
          <div className="modal-dialog modal-lg">
            <div className="modal-content">
              <div className="modal-header bg-primary text-white">
                <h5 className="modal-title">Submit Project for Blue Pages</h5>
                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" />
              </div>
              <div className="modal-body">
                <form action="https://formsubmit.co/bluepagesada@gmail.com" method="POST">
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_subject" value="Blue Pages Submission" />
                  <input type="hidden" name="_next" value="https://bluepagesada.github.io/Bluepagesada/" />
                  <div className="mb-3">
                    <label className="form-label">Project Name *</label>
                    <input type="text" className="form-control" name="Project Name" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Website *</label>
                    <input type="url" className="form-control" name="Website" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">X Handle</label>
                    <input type="text" className="form-control" name="X Handle" />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Industry *</label>
                    <input type="text" className="form-control" name="Industry" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Short Description *</label>
                    <textarea className="form-control" name="Description" rows="3" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Proof of Real-World Impact *</label>
                    <textarea className="form-control" name="Proof" rows="5" required />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">Your Email *</label>
                    <input type="email" className="form-control" name="email" required />
                  </div>
                  <button type="submit" className="btn btn-primary w-100">Submit for Review</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
      <Script src="/script.js" strategy="afterInteractive" />
    </>
  );
}
