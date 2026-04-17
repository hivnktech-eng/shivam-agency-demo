import React, { useState } from 'react';
import { motion as Motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { agencyData } from '../data/mockData';
import './Contact.css';

const Contact = () => {
  const [formStep, setFormStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    revenue: '',
    problem: '',
    email: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const nextStep = (e) => {
    e.preventDefault();
    if (formStep < 3) setFormStep(prev => prev + 1);
    else handleSubmit();
  };

  const handleSubmit = () => {
    setIsSubmitted(true);
    // Simulate analytics tracking
    console.log('Conversion: Diagnostic Form Submitted', formData);
  };

  return (
    <PageTransition>
      <div className="contact-page">
        <section className="contact-hero">
          <div className="container">
            <div className="grid-2">
              <div>
                <span className="section-label">Contact</span>
                <h1 className="section-title">The First Step: <br /><span>Diagnostic.</span></h1>
                <p className="section-desc">
                  We don't take on every project. Our diagnostic identifies if your problem is 
                  structural or if it's something we can't solve.
                </p>
                
                <div className="contact-info-list">
                  <div className="info-item">
                    <h4>Direct</h4>
                    <p>{agencyData.contact.email}</p>
                  </div>
                  <div className="info-item">
                    <h4>Headquarters</h4>
                    <p>{agencyData.contact.address}</p>
                  </div>
                </div>
              </div>

              <div className="form-container">
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <Motion.div 
                      key="form"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="diagnostic-form"
                    >
                      <div className="form-progress">
                        <div className={`dot ${formStep >= 1 ? 'active' : ''}`}></div>
                        <div className={`dot ${formStep >= 2 ? 'active' : ''}`}></div>
                        <div className={`dot ${formStep >= 3 ? 'active' : ''}`}></div>
                      </div>

                      <form onSubmit={nextStep}>
                        {formStep === 1 && (
                          <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            <h3>Basic Information</h3>
                            <div className="input-field">
                              <label>What's your name?</label>
                              <input 
                                type="text" 
                                name="name" 
                                placeholder="Full Name" 
                                required 
                                value={formData.name}
                                onChange={handleInputChange}
                              />
                            </div>
                            <div className="input-field">
                              <label>Company Name</label>
                              <input 
                                type="text" 
                                name="company" 
                                placeholder="e.g. Acme Corp" 
                                required 
                                value={formData.company}
                                onChange={handleInputChange}
                              />
                            </div>
                          </Motion.div>
                        )}

                        {formStep === 2 && (
                          <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            <h3>Scale & Friction</h3>
                            <div className="input-field">
                              <label>Annual Revenue (Approx)</label>
                              <select 
                                name="revenue" 
                                required 
                                value={formData.revenue}
                                onChange={handleInputChange}
                              >
                                <option value="">Select Range</option>
                                <option value="1-5cr">₹1Cr - ₹5Cr</option>
                                <option value="5-20cr">₹5Cr - ₹20Cr</option>
                                <option value="20-100cr">₹20Cr - ₹100Cr</option>
                                <option value="100cr+">₹100Cr+</option>
                              </select>
                            </div>
                            <div className="input-field">
                              <label>What's the main bottleneck?</label>
                              <textarea 
                                name="problem" 
                                placeholder="e.g. High CAC, Platform errors, Branding"
                                required 
                                value={formData.problem}
                                onChange={handleInputChange}
                              ></textarea>
                            </div>
                          </Motion.div>
                        )}

                        {formStep === 3 && (
                          <Motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                            <h3>Final Details</h3>
                            <div className="input-field">
                              <label>Connect with you at</label>
                              <input 
                                type="email" 
                                name="email" 
                                placeholder="Work Email" 
                                required 
                                value={formData.email}
                                onChange={handleInputChange}
                              />
                            </div>
                            <p className="form-note">We respond within 24 hours with a preliminary audit.</p>
                          </Motion.div>
                        )}

                        <div className="form-footer">
                          {formStep > 1 && (
                            <button type="button" onClick={() => setFormStep(v => v-1)} className="back-btn">Back</button>
                          )}
                          <button type="submit" className="btn btn-primary">
                            {formStep === 3 ? 'Request Diagnostic' : 'Continue'} <ArrowRight size={16} />
                          </button>
                        </div>
                      </form>
                    </Motion.div>
                  ) : (
                    <Motion.div 
                      key="success"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="form-success"
                    >
                      <CheckCircle size={64} className="success-icon" />
                      <h2>Request Received.</h2>
                      <p>Check your email (<strong>{formData.email}</strong>). We've sent you our Business Architecture Audit checklist while you wait.</p>
                    </Motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </section>

        <section className="contact-bottom">
          <div className="container">
             <div className="divider"></div>
             <p className="copyright">© 2026 {agencyData.name}. All systems go.</p>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Contact;
