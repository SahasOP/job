import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import JobCard from '../components/JobCard';
import './JobList.css';

function JobList() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/jobs');
        setJobs(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch jobs');
        setLoading(false);
        console.error('Error fetching jobs:', err);
      }
    };

    fetchJobs();
  }, []);

  // Filter jobs based on search term
  const filteredJobs = jobs.filter(job => 
    job.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
    job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) return <div className="loading">Loading jobs...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="job-list-page">
      <div className="page-header">
        <div className="header-content">
          <h1>Available Job Opportunities</h1>
          <p>Find the perfect job that matches your skills and career goals</p>
        </div>
        <Link to="/jobs/create" className="btn btn-success">Post New Job</Link>
      </div>
      
      <div className="search-container">
        <div className="search-input">
          <i className="fas fa-search search-icon"></i>
          <input
            type="text"
            placeholder="Search by job title, company or location..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="form-control"
          />
        </div>
      </div>
      
      {filteredJobs.length === 0 ? (
        <div className="no-jobs">
          <p>No jobs match your search criteria.</p>
        </div>
      ) : (
        <div className="jobs-grid">
          {filteredJobs.map(job => (
            <div className="job-card-wrapper" key={job._id}>
              <JobCard job={job} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default JobList;
