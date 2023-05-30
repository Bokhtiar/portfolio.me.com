import Image from "next/image";
import { IDo } from "../../types/do.type";

export const Do: React.FC<IDo> = (props: IDo): JSX.Element => {
  return (
    <div className="p-8">
      {/* logo */}
      <Image
        src={props.logo}
        width={40}
        height={40}
        alt="Picture of the author"
        className="rounded-full bg-white "
      />
      {/* title */}
      <h2 className="my-5 text-3xl font-semibold">{props.title}</h2>
      {/* description */}
      <p className="text-base text-gray-400">
        {props.description}
      </p>
    </div>
  );
};
