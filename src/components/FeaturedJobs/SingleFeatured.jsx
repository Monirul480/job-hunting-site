import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faDollarSign } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import JobDetails from "../JobDetails/JobDetails";


const SingleFeatured = ({ job }) => {
  const {
    id,
    company_logo,
    job_title,
    company_name,
    remote_or_onsite,
    location,
    fulltime_or_parttime,
    salary,
  } = job;

  

  return (
    <div className="border-2 pt-10 rounded-lg border-blue-500 pl-14 pb-10">
      <img className="h-18 w-40" src={company_logo} alt="" />
      <h1 className="font-bold text-2xl mt-4">{job_title}</h1>
      <p>{company_name}</p>
      <div className="flex my-4">
        <button className="border py-1 px-4 rounded-sm text-blue-600 border-blue-500">
          {remote_or_onsite}
        </button>
        <button className="border ml-4 py-1 px-4 rounded-sm text-blue-600 border-blue-500">
          {fulltime_or_parttime}
        </button>
      </div>
      <div className="flex">
        <div className="flex items-center">
          <FontAwesomeIcon icon={faLocationDot} />
          <p className="ml-2">{location}</p>
        </div>
        <div className="flex ml-6 items-center">
          <FontAwesomeIcon icon={faDollarSign} />
          <p className="ml-2">Salary : {salary}</p>
        </div>
      </div>
      <button
        className="btn-primary mt-6"
      >
        <Link to={`/JobDetails/${id}`}>View Details</Link>
      </button>
    </div>
  );
};

export default SingleFeatured;
