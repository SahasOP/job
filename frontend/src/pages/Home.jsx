import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-content">
          <h1>Find Your Dream Job</h1>
          <p>Browse thousands of job listings or post a job for qualified candidates</p>
          <div className="hero-buttons">
            <Link to="/jobs" className="btn btn-primary">Browse Jobs</Link>
            <Link to="/jobs/create" className="btn btn-success">Post a Job</Link>
          </div>
        </div>
      </section>
      
      <section className="features">
        <div className="section-header">
          <h2>How It Works</h2>
          <p>Simple and efficient way to connect employers with talent</p>
        </div>
        
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-search"></i>
            </div>
            <h3>Search Jobs</h3>
            <p>Browse through our extensive list of job opportunities across various industries.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-file-alt"></i>
            </div>
            <h3>Create Profile</h3>
            <p>Build your professional profile to showcase your skills and experience.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-briefcase"></i>
            </div>
            <h3>Apply for Jobs</h3>
            <p>Apply to jobs that match your qualifications and career aspirations.</p>
          </div>
          
          <div className="feature-card">
            <div className="feature-icon">
              <i className="fas fa-bullhorn"></i>
            </div>
            <h3>Post Jobs</h3>
            <p>Employers can post job openings to find the perfect candidates.</p>
          </div>
        </div>
      </section>
      
      <section className="cta">
        <div className="cta-content">
          <h2>Ready to Start Your Job Search?</h2>
          <p>Join thousands of job seekers who found their dream jobs through our platform</p>
          <Link to="/jobs" className="btn btn-primary">Get Started</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;