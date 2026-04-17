import React from 'react';
import { motion as Motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { caseStudies } from '../data/mockData';
import './Portfolio.css';

const Portfolio = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="portfolio-page">
        <section className="portfolio-hero">
          <div className="container">
            <span className="section-label">Our Work</span>
            <h1 className="section-title">Structural Transformations</h1>
            <p className="section-desc">
              We focus on outcomes, not artifacts. Every project here represents a fundamental 
              shift in how a business operates and grows.
            </p>
          </div>
        </section>

        <section className="case-studies-list">
          <div className="container">
            {caseStudies.map((study) => (
              <Motion.div 
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8 }}
                className="study-item"
              >
                <div className="study-visual">
                  <img src={study.image} alt={study.title} />
                  <div className="study-badge">{study.badge || 'Success'}</div>
                </div>
                <div className="study-content">
                  <span className="case-category">{study.industry}</span>
                  <h2>{study.title}</h2>
                  
                  <div className="study-details">
                    <div className="detail-box">
                      <h4>The Friction</h4>
                      <p>{study.problem}</p>
                    </div>
                    <div className="detail-box">
                      <h4>The Sutra</h4>
                      <p>{study.solution}</p>
                    </div>
                  </div>

                  <div className="study-outcomes">
                    {study.stats.map((stat, i) => (
                      <div key={i} className="outcome-stat">
                        <span className="val">{stat.value}</span>
                        <span className="lab">{stat.label}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </Motion.div>
            ))}
          </div>
        </section>

        <section className="portfolio-cta">
          <div className="container text-center">
            <h2 className="section-title">Your outcome is next.</h2>
            <button className="btn btn-primary" onClick={() => navigate('/contact')}>
              Start the Diagnostic <ArrowRight size={16} />
            </button>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Portfolio;
