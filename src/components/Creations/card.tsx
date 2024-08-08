import Image from "next/image";

interface CardProps {
  name: string;
  path: string;
  index: number;
}

export default function card(props: CardProps) {
  const { name, path, index } = props;

  return (
    <div
      id={`div-${index}`}
      key={`div-${index}`}
      className={`m-auto w-full bg-white p-4 shadow-md flex justify-center items-center`}
    >
      <Image
        src={`./${path}/${index}.webp`}
        alt={`${index}_${name}`}
        width={0}
        height={0}
        style={{ width: "100%", height: "auto" }}
      />
    </div>
  );
}
