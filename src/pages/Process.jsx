import React from 'react';
import { motion as Motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageTransition from '../components/PageTransition';
import { processSteps } from '../data/mockData';
import './Process.css';

const Process = () => {
  const navigate = useNavigate();

  return (
    <PageTransition>
      <div className="process-page">
        <section className="process-hero">
          <div className="container">
            <span className="section-label">Our Framework</span>
            <h1 className="section-title">The Sutra Methodology</h1>
            <p className="section-desc">
              We replace chaotic, high-effort marketing with structured, low-friction systems. 
              Here is how we deconstruct and rebuild your business architecture.
            </p>
          </div>
        </section>

        <section className="process-steps">
          <div className="container">
            {processSteps.map((step, index) => (
              <Motion.div 
                key={step.level}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={`step-item ${index % 2 !== 0 ? 'reverse' : ''}`}
              >
                <div className="step-number">
                  <Motion.div 
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="number-circle"
                  >
                    {step.level}
                  </Motion.div>
                </div>
                <div className="step-content">
                  <h2>{step.title}</h2>
                  <p>{step.desc}</p>
                </div>
              </Motion.div>
            ))}
            
            {/* Connection Line (Desktop) */}
            <div className="process-line"></div>
          </div>
        </section>

        <section className="process-footer">
          <div className="container text-center">
            <h2 className="section-title">Systems don't sleep.</h2>
            <p className="section-desc">Unlike campaign-based marketing, a structural system works 24/7 to support your growth.</p>
            <button className="btn btn-primary" onClick={() => navigate('/contact')}>
              Implement Your Sutra <ArrowRight size={16} />
            </button>
          </div>
        </section>
      </div>
    </PageTransition>
  );
};

export default Process;
