import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {
  const data = useLoaderData();
  // const [data, setData] = useState([])
  // useEffect(() => {
  //  fetch('https://api.github.com/users/md0011')
  //  .then(response => response.json())
  //  .then(data => {
  //     console.log(data);
  //     setData(data)
  //  })
  // }, [])

  return (
    <div className="flex flex-col justify-center items-center gap-y-5 m-4 bg-gray-600 text-white p-4">
      <h1 className="text-3xl">GitHub</h1>
      <img src={data.avatar_url} alt="Git picture" width={300} />
      <span className="text-xl">Name: {data.name}</span>
      <span className="text-xl">Bio: {data.bio}</span>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/md0011");
  return response.json();
};
