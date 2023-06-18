import React from "react";
import Header from "../Header/Header";
import { Link, Outlet } from "react-router-dom";
import JobCata from "../JobCata/JobCata";
import FeaturedJobs from "../FeaturedJobs/FeaturedJobs";

const Home = () => {
  return (
    <>
    {/* heder cover  */}
      <div className="mb-24 lg:mb-0 lg:bg-blue-100 ">
        <div className="grid md:mx-20 lg:mx-36  lg:grid-cols-2 h-[calc(100vh-150px)]">
          <div className="lg:order-2 my-auto">
            <img
              className=" lg:h-[calc(100vh-150px)] object-cover  w-full h-fill"
              src="men.png"
              alt=""
            />
          </div>
          <div className="lg:order-1 mx-2  my-auto">
            <h1 className="text-7xl  font-bold">
              One Step <br /> Closer To Your <br />{" "}
              <span className="text-blue-500">Dream Job</span>
            </h1>
            <p className="my-4">
              Explore thousands of job opportunities with all the information
              you need. Its your future. Come find it. Manage all your job
              application from start to finish.
            </p>
            <Link className="btn-primary">Get Started</Link>
          </div>
        </div>
      </div>
      {/* Job Category List */}
      <JobCata/>
      <FeaturedJobs/>
    </>
  );
};

export default Home;
