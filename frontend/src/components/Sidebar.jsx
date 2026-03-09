// src/components/Sidebar.jsx
export default function Sidebar({ isOpen, onAddClick }) {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h1>Taita Taveta</h1>
        <p>Usimamizi wa Wakulima</p>
      </div>
      <nav className="nav-list">
        <a href="#" className="nav-item active">
          <span className="emoji">🌾</span> Dashboard
        </a>
        <a
  href="#"
  className="nav-item"
  onClick={(e) => {
    e.preventDefault();                // ← must have this
    e.stopPropagation();               // extra safety
    console.log("Ongeza clicked – should open form now");
    onAddClick();                      // your prop callback
  }}
>
  <span className="emoji">➕</span> Ongeza Mkulima
</a>
        <a href="#" className="nav-item">
          <span className="emoji">📊</span> Ripoti
        </a>
        <a href="#" className="nav-item">
          Logout
        </a>
      </nav>
    </aside>
  );
}