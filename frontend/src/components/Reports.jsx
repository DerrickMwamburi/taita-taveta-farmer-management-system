// src/components/Reports.jsx
import { useEffect, useState } from 'react';

export default function Reports({ isOpen, onClose, totalFarmers }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={e => e.stopPropagation()}>
        <h2>Farmers' Reports</h2>
        <p>This is the place for future reports (for example: numbers by region, popular crops, etc.)</p>

        <div style={{ margin: '20px 0', padding: '15px', background: '#f0fff0', borderRadius: '8px' }}>
          <h3>Takwimu Muhimu</h3>
          <ul style={{ listStyle: 'none', padding: 0, lineHeight: '2' }}>
            <li><strong>Total Farmers:</strong> {totalFarmers.toLocaleString()}</li>
            <li><strong>New Farmers this week:</strong> (Inakuja)</li>
            <li><strong>Eneo lenye wakulima wengi zaidArea with the most Farmers:</strong> (Inakuja)</li>
            <li><strong>Popular crops:</strong> Mahindi, Maharagwe, Sisal (Inakuja)</li>
          </ul>
        </div>

        <div style={{ textAlign: 'right', marginTop: '30px' }}>
          <button 
            onClick={onClose}
            style={{
              padding: '10px 24px',
              background: '#ccc',
              border: 'none',
              borderRadius: '6px',
              cursor: 'pointer'
            }}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}