import './App.css';
import InstagramEmbed from './components/InstagramEmbed';
import InstagramEmbedPackage from './components/InstagramEmbedPackage';

function App() {
  const instagramUrl = "https://www.instagram.com/p/DRH99bwknAe/";

  return (
    <div className="App">
      <header className="App-header">
        <h1>Instagram Post Embed Comparison</h1>
        <p>Comparing two different approaches to embedding Instagram posts</p>
      </header>
      <main style={{ padding: '40px 20px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(500px, 1fr))',
          gap: '40px',
          maxWidth: '1200px',
          margin: '0 auto'
        }}>
          {/* Custom Implementation */}
          <section style={{ marginBottom: '40px' }}>
            <h2>Method 1: Custom Implementation</h2>
            <p style={{ marginBottom: '20px', color: '#666', fontSize: '0.9rem' }}>
              Using Instagram's official Embed API with custom React component
            </p>
            <div style={{
              backgroundColor: '#f9f9f9',
              padding: '20px',
              borderRadius: '8px',
              border: '2px solid #e0e0e0'
            }}>
              <InstagramEmbed
                url={instagramUrl}
                maxWidth={540}
                hideCaption={false}
              />
            </div>
            <div style={{ marginTop: '15px', fontSize: '0.85rem', color: '#888' }}>
              <strong>Pros:</strong> Full control, no dependencies<br />
              <strong>Cons:</strong> More code to maintain
            </div>
          </section>

          {/* Package Implementation */}
          <section style={{ marginBottom: '40px' }}>
            <h2>Method 2: react-social-media-embed Package</h2>
            <p style={{ marginBottom: '20px', color: '#666', fontSize: '0.9rem' }}>
              Using the react-social-media-embed npm package
            </p>
            <div style={{
              backgroundColor: '#f9f9f9',
              padding: '20px',
              borderRadius: '8px',
              border: '2px solid #e0e0e0'
            }}>
              <InstagramEmbedPackage
                url={instagramUrl}
                width={540}
              />
            </div>
            <div style={{ marginTop: '15px', fontSize: '0.85rem', color: '#888' }}>
              <strong>Pros:</strong> Simple, maintained, supports multiple platforms<br />
              <strong>Cons:</strong> External dependency
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;

