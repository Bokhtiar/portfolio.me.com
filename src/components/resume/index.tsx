import Image from "next/image";
import { IResume } from "@/types/resume.type";

export const Resume: React.FC<IResume> = (props: IResume): JSX.Element => {
  return (
    <li className="mb-10 ml-6">
      <span className="absolute flex items-center justify-center w-8 h-8  rounded-full -left-4 ring-4 bg-white ring-white dark:ring-gray-900 dark:bg-green-900">
        <Image
          src="/images/office.png"
          width={40}
          height={4}
          alt="Picture of the author"
          className="rounded-full p-1"
        />
      </span>
      <h3 className="font-medium leading-tight text-lg md:text-3xl text-white">
        {props.name_of_institute}
      </h3>
      <p className="text-sm ml-7 mt-6 mb-24">
        <span className="text-sm md:text-xl text-white">{props.title}</span>
        <br />
        <span className="text-sm text-gray">{props.year}</span>
        <br />
        <span className="text-sm text-secondary">
          {props.skill ? props.skill : props.result}
        </span>
      </p>
    </li>
  );
};
