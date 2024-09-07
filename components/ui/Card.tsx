import Image, { StaticImageData } from "next/image";

type CardProps = {
  item: {
    src: StaticImageData;
    alt: string;
    title: string;
    description: string;
  };
  key: number;
};

export default function Card({ item, key }: CardProps) {
  return (
    <div
      className="flex flex-col gap-10 py-10 px-4 w-full md:w-[25%] items-center justify-center bg-primary/70 hover:bg-primary/50 rounded-xl"
      key={key}
    >
      <Image src={item.src} alt={item.alt} className="h-20 w-20 object-cover" />
      <div className="flex flex-col gap-4 items-center justify-center">
        <h4 className="text-3xl md:text-5xl font-bold">{item.title}</h4>
        <p className="text-xs w-[70%] text-center">{item.description}</p>
      </div>
    </div>
  );
}
