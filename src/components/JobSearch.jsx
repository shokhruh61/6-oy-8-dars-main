import { useState, useEffect } from "react";
import { jobs } from "../axios";

function JobSearch() {
  const [jobList, setJobList] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    jobs("/").then((response) => setJobList(response.data));
  }, []);

  const filtJob = jobList.filter((value) => value.title.includes(search));

  return (
    <div className="max-w-3xl mx-auto mt-10 p-5 border rounded-lg shadow-md bg-white">
      <h1 className="text-3xl font-bold text-center mb-5">Job Search</h1>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search jobs"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full py-2 px-4 border rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
        />
      </div>
      <ul className="space-y-4">
        {filtJob.map((value) => (
          <li
            key={value.id}
            className="p-4 bg-gray-100 border rounded-lg shadow-sm hover:bg-gray-200"
          >
            <span className="text-lg font-medium text-gray-800">{value.title}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default JobSearch;
