"use client";

import Card from "./card";

interface CreationsProps {
  name: string;
  path: string;
  quantity: number;
}

export default function Creations(props: CreationsProps) {
  const { name, path, quantity } = props;

  return (
    <div
      key={name}
      className="m-20 grid grid-flow-row grid-cols-1 items-stretch justify-center gap-10 sm:grid-cols-4 md:grid-cols-4"
    >
      {[...Array(quantity)].map((_, i) => (
        <Card key={Math.random()} name={name} path={path} index={i + 1} />
      ))}
    </div>
  );
}
