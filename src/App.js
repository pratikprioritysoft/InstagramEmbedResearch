import './App.css';
import InstagramEmbed from './components/InstagramEmbed';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Instagram Post Embed Example</h1>
        <p>Embedding Instagram posts using the official Instagram Embed API</p>
      </header>
      <main style={{ padding: '40px 20px' }}>
        <section style={{ marginBottom: '40px' }}>
          <h2>Example Instagram Post</h2>
          <p style={{ marginBottom: '20px', color: '#666' }}>
            Replace the URL below with your Instagram post URL
          </p>
          <InstagramEmbed
            url="https://www.instagram.com/p/DRH99bwknAe/"
            maxWidth={540}
            hideCaption={false}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
