import Image from "next/image";
import { VscQuote } from "react-icons/vsc";
import { ITestimonial } from "@/types/testimonial.type";
export const Testimonial: React.FC<ITestimonial> = (
  props: ITestimonial
): JSX.Element => {
  return (
    <div className="s text-white bg-primary px-8 py-4 rounded-md my-[0px]">
      {/* rating with coma */}
      <div className="flex items-center gap-4">
        <Image
          src={props.image}
          width={64}
          height={64}
          alt="Picture of the author"
          className="rounded-full"
        />
        <div>
          <span className=" text-white text-xl font-semibold">
            {props.name}
          </span>
          <br />
          <span className="text-gray-400">{props.designation}</span>
        </div>
      </div>

      {/* text */}
      <div className="my-10">
        <VscQuote className=" text-secondary float-left mr-2"></VscQuote>
        {props.description}
        <VscQuote className=" text-secondary rotate-180 float-right"></VscQuote>
      </div>
    </div>
  );
};
