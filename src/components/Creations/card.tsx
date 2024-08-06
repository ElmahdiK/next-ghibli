import Image from "next/image";

interface CardProps {
  name: string;
  index: number;
}

export default function card(props: CardProps) {
  const { name, index } = props;

  return (
    <div
      id={`div-${index}`}
      key={`div-${index}`}
      className={`m-auto w-full bg-white p-4 shadow-md`}
    >
      <Image
        src={`./${name}/${index}.webp`}
        alt={`${name}_${index}`}
        width={300}
        height={300}
      />

      {/* <img
        src={`./${name}/${index}.webp`}
        alt={`${name}_${index}`}
        className="h-300 w-full object-cover"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = "./not-found.jpeg";
        }}
      /> */}
    </div>
  );
}
