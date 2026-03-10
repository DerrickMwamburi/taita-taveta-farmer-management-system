// src/components/StatsCard.jsx
export default function StatsCard({ count }) {
  return (
    <div className="stats-row">
      <div className="stat-card">
        <h3>TOTAL FARMERS</h3>
        <p className="number">{count.toLocaleString()}</p>
      </div>
    </div>
  );
}