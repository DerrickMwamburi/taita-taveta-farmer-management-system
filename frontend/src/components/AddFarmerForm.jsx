// src/components/AddFarmerForm.jsx
import { useState } from 'react';

export default function AddFarmerForm({ onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    crops: '',
    contact: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const API_URL = import.meta.env.VITE_API_URL || 'http://127.0.0.1:8000';
      const response = await fetch(`${API_URL}/api/farmers/`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Failed to add farmer');
      }

      await response.json();
      onSuccess();           // Refresh list
      onClose();             // Close modal
    } catch (err) {
      setError(err.message || 'Tatizo la kuongeza mkulima');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <h2>Ongeza Mkulima Mpya</h2>
        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit}>
          <label>
            Jina:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Eneo (Location):
            <input
              type="text"
              name="location"
              value={formData.location}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Mazao (Crops, e.g. mahindi, maharagwe):
            <input
              type="text"
              name="crops"
              value={formData.crops}
              onChange={handleChange}
              required
            />
          </label>

          <label>
            Mawasiliano (Contact, phone/email):
            <input
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </label>

          <div className="form-buttons">
            <button type="button" onClick={onClose} disabled={loading}>
              Ghairi
            </button>
            <button type="submit" disabled={loading}>
              {loading ? 'Inahifadhi...' : 'Hifadhi'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}