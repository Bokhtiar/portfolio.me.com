import Image from "next/image";
import { IWork } from "../../types/work.type";
export const Work: React.FC<IWork> = (props: IWork): JSX.Element => {
  return (
    <div>
      <div className=" s text-white bg-primary px-8 py-4 rounded-md my-[0px]">
        <Image
          src={props.image}
          width={250}
          height={250}
          alt="Picture of the author"
          className="mx-auto w-full"
        />
        <div className="flex items-center justify-between my-3 ">
          <a href={props.website_link} className="text-gray-400 text-[13px]">
            Website link
          </a>
          <span className="text-gray-400 text-[13px]">{props.category}</span>
        </div>
        <a href="" className="text-gray-300 text-sm text-center">
          {props.name}
        </a>
      </div>
    </div>
  );
};
