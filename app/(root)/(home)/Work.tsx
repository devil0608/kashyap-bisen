import Image from "next/image";

const Work = ({
  left,
  work,
}: {
  left: boolean;
  work: { name: string; description: string; image: string };
}) => {
  return (
    <div className={`mb-28 font-light text-xl z-10 ${left ? "" : "self-end"}`}>
      <Image
        className="w-[30vw] h-[31vw]"
        src={work.image}
        width={500}
        height={500}
        alt={""}
      />
      <p className="text-accent mt-4">{work.name}</p>
      <p>{work.description}</p>
    </div>
  );
};
export default Work;
