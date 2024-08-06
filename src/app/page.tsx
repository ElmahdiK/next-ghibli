"use client";

import { useState, useEffect } from "react";
import Creations from "@/components/Creations";
// import Header from '@/components/Header';

export default function Page() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState(null);
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
      <header className="flex flex-col items-center justify-center bg-white p-4 sm:flex-row md:flex-row ">
        <p className="text-center">
          <select
            className="text-center text-2xl font-semibold outline-0"
            onChange={(e) => setMangaIndex(parseInt(e.target.value))}
          >
            {/* {data.map((manga) => {
              <option value={manga.name}>{manga.name}</option>;
            })} */}
            {/* {data[mangaIndex].map((e, index) => (
              <option key={e.id} value={index}>
                {e.name}
              </option>
            ))} */}
            {data &&
              data.length > 0 &&
              data.map((item) => (
                <option key={item.id} value={item.id}>
                  {item.name} x{item.quantity}
                </option>
              ))}
          </select>
          <br />
          <span className="text-sm">
            {"{ "} imagined by the Ghibli studio {" }"}{" "}
          </span>
        </p>
      </header>
      {data && data.length > 0 && (
        <Creations
          name={data[mangaIndex].name}
          quantity={data[mangaIndex].quantity}
        />
      )}
    </>
  );
}
