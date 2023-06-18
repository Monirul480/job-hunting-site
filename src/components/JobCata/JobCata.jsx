import React, { useState } from "react";
import Cartj from "./Cartj";

const JobCata = () => {
    const [jobs, setJob] = useState([]);
    useState(() =>{
        fetch('jobCt.json')
        .then(res => res.json())
        .then(data => setJob(data))
    },[])
  return (
    <>
      <section className="mx-3 md:mx-20 lg:mx-36 md:mt-60 mt-4 lg:mt-10 mb-10">
        <h1 className="text-3xl text-center font-bold">Job Category List</h1>
        <p className="text-center mt-3">
          Explore thousands of job opportunities with all the information you
          need. Its your future
        </p>
        <div className="mt-6 grid grid-cols-2 gap-4 lg:gap-4 mx-auto lg:grid-cols-4">
        {
            jobs.map((jobC, i) => <Cartj key={i} cart={jobC}/>)
        }
        </div>
      </section>
    </>
  );
};

export default JobCata;
