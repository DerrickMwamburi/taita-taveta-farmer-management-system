import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsCard from './components/StatsCard';
import FarmersTable from './components/FarmersTable';
import './styles/kenya-theme.css';
import AddFarmerForm from './components/AddFarmerForm';
import Reports from './components/Reports';

function App() {
  const [farmers, setFarmers] = useState([]);
  const [count, setCount] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showReports, setShowReports] = useState(false);

  const refreshFarmers = async () => {
    const res = await fetch('http://127.0.0.1:8000/api/farmers/');
    const data = await res.json();
    setFarmers(Array.isArray(data) ? data : []);
  };

  const onShowReports = () => {
    setShowReports(true);
  };

  useEffect(() => {
    // Fetch total count
    fetch('http://127.0.0.1:8000/api/farmers/count/')
      .then(res => res.ok ? res.json() : Promise.reject(res))
      .then(data => setCount(data.count))
      .catch(err => console.error('Error fetching count:', err));

    // Fetch farmer list
    fetch('http://127.0.0.1:8000/api/farmers/')
      .then(res => res.ok ? res.json() : Promise.reject(res))
      .then(data => setFarmers(Array.isArray(data) ? data : []))
      .catch(err => console.error('Error fetching farmers:', err));
  }, []);

  return (
    <div className="app-wrapper">
      {/* Sidebar */}
      <Sidebar 
        isOpen={sidebarOpen} 
        onAddClick={() => setShowForm(true)} 
        onShowReports={onShowReports} // Pass the function here
      />

      <Reports 
        isOpen={showReports}
        onClose={() => setShowReports(false)}
        totalFarmers={count}
      />

      {showForm && (
        <AddFarmerForm
          onClose={() => setShowForm(false)}
          onSuccess={() => {
            refreshFarmers();
            setShowForm(false);
          }}
        />
      )}

      {/* Main content */}
      <div className="main-area">
        <Header />
        
        <main className="content">
          {/* Stats */}
          <StatsCard count={count} />
          
          {/* Table */}
          <FarmersTable farmers={farmers} />
        </main>
      </div>

      {/* Reports Modal */}
      {showReports && (
        <div className="modal-overlay" onClick={() => setShowReports(false)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
          <h2>Farmers' Reports</h2>
        <p>This is the place for future reports (for example: numbers by region, popular crops, etc.)</p>

            
            <ul style={{ margin: '1.5rem 0', lineHeight: '1.8' }}>
              <li>Total Farmers: {count.toLocaleString()}</li>
              <li>New Farmers this week: (coming soon)</li>
              <li>Area with the most Farmers: Mwatate (example)</li>
              <li>Popular Crops: Mahindi, Maharage, Sisal</li>
            </ul>

            <div style={{ textAlign: 'right' }}>
              <button 
                onClick={() => setShowReports(false)}
                style={{ padding: '10px 20px', background: '#ccc', border: 'none', borderRadius: '6px' }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;