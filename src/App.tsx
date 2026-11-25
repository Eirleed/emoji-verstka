export function App() {
  return (
    <div className="app">
      <header className="header">
        <h1 className="header__title">Emoji Finder</h1>
        <p className="header__subtitle">Find emoji by keywords</p>
      </header>

      <main className="main">
        <div className="search-wrapper">
          <input
            type="text"
            className="search-input"
            placeholder="Placeholder"
          />
        </div>

        <section className="emoji-grid">
          <article className="emoji-card">
            <div className="emoji-card__symbol">💯</div>
            <h2 className="emoji-card__title">100</h2>
            <p className="emoji-card__keywords">
              Hundred, points, symbol, wow, win, perfect, parties
            </p>
          </article>

          <article className="emoji-card">
            <div className="emoji-card__symbol">🔢</div>
            <h2 className="emoji-card__title">1234</h2>
            <p className="emoji-card__keywords">
              input symbol for numbers symbol
            </p>
          </article>

          <article className="emoji-card">
            <div className="emoji-card__symbol">🔢</div>
            <h2 className="emoji-card__title">1234</h2>
            <p className="emoji-card__keywords">
              input symbol for numbers symbol
            </p>
          </article>
        </section>
      </main>
    </div>
  );
}

export default App;