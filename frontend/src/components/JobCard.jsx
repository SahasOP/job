import { Link } from 'react-router-dom';
import './JobCard.css';

function JobCard({ job }) {
  return (
    <div className="job-card">
      <div className="job-card-header">
        <h3 className="job-title">{job.title}</h3>
        <span className="job-company">{job.company}</span>
      </div>
      
      <div className="job-card-body">
        <div className="job-info">
          <div className="job-info-item">
            <i className="fas fa-map-marker-alt"></i>
            <span>{job.location}</span>
          </div>
          <div className="job-info-item">
            <i className="fas fa-dollar-sign"></i>
            <span>${job.salary}</span>
          </div>
        </div>
        
        <div className="job-description">
          {job.description.length > 150 
            ? `${job.description.substring(0, 150)}...` 
            : job.description}
        </div>
      </div>
      
      <div className="job-card-footer">
        <Link to={`/jobs/${job._id}`} className="btn btn-primary">View Details</Link>
      </div>
    </div>
  );
}

export default JobCard;