import Link from "next/link";

const Skill = ({
  i,
  name,
  href,
}: {
  i: number;
  name: string;
  href?: string;
}) => {
  return (
    <div className="border-b py-6">
      <div className="flex gap-12">
        <span className="text-lg">0{i + 1}</span>
        <div className="whitespace-pre-wrap tracking-tighter leading-snug w-full">
          {name}
          {href && (
            <Link
              href={href}
              className="flex text-base items-center justify-between mt-5 tracking-normal"
            >
              <span>Explore</span>
              <svg
                width="10"
                height="10"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.1546 2.34541C24.1546 1.51698 23.483 0.845412 22.6546 0.845412H9.15459C8.32616 0.845412 7.65459 1.51698 7.65459 2.34541C7.65459 3.17384 8.32616 3.84541 9.15459 3.84541L21.1546 3.84541L21.1546 15.8454C21.1546 16.6738 21.8262 17.3454 22.6546 17.3454C23.483 17.3454 24.1546 16.6738 24.1546 15.8454V2.34541ZM3.06066 24.0607L23.7152 3.40607L21.5939 1.28475L0.93934 21.9393L3.06066 24.0607Z"
                  fill="white"
                />
              </svg>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Skill;
