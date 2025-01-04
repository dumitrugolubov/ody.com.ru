import { Helmet } from 'react-helmet-async';
import Header from './components/Header';
import Hero from './components/Hero';
import Features from './components/Features';

function App() {
  return (
    <>
      <Helmet>
        <title>Odyssey Exchange - Первая в мире биржа мем-токенов | Криптовалютная биржа</title>
        <meta name="description" content="Odyssey Exchange - инновационная криптовалютная биржа для торговли мем-токенами. 0% комиссия на споте, 10% возврат при ликвидациях, до 50% дохода от рефералов." />
        <meta name="keywords" content="Odyssey Exchange, биржа одиссея, odyssey биржа, odyssey крипто, мем-токены, криптовалютная биржа, торговля криптовалютой" />
        <link rel="canonical" href="https://odysseyexchange.com" />
        <meta property="og:title" content="Odyssey Exchange - Первая в мире биржа мем-токенов" />
        <meta property="og:description" content="Инновационная криптовалютная биржа с 0% комиссией на споте и высоким реферальным доходом." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <main>
          <Hero />
          <Features />
        </main>
      </div>
    </>
  );
}

export default App;