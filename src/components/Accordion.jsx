import { useState } from "react";
import { FiMinusCircle, FiPlusCircle } from "react-icons/fi";
import { Accordion as AccordionArr } from "../data";

const Accordion = () => {
  const [selectedID, setSelectedID] = useState(1);

  const handleToggle = (id) => {
    setSelectedID(id !== selectedID ? id : null);
  };
  return (
    <div className="">
      {AccordionArr.map(({ id, title, text }) => (
        <div
          key={id}
          className={`${
            selectedID === id &&
            "bg-gray-50 border border-gray200 rounded-2xl py-4"
          } cursor-pointer pt-6 px-4`}
          onClick={() => handleToggle(id)}
        >
          <div
            className={`${
              selectedID !== id && "after:bg-gray200"
            }  after:h-[1px] after:w-full after:block after:mt-6`}
          >
            <div className="flex items-start justify-between gap-x-4">
              <span className="text-lg text-gray900">{title}</span>
              <div className="">
                <FiMinusCircle
                  className={`${
                    selectedID !== id ? "hidden" : "flex"
                  } text-lg text-gray400`}
                />
                <FiPlusCircle
                  className={`${
                    selectedID === id ? "hidden" : "flex"
                  } text-lg text-gray400`}
                />
              </div>
            </div>
          </div>
          {selectedID === id && (
            <p className="w-[85%] text-gray600 font-inter400 max-md:w-full">{text}</p>
          )}
        </div>
      ))}
    </div>
  );
};
export default Accordion;
