"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import Creations from "@/components/Creations";
// import Header from '@/components/Header';

export default function Page() {
  // const [mangaIndex, setMangaIndex] = useState<any | null>(null);
  const mangaIndex = 0;

  const [data, setData] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((mangas) => {
        console.log(mangas);
        setData(mangas);
        setLoading(false);
      });
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (!data) return <p>No profile data</p>;

  return (
    <>
      <header className="flex flex-col items-center justify-center bg-white p-4 sm:flex-row md:flex-row ">
        <p className="text-center">
          <select
            className="text-center text-2xl font-semibold outline-0"
            // onChange={(e) => setMangaIndex(e.target.value)}
          >
            {/* {data[mangaIndex].map((e, index) => (
              <option key={e.id} value={index}>
                {e.name}
              </option>
            ))} */}
          </select>
          <br />
          <span className="text-sm">
            {"{ "} imagined by the Ghibli studio {" }"}{" "}
          </span>
        </p>
      </header>
      <Creations manga={data[mangaIndex || 0]} />
    </>
  );
}
