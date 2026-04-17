import React from 'react';
import { motion as Motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { agencyData, caseStudies } from '../data/mockData';
import './Home.css';

const Home = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.23, 1, 0.32, 1] } }
  };

  return (
    <PageTransition>
      <div className="home-page">
        {/* HERO SECTION */}
        <section className="hero">
          <div className="hero-bg">
            <img src="/assets/hero.png" alt="Sutra Systems Architecture" />
            <div className="hero-overlay"></div>
          </div>
          <div className="container">
            <Motion.div 
              initial="hidden"
              animate="visible"
              variants={containerVariants}
              className="hero-content"
            >
              <Motion.span variants={itemVariants} className="section-label">
                {agencyData.tagline}
              </Motion.span>
              <Motion.h1 variants={itemVariants} className="hero-title">
                Your business isn't slow.<br />
                <span>It's unoptimized.</span>
              </Motion.h1>
              <Motion.p variants={itemVariants} className="section-desc hero-desc">
                {agencyData.description}
              </Motion.p>
              <Motion.div variants={itemVariants} className="hero-actions">
                <button className="btn btn-primary" onClick={() => navigate('/contact')}>
                  Start the Diagnostic <ArrowRight size={16} />
                </button>
                <button className="btn btn-outline" onClick={() => navigate('/process')}>
                  Our Philosophy
                </button>
              </Motion.div>
            </Motion.div>
          </div>
          <Motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="scroll-indicator"
          >
            <ChevronDown size={24} />
          </Motion.div>
        </section>

        {/* PROBLEM SECTION */}
        <section className="problem-section">
          <div className="container">
            <div className="grid-2">
              <div>
                <span className="section-label">The Friction Point</span>
                <h2 className="section-title">Most growth problems are actually structural.</h2>
              </div>
              <div className="problem-list">
                <div className="problem-item">
                  <h3>01. The Invisible Ceiling</h3>
                  <p>You've hit a revenue plateau despite increased ad spend. The systems underneath are buckling under the weight.</p>
                </div>
                <div className="problem-item">
                  <h3>02. Brand Fragmentation</h3>
                  <p>Your message is diluted. Customers don't understand what you stand for, leading to high CAC and low trust.</p>
                </div>
                <div className="problem-item">
                  <h3>03. Technical Friction</h3>
                  <p>The digital experience feels heavy, outdated, or disconnected from the actual product value.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CASE STUDIES TEASER */}
        <section className="case-studies-teaser">
          <div className="container">
            <div className="section-header">
              <div>
                <span className="section-label">Outcomes</span>
                <h2 className="section-title">Data-backed scaling.</h2>
              </div>
              <Link to="/portfolio" className="btn btn-outline">View All Work</Link>
            </div>
            
            <div className="case-grid">
              {caseStudies.slice(0, 2).map((study) => (
                <Motion.div 
                  key={study.id} 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="case-card"
                  onClick={() => navigate('/portfolio')}
                >
                  <div className="case-image">
                    <img src={study.image} alt={study.title} />
                  </div>
                  <div className="case-info">
                    <span className="case-category">{study.industry}</span>
                    <h3>{study.title}</h3>
                    <div className="case-stats">
                      {study.stats.slice(0, 2).map((stat, i) => (
                        <div key={i} className="stat">
                          <span className="stat-value">{stat.value}</span>
                          <span className="stat-label">{stat.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </Motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className="final-cta">
          <div className="container text-center">
            <h2 className="section-title">Ready to find the root cause?</h2>
            <p className="section-desc">Our diagnostic framework takes 48 hours to identify the structural gaps in your business.</p>
            <button className="btn btn-primary" onClick={() => navigate('/contact')}>
              Book a Strategy Session <ArrowRight size={18} />
            </button>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Home;
