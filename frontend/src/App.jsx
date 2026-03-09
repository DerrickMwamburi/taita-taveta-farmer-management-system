import { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatsCard from './components/StatsCard';
import FarmersTable from './components/FarmersTable';
import './styles/kenya-theme.css';
import AddFarmerForm from './components/AddFarmerForm';

function App() {
  const [farmers, setFarmers] = useState([]);
  const [count, setCount] = useState(0);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const refreshFarmers = async () => {
    const res = await fetch('http://127.0.0.1:8000/api/farmers/');
    const data = await res.json();
    setFarmers(Array.isArray(data) ? data : []);
  }

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
      {/* Mobile toggle button */}
      <button 
        className="menu-toggle"
        onClick={() => setSidebarOpen(!sidebarOpen)}
      >
        {sidebarOpen ? '✕' : '≡'}
      </button>

      {/* Sidebar */}
      <Sidebar 
  isOpen={sidebarOpen} 
  onAddClick={() => {
    console.log("onAddClick called from App");
    setShowForm(true);
  }}
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
    </div>
  );
}


export default App;