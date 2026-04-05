import Image from "next/image";
import { IDo } from "../../types/do.type";

export const Do: React.FC<IDo> = (props: IDo): JSX.Element => {
  return (
    <div className="text-center ">
      <div className="p-1 py-12 ">
        {/* logo or icon */}
        {props.icon != null ? (
          <div
            className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border-[2px] border-red-500 bg-white p-1 text-primary"
            aria-hidden
          >
            {props.icon}
          </div>
        ) : (
          <Image
            src={props.logo ?? ""}
            width={40}
            height={40}
            alt=""
            className="rounded-full bg-white mx-auto border-[2px] border-red-500 p-1"
          />
        )}
        {/* title */}
        <h2 className="my-5 md:text-xl xl:text-2xl font-semibold">
          {props.title}
        </h2>
        {/* description */}
        <p className="text-base text-gray-400">{props.description}</p>
      </div>
    </div>
  );
};
