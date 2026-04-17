import React, { useState } from 'react';
import PageTransition from '../components/PageTransition';
import { agencyData } from '../data/mockData';
import './Contact.css'; // Reusing form styles

const CMS = () => {
  const [data, setData] = useState(agencyData);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  return (
    <PageTransition>
      <div className="contact-page">
        <section className="contact-hero">
          <div className="container">
            <span className="section-label">Demo Only</span>
            <h1 className="section-title">Live CMS Simulator</h1>
            <p className="section-desc">
              This demonstrates how easy it is to update Sutra Systems. 
              Changes here will reflect in the current session (frontend-only).
            </p>

            <div className="form-container" style={{maxWidth: '600px', marginTop: 'var(--spacing-lg)'}}>
              <div className="input-field">
                <label>Agency Name</label>
                <input name="name" value={data.name} onChange={handleChange} />
              </div>
              <div className="input-field">
                <label>Tagline</label>
                <input name="tagline" value={data.tagline} onChange={handleChange} />
              </div>
              <div className="input-field">
                <label>Description</label>
                <textarea name="description" value={data.description} onChange={handleChange}></textarea>
              </div>
              <button className="btn btn-primary" onClick={() => alert('Changes saved to session! (Demo)')}>Save Changes</button>
            </div>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default CMS;
