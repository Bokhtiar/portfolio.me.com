import { ICard } from "@/types/card.type";

import * as Ci from "react-icons/ci";
import { VscMailRead } from "react-icons/vsc";
import { BsCheckCircle } from "react-icons/bs";

export const Card: React.FC<ICard> = (props: ICard): JSX.Element => {
  return (
    <div className="border rounded border-gray-800 py-9 mb-6 px-4">
      {props.index === "1" ? (
        <Ci.CiLocationArrow1 className=" text-secondary text-xl mx-auto" />
      ) : (
        ""
      )}
      {props.index === "2" ? (
        <Ci.CiPhone className=" text-secondary text-xl mx-auto" />
      ) : (
        ""
      )}
      {props.index === "3" ? (
        <VscMailRead className=" text-secondary text-xl mx-auto" />
      ) : (
        ""
      )}
      {props.index === "4" ? (
        <BsCheckCircle className=" text-secondary text-xl mx-auto" />
      ) : (
        ""
      )}

      <span className=" text-secondary text-xl mx-auto"></span>
      <p className=" text-center text-gray-300 text-[16px] mt-3">
        {props.info}
      </p>
    </div>
  );
};
