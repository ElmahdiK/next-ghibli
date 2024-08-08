"use client";

import { useState, useEffect } from "react";
import Creations from "@/components/Creations";
// import Header from '@/components/Header';

export default function Page() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<any[]>([]);
  const [mangaIndex, setMangaIndex] = useState(0);

  const fetchData = async () => {
    try {
      const response = await fetch("./data.json");
      const jsonData = await response.json();
      console.log("jsonData", jsonData);
      setData(jsonData);
      setLoading(false);
      return jsonData;
    } catch (error) {
      console.log("error", error);
      return error;
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <>
      <header className="flex flex-col items-center justify-center bg-white shadow-md  p-4 sm:flex-row md:flex-row ">
        <p className="text-center">
          <select
            className="text-center text-2xl font-semibold outline-0 bg-transparent"
            onChange={(e) => setMangaIndex(parseInt(e.target.value))}
          >
            {data &&
              data.length > 0 &&
              data.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name}
                </option>
              ))}
          </select>
          <br />
          <h1 className="text-sm">
            {"{ "} imagined by the Ghibli studio {" }"}{" "}
          </h1>
        </p>
      </header>
      {data && data.length > 0 && (
        <Creations
          name={data[mangaIndex].name}
          path={data[mangaIndex].path}
          quantity={data[mangaIndex].quantity}
        />
      )}
    </>
  );
}
