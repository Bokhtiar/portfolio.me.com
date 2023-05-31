import { IResume } from "@/types/resume.type";

export const Resume: React.FC<IResume> = (props: IResume): JSX.Element => {
  return (
    <li className="mb-10 ml-6">
      <span className="absolute flex items-center justify-center w-8 h-8 bg-green-200 rounded-full -left-4 ring-4 ring-white dark:ring-gray-900 dark:bg-green-900">
        <svg
          aria-hidden="true"
          className="w-5 h-5 text-green-500 dark:text-green-400"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
            clip-rule="evenodd"
          ></path>
        </svg>
      </span>
      <h3 className="font-medium leading-tight text-3xl text-white">
        {props.name_of_institute}
      </h3>
      <p className="text-sm ml-7 mt-6 mb-24">
        <span className="text-xl text-white">
          {props.title}
        </span>
        <br />
        <span className="text-sm text-gray">{props.year}</span>
        <br />
        <span className="text-sm text-secondary">{props.skill ? props.skill : props.result}</span>
      </p>
    </li>
  );
};
