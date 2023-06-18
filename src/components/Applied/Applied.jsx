import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import JobAp from "../JobAp/JobAp";

const Applied = () => {
  const sevCard = useLoaderData();
  const [data, setData] = useState(sevCard);
  const [rem, setRem] = useState(sevCard);

  const fil = (id) =>{
    const remaing = data.filter( da => da.remote_or_onsite === id)
    setRem(remaing);
  }


  return (
    <div className="mt-8 md:mx-20 mx-4 min-h-[calc(100vh-200px)] mb-6 lg:mx-36" >
      
        <h1 className="text-center font-bold text-2xl">{data.length !== 0 ? "Applied Jobs" : "No Applied"}</h1>
      <div className= {data.length !== 0 ? "text-right mt-8 ":"hidden"}>
        <button onClick={() => fil('Onsite')} className="border py-1 px-4 rounded-sm text-blue-600 hover:bg-blue-200 border-blue-500">
          Onsite
        </button>
        <button onClick={() => fil('Remote')} className="border py-1 px-4 rounded-sm text-blue-600 hover:bg-blue-200 border-blue-500 ml-3">
          Remote
        </button>
      </div>
      {rem.map((da) => (
        <JobAp key={da.id} card={da} />
      ))}
    </div>
  );
};

export default Applied;
