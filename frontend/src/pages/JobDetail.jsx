import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function JobDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [job, setJob] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/jobs/${id}`);
        setJob(response.data);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch job details');
        setLoading(false);
        console.error('Error fetching job:', err);
      }
    };

    fetchJob();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this job?')) {
      try {
        await axios.delete(`http://localhost:5000/api/jobs/${id}`);
        navigate('/jobs');
      } catch (err) {
        setError('Failed to delete job');
        console.error('Error deleting job:', err);
      }
    }
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!job) return <div>Job not found</div>;

  return (
    <div className="job-detail">
      <div className="job-detail-header">
        <h1>{job.title}</h1>
        <div className="job-actions">
          <Link to={`/jobs/edit/${id}`} className="btn btn-primary">Edit</Link>
          <button onClick={handleDelete} className="btn btn-danger">Delete</button>
        </div>
      </div>

      <div className="job-detail-content">
        <div className="detail-section">
          <h3>Company</h3>
          <p>{job.company}</p>
        </div>

        <div className="detail-section">
          <h3>Location</h3>
          <p>{job.location}</p>
        </div>

        <div className="detail-section">
          <h3>Salary</h3>
          <p>${job.salary}</p>
        </div>

        <div className="detail-section">
          <h3>Description</h3>
          <p>{job.description}</p>
        </div>

        <div className="detail-section">
          <h3>Requirements</h3>
          <p>{job.requirements}</p>
        </div>

        <div className="detail-section">
          <h3>Contact Email</h3>
          <p>{job.contactEmail}</p>
        </div>
      </div>

      <div className="job-detail-footer">
        <Link to="/jobs" className="btn btn-primary">Back to Jobs</Link>
      </div>
    </div>
  );
}

export default JobDetail;