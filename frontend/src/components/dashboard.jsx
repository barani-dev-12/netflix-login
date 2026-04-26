const series = [
  { name: "Stranger Things", genre: "SCI-FI · HORROR", year: "2024 · S5", bg: "#0d0a1a", badge: "NEW", num: 1 },
  { name: "Wednesday",       genre: "HORROR · COMEDY", year: "2024 · S2", bg: "#0a1a0a", badge: "TOP 10", num: 2 },
  { name: "Squid Game",      genre: "THRILLER",        year: "2024 · S2", bg: "#1a0a0a", badge: null, num: 3 },
  { name: "Black Mirror",    genre: "SCI-FI · DRAMA",  year: "2024 · S7", bg: "#0a0f1a", badge: "NEW", num: 4 },
  { name: "Ozark",           genre: "CRIME · DRAMA",   year: "2023 · S4", bg: "#0f0f0a", badge: null, num: 5 },
];

const films = [
  { name: "Red Notice",    genre: "ACTION · COMEDY",  year: "2023", bg: "#1a0a0d", badge: "TOP 10", num: 1 },
  { name: "Don't Look Up", genre: "SCI-FI · COMEDY",  year: "2023", bg: "#0a0d1a", badge: null, num: 2 },
  { name: "The Gray Man",  genre: "ACTION · THRILLER", year: "2024", bg: "#0f0f0f", badge: "NEW", num: 3 },
  { name: "Extraction 2",  genre: "ACTION",            year: "2023", bg: "#0a1a10", badge: null, num: 4 },
  { name: "Knives Out",    genre: "MYSTERY",           year: "2023", bg: "#1a150a", badge: null, num: 5 },
];

function Card({ name, genre, year, bg, badge, num }) {
  return (
    <div className="card" style={{ background: bg }}>
      {badge && (
        <span className={`card-tag ${badge === "NEW" ? "tag-new" : "tag-top"}`}>
          {badge}
        </span>
      )}
      <div className="card-num">{num}</div>
      <div className="card-genre">{genre}</div>
      <div className="card-name">{name}</div>
      <div className="card-year">{year}</div>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="dashboard">

      {/* Featured Banner */}
      <div className="banner">
        <span className="banner-tag">NOW TRENDING #1</span>
        <h1 className="banner-title">Stranger Things</h1>
        <p className="banner-meta">2024 · Season 5 · Sci-Fi · Horror</p>
        <p className="banner-desc">
          When a young boy vanishes, a small town uncovers a mystery involving
          secret experiments and terrifying supernatural forces.
        </p>
        <button className="btn-play">▶ Play Now</button>
      </div>

      <p className="section-label">SERIES</p>
      <h2 className="section-title">Trending Now</h2>
      <div className="card-row">
        {series.map((s) => <Card key={s.name} {...s} />)}
      </div>

      <p className="section-label">MOVIES</p>
      <h2 className="section-title">Popular Movies</h2>
      <div className="card-row">
        {films.map((f) => <Card key={f.name} {...f} />)}
      </div>

    </div>
  );
}

export default Dashboard;