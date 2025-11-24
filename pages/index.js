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
        <meta property="og:url" content="https://bluepagesada.vercel.app/" />
        <meta name="theme-color" content="#002D72" />
        <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><circle cx='50' cy='50' r='40' fill='%23002D72'/></svg>" />
      </Head>
     <body className="d-flex flex-column min-vh-100">
  <!-- Paste your full <body> content from root index.html here -->
  <!-- Quick tip: Copy from <body> to </body> in index.html, paste here, then GitHub find/replace: Find "class=" replace "className=" (10s) -->
  <!-- Example start: <div className="position-fixed top-0 end-0 p-3 z-3"> ... -->
  <div className="position-fixed top-0 end-0 p-3 z-3">
    <button id="themeToggle" className="btn btn-outline-light rounded-circle p-3 shadow-lg">
      <i className="bi bi-sun-fill"></i>
    </button>
  </div>
  <section className="hero text-center text-white d-flex align-items-center min-vh-100">
    <!-- Your hero SVG and content here -- paste full -->
  </section>
  <!-- Continue pasting the rest of <body> until footer -->
  <footer className="text-center py-3 mt-auto" style={{background: 'var(--bg)', color: 'var(--text)'}}>
    <!-- Footer content -->
  </footer>
  <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
  <Script src="/js/script.js" strategy="afterInteractive" />
</body>
    </>
  );
}
