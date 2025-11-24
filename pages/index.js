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
        <!-- Your exact index.html body content here — copy from <body> to </body> in your current index.html, replace class with className for Next.js -->
        <!-- Example: <div class="hero"> becomes <div className="hero"> -->
        <!-- Paste the full body here, replacing all class="..." with className="..." (use find/replace in editor) -->
        <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" strategy="afterInteractive" />
        <Script src="/js/script.js" strategy="afterInteractive" />
      </body>
    </>
  );
}
